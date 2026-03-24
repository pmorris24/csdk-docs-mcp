#!/bin/bash
# Update CSDK docs from the official Sisense Compose SDK monorepo.
#
# Usage:
#   ./scripts/update-docs.sh
#   ./scripts/update-docs.sh --branch dev    # use a specific branch
#
# Clones the docs-md/sdk/ directory from the monorepo, builds a chunks.json
# from the raw markdown files (split by headings), and replaces the existing
# chunks.json. No playground URL needed.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
MONOREPO="https://github.com/sisense/compose-sdk-monorepo.git"
BRANCH="main"

# Parse optional --branch flag
while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch) BRANCH="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

echo "Fetching docs from sisense/compose-sdk-monorepo (branch: $BRANCH)..."

# Create temp dir for clone
TMPDIR=$(mktemp -d /tmp/csdk-monorepo.XXXXXX)
trap "rm -rf $TMPDIR" EXIT

# Sparse checkout: only docs-md/sdk/
git clone --depth 1 --branch "$BRANCH" --filter=blob:none --sparse \
  "$MONOREPO" "$TMPDIR/repo" 2>&1 | tail -1
cd "$TMPDIR/repo"
git sparse-checkout set docs-md/sdk 2>/dev/null
cd - >/dev/null

SRC="$TMPDIR/repo/docs-md/sdk"

if [ ! -d "$SRC" ]; then
  echo "ERROR: docs-md/sdk/ not found in monorepo clone"
  exit 1
fi

echo "Source fetched. Building chunks.json..."

# ── Build chunks.json from all markdown files ──
# Uses bash + awk to split by headings into ~2000-char chunks,
# outputting JSON array of {text, source, heading} objects.

CHUNKS_FILE="$REPO_DIR/chunks.json"
CHUNK_TMPDIR="$TMPDIR/chunks"
mkdir -p "$CHUNK_TMPDIR"

# Find all .md files (excluding index.md, images)
find "$SRC" -name '*.md' -not -name 'index.md' -not -name 'CHANGELOG.md' -not -path '*/img/*' | sort > "$TMPDIR/md_files.txt"

FILE_COUNT=$(wc -l < "$TMPDIR/md_files.txt" | tr -d ' ')
echo "  Found $FILE_COUNT markdown files"

# Process each file: split by headings, chunk into ~2000 char pieces
# Output: one JSON line per chunk
CHUNK_COUNT=0

# Start JSON array
echo "[" > "$CHUNKS_FILE"
FIRST_CHUNK=true

while IFS= read -r filepath; do
  # Compute source name relative to docs-md/sdk/
  # Map to legacy source names for backward compat with MCP server FRAMEWORK_SOURCES
  rel_path="${filepath#$SRC/}"

  # Determine source label
  case "$rel_path" in
    getting-started/*|guides/*|tutorials/*|reference/*|troubleshooting/*)
      source_name="csdk_guides.md"
      ;;
    modules/sdk-ui/*)
      source_name="csdk_api_sdk_ui.md"
      ;;
    modules/sdk-ui-vue/*)
      source_name="csdk_api_sdk_ui_vue.md"
      ;;
    modules/sdk-ui-angular/*)
      source_name="csdk_api_sdk_ui_angular.md"
      ;;
    modules/sdk-data/*)
      source_name="csdk_api_sdk_data.md"
      ;;
    *)
      source_name="$rel_path"
      ;;
  esac

  # Read the file and split into chunks by h1 headings
  # Each section starts at a "# " line
  current_heading="General"
  current_text=""

  while IFS= read -r line; do
    # Check if this is a heading line
    if [[ "$line" =~ ^#\ (.+) ]]; then
      # Flush current chunk if we have content
      if [ ${#current_text} -gt 50 ]; then
        # Output chunk as JSON
        # Escape JSON special chars
        escaped_text=$(printf '%s' "$current_text" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
        escaped_heading=$(printf '%s' "$current_heading" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
        escaped_source=$(printf '%s' "$source_name" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')

        if [ "$FIRST_CHUNK" = true ]; then
          FIRST_CHUNK=false
        else
          echo "," >> "$CHUNKS_FILE"
        fi
        printf '{"text":%s,"source":%s,"heading":%s}' "$escaped_text" "$escaped_source" "$escaped_heading" >> "$CHUNKS_FILE"
        CHUNK_COUNT=$((CHUNK_COUNT + 1))
      fi

      current_heading="${BASH_REMATCH[1]}"
      current_text="$line"$'\n'
    else
      current_text+="$line"$'\n'
    fi

    # If current_text is getting large, flush as a chunk and continue
    if [ ${#current_text} -gt 2500 ]; then
      if [ ${#current_text} -gt 50 ]; then
        escaped_text=$(printf '%s' "$current_text" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
        escaped_heading=$(printf '%s' "$current_heading" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
        escaped_source=$(printf '%s' "$source_name" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')

        if [ "$FIRST_CHUNK" = true ]; then
          FIRST_CHUNK=false
        else
          echo "," >> "$CHUNKS_FILE"
        fi
        printf '{"text":%s,"source":%s,"heading":%s}' "$escaped_text" "$escaped_source" "$escaped_heading" >> "$CHUNKS_FILE"
        CHUNK_COUNT=$((CHUNK_COUNT + 1))
      fi
      current_text=""
    fi
  done < "$filepath"

  # Flush remaining content
  if [ ${#current_text} -gt 50 ]; then
    escaped_text=$(printf '%s' "$current_text" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
    escaped_heading=$(printf '%s' "$current_heading" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
    escaped_source=$(printf '%s' "$source_name" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')

    if [ "$FIRST_CHUNK" = true ]; then
      FIRST_CHUNK=false
    else
      echo "," >> "$CHUNKS_FILE"
    fi
    printf '{"text":%s,"source":%s,"heading":%s}' "$escaped_text" "$escaped_source" "$escaped_heading" >> "$CHUNKS_FILE"
    CHUNK_COUNT=$((CHUNK_COUNT + 1))
  fi

done < "$TMPDIR/md_files.txt"

# Close JSON array
echo "" >> "$CHUNKS_FILE"
echo "]" >> "$CHUNKS_FILE"

CHUNKS_SIZE=$(du -h "$CHUNKS_FILE" | cut -f1)
echo ""
echo "Done! Built $CHUNK_COUNT chunks ($CHUNKS_SIZE)"
echo ""
echo "Next step: rebuild the MCP server"
echo "  npm run build"

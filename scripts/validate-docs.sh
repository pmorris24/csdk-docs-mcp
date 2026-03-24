#!/bin/bash
# Validate CSDK documentation completeness and integrity.
# Run after update-docs.sh to verify docs are correct.
#
# Usage: ./scripts/validate-docs.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCS_DIR="$REPO_DIR/docs"
CHUNKS="$REPO_DIR/chunks.json"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

pass() { echo -e "${GREEN}PASS${NC} $1"; }
warn() { echo -e "${YELLOW}WARN${NC} $1"; WARNINGS=$((WARNINGS + 1)); }
fail() { echo -e "${RED}FAIL${NC} $1"; ERRORS=$((ERRORS + 1)); }

echo "=== CSDK Docs Validation ==="
echo ""

# 1. Check chunks.json exists and has content
echo "--- chunks.json ---"
if [ -f "$CHUNKS" ]; then
  CHUNK_COUNT=$(python3 -c "import json; print(len(json.load(open('$CHUNKS'))))" 2>/dev/null || echo "0")
  if [ "$CHUNK_COUNT" -gt 1000 ]; then
    pass "chunks.json has $CHUNK_COUNT chunks"
  elif [ "$CHUNK_COUNT" -gt 0 ]; then
    warn "chunks.json has only $CHUNK_COUNT chunks (expected 1500+)"
  else
    fail "chunks.json is empty or invalid"
  fi

  # Check chunk size
  CHUNKS_SIZE=$(du -k "$CHUNKS" | cut -f1)
  if [ "$CHUNKS_SIZE" -gt 1000 ]; then
    pass "chunks.json is ${CHUNKS_SIZE}KB"
  else
    warn "chunks.json is only ${CHUNKS_SIZE}KB (expected 2000+KB)"
  fi
else
  fail "chunks.json not found"
fi
echo ""

# 2. Check structured docs directory
echo "--- Structured docs ---"
EXPECTED_CATEGORIES=("guides" "react" "vue" "angular" "data")
for cat in "${EXPECTED_CATEGORIES[@]}"; do
  CAT_DIR="$DOCS_DIR/$cat"
  if [ -d "$CAT_DIR" ]; then
    FILE_COUNT=$(ls "$CAT_DIR"/*.md 2>/dev/null | grep -v INDEX.md | wc -l | tr -d ' ')
    if [ "$FILE_COUNT" -gt 0 ]; then
      pass "$cat/ has $FILE_COUNT doc files"
    else
      fail "$cat/ exists but has no markdown files"
    fi

    # Check INDEX.md exists
    if [ -f "$CAT_DIR/INDEX.md" ]; then
      pass "$cat/INDEX.md exists"
    else
      warn "$cat/INDEX.md missing"
    fi
  else
    fail "$cat/ directory missing"
  fi
done
echo ""

# 3. Check for expected key files
echo "--- Key files ---"
KEY_FILES=(
  "guides/authentication.md"
  "guides/chart-types.md"
  "guides/embedded-dashboards.md"
  "guides/drilldown.md"
  "react/charts.md"
  "react/dashboards.md"
  "react/chart-interfaces.md"
  "vue/charts.md"
  "vue/dashboards.md"
  "angular/charts.md"
  "angular/dashboards.md"
  "data/factories.md"
)
for f in "${KEY_FILES[@]}"; do
  if [ -f "$DOCS_DIR/$f" ]; then
    SIZE=$(du -k "$DOCS_DIR/$f" | cut -f1)
    if [ "$SIZE" -gt 0 ]; then
      pass "$f (${SIZE}KB)"
    else
      warn "$f is empty"
    fi
  else
    fail "$f missing"
  fi
done
echo ""

# 4. Check for @internal / @sisenseInternal leaks
echo "--- Tag audit ---"
INTERNAL_COUNT=$(grep -rl '@internal\|@sisenseInternal\|Badge type="internal"' "$DOCS_DIR" 2>/dev/null | wc -l | tr -d ' ')
if [ "$INTERNAL_COUNT" -eq 0 ]; then
  pass "No @internal/@sisenseInternal content found"
else
  fail "$INTERNAL_COUNT files contain @internal/@sisenseInternal content"
  grep -rl '@internal\|@sisenseInternal' "$DOCS_DIR" 2>/dev/null | while read f; do
    echo "       $(basename $f)"
  done
fi

BETA_COUNT=$(grep -rl 'Badge type="beta"\|Badge type="alpha"\|@beta\|@alpha' "$DOCS_DIR" 2>/dev/null | wc -l | tr -d ' ')
if [ "$BETA_COUNT" -gt 0 ]; then
  warn "$BETA_COUNT files contain @beta/@alpha content (will be flagged with warnings)"
else
  pass "No @beta/@alpha content found"
fi
echo ""

# 5. Check for framework parity
echo "--- Framework parity ---"
REACT_COUNT=$(ls "$DOCS_DIR/react/"*.md 2>/dev/null | grep -v INDEX.md | wc -l | tr -d ' ')
VUE_COUNT=$(ls "$DOCS_DIR/vue/"*.md 2>/dev/null | grep -v INDEX.md | wc -l | tr -d ' ')
ANGULAR_COUNT=$(ls "$DOCS_DIR/angular/"*.md 2>/dev/null | grep -v INDEX.md | wc -l | tr -d ' ')

echo "  React: $REACT_COUNT files, Vue: $VUE_COUNT files, Angular: $ANGULAR_COUNT files"
if [ "$REACT_COUNT" -eq "$VUE_COUNT" ] && [ "$VUE_COUNT" -eq "$ANGULAR_COUNT" ]; then
  pass "All frameworks have equal file counts"
else
  warn "Framework file counts differ (React=$REACT_COUNT, Vue=$VUE_COUNT, Angular=$ANGULAR_COUNT)"
fi
echo ""

# 6. Verify MCP server builds
echo "--- Build check ---"
if [ -f "$REPO_DIR/dist/index.js" ]; then
  pass "dist/index.js exists"
else
  fail "dist/index.js missing — run 'npm run build'"
fi

# Check if source is newer than dist
if [ -f "$REPO_DIR/src/index.ts" ] && [ -f "$REPO_DIR/dist/index.js" ]; then
  if [ "$REPO_DIR/src/index.ts" -nt "$REPO_DIR/dist/index.js" ]; then
    warn "src/index.ts is newer than dist/index.js — rebuild needed"
  else
    pass "dist is up to date with source"
  fi
fi
echo ""

# 7. Version tracking
echo "--- Version info ---"
if command -v git &>/dev/null && [ -d "$REPO_DIR/.git" ]; then
  LAST_UPDATE=$(git -C "$REPO_DIR" log -1 --format="%ai" -- docs/ chunks.json 2>/dev/null || echo "unknown")
  echo "  Last doc update: $LAST_UPDATE"
  COMMIT_HASH=$(git -C "$REPO_DIR" log -1 --format="%h" -- docs/ chunks.json 2>/dev/null || echo "unknown")
  echo "  Commit: $COMMIT_HASH"
fi
echo ""

# Summary
echo "=== Summary ==="
TOTAL_DOCS=$(find "$DOCS_DIR" -name "*.md" ! -name "INDEX.md" ! -name "README.md" 2>/dev/null | wc -l | tr -d ' ')
echo "  Total doc files: $TOTAL_DOCS"
echo "  Chunks: $CHUNK_COUNT"
echo -e "  Errors: ${RED}$ERRORS${NC}"
echo -e "  Warnings: ${YELLOW}$WARNINGS${NC}"

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo -e "${RED}Validation failed with $ERRORS error(s).${NC}"
  exit 1
else
  echo ""
  echo -e "${GREEN}Validation passed.${NC}"
  exit 0
fi

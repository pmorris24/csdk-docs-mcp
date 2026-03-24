Design guidance for Sisense chartType="line" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Trend Over Time
Color Guidance: Primary: #0080FF. Multiple series: distinct colors + distinct line styles. Fill: 20% opacity
Accessibility (AA): Differentiate series by line style (solid/dashed/dotted) not color alone. Add pattern overlays for colorblind users.
A11y Fallback: Dashed/dotted lines per series; togglable data table with timestamps and values
When to Use: Data has a time axis; user needs to observe rise/fall trends or rate of change over a continuous period
When NOT to Use: Fewer than 4 data points (use stat card); more than 6 series (visual noise); no time dimension exists
Volume: <1000 pts: SVG; ≥1000 pts: Canvas + downsampling; >10000: aggregate to intervals

Data Type: Time-Series Forecast
Color Guidance: Actual: solid line #0080FF. Forecast: dashed #FF9500. Confidence band: 15% opacity fill same hue
Accessibility (AA): Toggle between actual-only and forecast views. Legend must distinguish lines beyond color (solid vs dashed).
A11y Fallback: Toggle actual/forecast independently; legend labels must include line-style description
When to Use: Historical data + model predictions; communicating uncertainty range to non-technical stakeholders
When NOT to Use: No historical baseline; prediction confidence is too low to be useful; audience is not data-literate
Volume: Keep historical window to 30–90 days for readability; forecast horizon ≤ 30% of visible x-axis range


Design guidance for Sisense chartType="column" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Compare Categories
Color Guidance: Each bar: distinct color. Grouped: same hue family. Always sort descending by value
Accessibility (AAA): Value labels on each bar by default. Sort control for user reordering.
A11y Fallback: Value labels always visible; provide CSV export
When to Use: Comparing discrete categories by magnitude; ranking or ordering is the core insight; categories ≤ 15
When NOT to Use: Categories > 15 (use table or search); data has time dimension (use line); showing proportions (use waffle/stacked)
Volume: <20 categories: vertical bar; 20–50: horizontal bar; >50: paginated table


Design guidance for Sisense chartType="bar" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Compare Categories
Color Guidance: Each bar: distinct color. Grouped: same hue family. Always sort descending by value
Accessibility (AAA): Value labels on each bar by default. Sort control for user reordering.
A11y Fallback: Value labels always visible; provide CSV export
When to Use: Comparing discrete categories by magnitude; ranking or ordering is the core insight; categories ≤ 15
When NOT to Use: Categories > 15 (use table or search); data has time dimension (use line); showing proportions (use waffle/stacked)
Volume: <20 categories: vertical bar; 20–50: horizontal bar; >50: paginated table


Design guidance for Sisense chartType="pie" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Part-to-Whole
Color Guidance: 5–6 max colors. Contrasting palette. Largest slice at 12 o'clock. Always label slices with %
Accessibility (C): Pie charts fail WCAG for colorblind users. Slices rely on color alone. Avoid as primary chart in a11y contexts.
A11y Fallback: Must provide stacked bar alternative + percentage data table as mandatory fallback
When to Use: ≤5 categories; one dominant segment vs rest; emphasis on visual proportion over exact values
When NOT to Use: Categories > 5; slice differences < 5% (visually indistinguishable); user needs precise values; accessibility-first context
Volume: Max 6 slices; beyond that switch to stacked bar 100%


Design guidance for Sisense chartType="scatter" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Correlation / Distribution
Color Guidance: Color axis: gradient (blue → red). Bubble size: relative to 3rd variable. Opacity: 0.6–0.8 to show density
Accessibility (B): Provide data table alternative. Combine color + shape distinction for colorblind users.
A11y Fallback: Data table with correlation coefficient annotation; shape markers (circle/square/triangle) per group
When to Use: Exploring relationship between two continuous variables; identifying clusters or outliers in a dataset
When NOT to Use: Variables are categorical (use grouped bar); fewer than 20 points (patterns aren't meaningful); mobile-primary context
Volume: <500 pts: SVG; 500–5000: Canvas at 0.6–0.8 opacity; >5000: hexbin or aggregate first

Data Type: Geographic Data
Color Guidance: Single color gradient per region group. Categorized colors for discrete types. Legend with clear scale breaks
Accessibility (B): Include text labels for major regions. Provide keyboard navigation between regions.
A11y Fallback: Region text labels; sortable data table by region name and value; keyboard-navigable regions
When to Use: Data has a regional/location dimension; spatial distribution is the core insight for the user
When NOT to Use: Regions have very different sizes making visual comparison misleading (use bar); mobile-primary context
Volume: <1000 regions: SVG; ≥1000: Canvas/WebGL (Deck.gl); global maps: tile-based rendering


Design guidance for Sisense chartType="indicator" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Performance vs Target
Color Guidance: Performance: Red → Yellow → Green gradient. Target: marker line. Threshold zones clearly differentiated
Accessibility (AA): Always show numerical value + % of target as text beside chart. Never rely on color position alone.
A11y Fallback: Numerical value + % of target shown as visible text; ARIA live region for real-time updates
When to Use: Single KPI measured against a defined target or threshold; dashboard summary context
When NOT to Use: No target or benchmark exists; comparing multiple KPIs at once (use bullet chart grid)
Volume: Single metric per gauge; for 3+ KPIs use bullet chart grid layout

Data Type: Performance vs Target (Compact)
Color Guidance: Qualitative ranges: #FFCDD2 / #FFF9C4 / #C8E6C9 (bad/ok/good). Performance bar: #1976D2. Target: black 3px marker
Accessibility (AAA): All values always visible as text. Color ranges are labeled with text thresholds not color alone.
A11y Fallback: Numerical values always visible (not hover-only); color ranges labeled with threshold text
When to Use: Dashboard with multiple KPIs side by side; space-constrained contexts where a gauge is too large
When NOT to Use: Single KPI with emphasis (use gauge); data has no defined target range; fewer than 3 KPIs
Volume: Ideal for 3–10 bullet charts in a grid; scales to any count efficiently


Design guidance for Sisense chartType="treemap" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Hierarchical / Nested Data
Color Guidance: Parent nodes: distinct hues. Children: lighter shades of same hue. White separator borders: 2–3px
Accessibility (C): Poor baseline accessibility. Always provide table alternative as primary view. Label all large areas.
A11y Fallback: Collapsible tree table as primary view; treemap as supplementary visual only
When to Use: Showing size relationships within a hierarchy; overview of proportional structure (e.g., budget breakdown)
When NOT to Use: Hierarchy depth > 3 levels (too complex to read); user needs to compare sibling values precisely
Volume: <200 nodes: SVG; 200–1000: Canvas; >1000: paginate or pre-filter before rendering


Design guidance for Sisense chartType="funnel" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Funnel / Flow
Color Guidance: Stages: single color gradient (start → end). Show conversion % between each stage. Highlight biggest drop
Accessibility (AA): Explicit conversion % as text per stage. Stage labels always visible. Linear list view as fallback.
A11y Fallback: Provide linear list view with stage name + count + drop-off %; keyboard traversal
When to Use: Sequential multi-stage process; showing conversion or drop-off rates between defined stages
When NOT to Use: Stages aren't sequential; values don't decrease monotonically (use bar); fewer than 3 stages
Volume: 3–8 stages optimal; beyond 8 stages group minor steps into 'Other'


Design guidance for Sisense chartType="waterfall" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Cumulative Changes
Color Guidance: Increases: #4CAF50. Decreases: #F44336. Start total: #2196F3. End total: #0D47A1. Running total line: dashed
Accessibility (AA): Color + directional arrow icon per bar (not color alone). Labels on every bar.
A11y Fallback: Table with running total column; directional arrow icons per row
When to Use: Showing how individual positive/negative components add up to a final total (e.g., P&L, budget variance)
When NOT to Use: Changes are not additive; more than 12 bars (readability breaks); audience expects a simple total
Volume: 4–12 bars optimal; beyond 12 aggregate minor items into a single 'Other' bar


Design guidance for Sisense chartType="area" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Real-Time Streaming
Color Guidance: Current pulse: #00FF00 (dark theme) or #0080FF (light theme). History: fading opacity. Grid: dark background
Accessibility (B): Pause/resume control required. Current value as large visible text KPI. Respect prefers-reduced-motion.
A11y Fallback: Pause/resume button required; current value shown as large text KPI; prefers-reduced-motion: freeze animation
When to Use: Live monitoring dashboards; IoT/ops data updating at ≥1 Hz; user needs current value at a glance
When NOT to Use: Update frequency < 1/min (use periodic-refresh line chart); flashing content without reduced-motion support
Volume: Canvas/WebGL required. Buffer last 60–300s of data. Downsample older data on scroll


Design guidance for Sisense chartType="sunburst" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Hierarchical Proportional
Color Guidance: Center to outer: darker to lighter hue. Each level 15–20% lighter. Contrasting border between sectors
Accessibility (C): Poor accessibility beyond 2 levels. Mandatory table alternative required for any production use.
A11y Fallback: Collapsible indented list with percentages; breadcrumb trail for current drill-down state
When to Use: Exploring nested proportions where both hierarchy and relative size matter (e.g., org spend breakdown)
When NOT to Use: More than 3 hierarchy levels (outer rings become unreadable); precision matters over overview; mobile
Volume: <100 nodes: SVG; 100–500: Canvas; >500: filter to top N before rendering


Design guidance for Sisense chartType="polar" (via onBeforeRender, Highcharts 10.3.3):
Data Type: Multi-Variable Comparison
Color Guidance: Single dataset: #0080FF at 20% fill. Multiple: distinct hues with 30% fill. Border: full opacity
Accessibility (B): Limit axes to 5–8. Always provide grouped bar chart alternative for precise reading.
A11y Fallback: Grouped bar chart as mandatory alternative; include raw data table
When to Use: Comparing multiple entities across the same fixed set of attributes (e.g., product feature comparison)
When NOT to Use: Axes > 8 (unreadable); values need precise comparison (use grouped bar); audience unfamiliar with radar charts
Volume: 2–3 datasets maximum per chart; 5–8 axes; beyond 8 axes switch to parallel coordinates


Color palette for SaaS (General) (apply via onBeforeRender options.colors and container styleOptions):
Primary: #2563EB | On Primary: #FFFFFF
Secondary: #3B82F6 | Accent: #EA580C
Background: #F8FAFC | Foreground: #1E293B
Card: #FFFFFF | Card Foreground: #1E293B
Muted: #E9EFF8 | Muted Foreground: #64748B
Border: #E2E8F0 | Destructive: #DC2626
Notes: Trust blue + orange CTA contrast [Accent adjusted from #F97316 for WCAG 3:1]

Color palette for Micro SaaS (apply via onBeforeRender options.colors and container styleOptions):
Primary: #6366F1 | On Primary: #FFFFFF
Secondary: #818CF8 | Accent: #059669
Background: #F5F3FF | Foreground: #1E1B4B
Card: #FFFFFF | Card Foreground: #1E1B4B
Muted: #EBEFF9 | Muted Foreground: #64748B
Border: #E0E7FF | Destructive: #DC2626
Notes: Indigo primary + emerald CTA [Accent adjusted from #10B981 for WCAG 3:1]

Color palette for Financial Dashboard (apply via onBeforeRender options.colors and container styleOptions):
Primary: #0F172A | On Primary: #FFFFFF
Secondary: #1E293B | Accent: #22C55E
Background: #020617 | Foreground: #F8FAFC
Card: #0E1223 | Card Foreground: #F8FAFC
Muted: #1A1E2F | Muted Foreground: #94A3B8
Border: #334155 | Destructive: #EF4444
Notes: Dark bg + green positive indicators

Color palette for Analytics Dashboard (apply via onBeforeRender options.colors and container styleOptions):
Primary: #1E40AF | On Primary: #FFFFFF
Secondary: #3B82F6 | Accent: #D97706
Background: #F8FAFC | Foreground: #1E3A8A
Card: #FFFFFF | Card Foreground: #1E3A8A
Muted: #E9EEF6 | Muted Foreground: #64748B
Border: #DBEAFE | Destructive: #DC2626
Notes: Blue data + amber highlights [Accent adjusted from #F59E0B for WCAG 3:1]

Chart type selection based on data type:

Trend Over Time → Line Chart (or Area). Time axis required. <4 points use stat card. >6 series causes noise. Multiple series: distinct colors + distinct line styles (solid/dashed/dotted), not color alone. Fill: 20% opacity for area.

Compare Categories → Bar/Column. Categories ≤15: vertical. 15-50: horizontal. >50: table. Always sort descending by value. Each bar: distinct color. Grouped bars: same hue family.

Part-to-Whole → Pie/Donut (≤5 categories only). >5 categories: use stacked bar 100% or waffle. Label all slices with %. Largest slice at 12 o clock. Pie is poor for accessibility — provide stacked bar fallback.

Correlation → Scatter/Bubble. Need ≥20 points for patterns. Color axis: gradient (cool→warm). Bubble size: 3rd variable. Opacity: 0.6-0.8 for density.

KPI/Target → Indicator (gauge) or Bullet Chart. Single metric vs target. Always show numerical value + % of target as text, never rely on color alone.

Hierarchical → Treemap (≤3 levels). Parent: distinct hues. Children: lighter shades. White separator borders 2-3px.

Cumulative Changes → Waterfall. 4-12 bars optimal. Increases: green. Decreases: red. Totals: blue.

Multi-Variable → Radar/Spider (5-8 axes max, 2-3 datasets max). Always provide grouped bar alternative.

Funnel/Flow → Funnel Chart. 3-8 stages. Show conversion % between stages. Highlight biggest drop.

In Sisense: map these to chartType values: line, area, column, bar, pie, scatter, indicator, treemap, waterfall, funnel, polar, sunburst.

Color rules for chart internals (via onBeforeRender on Highcharts 10.3.3):

SERIES COLORS: 3-7 colors per palette max. Dark theme: saturated colors. Multi-series: perceptually distinct. Grouped bars: same hue family. Sequential: single-hue gradient. Divergent: two-hue with neutral midpoint.

Apply: options.colors = [palette] or options.series.forEach((s,i) => s.color = palette[i]);

BAR/COLUMN: plotOptions.column.borderRadius = 4; borderWidth = 0; pointPadding = 0.1; groupPadding = 0.2;

LINE: plotOptions.line.lineWidth = 2; marker.enabled = false (show on hover); Multi-series: use dashStyle Solid/Dash/Dot per series.

AREA: plotOptions.area.fillOpacity = 0.15; Gradient: fillColor = { linearGradient: {x1:0,y1:0,x2:0,y2:1}, stops: [[0, color+CC], [1, color+00]] };

PIE/DONUT: plotOptions.pie.borderWidth = 0; innerSize = 55%; startAngle = -90; dataLabels.format = {point.name}: {point.percentage:.1f}%

Axis styling (via onBeforeRender, Highcharts 10.3.3):

Always: const xAxis = Array.isArray(options.xAxis) ? options.xAxis[0] : options.xAxis;

X AXIS: labels.style = { color: #94A3B8, fontSize: 11px }; lineColor/tickColor = rgba(255,255,255,0.1); gridLineWidth = 0; title.text = empty.

Y AXIS: labels.style same; gridLineColor = rgba(255,255,255,0.06); gridLineDashStyle = Dash; lineWidth = 0; title.text = empty; tickAmount = 5.

GRIDLINE RULES: Horizontal only (yAxis). Never vertical. Dashed, low-opacity. 4-6 lines max. Dark: rgba(255,255,255,0.05-0.08). Light: rgba(0,0,0,0.08-0.12).

DATA LABELS: plotOptions.series.dataLabels = { enabled: true, color: #94A3B8, style: { textOutline: none, fontSize: 11px } }; Enable on bars ≤10 items and pie always. Disable on line charts and dense bar charts.

Tooltip, legend, accessibility (via onBeforeRender, Highcharts 10.3.3):

TOOLTIP: backgroundColor: #1A1D24, borderColor: rgba(255,255,255,0.12), borderRadius: 8, shadow: false, style: { color: #F1F3F5, fontSize: 12px }. shared: true for multi-series. Use pointFormat with colored dot and formatted value.

LEGEND: itemStyle: { color: #94A3B8, fontWeight: normal, fontSize: 12px }; itemHoverStyle: { color: #F1F3F5 }; symbolRadius: 2. Hide for single-series. >5 series: vertical on right. Never use legend as sole data identifier.

ACCESSIBILITY: Differentiate series beyond color — line style, marker shape, pattern fills. All text ≥11px. WCAG AA contrast minimum. Data labels visible (not hover-only) on small bar counts. Value text alongside visual indicators.

CHART BACKGROUND: options.chart.backgroundColor = transparent; plotBackgroundColor = transparent. Let parent container handle background via styleOptions.

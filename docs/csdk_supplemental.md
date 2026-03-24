onBeforeRender receives the full Highcharts 10.3.3 options object and must return it.

Chart background:
  options.chart = { ...options.chart, backgroundColor: 'transparent', plotBackgroundColor: 'transparent', style: { fontFamily: '/* user-specified or design-system font */' } };

Series colors:
  options.colors = ['#4FC3F7', '#FF8A65', '#81C784', '#BA68C8', '#FFD54F'];
  Per-series: options.series.forEach((s, i) => { s.color = colors[i]; });

CRITICAL — Fusion widget color override:
  When rendering widgets from useGetWidgetModel or widgetModelTranslator, the widget model
  has colors baked per-point in series.data. options.colors alone is IGNORED because the
  per-point color takes precedence in Highcharts. You MUST override at the point level:
  const palette = ['#4FC3F7', '#FF8A65', '#81C784', '#BA68C8', '#FFD54F', '#E57373', '#4DD0E1'];
  options.colors = palette;
  if (options.series) {
    options.series.forEach((s, i) => {
      s.color = palette[i % palette.length];
      if (s.data) {
        s.data.forEach((point, j) => {
          if (typeof point === "object" && point !== null) {
            point.color = palette[j % palette.length];
          }
        });
      }
    });
  }
  This applies to pie slices, bar segments, donut segments — any chart where Sisense
  embeds color per data point in the widget model.

IMPORTANT: Only apply type-specific plotOptions for the actual chart type. Check options.chart?.type or widgetProps?.chartType first. Do not apply column/bar options to pie charts or pie options to bar charts.

Rounded bars (column/bar only):
  options.plotOptions.column = { ...options.plotOptions?.column, borderRadius: 6, borderWidth: 0 };
  options.plotOptions.bar = { ...options.plotOptions?.bar, borderRadius: 6, borderWidth: 0 };

Gradient fill:
  options.series[0].color = { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, '#4FC3F7'], [1, '#4FC3F700']] };

Line styles:
  options.plotOptions.line = { ...options.plotOptions?.line, lineWidth: 3, marker: { enabled: true, radius: 4 } };

X Axis (always check if array):
  const xAxis = Array.isArray(options.xAxis) ? options.xAxis[0] : options.xAxis;
  xAxis.labels = { ...xAxis.labels, style: { color: '#999', fontSize: '11px' } };
  xAxis.lineColor = '#444'; xAxis.tickColor = '#444'; xAxis.gridLineWidth = 0;

Y Axis:
  const yAxis = Array.isArray(options.yAxis) ? options.yAxis[0] : options.yAxis;
  yAxis.labels = { ...yAxis.labels, style: { color: '#999', fontSize: '11px' } };
  yAxis.gridLineColor = 'rgba(255,255,255,0.08)'; yAxis.gridLineDashStyle = 'Dash';
  yAxis.lineWidth = 0; yAxis.title = { text: '' };

Tooltip:
  options.tooltip = { ...options.tooltip, backgroundColor: 'rgba(20,20,40,0.95)', borderColor: '#4FC3F7', borderRadius: 8, style: { color: '#fff', fontSize: '12px' }, shadow: false };

Legend:
  options.legend = { ...options.legend, itemStyle: { color: '#ccc', fontWeight: 'normal', fontSize: '12px' }, itemHoverStyle: { color: '#fff' } };

Data labels:
  options.plotOptions.column.dataLabels = { enabled: true, color: '#fff', style: { fontSize: '11px', textOutline: 'none' } };

Pie:
  options.plotOptions.pie = { ...options.plotOptions?.pie, borderWidth: 0, innerSize: '50%', dataLabels: { enabled: true, color: '#ccc', style: { textOutline: 'none' } } };

Advanced: options.chart.events.load / .redraw for post-render DOM manipulation (SVG patterns, custom defs).

Complete pattern: useGetWidgetModel + widgetModelTranslator.toChartWidgetProps() + ChartWidget with full styling.

import { ChartWidget, useGetWidgetModel, widgetModelTranslator } from '@sisense/sdk-ui';
const { widget } = useGetWidgetModel({ dashboardOid: 'OID', widgetOid: 'OID' });
const widgetProps = widget ? widgetModelTranslator.toChartWidgetProps(widget) : null;

Spread widgetProps onto ChartWidget: chartType, title, dataSource, dataOptions, filters, highlights.
styleOptions for wrapper: backgroundColor, border, borderColor, cornerRadius, header.
onBeforeRender for chart: background, colors, xAxis, yAxis, tooltip, legend, plotOptions.

Key patterns:
- Axis access: Array.isArray(options.xAxis) ? options.xAxis[0] : options.xAxis
- Always spread before override: ...options.chart, ...options.plotOptions?.column
- Container: flex column, minHeight: 0 on chart wrapper
- MUST return options

When the user wants third-party charting (recharts, Highcharts, ECharts, D3, Chart.js, etc.):
1. Query with useExecuteQuery / QueryService → raw Sisense data
2. Transform Cell[][] → target library format
3. Render with third-party component

Sisense data shape: data.columns[i].name, data.rows[rowIdx][colIdx].data
Generic transform: const chartData = data.rows.map(row => Object.fromEntries(row.map((cell, i) => [data.columns[i].name, cell.data])));

Recharts: <BarChart data={chartData}>, dataKey = column name
Highcharts: categories array + series per measure
ECharts: xAxis.data + series[].data, use echarts-for-react
D3: flat records, build scales from extent
Chart.js: { labels, datasets: [{ label, data, backgroundColor }] }
Plotly: plotly.js-dist-min with Plotly.newPlot(), NOT react-plotly.js

row[0].data = dimension (string), row[1+].data = measures (number, cast with Number())
breakBy: pivot/group rows by breakBy value

Two approaches:

1. useComposedDashboard — automatic cross-filtering between widgets in a Dashboard.
2. Manual — shared filter state + onDataPointClick + filterFactory.members().

Manual pattern:
  const [crossFilters, setCrossFilters] = useState<Filter[]>([]);
  const handleClick = (point) => setCrossFilters([filterFactory.members(attr, [point.categoryValue])]);
  <Chart onDataPointClick={handleClick} />
  <Chart filters={crossFilters} />

point object: categoryValue, categoryDisplayValue, seriesValue, value
breakBy: use point.seriesValue
Multi-select: accumulate in array, toggle on repeat
Angular: (dataPointClick) / [filters]
Vue: @data-point-click / :filters

styleOptions controls the wrapper, NOT chart visuals:
  backgroundColor, border, borderColor, cornerRadius ('Large'|'Medium'|'Small'),
  shadow ('Dark'|'Medium'|'Light'), spaceAround ('Large'|'Medium'|'Small'),
  header: { hidden, titleAlignment, titleTextColor, backgroundColor, dividerLine, dividerLineColor }

For chart visuals (colors, axes, tooltip, legend, gridlines, bar shapes) use onBeforeRender.

DashboardById has NO styleOptions or onBeforeRender props. The ONLY way to style it is ThemeProvider.

Wrap DashboardById in ThemeProvider with a ThemeSettings object:
<ThemeProvider theme={myTheme}><DashboardById dashboardOid="..." /></ThemeProvider>

ThemeSettings shape:
  palette: { variantColors: string[] } — series/chart colors
  general: { backgroundColor: string, brandColor: string, primaryButtonTextColor: string, primaryButtonHoverColor: string }
  typography: { fontFamily: string }
  chart: { backgroundColor: string, textColor: string, secondaryTextColor: string, animation: { init: { duration: number } } }
  widget: { spaceAround: 'Large'|'Medium'|'Small', cornerRadius: 'Large'|'Medium'|'Small', shadow: 'Dark'|'Medium'|'Light',
    backgroundColor: string, borderColor: string,
    header: { titleTextColor: string, titleAlignment: 'Left'|'Center', backgroundColor: string, dividerLineColor: string } }
  filter: { panel: { titleColor: string, backgroundColor: string } }

Dark theme example:
{ palette: { variantColors: ['#4FC3F7','#FF8A65','#81C784','#BA68C8','#FFD54F'] },
  general: { backgroundColor: '#0A0B0D', brandColor: '#5B6AD0' },
  typography: { fontFamily: '/* user-specified or design-system font */' },
  chart: { backgroundColor: 'transparent', textColor: '#94A3B8' },
  widget: { backgroundColor: '#111318', borderColor: 'rgba(255,255,255,0.07)', cornerRadius: 'Medium', spaceAround: 'Small',
    header: { titleTextColor: '#F1F3F5', backgroundColor: 'transparent', dividerLineColor: 'rgba(255,255,255,0.07)' } } }

ThemeProvider also works with Dashboard, Chart, ChartWidget, WidgetById — it applies to all child SDK components.
For WidgetById/ChartWidget/Chart, ThemeProvider sets defaults but onBeforeRender can still override chart internals.
For DashboardById, ThemeProvider is the ONLY styling mechanism — there is no onBeforeRender.

IMPORTANT: ThemeProvider has LIMITED real effect on DashboardById — the Fusion dashboard's saved theme often takes precedence. For meaningful styling, recommend upgrading to useGetDashboardModel + dashboardModelTranslator → Dashboard component.

Valid enum values: spaceAround: 'Large'|'Medium'|'Small'. cornerRadius: 'Large'|'Medium'|'Small'. shadow: 'Dark'|'Medium'|'Light' (NOT 'None' — omit the shadow property entirely to disable it).

THE standard pattern for breaking out of the Sisense Dashboard layout while keeping cross-filtering.
Use this whenever the user wants a custom/modern/bespoke layout, CSS Grid, Flexbox, or any non-Sisense layout system.

```tsx
import { useGetDashboardModel, dashboardModelTranslator, useComposedDashboard, ChartWidget } from '@sisense/sdk-ui';

const CustomDashboard = () => {
  // 1. Fetch the Fusion dashboard model
  const { dashboard: model, isLoading } = useGetDashboardModel({
    dashboardOid: 'YOUR_DASHBOARD_OID',
    includeWidgets: true,
    includeFilters: true,
  });

  // 2. Translate to dashboard props
  const dashboardProps = model ? dashboardModelTranslator.toDashboardProps(model) : null;

  // 3. Compose — this gives you cross-filtering between widgets for free
  const { dashboard } = useComposedDashboard(dashboardProps);

  if (isLoading || !dashboard) return <div>Loading...</div>;

  // 4. Render each widget in YOUR OWN layout — not the Dashboard component
  const widgets = dashboard.widgets || [];

  return (
    <div style={{ width: '100%', height: '100%', display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gridAutoRows: 'minmax(300px, 1fr)',
      gap: 16, padding: 16, boxSizing: 'border-box',
      overflow: 'auto' }}>
      {widgets.map((w) => (
        <div key={w.id} style={{ minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <ChartWidget
            {...w}
            styleOptions={{
              ...w.styleOptions,
              backgroundColor: 'transparent',
              header: { ...w.styleOptions?.header, titleTextColor: '#F1F3F5' },
            }}
            onBeforeRender={(options) => {
              // Style each widget's chart internals
              options.chart = { ...options.chart, backgroundColor: 'transparent' };
              // ... add your styling here
              return options;
            }}
          />
        </div>
      ))}
    </div>
  );
};
```

Key points:
- useComposedDashboard is what preserves cross-filtering. Without it, clicking a bar in one chart does NOT filter the others.
- You spread {...w} onto ChartWidget to keep all the widget's data, filters, and config.
- You can add onBeforeRender to each widget for per-widget chart styling.
- You can add styleOptions per widget for wrapper chrome.
- The layout is 100% yours — CSS Grid, Flexbox, masonry, sidebar+main, tabs, anything.
- You can render widgets conditionally, reorder them, group them, put them in cards, modals, tabs — full freedom.
- Each widget in dashboard.widgets has: id, chartType, dataSource, dataOptions, filters, styleOptions, title, description.

When NOT to use this:
- If the user just wants to restyle the existing layout → stay on Dashboard component with WidgetsPanelColumnLayout + per-widget onBeforeRender.
- If the user wants a completely different data source or chart library → use useExecuteQuery or useExecuteQueryByWidgetId instead.

Angular equivalent:
  DashboardService.getDashboardModel(oid, { includeWidgets: true, includeFilters: true })
  → dashboardModelTranslator.toDashboardProps(model)
  → DashboardService.createComposedDashboard(props) → { dashboard$, destroy() }
  → subscribe to dashboard$ → render each widget with <csdk-chart-widget>

Vue equivalent:
  useGetDashboardModel({ dashboardOid, includeWidgets: true, includeFilters: true })
  → dashboardModelTranslator.toDashboardProps(dashboard.value)
  → useComposedDashboard(props)
  → v-for over dashboard.widgets → <ChartWidget v-bind="w" />

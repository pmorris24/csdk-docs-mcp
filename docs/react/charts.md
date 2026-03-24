# Function AreaChart

> **AreaChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component similar to a [`LineChart`](function.LineChart.md),
but with filled in areas under each line and an option to display them as stacked.

): `ReactElement`\< `any`, `any` \> \| `null`

A React component similar to a [`LineChart`](function.LineChart.md),
but with filled in areas under each line and an option to display them as stacked.

## Example

Area chart displaying total revenue per quarter from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Farea-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Area Chart examples:

- [Stacked Area Chart](https://www.sisense.com/developers/playground/?example=charts%2Farea-chart-stacked)
- [Stacked Percentage Area Chart](https://www.sisense.com/developers/playground/?example=charts%2Farea-chart-stacked100)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AreaChartProps`](../interfaces/interface.AreaChartProps.md) | Area chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Area Chart component

# Function AreaRangeChart

> **AreaRangeChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component that displays a range of data over a given time period or across multiple categories.
It is particularly useful for visualizing the minimum and maximum values in a dataset, along with the area between these values.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AreaRangeChartProps`](../interfaces/interface.AreaRangeChartProps.md) | Area Range chart properties |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AreaRangeChartProps`](../interfaces/interface.AreaRangeChartProps.md) | Area Range chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Area Range Chart component

`props` | [`AreaRangeChartProps`](../interfaces/interface.AreaRangeChartProps.md) | Area Range chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Area Range Chart component

## Example

An example of using the component to visualize the `Sample ECommerce` data source:
```ts
    <AreaRangeChart
      dataSet={DM.DataSource}
      dataOptions={{
        category: [DM.Commerce.Date.Months],
        value: [
          {
            title: 'Revenue',
            upperBound: measureFactory.multiply(
              measureFactory.sum(DM.Commerce.Revenue, 'Lower Revenue'),
              0.6,
            ),
            lowerBound: measureFactory.multiply(
              measureFactory.sum(DM.Commerce.Revenue, 'Upper Revenue'),
              1.4,
            ),
          },
          {
            title: 'Cost',
            upperBound: measureFactory.multiply(
              measureFactory.sum(DM.Commerce.Cost, 'Lower Cost'),
              0.9,
            ),
            lowerBound: measureFactory.multiply(
              measureFactory.sum(DM.Commerce.Cost, 'Upper Cost'),
              2.4,
            ),
          },
        ],
        breakBy: [],
      }}
      styleOptions={{
        legend: {
          enabled: true,
          position: 'top',
        },
        lineWidth: {
          width: 'thick',
        },
        yAxis: {
          title: {
            enabled: true,
            text: 'ray style options',
          },
          enabled: true,
          gridLines: true,
          logarithmic: false,
        },
      }}
    />
```

<img src="../../../img/area-range-chart-example-1.png" width="800"/>

',
          },
          enabled: true,
          gridLines: true,
          logarithmic: false,
        },
      }}
    />
```

<img src="../../../img/area-range-chart-example-1.png" width="800"/>

# Function AreamapChart

> **AreamapChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component for visualizing geographical data as colored polygons on a map.

For another way do display data on a map, see [`ScattermapChart`](function.ScattermapChart.md).

## Example

Areamap chart displaying total revenue per country from the Sample ECommerce data model. The total revenue amount is indicated by the colors on the map.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fmap-area&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AreamapChartProps`](../interfaces/interface.AreamapChartProps.md) | Areamap chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Areamap Chart component

# Function BarChart

> **BarChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing categorical data with horizontal rectangular bars,
whose lengths are proportional to the values that they represent.

ops`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing categorical data with horizontal rectangular bars,
whose lengths are proportional to the values that they represent.

## Example

Bar chart displaying total revenue per year from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fbar-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Bar Chart examples:

- [Stacked Bar Chart](https://www.sisense.com/developers/playground/?example=charts%2Fbar-chart-stacked)
- [Stacked Percentage Bar Chart](https://www.sisense.com/developers/playground/?example=charts%2Fbar-chart-stacked100)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`BarChartProps`](../interfaces/interface.BarChartProps.md) | Bar chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Bar Chart component

# Function BoxplotChart

> **BoxplotChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing data in a way that visually describes the distribution,
variability, and center of a data set along an axis.

## Example

Boxplot chart displaying data from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fboxplot-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

rt displaying data from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fboxplot-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`BoxplotChartProps`](../interfaces/interface.BoxplotChartProps.md) | Boxplot chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Boxplot Chart component

# Function CalendarHeatmapChart

> **CalendarHeatmapChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component that visualizes values over days in a calendar-like view,
making it easy to identify daily patterns or anomalies

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`CalendarHeatmapChartProps`](../interfaces/interface.CalendarHeatmapChartProps.md) | Calendar Heatmap chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Calendar Heatmap Chart component

## Example

```ts
<CalendarHeatmapChart
  dataSet={DM.DataSource}
  dataOptions={{
    date: DM.Commerce.Date.Days,
    value: measureFactory.sum(DM.Commerce.Cost)
  }}
  styleOptions={{
    width: 800,
    height: 600,
    viewType: 'quarter'
  }}
/>
```

# Function Chart

> **Chart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component used for easily switching chart types or rendering multiple series of different chart types.

``

# Function Chart

> **Chart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component used for easily switching chart types or rendering multiple series of different chart types.

## Example

A chart component displaying total revenue per quarter from the Sample ECommerce data model. The component is currently set to show the data in a column chart.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts/chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ChartProps`](../interfaces/interface.ChartProps.md) | Chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Chart component representing a chart type as specified in `ChartProps.`[chartType](../interfaces/interface.ChartProps.md#charttype)

# Function ColumnChart

> **ColumnChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing categorical data with vertical rectangular bars
whose heights are proportional to the values that they represent.

The chart can include multiple values on both the X and Y-axis, as well as a break down by categories displayed on the Y-axis.

bars
whose heights are proportional to the values that they represent.

The chart can include multiple values on both the X and Y-axis, as well as a break down by categories displayed on the Y-axis.

## Example

Column chart displaying total revenue per year, broken down by condition, from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fcolumn-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Column Chart examples:

- [Stacked Column Chart](https://www.sisense.com/developers/playground/?example=charts%2Fcolumn-chart-stacked)
- [Stacked Percentage Column Chart](https://www.sisense.com/developers/playground/?example=charts%2Fcolumn-chart-stacked100)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ColumnChartProps`](../interfaces/interface.ColumnChartProps.md) | Column chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Column Chart component

# Function FunnelChart

> **FunnelChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing data progressively decreasing in size or quantity through a funnel shape.

## Example

Funnel chart displaying data from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Ffunnel-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

art displaying data from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Ffunnel-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FunnelChartProps`](../interfaces/interface.FunnelChartProps.md) | Funnel chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Funnel Chart component

# Function IndicatorChart

> **IndicatorChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component that provides various options for displaying one or two numeric values as a number, gauge or ticker.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`IndicatorChartProps`](../interfaces/interface.IndicatorChartProps.md) | Indicator chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Indicator Chart component

| `props` | [`IndicatorChartProps`](../interfaces/interface.IndicatorChartProps.md) | Indicator chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Indicator Chart component

## Example

An example of using the component to visualize the `Sample ECommerce` data source:
```ts
<IndicatorChart
  dataSet={DM.DataSource}
  dataOptions={{
    value: [
      {
        column: measureFactory.sum(DM.Commerce.Revenue),
        numberFormatConfig: {
          name: 'Numbers',
          decimalScale: 2,
          trillion: true,
          billion: true,
          million: true,
          kilo: true,
          thousandSeparator: true,
          prefix: false,
          symbol: '$',
        },
      },
    ],
    secondary: [],
    min: [measureFactory.constant(0)],
    max: [measureFactory.constant(125000000)],
  }}
  filters={[filterFactory.greaterThan(DM.Commerce.Revenue, 1000)]}
  styleOptions={{
    indicatorComponents: {
      title: {
        shouldBeShown: true,
        text: 'Total Revenue',
      },
      secondaryTitle: {
        text: '',
      },
      ticks: {
        shouldBeShown: true,
      },
      labels: {
        shouldBeShown: true,
      },
    },
    subtype: 'indicator/gauge',
    skin: 1,
  }}
/>
```

<img src="../../../img/indicator-chart-example-1.png" width="400px" />

},
      labels: {
        shouldBeShown: true,
      },
    },
    subtype: 'indicator/gauge',
    skin: 1,
  }}
/>
```

<img src="../../../img/indicator-chart-example-1.png" width="400px" />

# Function LineChart

> **LineChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component displaying data as a series of points connected by a line. Used to show trends or changes over time.

## Example

Line chart displaying total revenue per quarter from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fline-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Line Chart examples:

- [Curved Line Chart](https://www.sisense.com/developers/playground/?example=charts%2Fline-chart-spline)
- [Styled Line Chart](https://www.sisense.com/developers/playground/?example=charts%2Fline-chart-styled)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`LineChartProps`](../interfaces/interface.LineChartProps.md) | Line chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Line Chart component

# Function PieChart

> **PieChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component representing data in a circular graph with the data shown as slices of a whole,
with each slice representing a proportion of the total.

`ReactElement`\< `any`, `any` \> \| `null`

A React component representing data in a circular graph with the data shown as slices of a whole,
with each slice representing a proportion of the total.

## Example

Pie chart displaying total revenue per age range from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fpie-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Pie Chart examples:

- [Donut Pie Chart](https://www.sisense.com/developers/playground/?example=charts%2Fpie-chart-donut)
- [Ring Pie Chart](https://www.sisense.com/developers/playground/?example=charts%2Fpie-chart-ring)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PieChartProps`](../interfaces/interface.PieChartProps.md) | Pie chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Pie Chart component

# Function PolarChart

> **PolarChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component comparing multiple categories/variables with a spatial perspective in a radial chart.

# Function PolarChart

> **PolarChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component comparing multiple categories/variables with a spatial perspective in a radial chart.

## Example

Polar chart displaying total revenue per age range from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fpolar-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Polar Chart examples:

- [Area Polar Chart](https://www.sisense.com/developers/playground/?example=charts%2Fpolar-chart-area)
- [Line Polar Chart](https://www.sisense.com/developers/playground/?example=charts%2Fpolar-chart-line)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PolarChartProps`](../interfaces/interface.PolarChartProps.md) | Polar chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Polar Chart component

---- | :------ |
| `props` | [`PolarChartProps`](../interfaces/interface.PolarChartProps.md) | Polar chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Polar Chart component

# Function ScatterChart

> **ScatterChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component displaying the distribution of two variables on an X-Axis, Y-Axis,
and two additional fields of data that are shown as colored circles scattered across the chart.

**Point**: A field that for each of its members a scatter point is drawn. The maximum amount of data points is 500.

**Size**: An optional field represented by the size of the circles.
If omitted, all scatter points are equal in size. If used, the circle sizes are relative to their values.

## Example

Scatter chart displaying total revenue per category, broken down by gender, from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fscatter-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional Scatter Chart examples:

- [Bubble Scatter Chart](https://www.sisense.com/developers/playground/?example=charts/scatter-chart-bubble)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ScatterChartProps`](../interfaces/interface.ScatterChartProps.md) | Scatter chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Scatter Chart component

------ |
| `props` | [`ScatterChartProps`](../interfaces/interface.ScatterChartProps.md) | Scatter chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Scatter Chart component

# Function ScattermapChart

> **ScattermapChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component that allows to visualize geographical data as data points on a map.

## Example

Scatter map chart displaying cost and revenue rank from the Sample ECommerce data model. The cost is indicated by size of each point and the revenue rank is indicated by the point's size.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fmap-scatter&mode=docs'
 width=1000
 height=900
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ScattermapChartProps`](../interfaces/interface.ScattermapChartProps.md) | Scattermap chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Scattermap Chart component

# Function StreamgraphChart

> **StreamgraphChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component that displays a streamgraph chart.

A streamgraph is a type of stacked area chart where areas are displaced around
a central axis. It is particularly effective for displaying volume across
different categories or over time with a relative scale that emphasizes
overall patterns and trends.

as are displaced around
a central axis. It is particularly effective for displaying volume across
different categories or over time with a relative scale that emphasizes
overall patterns and trends.

## Example

Streamgraph displaying revenue by category over time.

```ts
import { StreamgraphChart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from './sample-ecommerce';

function RevenueByCategoryStreamgraph() {
  return (
    <StreamgraphChart
      dataSet={DM.DataSource}
      dataOptions={{
        category: [DM.Commerce.Date.Quarters],
        value: [measureFactory.sum(DM.Commerce.Revenue, 'Revenue')],
        breakBy: [DM.Category.Category],
      }}
      styleOptions={{
        width: 1200,
        height: 500,
      }}
    />
  );
}
```

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`StreamgraphChartProps`](../interfaces/interface.StreamgraphChartProps.md) | Streamgraph chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Streamgraph Chart component

# Function SunburstChart

> **SunburstChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component displaying hierarchical data in the form of nested circle slices.

This type of chart can be used in different scenarios, for example, to compare both categories and sub-categories.

React component displaying hierarchical data in the form of nested circle slices.

This type of chart can be used in different scenarios, for example, to compare both categories and sub-categories.

## Example

Sunburst chart displaying total revenue, categorized by condition and age range, from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Fsunburst-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`SunburstChartProps`](../interfaces/interface.SunburstChartProps.md) | Sunburst chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Sunburst Chart component

# Function TreemapChart

> **TreemapChart**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

A React component displaying hierarchical data in the form of nested rectangles.

This type of chart can be used instead of a column chart for comparing a large number of categories and sub-categories.

## Example

Tree map chart displaying total revenue, categorized by condition and age range, from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Ftreemap-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

ion and age range, from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=charts%2Ftreemap-chart&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`TreemapChartProps`](../interfaces/interface.TreemapChartProps.md) | Treemap chart properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Treemap Chart component

# Function boxWhiskerProcessResult

> **boxWhiskerProcessResult**(
  `boxWhiskerData`,
  `outliersData`,
  `dataOptions`?): [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md)

Processes box whisker data and outliers data to combine them into a single data set.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `boxWhiskerData` | [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md) | The data for the box whisker. |
| `outliersData` | [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md) | The data for the outliers. |
| `dataOptions`? | [`BoxplotChartCustomDataOptions`](../type-aliases/type-alias.BoxplotChartCustomDataOptions.md) | Optional data options for customizing data processing. |

## Returns

[`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md)

The combined data with outliers included in the box whisker plot.


## Dashboards

omizing data processing. |

## Returns

[`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md)

The combined data with outliers included in the box whisker plot.


## Dashboards

# Dashboards

React components and utilities for working with dashboards

- [ChartWidget](function.ChartWidget.md)
- [Dashboard](function.Dashboard.md)
- [dashboardHelpers](namespace.dashboardHelpers/index.md) - Utility functions to manipulate dashboard elements
- [extractDimensionsAndMeasures](function.extractDimensionsAndMeasures.md)
- [PivotTableWidget](function.PivotTableWidget.md)
- [useComposedDashboard](function.useComposedDashboard.md)
- [useCustomWidgets](function.useCustomWidgets.md)
- [useJtdWidget](function.useJtdWidget.md)
- [Widget](function.Widget.md)

# Namespace dashboardHelpers

Utility functions to manipulate `DashboardProps`

## Index

### Dashboard Utilities

- [applyJtdConfig](functions/function.applyJtdConfig.md)
- [applyJtdConfigs](functions/function.applyJtdConfigs.md)

### Functions

- [addFilter](functions/function.addFilter.md)
- [addFilters](functions/function.addFilters.md)
- [removeFilter](functions/function.removeFilter.md)
- [removeFilters](functions/function.removeFilters.md)
- [replaceFilter](functions/function.replaceFilter.md)
- [replaceFilters](functions/function.replaceFilters.md)

Utility functions to manipulate `DashboardProps`

functions/function.removeFilters.md)
- [replaceFilter](functions/function.replaceFilter.md)
- [replaceFilters](functions/function.replaceFilters.md)

Utility functions to manipulate `DashboardProps`

# Dashboard Utilities

- [applyJtdConfig](function.applyJtdConfig.md)
- [applyJtdConfigs](function.applyJtdConfigs.md)

# Functions

- [addFilter](function.addFilter.md)
- [addFilters](function.addFilters.md)
- [removeFilter](function.removeFilter.md)
- [removeFilters](function.removeFilters.md)
- [replaceFilter](function.replaceFilter.md)
- [replaceFilters](function.replaceFilters.md)

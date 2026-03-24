# Interface AreaChartProps

Props of the [AreaChartComponent](../charts/class.AreaChartComponent.md) component.

## Properties

e the `Chatbot` comoponent initializes.

#### Default

```ts
false
```

# Interface AreaChartProps

Props of the [AreaChartComponent](../charts/class.AreaChartComponent.md) component.

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`AreaStyleOptions`](interface.AreaStyleOptions.md)

Configurations for how to style and present a chart's data.

e-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`AreaStyleOptions`](interface.AreaStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface AreaRangeChartProps

Props of the [AreaRangeChartComponent](../charts/class.AreaRangeChartComponent.md).

## Properties

## Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface AreaRangeChartProps

Props of the [AreaRangeChartComponent](../charts/class.AreaRangeChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`RangeChartDataOptions`](interface.RangeChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`AreaRangeStyleOptions`](interface.AreaRangeStyleOptions.md)

Configurations for how to style and present a chart's data.

the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`AreaRangeStyleOptions`](interface.AreaRangeStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface AreaRangeStyleOptions

Configuration options that define functional style of the various elements of AreaRangeChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### line

> **line**?: [`LineOptions`](../type-aliases/type-alias.LineOptions.md)

Configuration that defines line style

***

### lineWidth

> **lineWidth**?: [`LineWidth`](../type-aliases/type-alias.LineWidth.md)

Configuration that defines line width

::: warning Deprecated
Use line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

e line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`AreaRangeSubtype`](../../sdk-ui/type-aliases/type-alias.AreaRangeSubtype.md)

Subtype of AreaRangeChart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface AreaStyleOptions

Configuration options that define functional style of the various elements of AreaChart

## Properties

/type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface AreaStyleOptions

Configuration options that define functional style of the various elements of AreaChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### line

> **line**?: [`LineOptions`](../type-aliases/type-alias.LineOptions.md)

Configuration that defines line style

***

### lineWidth

> **lineWidth**?: [`LineWidth`](../type-aliases/type-alias.LineWidth.md)

Configuration that defines line width

::: warning Deprecated
Use line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

e line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`AreaSubtype`](../type-aliases/type-alias.AreaSubtype.md)

Subtype of AreaChart

***

### totalLabels

> **totalLabels**?: [`TotalLabels`](../../sdk-ui/type-aliases/type-alias.TotalLabels.md)

Configuration for total labels
Only supported for stacked chart subtypes

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface AreamapChartDataOptions

Configuration for how to query aggregate data and assign data
to geographic features of an Areamap chart.

## Properties

### color

> **color**?: [[`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)]

Measure column (or measure) encoded by the color of the countries (or states) on the map.

***

### geo

> **geo**: [[`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md)]

Column or attribute representing the countries (or states) on the map.

# Interface AreamapChartProps

Props of the [AreamapChartComponent](../charts/class.AreamapChartComponent.md).

## Properties

Column or attribute representing the countries (or states) on the map.

# Interface AreamapChartProps

Props of the [AreamapChartComponent](../charts/class.AreamapChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`AreamapChartDataOptions`](interface.AreamapChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`AreamapStyleOptions`](interface.AreamapStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### dataPointClick

> **dataPointClick**?: [`AreamapDataPointEventHandler`](../type-aliases/type-alias.AreamapDataPointEventHandler.md)

Click handler callback for a data point

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface AreamapStyleOptions

Configuration options that define functional style of the various elements of the AreamapChart component

## Properties

../../sdk-data/interfaces/interface.Data.md)

# Interface AreamapStyleOptions

Configuration options that define functional style of the various elements of the AreamapChart component

## Properties

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### mapType

> **mapType**?: [`AreamapType`](../../sdk-ui/type-aliases/type-alias.AreamapType.md)

Type of map to display on the AreamapChart component

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface BarChartProps

Props of the [BarChartComponent](../charts/class.BarChartComponent.md).

## Properties

pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface BarChartProps

Props of the [BarChartComponent](../charts/class.BarChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StackableStyleOptions`](interface.StackableStyleOptions.md)

Configurations for how to style and present a chart's data.

sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StackableStyleOptions`](interface.StackableStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface BoxplotChartProps

Props of the [BoxplotChartComponent](../charts/class.BoxplotChartComponent.md).

## Properties

|

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface BoxplotChartProps

Props of the [BoxplotChartComponent](../charts/class.BoxplotChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`BoxplotChartCustomDataOptions`](../type-aliases/type-alias.BoxplotChartCustomDataOptions.md) \| [`BoxplotChartDataOptions`](../type-aliases/type-alias.BoxplotChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`BoxplotStyleOptions`](interface.BoxplotStyleOptions.md)

Configurations for how to style and present a chart's data.

sent the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`BoxplotStyleOptions`](interface.BoxplotStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`BoxplotDataPointEventHandler`](../type-aliases/type-alias.BoxplotDataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../type-aliases/type-alias.BoxplotDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface BoxplotStyleOptions

Configuration options that define functional style of the various elements of the BoxplotChart component

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

ighlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`BoxplotSubtype`](../type-aliases/type-alias.BoxplotSubtype.md)

Subtype of the BoxplotChart component

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface CalendarHeatmapChartDataOptions

Configuration for how to query aggregate data and assign data
to a calendar-heatmap chart.

## Properties

### date

> **date**: [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md)

Date column representing dates on the calendar heatmap.

***

operties

### date

> **date**: [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md)

Date column representing dates on the calendar heatmap.

***

### value

> **value**: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Measure column (or measure) assigned to the calendar cells.

# Interface CalendarHeatmapChartProps

Props of the [CalendarHeatmapChartComponent](../charts/class.CalendarHeatmapChartComponent.md) component.

## Properties

sure) assigned to the calendar cells.

# Interface CalendarHeatmapChartProps

Props of the [CalendarHeatmapChartComponent](../charts/class.CalendarHeatmapChartComponent.md) component.

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CalendarHeatmapChartDataOptions`](interface.CalendarHeatmapChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`CalendarHeatmapStyleOptions`](interface.CalendarHeatmapStyleOptions.md)

Configurations for how to style and present a chart's data.

ssed to the chart

***

#### styleOptions

> **styleOptions**?: [`CalendarHeatmapStyleOptions`](interface.CalendarHeatmapStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`CalendarHeatmapDataPointEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`CalendarHeatmapDataPointEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`CalendarHeatmapDataPointsEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface CartesianChartDataOptions

Configuration for how to query aggregate data and assign data
to axes of a [Cartesian chart](../type-aliases/type-alias.CartesianChartType.md).

These charts can include multiple values on both the X and Y-axis,
as well as a break-down by categories displayed on the Y-axis.

Cartesian chart](../type-aliases/type-alias.CartesianChartType.md).

These charts can include multiple values on both the X and Y-axis,
as well as a break-down by categories displayed on the Y-axis.

## Properties

### breakBy

> **breakBy**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) by which to break (group) the data represented in the chart.

Each group is represented by a different visual encoding - for example, color of bars in a bar chart,
and is automatically added to the chart's legend.

***

### category

> **category**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) whose values are placed on the X-axis.

Typically, the X-axis represents descriptive data.

***

### seriesToColorMap

> **seriesToColorMap**?: [`ValueToColorMap`](../type-aliases/type-alias.ValueToColorMap.md)

Optional mapping of each of the series to colors.

***

### value

> **value**: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are scaled to the Y-axis of the chart.

Each measure is represented as a series in the chart.

[`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are scaled to the Y-axis of the chart.

Each measure is represented as a series in the chart.

# Interface CategoricalChartDataOptions

Configuration for how to query aggregate data and assign data
to a [Categorical chart](../type-aliases/type-alias.CategoricalChartType.md).

## Properties

### category

> **category**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) whose values represent categories in the chart.

For funnel charts, only the first 50 categories will be used.

***

### seriesToColorMap

> **seriesToColorMap**?: [`MultiColumnValueToColorMap`](../type-aliases/type-alias.MultiColumnValueToColorMap.md) \| [`ValueToColorMap`](../type-aliases/type-alias.ValueToColorMap.md)

Optional mapping of each of the series to colors.
([MultiColumnValueToColorMap](../type-aliases/type-alias.MultiColumnValueToColorMap.md) used only for the Sunburst Chart component)

***

lorMap.md)

Optional mapping of each of the series to colors.
([MultiColumnValueToColorMap](../type-aliases/type-alias.MultiColumnValueToColorMap.md) used only for the Sunburst Chart component)

***

### value

> **value**: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are scaled to visual elements of the chart.
For example, the size of the pie slices of a pie chart.

Values are typically used to represent numeric data.

# Interface ChartProps

Props shared across the [ChartComponent](../charts/class.ChartComponent.md).

## Properties

pie slices of a pie chart.

Values are typically used to represent numeric data.

# Interface ChartProps

Props shared across the [ChartComponent](../charts/class.ChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### chartType

> **chartType**: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Default chart type of each series.

***

#### dataOptions

> **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`ChartStyleOptions`](../type-aliases/type-alias.ChartStyleOptions.md)

Configurations for how to style and present a chart's data.

To learn more about using style options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#styleoptions).

tions for how to style and present a chart's data.

To learn more about using style options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#styleoptions).

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`ChartDataPointClickEventHandler`](../type-aliases/type-alias.ChartDataPointClickEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`ChartDataPointContextMenuEventHandler`](../type-aliases/type-alias.ChartDataPointContextMenuEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`ChartDataPointsEventHandler`](../type-aliases/type-alias.ChartDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface ChartWidgetProps

Props of the [ChartWidgetComponent](../dashboards/class.ChartWidgetComponent.md).

## Properties

### Data

#### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

### Chart

#### chartType

> **chartType**: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Default chart type of each series

***

#### dataOptions

> **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

h series

***

#### dataOptions

> **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

### Widget

#### description

> **description**?: `string`

Description of the widget

***

#### drilldownOptions

> **drilldownOptions**?: [`DrilldownOptions`](../type-aliases/type-alias.DrilldownOptions.md)

List of categories to allow drilldowns on

***

#### highlightSelectionDisabled

> **highlightSelectionDisabled**?: `boolean`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **styleOptions**?: [`ChartWidgetStyleOptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md)

Style options for both the chart and widget including the widget header

***

#### title

> **title**?: `string`

Title of the widget

ptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md)

Style options for both the chart and widget including the widget header

***

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`ChartDataPointClickEventHandler`](../type-aliases/type-alias.ChartDataPointClickEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`ChartDataPointContextMenuEventHandler`](../type-aliases/type-alias.ChartDataPointContextMenuEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`ChartDataPointsEventHandler`](../type-aliases/type-alias.ChartDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface ColumnChartProps

Props of the [ColumnChartComponent](../charts/class.ColumnChartComponent.md).

## Properties

of the chatbot

If not specified, a default width of `500px` will be used.

# Interface ColumnChartProps

Props of the [ColumnChartComponent](../charts/class.ColumnChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StackableStyleOptions`](interface.StackableStyleOptions.md)

Configurations for how to style and present a chart's data.

sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StackableStyleOptions`](interface.StackableStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface FunnelChartProps

Props of the [FunnelChartComponent](../charts/class.FunnelChartComponent.md).

## Properties

ype-aliases/type-alias.FiltersPanelChangeEvent.md) |

#### Returns

`void`

# Interface FunnelChartProps

Props of the [FunnelChartComponent](../charts/class.FunnelChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CategoricalChartDataOptions`](interface.CategoricalChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`FunnelStyleOptions`](interface.FunnelStyleOptions.md)

Configurations for how to style and present a chart's data.

resent the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`FunnelStyleOptions`](interface.FunnelStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface FunnelStyleOptions

Configuration options that define functional style of the various elements of FunnelChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### funnelDirection

> **funnelDirection**?: `"inverted"` \| `"regular"`

Direction of FunnelChart narrowing

***

### funnelSize

> **funnelSize**?: `"narrow"` \| `"regular"` \| `"wide"`

Visual size of the lowest slice (degree of funnel narrowing from highest to lowest slices)

***

### funnelType

> **funnelType**?: `"pinched"` \| `"regular"`

Visual type of the lowest slice of FunnelChart

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### labels

> **labels**?: [`Labels`](../type-aliases/type-alias.Labels.md)

Configuration that defines behavior of data labels on FunnelChart

::: warning Deprecated
Use seriesLabels instead
:::

***

# labels

> **labels**?: [`Labels`](../type-aliases/type-alias.Labels.md)

Configuration that defines behavior of data labels on FunnelChart

::: warning Deprecated
Use seriesLabels instead
:::

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### seriesLabels

> **seriesLabels**?: [`FunnelSeriesLabels`](../../sdk-ui/interfaces/interface.FunnelSeriesLabels.md)

Configuration for series labels

***

### subtype

> **subtype**?: `undefined`

Subtype of FunnelChart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface GaugeIndicatorStyleOptions

Configuration options that define functional style of the various elements of Gauge IndicatorChart

## Properties

### forceTickerView

> **forceTickerView**?: `boolean`

Boolean flag to force render indicator in ticker mode regardless of display size

***

### indicatorComponents

> **indicatorComponents**?: [`IndicatorComponents`](../type-aliases/type-alias.IndicatorComponents.md)

***

### skin

> **skin**: `1` \| `2`

***

### subtype

> **subtype**: `"indicator/gauge"`

***

**indicatorComponents**?: [`IndicatorComponents`](../type-aliases/type-alias.IndicatorComponents.md)

***

### skin

> **skin**: `1` \| `2`

***

### subtype

> **subtype**: `"indicator/gauge"`

***

### tickerBarHeight

> **tickerBarHeight**?: `number`

Bar height for gauge indicator in ticker mode

# Interface IndicatorChartDataOptions

Configuration for how to query aggregate data and assign data
to a [Indicator chart](../type-aliases/type-alias.IndicatorChartType.md).

## Properties

title.

# Interface IndicatorChartDataOptions

Configuration for how to query aggregate data and assign data
to a [Indicator chart](../type-aliases/type-alias.IndicatorChartType.md).

## Properties

### max

> **max**?: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are used for max value of indicator.

***

### min

> **min**?: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are used for min value of indicator.

***

### secondary

> **secondary**?: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are used for secondary value of indicator.

***

ata/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are used for secondary value of indicator.

***

### value

> **value**?: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measure columns (or measures) whose values are used for main value of indicator.

# Interface IndicatorChartProps

Props of the [IndicatorChartComponent](../charts/class.IndicatorChartComponent.md).

## Properties

(or measures) whose values are used for main value of indicator.

# Interface IndicatorChartProps

Props of the [IndicatorChartComponent](../charts/class.IndicatorChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`IndicatorChartDataOptions`](interface.IndicatorChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`IndicatorStyleOptions`](../type-aliases/type-alias.IndicatorStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying indicator chart element before it is rendered.
The returned options are then used when rendering the chart.

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface LineChartProps

Props of the [LineChartComponent](../charts/class.LineChartComponent.md).

## Properties

[ageRangeAttribute, [target, target2]],
   [FormulaMeasure, [target3]],
]);
```

# Interface LineChartProps

Props of the [LineChartComponent](../charts/class.LineChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`LineStyleOptions`](interface.LineStyleOptions.md)

Configurations for how to style and present a chart's data.

e-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`LineStyleOptions`](interface.LineStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface LineStyleOptions

Configuration options that define functional style of the various elements of LineChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### line

> **line**?: [`LineOptions`](../type-aliases/type-alias.LineOptions.md)

Configuration that defines line style

***

### lineWidth

> **lineWidth**?: [`LineWidth`](../type-aliases/type-alias.LineWidth.md)

Configuration that defines line width

::: warning Deprecated
Use line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

e line.width instead
:::

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### stepPosition

> **stepPosition**?: `"center"` \| `"left"` \| `"right"`

For step charts: defines where the step occurs (before, between, or after points)
Only used when subtype is 'line/step'

**Values**

- `left` - step occurs before the point (default)
- `center` - step occurs between points
- `right` - step occurs after the point

***

### subtype

> **subtype**?: [`LineSubtype`](../type-aliases/type-alias.LineSubtype.md)

Subtype of LineChart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

bel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface NumericBarIndicatorStyleOptions

Configuration options that define functional style of the various elements of Numeric Bar IndicatorChart

## Properties

### forceTickerView

> **forceTickerView**?: `boolean`

Boolean flag to force render indicator in ticker mode regardless of display size

***

### indicatorComponents

> **indicatorComponents**?: [`IndicatorComponents`](../type-aliases/type-alias.IndicatorComponents.md)

***

### numericSubtype

> **numericSubtype**: `"numericBar"`

***

### subtype

> **subtype**: `"indicator/numeric"`

# Interface NumericSimpleIndicatorStyleOptions

Configuration options that define functional style of the various elements of Numeric Simple IndicatorChart

## Properties

e**: `"indicator/numeric"`

# Interface NumericSimpleIndicatorStyleOptions

Configuration options that define functional style of the various elements of Numeric Simple IndicatorChart

## Properties

### forceTickerView

> **forceTickerView**?: `boolean`

Boolean flag to force render indicator in ticker mode regardless of display size

***

### indicatorComponents

> **indicatorComponents**?: [`IndicatorComponents`](../type-aliases/type-alias.IndicatorComponents.md)

***

### numericSubtype

> **numericSubtype**: `"numericSimple"`

***

### skin

> **skin**: `"horizontal"` \| `"vertical"`

***

### subtype

> **subtype**: `"indicator/numeric"`

# Interface PieChartProps

Props of the [PieChartComponent](../charts/class.PieChartComponent.md).

## Properties

orizontal"` \| `"vertical"`

***

### subtype

> **subtype**: `"indicator/numeric"`

# Interface PieChartProps

Props of the [PieChartComponent](../charts/class.PieChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CategoricalChartDataOptions`](interface.CategoricalChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`PieStyleOptions`](interface.PieStyleOptions.md)

Configurations for how to style and present a chart's data.

and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`PieStyleOptions`](interface.PieStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface PieStyleOptions

Configuration options that define functional style of the various elements of Pie chart

## Properties

### convolution

> **convolution**?: [`Convolution`](../type-aliases/type-alias.Convolution.md)

Configuration that defines the ability of the Pie chart to collapse (convolve) and
hide part of the data under the single category "Others".

***

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### labels

> **labels**?: [`Labels`](../type-aliases/type-alias.Labels.md)

Configuration that defines behavior of data labels on Pie chart

::: warning Deprecated
Use seriesLabels instead
:::

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### semiCircle

> **semiCircle**?: `boolean`

Boolean flag that defines if the pie chart should be displayed as a semi-circle

***

### seriesLabels

> **seriesLabels**?: [`PieSeriesLabels`](../../sdk-ui/type-aliases/type-alias.PieSeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`PieSubtype`](../type-aliases/type-alias.PieSubtype.md)

Subtype of Pie chart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface PolarChartProps

Props of the [PolarChartComponent](../charts/class.PolarChartComponent.md).

## Properties

Callback function that is called when the pivot table cell is right-clicked

# Interface PolarChartProps

Props of the [PolarChartComponent](../charts/class.PolarChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`PolarStyleOptions`](interface.PolarStyleOptions.md)

Configurations for how to style and present a chart's data.

compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`PolarStyleOptions`](interface.PolarStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface PolarStyleOptions

Configuration options that define functional style of the various elements of PolarChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

ighlight specific values

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`PolarSubtype`](../type-aliases/type-alias.PolarSubtype.md)

Subtype of PolarChart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface RangeChartDataOptions

Configuration for how to query aggregate data and assign data
to axes of a Range chart.

## Properties

### breakBy

> **breakBy**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) by which to break (group) the data represented in the chart.

Each group is represented by a different visual encoding - for example, color of bars in a bar chart,
and is automatically added to the chart's legend.

***

### category

> **category**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) whose values are placed on the X-axis.

Typically, the X-axis represents descriptive data.

***

### seriesToColorMap

> **seriesToColorMap**?: [`ValueToColorMap`](../type-aliases/type-alias.ValueToColorMap.md)

Optional mapping of each of the series to colors.

***

ents descriptive data.

***

### seriesToColorMap

> **seriesToColorMap**?: [`ValueToColorMap`](../type-aliases/type-alias.ValueToColorMap.md)

Optional mapping of each of the series to colors.

***

### value

> **value**: ([`AreaRangeMeasureColumn`](../../sdk-ui/interfaces/interface.AreaRangeMeasureColumn.md) \| [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

An array of measure columns used to represent the target numeric values for computing the metrics
in an area range chart.

Each measure column defines the range of values by specifying a lower and an upper bound,
providing the necessary data to visualize the area range on the chart.

# Interface ScatterChartDataOptions

Configuration for how to query aggregate data and assign data
to axes of a [Scatter chart](../type-aliases/type-alias.ScatterChartType.md).

These charts can include data points scattered on X-Y plane further broken down by categories
and encoded by bubble sizes.

## Properties

ter chart](../type-aliases/type-alias.ScatterChartType.md).

These charts can include data points scattered on X-Y plane further broken down by categories
and encoded by bubble sizes.

## Properties

### breakByColor

> **breakByColor**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Select a column by which to break (group) the columns in the chart.
This must be a descriptive column. If you select descriptive data,
then the points in the chart are grouped into the members of the column.
Each member is represented by a different color.

OR

Select a column by which to color the columns in the chart.
This must be a numeric column. If you select numeric data,
then the point color is a gradient where the highest value is
the darkest color and the lowest value is the lightest color.

***

the chart.
This must be a numeric column. If you select numeric data,
then the point color is a gradient where the highest value is
the darkest color and the lowest value is the lightest color.

***

### breakByPoint

> **breakByPoint**?: [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md)

A column to be scattered across the chart as circles;
one point (circle) appears on the chart for each member of this column.
These columns must be descriptive data (not numeric data).

You can only add a break-by point if either the X-axis or the Y-axis was defined to represent numeric data.

***

### seriesToColorMap

> **seriesToColorMap**?: [`ValueToColorMap`](../type-aliases/type-alias.ValueToColorMap.md)

Optional mapping of each of the series created by [breakByColor](interface.ScatterChartDataOptions.md#breakbycolor) to colors.

***

### size

> **size**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Column that determines the size of the circle. It must be numeric data.

***

umn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Column that determines the size of the circle. It must be numeric data.

***

### x

> **x**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

A column or measure column whose values are placed on the X-axis.

Typically, the X-axis of a Scatter Chart is used to represent numeric data.
Alternatively, Descriptive data is also supported. At most one column is allowed.

***

### y

> **y**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

A column or measure column whose values are placed on the Y-axis.

Typically, the Y-axis of a Scatter Chart is used to represent numeric data.
Alternatively, Descriptive data is also supported. At most one column is allowed.

# Interface ScatterChartProps

Props of the [ScatterChartComponent](../charts/class.ScatterChartComponent.md).

## Properties

ely, Descriptive data is also supported. At most one column is allowed.

# Interface ScatterChartProps

Props of the [ScatterChartComponent](../charts/class.ScatterChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`ScatterChartDataOptions`](interface.ScatterChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`ScatterStyleOptions`](interface.ScatterStyleOptions.md)

Configurations for how to style and present a chart's data.

sent the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`ScatterStyleOptions`](interface.ScatterStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`ScatterDataPointEventHandler`](../type-aliases/type-alias.ScatterDataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`ScatterDataPointEventHandler`](../type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`ScatterDataPointsEventHandler`](../type-aliases/type-alias.ScatterDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface ScatterStyleOptions

Configuration options that define functional style of the various elements of ScatterChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### markers

> **markers**?: [`Markers`](../type-aliases/type-alias.Markers.md)

Configuration for markers - symbols or data points that highlight specific values

***

### markerSize

> **markerSize**?: [`ScatterMarkerSize`](../type-aliases/type-alias.ScatterMarkerSize.md)

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

as.ScatterMarkerSize.md)

***

### navigator

> **navigator**?: [`Navigator`](../type-aliases/type-alias.Navigator.md)

Configuration for navigator - zoom/pan tool for large datasets in a chart

***

### seriesLabels

> **seriesLabels**?: [`ScatterSeriesLabels`](../../sdk-ui/type-aliases/type-alias.ScatterSeriesLabels.md)

***

### subtype

> **subtype**?: `undefined`

Subtype of ScatterChart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

***

### xAxis

> **xAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for X axis

***

### y2Axis

> **y2Axis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for second Y axis

***

### yAxis

> **yAxis**?: [`AxisLabel`](../type-aliases/type-alias.AxisLabel.md)

Configuration for Y axis

# Interface ScattermapChartDataOptions

Configuration for how to query aggregate data and assign data
to axes of a Scattermap chart.

## Properties

### colorBy

> **colorBy**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Measure column (or measure) representing the color of the points on the map.

***

(../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Measure column (or measure) representing the color of the points on the map.

***

### details

> **details**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Column or measure column representing the additional details for the points on the map.

***

### geo

> **geo**: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Columns (or attributes) whose values represent locations on the map.
Support field(s) that contain geographic data (Country, City, State/Province, etc)
To visualize latitude and longitude data, you have to add one field containing latitude data, and another field containing longitude data, in this order.

***

### size

> **size**?: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Measure column (or measure) representing the size of the points on the map.

lumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

Measure column (or measure) representing the size of the points on the map.

# Interface ScattermapChartProps

Props of the [ScattermapChartComponent](../charts/class.ScattermapChartComponent.md).

## Properties

n (or measure) representing the size of the points on the map.

# Interface ScattermapChartProps

Props of the [ScattermapChartComponent](../charts/class.ScattermapChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`ScattermapChartDataOptions`](interface.ScattermapChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`ScattermapStyleOptions`](interface.ScattermapStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### dataPointClick

> **dataPointClick**?: [`ScattermapDataPointEventHandler`](../type-aliases/type-alias.ScattermapDataPointEventHandler.md)

Click handler callback for a data point

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface ScattermapStyleOptions

Configuration options that define functional style of the various elements of ScattermapChart

## Properties

`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface ScattermapStyleOptions

Configuration options that define functional style of the various elements of ScattermapChart

## Properties

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### markers

> **markers**?: [`ScattermapMarkers`](../type-aliases/type-alias.ScattermapMarkers.md)

***

### subtype

> **subtype**?: `undefined`

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface StreamgraphChartProps

Props of the [StreamgraphChartComponent](../charts/class.StreamgraphChartComponent.md) component.

## Properties

ype-alias.AxisLabel.md)

Configuration for Y axis

# Interface StreamgraphChartProps

Props of the [StreamgraphChartComponent](../charts/class.StreamgraphChartComponent.md) component.

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CartesianChartDataOptions`](interface.CartesianChartDataOptions.md)

Configurations for how to interpret and present a chart's data.

Streamgraph requires at least one category (X-axis) and one or more value measures.
Multiple series can be created using the `breakBy` property or by providing multiple
value measures.

To learn more about using data options,
see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StreamgraphStyleOptions`](interface.StreamgraphStyleOptions.md)

Configurations for how to style and present a chart's data.

charts.html#dataoptions).

***

#### styleOptions

> **styleOptions**?: [`StreamgraphStyleOptions`](interface.StreamgraphStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface StyledColumn

Wrapped [Column](../../sdk-data/interfaces/interface.Column.md) with styles controlling how the column is visualized in a chart.

## Example

An example of using `StyledColumn` to change the date format of the months displayed on the x-axis.

```ts
<Chart
  dataSet={DM.DataSource}
  chartType={'line'}
  dataOptions={{
    category: [
      {
        column: DM.Commerce.Date.Months,
        dateFormat: 'yy-MM',
      },
    ],
    value: [
      measureFactory.sum(DM.Commerce.Revenue),
      {
        column: measureFactory.sum(DM.Commerce.Quantity),
        showOnRightAxis: true,
        chartType: 'column',
      },
    ],
    breakBy: [],
  }}
/>
```

<img src="../../../img/chart-mixed-series-example-1.png" width="800px" />

Also, see [StyledMeasureColumn](interface.StyledMeasureColumn.md).

## Properties

### color

> **color**?: [`DataColorOptions`](../type-aliases/type-alias.DataColorOptions.md)

All possible color options for data.

***

### column

> **column**: [`Column`](../../sdk-data/interfaces/interface.Column.md)

Wrapped Column

***

](../type-aliases/type-alias.DataColorOptions.md)

All possible color options for data.

***

### column

> **column**: [`Column`](../../sdk-data/interfaces/interface.Column.md)

Wrapped Column

***

### continuous

> **continuous**?: `boolean`

Boolean flag to toggle continuous timeline on this date column.

***

### dateFormat

> **dateFormat**?: `string`

Date format.

See [ECMAScript Date Time String Format](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format)

Note that 'YYYY' and 'DD' have been disabled since they often get confused with 'yyyy' and 'dd'
and can produce unexpected results.

***

### geoLevel

> **geoLevel**?: [`ScattermapLocationLevel`](../type-aliases/type-alias.ScattermapLocationLevel.md)

Geographic location level for Scattermap chart.

***

### granularity

> **granularity**?: `string`

Date granularity that works with continuous timeline.

Values from [`DateLevels`](../../sdk-data/variables/variable.DateLevels.md).

***

### includeSubTotals

> **includeSubTotals**?: `boolean`

Boolean flag whether to include subtotals for this dimension in the pivot table.

***

### isColored

> **isColored**?: `boolean`

***

### isHtml

> **isHtml**?: `boolean`

Boolean flag whether to render category/column value as HTML in the Table component.

***

### name

> **name**?: `string`

Name of the column.

***

lean`

***

### isHtml

> **isHtml**?: `boolean`

Boolean flag whether to render category/column value as HTML in the Table component.

***

### name

> **name**?: `string`

Name of the column.

***

### numberFormatConfig

> **numberFormatConfig**?: [`NumberFormatConfig`](../type-aliases/type-alias.NumberFormatConfig.md)

Configuration for number formatting.

***

### sortType

> **sortType**?: [`PivotRowsSort`](../type-aliases/type-alias.PivotRowsSort.md) \| [`SortDirection`](../type-aliases/type-alias.SortDirection.md)

Sorting configuration that represents either [SortDirection](../type-aliases/type-alias.SortDirection.md) or [PivotRowsSort](../type-aliases/type-alias.PivotRowsSort.md) for the pivot table

# Interface StyledMeasureColumn

Wrapped [Measure Column](../../sdk-data/interfaces/interface.MeasureColumn.md) with styles
controlling how the measure is visualized in a chart.

for the pivot table

# Interface StyledMeasureColumn

Wrapped [Measure Column](../../sdk-data/interfaces/interface.MeasureColumn.md) with styles
controlling how the measure is visualized in a chart.

## Example

Example of using `StyledMeasureColumn` to mix a column series of `Total Revenue` to a line chart.

Note that the chart doesn't display a second Y-axis on the right but that can be customized by
style options.

```ts
<Chart
  dataSet={DM.DataSource}
  chartType={'line'}
  dataOptions={{
    category: [
      {
        column: DM.Commerce.Date.Months,
        dateFormat: 'yy-MM',
      },
    ],
    value: [
      measureFactory.sum(DM.Commerce.Revenue),
      {
        column: measureFactory.sum(DM.Commerce.Quantity),
        showOnRightAxis: true,
        chartType: 'column',
      },
    ],
    breakBy: [],
  }}
/>
```

<img src="../../../img/chart-mixed-series-example-1.png" width="800px" />

See also [StyledColumn](interface.StyledColumn.md).

## Properties

### chartType

> **chartType**?: [`SeriesChartType`](../type-aliases/type-alias.SeriesChartType.md)

Series chart type, which is used with [StyledMeasureColumn](interface.StyledMeasureColumn.md) to customize
series in a mixed chart.

***

### color

> **color**?: [`DataColorOptions`](../type-aliases/type-alias.DataColorOptions.md)

All possible color options for data.

***

MeasureColumn.md) to customize
series in a mixed chart.

***

### color

> **color**?: [`DataColorOptions`](../type-aliases/type-alias.DataColorOptions.md)

All possible color options for data.

***

### column

> **column**: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md)

Wrapped MeasureColumn or CalculatedMeasureColumn

***

### connectNulls

> **connectNulls**?: `boolean`

Boolean flag whether to connect a graph line across null points or render a gap

***

### dataBars

> **dataBars**?: `boolean`

Boolean flag whether to display data bars for this measure in the pivot table.

***

### dataBarsColor

> **dataBarsColor**?: [`ConditionalDataColorOptions`](../type-aliases/type-alias.ConditionalDataColorOptions.md) \| [`UniformDataColorOptions`](../type-aliases/type-alias.UniformDataColorOptions.md) \| `string`

Color options for data bars for this measure in the pivot table

***

### name

> **name**?: `string`

Name of the measure.

***

### numberFormatConfig

> **numberFormatConfig**?: [`NumberFormatConfig`](../type-aliases/type-alias.NumberFormatConfig.md)

Configuration for number formatting.

***

### seriesStyleOptions

> **seriesStyleOptions**?: [`SeriesStyleOptions`](../../sdk-ui/type-aliases/type-alias.SeriesStyleOptions.md)

Specific style options to be applied to specific series in Chart.
Supported only for cartesian and polar charts.

***

eriesStyleOptions`](../../sdk-ui/type-aliases/type-alias.SeriesStyleOptions.md)

Specific style options to be applied to specific series in Chart.
Supported only for cartesian and polar charts.

***

### showOnRightAxis

> **showOnRightAxis**?: `boolean`

Boolean flag whether to show this value/measure
on the right axis (`true`) or on the left axis (`false`).

***

### sortType

> **sortType**?: [`SortDirection`](../type-aliases/type-alias.SortDirection.md)

Sorting direction, either in Ascending order, Descending order, or None

***

### totalsCalculation

> **totalsCalculation**?: [`TotalsCalculation`](../../sdk-data/type-aliases/type-alias.TotalsCalculation.md)

Calculation for the totals of this measure in the pivot table.

***

### treatNullDataAsZeros

> **treatNullDataAsZeros**?: `boolean`

Boolean flag whether null values are treated as zeros in the chart

# Interface SunburstChartProps

Props of the [SunburstChartComponent](../charts/class.SunburstChartComponent.md).

## Properties

Boolean flag whether null values are treated as zeros in the chart

# Interface SunburstChartProps

Props of the [SunburstChartComponent](../charts/class.SunburstChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CategoricalChartDataOptions`](interface.CategoricalChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`SunburstStyleOptions`](interface.SunburstStyleOptions.md)

Configurations for how to style and present a chart's data.

nt the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`SunburstStyleOptions`](interface.SunburstStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface SunburstStyleOptions

Configuration options that define functional style of the various elements of the SunburstChart component

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### labels

> **labels**?: `object`

Labels options object

::: warning Deprecated
Please use `seriesLabels` instead
:::

#### Type declaration

> ##### `labels.category`
>
> **category**?: \{
> `enabled`: `boolean`;
> }[]
>
> Array with single label options objects (order of items relative to dataOptions.category)
>
>

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### seriesLabels

> **seriesLabels**?: [`SunburstSeriesLabels`](../../sdk-ui/type-aliases/type-alias.SunburstSeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart
Single label options object would be applied to all levels.
Array of label options objects would be applied to each level.

#### Example

Single label options object would enable labels for all levels.
```typescript
{
  seriesLabels: {
      enabled: true,
  },
}
```

#### Example

Array of label options objects would disable labels for first level and enable labels for second level.
```typescript
{
  seriesLabels: [
    {
      enabled: false,
    },
    {
      enabled: true,
    },
  ],
}
```

***

### tooltip

> **tooltip**?: `object`

Tooltip options object

#### Type declaration

> ##### `tooltip.mode`
>
> **mode**?: `"contribution"` \| `"value"`
>
> Define mode of data showing
>
>

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface TreemapChartProps

Props of the [TreemapChartComponent](../charts/class.TreemapChartComponent.md).

## Properties

/type-aliases/type-alias.WidgetThemeSettings.md)

Widget theme settings

# Interface TreemapChartProps

Props of the [TreemapChartComponent](../charts/class.TreemapChartComponent.md).

## Properties

### Data

#### dataSet

> **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data set for a chart using one of the following options. If neither option is specified, the chart
will use the `defaultDataSource` specified in the parent `SisenseContextProvider`
component.

(1) Sisense data source name as a string. For example, `'Sample ECommerce'`. Typically, you
retrieve the data source name from a data model you create using the `get-data-model`
[command](https://developer.sisense.com/guides/sdk/guides/cli.html) of the Compose SDK CLI. The chart
connects to the data source, executes a query, and loads the data as specified in
`dataOptions`, `filters`, and `highlights`.

To learn more about using data from a Sisense data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#sisense-data).

OR

(2) Explicit [`Data`](../../sdk-data/interfaces/interface.Data.md), which is made up of an array of
[`Column`](../../sdk-data/interfaces/interface.Column.md) objects and a two-dimensional array of row data. This approach
allows the chart component to be used with any data you provide.

To learn more about using data from an external data source, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#explicit-data).

Example data in the proper format:

```ts
const sampleData = {
  columns: [
    { name: 'Years', type: 'date' },
    { name: 'Quantity', type: 'number' },
    { name: 'Units', type: 'number' },
  ],
  rows: [
    ['2019', 5500, 1500],
    ['2020', 4471, 7000],
    ['2021', 1812, 5000],
    ['2022', 5001, 6000],
    ['2023', 2045, 4000],
  ],
};
```

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to limit (or slice) a chart’s data using one of the following options.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) or [FilterRelations](../../sdk-data/interfaces/interface.FilterRelations.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for filters that do not require a UI to set them
or for filters where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for filters that you want your users to set using pre-built UI components.

To learn more about using filter UI components to create filters, see the [Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components).

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlights based on filter criteria to apply to a chart using one of the following options.

NOTE that the filter dimensions used in highlights must match those defined in the
`dataOptions` of the chart. Otherwise, the filters will be applied as regular slice filters.

(1) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) returned from filter factory functions, such as
[`greaterThan()`](../../sdk-data/factories/namespace.filterFactory/functions/function.greaterThan.md) and [`members()`](../../sdk-data/factories/namespace.filterFactory/functions/function.members.md).

Use this option for highlights that do not require a UI to set them
or for highlights where you will supply your own UI components or use pre-built UI components. This is the most common option.

To learn more about using filter factory functions to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-functions-for-highlighting).

(2) Array of [Filter](../../sdk-data/interfaces/interface.Filter.md) controlled by filter UI components – for example [`MemberFilterTile`](../../sdk-ui/filter-tiles/function.MemberFilterTile.md).

Use this option for highlights that you want your users to set using pre-built UI components.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

ts.

To learn more about using filter components to create highlights, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#filter-components-for-highlighting).

### Chart

#### dataOptions

> **dataOptions**: [`CategoricalChartDataOptions`](interface.CategoricalChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`TreemapStyleOptions`](interface.TreemapStyleOptions.md)

Configurations for how to style and present a chart's data.

sent the data passed to the chart

***

#### styleOptions

> **styleOptions**?: [`TreemapStyleOptions`](interface.TreemapStyleOptions.md)

Configurations for how to style and present a chart's data.

### Callbacks

#### beforeRender

> **beforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md)

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**?: [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Interface TreemapStyleOptions

Configuration options that define functional style of the various elements of TreemapChart

## Properties

### dataLimits

> **dataLimits**?: [`DataLimits`](interface.DataLimits.md)

Data limit for series or categories that will be plotted

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### labels

> **labels**?: `object`

Labels options object

::: warning Deprecated
Please use `seriesLabels` instead
:::

#### Type declaration

> ##### `labels.category`
>
> **category**?: \{
> `enabled`: `boolean`;
> }[]
>
> Array with single label options objects (order of items relative to dataOptions.category)
>
>

***

### legend

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

> **legend**?: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Configuration for legend - a key that provides information about the data series or colors used in chart

***

### seriesLabels

> **seriesLabels**?: [`TreemapSeriesLabels`](../../sdk-ui/type-aliases/type-alias.TreemapSeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart
Single label options object would be applied to all levels.
Array of label options objects would be applied to each level.

#### Example

Single label options object would enable labels for all levels.
```typescript
{
  seriesLabels: {
      enabled: true,
  },
}
```

#### Example

Array of label options objects would disable labels for first level and enable labels for second level.
```typescript
{
  seriesLabels: [
    {
      enabled: false,
    },
    {
      enabled: true,
    },
  ],
}
```

***

### tooltip

> **tooltip**?: `object`

Tooltip options object

#### Type declaration

> ##### `tooltip.mode`
>
> **mode**?: `"contribution"` \| `"value"`
>
> Define mode of data showing
>
>

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface CalendarHeatmapStyleOptions

Configuration options that define functional style of the various elements of calendar-heatmap chart

## Properties

### cellLabels

> **cellLabels**?: [`CalendarHeatmapCellLabels`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapCellLabels.md)

Configuration for day numbers (1-31) in calendar cells

***

### dayLabels

> **dayLabels**?: `object`

Configuration for weekday names in the header

#### Type declaration

> ##### `dayLabels.enabled`
>
> **enabled**?: `boolean`
>
> Boolean flag that defines if calendar weekday names should be shown
>
> ###### Default
>
> ```ts
> true
> ```
>
> ##### `dayLabels.style`
>
> **style**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for calendar weekday names
>
> ::: warning Deprecated
> Please use `textStyle` instead
> :::
>
> ##### `dayLabels.textStyle`
>
> **textStyle**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for calendar weekday names
>
>

***

tStyle` instead
> :::
>
> ##### `dayLabels.textStyle`
>
> **textStyle**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for calendar weekday names
>
>

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 400px (for component without header) or 425px (for component with header).

***

### monthLabels

> **monthLabels**?: `object`

Configuration for month names in multi-month view types

#### Type declaration

> ##### `monthLabels.enabled`
>
> **enabled**?: `boolean`
>
> Boolean flag that defines if month names should be shown
>
> ###### Default
>
> ```ts
> true
> ```
>
> ##### `monthLabels.style`
>
> **style**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for month names
>
> ::: warning Deprecated
> Please use `textStyle` instead
> :::
>
> ##### `monthLabels.textStyle`
>
> **textStyle**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for month names
>
>

***

use `textStyle` instead
> :::
>
> ##### `monthLabels.textStyle`
>
> **textStyle**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for month names
>
>

***

### pagination

> **pagination**?: `object`

Configuration for pagination controls in multi-month view types

#### Type declaration

> ##### `pagination.enabled`
>
> **enabled**?: `boolean`
>
> Boolean flag that defines if pagination controls should be shown
>
> ###### Default
>
> ```ts
> true
> ```
>
> ##### `pagination.startMonth`
>
> **startMonth**?: `Date`
>
> Start month to display when the chart is first rendered
>
> ##### `pagination.textStyle`
>
> **textStyle**?: [`TextStyle`](../../sdk-ui/type-aliases/type-alias.TextStyle.md)
>
> Style configuration for pagination controls text
>
>

***

### startOfWeek

> **startOfWeek**?: [`CalendarDayOfWeek`](../type-aliases/type-alias.CalendarDayOfWeek.md)

Determines which day of the week to start the calendar with

#### Default

```ts
'sunday'
```

***

### subtype

> **subtype**?: [`CalendarHeatmapSubtype`](../type-aliases/type-alias.CalendarHeatmapSubtype.md)

Calendar heatmap chart subtype

#### Default

```ts
'calendar-heatmap/split'
```

***

### viewType

> **viewType**?: [`CalendarHeatmapViewType`](../type-aliases/type-alias.CalendarHeatmapViewType.md)

View type determines how many months to display: 'month' (1), 'quarter' (3), 'half-year' (6), 'year' (12)

***

*?: [`CalendarHeatmapViewType`](../type-aliases/type-alias.CalendarHeatmapViewType.md)

View type determines how many months to display: 'month' (1), 'quarter' (3), 'half-year' (6), 'year' (12)

***

### weekends

> **weekends**?: `object`

Configuration for weekend days

#### Type declaration

> ##### `weekends.cellColor`
>
> **cellColor**?: `string`
>
> Calendar cell color for weekend days
>
> ###### Default
>
> ```ts
> '#e6e6e6'
> ```
>
> ##### `weekends.days`
>
> **days**?: [`CalendarDayOfWeek`](../type-aliases/type-alias.CalendarDayOfWeek.md)[]
>
> Weekend days - defaults to ['saturday', 'sunday']
>
> ##### `weekends.enabled`
>
> **enabled**?: `boolean`
>
> Boolean flag that enables/disables weekend highlighting
>
> ###### Default
>
> ```ts
> false
> ```
>
> ##### `weekends.hideValues`
>
> **hideValues**?: `boolean`
>
> Whether to hide values in tooltip for weekend days
>
> ###### Default
>
> ```ts
> false
> ```
>
>

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface ChatConfig

## Properties

### customPrompt

> **customPrompt**?: `string`

Pass a custom prompt to AI when generating query recommendations

e.g. "Focus on age range"

***

### dataTopicsList

> **dataTopicsList**?: `string`[]

List of titles representing allowed contexts (data models or perspectives) for a chat session.

Each context will be validated and checked for availability.
If only one context is specified, the data topic selector screen will not be shown.

***

### enableFollowupQuestions

> **enableFollowupQuestions**: `boolean`

Boolean flag to show or hide suggested questions following a chat response. Currently
follow-up questions are still under development and are not validated. Therefore, follow-up
questions are disabled by default.

***

w or hide suggested questions following a chat response. Currently
follow-up questions are still under development and are not validated. Therefore, follow-up
questions are disabled by default.

***

### hideHistory

> **hideHistory**?: `boolean`

Boolean flag to hide chat history on every load.

Note: When the flag is `true`, chat history will be preserved and stored for the session but will not be displayed. Changing this setting back to `false` will make the entire history visible again, even if it was previously hidden. Use the "Clear History" button to completely erase the history.

#### Default

```ts
false
```

::: warning Deprecated
This flag is deprecated and will be removed in a future version. Use [@sisense/sdk-ui!AiContextProviderProps.volatile](../../sdk-ui/interfaces/interface.AiContextProviderProps.md#volatile) instead.
:::

***

### inputPromptText

> **inputPromptText**?: `string`

The input prompt text to show in the chat input box

***

### numOfRecentPrompts

> **numOfRecentPrompts**: `number`

Number of recent prompts that should be shown in a chat session

If not specified, the default value is `5`

***

### numOfRecommendations

> **numOfRecommendations**: `number`

Number of recommended queries that should initially be shown in a chat session

If not specified, the default value is `4`.

Set to `0` to disable initial recommendations.

***

ndations**: `number`

Number of recommended queries that should initially be shown in a chat session

If not specified, the default value is `4`.

Set to `0` to disable initial recommendations.

***

### suggestionsWelcomeText

> **suggestionsWelcomeText**?: `false` \| `string`

The message text to show above the initial suggested questions in a chat session.

A value of `false` will hide the text.

If not specified, a default message will be displayed.

***

### welcomeText

> **welcomeText**?: `false` \| `string`

The welcome text to show at the top of a chat session.

A value of `false` will hide the welcome text.

If not specified, a default message will be displayed.

# Interface ExecuteCsvQueryParams

Parameters for CSV data query execution.

## Properties

eter | Type |
| :------ | :------ |
| `event` | `object` |
| `event.i` | `number` |

##### Returns

`void`

# Interface ExecuteCsvQueryParams

Parameters for CSV data query execution.

## Properties

### beforeQuery

> **beforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

### config

> **config**?: [`ExecuteCSVQueryConfig`](../../sdk-ui/type-aliases/type-alias.ExecuteCSVQueryConfig.md)

***

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### dimensions

> **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

***

### measures

> **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

Measures of the query

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

***

### ungroup

> **ungroup**?: `boolean`

Boolean flag whether to include `ungroup: true` in non-aggregated JAQL queries.

This improves computation and performance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface ExecuteQueryParams

Parameters for data query execution.

## Properties

### beforeQuery

> **beforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### dimensions

> **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

***

### measures

> **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

Measures of the query

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

***

### ungroup

> **ungroup**?: `boolean`

Boolean flag whether to include `ungroup: true` in non-aggregated JAQL queries.

This improves computation and performance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface GetHierarchyModelsParams

Parameters for retrieving an existing hierarchy models from the Sisense instance.

## Properties

face.Filter.md)[]

List of filters this filter is dependent on

# Interface GetHierarchyModelsParams

Parameters for retrieving an existing hierarchy models from the Sisense instance.

## Properties

### alwaysIncluded

> **alwaysIncluded**?: `boolean`

A flag indicating whether to filter the retrieved hierarchies based on the `alwaysIncluded` field.

When set to true, only hierarchies with `alwaysIncluded: true` will be returned.
When set to false, only hierarchies with `alwaysIncluded: false` will be returned.
If not specified, all hierarchies will be returned.

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The data source from which to retrieve the hierarchies - e.g. `Sample ECommerce`.

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### dimension

> **dimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

The dimension for which to retrieve the hierarchies.

***

### ids

> **ids**?: `string`[]

A list of hierarchy IDs to retrieve specific hierarchies.

# Interface GetQueryRecommendationsParams

## Properties

### contextTitle

> **contextTitle**: `string`

Data model title or perspective title

***

### count

> **count**?: `number`

Number of recommendations that should be returned

If not specified, the default value is `4`

***

### customPrompt

> **customPrompt**?: `string`

Pass a custom prompt to AI when generating query recommendations

e.g. "Focus on age range"

# Interface GetSharedFormulaParams

Parameters for retrieving a shared formula.

## Properties

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source - e.g. `Sample ECommerce`

***

### name

> **name**?: `string`

Formula name

***

### oid

> **oid**?: `string`

Formula identifier

/../sdk-data/type-aliases/type-alias.DataSource.md)

Data source - e.g. `Sample ECommerce`

***

### name

> **name**?: `string`

Formula name

***

### oid

> **oid**?: `string`

Formula identifier

# Interface Hierarchy

Hierarchy with a title and associated levels.

## Properties

### levels

> **levels**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Hierarchy levels.

***

### title

> **title**: `string`

Hierarchy title.

# Interface HierarchyModel

Model of Sisense hierarchy defined in the abstractions of Compose SDK.

## Properties

### id

> **id**: `string`

Unique identifier of the hierarchy.

***

### levels

> **levels**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Hierarchy levels.

***

### title

> **title**: `string`

Hierarchy title.

# Interface QueryRecommendation

AI-generated recommended query you can run on your data model

## Properties

### detailedDescription

> **detailedDescription**: `string`

Detailed description of the response

***

### nlqPrompt

> **nlqPrompt**: `string`

NLQ prompt used in the request

***

### userMsg

> **userMsg**: `string`

The response message for the chat

***

Detailed description of the response

***

### nlqPrompt

> **nlqPrompt**: `string`

NLQ prompt used in the request

***

### userMsg

> **userMsg**: `string`

The response message for the chat

***

### widgetProps

> **widgetProps**?: [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md)

Suggested widget props

# Interface SisenseContextConfig

Configurations and authentication for Sisense Context.

Use one of the following to authenticate:

- [ssoEnabled](interface.SisenseContextConfig.md#ssoenabled)
- [token](interface.SisenseContextConfig.md#token)
- [wat](interface.SisenseContextConfig.md#wat)

## Properties

lowing to authenticate:

- [ssoEnabled](interface.SisenseContextConfig.md#ssoenabled)
- [token](interface.SisenseContextConfig.md#token)
- [wat](interface.SisenseContextConfig.md#wat)

## Properties

### Sisense App

#### appConfig

> **appConfig**?: [`AppConfig`](../type-aliases/type-alias.AppConfig.md)

Application specific configurations such as locale and date formats.

***

#### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source explicitly set to be used by child components that are not defined with a data source.

***

#### url

> **url**: `string`

URL of the Sisense environment the app connects to

d)

Default data source explicitly set to be used by child components that are not defined with a data source.

***

#### url

> **url**: `string`

URL of the Sisense environment the app connects to

### Sisense Authentication

#### enableSilentPreAuth

> **enableSilentPreAuth**?: `boolean`

Boolean flag to enable sending silent pre-authentication requests to the Sisense instance.
Used to check if user is already authenticated, check is performed in an ivisible iframe.
Used only with SSO authentication.
If not specified, the default value is `false`.

***

#### ssoEnabled

> **ssoEnabled**?: `boolean`

[Single Sign-On](https://docs.sisense.com/main/SisenseLinux/using-single-sign-on-to-access-sisense.htm) toggle.

Set to `true` to use SSO authentication. When `true`, this overrides any other authentication methods. Defaults to `false`.

***

#### token

> **token**?: `null` \| `string`

Token for [bearer authentication](https://developer.sisense.com/guides/restApi/using-rest-api.html).

To signify that the token is pending (e.g., being generated), set the value to `null`. This is supported for React and Vue only.

***

#### useFusionAuth

> **useFusionAuth**?: `boolean`

Flag to delegate authentication to Fusion.

Defaults to `false`.

***

#### wat

> **wat**?: `null` \| `string`

[Web Access Token](https://docs.sisense.com/main/SisenseLinux/using-web-access-token.htm).

To signify that the token is pending (e.g., being generated), set the value to `null`. This is supported for React and Vue only.

ps://docs.sisense.com/main/SisenseLinux/using-web-access-token.htm).

To signify that the token is pending (e.g., being generated), set the value to `null`. This is supported for React and Vue only.

# Interface StackableStyleOptions

Configuration options that define functional style of the various elements of stackable charts, like Column or Bar

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

### series

> **series**?: `object`

Configuration for series styling

#### Type declaration

> ##### `series.borderRadius`
>
> **borderRadius**?: `number` \| `string`
>
> The corner radius of the border surrounding each column or bar.
> A number signifies pixels.
> A percentage string, like for example 50%, signifies a relative size.
>
> ###### Default
>
> ```ts
> 0
> ```
>
> ##### `series.groupPadding`
>
> **groupPadding**?: `number`
>
> Padding between each value groups, in x axis units.
>
> ###### Default
>
> ```ts
> 0.1
> ```
>
> ##### `series.padding`
>
> **padding**?: `number`
>
> Padding between each column or bar, in x axis units.
>
> ###### Default
>
> ```ts
> 0.01
> ```
>
>

***

### seriesLabels

> **seriesLabels**?: [`SeriesLabels`](../type-aliases/type-alias.SeriesLabels.md)

Configuration for series labels - titles/names identifying data series in a chart

***

### subtype

> **subtype**?: [`StackableSubtype`](../type-aliases/type-alias.StackableSubtype.md)

Subtype of stackable chart

***

### totalLabels

> **totalLabels**?: [`TotalLabels`](../../sdk-ui/type-aliases/type-alias.TotalLabels.md)

Configuration for total labels
Only supported for stacked chart subtypes

***

e chart

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

# Interface StreamgraphStyleOptions

Configuration options that define the visual style of a Streamgraph chart.

Streamgraphs are centered stacked area charts that emphasize flowing patterns
and overall trends. The Y-axis is typically hidden or minimal, and series labels
are often displayed directly on the areas for identification.

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

Configuration that defines line style for area boundaries.

***

about the data series or colors used in chart

***

### line

> **line**?: [`LineOptions`](../type-aliases/type-alias.LineOptions.md)

Configuration that defines line style for area boundaries.

***

### lineWidth

> **lineWidth**?: [`LineWidth`](../type-aliases/type-alias.LineWidth.md)

Configuration that defines line width for area boundaries.

::: warning Deprecated
Use line.width instead
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

Configuration for series labels - titles/names identifying data series in a chart.

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

# Interface TableProps

Props of the [TableComponent](../data-grids/class.TableComponent.md).

## Properties

asureColumn.md))[]

Columns (or attributes) whose values represent data columns in table

# Interface TableProps

Props of the [TableComponent](../data-grids/class.TableComponent.md).

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

Filters that will slice query results

ers

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

### Callbacks

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

### Representation

#### dataOptions

> **dataOptions**: [`TableDataOptions`](interface.TableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### styleOptions

> **styleOptions**?: [`TableStyleOptions`](interface.TableStyleOptions.md)

Configurations for how to style and present a table's data.

# Interface TableStyleOptions

Configuration options that define functional style of the various elements of the Table Component

## Properties

urations for how to style and present a table's data.

# Interface TableStyleOptions

Configuration options that define functional style of the various elements of the Table Component

## Properties

### columns

> **columns**?: `object`

Columns options

#### Type declaration

> ##### `columns.alternatingColor`
>
> **alternatingColor**?: [`TableColorOptions`](../../sdk-ui/type-aliases/type-alias.TableColorOptions.md)
>
> Alternating color for columns
>
> ##### `columns.width`
>
> **width**?: `"auto"` \| `"content"`
>
> Modes of columns width
> 'auto' - all columns will have the same width and fit the table width (no horizontal scroll)
> 'content' - columns width will be based on content (default option)
>
>

***

### header

> **header**?: `object`

Header options

#### Type declaration

> ##### `header.color`
>
> **color**?: [`TableColorOptions`](../../sdk-ui/type-aliases/type-alias.TableColorOptions.md)
>
> Color of header
>
>

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 500px (for component without header) or 525px (for component with header).

***

### paddingHorizontal

> **paddingHorizontal**?: `number`

Horizontal padding around whole table
Default value is 20px

***

(for component without header) or 525px (for component with header).

***

### paddingHorizontal

> **paddingHorizontal**?: `number`

Horizontal padding around whole table
Default value is 20px

***

### paddingVertical

> **paddingVertical**?: `number`

Vertical padding around whole table
Default value is 20px

***

### rows

> **rows**?: `object`

Rows options

#### Type declaration

> ##### `rows.alternatingColor`
>
> **alternatingColor**?: [`TableColorOptions`](../../sdk-ui/type-aliases/type-alias.TableColorOptions.md)
>
> Alternating color for rows
>
>

***

### rowsPerPage

> **rowsPerPage**?: `number`

Number of rows per page

Default value is 25

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

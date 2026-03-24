# Interface AttributeDataPointEntry

A data point entry that represents a single attribute within a multi-dimensional data point.

## Properties

### attribute

> **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

The attribute associated with this data point entry

***

ulti-dimensional data point.

## Properties

### attribute

> **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

The attribute associated with this data point entry

***

### dataOption

> **dataOption**: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

The data option associated with this entry

***

### displayValue

> **displayValue**?: `string`

The formatted value of the data point

***

### value

> **value**: `number` \| `string`

The raw value of the data point

# Interface BasicDataPointEntry

A basic data point entry that represents a single dimension within a multi-dimensional data point.

## Properties

### dataOption

> **dataOption**: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

The data option associated with this entry

***

### displayValue

> **displayValue**?: `string`

The formatted value of the data point

***

### value

> **value**: `number` \| `string`

The raw value of the data point

# Interface DataLimits

Configuration that limits the series or categories that are charted.

## Properties

### categoriesCapacity

> **categoriesCapacity**?: `number`

Maximum number of categories to chart

***

### seriesCapacity

> **seriesCapacity**?: `number`

Maximum number of series to chart

# Interface GetDataSourceDimensionsParams

Parameters for [useGetDataSourceDimensions](../functions/function.useGetDataSourceDimensions.md) hook.

## Properties

### count

> **count**?: `number`

The number of items to return

***

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

The data source to get the dimensions for. If no data source is provided, the default data source will be used.

***

ataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

The data source to get the dimensions for. If no data source is provided, the default data source will be used.

***

### enabled

> **enabled**?: `boolean`

Whether the query should be enabled.

***

### offset

> **offset**?: `number`

The offset for pagination

***

### searchValue

> **searchValue**?: `string`

The search value to filter by

# Interface MeasureDataPointEntry

A data point entry that represents a single measure within a multi-dimensional data point.

## Properties

### dataOption

> **dataOption**: [`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md)

The data option associated with this entry

***

### displayValue

> **displayValue**?: `string`

The formatted value of the data point

***

### measure

> **measure**: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)

The measure associated with this data point entry

***

### value

> **value**: `number` \| `string`

The raw value of the data point

# Interface NlqResponseData

Response data for NLQ request

## Properties

### detailedDescription

> **detailedDescription**: `string`

Detailed description of the response

***

### followupQuestions

> **followupQuestions**?: `string`[]

An array of suggested followup questions

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

# Interface TableDataOptions

Configuration for how to query data and assign data to Table.

## Properties

e

> **widgetType**: `"custom"`

Widget type identifier, always 'custom' for tabber widget

# Interface TableDataOptions

Configuration for how to query data and assign data to Table.

## Properties

### columns

> **columns**: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](interface.StyledColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Columns (or attributes) whose values represent data columns in table

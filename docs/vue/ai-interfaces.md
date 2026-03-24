# Interface AiContextProviderProps

Props of the [`AiContextProvider`](../generative-ai/class.AiContextProvider.md) component.

## Properties

### volatile

> **volatile**?: `boolean`

Boolean flag to indicate whether the chat session should be volatile.

When `false` the chat session history will be stored per user per datamodel. The retention period is configurable in Sisense Fusion.

When the `Chatbot` component renders, if a previous chat history exists for the current user and datamodel, it will be restored. The user may continue the conversation or clear the history.

When `true` a new chat session (with no history) will be created each time the `Chatbot` comoponent initializes.

#### Default

```ts
false
```

# Interface ChatbotProps

Props of the [`Chatbot`](../generative-ai/class.Chatbot.md) component.

## Properties

### config

> **config**?: `Partial`\< [`ChatConfig`](interface.ChatConfig.md) \>

Various configuration options for the chatbot

***

### height

> **height**?: `Height`\< `number` \| `string` \>

Total height of the chatbot

If not specified, a default height of `900px` will be used.

***

### width

> **width**?: `Width`\< `number` \| `string` \>

Total width of the chatbot

If not specified, a default width of `500px` will be used.

# Interface GetNlgInsightsProps

Props of the [`GetNlgInsights`](../generative-ai/class.GetNlgInsights.md) component.

## Properties

ng`[]

A list of hierarchy IDs to retrieve specific hierarchies.

# Interface GetNlgInsightsProps

Props of the [`GetNlgInsights`](../generative-ai/class.GetNlgInsights.md) component.

## Properties

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The data source that the query targets - e.g. `Sample ECommerce`

***

### dimensions

> **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters of the query

***

### measures

> **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

Measures of the query

***

### verbosity

> **verbosity**?: `"High"` \| `"Low"`

The verbosity of the NLG summarization

# Interface UseGetNlgInsightsParams

Parameters of the [`useGetNlgInsights`](../generative-ai/function.useGetNlgInsights.md) composable.

container wrapping this component
3. Default value of 400px

# Interface UseGetNlgInsightsParams

Parameters of the [`useGetNlgInsights`](../generative-ai/function.useGetNlgInsights.md) composable.

## Properties

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The data source that the query targets - e.g. `Sample ECommerce`

***

### dimensions

> **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

### enabled

> **enabled**?: `boolean`

Boolean flag to enable/disable API call by default

If not specified, the default value is `true`

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters of the query

***

### measures

> **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

Measures of the query

***

### verbosity

> **verbosity**?: `"High"` \| `"Low"`

The verbosity of the NLG summarization

# Interface UseGetNlgInsightsState

State for [`useGetNlgInsights`](../generative-ai/function.useGetNlgInsights.md) composable.

## Properties

### data

> **data**: `Ref`\< `string` \| `undefined` \>

The result data

***

### error

> **error**: `Ref`\< `unknown` \>

The error if any occurred

***

### isError

> **isError**: `Ref`\< `boolean` \>

Whether the data fetching has failed

***

d` \>

The result data

***

### error

> **error**: `Ref`\< `unknown` \>

The error if any occurred

***

### isError

> **isError**: `Ref`\< `boolean` \>

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `Ref`\< `boolean` \>

Whether the data fetching is loading

***

### isSuccess

> **isSuccess**: `Ref`\< `boolean` \>

Whether the data fetching has succeeded

***

### refetch

> **refetch**: () => `void`

Callback to trigger a refetch of the data

#### Returns

`void`

# Interface UseGetNlqResultParams

Parameters for [`useGetNlqResult`](../generative-ai/function.useGetNlqResult.md) composable.

## Properties

### chartTypes

> **chartTypes**?: (`"bar"` \| `"column"` \| `"indicator"` \| `"line"` \| `"pie"` \| `"table"`)[]

Possible chart types to be used in NLQ results

***

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source for queries to run against

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### query

> **query**: `string`

Text containing the natural language query

# Interface UseGetNlqResultState

State for [`useGetNlqResult`](../generative-ai/function.useGetNlqResult.md) composable.

## Properties

### data

> **data**: `Ref`\< [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `undefined` \>

The result data

***

enerative-ai/function.useGetNlqResult.md) composable.

## Properties

### data

> **data**: `Ref`\< [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `undefined` \>

The result data

***

### error

> **error**: `Ref`\< `unknown` \>

The error if any occurred

***

### isError

> **isError**: `Ref`\< `boolean` \>

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `Ref`\< `boolean` \>

Whether the data fetching is loading

***

### isSuccess

> **isSuccess**: `Ref`\< `boolean` \>

Whether the data fetching has succeeded

***

### refetch

> **refetch**: () => `void`

Callback to trigger a refetch of the data

#### Returns

`void`

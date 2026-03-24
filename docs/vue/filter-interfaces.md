# Interface CriteriaFilterTileProps

Props of the [`CriteriaFilterTile`](../filter-tiles/class.CriteriaFilterTile.md) component.

## Properties

### arrangement

> **arrangement**?: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md)

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Text or numeric filter object to initialize filter type and default values

***

### measures

> **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

List of available measures to rank by. Required only for ranking filters.

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

nterface.Measure.md)[]

List of available measures to rank by. Required only for ranking filters.

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### onUpdate

> **onUpdate**: (`filter`) => `void`

Callback returning updated filter object

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Interface DateRangeFilterTileProps

Props of the [`DateRangeFilterTile`](../filter-tiles/class.DateRangeFilterTile.md) component.

## Properties

### attribute

> **attribute**: [`LevelAttribute`](../../sdk-data/interfaces/interface.LevelAttribute.md)

Date level attribute the filter is based on

***

eFilterTile.md) component.

## Properties

### attribute

> **attribute**: [`LevelAttribute`](../../sdk-data/interfaces/interface.LevelAttribute.md)

Date level attribute the filter is based on

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### earliestDate

> **earliestDate**?: `string`

Earliest allowed date for selection.

If not specified, the earliest date of the target date-level attribute will be used.

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Date range filter.

***

### lastDate

> **lastDate**?: `string`

Latest allowed date for selection.

If not specified, the latest date of the target date-level attribute will be used.

***

### onChange

> **onChange**: (`filter`) => `void`

Callback function that is called when the date range filter object should be updated.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) | Date range filter |

#### Returns

`void`

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

`void`

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### parentFilters

> **parentFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on.

***

### title

> **title**: `string`

Filter tile title

# Interface FilterMembersErrorState

State of a filter members load that has failed.

## Properties

### data

> **data**: `undefined`

The result data

***

### error

> **error**: `Error`

The error if any occurred

***

### isError

> **isError**: `true`

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `false`

Whether the data fetching is loading

***

### isSuccess

> **isSuccess**: `false`

Whether the data fetching has succeeded

***

### status

> **status**: `"error"`

The status of the data fetching execution

# Interface FilterMembersLoadingState

State of a filter members load that is loading.

## Properties

### data

> **data**: [`GetFilterMembersData`](interface.GetFilterMembersData.md)

The result data

***

### error

> **error**: `undefined`

The error if any occurred

***

### isError

> **isError**: `false`

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `true`

Whether the data fetching is loading

***

ed`

The error if any occurred

***

### isError

> **isError**: `false`

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `true`

Whether the data fetching is loading

***

### isSuccess

> **isSuccess**: `false`

Whether the data fetching has succeeded

***

### status

> **status**: `"loading"`

The status of the data fetching execution

# Interface FilterMembersSuccessState

State of a filter members load that has succeeded.

## Properties

### data

> **data**: [`GetFilterMembersData`](interface.GetFilterMembersData.md)

The result data

***

### error

> **error**: `undefined`

The error if any occurred

***

### isError

> **isError**: `false`

Whether the data fetching has failed

***

### isLoading

> **isLoading**: `false`

Whether the data fetching is loading

***

### isSuccess

> **isSuccess**: `true`

Whether the data fetching has succeeded

***

### status

> **status**: `"success"`

The status of the data fetching execution

# Interface FilterTileProps

Props of the [`FilterTile`](../filter-tiles/class.FilterTile.md) component.

## Properties

### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Filter to display

***

ta/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Filter to display

***

### onChange

> **onChange**: (`filter`) => `void`

Callback to handle filter change

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null` |

#### Returns

`void`

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: (`levelIndex`?) => `void`

Filter edit callback

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `levelIndex`? | `number` | Index of the filter level that triggers the onEdit action (in the case of a CascadingFilter) |

#### Returns

`void`

# Interface FiltersPanelProps

Props of the [`FiltersPanel`](../filter-tiles/class.FiltersPanel.md) component.

## Properties

### config

> **config**?: [`FiltersPanelConfig`](../../sdk-ui/interfaces/interface.FiltersPanelConfig.md)

The configuration for the filters panel

***

### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

tion for the filters panel

***

### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Array of filters to display

***

### onFiltersChange

> **onFiltersChange**: (`filters`) => `void`

Callback to handle changes in filters

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

#### Returns

`void`

# Interface GetFilterMembersData

Result data of retrieving filter members.

## Properties

### allMembers

> **allMembers**: [`Member`](interface.Member.md)[]

Array of all available members

***

### enableMultiSelection

> **enableMultiSelection**: `boolean`

Flag indicating if multiple selection is enabled

***

bers**: [`Member`](interface.Member.md)[]

Array of all available members

***

### enableMultiSelection

> **enableMultiSelection**: `boolean`

Flag indicating if multiple selection is enabled

***

### excludeMembers

> **excludeMembers**: `boolean`

Flag indicating whether members are excluded

***

### hasBackgroundFilter

> **hasBackgroundFilter**: `boolean`

Flag indicating if there is a background filter applied

***

### selectedMembers

> **selectedMembers**: [`SelectedMember`](../../sdk-ui/interfaces/interface.SelectedMember.md)[]

Array of members that are currently selected

# Interface GetFilterMembersParams

Params for [useGetFilterMembers](../filter-tiles/function.useGetFilterMembers.md)

## Properties

### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source to use if filter does not have one

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Provided members filter

***

### parentFilters

> **parentFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on

# Interface Member

## Properties

### key

> **key**: `string`

Key of the member

***

### title

> **title**: `string`

Title of the member

# Interface MemberFilterTileProps

Props of the [`MemberFilterTile`](../filter-tiles/class.MemberFilterTile.md) component.

## Properties

### attribute

> **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Attribute to filter on. A query will run to fetch all this attribute's members

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null`

Source filter object. Caller is responsible for keeping track of filter state

***

sense Context.

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null`

Source filter object. Caller is responsible for keeping track of filter state

***

### onChange

> **onChange**: (`filter`) => `void`

Callback indicating when the source members filter should be updated

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null` |

#### Returns

`void`

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### parentFilters

> **parentFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on

***

### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Interface RelativeDateFilterTileProps

Props of the [`RelativeDateFilterTile`](../filter-tiles/class.RelativeDateFilterTile.md) component.

## Properties

### arrangement

> **arrangement**?: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md)

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Relative date filter.

***

### limit

> **limit**?: `object`

Limit of the date range that can be selected.

#### Type declaration

> ##### `limit.maxDate`
>
> **maxDate**: `string`
>
> ##### `limit.minDate`
>
> **minDate**: `string`
>
>

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

ng`
>
>

***

### onDelete

> **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### onUpdate

> **onUpdate**: (`filter`) => `void`

Callback function that is called when the relative date filter object should be updated.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) | Relative date filter |

#### Returns

`void`

***

### title

> **title**: `string`

Filter tile title

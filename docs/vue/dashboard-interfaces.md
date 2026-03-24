# Interface DashboardModel <Badge type="fusionEmbed" text="Fusion Embed" />

Model of Sisense Fusion dashboard defined in the abstractions of Compose SDK.

## Properties

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Dashboard data source details.

***

### oid

> **oid**: `string`

Unique identifier of the dashboard.

***

### title

> **title**: `string`

Dashboard title.

***

### widgets

> **widgets**: [`WidgetModel`](interface.WidgetModel.md)[]

Dashboard widget models.

# Interface WidgetModel <Badge type="fusionEmbed" text="Fusion Embed" />

Model of Sisense widget defined in the abstractions of Compose SDK.

## Properties

### chartType

> **chartType**?: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Widget chart type.

***

### customOptions

> **customOptions**?: `Record`\< `string`, `any` \>

Custom widget options. Only present for custom widgets.

Contains widget-specific configuration that doesn't fit into standard style or data options.

***

### customWidgetType

> **customWidgetType**: `string`

Custom widget type. Only present for custom widgets.

If this is a custom widget, this is typically the name/ID of the custom widget.

***

**

### customWidgetType

> **customWidgetType**: `string`

Custom widget type. Only present for custom widgets.

If this is a custom widget, this is typically the name/ID of the custom widget.

***

### dataOptions

> **dataOptions**: [`WidgetDataOptions`](../type-aliases/type-alias.WidgetDataOptions.md)

Widget data options.

***

### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Full name of the widget data source.

***

### description

> **description**: `string`

Widget description.

***

### drilldownOptions

> **drilldownOptions**: [`DrilldownOptions`](../type-aliases/type-alias.DrilldownOptions.md) \| [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md)

Widget drilldown options.

***

### filters

> **filters**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Widget filters.

***

### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Widget highlights.

***

### oid

> **`readonly`** **oid**: `string`

Unique identifier of the widget.

***

### styleOptions

> **styleOptions**: [`WidgetStyleOptions`](../type-aliases/type-alias.WidgetStyleOptions.md)

Widget style options.

***

### title

> **title**: `string`

Widget title.

***

### widgetType

> **widgetType**: [`WidgetType`](../type-aliases/type-alias.WidgetType.md)

Widget type.


## Filter Tiles

style options.

***

### title

> **title**: `string`

Widget title.

***

### widgetType

> **widgetType**: [`WidgetType`](../type-aliases/type-alias.WidgetType.md)

Widget type.


## Filter Tiles

# Filter Tiles

Vue filter tile components

- [CriteriaFilterTile](class.CriteriaFilterTile.md)
- [DateRangeFilterTile](class.DateRangeFilterTile.md)
- [FiltersPanel](class.FiltersPanel.md)
- [FilterTile](class.FilterTile.md) - Facade component rendering a filter tile based on filter type
- [MemberFilterTile](class.MemberFilterTile.md)
- [RelativeDateFilterTile](class.RelativeDateFilterTile.md)
- [useGetFilterMembers](function.useGetFilterMembers.md)

# Class CriteriaFilterTile

UI component that allows the user to filter numeric or text attributes according to
a number of built-in operations defined in the numeric filter, text filter, or ranking filter.

The arrangement prop determines whether the filter is rendered vertically or horizontally, with the latter intended for toolbar use and omitting title, enable/disable, and collapse/expand functionality.

arrangement prop determines whether the filter is rendered vertically or horizontally, with the latter intended for toolbar use and omitting title, enable/disable, and collapse/expand functionality.

## Example

Here's how you can use the CriteriaFilterTile component in a Vue application:
```vue
<template>
  <CriteriaFilterTile
    :title="criteriaFilterTileProps.title"
    :filter="criteriaFilterTileProps.filter"
    :onUpdate="onUpdate"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CriteriaFilterTile } from '@sisense/sdk-ui-vue';
import { filterFactory } from '@sisense/sdk-data';

const criteriaFilterTileProps = ref({
 title: 'Revenue',
 filter: filterFactory.greaterThanOrEqual(DM.Commerce.Revenue, 10000)
});

const onUpdate = (filter: Filter | null) => {
 ...
}
</script>
```
<img src="../../../img/vue-criteria-filter-tile-example.png" width="600px" />

## Param

Criteria filter tile props

## Properties

### arrangement

> **`readonly`** **arrangement**?: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md)

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Text or numeric filter object to initialize filter type and default values

***

for toolbars

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Text or numeric filter object to initialize filter type and default values

***

### measures

> **`readonly`** **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

List of available measures to rank by. Required only for ranking filters.

***

### onDelete

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **`readonly`** **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### onUpdate

> **`readonly`** **onUpdate**: (`filter`) => `void`

Callback returning updated filter object

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### title

> **`readonly`** **title**: `string`

Title for the filter tile, which is rendered into the header

# Class DateRangeFilterTile

Date Range Filter Tile component for filtering data by date range.

e

> **`readonly`** **title**: `string`

Title for the filter tile, which is rendered into the header

# Class DateRangeFilterTile

Date Range Filter Tile component for filtering data by date range.

## Example

Vue example of configuring the date min max values and handling onChange event.
```vue
<template>
        <DateRangeFilterTile
          :title="dateRangeFilter.title"
          :datasource="dateRangeFilter.dataSource"
          :attribute="dateRangeFilter.attribute"
          :filter="dateRangeFilter.filter"
          :onChange="dateRangeFilter.onChange"
        />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DateRangeFilterTile, type DateRangeFilterTileProps } from '@sisense/sdk-ui-vue';
import { filterFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';

const dateRangeFilterValue = ref<Filter | null>(filterFactory.dateRange(DM.DimDate.Date.Years));

const dateRangeFilter = ref<DateRangeFilterTileProps>({
  title: 'Date Range',
  attribute: DM.DimDate.Date.Years,
  filter: dateRangeFilterValue.value!,
  onChange(filter) {
    dateRangeFilterValue.value = filter;
  },
});
</script>
```
<img src="../../../img/vue-date-range-filter-tile-example.png" width="600px" />

## Param

DateRangeFilterTile props

## Properties

### attribute

> **`readonly`** **attribute**: [`LevelAttribute`](../../sdk-data/interfaces/interface.LevelAttribute.md)

Date level attribute the filter is based on

***

rTile props

## Properties

### attribute

> **`readonly`** **attribute**: [`LevelAttribute`](../../sdk-data/interfaces/interface.LevelAttribute.md)

Date level attribute the filter is based on

***

### datasource

> **`readonly`** **datasource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### earliestDate

> **`readonly`** **earliestDate**?: `string`

Earliest allowed date for selection.

If not specified, the earliest date of the target date-level attribute will be used.

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Date range filter.

***

### lastDate

> **`readonly`** **lastDate**?: `string`

Latest allowed date for selection.

If not specified, the latest date of the target date-level attribute will be used.

***

### onChange

> **`readonly`** **onChange**: (`filter`) => `void`

Callback function that is called when the date range filter object should be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### onDelete

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

[`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### onDelete

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **`readonly`** **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### parentFilters

> **`readonly`** **parentFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on.

***

### title

> **`readonly`** **title**: `string`

Filter tile title

# Class FilterTile

UI component that renders a filter tile based on filter type

## Example

Here’s how to render a filter model as a filter tile.
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { FilterTile } from '@sisense/sdk-ui-vue';
import { filterFactory, type Filter } from '@sisense/sdk-data';
import * as DM from '../assets/sample-ecommerce-model.js';

const filter = ref<Filter>(filterFactory.members(DM.Commerce.Gender, ['Male', 'Female']));
const handleFilterChange = (updatedFilter: Filter | null) => {
 if (updatedFilter) {
   filter.value = updatedFilter;
 }
};
</script>

<template>
 <FilterTile :filter="filter" :onChange="handleFilterChange" />
</template>
```
<img src="../../../img/vue-filter-tile-example.png" width="225px" />

## Param

FilterTile props

## Properties

plate>
 <FilterTile :filter="filter" :onChange="handleFilterChange" />
</template>
```
<img src="../../../img/vue-filter-tile-example.png" width="225px" />

## Param

FilterTile props

## Properties

### defaultDataSource

> **`readonly`** **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Filter to display

***

### onChange

> **`readonly`** **onChange**: (`filter`) => `void`

Callback to handle filter change

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null` |

#### Returns

`void`

***

### onDelete

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **`readonly`** **onEdit**?: (`levelIndex`?) => `void`

Filter edit callback

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `levelIndex`? | `number` | Index of the filter level that triggers the onEdit action (in the case of a CascadingFilter) |

#### Returns

`void`

# Class FiltersPanel

Filters panel component that renders a list of filter tiles

ndex of the filter level that triggers the onEdit action (in the case of a CascadingFilter) |

#### Returns

`void`

# Class FiltersPanel

Filters panel component that renders a list of filter tiles

## Example

Here's how to render a filters panel with a set of filters.
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { FiltersPanel } from '@sisense/sdk-ui-vue';
import { filterFactory, type Filter, type FilterRelations } from '@sisense/sdk-data';
import * as DM from '../assets/sample-ecommerce-model.js';

const filters = ref<Filter[]>([
 filterFactory.members(DM.Commerce.Gender, ['Male', 'Female']),
 filterFactory.members(DM.Commerce.AgeRange, ['0-18', '19-24']),
]);

const handleFiltersChange = (updatedFilters: Filter[] | FilterRelations) => {
 filters.value = updatedFilters as Filter[];
 console.log('Filters changed:', updatedFilters);
};
</script>

<template>
 <FiltersPanel
   :filters="filters"
   :defaultDataSource="DM.DataSource"
   :onFiltersChange="handleFiltersChange"
 />
</template>
```

## Param

FiltersPanel props

## Properties

### config

> **`readonly`** **config**?: [`FiltersPanelConfig`](../../sdk-ui/interfaces/interface.FiltersPanelConfig.md)

The configuration for the filters panel

***

### defaultDataSource

> **`readonly`** **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

lters panel

***

### defaultDataSource

> **`readonly`** **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source used for filter tiles

***

### filters

> **`readonly`** **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Array of filters to display

***

### onFiltersChange

> **`readonly`** **onFiltersChange**: (`filters`) => `void`

Callback to handle changes in filters

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

#### Returns

`void`

# Class MemberFilterTile

UI component that allows the user to select members to include/exclude in a
filter. A query is executed against the provided data source to fetch
all members that are selectable.

s MemberFilterTile

UI component that allows the user to select members to include/exclude in a
filter. A query is executed against the provided data source to fetch
all members that are selectable.

## Example

Below is an example for filtering countries in the `Country` dimension of the `Sample ECommerce` data model.
```vue
<template>
      <MemberFilterTile
        :attribute="memberFilter.attribute"
        :onChange="memberFilter.onChange"
        :dataSource="memberFilter.dataSource"
        :title="memberFilter.title"
      />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MemberFilterTile, type MemberFilterTileProps } from '@sisense/sdk-ui-vue';

const memberFilterValue = ref<Filter | null>(null);

const memberFilter = ref<MemberFilterTileProps>({
  dataSource: DM.DataSource,
  title: 'Member Filter',
  attribute: DM.DimProducts.ProductName,
  filter: memberFilterValue.value,
  onChange(filter) {
    memberFilterValue.value = filter;
  },
});

</script>
```
<img src="../../../img/vue-member-filter-tile-example.png" width="600px" />

## Param

MemberFilterTile props

## Properties

### attribute

> **`readonly`** **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Attribute to filter on. A query will run to fetch all this attribute's members

***

s

### attribute

> **`readonly`** **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Attribute to filter on. A query will run to fetch all this attribute's members

***

### dataSource

> **`readonly`** **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null`

Source filter object. Caller is responsible for keeping track of filter state

***

### onChange

> **`readonly`** **onChange**: (`filter`) => `void`

Callback indicating when the source members filter should be updated

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null` |

#### Returns

`void`

***

### onDelete

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **`readonly`** **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### parentFilters

> **`readonly`** **parentFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on

***

### title

> **`readonly`** **title**: `string`

Title for the filter tile, which is rendered into the header

ata/interfaces/interface.Filter.md)[]

List of filters this filter is dependent on

***

### title

> **`readonly`** **title**: `string`

Title for the filter tile, which is rendered into the header

# Class RelativeDateFilterTile

Relative Date Filter Tile component for filtering data by relative date.

## Example

Vue example of configuring the date min max values and handling onUpdate event.
```vue
<template>
  <RelativeDateFilterTile
    :title="relativeDateFilter.title"
    :filter="relativeDateFilter.filter"
    :arrangement="relativeDateFilter.arrangement"
    :onUpdate="relativeDateFilter.onUpdate"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RelativeDateFilterTile, type RelativeDateFilterTileProps } from '@sisense/sdk-ui-vue';
import { filterFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';

const relativeDateFilterValue = ref<Filter | null>(filterFactory.dateRelativeTo(DM.DimDate.Date.Months, 0, 18));

const relativeDateFilter = ref<RelativeDateFilterTileProps>({
  title: 'Relative Date Filter Tile',
  filter: relativeDateFilterValue.value!,
  arrangement: 'vertical',
  onUpdate(filter) {
    relativeDateFilterValue.value = filter;
  },
});
</script>
```
<img src="../../../img/vue-relative-date-filter-tile-example.png" width="225px" />

## Param

RelativeDateFilterTile props

## Properties

lativeDateFilterValue.value = filter;
  },
});
</script>
```
<img src="../../../img/vue-relative-date-filter-tile-example.png" width="225px" />

## Param

RelativeDateFilterTile props

## Properties

### arrangement

> **`readonly`** **arrangement**?: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md)

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

### filter

> **`readonly`** **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Relative date filter.

***

### limit

> **`readonly`** **limit**?: `object`

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

> **`readonly`** **onDelete**?: () => `void`

Filter delete callback

#### Returns

`void`

***

### onEdit

> **`readonly`** **onEdit**?: () => `void`

Filter edit callback

#### Returns

`void`

***

### onUpdate

> **`readonly`** **onUpdate**: (`filter`) => `void`

Callback function that is called when the relative date filter object should be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### title

> **`readonly`** **title**: `string`

Filter tile title

| Type |
| :------ | :------ |
| `filter` | [`Filter`](../../sdk-data/interfaces/interface.Filter.md) |

#### Returns

`void`

***

### title

> **`readonly`** **title**: `string`

Filter tile title

# Function useGetFilterMembers

> **useGetFilterMembers**(`params`): `ToRefs`\< [`FilterMembersState`](../type-aliases/type-alias.FilterMembersState.md) \>

A Vue composable function `useGetFilterMembers` that fetches members of a provided filter.

Those members can be used to display a list of members in a third-party filter component.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`GetFilterMembersParams`](../interfaces/interface.GetFilterMembersParams.md) \> | The parameters for fetching filter members, supporting reactive Vue refs.<br />Includes the filter to fetch members for, optional default data source, parent filters, and count. |

## Returns

`ToRefs`\< [`FilterMembersState`](../type-aliases/type-alias.FilterMembersState.md) \>

cludes the filter to fetch members for, optional default data source, parent filters, and count. |

## Returns

`ToRefs`\< [`FilterMembersState`](../type-aliases/type-alias.FilterMembersState.md) \>

## Example

How to use `useGetFilterMembers` within a Vue component:
```vue
<script setup>
import { ref } from 'vue';
import { useGetFilterMembers, filterFactory } from '@sisense/sdk-ui-vue';
import * as DM from './data-model';

const filter = ref(filterFactory.members(DM.Country.Country, ['United States', 'Canada']));

const { data, isLoading, isError, isSuccess, error, loadMore } = useGetFilterMembers({
  filter,
  // Optional parameters
  defaultDataSource: 'Sample ECommerce',
  parentFilters: [],
});
</script>
```

The composable returns an object with the following reactive properties to manage the filter members state:
- `data`: The filter members data containing selectedMembers, allMembers, excludeMembers, enableMultiSelection, and hasBackgroundFilter.
- `isLoading`: Indicates if the filter members fetching is in progress.
- `isError`: Indicates if an error occurred during filter members fetching.
- `isSuccess`: Indicates if the filter members fetching executed successfully without errors.
- `error`: Contains the error object if an error occurred during the fetching.
- `loadMore`: Function to load more data rows.

This composable facilitates integrating Sisense filter members fetching into Vue applications, enabling developers
to easily manage filter member states and dynamically adjust parameters based on application needs.

acilitates integrating Sisense filter members fetching into Vue applications, enabling developers
to easily manage filter member states and dynamically adjust parameters based on application needs.


## Drilldown

# Drilldown

Vue components for creating drilldown experiences

- [ContextMenu](class.ContextMenu.md)
- [DrilldownBreadcrumbs](class.DrilldownBreadcrumbs.md)
- [DrilldownWidget](class.DrilldownWidget.md)

# Class ContextMenu

`ContextMenu` component from the `@sisense/sdk-ui-vue` package.
This component provides a context menu that can be customized with different items and sections.
It allows for flexible positioning and can be easily integrated into Vue applications.

## Example

Here's how to use the `ContextMenu` component:
```vue
<template>
  <ContextMenu :closeContextMenu="closeMenu" :itemSections="sections" :position="menuPosition">
  </ContextMenu>
</template>

<script>
import { ref } from 'vue';
import ContextMenu from './ContextMenu.vue';

export default {
  components: { ContextMenu },
  setup() {
    const sections = ref([...]);
    const menuPosition = ref({ top: 0, left: 0 });
    const closeMenu = () => {};
   }
};
</script>
```

## Properties

### closeContextMenu

> **`readonly`** **closeContextMenu**: () => `void`

Function to close the context menu. It should be a function that sets the visibility of the context menu to false.

#### Returns

`void`

***

nu

> **`readonly`** **closeContextMenu**: () => `void`

Function to close the context menu. It should be a function that sets the visibility of the context menu to false.

#### Returns

`void`

***

### itemSections

> **`readonly`** **itemSections**?: [`MenuItemSection`](../type-aliases/type-alias.MenuItemSection.md)[]

An array of sections, each containing an array of items to be rendered in the context menu. Each item can be a string or an object specifying the item's properties.

***

### position

> **`readonly`** **position**?: [`MenuPosition`](../type-aliases/type-alias.MenuPosition.md) \| `null`

An object specifying the position of the context menu. It should contain `top` and `left` properties to position the menu on the screen.

# Class DrilldownBreadcrumbs

`DrilldownBreadcrumbs` component from the `@sisense/sdk-ui-vue` package.
This component provides a way to display and interact with the drilldown path in data visualization components,
allowing users to navigate through different levels of data drilldowns. It includes functionalities to clear selections
or slice through the drilldown selections for a more intuitive data exploration experience.

s to navigate through different levels of data drilldowns. It includes functionalities to clear selections
or slice through the drilldown selections for a more intuitive data exploration experience.

## Example

Here's how to use the `DrilldownBreadcrumbs` component:
```vue
<template>
  <DrilldownBreadcrumbs
    :clearDrilldownSelections="clearSelections"
    :currentDimension="currentDimension"
    :sliceDrilldownSelections="sliceSelections"
    :filtersDisplayValues="filtersDisplayValues"
  />
</template>

<script>
import { ref } from 'vue';
import DrilldownBreadcrumbs from './DrilldownBreadcrumbs.vue';

export default {
  components: { DrilldownBreadcrumbs },
  setup() {
    const clearSelections = () => {};
    const currentDimension = ref({<current dimension object>});
    const sliceSelections = (index) => { <logic to slice selections up to index> };
    const filtersDisplayValues = ref({<object mapping filter values to display values>});

    return { clearSelections, currentDimension, sliceSelections, filtersDisplayValues };
  }
};
</script>
```

## Properties

DisplayValues = ref({<object mapping filter values to display values>});

    return { clearSelections, currentDimension, sliceSelections, filtersDisplayValues };
  }
};
</script>
```

## Properties

### Widget

#### clearDrilldownSelections

> **`readonly`** **clearDrilldownSelections**: () => `void`

Callback function that is evaluated when the close (X) button is clicked

##### Returns

`void`

***

#### currentDimension

> **`readonly`** **currentDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Currently selected drilldown dimension

***

#### filtersDisplayValues

> **`readonly`** **filtersDisplayValues**: `string`[][]

List of drilldown filters formatted to be displayed as breadcrumbs

***

#### sliceDrilldownSelections

> **`readonly`** **sliceDrilldownSelections**: (`i`) => `void`

Callback function that is evaluated when a breadcrumb is clicked

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `i` | `number` |

##### Returns

`void`

elections**: (`i`) => `void`

Callback function that is evaluated when a breadcrumb is clicked

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `i` | `number` |

##### Returns

`void`

# Class DrilldownWidget

Vue component designed to add drilldown functionality to any type of chart

It acts as a wrapper around a given chart component, enhancing it with drilldown capabilities

The widget offers several features including:
- A context menu for initiating drilldown actions (can be provided as a custom component)
- Breadcrumbs that not only allow for drilldown selection slicing but also
provide an option to clear the selection (can be provided as a custom component)
- Filters specifically created for drilldown operation
- An option to navigate to the next drilldown dimension

When an `initialDimension` is specified, the `drilldownDimension` will automatically inherit its value,
even before any points on the chart are selected.
This allows for complete control over the chart's dimensions to be handed over to the DrilldownWidget

mension` will automatically inherit its value,
even before any points on the chart are selected.
This allows for complete control over the chart's dimensions to be handed over to the DrilldownWidget

## Example

Here's how to use the `DrilldownWidget` component:
```vue
<template>
   <DrilldownWidget
     :drilldownPaths="drilldownPaths"
     :initialDimension="dimProductName"
   >
     <template
       #chart="{ drilldownFilters, drilldownDimension, onDataPointsSelected, onContextMenu }"
     >
       <ChartWidget
         chart-type="bar"
         v-bind:filters="drilldownFilters"
         :dataOptions="{
           ...chartProps.dataOptions,
           category: [drilldownDimension],
         }"
         :highlight-selection-disabled="true"
         :dataSet="chartProps.dataSet"
         :style="chartProps.styleOptions"
         :on-data-points-selected="(dataPoints: any, event: any) => {
           onDataPointsSelected(dataPoints);
           onContextMenu({ left: event.clientX, top: event.clientY });
         }"
         :on-data-point-click="(dataPoint: any, event: any) => {
           onDataPointsSelected([dataPoint]);
           onContextMenu({ left: event.clientX, top: event.clientY });
         }"
         :on-data-point-context-menu="(dataPoint: any, event: any) => {
           onDataPointsSelected([dataPoint]);
           onContextMenu({ left: event.clientX, top: event.clientY });
         }"
       />
     </template>
   </DrilldownWidget>
</template>

<script>
import { ref } from 'vue';
import { DrilldownWidget } from '@sisense/sdk-ui-vue';

const chartProps = ref<ChartProps>({
 chartType: 'bar',
 dataSet: DM.DataSource,
 dataOptions: {
   category: [dimProductName],
   value: [{ column: measureTotalRevenue, sortType: 'sortDesc' }],
   breakBy: [],
 },
 filters: [filterFactory.topRanking(dimProductName, measureTotalRevenue, 10)],
 styleOptions: {
   xAxis: {
     title: {
       text: 'Product Name',
       enabled: true,
     },
   },
   yAxis: {
     title: {
       text: 'Total Revenue',
       enabled: true,
     },
   },
 },
});
const drilldownPaths = [DM.DimCountries.CountryName, DM.DimProducts.ProductName];
const dimProductName = DM.DimProducts.ProductName;
</script>
```
<img src="../../../img/vue-drilldown-widget-example.png" width="800px" />

[DM.DimCountries.CountryName, DM.DimProducts.ProductName];
const dimProductName = DM.DimProducts.ProductName;
</script>
```
<img src="../../../img/vue-drilldown-widget-example.png" width="800px" />

## Param

DrilldownWidget properties

## Properties

### Widget

#### config

> **`readonly`** **config**: [`DrilldownWidgetConfig`](../type-aliases/type-alias.DrilldownWidgetConfig.md)

An object that allows users to pass advanced configuration options as a prop for the `DrilldownWidget` component

***

#### drilldownPaths

> **`readonly`** **drilldownPaths**: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../../sdk-ui/interfaces/interface.Hierarchy.md))[] \| `undefined`

Dimensions and hierarchies available for drilldown on.

***

#### initialDimension

> **`readonly`** **initialDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Initial dimension to apply first set of filters to


## Queries

# Queries

Vue composables for working with queries

- [useExecuteCsvQuery](function.useExecuteCsvQuery.md)
- [useExecuteCustomWidgetQuery](function.useExecuteCustomWidgetQuery.md)
- [useExecutePivotQuery](function.useExecutePivotQuery.md)
- [useExecuteQuery](function.useExecuteQuery.md)

# Function useExecuteCsvQuery

> **useExecuteCsvQuery**(`params`): `ToRefs`\< [`CsvQueryState`](../../sdk-ui/type-aliases/type-alias.CsvQueryState.md) \>

A Vue composable function `useExecuteCsvQuery` that executes a CSV data query.

useExecuteCsvQuery**(`params`): `ToRefs`\< [`CsvQueryState`](../../sdk-ui/type-aliases/type-alias.CsvQueryState.md) \>

A Vue composable function `useExecuteCsvQuery` that executes a CSV data query.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`ExecuteCsvQueryParams`](../../sdk-ui/interfaces/interface.ExecuteCsvQueryParams.md) \> | The parameters for the query, supporting reactive Vue refs.<br />Includes details such as `dataSource`, `dimensions`, `measures`, `filters`, and more, allowing for comprehensive<br />query configuration. The `filters` parameter supports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`CsvQueryState`](../../sdk-ui/type-aliases/type-alias.CsvQueryState.md) \>

er supports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`CsvQueryState`](../../sdk-ui/type-aliases/type-alias.CsvQueryState.md) \>

## Example

How to use `useExecuteCsvQuery` within a Vue component:
```vue
<script setup>
import { ref } from 'vue';
import { useExecuteCsvQuery } from '@sisense/sdk-ui-vue';

const dataSource = ref('your_data_source_id');
// Set up other query parameters as needed (dimensions, measures, filters, etc.)

const { data, isLoading, isError, isSuccess, error } = useExecuteCsvQuery({
  dataSource,
  dimensions: [...],
  measures: [...],
  filters: [...],
  config: { asDataStream: false },
  // Additional query parameters
});
</script>
```

The composable returns an object with the following reactive properties to manage the query state:
- `data`: The CSV data (string or Blob) returned from the query. It remains `undefined` until the query completes successfully.
- `isLoading`: Indicates if the query is in progress.
- `isError`: Indicates if an error occurred during query execution.
- `isSuccess`: Indicates if the query executed successfully without errors.
- `error`: Contains the error object if an error occurred during the query.

This composable facilitates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.

composable facilitates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.

# Function useExecuteCustomWidgetQuery

> **useExecuteCustomWidgetQuery**(`params`): `ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

Vue composable that takes a custom widget component's props and executes a data query.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`ExecuteCustomWidgetQueryParams`](../interfaces/interface.ExecuteCustomWidgetQueryParams.md) \> | Custom widget component props containing data source, data options, filters, etc. |

## Returns

`ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

Query state object with data, loading, and error states

ning data source, data options, filters, etc. |

## Returns

`ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

Query state object with data, loading, and error states

## Example

```vue
<script setup>
import {
  useExecuteCustomWidgetQuery,
  type CustomWidgetComponentProps,
  type ExecuteCustomWidgetQueryParams,
} from '@sisense/sdk-ui-vue';
import * as DM from './sample-ecommerce';

const props: CustomWidgetComponentProps = {
  dataSource: DM.DataSource,
  dataOptions: {
    category: [DM.Commerce.Gender],
    value: [DM.Measures.SumRevenue],
  },
  styleOptions: {},
};

const params: ExecuteCustomWidgetQueryParams = {
  ...props,
  count: 10,
  offset: 0,
};

const { data, isLoading, isError, isSuccess } = useExecuteCustomWidgetQuery(params);
</script>
```

# Function useExecutePivotQuery

> **useExecutePivotQuery**(`params`): `ToRefs`\< [`PivotQueryState`](../../sdk-ui/type-aliases/type-alias.PivotQueryState.md) \>

A Vue composable function `useExecutePivotQuery` that executes a pivot data query.

PivotQuery**(`params`): `ToRefs`\< [`PivotQueryState`](../../sdk-ui/type-aliases/type-alias.PivotQueryState.md) \>

A Vue composable function `useExecutePivotQuery` that executes a pivot data query.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`ExecutePivotQueryParams`](../../sdk-ui/interfaces/interface.ExecutePivotQueryParams.md) \> | The parameters for the query, supporting reactive Vue refs.<br />Includes details such as `dataSource`, `dimensions`, `rows`, `columns`, `values`, `filters` and more, allowing for comprehensive<br />query configuration. The `filters` parameter supports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`PivotQueryState`](../../sdk-ui/type-aliases/type-alias.PivotQueryState.md) \>

upports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`PivotQueryState`](../../sdk-ui/type-aliases/type-alias.PivotQueryState.md) \>

## Example

How to use `useExecutePivotQuery` within a Vue component:
```vue
<script setup>
import { ref } from 'vue';
import { useExecutePivotQuery } from '@sisense/sdk-ui-vue';

const dataSource = ref('your_data_source_id');
// Set up other query parameters as needed (dimensions, rows, columns, values, filters, etc.)

const { data, isLoading, isError, isSuccess, error } = useExecutePivotQuery({
  dataSource,
  columns: [...],
  rows: [...],
  values: [...],
  filters: [...],
  // Additional query parameters
});
</script>
```

The composable returns an object with the following reactive properties to manage the query state:
- `data`: The Pivot query result data set returned from the query. It remains `undefined` until the query completes successfully.
- `isLoading`: Indicates if the query is in progress.
- `isError`: Indicates if an error occurred during query execution.
- `isSuccess`: Indicates if the query executed successfully without errors.
- `error`: Contains the error object if an error occurred during the query.

This composable facilitates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.

composable facilitates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.

# Function useExecuteQuery

> **useExecuteQuery**(`params`): `ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

A Vue composable function `useExecuteQuery` for executing Sisense queries with flexible parameters.
It handles query execution, including loading, error, and success states, and enables dynamic query configuration
through reactive parameters. This composable is particularly useful for applications requiring data from Sisense
analytics, offering a reactive and declarative approach to data fetching and state management.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`ExecuteQueryParams`](../interfaces/interface.ExecuteQueryParams.md) \> | The parameters for the query, supporting reactive Vue refs.<br />Includes details such as `dataSource`, `dimensions`, `measures`, `filters`, and more, allowing for comprehensive<br />query configuration. The `filters` parameter supports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

arameter supports dynamic filtering based on user interaction or other application<br />state changes. |

## Returns

`ToRefs`\< [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md) \>

## Example

How to use `useExecuteQuery` within a Vue component:
```vue
<script setup>
import { ref } from 'vue';
import { useExecuteQuery } from '@sisense/sdk-ui-vue';

const dataSource = ref('your_data_source_id');
// Set up other query parameters as needed (dimensions, measures, filters, etc.)

const { data, isLoading, isError, isSuccess, error } = useExecuteQuery({
  dataSource,
  dimensions: [...],
  measures: [...],
  filters: [...],
  // Additional query parameters
});
</script>
```

The composable returns an object with the following reactive properties to manage the query state:
- `data`: The data returned from the query. It remains `undefined` until the query completes successfully.
- `isLoading`: Indicates if the query is in progress.
- `isError`: Indicates if an error occurred during query execution.
- `isSuccess`: Indicates if the query executed successfully without errors.
- `error`: Contains the error object if an error occurred during the query.

This composable facilitates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.


## Data Grids

litates integrating Sisense data fetching into Vue applications, enabling developers
to easily manage query states and dynamically adjust query parameters based on application needs.


## Data Grids

# Data Grids

Vue components for data grids

- [PivotTable](class.PivotTable.md)
- [Table](class.Table.md)

# Class PivotTable

A Vue component for Pivot table with pagination.

eds.


## Data Grids

# Data Grids

Vue components for data grids

- [PivotTable](class.PivotTable.md)
- [Table](class.Table.md)

# Class PivotTable

A Vue component for Pivot table with pagination.

## Example

Here's how you can use the PivotTable component in a Vue application:
```vue
<template>
   <PivotTable :dataOptions="pivotTableProps.dataOptions" :dataSet="pivotTableProps.dataSet"
       :styleOptions="pivotTableProps.styleOptions" :filters="pivotTableProps.filters" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import { PivotTable, type PivotTableProps } from '@sisense/sdk-ui-vue';
import * as DM from '../assets/sample-retail-model';

const dimCategoryName = DM.DimProducts.CategoryName;
const dimColor = DM.DimProducts.Color;
const dimProductName = DM.DimProducts.ProductName;
const measureTotalRevenue = measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue, 'Total Revenue');

const pivotTableProps = ref<PivotTableProps>({
  dataSet: DM.DataSource,
  dataOptions: {
    rows: [dimProductName, dimColor],
    columns: [dimCategoryName],
    values: [measureTotalRevenue],
  },
  styleOptions: {
    width: 1200,
    height: 500,
  },
  filters: [filterFactory.topRanking(dimProductName, measureTotalRevenue, 1000)],
});

</script>
```
<img src="../../../img/vue-pivot-table-example.png" width="800px" />

1200,
    height: 500,
  },
  filters: [filterFactory.topRanking(dimProductName, measureTotalRevenue, 1000)],
});

</script>
```
<img src="../../../img/vue-pivot-table-example.png" width="800px" />

## Remarks

Configuration options can also be applied within the scope of a `<SisenseContextProvider>` to control the default behavior of PivotTable, by changing available settings within `appConfig.chartConfig.tabular.*`

Follow the link to [AppConfig](../type-aliases/type-alias.AppConfig.md) for more details on the available settings.

## Properties

### Data

#### dataOptions

> **`readonly`** **dataOptions**: [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### dataSet

> **`readonly`** **dataSet**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source name (as a `string`) - e.g. `Sample ECommerce`.

If not specified, the component will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

Filters that will slice query results

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

### Callbacks

#### onDataPointClick

> **`readonly`** **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **`readonly`** **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

### Representation

#### styleOptions

> **`readonly`** **styleOptions**?: [`PivotTableStyleOptions`](../interfaces/interface.PivotTableStyleOptions.md)

Configurations for how to style and present a pivot table's data.

# Class Table

Table with aggregation and pagination.

`PivotTableStyleOptions`](../interfaces/interface.PivotTableStyleOptions.md)

Configurations for how to style and present a pivot table's data.

# Class Table

Table with aggregation and pagination.

## Example

Here's how you can use the Table component in a Vue application:
```vue
<template>
 <Table :dataOptions="tableProps.dataOptions" :dataSet="tableProps.dataSet"
     :styleOptions="tableProps.styleOptions" :filters="tableProps.filters" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';
import { Table, type TableProps } from '@sisense/sdk-ui-vue';

const dimProductName = DM.DimProducts.ProductName;
const measureTotalRevenue = measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue, 'Total Revenue');

 const tableProps = ref<TableProps>({
     dataSet: DM.DataSource,
     dataOptions: {
       columns: [dimProductName, measureTotalRevenue],
     },
     styleOptions: {
       width: 800,
       height: 500,
     },
     filters: [filterFactory.topRanking(dimProductName, measureTotalRevenue, 10)],
 });
</script>
```
<img src="../../../img/vue-table-example.png" width="800px" />

## Param

Table properties

## Properties

ers: [filterFactory.topRanking(dimProductName, measureTotalRevenue, 10)],
 });
</script>
```
<img src="../../../img/vue-table-example.png" width="800px" />

## Param

Table properties

## Properties

### Data

#### dataOptions

> **`readonly`** **dataOptions**: [`TableDataOptions`](../interfaces/interface.TableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### dataSet

> **`readonly`** **dataSet**?: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

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

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

nly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

### Callbacks

#### onDataReady

> **`readonly`** **onDataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

### Representation

#### styleOptions

> **`readonly`** **styleOptions**?: [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md)

Configurations for how to style and present a table's data.


## Generative Ai

styleOptions

> **`readonly`** **styleOptions**?: [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md)

Configurations for how to style and present a table's data.


## Generative Ai

# Generative AI

Vue components and composables for working with Generative AI features provided by Sisense Fusion
::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

- [AiContextProvider](class.AiContextProvider.md)
- [Chatbot](class.Chatbot.md)
- [GetNlgInsights](class.GetNlgInsights.md)
- [useGetNlgInsights](function.useGetNlgInsights.md)
- [useGetNlqResult](function.useGetNlqResult.md) <Badge type="beta" text="Beta" />
- [useGetQueryRecommendations](function.useGetQueryRecommendations.md) <Badge type="beta" text="Beta" />

# Class AiContextProvider

A Vue component that wraps all generative AI components and hooks.

## Example

```vue
<script setup lang="ts">
import { SisenseContextProvider } from '@sisense/sdk-ui-vue';
import { AiContextProvider, Chatbot } from '@sisense/sdk-ui-vue/ai';
</script>

<template>
 <SisenseContextProvider v-bind="sisenseContextProps">
   <AiContextProvider>
     <Chatbot />
   </AiContextProvider>
 </SisenseContextProvider>
</template>
```

## Param

[AiContextProviderProps](../interfaces/interface.AiContextProviderProps.md)

## Properties

extProvider>
     <Chatbot />
   </AiContextProvider>
 </SisenseContextProvider>
</template>
```

## Param

[AiContextProviderProps](../interfaces/interface.AiContextProviderProps.md)

## Properties

### volatile

> **`readonly`** **volatile**?: `boolean`

Boolean flag to indicate whether the chat session should be volatile.

When `false` the chat session history will be stored per user per datamodel. The retention period is configurable in Sisense Fusion.

When the `Chatbot` component renders, if a previous chat history exists for the current user and datamodel, it will be restored. The user may continue the conversation or clear the history.

When `true` a new chat session (with no history) will be created each time the `Chatbot` comoponent initializes.

# Class Chatbot

An Vue component that renders a chatbot with data topic selection.

## Example

Here's how you can use the Chatbot component in a Vue application:
```vue
<script setup lang="ts">
import { Chatbot, type ChatbotProps } from '@sisense/sdk-ui-vue/ai';

const chatbotProps: ChatbotProps = {
 width: 500,
 height: 700,
 config: {
   numOfRecommendations: 5,
 },
};
</script>

<template>
 <Chatbot
   :width="chatbotProps.width"
   :height="chatbotProps.height"
   :config="chatbotProps.config"
 />
</template>
```

<img src="../../../img/vue-chatbot-example.png" width="500px" />

## Param

[ChatbotProps](../interfaces/interface.ChatbotProps.md)

## Properties

:config="chatbotProps.config"
 />
</template>
```

<img src="../../../img/vue-chatbot-example.png" width="500px" />

## Param

[ChatbotProps](../interfaces/interface.ChatbotProps.md)

## Properties

### config

> **`readonly`** **config**?: `Partial`\< [`ChatConfig`](../interfaces/interface.ChatConfig.md) \>

Various configuration options for the chatbot

***

### height

> **`readonly`** **height**?: `Height`\< `number` \| `string` \>

Total height of the chatbot

If not specified, a default height of `900px` will be used.

***

### width

> **`readonly`** **width**?: `Width`\< `number` \| `string` \>

Total width of the chatbot

If not specified, a default width of `500px` will be used.

# Class GetNlgInsights

A Vue component that fetches and displays a collapsible analysis of the provided query using natural language generation (NLG).
Specifying a query is similar to providing parameters to a [`useExecuteQuery`](../queries/function.useExecuteQuery.md) composable, using dimensions, measures, and filters.

language generation (NLG).
Specifying a query is similar to providing parameters to a [`useExecuteQuery`](../queries/function.useExecuteQuery.md) composable, using dimensions, measures, and filters.

## Example

Here's how you can use the GetNlgInsights component in a Vue application:
```vue
<script setup lang="ts">
import { GetNlgInsights, type GetNlgInsightsProps } from '@sisense/sdk-ui-vue/ai';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';

const props: GetNlgInsightsProps = {
 dataSource: DM.DataSource.title,
 dimensions: [DM.DimProducts.CategoryName],
 measures: [measureFactory.sum(DM.DimProducts.Price)],
};
</script>

<template>
 <GetNlgInsights
   :dataSource="props.dataSource"
   :dimensions="props.dimensions"
   :measures="props.measures"
 />
</template>
```
<img src="../../../img/vue-get-nlg-insights-example.png" width="700"/>

## Param

[GetNlgInsightsProps](../interfaces/interface.GetNlgInsightsProps.md)

## Properties

### dataSource

> **`readonly`** **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The data source that the query targets - e.g. `Sample ECommerce`

***

### dimensions

> **`readonly`** **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

at the query targets - e.g. `Sample ECommerce`

***

### dimensions

> **`readonly`** **dimensions**?: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

Dimensions of the query

***

### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters of the query

***

### measures

> **`readonly`** **measures**?: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

Measures of the query

***

### verbosity

> **`readonly`** **verbosity**?: `"High"` \| `"Low"`

The verbosity of the NLG summarization

# Function useGetNlgInsights

> **useGetNlgInsights**(`params`): [`UseGetNlgInsightsState`](../interfaces/interface.UseGetNlgInsightsState.md)

A Vue composable that fetches an analysis of the provided query using natural language generation (NLG).
Specifying a query is similar to providing parameters to a [`useExecuteQuery`](../queries/function.useExecuteQuery.md) composable, using dimensions, measures, and filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`UseGetNlgInsightsParams`](../interfaces/interface.UseGetNlgInsightsParams.md) \> | [UseGetNlgInsightsParams](../interfaces/interface.UseGetNlgInsightsParams.md) |

pe-alias.MaybeRefOrWithRefs.md)\< [`UseGetNlgInsightsParams`](../interfaces/interface.UseGetNlgInsightsParams.md) \> | [UseGetNlgInsightsParams](../interfaces/interface.UseGetNlgInsightsParams.md) |

## Returns

[`UseGetNlgInsightsState`](../interfaces/interface.UseGetNlgInsightsState.md)

The composable load state that contains the status of the execution and a text summary result (data)

## Example

```vue
<script setup lang="ts">
import { useGetNlgInsights, type GetNlgInsightsProps } from '@sisense/sdk-ui-vue/ai';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';

const props: GetNlgInsightsProps = {
 dataSource: DM.DataSource.title,
 dimensions: [DM.DimProducts.CategoryName],
 measures: [measureFactory.sum(DM.DimProducts.Price)],
};
const { data: nlgInsights } = useGetNlgInsights(props);
</script>

<template>
 {{ nlgInsights }}
</template>
```

# Function useGetNlqResult <Badge type="beta" text="Beta" />

> **useGetNlqResult**(`params`): [`UseGetNlqResultState`](../interfaces/interface.UseGetNlqResultState.md)

A Vue composable that enables natural language query (NLQ) against a data model or perspective.

seGetNlqResult**(`params`): [`UseGetNlqResultState`](../interfaces/interface.UseGetNlqResultState.md)

A Vue composable that enables natural language query (NLQ) against a data model or perspective.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`UseGetNlqResultParams`](../interfaces/interface.UseGetNlqResultParams.md) \> | [UseGetNlqResultParams](../interfaces/interface.UseGetNlqResultParams.md) |

## Returns

[`UseGetNlqResultState`](../interfaces/interface.UseGetNlqResultState.md)

The composable NLQ load state that contains the status of the execution, the result (data) as WidgetProps

## Example

```vue
<script setup lang="ts">
import { ChartWidget } from '@sisense/sdk-ui-vue';
import { useGetNlqResult, type UseGetNlqResultParams } from '@sisense/sdk-ui-vue/ai';

const params: UseGetNlqResultParams = {
 dataSource: 'Sample Retail',
 query: 'Show me the lowest product prices by country'
};
const { data: nlqResult } = useGetNlqResult(params);
</script>

<template>
 <ChartWidget v-bind="nlqResult" />
</template>
```

mple Retail',
 query: 'Show me the lowest product prices by country'
};
const { data: nlqResult } = useGetNlqResult(params);
</script>

<template>
 <ChartWidget v-bind="nlqResult" />
</template>
```

# Function useGetQueryRecommendations <Badge type="beta" text="Beta" />

> **useGetQueryRecommendations**(`params`): [`UseGetQueryRecommendationsState`](../interfaces/interface.UseGetQueryRecommendationsState.md)

A Vue composable that fetches recommended questions for a data model or perspective.

This composable includes the same code that fetches the initial suggested questions in the chatbot.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`UseGetQueryRecommendationsParams`](../interfaces/interface.UseGetQueryRecommendationsParams.md) \> | [UseGetQueryRecommendationsParams](../interfaces/interface.UseGetQueryRecommendationsParams.md) |

## Returns

[`UseGetQueryRecommendationsState`](../interfaces/interface.UseGetQueryRecommendationsState.md)

The composable load state that contains the status of the execution and recommendations result (data) with recommended question text and its corresponding `widgetProps`

ueryRecommendationsState.md)

The composable load state that contains the status of the execution and recommendations result (data) with recommended question text and its corresponding `widgetProps`

## Example

```vue
<script setup lang="ts">
import {
 useGetQueryRecommendations,
 type UseGetQueryRecommendationsParams,
} from '@sisense/sdk-ui-vue/ai';

const params: UseGetQueryRecommendationsParams = {
 contextTitle: 'Sample Retail',
 count: 3,
};
const { data: recommendations = [] } = useGetQueryRecommendations(params);
</script>

<template>
 <ul>
   <li v-for="r in recommendations" :key="r.nlqPrompt">
     {{ r.nlqPrompt }}
   </li>
 </ul>
</template>
```


## Interfaces

[] } = useGetQueryRecommendations(params);
</script>

<template>
 <ul>
   <li v-for="r in recommendations" :key="r.nlqPrompt">
     {{ r.nlqPrompt }}
   </li>
 </ul>
</template>
```


## Interfaces

# Interfaces

TypeScript interfaces for components and composables listed above

- [AiContextProviderProps](interface.AiContextProviderProps.md)
- [AreaChartProps](interface.AreaChartProps.md)
- [AreamapChartDataOptions](interface.AreamapChartDataOptions.md)
- [AreamapChartProps](interface.AreamapChartProps.md)
- [AreamapStyleOptions](interface.AreamapStyleOptions.md)
- [AreaRangeChartProps](interface.AreaRangeChartProps.md)
- [AreaRangeStyleOptions](interface.AreaRangeStyleOptions.md)
- [AreaStyleOptions](interface.AreaStyleOptions.md)
- [BarChartProps](interface.BarChartProps.md)
- [BoxplotChartProps](interface.BoxplotChartProps.md)
- [BoxplotStyleOptions](interface.BoxplotStyleOptions.md)
- [CalendarHeatmapChartDataOptions](interface.CalendarHeatmapChartDataOptions.md)
- [CalendarHeatmapChartProps](interface.CalendarHeatmapChartProps.md)
- [CalendarHeatmapStyleOptions](interface.CalendarHeatmapStyleOptions.md)
- [CartesianChartDataOptions](interface.CartesianChartDataOptions.md)
- [CategoricalChartDataOptions](interface.CategoricalChartDataOptions.md)
- [ChartProps](interface.ChartProps.md)
- [ChartWidgetProps](interface.ChartWidgetProps.md)
- [ChatbotProps](interface.ChatbotProps.md)
- [ChatConfig](interface.ChatConfig.md)
- [ColumnChartProps](interface.ColumnChartProps.md)
- [ComposableDashboardProps](interface.ComposableDashboardProps.md)
- [ContextMenuProps](interface.ContextMenuProps.md)
- [CriteriaFilterTileProps](interface.CriteriaFilterTileProps.md)
- [CustomWidgetComponentProps](interface.CustomWidgetComponentProps.md)
- [CustomWidgetProps](interface.CustomWidgetProps.md)
- [DashboardByIdConfig](interface.DashboardByIdConfig.md)
- [DashboardByIdProps](interface.DashboardByIdProps.md)
- [DashboardConfig](interface.DashboardConfig.md)
- [DashboardFiltersPanelConfig](interface.DashboardFiltersPanelConfig.md)
- [DashboardLayoutOptions](interface.DashboardLayoutOptions.md)
- [DashboardProps](interface.DashboardProps.md)
- [DataLimits](interface.DataLimits.md)
- [DateRangeFilterTileProps](interface.DateRangeFilterTileProps.md)
- [DrilldownBreadcrumbsProps](interface.DrilldownBreadcrumbsProps.md)
- [DrilldownWidgetProps](interface.DrilldownWidgetProps.md)
- [ExecuteCustomWidgetQueryParams](interface.ExecuteCustomWidgetQueryParams.md)
- [ExecuteQueryByWidgetIdParams](interface.ExecuteQueryByWidgetIdParams.md)
- [ExecuteQueryParams](interface.ExecuteQueryParams.md)
- [FilterMembersErrorState](interface.FilterMembersErrorState.md)
- [FilterMembersLoadingState](interface.FilterMembersLoadingState.md)
- [FilterMembersSuccessState](interface.FilterMembersSuccessState.md)
- [FiltersPanelProps](interface.FiltersPanelProps.md)
- [FilterTileProps](interface.FilterTileProps.md)
- [FunnelChartProps](interface.FunnelChartProps.md)
- [FunnelStyleOptions](interface.FunnelStyleOptions.md)
- [GaugeIndicatorStyleOptions](interface.GaugeIndicatorStyleOptions.md)
- [GetDashboardModelOptions](interface.GetDashboardModelOptions.md)
- [GetDashboardModelParams](interface.GetDashboardModelParams.md)
- [GetDashboardModelsOptions](interface.GetDashboardModelsOptions.md)
- [GetDashboardModelsParams](interface.GetDashboardModelsParams.md)
- [GetFilterMembersData](interface.GetFilterMembersData.md)
- [GetFilterMembersParams](interface.GetFilterMembersParams.md)
- [GetHierarchyModelsParams](interface.GetHierarchyModelsParams.md)
- [GetNlgInsightsProps](interface.GetNlgInsightsProps.md)
- [GetSharedFormulaParams](interface.GetSharedFormulaParams.md)
- [GetWidgetModelParams](interface.GetWidgetModelParams.md)
- [IndicatorChartDataOptions](interface.IndicatorChartDataOptions.md)
- [IndicatorChartProps](interface.IndicatorChartProps.md)
- [JumpToDashboardConfig](interface.JumpToDashboardConfig.md)
- [JumpToDashboardConfigForPivot](interface.JumpToDashboardConfigForPivot.md)
- [LineChartProps](interface.LineChartProps.md)
- [LineStyleOptions](interface.LineStyleOptions.md)
- [Member](interface.Member.md)
- [MemberFilterTileProps](interface.MemberFilterTileProps.md)
- [NumericBarIndicatorStyleOptions](interface.NumericBarIndicatorStyleOptions.md)
- [NumericSimpleIndicatorStyleOptions](interface.NumericSimpleIndicatorStyleOptions.md)
- [PieChartProps](interface.PieChartProps.md)
- [PieStyleOptions](interface.PieStyleOptions.md)
- [PivotTableDataOptions](interface.PivotTableDataOptions.md)
- [PivotTableProps](interface.PivotTableProps.md)
- [PivotTableStyleOptions](interface.PivotTableStyleOptions.md)
- [PivotTableWidgetProps](interface.PivotTableWidgetProps.md)
- [PolarChartProps](interface.PolarChartProps.md)
- [PolarStyleOptions](interface.PolarStyleOptions.md)
- [QueryRecommendation](interface.QueryRecommendation.md)
- [RelativeDateFilterTileProps](interface.RelativeDateFilterTileProps.md)
- [ScatterChartDataOptions](interface.ScatterChartDataOptions.md)
- [ScatterChartProps](interface.ScatterChartProps.md)
- [ScattermapChartDataOptions](interface.ScattermapChartDataOptions.md)
- [ScattermapChartProps](interface.ScattermapChartProps.md)
- [ScattermapStyleOptions](interface.ScattermapStyleOptions.md)
- [ScatterStyleOptions](interface.ScatterStyleOptions.md)
- [SisenseContextProviderProps](interface.SisenseContextProviderProps.md)
- [StackableStyleOptions](interface.StackableStyleOptions.md)
- [StreamgraphChartProps](interface.StreamgraphChartProps.md)
- [StreamgraphStyleOptions](interface.StreamgraphStyleOptions.md)
- [StyledColumn](interface.StyledColumn.md)
- [StyledMeasureColumn](interface.StyledMeasureColumn.md)
- [SunburstChartProps](interface.SunburstChartProps.md)
- [SunburstStyleOptions](interface.SunburstStyleOptions.md)
- [TableDataOptions](interface.TableDataOptions.md)
- [TableProps](interface.TableProps.md)
- [TableStyleOptions](interface.TableStyleOptions.md)
- [TextWidgetProps](interface.TextWidgetProps.md)
- [ThemeProviderProps](interface.ThemeProviderProps.md)
- [ThemeSettings](interface.ThemeSettings.md)
- [TreemapChartProps](interface.TreemapChartProps.md)
- [TreemapStyleOptions](interface.TreemapStyleOptions.md)
- [UseGetNlgInsightsParams](interface.UseGetNlgInsightsParams.md)
- [UseGetNlgInsightsState](interface.UseGetNlgInsightsState.md)
- [UseGetNlqResultParams](interface.UseGetNlqResultParams.md)
- [UseGetNlqResultState](interface.UseGetNlqResultState.md)
- [UseGetQueryRecommendationsParams](interface.UseGetQueryRecommendationsParams.md)
- [UseGetQueryRecommendationsState](interface.UseGetQueryRecommendationsState.md)
- [UseGetSharedFormulaParams](interface.UseGetSharedFormulaParams.md)
- [WidgetByIdProps](interface.WidgetByIdProps.md)
- [WidgetByIdStyleOptions](interface.WidgetByIdStyleOptions.md)
- [WidgetsPanelColumnLayout](interface.WidgetsPanelColumnLayout.md)

ormulaParams.md)
- [WidgetByIdProps](interface.WidgetByIdProps.md)
- [WidgetByIdStyleOptions](interface.WidgetByIdStyleOptions.md)
- [WidgetsPanelColumnLayout](interface.WidgetsPanelColumnLayout.md)

# Interface ComposableDashboardProps

## Properties

### config

> **config**?: [`DashboardConfig`](interface.DashboardConfig.md)

The configuration for the dashboard

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

The dashboard filters to be applied to each of the widgets based on the widget filter options

***

### layoutOptions

> **layoutOptions**?: [`DashboardLayoutOptions`](interface.DashboardLayoutOptions.md)

Dashboard layout options

***

### widgets

> **widgets**: [`WidgetProps`](../../sdk-ui/type-aliases/type-alias.WidgetProps.md)[]

The widgets to render in the dashboard

***

### widgetsOptions

> **widgetsOptions**?: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md)

The options for each of the widgets

# Interface CustomWidgetComponentProps`<DataOptions, StyleOptions, DataPoint>`

Props passed to a user-defined custom widget component.

Title for the filter tile, which is rendered into the header

# Interface CustomWidgetComponentProps`<DataOptions, StyleOptions, DataPoint>`

Props passed to a user-defined custom widget component.

## Example

```ts
import { CustomWidgetComponent, CustomWidgetComponentProps, CustomWidgetDataPoint, StyledColumn, StyledMeasureColumn, DataPointEntry, GenericDataOptions} from '@sisense/sdk-ui';

interface MyDataOptions extends GenericDataOptions {
  category: StyledColumn[];
  value: StyledMeasureColumn[];
}

interface MyDataPoint extends CustomWidgetDataPoint {
  entries: {
    category: DataPointEntry[];
    value: DataPointEntry[];
  };
}

type MyWidgetProps = CustomWidgetComponentProps<MyDataOptions, {}, MyDataPoint>;

const MyWidget: CustomWidgetComponent<MyWidgetProps> = (props) => {
  const { dataOptions, onDataPointClick } = props;
  // ... implementation based on props
  return <div>My Custom Widget</div>;
};
```

t MyWidget: CustomWidgetComponent<MyWidgetProps> = (props) => {
  const { dataOptions, onDataPointClick } = props;
  // ... implementation based on props
  return <div>My Custom Widget</div>;
};
```

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `DataOptions` | [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md) | The shape of data options for this custom widget |
| `StyleOptions` | [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md) | The shape of style options for this custom widget |
| `DataPoint` *extends* [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for event handlers |

## Properties

stractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for event handlers |

## Properties

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< `DataPoint` \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< `DataPoint` \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

Handler callback for selection of multiple data points

lected**?: [`CustomWidgetDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

Handler callback for selection of multiple data points

### Other

#### dataOptions

> **dataOptions**: `DataOptions`

Data options defining what data to display

***

#### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source for the custom widget

***

#### description

> **description**?: `string`

Description of the widget

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to apply to the data

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters for interactive highlighting

***

#### styleOptions

> **styleOptions**?: `StyleOptions`

Style options for customizing appearance

# Interface CustomWidgetProps

Props for the Custom Widget component

## Properties

ghlighting

***

#### styleOptions

> **styleOptions**?: `StyleOptions`

Style options for customizing appearance

# Interface CustomWidgetProps

Props for the Custom Widget component

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

Filters that will highlight query results

### Chart

#### dataOptions

> **dataOptions**: [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md)

Configurations for how to interpret and present the data passed to the table

### Chart

#### dataOptions

> **dataOptions**: [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md)

Configurations for how to interpret and present the data passed to the table

### Widget

#### customOptions

> **customOptions**?: `Record`\< `string`, `any` \>

Specific options for the custom widget.

***

#### customWidgetType

> **customWidgetType**: `string`

Custom widget type. This is typically the name/ID of the custom widget.

***

#### description

> **description**?: `string`

Description of the widget

***

#### styleOptions

> **styleOptions**?: [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md)

Style options for the custom widget.

***

#### title

> **title**?: `string`

Title of the widget

*?: [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md)

Style options for the custom widget.

***

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Handler callback for selection of multiple data points

# Interface DashboardByIdConfig

Dashboard configuration

## Properties

### filtersPanel

> **filtersPanel**?: [`DashboardFiltersPanelConfig`](interface.DashboardFiltersPanelConfig.md)

Configuration for the filters panel

***

ig

Dashboard configuration

## Properties

### filtersPanel

> **filtersPanel**?: [`DashboardFiltersPanelConfig`](interface.DashboardFiltersPanelConfig.md)

Configuration for the filters panel

***

### persist

> **persist**?: `boolean`

Boolean flag indicating whether changes to the embedded dashboard should be saved to the dashboard in Fusion.

If not specified, the default value is `false`.

Limitations:
- WAT authentication does not support persistence.
- Currently only changes to dashboard filters are persisted.

***

### tabbers

> **tabbers**?: [`TabbersConfig`](../../sdk-ui/type-aliases/type-alias.TabbersConfig.md)

Configuration for tabber widgets in the dashboard

***

### toolbar

> **toolbar**?: `object`

Configuration for the toolbar

#### Type declaration

> ##### `toolbar.visible`
>
> **visible**: `boolean`
>
> Determines whether the toolbar is visible.
>
> If not specified, the default value is `true`.
>
>

***

### widgetsPanel

> **widgetsPanel**?: [`WidgetsPanelConfig`](../../sdk-ui/interfaces/interface.WidgetsPanelConfig.md)

Configuration for the widgets panel

# Interface DashboardByIdProps

Props of the [`DashboardById`](../fusion-assets/class.DashboardById.md) component.

## Properties

### config

> **config**?: [`DashboardByIdConfig`](interface.DashboardByIdConfig.md)

The configuration for the dashboard

***

### dashboardOid

> **dashboardOid**: `string`

The OID of the dashboard to render.

# Interface DashboardConfig

Dashboard configuration

ardByIdConfig.md)

The configuration for the dashboard

***

### dashboardOid

> **dashboardOid**: `string`

The OID of the dashboard to render.

# Interface DashboardConfig

Dashboard configuration

## Properties

### filtersPanel

> **filtersPanel**?: [`DashboardFiltersPanelConfig`](interface.DashboardFiltersPanelConfig.md)

Configuration for the filters panel

***

### tabbers

> **tabbers**?: [`TabbersConfig`](../../sdk-ui/type-aliases/type-alias.TabbersConfig.md)

Configuration for tabber widgets in the dashboard

***

### toolbar

> **toolbar**?: `object`

Configuration for the toolbar

#### Type declaration

> ##### `toolbar.visible`
>
> **visible**: `boolean`
>
> Determines whether the toolbar is visible.
>
> If not specified, the default value is `true`.
>
>

***

### widgetsPanel

> **widgetsPanel**?: [`WidgetsPanelConfig`](../../sdk-ui/interfaces/interface.WidgetsPanelConfig.md)

Configuration for the widgets panel

# Interface DashboardFiltersPanelConfig

Dashboard filters panel configuration

## Properties

lConfig`](../../sdk-ui/interfaces/interface.WidgetsPanelConfig.md)

Configuration for the widgets panel

# Interface DashboardFiltersPanelConfig

Dashboard filters panel configuration

## Properties

### actions

> **actions**?: `object`

Configures the available actions within the filters panel.

#### Type declaration

> ##### `actions.addFilter`
>
> **addFilter**?: `object`
>
> Configuration for adding a new filter.
>
> > ###### `addFilter.enabled`
> >
> > **enabled**?: `boolean`
> >
> > Determines whether the possibility to create a new filter is enabled.
> >
> > If not specified, the default value is `false`.
> >
> >
>
> ##### `actions.deleteFilter`
>
> **deleteFilter**?: `object`
>
> Configuration for deleting a filter.
>
> > ###### `deleteFilter.enabled`
> >
> > **enabled**?: `boolean`
> >
> > Determines whether the possibility to delete a filter is enabled.
> >
> > If not specified, the default value is `false`.
> >
> >
>
> ##### `actions.editFilter`
>
> **editFilter**?: `object`
>
> Configuration for editing an existing filter.
>
> > ###### `editFilter.enabled`
> >
> > **enabled**?: `boolean`
> >
> > Determines whether the possibility to edit an existing filter is enabled.
> >
> > If not specified, the default value is `false`.
> >
> >
>
>

***

### collapsedInitially

> **collapsedInitially**?: `boolean`

Boolean flag that controls the initial "collapsed" state of the filters panel.

If not specified, the default value is `false`.

***

**

### collapsedInitially

> **collapsedInitially**?: `boolean`

Boolean flag that controls the initial "collapsed" state of the filters panel.

If not specified, the default value is `false`.

***

### persistCollapsedStateToLocalStorage

> **persistCollapsedStateToLocalStorage**?: `boolean`

Setting this to `true` will use the isCollapsed state from local storage, if available, and store any changes to local storage.
This state is shared across all dashboards.
This state has a higher priority than `collapsedInitially` when enabled.

***

### showFilterIconInToolbar

> **showFilterIconInToolbar**?: `boolean`

If enabled, the expand/collapse arrow on the divider between the filters panel and the dashboard content will be replaced with a filter toggle icon on the dashboard toolbar.

If the dashboard toolbar is configured to be not visible, this setting will be ignored.

If not specified, the default value is `false`.

***

### visible

> **visible**?: `boolean`

Determines whether the filters panel is visible.

If not specified, the default value is `true`.

# Interface DashboardLayoutOptions

Dashboard layout options

## Properties

### widgetsPanel

> **widgetsPanel**?: [`WidgetsPanelColumnLayout`](interface.WidgetsPanelColumnLayout.md)

The layout of the dashboard widgets panel
If not provided, the widgets will be laid out in one column vertically by default

# Interface DashboardProps

Props of the [`Dashboard`](../dashboards/class.Dashboard.md) component.

## Properties

If not provided, the widgets will be laid out in one column vertically by default

# Interface DashboardProps

Props of the [`Dashboard`](../dashboards/class.Dashboard.md) component.

## Properties

### config

> **config**?: [`DashboardConfig`](interface.DashboardConfig.md)

The configuration for the dashboard

***

### defaultDataSource

> **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The default data source to use for the dashboard

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

The dashboard filters to be applied to each of the widgets based on the widget filter options

***

### layoutOptions

> **layoutOptions**?: [`DashboardLayoutOptions`](interface.DashboardLayoutOptions.md)

Dashboard layout options

***

### onChange

> **onChange**?: (`event`) => `void`

Callback to receive changes

This callback is invoked when the dashboard state changes, such as filter updates,
layout changes, or widget deletions. See [DashboardChangeEvent](../../sdk-ui/type-aliases/type-alias.DashboardChangeEvent.md) for all possible event types.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` | [`DashboardChangeEvent`](../../sdk-ui/type-aliases/type-alias.DashboardChangeEvent.md) | The event that occurred |

#### Returns

`void`

***

escription |
| :------ | :------ | :------ |
| `event` | [`DashboardChangeEvent`](../../sdk-ui/type-aliases/type-alias.DashboardChangeEvent.md) | The event that occurred |

#### Returns

`void`

***

### styleOptions

> **styleOptions**?: [`DashboardStyleOptions`](../../sdk-ui/type-aliases/type-alias.DashboardStyleOptions.md)

The style options for the dashboard

***

### title

> **title**?: `string`

The title of the dashboard

***

### widgets

> **widgets**: [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md)[]

The widgets to render in the dashboard

***

### widgetsOptions

> **widgetsOptions**?: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md)

The options for each of the widgets

# Interface DrilldownWidgetProps

Props of the [`DrilldownWidget`](../drilldown/class.DrilldownWidget.md) component.

## Properties

|
| :------ | :------ |
| `i` | `number` |

##### Returns

`void`

# Interface DrilldownWidgetProps

Props of the [`DrilldownWidget`](../drilldown/class.DrilldownWidget.md) component.

## Properties

### Widget

#### config

> **config**?: [`DrilldownWidgetConfig`](../type-aliases/type-alias.DrilldownWidgetConfig.md)

An object that allows users to pass advanced configuration options as a prop for the `DrilldownWidget` component

***

#### drilldownPaths

> **drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../../sdk-ui/interfaces/interface.Hierarchy.md))[]

Dimensions and hierarchies available for drilldown on.

***

#### initialDimension

> **initialDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Initial dimension to apply first set of filters to

# Interface ExecuteCustomWidgetQueryParams

Parameters for executing a query for a custom widget.

## Properties

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

### dataOptions

> **dataOptions**: [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md)

Data options defining dimensions and measures

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source for the query

***

tions.md)

Data options defining dimensions and measures

***

### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source for the query

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to apply to the query

***

### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

***

### onBeforeQuery

> **onBeforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

**Note:** In React, wrap this function in `useCallback` hook to avoid triggering query execution on each render.
```ts
const onBeforeQuery = useCallback((jaql) => {
  // modify jaql here
  return jaql;
}, []);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

nst onBeforeQuery = useCallback((jaql) => {
  // modify jaql here
  return jaql;
}, []);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

### ungroup

> **ungroup**?: `boolean`

Boolean flag whether to include `ungroup: true` in non-aggregated JAQL queries.

This improves computation and performance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface ExecuteQueryByWidgetIdParams

Parameters for [useExecuteQueryByWidgetId](../fusion-assets/function.useExecuteQueryByWidgetId.md) hook.

## Properties

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if query is executed

If not specified, the default value is `true`

***

### filters

> **filters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results.

The provided filters will be merged with the existing widget filters based on `filtersMergeStrategy`

***

`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results.

The provided filters will be merged with the existing widget filters based on `filtersMergeStrategy`

***

### filtersMergeStrategy

> **filtersMergeStrategy**?: `"codeFirst"` \| `"codeOnly"` \| `"widgetFirst"`

Strategy for merging the existing widget filters (including highlights) with the filters provided via the `filters` and `highlights` props:

- `widgetFirst` - prioritizes the widget filters over the provided filters in case of filter conflicts by certain attributes.
- `codeFirst` - prioritizes the provided filters over the widget filters in case of filter conflicts by certain attributes.
- `codeOnly` - applies only the provided filters and completely ignores the widget filters.

If not specified, the default strategy is `codeFirst`.

***

### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

***

### includeDashboardFilters

> **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

***

lters` and `highlights`

If not specified, the default value is `false`.

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

***

### onBeforeQuery

> **onBeforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

**Note:** In React, wrap this function in `useCallback` hook to avoid triggering query execution on each render.
```ts
const onBeforeQuery = useCallback((jaql) => {
  // modify jaql here
  return jaql;
}, []);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

### widgetOid

> **widgetOid**: `string`

Identifier of the widget

# Interface GetDashboardModelOptions

## Properties

### includeFilters

> **includeFilters**?: `boolean`

Boolean flag whether to include filters in the dashboard model

If not specified, the default value is `false`

***

### includeWidgets

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

# Interface GetDashboardModelParams

Parameters for [useGetDashboardModel](../fusion-assets/function.useGetDashboardModel.md) hook.

## Properties

### dashboardOid

> **dashboardOid**: `string`

Dashboard identifier

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### includeFilters

> **includeFilters**?: `boolean`

Boolean flag whether to include filters in the dashboard model

If not specified, the default value is `false`

***

### includeWidgets

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

# Interface GetDashboardModelsOptions

## Properties

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

# Interface GetDashboardModelsOptions

## Properties

### includeWidgets

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

***

### searchByTitle

> **searchByTitle**?: `string`

Dashboard title to search by

Dashboard titles are not necessarily unique, so the result may contain multiple dashboards.

# Interface GetDashboardModelsParams

Parameters for [useGetDashboardModels](../fusion-assets/function.useGetDashboardModels.md) hook.

## Properties

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### includeWidgets

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

***

### searchByTitle

> **searchByTitle**?: `string`

Dashboard title to search by

Dashboard titles are not necessarily unique, so the result may contain multiple dashboards.

# Interface GetWidgetModelParams

Parameters for [useGetWidgetModel](../fusion-assets/function.useGetWidgetModel.md) hook.

## Properties

### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

***

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### widgetOid

> **widgetOid**: `string`

Identifier of the widget to be retrieved

# Interface JumpToDashboardConfig

Configuration for Jump To Dashboard functionality.
Allows users to navigate from a widget to another dashboard with contextual filtering.

## Properties

### enabled

> **enabled**?: `boolean`

Whether Jump To Dashboard functionality is enabled

#### Default

```ts
true
```

***

a widget to another dashboard with contextual filtering.

## Properties

### enabled

> **enabled**?: `boolean`

Whether Jump To Dashboard functionality is enabled

#### Default

```ts
true
```

***

### filtering

> **filtering**?: `object`

Configuration for filter handling between source and target dashboards

#### Type declaration

> ##### `filtering.extraFilters`
>
> **extraFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]
>
> Additional filters to apply to the target dashboard
>
> ###### Example
>
> ```ts
> const extraFilters = [dashboardProps.filters[0], dashboardProps.widgets[0].filters[0]]
> ```
>
> ###### Default
>
> ```ts
> []
> ```
>
> ##### `filtering.includeDashboardFilters`
>
> **includeDashboardFilters**?: `string`[]
>
> Dashboard-level filter dimensions to pass through
>
> undefined - include all
> [] - include nothing
> [string] - include specific dimensions
>
> example: ["[ER.Date (Calendar)]", "[Doctors.Specialty]"]
>
> ###### Default
>
> ```ts
> undefined
> ```
>
> ##### `filtering.includeWidgetFilters`
>
> **includeWidgetFilters**?: `string`[]
>
> Widget-level filter dimensions to pass through
>
> undefined - include all
> [] - include nothing
> [string] - include specific dimensions
>
> example: ["[ER.Date (Calendar)]", "[Doctors.Specialty]"]
>
> ###### Default
>
> ```ts
> undefined
> ```
>
> ##### `filtering.mergeWithTargetFilters`
>
> **mergeWithTargetFilters**?: `boolean`
>
> Whether to merge filters with existing target dashboard filters or replace them
>
> ###### Default
>
> ```ts
> false
> ```
>
>

***

eWithTargetFilters`
>
> **mergeWithTargetFilters**?: `boolean`
>
> Whether to merge filters with existing target dashboard filters or replace them
>
> ###### Default
>
> ```ts
> false
> ```
>
>

***

### interaction

> **interaction**?: `object`

Configuration for user interaction behavior

#### Type declaration

> ##### `interaction.captionPrefix`
>
> **captionPrefix**?: `string`
>
> Caption prefix for jumping action (i.e in context menu)
>
> ###### Default
>
> ```ts
> 'Jump to'
> ```
>
> ##### `interaction.showIcon`
>
> **showIcon**?: `boolean`
>
> Whether to show the Jump To Dashboard icon in the toolbar of the source widget
>
> ###### Default
>
> ```ts
> true
> ```
>
> ##### `interaction.triggerMethod`
>
> **triggerMethod**?: [`TriggerMethod`](../../sdk-ui/type-aliases/type-alias.TriggerMethod.md)
>
> How users trigger the jump action
> Note that not all widgets support both trigger methods
>
> ###### Default
>
> ```ts
> 'rightclick'
> ```
>
>

***

ui/type-aliases/type-alias.TriggerMethod.md)
>
> How users trigger the jump action
> Note that not all widgets support both trigger methods
>
> ###### Default
>
> ```ts
> 'rightclick'
> ```
>
>

***

### modal

> **modal**?: `object`

Configuration for the modal window that will display the target dashboard

#### Type declaration

> ##### `modal.height`
>
> **height**?: `number`
>
> Height of the modal window
>
> ###### Default
>
> ```ts
> 85 (when measurementUnit is '%') or 800 (when measurementUnit is 'px')
> ```
>
> ##### `modal.measurementUnit`
>
> **measurementUnit**?: `"%"` \| `"px"`
>
> Unit of measurement for width/height
>
> ###### Default
>
> ```ts
> 'px'
> ```
>
> ##### `modal.width`
>
> **width**?: `number`
>
> Width of the modal window
>
> ###### Default
>
> ```ts
> 85 (when measurementUnit is '%') or 1200 (when measurementUnit is 'px')
> ```
>
>

***

### targetDashboardConfig

> **targetDashboardConfig**?: [`DashboardConfig`](interface.DashboardConfig.md)

Configuration for the target dashboard display.
This configuration will be merged with target dashboard config, having higher priority

#### Default

```ts
{}
```

***

### targets

> **targets**: [`JtdTarget`](../../sdk-ui/type-aliases/type-alias.JtdTarget.md)[]

List of target dashboards that can be navigated to

g higher priority

#### Default

```ts
{}
```

***

### targets

> **targets**: [`JtdTarget`](../../sdk-ui/type-aliases/type-alias.JtdTarget.md)[]

List of target dashboards that can be navigated to

# Interface JumpToDashboardConfigForPivot

Configuration for Jump To Dashboard functionality for pivot widgets.
Used for pivot widgets, allowing to configure jumping to different dashboard from different dimensions

## See

[JumpToDashboardConfig](interface.JumpToDashboardConfig.md)

## Properties

### enabled

> **enabled**?: `boolean`

Whether Jump To Dashboard functionality is enabled

#### Default

```ts
true
```

***

mpToDashboardConfig](interface.JumpToDashboardConfig.md)

## Properties

### enabled

> **enabled**?: `boolean`

Whether Jump To Dashboard functionality is enabled

#### Default

```ts
true
```

***

### filtering

> **filtering**?: `object`

Configuration for filter handling between source and target dashboards

#### Type declaration

> ##### `filtering.extraFilters`
>
> **extraFilters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]
>
> Additional filters to apply to the target dashboard
>
> ###### Example
>
> ```ts
> const extraFilters = [dashboardProps.filters[0], dashboardProps.widgets[0].filters[0]]
> ```
>
> ###### Default
>
> ```ts
> []
> ```
>
> ##### `filtering.includeDashboardFilters`
>
> **includeDashboardFilters**?: `string`[]
>
> Dashboard-level filter dimensions to pass through
>
> undefined - include all
> [] - include nothing
> [string] - include specific dimensions
>
> example: ["[ER.Date (Calendar)]", "[Doctors.Specialty]"]
>
> ###### Default
>
> ```ts
> undefined
> ```
>
> ##### `filtering.includeWidgetFilters`
>
> **includeWidgetFilters**?: `string`[]
>
> Widget-level filter dimensions to pass through
>
> undefined - include all
> [] - include nothing
> [string] - include specific dimensions
>
> example: ["[ER.Date (Calendar)]", "[Doctors.Specialty]"]
>
> ###### Default
>
> ```ts
> undefined
> ```
>
> ##### `filtering.mergeWithTargetFilters`
>
> **mergeWithTargetFilters**?: `boolean`
>
> Whether to merge filters with existing target dashboard filters or replace them
>
> ###### Default
>
> ```ts
> false
> ```
>
>

***

eWithTargetFilters`
>
> **mergeWithTargetFilters**?: `boolean`
>
> Whether to merge filters with existing target dashboard filters or replace them
>
> ###### Default
>
> ```ts
> false
> ```
>
>

***

### interaction

> **interaction**?: `object`

Configuration for user interaction behavior

#### Type declaration

> ##### `interaction.captionPrefix`
>
> **captionPrefix**?: `string`
>
> Caption prefix for jumping action (i.e in context menu)
>
> ###### Default
>
> ```ts
> 'Jump to'
> ```
>
> ##### `interaction.showIcon`
>
> **showIcon**?: `boolean`
>
> Whether to show the Jump To Dashboard icon in the toolbar of the source widget
>
> ###### Default
>
> ```ts
> true
> ```
>
> ##### `interaction.triggerMethod`
>
> **triggerMethod**?: [`TriggerMethod`](../../sdk-ui/type-aliases/type-alias.TriggerMethod.md)
>
> How users trigger the jump action
> Note that not all widgets support both trigger methods
>
> ###### Default
>
> ```ts
> 'rightclick'
> ```
>
>

***

ui/type-aliases/type-alias.TriggerMethod.md)
>
> How users trigger the jump action
> Note that not all widgets support both trigger methods
>
> ###### Default
>
> ```ts
> 'rightclick'
> ```
>
>

***

### modal

> **modal**?: `object`

Configuration for the modal window that will display the target dashboard

#### Type declaration

> ##### `modal.height`
>
> **height**?: `number`
>
> Height of the modal window
>
> ###### Default
>
> ```ts
> 85 (when measurementUnit is '%') or 800 (when measurementUnit is 'px')
> ```
>
> ##### `modal.measurementUnit`
>
> **measurementUnit**?: `"%"` \| `"px"`
>
> Unit of measurement for width/height
>
> ###### Default
>
> ```ts
> 'px'
> ```
>
> ##### `modal.width`
>
> **width**?: `number`
>
> Width of the modal window
>
> ###### Default
>
> ```ts
> 85 (when measurementUnit is '%') or 1200 (when measurementUnit is 'px')
> ```
>
>

***

### targetDashboardConfig

> **targetDashboardConfig**?: [`DashboardConfig`](interface.DashboardConfig.md)

Configuration for the target dashboard display.
This configuration will be merged with target dashboard config, having higher priority

#### Default

```ts
{}
```

***

interface.DashboardConfig.md)

Configuration for the target dashboard display.
This configuration will be merged with target dashboard config, having higher priority

#### Default

```ts
{}
```

***

### targets <Badge type="alpha" text="Alpha" />

> **targets**: `Map`\< [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Measure`](../../sdk-data/interfaces/interface.Measure.md) \| \{
  `dimension`: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md);
  `location`: `"column"` \| `"row"` \| `"value"`;
 }, [`JtdTarget`](../../sdk-ui/type-aliases/type-alias.JtdTarget.md)[] \>

Map of target dashboards for different dimensions/measures

#### Example

```ts
const FormulaMeasure = dashboardProps.widgets[0].dataOptions.values[0];
const ageRangeAttribute = dashboardProps.widgets[0].dataOptions.rows[1];

const targets = new Map([
   [ageRangeAttribute, [target, target2]],
   [FormulaMeasure, [target3]],
]);
```

# Interface PivotTableDataOptions

Configuration for how to query data and assign data to PivotTable.

## Properties

els)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface PivotTableDataOptions

Configuration for how to query data and assign data to PivotTable.

## Properties

### Data Options

#### columns

> **columns**?: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Dimensions for the columns of the pivot table

***

#### grandTotals

> **grandTotals**?: [`PivotGrandTotals`](../../sdk-data/type-aliases/type-alias.PivotGrandTotals.md)

Options for grand totals

***

#### rows

> **rows**?: ([`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](interface.StyledColumn.md))[]

Dimensions for the rows of the pivot table

***

#### values

> **values**?: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledMeasureColumn`](interface.StyledMeasureColumn.md))[]

Measures for the values of the pivot table

# Interface PivotTableProps

Props of the [PivotTable](../data-grids/class.PivotTable.md) component.

## Properties

(interface.StyledMeasureColumn.md))[]

Measures for the values of the pivot table

# Interface PivotTableProps

Props of the [PivotTable](../data-grids/class.PivotTable.md) component.

## Properties

### Data

#### dataSet

> **dataSet**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source name (as a `string`) - e.g. `Sample ECommerce`.

If not specified, the component will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

textMenu**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

### Representation

#### dataOptions

> **dataOptions**: [`PivotTableDataOptions`](interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### styleOptions

> **styleOptions**?: [`PivotTableStyleOptions`](interface.PivotTableStyleOptions.md)

Configurations for how to style and present a pivot table's data.

# Interface PivotTableStyleOptions

Configuration options that define functional style of the various elements of the PivotTable component.

## Properties

### alternatingColumnsColor

> **alternatingColumnsColor**?: `boolean`

Boolean flag whether to apply background color to alternate columns

***

### alternatingRowsColor

> **alternatingRowsColor**?: `boolean`

Boolean flag whether to apply background color to alternate rows.

***

### alwaysShowResultsPerPage

> **alwaysShowResultsPerPage**?: `boolean`

Boolean flag whether to always show the results per page select

If `true`, the results per page select will be shown even if there is only one page of results.

#### Default

```ts
false
```

***

### headersColor

> **headersColor**?: `boolean`

Boolean flag whether to fill header cells with background color

***

even if there is only one page of results.

#### Default

```ts
false
```

***

### headersColor

> **headersColor**?: `boolean`

Boolean flag whether to fill header cells with background color

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value of 500px (for component without header) or 525px (for component with header).

***

### highlightColor

> **highlightColor**?: `string`

Color of highlighted cells. If not specified, default value is light yellow (`#ffff9c`).

***

header) or 525px (for component with header).

***

### highlightColor

> **highlightColor**?: `string`

Color of highlighted cells. If not specified, default value is light yellow (`#ffff9c`).

***

### isAutoContentWidth

> **isAutoContentWidth**?: `boolean`

Boolean flag whether the widths of each vertical column of table cells should be automatically calculated
to fit the width of the component, which defaults to '100%' if `width` is not specified.

If `true`, all vertical columns of table cells will be resized to fit within the component width without requiring horizontal scroll.
If a width is also specified in the `dataOptions` item, this will be used to calculate the width in proportion to the total width of the component.
Using `isAutoContentWidth: true` with a large number of columns displayed may result in very narrow columns, and is not recommended.

If `false`, each vertical column of table cells will be calculated to fit the contents, or if specified, the width provided in the corresponding `dataOptions` item.
Horizontal scroll will be shown automatically if required.

#### Default

```ts
false
```

***

### isAutoHeight

> **isAutoHeight**?: `boolean`

Boolean flag whether the height of the component should be automatically adjusted to fit the content

***

### membersColor

> **membersColor**?: `boolean`

Boolean flag whether to fill row members cells with background color

***

of the component should be automatically adjusted to fit the content

***

### membersColor

> **membersColor**?: `boolean`

Boolean flag whether to fill row members cells with background color

***

### rowHeight

> **rowHeight**?: `number`

Manual height of each row (default is 25px)

***

### rowsPerPage

> **rowsPerPage**?: `number`

Number of rows per page

Default value is 25

***

### totalsColor

> **totalsColor**?: `boolean`

Boolean flag whether to fill totals and subtotals cells with background color

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface PivotTableWidgetProps

Props for the [PivotTableWidget](../../sdk-ui/dashboards/function.PivotTableWidget.md) component

## Properties

wrapping this component
3. Default value of 400px

# Interface PivotTableWidgetProps

Props for the [PivotTableWidget](../../sdk-ui/dashboards/function.PivotTableWidget.md) component

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

Filters that will highlight query results

### Chart

#### dataOptions

> **dataOptions**: [`PivotTableDataOptions`](interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the table

y results

### Chart

#### dataOptions

> **dataOptions**: [`PivotTableDataOptions`](interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the table

### Widget

#### description

> **description**?: `string`

Description of the widget

***

#### drilldownOptions

> **drilldownOptions**?: [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md)

Configuration for the pivot table drilldown

***

#### styleOptions

> **styleOptions**?: [`PivotTableWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.PivotTableWidgetStyleOptions.md)

Style options for both the table and widget including the widget header

***

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

# Interface TextWidgetProps

Props for the `TextWidget` component.

## Properties

### Widget

#### styleOptions

> **styleOptions**: [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md)

Style options for the text widget.

ent.

## Properties

### Widget

#### styleOptions

> **styleOptions**: [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md)

Style options for the text widget.

# Interface WidgetByIdProps

Props of the [`WidgetById`](../fusion-assets/class.WidgetById.md) component.

## Properties

tring`

Formula name

***

### oid

> **oid**?: `string`

Formula identifier

# Interface WidgetByIdProps

Props of the [`WidgetById`](../fusion-assets/class.WidgetById.md) component.

## Properties

### Data

#### filters

> **filters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

Provided filters will be merged with the existing filters from the widget configuration.

***

#### filtersMergeStrategy

> **filtersMergeStrategy**?: `"codeFirst"` \| `"codeOnly"` \| `"widgetFirst"`

Strategy for merging the existing widget filters (including highlights) with the filters provided via the `filters` and `highlights` props:

- `widgetFirst` - prioritizes the widget filters over the provided filters in case of filter conflicts by certain attributes.
- `codeFirst` - prioritizes the provided filters over the widget filters in case of filter conflicts by certain attributes.
- `codeOnly` - applies only the provided filters and completely ignores the widget filters.

If not specified, the default strategy is `codeFirst`.

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

***

#### includeDashboardFilters

> **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

boardFilters

> **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

### Widget

#### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

***

#### description

> **description**?: `string`

Description of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### highlightSelectionDisabled

> **highlightSelectionDisabled**?: `boolean`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **styleOptions**?: [`WidgetByIdStyleOptions`](interface.WidgetByIdStyleOptions.md)

Style options for the widget including the widget container and the chart or table inside.

***

#### title

> **title**?: `string`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **widgetOid**: `string`

Identifier of the widget

e

> **title**?: `string`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **widgetOid**: `string`

Identifier of the widget

### Callbacks

#### onBeforeRender

> **onBeforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### onDataPointClick

> **onDataPointClick**?: [`AreamapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.AreamapDataPointEventHandler.md) \| [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`IndicatorDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.IndicatorDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md) \| [`ScattermapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScattermapDataPointEventHandler.md)

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CalendarHeatmapDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md) \| [`DataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointsEventHandler.md) \| [`ScatterDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

#### onDataReady

> **onDataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

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

# Interface WidgetByIdStyleOptions

Style settings defining the look and feel of the widget created in Fusion

## Properties

### backgroundColor

> **backgroundColor**?: `string`

Widget background color

Affects chart background color as well

***

### border

> **border**?: `boolean`

Widget container border toggle

***

### borderColor

> **borderColor**?: `string`

Widget container border color

***

### cornerRadius

> **cornerRadius**?: [`RadiusSizes`](../../sdk-ui/type-aliases/type-alias.RadiusSizes.md)

Corner radius of the widget container

***

`string`

Widget container border color

***

### cornerRadius

> **cornerRadius**?: [`RadiusSizes`](../../sdk-ui/type-aliases/type-alias.RadiusSizes.md)

Corner radius of the widget container

***

### header

> **header**?: `object`

Widget header styles

#### Type declaration

> ##### `header.backgroundColor`
>
> **backgroundColor**?: `string`
>
> Header background color
>
> ##### `header.dividerLine`
>
> **dividerLine**?: `boolean`
>
> Toggle of the divider line between widget header and chart
>
> ##### `header.dividerLineColor`
>
> **dividerLineColor**?: `string`
>
> Divider line color
>
> ##### `header.hidden`
>
> **hidden**?: `boolean`
>
> Header visibility toggle
>
> ##### `header.titleAlignment`
>
> **titleAlignment**?: [`AlignmentTypes`](../../sdk-ui/type-aliases/type-alias.AlignmentTypes.md)
>
> Header title alignment
>
> ##### `header.titleTextColor`
>
> **titleTextColor**?: `string`
>
> Header title text color
>
>

***

### height

> **height**?: `number`

Total height of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels).
2. Height of the container wrapping this component
3. Default value as specified per chart type

***

### shadow

> **shadow**?: [`ShadowsTypes`](../../sdk-ui/type-aliases/type-alias.ShadowsTypes.md)

Shadow level of the widget container

Effective only when spaceAround is defined

***

rt type

***

### shadow

> **shadow**?: [`ShadowsTypes`](../../sdk-ui/type-aliases/type-alias.ShadowsTypes.md)

Shadow level of the widget container

Effective only when spaceAround is defined

***

### spaceAround

> **spaceAround**?: [`SpaceSizes`](../../sdk-ui/type-aliases/type-alias.SpaceSizes.md)

Space between widget container edge and the chart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value as specified per chart type

# Interface WidgetsPanelColumnLayout

Dashboard layout, which describes how widgets are arranged in the dashboard

## Properties

### columns

> **columns**: [`WidgetsPanelColumn`](../../sdk-ui/interfaces/interface.WidgetsPanelColumn.md)[]


## Type Aliases

ch describes how widgets are arranged in the dashboard

## Properties

### columns

> **columns**: [`WidgetsPanelColumn`](../../sdk-ui/interfaces/interface.WidgetsPanelColumn.md)[]


## Type Aliases

# Type Aliases

TypeScript type aliases for components and composables listed above

- [AppConfig](type-alias.AppConfig.md)
- [AreamapChartType](type-alias.AreamapChartType.md)
- [AreaSubtype](type-alias.AreaSubtype.md)
- [AxisLabel](type-alias.AxisLabel.md)
- [BeforeRenderHandler](type-alias.BeforeRenderHandler.md)
- [BoxplotChartCustomDataOptions](type-alias.BoxplotChartCustomDataOptions.md)
- [BoxplotChartDataOptions](type-alias.BoxplotChartDataOptions.md)
- [BoxplotChartType](type-alias.BoxplotChartType.md)
- [BoxplotDataPoint](type-alias.BoxplotDataPoint.md)
- [BoxplotSubtype](type-alias.BoxplotSubtype.md)
- [BoxWhiskerType](type-alias.BoxWhiskerType.md)
- [CalendarDayOfWeek](type-alias.CalendarDayOfWeek.md)
- [CalendarHeatmapChartType](type-alias.CalendarHeatmapChartType.md)
- [CalendarHeatmapDataPoint](type-alias.CalendarHeatmapDataPoint.md)
- [CalendarHeatmapSubtype](type-alias.CalendarHeatmapSubtype.md)
- [CalendarHeatmapViewType](type-alias.CalendarHeatmapViewType.md)
- [CartesianChartType](type-alias.CartesianChartType.md)
- [CartesianWidgetType](type-alias.CartesianWidgetType.md)
- [CategoricalChartType](type-alias.CategoricalChartType.md)
- [CategoricalWidgetType](type-alias.CategoricalWidgetType.md)
- [ChartDataOptions](type-alias.ChartDataOptions.md)
- [ChartStyleOptions](type-alias.ChartStyleOptions.md)
- [ChartType](type-alias.ChartType.md)
- [ChartWidgetStyleOptions](type-alias.ChartWidgetStyleOptions.md)
- [Color](type-alias.Color.md)
- [ColorPaletteTheme](type-alias.ColorPaletteTheme.md)
- [ConditionalDataColorOptions](type-alias.ConditionalDataColorOptions.md)
- [Convolution](type-alias.Convolution.md)
- [CustomWidgetComponent](type-alias.CustomWidgetComponent.md)
- [CustomWidgetQueryState](type-alias.CustomWidgetQueryState.md)
- [DashStyle](type-alias.DashStyle.md)
- [DataColorCondition](type-alias.DataColorCondition.md)
- [DataColorOptions](type-alias.DataColorOptions.md)
- [DataOptionLocation](type-alias.DataOptionLocation.md)
- [DataPoint](type-alias.DataPoint.md)
- [DateConfig](type-alias.DateConfig.md)
- [DateLevel](type-alias.DateLevel.md)
- [DayOfWeek](type-alias.DayOfWeek.md)
- [DecimalScale](type-alias.DecimalScale.md)
- [DrilldownOptions](type-alias.DrilldownOptions.md)
- [DrilldownSelection](type-alias.DrilldownSelection.md)
- [DrilldownWidgetConfig](type-alias.DrilldownWidgetConfig.md)
- [EndCapType](type-alias.EndCapType.md)
- [FilterMembersState](type-alias.FilterMembersState.md)
- [FilterVariant](type-alias.FilterVariant.md)
- [GenericDataOptions](type-alias.GenericDataOptions.md)
- [IndicatorBeforeRenderHandler](type-alias.IndicatorBeforeRenderHandler.md)
- [IndicatorChartType](type-alias.IndicatorChartType.md)
- [IndicatorComponents](type-alias.IndicatorComponents.md)
- [IndicatorRenderOptions](type-alias.IndicatorRenderOptions.md)
- [IndicatorStyleOptions](type-alias.IndicatorStyleOptions.md)
- [Labels](type-alias.Labels.md)
- [Legend](type-alias.Legend.md)
- [LineOptions](type-alias.LineOptions.md)
- [LineSubtype](type-alias.LineSubtype.md)
- [LineWidth](type-alias.LineWidth.md)
- [Markers](type-alias.Markers.md)
- [MaybeRef](type-alias.MaybeRef.md)
- [MaybeRefOrWithRefs](type-alias.MaybeRefOrWithRefs.md)
- [MaybeWithRefs](type-alias.MaybeWithRefs.md)
- [MenuItemSection](type-alias.MenuItemSection.md)
- [MenuPosition](type-alias.MenuPosition.md)
- [MonthOfYear](type-alias.MonthOfYear.md)
- [MultiColumnValueToColorMap](type-alias.MultiColumnValueToColorMap.md)
- [Navigator](type-alias.Navigator.md)
- [NumberFormatConfig](type-alias.NumberFormatConfig.md)
- [PieSubtype](type-alias.PieSubtype.md)
- [PivotRowsSort](type-alias.PivotRowsSort.md)
- [PivotTableDrilldownOptions](type-alias.PivotTableDrilldownOptions.md)
- [PivotTableNonSelectableDrilldownOptions](type-alias.PivotTableNonSelectableDrilldownOptions.md)
- [PivotTableSelectableDrilldownOptions](type-alias.PivotTableSelectableDrilldownOptions.md)
- [PolarSubtype](type-alias.PolarSubtype.md)
- [RangeDataColorOptions](type-alias.RangeDataColorOptions.md)
- [ScatterChartType](type-alias.ScatterChartType.md)
- [ScatterDataPoint](type-alias.ScatterDataPoint.md)
- [ScattermapChartType](type-alias.ScattermapChartType.md)
- [ScattermapLocationLevel](type-alias.ScattermapLocationLevel.md)
- [ScattermapMarkers](type-alias.ScattermapMarkers.md)
- [ScatterMarkerSize](type-alias.ScatterMarkerSize.md)
- [SeriesChartType](type-alias.SeriesChartType.md)
- [SeriesLabels](type-alias.SeriesLabels.md)
- [SortDirection](type-alias.SortDirection.md)
- [StackableSubtype](type-alias.StackableSubtype.md)
- [TableType](type-alias.TableType.md)
- [TabularWidgetType](type-alias.TabularWidgetType.md)
- [ThemeOid](type-alias.ThemeOid.md)
- [TranslationConfig](type-alias.TranslationConfig.md)
- [UniformDataColorOptions](type-alias.UniformDataColorOptions.md)
- [UseFetchOptions](type-alias.UseFetchOptions.md)
- [ValueToColorMap](type-alias.ValueToColorMap.md)
- [WidgetDataOptions](type-alias.WidgetDataOptions.md)
- [WidgetId](type-alias.WidgetId.md)
- [WidgetProps](type-alias.WidgetProps.md)
- [WidgetsOptions](type-alias.WidgetsOptions.md)
- [WidgetsPanelLayout](type-alias.WidgetsPanelLayout.md)
- [WidgetStyleOptions](type-alias.WidgetStyleOptions.md)
- [WidgetType](type-alias.WidgetType.md)
- [WithCommonWidgetProps](type-alias.WithCommonWidgetProps.md)
- [X2Title](type-alias.X2Title.md)

d)
- [WidgetStyleOptions](type-alias.WidgetStyleOptions.md)
- [WidgetType](type-alias.WidgetType.md)
- [WithCommonWidgetProps](type-alias.WithCommonWidgetProps.md)
- [X2Title](type-alias.X2Title.md)

# Type alias AppConfig

> **AppConfig**: `object`

Application configuration

## Type declaration

### `accessibilityConfig`

**accessibilityConfig**?: `object`

Accessibility configuration. Set the `accessibilityConfig.enabled` property to `true` to enable accessibility features for charts built with Highcharts.

Once the accessibility configuration in enabled, you can use the default descriptions or choose to create custom configurations for the descriptions of a chart, its axes, its series, and values description formatting. To create custom configurations, use the `highchartsOptions` object that is passed to the [BeforeRenderHandler](type-alias.BeforeRenderHandler.md) of the chart's `onBeforeRender` callback. Modify the object using the accessibility options as described in the [Accessibility module documentation](https://www.highcharts.com/docs/accessibility/accessibility-module).

Note that enabling accessibility also causes markers to appear in charts even if they are disabled using the chart's `styleOptions`.

This feature is in alpha.

> #### `accessibilityConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable accessibility features
>
> If not specified, the default value is `false`
>
>

***

This feature is in alpha.

> #### `accessibilityConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable accessibility features
>
> If not specified, the default value is `false`
>
>

***

### `chartConfig`

**chartConfig**?: `object`

Global configuration for some specific aspects of data visualizations.

> #### `chartConfig.tabular`
>
> **tabular**?: `object`
>
> `Table` and `PivotTable` configuration
>
> > ##### `tabular.alwaysShowResultsPerPage`
> >
> > **alwaysShowResultsPerPage**?: `boolean`
> >
> > Boolean flag whether to always show the results per page select
> >
> > If `true`, the results per page select will be shown even if there is only one page of results.
> > Currently only supported for `PivotTable`.
> >
> > ###### Default
> >
> > ```ts
> > false
> > ```
> >
> > ##### `tabular.htmlContent`
> >
> > **htmlContent**?: `object`
> >
> > Configuration for HTML content in `Table` and `PivotTable`
> >
> > > ###### `htmlContent.enabled`
> > >
> > > **enabled**?: `boolean`
> > >
> > > If true, the contents of table and pivot table cells are rendered as HTML instead of text.
> > >
> > > **Note**: The [StyledColumn.isHtml](../interfaces/interface.StyledColumn.md#ishtml) property of columns in `dataOptions` are of higher precedence, and will therefore override this setting.
> > >
> > > ###### Default
> > >
> > > ```ts
> > > true
> > > ```
> > >
> > > ###### `htmlContent.sanitizeContents`
> > >
> > > **sanitizeContents**?: `boolean`
> > >
> > > Enables sanitization of HTML content before rendering to prevent XSS attacks.
> > >
> > > ###### Default
> > >
> > > ```ts
> > > true
> > > ```
> > >
> > >
> >
> >
>
>

***

*?: `boolean`
> > >
> > > Enables sanitization of HTML content before rendering to prevent XSS attacks.
> > >
> > > ###### Default
> > >
> > > ```ts
> > > true
> > > ```
> > >
> > >
> >
> >
>
>

***

### `dateConfig`

**dateConfig**?: [`DateConfig`](type-alias.DateConfig.md)

Date Configurations

***

### `errorBoundaryConfig`

**errorBoundaryConfig**?: `object`

Configuration of the component that is rendered in case of an error

> #### `errorBoundaryConfig.alwaysShowErrorText`
>
> **alwaysShowErrorText**?: `boolean`
>
> Whether to show error text without hovering over the error icon
>
> If not specified, the default value is `false`
>
>

***

aryConfig.alwaysShowErrorText`
>
> **alwaysShowErrorText**?: `boolean`
>
> Whether to show error text without hovering over the error icon
>
> If not specified, the default value is `false`
>
>

***

### `jumpToDashboardConfig`

**jumpToDashboardConfig**?: `object`

Configuration of the Jump To Dashboard feature

This feature is currently in Beta.

**Note:** Only widgets that are configured using the Fusion UI as documented
[here](https://docs.sisense.com/main/SisenseLinux/jump-to-dashboard.htm?tocpath=Add-ons%7C_____2#ConfiguringJTDPerWidget)
are supported in Compose SDK.

Widgets that are configured using an older version of Jump To Dashboard, or via scripts, are not supported.

Known limitations:
- Jump To Dashboard is not currently supported for Pivot widgets.
- Target dashboards are always opened in a popup window, options to open in new tab and new window are not supported.
- Show 'Header' and 'Dashboards panel' options are not supported (only relevant to Fusion).
- 'Reset filters after JTD' is not supported, since changes are never saved to the target dashboard using Compose SDK.

The following Jump To Dashboard configuration is supported:
  - Target dashboard set by Id, with configurable display title
  - 'Popup window' display type ('Allow Resize' not supported)
  - Display filter panel on the target dashboard (true/false)
  - Navigation setting (Click / Right click)
    - Note: 'Keep changes made by user' is not supported, since changes are never saved to the target dashboard using Compose SDK.
  - Apply filters to the target dashboard (select)
  - Merge target dashboard filters (true/false)

> #### `jumpToDashboardConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable or disable the Jump To Dashboard feature
>
> If not specified, the default value is `true`
>
>

***

e/false)

> #### `jumpToDashboardConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable or disable the Jump To Dashboard feature
>
> If not specified, the default value is `true`
>
>

***

### `loadingIndicatorConfig`

**loadingIndicatorConfig**?: [`LoadingIndicatorConfig`](../../sdk-ui/type-aliases/type-alias.LoadingIndicatorConfig.md)

Loading Indicator Configurations

***

### `locale`

**locale**?: `Locale`

A [date-fns Locale](https://date-fns.org/v2.30.0/docs/Locale)

***

### `queryCacheConfig`

**queryCacheConfig**?: `object`

Query Cache Configurations.

See [Client query caching guide](/guides/sdk/guides/client-query-caching.html) for more details.

> #### `queryCacheConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable client-side query caching.
>
> If not specified, the default value is `false`
>
>

***

### `queryLimit`

**queryLimit**?: `number`

Query limit (max rows count that will be fetched in query)

#### Default

```ts
20000
```

***

> If not specified, the default value is `false`
>
>

***

### `queryLimit`

**queryLimit**?: `number`

Query limit (max rows count that will be fetched in query)

#### Default

```ts
20000
```

***

### `tabberConfig`

**tabberConfig**?: `object`

Configuration of the tabber widgets feature

Only tabber widgets that are configured using the Fusion UI as documented [here](https://docs.sisense.com/main/SisenseLinux/tabber.htm#Creating) are supported.

> #### `tabberConfig.enabled`
>
> **enabled**?: `boolean`
>
> Whether to enable tabber widget support
>
> If not specified, the default value is `true`
>
> ::: warning Deprecated
> Tabber widgets are now supported by default and this property is no longer needed.
> :::
>
>

***

### `trackingConfig`

**trackingConfig**?: `object`

Tracking configuration

> #### `trackingConfig.onTrackingEvent`
>
> **onTrackingEvent**?: (`payload`) => `void`
>
> Callback to be invoked when tracking event occurs
>
> ##### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `payload` | `TrackingEventDetails` |
>
>
> ##### Returns
>
> `void`
>
>
>
>

***

### `translationConfig`

**translationConfig**?: [`TranslationConfig`](type-alias.TranslationConfig.md)

Translation Configuration

rackingEventDetails` |
>
>
> ##### Returns
>
> `void`
>
>
>
>

***

### `translationConfig`

**translationConfig**?: [`TranslationConfig`](type-alias.TranslationConfig.md)

Translation Configuration

# Type alias AreaSubtype

> **AreaSubtype**: `"area/basic"` \| `"area/spline"` \| `"area/stacked"` \| `"area/stacked100"` \| `"area/stackedspline"` \| `"area/stackedspline100"`

Property of [AreaStyleOptions](../interfaces/interface.AreaStyleOptions.md)

Subtype of AreaChart

**Values**

- `area/basic` - straight lines showing areas that overlap so that smaller areas appear on top of larger areas and cover them.
- `area/stacked` - straight lines showing areas that are stacked on top of each other and do not overlap.
- `area/stacked100` - straight lines showing areas that are stacked on top of each other but do not overlap so that the combined area is stretched to the top representing 100%.
- `area/spline` - curved lines showing areas that overlap so that smaller areas appear on top of larger areas and cover them.
- `area/stackedspline` - curved lines showing areas that are stacked on top of each other and do not overlap.
- `area/stackedspline100` - curved lines showing areas that are stacked on top of each other but do not overlap so that the combined area is stretched to the top representing 100%.

# Type alias AreamapChartType

> **AreamapChartType**: `"areamap"`

Areamap chart types

on top of each other but do not overlap so that the combined area is stretched to the top representing 100%.

# Type alias AreamapChartType

> **AreamapChartType**: `"areamap"`

Areamap chart types

# Type alias AxisLabel

> **AxisLabel**: `object`

Options that define configuration for certain chart axis.

## Type declaration

### `enabled`

**enabled**?: `boolean`

Boolean flag that defines if this axis should be shown on the chart

***

### `gridLines`

**gridLines**?: `boolean`

Boolean flag that defines if grid lines should be shown on the chart

***

### `intervalJumps`

**intervalJumps**?: `number`

Interval of the tick marks (jumps) in axis units.

***

### `isIntervalEnabled`

**isIntervalEnabled**?: `boolean`

Boolean flag that defines if tick marks should be shown on the axis

***

### `labels`

**labels**?: `object`

Configuration for labels on the axis

> #### `labels.enabled`
>
> **enabled**: `boolean`
>
> Boolean flag that defines if labels should be shown on the axis
>
>

***

### `logarithmic`

**logarithmic**?: `boolean`

Boolean flag that defines if the axis should have logarithmic scale

***

### `max`

**max**?: `number`

The maximum value of the axis. If 'undefined' the max value is automatically calculated

***

### `min`

**min**?: `number`

The minimum value of the axis. If 'undefined' the min value is automatically calculated

***

f the axis. If 'undefined' the max value is automatically calculated

***

### `min`

**min**?: `number`

The minimum value of the axis. If 'undefined' the min value is automatically calculated

***

### `templateMainYHasGridLines`

**templateMainYHasGridLines**?: `boolean`

Boolean flag that defines if the Y axis should have grid lines extending the ticks across the plot area

***

### `title`

**title**?: `object`

Configuration for title of the axis

> #### `title.enabled`
>
> **enabled**: `boolean`
>
> Boolean flag that defines if title should be shown
>
> #### `title.text`
>
> **text**?: `string`
>
> Textual content of the title
>
>

***

### `x2Title`

**x2Title**?: [`X2Title`](type-alias.X2Title.md)

Configuration for title of the second X axis

# Type alias BeforeRenderHandler

> **BeforeRenderHandler**: (`highchartsOptions`) => `HighchartsOptions`

A handler function that allows you to customize the underlying chart element before it is
rendered. Use the `highchartsOptions` object that is passed to the callback to change
[options values](https://api.highcharts.com/highcharts/) and then return the modified options
object. The returned options are then used when rendering the chart.

This callback is not supported for Indicator Chart, Areamap Chart, and Scattermap Chart.

For an example of how the `BeforeRenderHandler` function can be used, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#callbacks).

t, and Scattermap Chart.

For an example of how the `BeforeRenderHandler` function can be used, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#callbacks).

## See

[https://api.highcharts.com/highcharts/](https://api.highcharts.com/highcharts/)

## Parameters

| Parameter | Type |
| :------ | :------ |
| `highchartsOptions` | `HighchartsOptions` |

## Returns

`HighchartsOptions`

# Type alias BoxWhiskerType

> **BoxWhiskerType**: `"extremums"` \| `"iqr"` \| `"standardDeviation"`

Represents the type of box whisker data algorithm, which can be either `iqr`, `extremums`, or `standardDeviation`.

# Type alias BoxplotChartCustomDataOptions

> **BoxplotChartCustomDataOptions**: `object`

Configuration for how to query aggregate data and assign data
to axes of a Boxplot chart.

The Boxplot chart can receive multiple numeric columns, which represent all the metrics
such as `whisker max`, `whisker min`, `box max`, `box median`, and `box min`.

## Type declaration

### `category`

**category**: [(Column \| StyledColumn)?]

Columns (or attributes) whose values represent categories in the chart.

***

### `outliers`

**outliers**?: [[`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](../interfaces/interface.StyledColumn.md)]

Optional measure columns (or measures) representing the boxplot outliers value.

***

n`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](../interfaces/interface.StyledColumn.md)]

Optional measure columns (or measures) representing the boxplot outliers value.

***

### `value`

**value**: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](../interfaces/interface.StyledColumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[]

Measure columns (or measures) representing the target numeric values used for computing boxplot metrics.

***

### `valueTitle`

**valueTitle**: `string`

The title for the numeric value column in the chart.

# Type alias BoxplotChartDataOptions

> **BoxplotChartDataOptions**: `object`

Configuration for how to query aggregate data and assign data
to axes of a Boxplot chart.

The Boxplot chart can receive a singular numeric column, which is utilized internally to calculate multiple metrics
such as `whisker max`, `whisker min`, `box max`, `box median`, and `box min`.

## Type declaration

### `boxType`

**boxType**: [`BoxWhiskerType`](type-alias.BoxWhiskerType.md)

The type of box whisker data algorithm to be used.

***

### `category`

**category**: [(Column \| StyledColumn)?]

Columns (or attributes) whose values represent categories in the chart.

***

.md)

The type of box whisker data algorithm to be used.

***

### `category`

**category**: [(Column \| StyledColumn)?]

Columns (or attributes) whose values represent categories in the chart.

***

### `outliersEnabled`

**outliersEnabled**?: `boolean`

Toggle flag whether outliers should be enabled in the boxplot chart.

***

### `value`

**value**: [[`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`StyledColumn`](../interfaces/interface.StyledColumn.md)]

Columns (or attributes) whose values represent the target numeric value column for computing boxplot metrics according to the selected `boxType`

# Type alias BoxplotChartType

> **BoxplotChartType**: `"boxplot"`

Boxplot chart types

# Type alias BoxplotDataPoint

> **BoxplotDataPoint**: `object`

Data point in a Boxplot chart.

## Type declaration

### `boxMax`

**boxMax**?: `number`

Value of the box maximum

***

### `boxMedian`

**boxMedian**?: `number`

Value of the box median

***

### `boxMin`

**boxMin**?: `number`

Value of the box minimum

***

### `categoryDisplayValue`

**categoryDisplayValue**?: `string`

Display value of category of the data point

***

### `categoryValue`

**categoryValue**?: `number` \| `string`

Value of the category for the data point

***

`

**categoryDisplayValue**?: `string`

Display value of category of the data point

***

### `categoryValue`

**categoryValue**?: `number` \| `string`

Value of the category for the data point

***

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.category`
>
> **category**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `category` data options
>
> #### `entries.outliers`
>
> **outliers**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `outliers` data options
>
> #### `entries.value`
>
> **value**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `value` data options
>
>

***

### `outlier`

**outlier**?: `number`

Value of the outlier

***

### `whiskerMax`

**whiskerMax**?: `number`

Value of the box maximal whisker

***

### `whiskerMin`

**whiskerMin**?: `number`

Value of the box minimal whisker

# Type alias BoxplotSubtype

> **BoxplotSubtype**: `"boxplot/full"` \| `"boxplot/hollow"`

# Type alias CalendarDayOfWeek

> **CalendarDayOfWeek**: `"friday"` \| `"monday"` \| `"saturday"` \| `"sunday"` \| `"thursday"` \| `"tuesday"` \| `"wednesday"`

Day of the week

# Type alias CalendarHeatmapChartType

> **CalendarHeatmapChartType**: `"calendar-heatmap"`

Calendar heatmap chart types

`"sunday"` \| `"thursday"` \| `"tuesday"` \| `"wednesday"`

Day of the week

# Type alias CalendarHeatmapChartType

> **CalendarHeatmapChartType**: `"calendar-heatmap"`

Calendar heatmap chart types

# Type alias CalendarHeatmapDataPoint

> **CalendarHeatmapDataPoint**: `object`

Data point in a CalendarHeatmap chart.

## Type declaration

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.date`
>
> **date**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `date` data options
>
> #### `entries.value`
>
> **value**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `value` data options
>
>

# Type alias CalendarHeatmapSubtype

> **CalendarHeatmapSubtype**: `"calendar-heatmap/continuous"` \| `"calendar-heatmap/split"`

Calendar heatmap chart subtype

# Type alias CalendarHeatmapViewType

> **CalendarHeatmapViewType**: `"half-year"` \| `"month"` \| `"quarter"` \| `"year"`

View type determines how many months to display: 'month' (1), 'quarter' (3), 'half-year' (6), 'year' (12)

# Type alias CartesianChartType

> **CartesianChartType**: `"area" | "bar" | "column" | "line" | "polar" | "streamgraph"`

Cartesian family of chart types

quarter' (3), 'half-year' (6), 'year' (12)

# Type alias CartesianChartType

> **CartesianChartType**: `"area" | "bar" | "column" | "line" | "polar" | "streamgraph"`

Cartesian family of chart types

# Type alias CartesianWidgetType

> **CartesianWidgetType**: `"chart/area"` \| `"chart/bar"` \| `"chart/column"` \| `"chart/line"` \| `"chart/polar"`

The type of a widget on a dashboard that is a variant of Cartesian widget.

# Type alias CategoricalChartType

> **CategoricalChartType**: `"funnel" | "pie" | "sunburst" | "treemap"`

Categorical family of chart types

# Type alias CategoricalWidgetType

> **CategoricalWidgetType**: `"chart/funnel"` \| `"chart/pie"` \| `"sunburst"` \| `"treemap"`

The type of a widget on a dashboard that is a variant of Categorical widget.

ias CategoricalWidgetType

> **CategoricalWidgetType**: `"chart/funnel"` \| `"chart/pie"` \| `"sunburst"` \| `"treemap"`

The type of a widget on a dashboard that is a variant of Categorical widget.

# Type alias ChartDataOptions

> **ChartDataOptions**: [`RegularChartDataOptions`](../../sdk-ui/type-aliases/type-alias.RegularChartDataOptions.md) \| [`TabularChartDataOptions`](../../sdk-ui/type-aliases/type-alias.TabularChartDataOptions.md)

Configuration for querying aggregate data and assigning data to chart encodings.

There are separate configurations for [Cartesian](../interfaces/interface.CartesianChartDataOptions.md),
[Categorical](../interfaces/interface.CategoricalChartDataOptions.md),
[Scatter](../interfaces/interface.ScatterChartDataOptions.md),
[Indicator](../interfaces/interface.IndicatorChartDataOptions.md),
[Table](../interfaces/interface.TableDataOptions.md),
[Boxplot](type-alias.BoxplotChartDataOptions.md),
[Areamap](../interfaces/interface.AreamapChartDataOptions.md), and
[Scattermap](../interfaces/interface.ScattermapChartDataOptions.md) charts.

# Type alias ChartStyleOptions

> **ChartStyleOptions**: [`RegularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.RegularChartStyleOptions.md) \| [`TabularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

yleOptions.md) \| [`TabularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

# Type alias ChartType

> **ChartType**: [`AreamapChartType`](type-alias.AreamapChartType.md) \| [`BoxplotChartType`](type-alias.BoxplotChartType.md) \| [`CalendarHeatmapChartType`](type-alias.CalendarHeatmapChartType.md) \| [`CartesianChartType`](type-alias.CartesianChartType.md) \| [`CategoricalChartType`](type-alias.CategoricalChartType.md) \| [`IndicatorChartType`](type-alias.IndicatorChartType.md) \| [`RangeChartType`](../../sdk-ui/type-aliases/type-alias.RangeChartType.md) \| [`ScatterChartType`](type-alias.ScatterChartType.md) \| [`ScattermapChartType`](type-alias.ScattermapChartType.md) \| [`TableChartType`](../../sdk-ui/type-aliases/type-alias.TableChartType.md)

Chart type of one of the supported chart families

# Type alias ChartWidgetStyleOptions

> **ChartWidgetStyleOptions**: [`ChartStyleOptions`](type-alias.ChartStyleOptions.md) & [`WidgetContainerStyleOptions`](../../sdk-ui/interfaces/interface.WidgetContainerStyleOptions.md)

Style settings defining the look and feel of ChartWidget

# Type alias Color

> **Color**: `null` \| `string`

HEX color value or CSS color name.

# Type alias ColorPaletteTheme

> **ColorPaletteTheme**: `object`

Collection of colors used to color various elements.

## Type declaration

: `null` \| `string`

HEX color value or CSS color name.

# Type alias ColorPaletteTheme

> **ColorPaletteTheme**: `object`

Collection of colors used to color various elements.

## Type declaration

### `variantColors`

**variantColors**: [`Color`](type-alias.Color.md)[]

Set of colors used to color chart elements

# Type alias ConditionalDataColorOptions

> **ConditionalDataColorOptions**: `object`

Conditional color options for data similar to the Conditional Color option in the Sisense UI.

This option allows you to define color conditions.
Each condition is a logical expression that defines how data values are mapped into colors.
These conditions are evaluated in the order in which they appear in the array.

## Example

An example of a condition stating that a negative data value is displayed in red
and another condition stating that a positive data value is green.

```ts
{
  type: 'conditional',
  conditions: [
    { color: 'red', expression: '0', operator: '<' },
    { color: 'green', expression: '0', operator: '>=' },
  ],
  defaultColor: 'red',
}
```

## Type declaration

### `conditions`

**conditions**?: [`DataColorCondition`](type-alias.DataColorCondition.md)[]

Array of color conditions

***

### `defaultColor`

**defaultColor**?: `string`

Default color when no condition is met

***

### `type`

**type**: `"conditional"`

Color options type

ndition.md)[]

Array of color conditions

***

### `defaultColor`

**defaultColor**?: `string`

Default color when no condition is met

***

### `type`

**type**: `"conditional"`

Color options type

# Type alias Convolution

> **Convolution**: `object`

Configuration that defines the ability of the Pie chart to collapse (convolve) and
hide part of the data under the single category "Others".

## Type declaration

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if convolution ability should be enabled on chart

***

### `independentSlicesCount`

**independentSlicesCount**?: `number`

Number that defines of how many independent slices should be present in chart (other will be convolved)

***

### `minimalIndependentSlicePercentage`

**minimalIndependentSlicePercentage**?: `number`

Value that defines what minimal size in percent should a slice take to fall under the convolution

***

### `selectedConvolutionType`

**selectedConvolutionType**?: `"byPercentage"` \| `"bySlicesCount"`

Selected type of convolution behavior

# Type alias CustomWidgetComponent`<Props>`

> **CustomWidgetComponent**: <`Props`> `Component`\< `Props` \> \| `DefineComponent`\< `Props` \>

Type representing a Vue component that can be used as a user-defined custom widget.
This can be a Vue component options object, a defineComponent result, or any valid Vue component.

t`\< `Props` \>

Type representing a Vue component that can be used as a user-defined custom widget.
This can be a Vue component options object, a defineComponent result, or any valid Vue component.

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `Props` *extends* [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md) | [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md) |

# Type alias CustomWidgetQueryState

> **CustomWidgetQueryState**: [`QueryState`](../../sdk-ui/type-aliases/type-alias.QueryState.md)

State of a query execution retrieving data of a custom widget.

# Type alias DashStyle

> **DashStyle**: `"Dash"` \| `"DashDot"` \| `"Dot"` \| `"LongDash"` \| `"LongDashDot"` \| `"LongDashDotDot"` \| `"ShortDash"` \| `"ShortDashDot"` \| `"ShortDashDotDot"` \| `"ShortDot"` \| `"Solid"`

Configuration that defines line dash type

# Type alias DataColorCondition

> **DataColorCondition**: `object`

Color condition for [ConditionalDataColorOptions](type-alias.ConditionalDataColorOptions.md) represented as a logical expression.

See [ConditionalDataColorOptions](type-alias.ConditionalDataColorOptions.md) for usage examples.

## Type declaration

### `color`

**color**: `string`

Color for this condition

***

### `expression`

**expression**: `string`

Expression representing the data value

***

md) for usage examples.

## Type declaration

### `color`

**color**: `string`

Color for this condition

***

### `expression`

**expression**: `string`

Expression representing the data value

***

### `operator`

**operator**: `"!="` \| `"<"` \| `"<="` \| `"="` \| `">"` \| `">="` \| `"≠"` \| `"≤"` \| `"≥"`

Supported operators for `expression`

# Type alias DataColorOptions

> **DataColorOptions**: [`ConditionalDataColorOptions`](type-alias.ConditionalDataColorOptions.md) \| [`RangeDataColorOptions`](type-alias.RangeDataColorOptions.md) \| [`UniformDataColorOptions`](type-alias.UniformDataColorOptions.md) \| `string`

All possible color options for data.

# Type alias DataOptionLocation

> **DataOptionLocation**: `object`

Location within component data options that identifies a specific data option.

## Example

```typescript
{ dataOptionName: 'category', dataOptionIndex: 0 } // First category
{ dataOptionName: 'value', dataOptionIndex: 1 }    // Second value measure
```

## Type declaration

### `dataOptionIndex`

**dataOptionIndex**?: `number`

Data option location zero-based index.

Required for array-based locations (e.g., `rows`, `columns`, `values`, `category`).
Optional for single-value locations (e.g., `x`, `y`, `date`).

#### Default

```ts
0
```

***

n zero-based index.

Required for array-based locations (e.g., `rows`, `columns`, `values`, `category`).
Optional for single-value locations (e.g., `x`, `y`, `date`).

#### Default

```ts
0
```

***

### `dataOptionName`

**dataOptionName**: `"breakBy"` \| `"breakByColor"` \| `"breakByPoint"` \| `"category"` \| `"color"` \| `"colorBy"` \| `"columns"` \| `"date"` \| `"details"` \| `"geo"` \| `"max"` \| `"min"` \| `"outliers"` \| `"rows"` \| `"secondary"` \| `"size"` \| `"value"` \| `"values"` \| `"x"` \| `"y"`

Data option location name that identifies the property containing the data option.

Examples:
- PivotTable: `'rows'` | `'columns'` | `'values'`
- Cartesian charts: `'category'` | `'value'` | `'breakBy'`
- Scatter charts: `'x'` | `'y'` | `'breakByPoint'` | `'breakByColor'` | `'size'`

# Type alias DataPoint

> **DataPoint**: `object`

Data point in a regular chart.

## Type declaration

### `categoryDisplayValue`

**categoryDisplayValue**?: `string`

Display value of categorical value of the data point

***

### `categoryValue`

**categoryValue**?: `number` \| `string`

Categorical value of the data point

***

*categoryDisplayValue**?: `string`

Display value of categorical value of the data point

***

### `categoryValue`

**categoryValue**?: `number` \| `string`

Categorical value of the data point

***

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.breakBy`
>
> **breakBy**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `breakBy` data options
>
> #### `entries.category`
>
> **category**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `category` data options
>
> #### `entries.value`
>
> **value**: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
>
> Data point entries for the `value` data options
>
>

***

### `seriesValue`

**seriesValue**?: `number` \| `string`

Series associated with the data point

***

### `value`

**value**?: `number` \| `string`

Value of the data point

# Type alias DateConfig

> **DateConfig**: `object`

Date configurations

## Type declaration

### `fiscalMonth`

**fiscalMonth**: [`MonthOfYear`](type-alias.MonthOfYear.md)

First month of the fiscal year that is configured

***

### `isFiscalOn`

**isFiscalOn**: `boolean`

Boolean flag whether fiscal year is enabled

***

h**: [`MonthOfYear`](type-alias.MonthOfYear.md)

First month of the fiscal year that is configured

***

### `isFiscalOn`

**isFiscalOn**: `boolean`

Boolean flag whether fiscal year is enabled

***

### `selectedDateLevel`

**selectedDateLevel**: [`DateLevel`](type-alias.DateLevel.md)

The selected date level for this particular column of data

***

### `timeZone`

**timeZone**: `string`

The IANA time zone

***

### `weekFirstDay`

**weekFirstDay**: [`DayOfWeek`](type-alias.DayOfWeek.md)

First day of the week

# Type alias DateLevel

> **DateLevel**: `"dateAndTime" | "days" | "minutes" | "months" | "quarters" | "weeks" | "years"`

# Type alias DayOfWeek

> **DayOfWeek**: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`

# Type alias DecimalScale

> **DecimalScale**: `"auto"` \| `number`

The number of decimal places

# Type alias DrilldownOptions

> **DrilldownOptions**: `object`

Configuration for the drilldown

## Type declaration

### `drilldownPaths`

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../../sdk-ui/interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

Dimensions and hierarchies available for drilldown on.

***

### `drilldownSelections`

**drilldownSelections**?: [`DrilldownSelection`](type-alias.DrilldownSelection.md)[]

Current selections for multiple drilldowns

rarchies available for drilldown on.

***

### `drilldownSelections`

**drilldownSelections**?: [`DrilldownSelection`](type-alias.DrilldownSelection.md)[]

Current selections for multiple drilldowns

# Type alias DrilldownSelection

> **DrilldownSelection**: `object`

Selection for the drilldown

## Type declaration

### `nextDimension`

**nextDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Dimension to drilldown to

***

### `points`

**points**: [`ChartDataPoint`](../../sdk-ui/type-aliases/type-alias.ChartDataPoint.md)[]

Points selected for drilldown

# Type alias DrilldownWidgetConfig

> **DrilldownWidgetConfig**: `object`

## Type declaration

### `breadcrumbsComponent`

**breadcrumbsComponent**?: `Component`

***

### `contextMenuComponent`

**contextMenuComponent**?: (`props`) => `Component`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`ContextMenuProps`](../../sdk-ui/interfaces/interface.ContextMenuProps.md) |

#### Returns

`Component`

***

### `isBreadcrumbsDetached`

**isBreadcrumbsDetached**?: `boolean`

# Type alias EndCapType

> **EndCapType**: `"Round"` \| `"Square"`

Configuration that defines line end cap type

`Component`

***

### `isBreadcrumbsDetached`

**isBreadcrumbsDetached**?: `boolean`

# Type alias EndCapType

> **EndCapType**: `"Round"` \| `"Square"`

Configuration that defines line end cap type

# Type alias FilterMembersState

> **FilterMembersState**: [`FilterMembersErrorState`](../interfaces/interface.FilterMembersErrorState.md) \| [`FilterMembersLoadingState`](../interfaces/interface.FilterMembersLoadingState.md) \| [`FilterMembersSuccessState`](../interfaces/interface.FilterMembersSuccessState.md)

States of the [useGetFilterMembers](../filter-tiles/function.useGetFilterMembers.md) hook.

# Type alias FilterVariant

> **FilterVariant**: `"horizontal"` \| `"vertical"`

Orientation options for the filter tile. The filter tile can
be arranged vertically, or horizontally to fit most toolbars.

# Type alias GenericDataOptions

> **GenericDataOptions**: `Record`\< `string`, ([`StyledColumn`](../interfaces/interface.StyledColumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[] \>

Data options with arbitrary keys. This is typically used in the context of a custom widget.

terface.StyledColumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[] \>

Data options with arbitrary keys. This is typically used in the context of a custom widget.

# Type alias IndicatorBeforeRenderHandler

> **IndicatorBeforeRenderHandler**: (`renderOptions`) => [`IndicatorRenderOptions`](type-alias.IndicatorRenderOptions.md)

A handler function that allows you to customize the underlying chart element before it is
rendered. Use the [IndicatorRenderOptions](type-alias.IndicatorRenderOptions.md) object that is passed to the callback to change
and then return the modified options object.
The returned options are then used when rendering the chart.

This callback is supported only for Indicator Chart.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `renderOptions` | [`IndicatorRenderOptions`](type-alias.IndicatorRenderOptions.md) |

## Returns

[`IndicatorRenderOptions`](type-alias.IndicatorRenderOptions.md)

# Type alias IndicatorChartType

> **IndicatorChartType**: `"indicator"`

Indicator chart types

# Type alias IndicatorComponents

> **IndicatorComponents**: `object`

Configuration options that define components of an indicator chart.

## Type declaration

### `labels`

**labels**?: `object`

The value labels of the indicator chart

> #### `labels.shouldBeShown`
>
> **shouldBeShown**: `boolean`
>
> Whether the labels should be shown
>
>

***

laration

### `labels`

**labels**?: `object`

The value labels of the indicator chart

> #### `labels.shouldBeShown`
>
> **shouldBeShown**: `boolean`
>
> Whether the labels should be shown
>
>

***

### `secondaryTitle`

**secondaryTitle**?: `object`

The secondary title of the indicator chart to be shown when `secondary` is specified in [IndicatorChartDataOptions](../interfaces/interface.IndicatorChartDataOptions.md)

> #### `secondaryTitle.text`
>
> **text**?: `string`
>
> The text of the secondary title
>
>

***

### `ticks`

**ticks**?: `object`

The ticks displayed on the indicator chart

> #### `ticks.shouldBeShown`
>
> **shouldBeShown**: `boolean`
>
> Whether the ticks should be shown
>
>

***

### `title`

**title**?: `object`

The main title of the indicator chart

> #### `title.shouldBeShown`
>
> **shouldBeShown**: `boolean`
>
> Whether the title should be shown
>
> #### `title.text`
>
> **text**?: `string`
>
> The text of the title
>
>

# Type alias IndicatorRenderOptions

> **IndicatorRenderOptions**: `object`

Indicator render options.

## Type declaration

> #### `title.text`
>
> **text**?: `string`
>
> The text of the title
>
>

# Type alias IndicatorRenderOptions

> **IndicatorRenderOptions**: `object`

Indicator render options.

## Type declaration

### `secondary`

**secondary**: `object`

The secondary value options.

> #### `secondary.color`
>
> **color**: `string`
>
> The secondary value color.
>
> #### `secondary.data`
>
> **data**: `number`
>
> The secondary value data.
>
> #### `secondary.fontWeight`
>
> **fontWeight**: `string`
>
> The secondary value font weight.
>
> #### `secondary.text`
>
> **text**: `string`
>
> The secondary value text.
>
>

***

### `secondaryTitle`

**secondaryTitle**: `object`

The secondary title options.

> #### `secondaryTitle.color`
>
> **color**: `string`
>
> The secondary title color.
>
> #### `secondaryTitle.text`
>
> **text**: `string`
>
> The secondary title text.
>
>

***

### `title`

**title**: `object`

The title options.

> #### `title.color`
>
> **color**: `string`
>
> The title color.
>
> #### `title.text`
>
> **text**: `string`
>
> The title text.
>
>

***

### `value`

**value**: `object`

The primary value options.

> #### `value.color`
>
> **color**: `string`
>
> The primary value color.
>
> #### `value.data`
>
> **data**: `number`
>
> The primary value data.
>
> #### `value.text`
>
> **text**: `string`
>
> The primary value text.
>
>

**color**: `string`
>
> The primary value color.
>
> #### `value.data`
>
> **data**: `number`
>
> The primary value data.
>
> #### `value.text`
>
> **text**: `string`
>
> The primary value text.
>
>

# Type alias IndicatorStyleOptions

> **IndicatorStyleOptions**: [`GaugeIndicatorStyleOptions`](../interfaces/interface.GaugeIndicatorStyleOptions.md) \| [`NumericBarIndicatorStyleOptions`](../interfaces/interface.NumericBarIndicatorStyleOptions.md) \| [`NumericSimpleIndicatorStyleOptions`](../interfaces/interface.NumericSimpleIndicatorStyleOptions.md) & \{
  `height`: `number`;
  `width`: `number`;
 }

Configuration options that define functional style of the various elements of IndicatorChart

> ## `IndicatorStyleOptions.height`
>
> **height**?: `number`
>
> Total height of the component, which is considered in the following order of priority:
>
> 1. Value passed to this property (in pixels).
> 2. Height of the container wrapping this component
> 3. Default value of 200px (for component without header) or 225px (for component with header).
>
> ## `IndicatorStyleOptions.width`
>
> **width**?: `number`
>
> Total width of the component, which is considered in the following order of priority:
>
> 1. Value passed to this property (in pixels)
> 2. Width of the container wrapping this component
> 3. Default value of 200px
>
>

# Type alias Labels

> **Labels**: `object`

Configuration that defines behavior of data labels on chart

## Type declaration

f the container wrapping this component
> 3. Default value of 200px
>
>

# Type alias Labels

> **Labels**: `object`

Configuration that defines behavior of data labels on chart

## Type declaration

### `categories`

**categories**?: `boolean`

Boolean flag that defines if categories names should be shown

***

### `decimals`

**decimals**?: `boolean`

Boolean flag that defines if decimals should be shown for percent labels

***

### `enabled`

**enabled**?: `boolean`

Boolean flag that defines if any labels should be shown

***

### `percent`

**percent**?: `boolean`

Boolean flag that defines if percents of Pie should be shown on slices

***

### `value`

**value**?: `boolean`

Boolean flag that defines if original values per category should be shown

# Type alias Legend

> **Legend**: [`LegendOptions`](../../sdk-ui/type-aliases/type-alias.LegendOptions.md)

Alias for LegendOptions for backward compatibility

::: warning Deprecated
Please use [LegendOptions](../../sdk-ui/type-aliases/type-alias.LegendOptions.md) instead
:::

# Type alias LineOptions

> **LineOptions**: `object`

Configuration options for styling lines in charts.

This type is used to customize the visual appearance of lines in various chart types
including Line charts, Area charts, and AreaRange charts.

## Type declaration

### `dashStyle`

**dashStyle**?: [`DashStyle`](type-alias.DashStyle.md)

Dash pattern for the line.

Defines the visual pattern of the line.

***

charts, and AreaRange charts.

## Type declaration

### `dashStyle`

**dashStyle**?: [`DashStyle`](type-alias.DashStyle.md)

Dash pattern for the line.

Defines the visual pattern of the line.

***

### `endCap`

**endCap**?: [`EndCapType`](type-alias.EndCapType.md)

Style of the line end caps.

Controls how the ends of lines are rendered:
- `'Round'`: Rounded ends for a softer appearance
- `'Square'`: Sharp, flat ends for a crisp appearance

***

### `shadow`

**shadow**?: `boolean`

Whether to apply a shadow effect to the line.

When enabled, adds a subtle shadow behind the line for enhanced.

***

### `width`

**width**?: `number`

Width of the line in pixels.

# Type alias LineSubtype

> **LineSubtype**: `"line/basic"` \| `"line/spline"` \| `"line/step"`

Property of [LineStyleOptions](../interfaces/interface.LineStyleOptions.md)

Subtype of LineChart

**Values**

- `line/spline` - curved line from point to point.
- `line/basic` - straight line from point to point.
- `line/step` - step line where segments create a step-like pattern.

# Type alias LineWidth

> **LineWidth**: `object`

Configuration that defines line width

## Type declaration

### `width`

**width**: `"bold"` \| `"thick"` \| `"thin"`

Line width type

# Type alias Markers

> **Markers**: `object`

Options that define  markers - symbols or data points that highlight specific values.

## Type declaration

` \| `"thick"` \| `"thin"`

Line width type

# Type alias Markers

> **Markers**: `object`

Options that define  markers - symbols or data points that highlight specific values.

## Type declaration

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if markers should be shown on the chart

***

### `fill`

**fill**?: `"filled"` \| `"hollow"`

Marker fill style

***

### `size`

**size**?: `"large"` \| `"small"`

Size of markers

# Type alias MaybeRef`<T>`

> **MaybeRef**: <`T`> `Ref`\< `T` \> \| `T`

## Type parameters

| Parameter |
| :------ |
| `T` |

# Type alias MaybeRefOrWithRefs`<T>`

> **MaybeRefOrWithRefs**: <`T`> [`MaybeRef`](type-alias.MaybeRef.md)\< `T` \> \| [`MaybeWithRefs`](type-alias.MaybeWithRefs.md)\< `T` \>

## Type parameters

| Parameter |
| :------ |
| `T` *extends* `Object` |

# Type alias MaybeWithRefs`<T>`

> **MaybeWithRefs**: <`T`> `{ [Property in keyof T]: MaybeRef<T[Property]> }`

## Type parameters

| Parameter |
| :------ |
| `T` *extends* `object` |

# Type alias MenuItemSection

> **MenuItemSection**: `object`

Context menu section
Used in [`ContextMenuProps`](../../sdk-ui/interfaces/interface.ContextMenuProps.md)

## Type declaration

### `items`

**items**?: \{
  `caption`: `string`;
  `key`: `number` \| `string`;
  `onClick`: () => `void`;
 }[]

Optional list of menu items

***

### `sectionTitle`

**sectionTitle**?: `string`

Optional section title

?: \{
  `caption`: `string`;
  `key`: `number` \| `string`;
  `onClick`: () => `void`;
 }[]

Optional list of menu items

***

### `sectionTitle`

**sectionTitle**?: `string`

Optional section title

# Type alias MenuPosition

> **MenuPosition**: `object`

Context menu position coordinates
Used in [`ContextMenuProps`](../../sdk-ui/interfaces/interface.ContextMenuProps.md)

## Type declaration

### `left`

**left**: `number`

Horizontal position

***

### `top`

**top**: `number`

Vertical position

# Type alias MonthOfYear

> **MonthOfYear**: `0` \| `1` \| `10` \| `11` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9`

# Type alias MultiColumnValueToColorMap

> **MultiColumnValueToColorMap**: `object`

Mapping of each of the chart columns with mapping of each value series to colors.

## Index signature

 \[`columnName`: `string`\]: [`ValueToColorMap`](type-alias.ValueToColorMap.md)

# Type alias Navigator

> **Navigator**: `object`

Options that define navigator - zoom/pan tool for large datasets in a chart.

## Type declaration

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if navigator should be shown on the chart

***

### `scrollerLocation`

**scrollerLocation**?: `object`

The scroll location of the navigator scroller / auto zoom feature

> #### `scrollerLocation.max`
>
> **max**: `number`
>
> #### `scrollerLocation.min`
>
> **min**: `number`
>
>

ocation**?: `object`

The scroll location of the navigator scroller / auto zoom feature

> #### `scrollerLocation.max`
>
> **max**: `number`
>
> #### `scrollerLocation.min`
>
> **min**: `number`
>
>

# Type alias NumberFormatConfig

> **NumberFormatConfig**: `object`

Configuration for number formatting.

## Type declaration

### `billion`

**billion**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one billion - e.g. 1B

***

### `decimalScale`

**decimalScale**?: [`DecimalScale`](type-alias.DecimalScale.md)

The number of decimal places

***

### `kilo`

**kilo**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one thousand - e.g. 1K

***

### `million`

**million**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one million - e.g. 1M

***

### `name`

**name**?: `"Currency"` \| `"Numbers"` \| `"Percent"`

Supported formats

***

### `prefix`

**prefix**?: `boolean`

Boolean flag whether `symbol` is shown in front of or after the number

If true, append `symbol` in front of the number, e.g. show `$1000` when `symbol` is `$`.

If false, append `symbol` after the number, e.g. show `1000¥` when `symbol` is `¥`.

***

### `symbol`

**symbol**?: `string`

Symbol to show in front of or after the number depending on the value of `prefix`.

***

`symbol` after the number, e.g. show `1000¥` when `symbol` is `¥`.

***

### `symbol`

**symbol**?: `string`

Symbol to show in front of or after the number depending on the value of `prefix`.

***

### `thousandSeparator`

**thousandSeparator**?: `boolean`

Boolean flag whether the thousand separator is shown

If true, show the thousand separator, e.g. `1,000`. Otherwise, show `1000`

***

### `trillion`

**trillion**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one trillion - e.g. 1T

# Type alias PieSubtype

> **PieSubtype**: `"pie/classic"` \| `"pie/donut"` \| `"pie/ring"`

Property of [PieStyleOptions](../interfaces/interface.PieStyleOptions.md)

Subtype of PieChart

**Values**

- `pie/classic` - a circle divided into a series of segments where each segment represents a particular category.
- `pie/donut` - a circle divided into a series of segments where each segment represents a particular category with its center cut out to look like a donut.
- `pie/ring` - a circle divided into a series of segments where each segment represents a particular category with its center cut out to look like a ring.

# Type alias PivotRowsSort

> **PivotRowsSort**: `object`

Sorting configuration for pivot "rows".

This configuration allows sorting pivot "rows" either by their data or by data in a specific "values" column.

s PivotRowsSort

> **PivotRowsSort**: `object`

Sorting configuration for pivot "rows".

This configuration allows sorting pivot "rows" either by their data or by data in a specific "values" column.

## Example

Examples of sorting configurations for various scenarios:

(1) Row sorted in ascending order by its data:
```ts
{ direction: 'sortAsc' }
```

(2) Row sorted in descending order by data in the first "values" column (index 0):
```ts
{
   direction: 'sortDesc',
   by: {
     valuesIndex: 0,
   }
}
```

(3) Row sorted in ascending order by data in the second "values" column (index 1) under the "columns" values of "Female" (for Gender) and "0-18" (for AgeRange):
```ts
{
   direction: 'sortAsc',
   by: {
     valuesIndex: 1,
     columnsMembersPath: ['Female', '0-18']
   }
}
```

## Type declaration

### `by`

**by**?: `object`

Sorting target configuration, allowing sorting "rows" by the data in a specific "values" column

> #### `by.columnsMembersPath`
>
> **columnsMembersPath**?: (`number` \| `string`)[]
>
> Path to the target column if selected "columns" items (dimensions) are involved
>
> #### `by.valuesIndex`
>
> **valuesIndex**?: `number`
>
> Index of the target "values" item (measure)
>
>

***

### `direction`

**direction**: [`SortDirection`](type-alias.SortDirection.md)

Sorting direction, either in Ascending order, Descending order, or None

f the target "values" item (measure)
>
>

***

### `direction`

**direction**: [`SortDirection`](type-alias.SortDirection.md)

Sorting direction, either in Ascending order, Descending order, or None

# Type alias PivotTableDrilldownOptions

> **PivotTableDrilldownOptions**: [`PivotTableNonSelectableDrilldownOptions`](type-alias.PivotTableNonSelectableDrilldownOptions.md) \| [`PivotTableSelectableDrilldownOptions`](type-alias.PivotTableSelectableDrilldownOptions.md)

Configuration for the pivot table drilldown

# Type alias PivotTableNonSelectableDrilldownOptions

> **PivotTableNonSelectableDrilldownOptions**: `object`

Configuration for the pivot table drilldown without initial target and selections

## Type declaration

### `drilldownPaths`

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../../sdk-ui/interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

Dimensions and hierarchies available for drilldown on

***

### `drilldownSelections`

**drilldownSelections**?: `never`

Current selections for multiple drilldowns

***

### `drilldownTarget`

**drilldownTarget**?: `never`

Current pivot table data option target for the drilldown

# Type alias PivotTableSelectableDrilldownOptions

> **PivotTableSelectableDrilldownOptions**: `object`

Configuration for the pivot table drilldown with initial target and selections defined

## Type declaration

ivotTableSelectableDrilldownOptions

> **PivotTableSelectableDrilldownOptions**: `object`

Configuration for the pivot table drilldown with initial target and selections defined

## Type declaration

### `drilldownPaths`

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../../sdk-ui/interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

Dimensions and hierarchies available for drilldown on

***

### `drilldownSelections`

**drilldownSelections**: [`DrilldownSelection`](type-alias.DrilldownSelection.md)[]

Current selections for multiple drilldowns

***

### `drilldownTarget`

**drilldownTarget**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`DataOptionLocation`](type-alias.DataOptionLocation.md)

Current pivot table data option target for the drilldown

Can be either:
- An `Attribute` directly (when you know the specific attribute to target)
- A `DataOptionLocation` (when you need to reference a data option by its position in the data options structure)

e either:
- An `Attribute` directly (when you know the specific attribute to target)
- A `DataOptionLocation` (when you need to reference a data option by its position in the data options structure)

# Type alias PolarSubtype

> **PolarSubtype**: `"polar/area"` \| `"polar/column"` \| `"polar/line"`

Property of [PolarStyleOptions](../interfaces/interface.PolarStyleOptions.md)

Subtype of PolarChart

**Values**

- `polar/column` - a chart where data points are displayed using the angle and distance from the center point.
- `polar/area` - a chart in which the data points are connected by a line with the area below the line filled.
- `polar/line` -  a chart in which the data points are connected by a line.

# Type alias RangeDataColorOptions

> **RangeDataColorOptions**: `object`

Range color options for data similar to the Range option in the Sisense UI.

Use `minColor` and `maxColor` to define the start and end color of the range.
A color name (for example, `red`), or a hexadecimal value (for example, `#ff0000`) can be specified.

By default, the color range is set to match the minimum and maximum values of the data.
You can also override the default value range by
setting the `minValue`, `midValue`, and `maxValue` properties.

y default, the color range is set to match the minimum and maximum values of the data.
You can also override the default value range by
setting the `minValue`, `midValue`, and `maxValue` properties.

## Example

An example of specifying colors for data values ranging
from red (for min value) to blue (for max value)
with 2 more colors in between for a total of 4 colors:

```ts
{
  type: 'range',
  steps: 4,
  minColor: 'red',
  maxColor: 'blue',
}
```

## Type declaration

### `maxColor`

**maxColor**?: `string`

End color of the range

***

### `maxValue`

**maxValue**?: `number`

Maximum value explicitly set to override the maximum value of the data

***

### `midValue`

**midValue**?: `number`

Middle value explicitly set to override the middle value of the data

***

### `minColor`

**minColor**?: `string`

Start color of the range

***

### `minValue`

**minValue**?: `number`

Minimum value explicitly set to override the minimum value of the data

***

### `steps`

**steps**?: `number`

Distinct number of colors in the range

***

### `type`

**type**: `"range"`

Color options type

# Type alias ScatterChartType

> **ScatterChartType**: `"scatter"`

Scatter chart types

# Type alias ScatterDataPoint

> **ScatterDataPoint**: `object`

Data point in a Scatter chart.

## Type declaration

### `breakByColor`

**breakByColor**?: `string`

Value of the break by color

***

### `breakByPoint`

**breakByPoint**?: `string`

Value of the break by point

***

tter chart.

## Type declaration

### `breakByColor`

**breakByColor**?: `string`

Value of the break by color

***

### `breakByPoint`

**breakByPoint**?: `string`

Value of the break by point

***

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.breakByColor`
>
> **breakByColor**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `breakByColor` data options
>
> #### `entries.breakByPoint`
>
> **breakByPoint**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `breakByPoint` data options
>
> #### `entries.size`
>
> **size**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `size` data options
>
> #### `entries.x`
>
> **x**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `x` data options
>
> #### `entries.y`
>
> **y**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `y` data options
>
>

***

### `size`

**size**?: `number`

Size of the data point

***

### `x`

**x**?: `number` \| `string`

Value of the x axis

***

### `y`

**y**?: `number` \| `string`

Value of the y axis

# Type alias ScatterMarkerSize

> **ScatterMarkerSize**: `object`

## Type declaration

*?: `number` \| `string`

Value of the x axis

***

### `y`

**y**?: `number` \| `string`

Value of the y axis

# Type alias ScatterMarkerSize

> **ScatterMarkerSize**: `object`

## Type declaration

### `scatterBubbleMaxSize`

**scatterBubbleMaxSize**: `number`

***

### `scatterBubbleMinSize`

**scatterBubbleMinSize**: `number`

***

### `scatterDefaultSize`

**scatterDefaultSize**: `number`

# Type alias ScattermapChartType

> **ScattermapChartType**: `"scattermap"`

Scattermap chart types

# Type alias ScattermapLocationLevel

> **ScattermapLocationLevel**: `"auto"` \| `"city"` \| `"country"` \| `"state"`

Geographic location level for Scattermap chart.
This type can have one of the following values:
- 'auto': Automatically determines the appropriate location level.
- 'country': Represents the country level in the geographical hierarchy.
- 'state': Represents the state or province level in the geographical hierarchy.
- 'city': Represents the city level in the geographical hierarchy.

# Type alias ScattermapMarkers

> **ScattermapMarkers**: `object`

Markers style configuration of Scattermap chart

## Type declaration

### `fill`

**fill**?: `"filled"` \| `"filled-light"` \| `"hollow"` \| `"hollow-bold"`

Specifies the fill style of the markers

***

ers style configuration of Scattermap chart

## Type declaration

### `fill`

**fill**?: `"filled"` \| `"filled-light"` \| `"hollow"` \| `"hollow-bold"`

Specifies the fill style of the markers

***

### `size`

**size**?: `object`

Specifies the size configuration for the markers

> #### `size.defaultSize`
>
> **defaultSize**?: `number`
>
> The default size of the markers
>
> #### `size.maxSize`
>
> **maxSize**?: `number`
>
> The maximum size of the markers when using a "size" data field
>
> #### `size.minSize`
>
> **minSize**?: `number`
>
> The minimum size of the markers when using a "size" data field
>
>

# Type alias SeriesChartType

> **SeriesChartType**: `"area"` \| `"arearange"` \| `"areaspline"` \| `"auto"` \| `"bar"` \| `"column"` \| `"line"` \| `"scatter"` \| `"spline"`

Series chart type, which is used with [StyledMeasureColumn](../interfaces/interface.StyledMeasureColumn.md) to customize
series in a mixed chart.

`"column"` \| `"line"` \| `"scatter"` \| `"spline"`

Series chart type, which is used with [StyledMeasureColumn](../interfaces/interface.StyledMeasureColumn.md) to customize
series in a mixed chart.

# Type alias SeriesLabels

> **SeriesLabels**: [`SeriesLabelsBase`](../../sdk-ui/type-aliases/type-alias.SeriesLabelsBase.md) & [`SeriesLabelsAligning`](../../sdk-ui/type-aliases/type-alias.SeriesLabelsAligning.md) & \{
  `showPercentage`: `boolean`;
  `showPercentDecimals`: `boolean`;
  `showValue`: `boolean`;
 }

Options that define series labels - titles/names identifying data series in a chart.

> ## `SeriesLabels.showPercentage`
>
> **showPercentage**?: `boolean`
>
> Boolean flag that defines if percentage should be shown in series labels
> (only applicable for subtypes that support percentage, like "stacked100")
>
> ## `SeriesLabels.showPercentDecimals`
>
> **showPercentDecimals**?: `boolean`
>
> Boolean flag that defines if percentage should be shown with decimals
> (will work only if `showPercentage` is `true`)
>
> ## `SeriesLabels.showValue`
>
> **showValue**?: `boolean`
>
> Boolean flag that defines if value should be shown in series labels
> (if not specified, default is determined by chart type)
>
>

# Type alias SortDirection

> **SortDirection**: `"sortAsc"` \| `"sortDesc"` \| `"sortNone"`

Sorting direction, either in Ascending order, Descending order, or None

s determined by chart type)
>
>

# Type alias SortDirection

> **SortDirection**: `"sortAsc"` \| `"sortDesc"` \| `"sortNone"`

Sorting direction, either in Ascending order, Descending order, or None

# Type alias StackableSubtype

> **StackableSubtype**: `"bar/classic"` \| `"bar/stacked"` \| `"bar/stacked100"` \| `"column/classic"` \| `"column/stackedcolumn"` \| `"column/stackedcolumn100"`

Property of [StackableSubtype](type-alias.StackableSubtype.md)

Subtype of BarChart

 **Values**
- `bar/classic` - y axis values displayed vertically.
- `bar/stacked` - y axis values are stacked next to each other and do not overlap.
- `bar/stacked100` - y axis values are stacked next to each other but do not overlap and combined and stretched to represent 100%.
- `column/classic` - columns are displayed side by side.
- `column/stackedcolumn` - columns are stacked on top of each other and do not overlap.
- `column/stackedcolumn100` - columns are stacked on top of each other but do not overlap and combined and stretched to represent 100%.

# Type alias TableType

> **TableType**: `"table"`

Table chart types

# Type alias TabularWidgetType

> **TabularWidgetType**: `"pivot"` \| `"pivot2"` \| `"tablewidget"` \| `"tablewidgetagg"`

The type of a widget on a dashboard that is a variant of tabular widget.

# Type alias ThemeOid

> **ThemeOid**: `string`

Identifier of a theme as defined in the Sisense instance.

tablewidgetagg"`

The type of a widget on a dashboard that is a variant of tabular widget.

# Type alias ThemeOid

> **ThemeOid**: `string`

Identifier of a theme as defined in the Sisense instance.

# Type alias TranslationConfig

> **TranslationConfig**: `object`

Translation Configuration

## Type declaration

### `customTranslations`

**customTranslations**?: ([`CustomTranslationObject`](../../sdk-ui/type-aliases/type-alias.CustomTranslationObject.md) \| [`CustomTranslationObject`](../../sdk-ui/type-aliases/type-alias.CustomTranslationObject.md)[])[]

Additional translation resources to be loaded.

You can find the list of available translation keys in the translation folder of every package.

Translation keys that are not provided will default to the English translation.
If translation is provided for a package other than sdk-ui, please specify the namespace property.

Important: Do not translate parts in {{}} - these are placeholders for dynamic values and will be matched using provided variable names.

#### Example

```ts
customTranslations: [
  {
    language: 'fr',
    resources: {
      errors: {
       invalidFilterType: 'Type de filtre invalide',
      },
    },
  },
  {
    language: 'es',
    namespace: 'sdkData'
    resources: {
      errors: {
        measure: {
          unsupportedType: 'Tipo de medida no compatible',
        },
      },
    },
  },
]
```

***

### `language`

**language**?: `string`

Language code to be used for translations.

measure: {
          unsupportedType: 'Tipo de medida no compatible',
        },
      },
    },
  },
]
```

***

### `language`

**language**?: `string`

Language code to be used for translations.

# Type alias UniformDataColorOptions

> **UniformDataColorOptions**: `object`

Uniform color options for data similar to the Single Color option in the Sisense UI.

## Example

An example of specifying red as a uniform color for all data values.

```ts
{
  type: 'uniform',
  color: 'red',
}
```

## Type declaration

### `color`

**color**: `string`

Color name, e.g., `red`, or a hexadecimal value, e.g., `#ff0000`.

***

### `type`

**type**: `"uniform"`

Color options type

# Type alias UseFetchOptions

> **UseFetchOptions**: `object`

The options for the `useFetch` composable function.

## Type declaration

### `enabled`

**enabled**?: `boolean`

A boolean indicating whether the fetch operation is enabled.

***

### `requestConfig`

**requestConfig**?: [`RequestConfig`](../../sdk-ui/type-aliases/type-alias.RequestConfig.md)

The request configuration object.

# Type alias ValueToColorMap

> **ValueToColorMap**: `object`

Mapping of each of the chart value series to colors.

## Index signature

 \[`value`: `string`\]: `string`

# Type alias WidgetDataOptions

> **WidgetDataOptions**: [`ChartDataOptions`](type-alias.ChartDataOptions.md) \| `EmptyObject` \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Widget data options.

s

> **WidgetDataOptions**: [`ChartDataOptions`](type-alias.ChartDataOptions.md) \| `EmptyObject` \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Widget data options.

# Type alias WidgetId

> **WidgetId**: `string`

Widget ID

# Type alias WidgetProps

> **WidgetProps**: `SoftUnion`\< [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`ChartWidgetProps`](../interfaces/interface.ChartWidgetProps.md), `"chart"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`CustomWidgetProps`](../interfaces/interface.CustomWidgetProps.md), `"custom"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`PivotTableWidgetProps`](../interfaces/interface.PivotTableWidgetProps.md), `"pivot"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`TextWidgetProps`](../interfaces/interface.TextWidgetProps.md), `"text"` \> \>

Props of the [`Widget`](../dashboards/class.Widget.md) component.

idgetProps`](type-alias.WithCommonWidgetProps.md)\< [`TextWidgetProps`](../interfaces/interface.TextWidgetProps.md), `"text"` \> \>

Props of the [`Widget`](../dashboards/class.Widget.md) component.

# Type alias WidgetStyleOptions

> **WidgetStyleOptions**: [`ChartStyleOptions`](type-alias.ChartStyleOptions.md) \| [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md) \| [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md) \| [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md) & [`WidgetContainerStyleOptions`](../../sdk-ui/interfaces/interface.WidgetContainerStyleOptions.md)

Complete set of configuration options that define functional style of the various elements of the charts as well as the look and feel of widget itself and widget header.

# Type alias WidgetType

> **WidgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Type of the widget component.

# Type alias WidgetsOptions

> **WidgetsOptions**: `Record`\< [`WidgetId`](type-alias.WidgetId.md), [`SpecificWidgetOptions`](../../sdk-ui/type-aliases/type-alias.SpecificWidgetOptions.md) \>

Options for widgets in a dashboard

For example, how common filters defined at the dashboard level should be applied to widgets.

`](../../sdk-ui/type-aliases/type-alias.SpecificWidgetOptions.md) \>

Options for widgets in a dashboard

For example, how common filters defined at the dashboard level should be applied to widgets.

# Type alias WidgetsPanelLayout

> **WidgetsPanelLayout**: [`WidgetsPanelColumnLayout`](../interfaces/interface.WidgetsPanelColumnLayout.md)

Layout of dashboard widgets panel, which is a union of different layout algorithms

# Type alias WithCommonWidgetProps`<BaseWidget, Type>`

> **WithCommonWidgetProps**: <`BaseWidget`, `Type`> `BaseWidget` & \{
  `id`: `string`;
  `widgetType`: `Type`;
 }

A utility type that combines widget-specific properties (`BaseWidget`)
with a common widget props including corresponding widget type (`Type`).

> ## `WithCommonWidgetProps.id`
>
> **`readonly`** **id**: `string`
>
> Unique identifier of the widget within the container component (dashboard)
>
> ## `WithCommonWidgetProps.widgetType`
>
> **widgetType**: `Type`
>
> Widget type
>
>

## Type parameters

| Parameter |
| :------ |
| `BaseWidget` |
| `Type` *extends* [`WidgetType`](type-alias.WidgetType.md) |

# Type alias X2Title

> **X2Title**: `object`

## Type declaration

### `enabled`

**enabled**: `boolean`

***

### `text`

**text**?: `string`

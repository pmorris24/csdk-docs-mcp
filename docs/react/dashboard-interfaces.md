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

mOptions**?: `Record`\< `string`, `any` \>

Custom widget options. Only present for custom widgets.

Contains widget-specific configuration that doesn't fit into standard style or data options.

***

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

highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Widget highlights.

***

### oid

> **`readonly`** **oid**: `string`

Unique identifier of the widget.

***

### styleOptions

> **styleOptions**: `ChartStyleOptions | TextWidgetStyleOptions | CustomWidgetStyleOptions` & [`WidgetContainerStyleOptions`](../interfaces/interface.WidgetContainerStyleOptions.md)

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

# Filter Tiles

React filter tile components

- [CriteriaFilterTile](function.CriteriaFilterTile.md)
- [DateRangeFilterTile](function.DateRangeFilterTile.md)
- [FiltersPanel](function.FiltersPanel.md)
- [FilterTile](function.FilterTile.md) - Facade component rendering a filter tile based on filter type
- [MemberFilterTile](function.MemberFilterTile.md)
- [RelativeDateFilterTile](function.RelativeDateFilterTile.md)
- [useGetFilterMembers](function.useGetFilterMembers.md) - Hook to fetch members of a filter

rFilterTile](function.MemberFilterTile.md)
- [RelativeDateFilterTile](function.RelativeDateFilterTile.md)
- [useGetFilterMembers](function.useGetFilterMembers.md) - Hook to fetch members of a filter

# Function CriteriaFilterTile

> **CriteriaFilterTile**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

UI component that allows the user to filter numeric or text attributes according to
a number of built-in operations defined in the numeric filter, text filter, or ranking filter.

The arrangement prop determines whether the filter is rendered vertically or horizontally, with the latter intended for toolbar use and omitting title, enable/disable, and collapse/expand functionality.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`CriteriaFilterTileProps`](../interfaces/interface.CriteriaFilterTileProps.md) | Criteria filter tile props |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Criteria filter tile component

## Example

```ts
const initialRevenueFilter = filterFactory.greaterThanOrEqual(DM.Commerce.Revenue, 10000);
const [revenueFilter, setRevenueFilter] = useState<Filter | null>(initialRevenueFilter);

return (
  <CriteriaFilterTile
    title={'Revenue'}
    filter={revenueFilter}
    onUpdate={setRevenueFilter}
  />
);
```

<img src="../../../img/criteria-filter-tile-example-1.png" width="300px" />

turn (
  <CriteriaFilterTile
    title={'Revenue'}
    filter={revenueFilter}
    onUpdate={setRevenueFilter}
  />
);
```

<img src="../../../img/criteria-filter-tile-example-1.png" width="300px" />

# Function DateRangeFilterTile

> **DateRangeFilterTile**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Date Range Filter Tile component for filtering data by date range.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`DateRangeFilterTileProps`](../interfaces/interface.DateRangeFilterTileProps.md) | Date Range Filter Tile Props |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Date Range Filter Tile component

## Example

React example of configuring the date min max values and handling onChange event.
```ts
const [dateRangeFilter, setDateRangeFilter] = useState<Filter>(
  filterFactory.dateRange(DM.Commerce.Date.Years),
);

return (
  <DateRangeFilterTile
    title="Date Range"
    attribute={DM.Commerce.Date.Years}
    filter={dateRangeFilter}
    onChange={(filter: Filter) => {
      setDateRangeFilter(filter);
    }}
  />
);
```

<img src="../../../img/date-filter-example-1.png" width="800px" />

# Function FilterTile

> **FilterTile**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Facade component that renders a filter tile based on filter type

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`FilterTileProps`](../interfaces/interface.FilterTileProps.md) |

ade component that renders a filter tile based on filter type

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`FilterTileProps`](../interfaces/interface.FilterTileProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

# Function FiltersPanel

> **FiltersPanel**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Filters panel component that renders a list of filter tiles

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`FiltersPanelProps`](../interfaces/interface.FiltersPanelProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

## Example

Here's how to render a filters panel with a set of filters.
```ts
import { useState } from 'react';
import { FiltersPanel } from '@sisense/sdk-ui';
import { filterFactory, type Filter, type FilterRelations } from '@sisense/sdk-data';
import * as DM from './sample-ecommerce-model';

export function Example() {
  const [filters, setFilters] = useState<Filter[]>([
    filterFactory.members(DM.Commerce.Gender, ['Male', 'Female']),
    filterFactory.members(DM.Commerce.AgeRange, ['0-18', '19-24']),
  ]);

  const handleFiltersChange = (updatedFilters: Filter[] | FilterRelations) => {
    console.log('Filters changed:', updatedFilters);
  };

  return (
    <FiltersPanel
      filters={filters}
      defaultDataSource={DM.DataSource}
      onFiltersChange={handleFiltersChange}
    />
  );
}
```

('Filters changed:', updatedFilters);
  };

  return (
    <FiltersPanel
      filters={filters}
      defaultDataSource={DM.DataSource}
      onFiltersChange={handleFiltersChange}
    />
  );
}
```

# Function MemberFilterTile

> **MemberFilterTile**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

UI component that allows the user to select members to include/exclude in a
filter. A query is executed against the provided data source to fetch
all members that are selectable.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`MemberFilterTileProps`](../interfaces/interface.MemberFilterTileProps.md) | Member filter tile props |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Member filter tile component

## Example

Below is an example for filtering countries in the `Country` dimension of the `Sample ECommerce` data model.
```ts
const [countryFilter, setCountryFilter] = useState<Filter | null>(null);

return (
<MemberFilterTile
  title={'Country'}
  attribute={DM.Country.Country}
  filter={countryFilter}
  onChange={setCountryFilter}
/>
);
```

<img src="../../../img/member-filter-tile-example-1.png" width="300px" />

rTile
  title={'Country'}
  attribute={DM.Country.Country}
  filter={countryFilter}
  onChange={setCountryFilter}
/>
);
```

<img src="../../../img/member-filter-tile-example-1.png" width="300px" />

# Function RelativeDateFilterTile

> **RelativeDateFilterTile**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

UI component that allows the user to filter date attributes according to
a number of built-in operations defined in the relative date filter.
Useful for filtering data by relative date ranges, such as "last 7 days" or "next 30 days from Date".

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`RelativeDateFilterTileProps`](../interfaces/interface.RelativeDateFilterTileProps.md) | Relative date filter tile props |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Relative date filter tile component

# Function useGetFilterMembers

> **useGetFilterMembers**(...`args`): [`GetFilterMembersResult`](../type-aliases/type-alias.GetFilterMembersResult.md)

Hook that fetches members of the provided filter

Those members can be used to display a list of members in a third-party filter component such as Material UI Select.

ias.GetFilterMembersResult.md)

Hook that fetches members of the provided filter

Those members can be used to display a list of members in a third-party filter component such as Material UI Select.

## Example

Retrieve selected members from a Filter on Country of the Sample ECommerce data model.

```ts
const {
  isLoading,
  data: { selectedMembers, allMembers, excludeMembers, enableMultiSelection },
} = useGetFilterMembers({ filter: filterFactory.members(DM.Country.Country, ['United States', 'Canada']) });

if (isLoading) {
  return <div>Loading...</div>;
}
console.log('selectedMembers', selectedMembers);
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetFilterMembersParams`](../interfaces/interface.GetFilterMembersParams.md)] |

## Returns

[`GetFilterMembersResult`](../type-aliases/type-alias.GetFilterMembersResult.md)

Results that contains the status of the filter query execution, the result data, or the error if any occurred


## Drilldown

# Drilldown

React components for creating drilldown experiences

- [ContextMenu](function.ContextMenu.md)
- [DrilldownBreadcrumbs](function.DrilldownBreadcrumbs.md)
- [DrilldownWidget](function.DrilldownWidget.md)

# Function ContextMenu

> **ContextMenu**(`__namedParameters`): `Element`

Context menu

## Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md) |

## Returns

`Element`

`Element`

Context menu

## Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md) |

## Returns

`Element`

# Function DrilldownBreadcrumbs

> **DrilldownBreadcrumbs**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Drilldown breadcrumbs component

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DrilldownBreadcrumbsProps`](../interfaces/interface.DrilldownBreadcrumbsProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

| Parameter | Type |
| :------ | :------ |
| `props` | [`DrilldownBreadcrumbsProps`](../interfaces/interface.DrilldownBreadcrumbsProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

# Function DrilldownWidget

> **DrilldownWidget**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component designed to add drilldown functionality to any type of chart.

This component acts as a wrapper around a given chart component, enhancing it with drilldown capabilities.

The widget offers several features including:
- A context menu for initiating drilldown actions (can be provided as a custom component)
- Breadcrumbs that not only allow for drilldown selection slicing but also
provide an option to clear the selection (can be provided as a custom component)
- Filters specifically created for drilldown operation
- An option to navigate to the next drilldown dimension

When an `initialDimension` is specified, the `drilldownDimension` will automatically inherit its
value, even before any points on the chart are selected.
This allows for complete control over the chart's dimensions to be handed over to the `DrilldownWidget`.

sion` will automatically inherit its
value, even before any points on the chart are selected.
This allows for complete control over the chart's dimensions to be handed over to the `DrilldownWidget`.

## Example

A column chart displaying total revenue by category from the Sample ECommerce data model. The chart can be drilled down by age range, gender, and condition.

<iframe
 src='https://csdk-playground.sisense.com/?example=use-cases%2Fdrilldown&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional drilldown examples:

- [Detached Breadcrumbs](https://www.sisense.com/developers/playground/?example=use-cases%2Fdrilldown-detached-breadcrumbs)

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`DrilldownWidgetProps`](../interfaces/interface.DrilldownWidgetProps.md) | DrilldownWidget properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

DrilldownWidget wrapper component


## Queries

# Queries

React components and hooks for working with queries

- [ExecuteQuery](function.ExecuteQuery.md)
- [useExecuteCsvQuery](function.useExecuteCsvQuery.md)
- [useExecuteCustomWidgetQuery](function.useExecuteCustomWidgetQuery.md)
- [useExecutePivotQuery](function.useExecutePivotQuery.md)
- [useExecuteQuery](function.useExecuteQuery.md)
- [useQueryCache](function.useQueryCache.md) <Badge type="alpha" text="Alpha" />

Query.md)
- [useExecutePivotQuery](function.useExecutePivotQuery.md)
- [useExecuteQuery](function.useExecuteQuery.md)
- [useQueryCache](function.useQueryCache.md) <Badge type="alpha" text="Alpha" />

# Function ExecuteQuery

> **ExecuteQuery**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Executes a query and renders a function as child component. The child
component is passed the state of the query as defined in [QueryState](../type-aliases/type-alias.QueryState.md).

This component takes the Children Prop Pattern and
offers an alternative approach to the [useExecuteQuery](function.useExecuteQuery.md) hook.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ExecuteQueryProps`](../interfaces/interface.ExecuteQueryProps.md) | ExecuteQuery properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ExecuteQuery component

:------ |
| `props` | [`ExecuteQueryProps`](../interfaces/interface.ExecuteQueryProps.md) | ExecuteQuery properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ExecuteQuery component

## Example

Example of using the component to query the `Sample ECommerce` data source:
```ts
<ExecuteQuery
  dataSource={DM.DataSource}
  dimensions={[DM.Commerce.AgeRange]}
  measures={[measureFactory.sum(DM.Commerce.Revenue)]}
  filters={[filterFactory.greaterThan(DM.Commerce.Revenue, 1000)]}
>
{
  ({data, isLoading, isError}) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error</div>;
    }
    if (data) {
      console.log(data);
      return <div>{`Total Rows: ${data.rows.length}`}</div>;
    }
    return null;
  }
}
</ExecuteQuery>
```

# Function useExecuteCsvQuery

> **useExecuteCsvQuery**(...`args`): [`CsvQueryState`](../type-aliases/type-alias.CsvQueryState.md)

React hook that executes a CSV data query.
Similar to [useExecuteQuery](function.useExecuteQuery.md), but returns the data in CSV format as text or as a stream.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecuteCsvQueryParams`](../interfaces/interface.ExecuteCsvQueryParams.md)] |

## Returns

[`CsvQueryState`](../type-aliases/type-alias.CsvQueryState.md)

Query state that contains the status of the query execution, the result data, or the error if any occurred

yParams.md)] |

## Returns

[`CsvQueryState`](../type-aliases/type-alias.CsvQueryState.md)

Query state that contains the status of the query execution, the result data, or the error if any occurred

## Example

An example of using the hook to obtain data in a CSV string:
```ts
const { data, isLoading, isError } = useExecuteCsvQuery({
  dataSource: DM.DataSource,
  dimensions: [DM.Commerce.AgeRange],
  measures: [measureFactory.sum(DM.Commerce.Revenue)],
  filters: [filterFactory.greaterThan(DM.Commerce.Revenue, 1000)],
});
if (isLoading) {
  return <div>Loading...</div>;
}
if (isError) {
  return <div>Error</div>;
}
if (data) {
  return <div>{`CSV as string: ${data}`}</div>;
}
return null;
```
An example of using the hook to obtain data in CSV format as a stream, translating headers, and triggering file download:
```ts
const { data, isLoading, isError } = useExecuteCsvQuery({
  dataSource: DM.DataSource,
  dimensions: [DM.Commerce.AgeRange],
  measures: [measureFactory.sum(DM.Commerce.Revenue)],
  filters: [filterFactory.greaterThan(DM.Commerce.Revenue, 1000)],
  config: { asDataStream: true },
});
if (isLoading) {
  return <div>Loading...</div>;
}
if (isError) {
  return <div>Error</div>;
}
if (data) {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.result) {
      const text = reader.result as string;
      const lines = text.split('\n');
      // Update headers
      if (lines.length > 0) {
        lines[0] = translateHeaders(lines[0]); // replace with own implementation
      }
      // Join modified lines back to a text
      const modifiedCsv = lines.join('\n');
      // Create a new Blob with modified content
      const modifiedBlob = new Blob([modifiedCsv], { type: 'text/csv' });
      // Trigger file download
      const blobURL = window.URL.createObjectURL(modifiedBlob);
      const a = document.createElement('a');
      a.href = blobURL;
      const fileName = 'data_translated_headers'
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobURL);
      document.body.removeChild(a);
    }
  };
  reader.readAsText(data as Blob);
}
return null;
```

;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobURL);
      document.body.removeChild(a);
    }
  };
  reader.readAsText(data as Blob);
}
return null;
```

# Function useExecuteCustomWidgetQuery

> **useExecuteCustomWidgetQuery**(...`args`): [`QueryState`](../type-aliases/type-alias.QueryState.md)

React hook that takes a custom widget component's props and executes a data query.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecuteCustomWidgetQueryParams`](../interfaces/interface.ExecuteCustomWidgetQueryParams.md)] |

## Returns

[`QueryState`](../type-aliases/type-alias.QueryState.md)

# Function useExecutePivotQuery

> **useExecutePivotQuery**(...`args`): [`PivotQueryState`](../type-aliases/type-alias.PivotQueryState.md)

React hook that executes a data query for a pivot table.
This approach is similar to React Query's `useQuery` hook.

## Example

Execute a pivot query on the Sample ECommerce data model and display the results in a table.

<iframe
 src='https://csdk-playground.sisense.com/?example=queries%2Fuse-execute-pivot-query&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecutePivotQueryParams`](../interfaces/interface.ExecutePivotQueryParams.md)] |

=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecutePivotQueryParams`](../interfaces/interface.ExecutePivotQueryParams.md)] |

## Returns

[`PivotQueryState`](../type-aliases/type-alias.PivotQueryState.md)

Query state that contains the status of the query execution, the result data, or the error if any occurred

# Function useExecuteQuery

> **useExecuteQuery**(...`args`): [`ExecuteQueryResult`](../type-aliases/type-alias.ExecuteQueryResult.md)

React hook that executes a data query.

This approach, which offers an alternative to the [ExecuteQuery](function.ExecuteQuery.md) component, is similar to React Query's `useQuery` hook.

## Example

Execute a query to retrieve revenue per country per year from the Sample ECommerce data model. Then display the data in a table and column chart.

<iframe
 src='https://csdk-playground.sisense.com/?example=queries%2Fuse-execute-query-sorting&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional `useExecuteQuery()` examples:

- [Query with Sorting](https://www.sisense.com/developers/playground/?example=queries%2Fuse-execute-query-sorting)
- [Take Control of Your Data Visualizations]( https://www.sisense.com/blog/take-control-of-your-data-visualizations/) blog post with examples of using the hook to fetch data to display in third-party charts.

ontrol of Your Data Visualizations]( https://www.sisense.com/blog/take-control-of-your-data-visualizations/) blog post with examples of using the hook to fetch data to display in third-party charts.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecuteQueryParams`](../interfaces/interface.ExecuteQueryParams.md)] |

## Returns

[`ExecuteQueryResult`](../type-aliases/type-alias.ExecuteQueryResult.md)

Query state that contains the status of the query execution, the result data, or the error if any occurred

# Function useQueryCache <Badge type="alpha" text="Alpha" />

> **useQueryCache**(): \{
  `clear`: () => `void`;
 } \| `undefined`

React hook that returns the QueryCacheClient module instance to control query cache.

How to enable query cache see in [Query Caching guide](/guides/sdk/guides/client-query-caching.html)

## Returns

\{
  `clear`: () => `void`;
 } \| `undefined`

QueryCacheClient instance


## Data Grids

# Data Grids

React components for data grids

- [PivotTable](function.PivotTable.md)
- [Table](function.Table.md)

# Function PivotTable

> **PivotTable**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Pivot table with pagination.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PivotTableProps`](../interfaces/interface.PivotTableProps.md) | Pivot Table properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Pivot Table component

---- | :------ |
| `props` | [`PivotTableProps`](../interfaces/interface.PivotTableProps.md) | Pivot Table properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Pivot Table component

## Example

(1) Example of PivotTable from the `Sample ECommerce` data model:

```ts
<PivotTable
  dataSet={DM.DataSource}
  dataOptions={{
    rows: [
      { column: DM.Category.Category, includeSubTotals: true },
      { column: DM.Commerce.AgeRange, includeSubTotals: true },
      DM.Commerce.Condition,
    ],
    columns: [{ column: DM.Commerce.Gender, includeSubTotals: true }],
    values: [
      {
        column: measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
        dataBars: true,
        totalsCalculation: 'sum',
      },
      {
        column: measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue'),
        totalsCalculation: 'sum',
      },
    ],
    grandTotals: { rows: true, columns: true },
  }}
  filters={[filterFactory.members(DM.Commerce.Gender, ['Female', 'Male'])]}
  styleOptions={{ width: 1000, height: 600, rowsPerPage: 50 }}
/>
```
<img src="../../../img/pivot-example-1.png" width="800px" />

(2) Example of PivotTable with the predefined sorting configuration:
- Sort "Condition" row by its values in Ascending order. This is equivalent to users clicking on the "Condition" row heading and hit Sort Ascending (A-Z)
- Sort "Category" row by "Total Cost" values under the "columns" values of "Female" (for Gender) and "0-18" (for AgeRange) in Descending order.
This is equivalent to users clicking on the "Total Cost" value heading under "Female" (for Gender) and "0-18" (for AgeRange) and sort "Category (Subtotals)" in Descending (9-1)

```ts
<PivotTable
  dataSet={DM.DataSource}
  dataOptions={{
    rows: [
      {
        column: DM.Category.Category,
        includeSubTotals: true,
        sortType: {
          direction: 'sortDesc',
          by: {
            valuesIndex: 0,
            columnsMembersPath: ['Female', '0-18']
          }
        }
      },
      {
        column: DM.Commerce.Condition,
        sortType: {
          direction: 'sortAsc'
        }
      },
    ],
    columns: [
      DM.Commerce.Gender,
      DM.Commerce.AgeRange
    ],
    values: [
      measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
      measureFactory.sum(DM.Commerce.Quantity, 'Total Quantity'),
    ],
  }}
/>
```

<img src="../../../img/pivot-sorting-example-1.png" width="800px" />

(3) Example of PivotTable with auto content width enabled:
When [`isAutoContentWidth: true`](../interfaces/interface.PivotTableStyleOptions.md#isautocontentwidth) is set, all vertical columns will be resized to fit within the component width without requiring horizontal scroll.

```ts
<PivotTable
  dataSet={DM.DataSource}
  dataOptions={{
    rows: [DM.Category.Category],
    columns: [DM.Commerce.Gender],
    values: [
      measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
      measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue'),
    ],
  }}
  styleOptions={{
    width: 800,
    height: 600,
    isAutoContentWidth: true,
    rowsPerPage: 50,
  }}
/>
```
<img src="../../../img/pivot-auto-content-width-true.png" width="800px" />

],
  }}
  styleOptions={{
    width: 800,
    height: 600,
    isAutoContentWidth: true,
    rowsPerPage: 50,
  }}
/>
```
<img src="../../../img/pivot-auto-content-width-true.png" width="800px" />

## Remarks

Configuration options can also be applied within the scope of a `<SisenseContextProvider>` to control the default behavior of PivotTable, by changing available settings within `appConfig.chartConfig.tabular.*`

Follow the link to [AppConfig](../type-aliases/type-alias.AppConfig.md) for more details on the available settings.

# Function Table

> **Table**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Table with aggregation and pagination.

## Example

Table displaying year, condition, and total revenue from the Sample ECommerce data model.

<iframe
 src='https://csdk-playground.sisense.com/?example=tables%2Faggregated-table&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`TableProps`](../interfaces/interface.TableProps.md) | Table properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Table component


## Generative Ai

:------ | :------ |
| `props` | [`TableProps`](../interfaces/interface.TableProps.md) | Table properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Table component


## Generative Ai

# Generative AI

React components and hooks for working with Generative AI features provided by Sisense Fusion
::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

- [AiContextProvider](function.AiContextProvider.md)
- [Chatbot](function.Chatbot.md)
- [GetNlgInsights](function.GetNlgInsights.md)
- [useGetNlgInsights](function.useGetNlgInsights.md)
- [useGetNlqResult](function.useGetNlqResult.md) <Badge type="beta" text="Beta" />
- [useGetQueryRecommendations](function.useGetQueryRecommendations.md) <Badge type="beta" text="Beta" />

# Function AiContextProvider

> **AiContextProvider**(`props`): `Element`

React component that wraps all generative AI components and hooks.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AiContextProviderProps`](../interfaces/interface.AiContextProviderProps.md) | AI Context Provider Props |

## Returns

`Element`

An AI Context Provider Component

| :------ | :------ |
| `props` | [`AiContextProviderProps`](../interfaces/interface.AiContextProviderProps.md) | AI Context Provider Props |

## Returns

`Element`

An AI Context Provider Component

## Example

```ts
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { AiContextProvider, Chatbot } from '@sisense/sdk-ui/ai';

function App() {
  return (
    <SisenseContextProvider {...sisenseContextProps}>
      <AiContextProvider>
        <Chatbot />
      </AiContextProvider>
    </SisenseContextProvider>
  );
}
```

# Function Chatbot

> **Chatbot**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component that displays a chatbot with data topic selection.
You can optionally configure size, config e.g. data topics, recommendations, UI text.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ChatbotProps`](../interfaces/interface.ChatbotProps.md) | [ChatbotProps](../interfaces/interface.ChatbotProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

| :------ |
| `props` | [`ChatbotProps`](../interfaces/interface.ChatbotProps.md) | [ChatbotProps](../interfaces/interface.ChatbotProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

## Example

```ts
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { AiContextProvider, Chatbot } from '@sisense/sdk-ui/ai';

function App() {
  return (
    <SisenseContextProvider {...sisenseContextProps}>
      <AiContextProvider>
        <Chatbot
           width={1000}
           height={800}
           config={{
              enableFollowupQuestions: true,
              numOfRecommendations: 2,
              dataTopicsList: [
                 'Sample ECommerce',
                  'Sample Healthcare'
              ],
              inputPromptText: 'What do you want to explore?',
              welcomeText: 'Welcome to Acme AI, powered by Sisense',
              suggestionsWelcomeText: 'Would you like to know:',
           }}
        />
      </AiContextProvider>
    </SisenseContextProvider>
  );
}
```

# Function GetNlgInsights

> **GetNlgInsights**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component that fetches and displays a collapsible analysis of the provided query using natural language generation (NLG).
Specifying a query is similar to providing parameters to a [useExecuteQuery](../queries/function.useExecuteQuery.md) hook, using dimensions, measures, and filters.

natural language generation (NLG).
Specifying a query is similar to providing parameters to a [useExecuteQuery](../queries/function.useExecuteQuery.md) hook, using dimensions, measures, and filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`GetNlgInsightsProps`](../interfaces/interface.GetNlgInsightsProps.md) | [GetNlgInsightsProps](../interfaces/interface.GetNlgInsightsProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Collapsible container wrapping a text summary

## Example

```ts
<GetNlgInsights
  dataSource="Sample ECommerce"
  dimensions={[DM.Commerce.Date.Years]}
  measures={[measureFactory.sum(DM.Commerce.Revenue)]}
/>
```

# Function useGetNlgInsights

> **useGetNlgInsights**(...`args`): [`UseGetNlgInsightsState`](../interfaces/interface.UseGetNlgInsightsState.md)

React hook that fetches an analysis of the provided query using natural language generation (NLG).
Specifying a query is similar to providing parameters to a [useExecuteQuery](../queries/function.useExecuteQuery.md) hook, using dimensions, measures, and filters.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`UseGetNlgInsightsParams`](../interfaces/interface.UseGetNlgInsightsParams.md)] |

## Returns

[`UseGetNlgInsightsState`](../interfaces/interface.UseGetNlgInsightsState.md)

Response object containing a text summary

sParams`](../interfaces/interface.UseGetNlgInsightsParams.md)] |

## Returns

[`UseGetNlgInsightsState`](../interfaces/interface.UseGetNlgInsightsState.md)

Response object containing a text summary

## Example

```ts
const { data, isLoading } = useGetNlgInsights({
  dataSource: 'Sample ECommerce',
  dimensions: [DM.Commerce.Date.Years],
  measures: [measureFactory.sum(DM.Commerce.Revenue)],
});

if (isLoading) {
  return <div>Loading...</div>;
}

return <p>{data}</p>;
```

# Function useGetNlqResult <Badge type="beta" text="Beta" />

> **useGetNlqResult**(...`args`): [`UseGetNlqResultState`](../interfaces/interface.UseGetNlqResultState.md)

React hook that enables natural language query (NLQ) against a data model or perspective.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`UseGetNlqResultParams`](../interfaces/interface.UseGetNlqResultParams.md)] |

## Returns

[`UseGetNlqResultState`](../interfaces/interface.UseGetNlqResultState.md)

NLQ load state that contains the status of the execution, the result (data) as WidgetProps

## Example

```ts
const { data, isLoading } = useGetNlqResult({
   dataSource: 'Sample ECommerce',
   query: 'Show me total revenue by age range'
});

if (isLoading) {
  return <div>Loading...</div>;
}

return (
  {
     data &&
     <Widget {...data} />
  }
);
```

dataSource: 'Sample ECommerce',
   query: 'Show me total revenue by age range'
});

if (isLoading) {
  return <div>Loading...</div>;
}

return (
  {
     data &&
     <Widget {...data} />
  }
);
```

# Function useGetQueryRecommendations <Badge type="beta" text="Beta" />

> **useGetQueryRecommendations**(...`args`): [`UseGetQueryRecommendationsState`](../interfaces/interface.UseGetQueryRecommendationsState.md)

React hook that fetches recommended questions for a data model or perspective.

This hook includes the same code that fetches the initial suggested questions in the chatbot.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`UseGetQueryRecommendationsParams`](../interfaces/interface.UseGetQueryRecommendationsParams.md)] |

## Returns

[`UseGetQueryRecommendationsState`](../interfaces/interface.UseGetQueryRecommendationsState.md)

An array of objects, each containing recommended question text and its corresponding `widgetProps`

## Example

```ts
const { data, isLoading } = useGetQueryRecommendations({
  contextTitle: 'Sample ECommerce',
});

if (isLoading) {
  return <div>Loading recommendations</div>;
}

return (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item.nlqPrompt}</li>
    ))}
  </ul>
);
```


## Interfaces

if (isLoading) {
  return <div>Loading recommendations</div>;
}

return (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item.nlqPrompt}</li>
    ))}
  </ul>
);
```


## Interfaces

# Interfaces

TypeScript interfaces for components and hooks listed above

- [AiChatThemeSettings](interface.AiChatThemeSettings.md)
- [AiContextProviderProps](interface.AiContextProviderProps.md)
- [AreaChartProps](interface.AreaChartProps.md)
- [AreamapChartDataOptions](interface.AreamapChartDataOptions.md)
- [AreamapChartProps](interface.AreamapChartProps.md)
- [AreamapStyleOptions](interface.AreamapStyleOptions.md)
- [AreaRangeChartProps](interface.AreaRangeChartProps.md)
- [AreaRangeMeasureColumn](interface.AreaRangeMeasureColumn.md)
- [AreaRangeStyleOptions](interface.AreaRangeStyleOptions.md)
- [AreaStyleOptions](interface.AreaStyleOptions.md)
- [AttributeDataPointEntry](interface.AttributeDataPointEntry.md)
- [BarChartProps](interface.BarChartProps.md)
- [BasicDataPointEntry](interface.BasicDataPointEntry.md)
- [BoxplotChartProps](interface.BoxplotChartProps.md)
- [BoxplotStyleOptions](interface.BoxplotStyleOptions.md)
- [CalendarHeatmapChartDataOptions](interface.CalendarHeatmapChartDataOptions.md)
- [CalendarHeatmapChartProps](interface.CalendarHeatmapChartProps.md)
- [CalendarHeatmapStyleOptions](interface.CalendarHeatmapStyleOptions.md)
- [CartesianChartDataOptions](interface.CartesianChartDataOptions.md)
- [CategoricalChartDataOptions](interface.CategoricalChartDataOptions.md)
- [ChartEventProps](interface.ChartEventProps.md)
- [ChartProps](interface.ChartProps.md)
- [ChartThemeSettings](interface.ChartThemeSettings.md)
- [ChartWidgetProps](interface.ChartWidgetProps.md)
- [ChatbotProps](interface.ChatbotProps.md)
- [ChatConfig](interface.ChatConfig.md)
- [ColumnChartProps](interface.ColumnChartProps.md)
- [ContextMenuProps](interface.ContextMenuProps.md)
- [CriteriaFilterTileProps](interface.CriteriaFilterTileProps.md)
- [CustomWidgetComponentProps](interface.CustomWidgetComponentProps.md)
- [CustomWidgetEventProps](interface.CustomWidgetEventProps.md)
- [CustomWidgetProps](interface.CustomWidgetProps.md)
- [DashboardByIdConfig](interface.DashboardByIdConfig.md)
- [DashboardByIdProps](interface.DashboardByIdProps.md)
- [DashboardConfig](interface.DashboardConfig.md)
- [DashboardFiltersPanelCollapseChangedEvent](interface.DashboardFiltersPanelCollapseChangedEvent.md)
- [DashboardFiltersPanelConfig](interface.DashboardFiltersPanelConfig.md)
- [DashboardFiltersUpdatedEvent](interface.DashboardFiltersUpdatedEvent.md)
- [DashboardLayoutOptions](interface.DashboardLayoutOptions.md)
- [DashboardProps](interface.DashboardProps.md)
- [DashboardWidgetsDeletedEvent](interface.DashboardWidgetsDeletedEvent.md)
- [DashboardWidgetsPanelIsEditingChangedEvent](interface.DashboardWidgetsPanelIsEditingChangedEvent.md)
- [DashboardWidgetsPanelLayoutUpdatedEvent](interface.DashboardWidgetsPanelLayoutUpdatedEvent.md)
- [DataLimits](interface.DataLimits.md)
- [DateRangeFilterTileProps](interface.DateRangeFilterTileProps.md)
- [DrilldownBreadcrumbsProps](interface.DrilldownBreadcrumbsProps.md)
- [DrilldownWidgetProps](interface.DrilldownWidgetProps.md)
- [EditModeConfig](interface.EditModeConfig.md)
- [ExecuteCsvQueryParams](interface.ExecuteCsvQueryParams.md)
- [ExecuteCustomWidgetQueryParams](interface.ExecuteCustomWidgetQueryParams.md)
- [ExecutePivotQueryParams](interface.ExecutePivotQueryParams.md)
- [ExecuteQueryByWidgetIdParams](interface.ExecuteQueryByWidgetIdParams.md)
- [ExecuteQueryByWidgetIdProps](interface.ExecuteQueryByWidgetIdProps.md)
- [ExecuteQueryParams](interface.ExecuteQueryParams.md)
- [ExecuteQueryProps](interface.ExecuteQueryProps.md)
- [FilterMembersErrorState](interface.FilterMembersErrorState.md)
- [FilterMembersLoadingState](interface.FilterMembersLoadingState.md)
- [FilterMembersSuccessState](interface.FilterMembersSuccessState.md)
- [FiltersPanelConfig](interface.FiltersPanelConfig.md)
- [FiltersPanelProps](interface.FiltersPanelProps.md)
- [FilterTileProps](interface.FilterTileProps.md)
- [FontsLoaderSettings](interface.FontsLoaderSettings.md)
- [FunnelChartProps](interface.FunnelChartProps.md)
- [FunnelSeriesLabels](interface.FunnelSeriesLabels.md)
- [FunnelStyleOptions](interface.FunnelStyleOptions.md)
- [GaugeIndicatorStyleOptions](interface.GaugeIndicatorStyleOptions.md)
- [GeneralThemeSettings](interface.GeneralThemeSettings.md)
- [GetDashboardModelOptions](interface.GetDashboardModelOptions.md)
- [GetDashboardModelParams](interface.GetDashboardModelParams.md)
- [GetDashboardModelsOptions](interface.GetDashboardModelsOptions.md)
- [GetDashboardModelsParams](interface.GetDashboardModelsParams.md)
- [GetDataSourceDimensionsParams](interface.GetDataSourceDimensionsParams.md)
- [GetFilterMembersData](interface.GetFilterMembersData.md)
- [GetFilterMembersParams](interface.GetFilterMembersParams.md)
- [GetHierarchyModelsParams](interface.GetHierarchyModelsParams.md)
- [GetNlgInsightsProps](interface.GetNlgInsightsProps.md)
- [GetNlgInsightsRequest](interface.GetNlgInsightsRequest.md)
- [GetNlqResultParams](interface.GetNlqResultParams.md)
- [GetQueryRecommendationsParams](interface.GetQueryRecommendationsParams.md)
- [GetSharedFormulaParams](interface.GetSharedFormulaParams.md)
- [GetWidgetModelParams](interface.GetWidgetModelParams.md)
- [GradientStop](interface.GradientStop.md)
- [Hierarchy](interface.Hierarchy.md)
- [HierarchyModel](interface.HierarchyModel.md)
- [IndicatorChartDataOptions](interface.IndicatorChartDataOptions.md)
- [IndicatorChartProps](interface.IndicatorChartProps.md)
- [JumpToDashboardConfig](interface.JumpToDashboardConfig.md)
- [JumpToDashboardConfigForPivot](interface.JumpToDashboardConfigForPivot.md)
- [LegendItemsOptions](interface.LegendItemsOptions.md)
- [LegendSymbolsOptions](interface.LegendSymbolsOptions.md)
- [LegendTitleOptions](interface.LegendTitleOptions.md)
- [LinearGradientColor](interface.LinearGradientColor.md)
- [LinearGradientDirection](interface.LinearGradientDirection.md)
- [LineChartProps](interface.LineChartProps.md)
- [LineStyleOptions](interface.LineStyleOptions.md)
- [MeasureDataPointEntry](interface.MeasureDataPointEntry.md)
- [Member](interface.Member.md)
- [MemberFilterTileProps](interface.MemberFilterTileProps.md)
- [NlqResponseData](interface.NlqResponseData.md)
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
- [RadialGradientColor](interface.RadialGradientColor.md)
- [RadialGradientConfig](interface.RadialGradientConfig.md)
- [RangeChartDataOptions](interface.RangeChartDataOptions.md)
- [RelativeDateFilterTileProps](interface.RelativeDateFilterTileProps.md)
- [ScatterChartDataOptions](interface.ScatterChartDataOptions.md)
- [ScatterChartProps](interface.ScatterChartProps.md)
- [ScattermapChartDataOptions](interface.ScattermapChartDataOptions.md)
- [ScattermapChartProps](interface.ScattermapChartProps.md)
- [ScattermapStyleOptions](interface.ScattermapStyleOptions.md)
- [ScatterStyleOptions](interface.ScatterStyleOptions.md)
- [SelectedMember](interface.SelectedMember.md)
- [SisenseContextProviderProps](interface.SisenseContextProviderProps.md)
- [StackableStyleOptions](interface.StackableStyleOptions.md)
- [StreamgraphChartProps](interface.StreamgraphChartProps.md)
- [StreamgraphStyleOptions](interface.StreamgraphStyleOptions.md)
- [StyledColumn](interface.StyledColumn.md)
- [StyledMeasureColumn](interface.StyledMeasureColumn.md)
- [SunburstChartProps](interface.SunburstChartProps.md)
- [SunburstStyleOptions](interface.SunburstStyleOptions.md)
- [TabberButtonsWidgetProps](interface.TabberButtonsWidgetProps.md)
- [TableDataOptions](interface.TableDataOptions.md)
- [TableProps](interface.TableProps.md)
- [TableStyleOptions](interface.TableStyleOptions.md)
- [TextWidgetProps](interface.TextWidgetProps.md)
- [ThemeSettings](interface.ThemeSettings.md)
- [ThemeSettingsFont](interface.ThemeSettingsFont.md)
- [TreemapChartProps](interface.TreemapChartProps.md)
- [TreemapStyleOptions](interface.TreemapStyleOptions.md)
- [TypographyThemeSettings](interface.TypographyThemeSettings.md)
- [UseGetNlgInsightsParams](interface.UseGetNlgInsightsParams.md)
- [UseGetNlgInsightsState](interface.UseGetNlgInsightsState.md)
- [UseGetNlqResultParams](interface.UseGetNlqResultParams.md)
- [UseGetNlqResultState](interface.UseGetNlqResultState.md)
- [UseGetQueryRecommendationsParams](interface.UseGetQueryRecommendationsParams.md)
- [UseGetQueryRecommendationsState](interface.UseGetQueryRecommendationsState.md)
- [UseGetSharedFormulaParams](interface.UseGetSharedFormulaParams.md)
- [WidgetByIdProps](interface.WidgetByIdProps.md)
- [WidgetByIdStyleOptions](interface.WidgetByIdStyleOptions.md)
- [WidgetContainerStyleOptions](interface.WidgetContainerStyleOptions.md)
- [WidgetsPanelCell](interface.WidgetsPanelCell.md)
- [WidgetsPanelColumn](interface.WidgetsPanelColumn.md)
- [WidgetsPanelColumnLayout](interface.WidgetsPanelColumnLayout.md)
- [WidgetsPanelConfig](interface.WidgetsPanelConfig.md)
- [WidgetsPanelRow](interface.WidgetsPanelRow.md)

e.WidgetsPanelColumn.md)
- [WidgetsPanelColumnLayout](interface.WidgetsPanelColumnLayout.md)
- [WidgetsPanelConfig](interface.WidgetsPanelConfig.md)
- [WidgetsPanelRow](interface.WidgetsPanelRow.md)

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
| `StyleOptions` | [`CustomWidgetStyleOptions`](../type-aliases/type-alias.CustomWidgetStyleOptions.md) | The shape of style options for this custom widget |
| `DataPoint` *extends* [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for event handlers |

## Properties

e-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for event handlers |

## Properties

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< `DataPoint` \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< `DataPoint` \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

Handler callback for selection of multiple data points

taPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

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

# Interface CustomWidgetEventProps`<DataPoint>`

Event props for custom widgets with generic data point type.

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `DataPoint` *extends* [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for this custom widget |

## Properties

ias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) | The shape of data points for this custom widget |

## Properties

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< `DataPoint` \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< `DataPoint` \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

Handler callback for selection of multiple data points

# Interface CustomWidgetProps

Props for the Custom Widget component

## Properties

s.CustomWidgetDataPointsEventHandler.md)\< `DataPoint` \>

Handler callback for selection of multiple data points

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

> **styleOptions**?: [`CustomWidgetStyleOptions`](../type-aliases/type-alias.CustomWidgetStyleOptions.md)

Style options for the custom widget.

***

#### title

> **title**?: `string`

Title of the widget

leOptions**?: [`CustomWidgetStyleOptions`](../type-aliases/type-alias.CustomWidgetStyleOptions.md)

Style options for the custom widget.

***

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

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

> **tabbers**?: [`TabbersConfig`](../type-aliases/type-alias.TabbersConfig.md)

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

> **widgetsPanel**?: [`WidgetsPanelConfig`](interface.WidgetsPanelConfig.md)

Configuration for the widgets panel

# Interface DashboardByIdProps

Props of the [DashboardById](../fusion-assets/function.DashboardById.md) component.

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

## Properties

d)

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

> **tabbers**?: [`TabbersConfig`](../type-aliases/type-alias.TabbersConfig.md)

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

> **widgetsPanel**?: [`WidgetsPanelConfig`](interface.WidgetsPanelConfig.md)

Configuration for the widgets panel

# Interface DashboardFiltersPanelCollapseChangedEvent

Event triggered when the filters panel collapsed state changes.

## Properties

### payload

> **payload**: `boolean`

Is the filters panel collapsed?

***

### type

> **type**: `"filtersPanel/collapse/changed"`

Event type

# Interface DashboardFiltersPanelConfig

Dashboard filters panel configuration

## Properties

the filters panel collapsed?

***

### type

> **type**: `"filtersPanel/collapse/changed"`

Event type

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

# Interface DashboardFiltersUpdatedEvent

Event triggered when dashboard filters are updated.

## Properties

### payload

> **payload**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

New filters or filter relations after the update

***

### type

> **type**: `"filters/updated"`

Event type

rface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

New filters or filter relations after the update

***

### type

> **type**: `"filters/updated"`

Event type

# Interface DashboardLayoutOptions

Dashboard layout options

## Properties

### widgetsPanel

> **widgetsPanel**?: [`WidgetsPanelColumnLayout`](interface.WidgetsPanelColumnLayout.md)

The layout of the dashboard widgets panel
If not provided, the widgets will be laid out in one column vertically by default

# Interface DashboardProps

Props for the Dashboard component

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

o each of the widgets based on the widget filter options

***

### layoutOptions

> **layoutOptions**?: [`DashboardLayoutOptions`](interface.DashboardLayoutOptions.md)

Dashboard layout options

***

### onChange

> **onChange**?: (`event`) => `void`

Callback to receive changes

This callback is invoked when the dashboard state changes, such as filter updates,
layout changes, or widget deletions. See [DashboardChangeEvent](../type-aliases/type-alias.DashboardChangeEvent.md) for all possible event types.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` | [`DashboardChangeEvent`](../type-aliases/type-alias.DashboardChangeEvent.md) | The event that occurred |

#### Returns

`void`

***

### styleOptions

> **styleOptions**?: [`DashboardStyleOptions`](../type-aliases/type-alias.DashboardStyleOptions.md)

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

# Interface DashboardWidgetsDeletedEvent

Event triggered when widgets are deleted from the dashboard.

tsOptions`](../type-aliases/type-alias.WidgetsOptions.md)

The options for each of the widgets

# Interface DashboardWidgetsDeletedEvent

Event triggered when widgets are deleted from the dashboard.

## Remarks

When `config.widgetsPanel.editMode.applyChangesAsBatch.enabled` is `true` (default),
this event is only triggered when the user applies changes (clicks "Apply"),
not during the editing process. When `false`, this event is triggered immediately
after widgets are deleted.

## Properties

### payload

> **payload**: `string`[]

The oids of the widgets deleted

***

### type

> **type**: `"widgets/deleted"`

Event type

# Interface DashboardWidgetsPanelIsEditingChangedEvent

Event triggered when the edit mode state changes.

## Properties

### payload

> **payload**: `boolean`

Is the widgets panel layout in editing state?

***

### type

> **type**: `"widgetsPanel/editMode/isEditing/changed"`

Event type

# Interface DashboardWidgetsPanelLayoutUpdatedEvent

Event triggered when the widgets panel layout is updated.

## Remarks

When `config.widgetsPanel.editMode.applyChangesAsBatch.enabled` is `true` (default),
this event is only triggered when the user applies changes (clicks "Apply"),
not during the editing process. When `false`, this event is triggered immediately
after each layout change.

## Properties

### payload

> **payload**: [`WidgetsPanelColumnLayout`](interface.WidgetsPanelColumnLayout.md)

The new widgets panel layout

***

is triggered immediately
after each layout change.

## Properties

### payload

> **payload**: [`WidgetsPanelColumnLayout`](interface.WidgetsPanelColumnLayout.md)

The new widgets panel layout

***

### type

> **type**: `"widgetsPanel/layout/updated"`

Event type

# Interface DrilldownWidgetProps

Props for the [DrilldownWidget](../drilldown/function.DrilldownWidget.md) component

## Properties

| :------ | :------ |
| `i` | `number` |

##### Returns

`void`

# Interface DrilldownWidgetProps

Props for the [DrilldownWidget](../drilldown/function.DrilldownWidget.md) component

## Properties

### Widget

#### children

> **children**: (`customDrilldownResult`) => `ReactNode`

React component to be rendered as context menu

[ContextMenu](../drilldown/function.ContextMenu.md) will be used if not provided

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `customDrilldownResult` | [`CustomDrilldownResult`](../type-aliases/type-alias.CustomDrilldownResult.md) |

##### Returns

`ReactNode`

***

#### config

> **config**?: [`DrilldownWidgetConfig`](../type-aliases/type-alias.DrilldownWidgetConfig.md)

An object that allows users to pass advanced configuration options as a prop for the `DrilldownWidget` component

***

#### drilldownPaths

> **drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](interface.Hierarchy.md))[]

Dimensions and hierarchies available for drilldown on.

***

#### initialDimension

> **initialDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Initial dimension to apply first set of filters to

# Interface ExecuteCustomWidgetQueryParams

Parameters for executing a query for a custom widget.
Contains only data-related properties needed for query execution,
excluding event handlers and other non-query props.

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

### enabled

> **enabled**?: `boolean`

Boolean flag to control if the hook is executed

If not specified, the default value is `true`

***

### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters to apply to the query

***

ilters

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

### ungroup

> **ungroup**?: `boolean`

Boolean flag whether to include `ungroup: true` in non-aggregated JAQL queries.

This improves computation and performance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface ExecutePivotQueryParams

Parameters for [useExecutePivotQuery](../queries/function.useExecutePivotQuery.md) hook.

## Properties

### Control

#### enabled

> **enabled**?: `boolean`

Boolean flag to control if query is executed

If not specified, the default value is `true`

ction.useExecutePivotQuery.md) hook.

## Properties

### Control

#### enabled

> **enabled**?: `boolean`

Boolean flag to control if query is executed

If not specified, the default value is `true`

### Data Options

#### columns

> **columns**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`PivotAttribute`](../../sdk-data/interfaces/interface.PivotAttribute.md))[]

Dimensions for the columns of the pivot table

***

#### dataSource

> **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### grandTotals

> **grandTotals**?: [`PivotGrandTotals`](../../sdk-data/type-aliases/type-alias.PivotGrandTotals.md)

Options for grand totals

***

#### rows

> **rows**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`PivotAttribute`](../../sdk-data/interfaces/interface.PivotAttribute.md))[]

Dimensions for the rows of the pivot table

***

#### values

> **values**?: ([`Measure`](../../sdk-data/interfaces/interface.Measure.md) \| [`PivotMeasure`](../../sdk-data/interfaces/interface.PivotMeasure.md))[]

Measures for the values of the pivot table

s

> **values**?: ([`Measure`](../../sdk-data/interfaces/interface.Measure.md) \| [`PivotMeasure`](../../sdk-data/interfaces/interface.PivotMeasure.md))[]

Measures for the values of the pivot table

### Filtering

#### filters

> **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

### Other

#### onBeforeQuery

> **onBeforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

**Note:** In React, wrap this function in `useCallback` hook to avoid triggering query execution on each render.
```ts
const onBeforeQuery = useCallback((jaql) => {
  // modify jaql here
  return jaql;
}, []);
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

##### Returns

`any`

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

of rows to return in the query result

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

egy is `codeFirst`.

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

# Interface ExecuteQueryByWidgetIdProps

Props for [ExecuteQueryByWidgetId](../fusion-assets/function.ExecuteQueryByWidgetId.md) component.

## Properties

tOid**: `string`

Identifier of the widget

# Interface ExecuteQueryByWidgetIdProps

Props for [ExecuteQueryByWidgetId](../fusion-assets/function.ExecuteQueryByWidgetId.md) component.

## Properties

### children

> **children**?: (`queryState`) => `ReactNode`

Function as child component that is called to render the query results

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `queryState` | [`QueryByWidgetIdState`](../type-aliases/type-alias.QueryByWidgetIdState.md) |

#### Returns

`ReactNode`

***

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

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

### onDataChanged

> **onDataChanged**?: (`data`, `queryParams`) => `void`

Callback function that is evaluated when query results are ready

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md) |
| `queryParams` | [`ExecuteQueryParams`](interface.ExecuteQueryParams.md) |

#### Returns

`void`

***

### widgetOid

> **widgetOid**: `string`

Identifier of the widget

# Interface GetDashboardModelOptions

## Properties

tring`

Hover color for primary buttons

***

### primaryButtonTextColor

> **primaryButtonTextColor**?: `string`

Text color for primary buttons

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

### includeWidgets

> **includeWidgets**?: `boolean`

Boolean flag whether to include widgets in the dashboard model

If not specified, the default value is `false`

***

odelsOptions

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
> **triggerMethod**?: [`TriggerMethod`](../type-aliases/type-alias.TriggerMethod.md)
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

../type-aliases/type-alias.TriggerMethod.md)
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

> **targets**: [`JtdTarget`](../type-aliases/type-alias.JtdTarget.md)[]

List of target dashboards that can be navigated to

fig, having higher priority

#### Default

```ts
{}
```

***

### targets

> **targets**: [`JtdTarget`](../type-aliases/type-alias.JtdTarget.md)[]

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
> **triggerMethod**?: [`TriggerMethod`](../type-aliases/type-alias.TriggerMethod.md)
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

../type-aliases/type-alias.TriggerMethod.md)
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
 }, [`JtdTarget`](../type-aliases/type-alias.JtdTarget.md)[] \>

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

Props of the [PivotTable](../data-grids/function.PivotTable.md) component.

## Properties

terface.StyledMeasureColumn.md))[]

Measures for the values of the pivot table

# Interface PivotTableProps

Props of the [PivotTable](../data-grids/function.PivotTable.md) component.

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

> **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

taPointContextMenu**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

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

Props for the [PivotTableWidget](../dashboards/function.PivotTableWidget.md) component

## Properties

container wrapping this component
3. Default value of 400px

# Interface PivotTableWidgetProps

Props for the [PivotTableWidget](../dashboards/function.PivotTableWidget.md) component

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

> **styleOptions**?: [`PivotTableWidgetStyleOptions`](../type-aliases/type-alias.PivotTableWidgetStyleOptions.md)

Style options for both the table and widget including the widget header

***

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

# Interface TabberButtonsWidgetProps

Props for tabbers buttons widget in a dashboard.

## Properties

roperty (in pixels)
2. Width of the container wrapping this component
3. Default value of 400px

# Interface TabberButtonsWidgetProps

Props for tabbers buttons widget in a dashboard.

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

### Widget

#### title

> **title**?: `string`

Title of the widget

lights

> **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

### Widget

#### title

> **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **onDataPointClick**?: [`CustomWidgetDataPointEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`CustomWidgetDataPointContextMenuHandler`](../type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CustomWidgetDataPointsEventHandler`](../type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Handler callback for selection of multiple data points

alias.CustomWidgetDataPointsEventHandler.md)\< [`AbstractDataPointWithEntries`](../type-aliases/type-alias.AbstractDataPointWithEntries.md) \>

Handler callback for selection of multiple data points

### Other

#### customOptions

> **customOptions**: [`TabberButtonsWidgetCustomOptions`](../type-aliases/type-alias.TabberButtonsWidgetCustomOptions.md)

Configuration for tabs including names and active tab index

***

#### customWidgetType

> **customWidgetType**: `"tabber-buttons"`

Custom widget type identifier, always 'tabber-buttons' for tabber widget

***

#### dataOptions

> **dataOptions**: `Record`\< `string`, `never` \>

Data options configuration (empty object for tabber widget as it doesn't require data)

***

#### description

> **description**?: `string`

Description text displayed in the widget

***

#### id

> **id**: `string`

Unique identifier for the widget

***

#### styleOptions

> **styleOptions**?: [`TabberButtonsWidgetStyleOptions`](../type-aliases/type-alias.TabberButtonsWidgetStyleOptions.md)

Style configuration options for the tabber buttons widget

***

#### widgetType

> **widgetType**: `"custom"`

Widget type identifier, always 'custom' for tabber widget

# Interface TextWidgetProps

Props for the `TextWidget` component.

## Properties

### Widget

#### styleOptions

> **styleOptions**: [`TextWidgetStyleOptions`](../type-aliases/type-alias.TextWidgetStyleOptions.md)

Style options for the text widget.

# Interface WidgetByIdProps

Props for the [WidgetById](../fusion-assets/function.WidgetById.md) component

## Properties

ring`

Formula name

***

### oid

> **oid**?: `string`

Formula identifier

# Interface WidgetByIdProps

Props for the [WidgetById](../fusion-assets/function.WidgetById.md) component

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

> **onDataPointClick**?: [`AreamapDataPointEventHandler`](../type-aliases/type-alias.AreamapDataPointEventHandler.md) \| [`BoxplotDataPointEventHandler`](../type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md) \| [`IndicatorDataPointEventHandler`](../type-aliases/type-alias.IndicatorDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../type-aliases/type-alias.ScatterDataPointEventHandler.md) \| [`ScattermapDataPointEventHandler`](../type-aliases/type-alias.ScattermapDataPointEventHandler.md)

Click handler callback for a data point

***

#### onDataPointContextMenu

> **onDataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../type-aliases/type-alias.DataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **onDataPointsSelected**?: [`CalendarHeatmapDataPointsEventHandler`](../type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md) \| [`DataPointsEventHandler`](../type-aliases/type-alias.DataPointsEventHandler.md) \| [`ScatterDataPointsEventHandler`](../type-aliases/type-alias.ScatterDataPointsEventHandler.md)

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

> **cornerRadius**?: [`RadiusSizes`](../type-aliases/type-alias.RadiusSizes.md)

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
> **titleAlignment**?: [`AlignmentTypes`](../type-aliases/type-alias.AlignmentTypes.md)
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

: [`AlignmentTypes`](../type-aliases/type-alias.AlignmentTypes.md)
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

> **shadow**?: [`ShadowsTypes`](../type-aliases/type-alias.ShadowsTypes.md)

Shadow level of the widget container

Effective only when spaceAround is defined

***

### spaceAround

> **spaceAround**?: [`SpaceSizes`](../type-aliases/type-alias.SpaceSizes.md)

Space between widget container edge and the chart

***

### width

> **width**?: `number`

Total width of the component, which is considered in the following order of priority:

1. Value passed to this property (in pixels)
2. Width of the container wrapping this component
3. Default value as specified per chart type

# Interface WidgetContainerStyleOptions

Style settings defining the look and feel of widget itself and widget header

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

ects chart background color as well

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

> **cornerRadius**?: [`RadiusSizes`](../type-aliases/type-alias.RadiusSizes.md)

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
> **titleAlignment**?: [`AlignmentTypes`](../type-aliases/type-alias.AlignmentTypes.md)
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

### shadow

> **shadow**?: [`ShadowsTypes`](../type-aliases/type-alias.ShadowsTypes.md)

Shadow level of the widget container

Effective only when spaceAround is defined

***

### spaceAround

> **spaceAround**?: [`SpaceSizes`](../type-aliases/type-alias.SpaceSizes.md)

Space between widget container edge and the chart

ner

Effective only when spaceAround is defined

***

### spaceAround

> **spaceAround**?: [`SpaceSizes`](../type-aliases/type-alias.SpaceSizes.md)

Space between widget container edge and the chart

# Interface WidgetsPanelCell

Part of Dashboard layout, which describes how widgets are arranged in a cell

## Properties

### widgetId

> **widgetId**: `string`

***

### widthPercentage

> **widthPercentage**: `number`

# Interface WidgetsPanelConfig

Widgets panel configuration

## Properties

### editMode

> **editMode**?: [`EditModeConfig`](interface.EditModeConfig.md)

Edit mode configuration.

***

### responsive

> **responsive**?: `boolean`

If `true`, adjust layout based on available width of widgets panel.

If not specified, the default value is `false`.

# Interface WidgetsPanelRow

Part of Dashboard layout, which describes how widgets are arranged in a row

## Properties

### cells

> **cells**: [`WidgetsPanelCell`](interface.WidgetsPanelCell.md)[]


## Type Aliases

sPanelRow

Part of Dashboard layout, which describes how widgets are arranged in a row

## Properties

### cells

> **cells**: [`WidgetsPanelCell`](interface.WidgetsPanelCell.md)[]


## Type Aliases

# Type Aliases

TypeScript type aliases for components and hooks listed above

- [AbstractDataPointWithEntries](type-alias.AbstractDataPointWithEntries.md)
- [AlignmentTypes](type-alias.AlignmentTypes.md)
- [AppConfig](type-alias.AppConfig.md)
- [AreamapChartType](type-alias.AreamapChartType.md)
- [AreamapDataPoint](type-alias.AreamapDataPoint.md)
- [AreamapDataPointEventHandler](type-alias.AreamapDataPointEventHandler.md)
- [AreamapType](type-alias.AreamapType.md)
- [AreaRangeSubtype](type-alias.AreaRangeSubtype.md)
- [AreaSubtype](type-alias.AreaSubtype.md)
- [AutoZoomNavigatorScrollerLocation](type-alias.AutoZoomNavigatorScrollerLocation.md)
- [AxisLabel](type-alias.AxisLabel.md)
- [BeforeRenderHandler](type-alias.BeforeRenderHandler.md)
- [BoxplotChartCustomDataOptions](type-alias.BoxplotChartCustomDataOptions.md)
- [BoxplotChartDataOptions](type-alias.BoxplotChartDataOptions.md)
- [BoxplotChartType](type-alias.BoxplotChartType.md)
- [BoxplotDataPoint](type-alias.BoxplotDataPoint.md)
- [BoxplotDataPointEventHandler](type-alias.BoxplotDataPointEventHandler.md)
- [BoxplotSubtype](type-alias.BoxplotSubtype.md)
- [BoxWhiskerType](type-alias.BoxWhiskerType.md)
- [CalendarDayOfWeek](type-alias.CalendarDayOfWeek.md)
- [CalendarHeatmapCellLabels](type-alias.CalendarHeatmapCellLabels.md)
- [CalendarHeatmapChartType](type-alias.CalendarHeatmapChartType.md)
- [CalendarHeatmapDataPoint](type-alias.CalendarHeatmapDataPoint.md)
- [CalendarHeatmapDataPointEventHandler](type-alias.CalendarHeatmapDataPointEventHandler.md)
- [CalendarHeatmapDataPointsEventHandler](type-alias.CalendarHeatmapDataPointsEventHandler.md)
- [CalendarHeatmapSubtype](type-alias.CalendarHeatmapSubtype.md)
- [CalendarHeatmapViewType](type-alias.CalendarHeatmapViewType.md)
- [CartesianChartType](type-alias.CartesianChartType.md)
- [CartesianWidgetType](type-alias.CartesianWidgetType.md)
- [CategoricalChartType](type-alias.CategoricalChartType.md)
- [CategoricalWidgetType](type-alias.CategoricalWidgetType.md)
- [ChartDataOptions](type-alias.ChartDataOptions.md)
- [ChartDataPoint](type-alias.ChartDataPoint.md)
- [ChartDataPoints](type-alias.ChartDataPoints.md)
- [ChartDataPointsEventHandler](type-alias.ChartDataPointsEventHandler.md)
- [ChartStyleOptions](type-alias.ChartStyleOptions.md)
- [ChartType](type-alias.ChartType.md)
- [ChartWidgetStyleOptions](type-alias.ChartWidgetStyleOptions.md)
- [Color](type-alias.Color.md)
- [ColorPaletteTheme](type-alias.ColorPaletteTheme.md)
- [ColorValue](type-alias.ColorValue.md)
- [CommonFiltersOptions](type-alias.CommonFiltersOptions.md)
- [ComposableDashboardProps](type-alias.ComposableDashboardProps.md)
- [ComposedDashboardResult](type-alias.ComposedDashboardResult.md)
- [ConditionalDataColorOptions](type-alias.ConditionalDataColorOptions.md)
- [Convolution](type-alias.Convolution.md)
- [Coordinates](type-alias.Coordinates.md)
- [CsvQueryErrorState](type-alias.CsvQueryErrorState.md)
- [CsvQueryLoadingState](type-alias.CsvQueryLoadingState.md)
- [CsvQueryState](type-alias.CsvQueryState.md)
- [CsvQuerySuccessState](type-alias.CsvQuerySuccessState.md)
- [CustomDrilldownResult](type-alias.CustomDrilldownResult.md)
- [CustomTranslationObject](type-alias.CustomTranslationObject.md)
- [CustomWidgetComponent](type-alias.CustomWidgetComponent.md)
- [CustomWidgetDataPoint](type-alias.CustomWidgetDataPoint.md)
- [CustomWidgetDataPointContextMenuHandler](type-alias.CustomWidgetDataPointContextMenuHandler.md)
- [CustomWidgetDataPointEventHandler](type-alias.CustomWidgetDataPointEventHandler.md)
- [CustomWidgetDataPointsEventHandler](type-alias.CustomWidgetDataPointsEventHandler.md)
- [CustomWidgetQueryState](type-alias.CustomWidgetQueryState.md)
- [CustomWidgetStyleOptions](type-alias.CustomWidgetStyleOptions.md)
- [DashboardChangeEvent](type-alias.DashboardChangeEvent.md)
- [DashboardModelErrorState](type-alias.DashboardModelErrorState.md)
- [DashboardModelLoadingState](type-alias.DashboardModelLoadingState.md)
- [DashboardModelsErrorState](type-alias.DashboardModelsErrorState.md)
- [DashboardModelsLoadingState](type-alias.DashboardModelsLoadingState.md)
- [DashboardModelsState](type-alias.DashboardModelsState.md)
- [DashboardModelsSuccessState](type-alias.DashboardModelsSuccessState.md)
- [DashboardModelState](type-alias.DashboardModelState.md)
- [DashboardModelSuccessState](type-alias.DashboardModelSuccessState.md)
- [DashboardStyleOptions](type-alias.DashboardStyleOptions.md)
- [DashStyle](type-alias.DashStyle.md)
- [DataColorCondition](type-alias.DataColorCondition.md)
- [DataColorOptions](type-alias.DataColorOptions.md)
- [DataOptionLocation](type-alias.DataOptionLocation.md)
- [DataPoint](type-alias.DataPoint.md)
- [DataPointEntry](type-alias.DataPointEntry.md)
- [DataPointEventHandler](type-alias.DataPointEventHandler.md)
- [DataPointsEventHandler](type-alias.DataPointsEventHandler.md)
- [DataSourceDimensionsErrorState](type-alias.DataSourceDimensionsErrorState.md)
- [DataSourceDimensionsLoadingState](type-alias.DataSourceDimensionsLoadingState.md)
- [DataSourceDimensionsState](type-alias.DataSourceDimensionsState.md)
- [DataSourceDimensionsSuccessState](type-alias.DataSourceDimensionsSuccessState.md)
- [DateConfig](type-alias.DateConfig.md)
- [DateLevel](type-alias.DateLevel.md)
- [DayOfWeek](type-alias.DayOfWeek.md)
- [DecimalScale](type-alias.DecimalScale.md)
- [DrilldownOptions](type-alias.DrilldownOptions.md)
- [DrilldownSelection](type-alias.DrilldownSelection.md)
- [DrilldownWidgetConfig](type-alias.DrilldownWidgetConfig.md)
- [EmptyObject](type-alias.EmptyObject.md)
- [EndCapType](type-alias.EndCapType.md)
- [ExecuteCSVQueryConfig](type-alias.ExecuteCSVQueryConfig.md)
- [ExecuteQueryResult](type-alias.ExecuteQueryResult.md)
- [FilterMembersState](type-alias.FilterMembersState.md)
- [FiltersIgnoringRules](type-alias.FiltersIgnoringRules.md)
- [FilterThemeSettings](type-alias.FilterThemeSettings.md)
- [FilterVariant](type-alias.FilterVariant.md)
- [GenericDataOptions](type-alias.GenericDataOptions.md)
- [GeoDataElement](type-alias.GeoDataElement.md)
- [GetFilterMembersResult](type-alias.GetFilterMembersResult.md)
- [GradientColor](type-alias.GradientColor.md)
- [GradientPosition](type-alias.GradientPosition.md)
- [HierarchyId](type-alias.HierarchyId.md)
- [HierarchyModelsErrorState](type-alias.HierarchyModelsErrorState.md)
- [HierarchyModelsLoadingState](type-alias.HierarchyModelsLoadingState.md)
- [HierarchyModelsState](type-alias.HierarchyModelsState.md)
- [HierarchyModelsSuccessState](type-alias.HierarchyModelsSuccessState.md)
- [IndicatorBeforeRenderHandler](type-alias.IndicatorBeforeRenderHandler.md)
- [IndicatorChartType](type-alias.IndicatorChartType.md)
- [IndicatorComponents](type-alias.IndicatorComponents.md)
- [IndicatorDataPoint](type-alias.IndicatorDataPoint.md)
- [IndicatorDataPointEventHandler](type-alias.IndicatorDataPointEventHandler.md)
- [IndicatorRenderOptions](type-alias.IndicatorRenderOptions.md)
- [IndicatorStyleOptions](type-alias.IndicatorStyleOptions.md)
- [JtdTarget](type-alias.JtdTarget.md)
- [Labels](type-alias.Labels.md)
- [Legend](type-alias.Legend.md)
- [LegendOptions](type-alias.LegendOptions.md)
- [LegendPosition](type-alias.LegendPosition.md)
- [LineOptions](type-alias.LineOptions.md)
- [LineSubtype](type-alias.LineSubtype.md)
- [LineWidth](type-alias.LineWidth.md)
- [LoadingIndicatorConfig](type-alias.LoadingIndicatorConfig.md)
- [LoadingOverlayProps](type-alias.LoadingOverlayProps.md)
- [Markers](type-alias.Markers.md)
- [MenuItemSection](type-alias.MenuItemSection.md)
- [MenuPosition](type-alias.MenuPosition.md)
- [MonthOfYear](type-alias.MonthOfYear.md)
- [MultiColumnValueToColorMap](type-alias.MultiColumnValueToColorMap.md)
- [Navigator](type-alias.Navigator.md)
- [NestedTranslationResources](type-alias.NestedTranslationResources.md)
- [NlqResult](type-alias.NlqResult.md)
- [NlqResultChartType](type-alias.NlqResultChartType.md)
- [NumberFormatConfig](type-alias.NumberFormatConfig.md)
- [PiePercentageLabels](type-alias.PiePercentageLabels.md)
- [PieSeriesLabels](type-alias.PieSeriesLabels.md)
- [PieSubtype](type-alias.PieSubtype.md)
- [PivotQueryErrorState](type-alias.PivotQueryErrorState.md)
- [PivotQueryLoadingState](type-alias.PivotQueryLoadingState.md)
- [PivotQueryState](type-alias.PivotQueryState.md)
- [PivotQuerySuccessState](type-alias.PivotQuerySuccessState.md)
- [PivotRowsSort](type-alias.PivotRowsSort.md)
- [PivotTableDataPoint](type-alias.PivotTableDataPoint.md)
- [PivotTableDataPointEventHandler](type-alias.PivotTableDataPointEventHandler.md)
- [PivotTableDrilldownOptions](type-alias.PivotTableDrilldownOptions.md)
- [PivotTableNonSelectableDrilldownOptions](type-alias.PivotTableNonSelectableDrilldownOptions.md)
- [PivotTableSelectableDrilldownOptions](type-alias.PivotTableSelectableDrilldownOptions.md)
- [PivotTableWidgetStyleOptions](type-alias.PivotTableWidgetStyleOptions.md)
- [PolarSubtype](type-alias.PolarSubtype.md)
- [QueryByWidgetIdQueryParams](type-alias.QueryByWidgetIdQueryParams.md)
- [QueryByWidgetIdState](type-alias.QueryByWidgetIdState.md)
- [QueryErrorState](type-alias.QueryErrorState.md)
- [QueryLoadingState](type-alias.QueryLoadingState.md)
- [QueryRecommendationResponse](type-alias.QueryRecommendationResponse.md)
- [QueryState](type-alias.QueryState.md)
- [QuerySuccessState](type-alias.QuerySuccessState.md)
- [RadiusSizes](type-alias.RadiusSizes.md)
- [RangeChartType](type-alias.RangeChartType.md)
- [RangeDataColorOptions](type-alias.RangeDataColorOptions.md)
- [RawGeoDataElement](type-alias.RawGeoDataElement.md)
- [RegularChartDataOptions](type-alias.RegularChartDataOptions.md)
- [RegularChartStyleOptions](type-alias.RegularChartStyleOptions.md)
- [RegularChartType](type-alias.RegularChartType.md)
- [RequestConfig](type-alias.RequestConfig.md)
- [ScatterChartType](type-alias.ScatterChartType.md)
- [ScatterDataPoint](type-alias.ScatterDataPoint.md)
- [ScatterDataPointEventHandler](type-alias.ScatterDataPointEventHandler.md)
- [ScatterDataPointsEventHandler](type-alias.ScatterDataPointsEventHandler.md)
- [ScattermapChartType](type-alias.ScattermapChartType.md)
- [ScattermapDataPoint](type-alias.ScattermapDataPoint.md)
- [ScattermapDataPointEventHandler](type-alias.ScattermapDataPointEventHandler.md)
- [ScattermapLocationLevel](type-alias.ScattermapLocationLevel.md)
- [ScattermapMarkers](type-alias.ScattermapMarkers.md)
- [ScatterMarkerSize](type-alias.ScatterMarkerSize.md)
- [ScatterSeriesLabels](type-alias.ScatterSeriesLabels.md)
- [SeriesChartType](type-alias.SeriesChartType.md)
- [SeriesLabels](type-alias.SeriesLabels.md)
- [SeriesLabelsAligning](type-alias.SeriesLabelsAligning.md)
- [SeriesLabelsBase](type-alias.SeriesLabelsBase.md)
- [SeriesLabelsTextStyle](type-alias.SeriesLabelsTextStyle.md)
- [SeriesStyleOptions](type-alias.SeriesStyleOptions.md)
- [ShadowsTypes](type-alias.ShadowsTypes.md)
- [SharedFormulaErrorState](type-alias.SharedFormulaErrorState.md)
- [SharedFormulaLoadingState](type-alias.SharedFormulaLoadingState.md)
- [SharedFormulaState](type-alias.SharedFormulaState.md)
- [SharedFormulaSuccessState](type-alias.SharedFormulaSuccessState.md)
- [SortDirection](type-alias.SortDirection.md)
- [SpaceSizes](type-alias.SpaceSizes.md)
- [SpecificWidgetOptions](type-alias.SpecificWidgetOptions.md)
- [StackableSubtype](type-alias.StackableSubtype.md)
- [SunburstSeriesLabels](type-alias.SunburstSeriesLabels.md)
- [SunburstSeriesLabelsBase](type-alias.SunburstSeriesLabelsBase.md)
- [TabberButtonsWidgetCustomOptions](type-alias.TabberButtonsWidgetCustomOptions.md)
- [TabberButtonsWidgetStyleOptions](type-alias.TabberButtonsWidgetStyleOptions.md)
- [TabberConfig](type-alias.TabberConfig.md)
- [TabbersConfig](type-alias.TabbersConfig.md)
- [TabberTabConfig](type-alias.TabberTabConfig.md)
- [TableChartType](type-alias.TableChartType.md)
- [TableColorOptions](type-alias.TableColorOptions.md)
- [TableType](type-alias.TableType.md)
- [TabularChartDataOptions](type-alias.TabularChartDataOptions.md)
- [TabularChartStyleOptions](type-alias.TabularChartStyleOptions.md)
- [TabularWidgetType](type-alias.TabularWidgetType.md)
- [TextStyle](type-alias.TextStyle.md)
- [TextWidgetStyleOptions](type-alias.TextWidgetStyleOptions.md)
- [TextWidgetType](type-alias.TextWidgetType.md)
- [ThemeOid](type-alias.ThemeOid.md)
- [ThemeProviderProps](type-alias.ThemeProviderProps.md)
- [ThemeSettingsFontSource](type-alias.ThemeSettingsFontSource.md)
- [TotalLabels](type-alias.TotalLabels.md)
- [TotalLabelsTextStyle](type-alias.TotalLabelsTextStyle.md)
- [TranslationConfig](type-alias.TranslationConfig.md)
- [TreemapSeriesLabels](type-alias.TreemapSeriesLabels.md)
- [TriggerMethod](type-alias.TriggerMethod.md)
- [UniformDataColorOptions](type-alias.UniformDataColorOptions.md)
- [UseComposedDashboardOptions](type-alias.UseComposedDashboardOptions.md)
- [UseQueryResult](type-alias.UseQueryResult.md)
- [ValueToColorMap](type-alias.ValueToColorMap.md)
- [WidgetDataOptions](type-alias.WidgetDataOptions.md)
- [WidgetId](type-alias.WidgetId.md)
- [WidgetModelErrorState](type-alias.WidgetModelErrorState.md)
- [WidgetModelLoadingState](type-alias.WidgetModelLoadingState.md)
- [WidgetModelState](type-alias.WidgetModelState.md)
- [WidgetModelSuccessState](type-alias.WidgetModelSuccessState.md)
- [WidgetProps](type-alias.WidgetProps.md)
- [WidgetsOptions](type-alias.WidgetsOptions.md)
- [WidgetsPanelLayout](type-alias.WidgetsPanelLayout.md)
- [WidgetStyleOptions](type-alias.WidgetStyleOptions.md)
- [WidgetThemeSettings](type-alias.WidgetThemeSettings.md)
- [WidgetType](type-alias.WidgetType.md)
- [WithCommonWidgetProps](type-alias.WithCommonWidgetProps.md)
- [X2Title](type-alias.X2Title.md)

- [WidgetThemeSettings](type-alias.WidgetThemeSettings.md)
- [WidgetType](type-alias.WidgetType.md)
- [WithCommonWidgetProps](type-alias.WithCommonWidgetProps.md)
- [X2Title](type-alias.X2Title.md)

# Type alias AbstractDataPointWithEntries

> **AbstractDataPointWithEntries**: `object`

A basic data point with entries.

## Type declaration

### `entries`

**entries**?: `Record`\< `string`, [`DataPointEntry`](type-alias.DataPointEntry.md) \| [`DataPointEntry`](type-alias.DataPointEntry.md)[] \>

A collection of data point entries that represents values for all related `dataOptions`.

# Type alias AlignmentTypes

> **AlignmentTypes**: `"Center"` \| `"Left"` \| `"Right"`

Possible types of text alignment.

# Type alias AppConfig

> **AppConfig**: `object`

Application configuration

## Type declaration

Types

> **AlignmentTypes**: `"Center"` \| `"Left"` \| `"Right"`

Possible types of text alignment.

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

**loadingIndicatorConfig**?: [`LoadingIndicatorConfig`](type-alias.LoadingIndicatorConfig.md)

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

tabber widget support
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

# Type alias AreaRangeSubtype

> **AreaRangeSubtype**: `"arearange/basic"` \| `"arearange/spline"`

Property of [AreaRangeStyleOptions](../interfaces/interface.AreaRangeStyleOptions.md)

Subtype of AreaRangeChart

**Values**

- `arearange/spline` - curved line from point to point.
- `arearange/basic` - straight line from point to point.

nterfaces/interface.AreaRangeStyleOptions.md)

Subtype of AreaRangeChart

**Values**

- `arearange/spline` - curved line from point to point.
- `arearange/basic` - straight line from point to point.

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

# Type alias AreamapDataPoint

> **AreamapDataPoint**: [`GeoDataElement`](type-alias.GeoDataElement.md) & \{
  `entries`: \{
    `color`: [`DataPointEntry`](type-alias.DataPointEntry.md)[];
    `geo`: [`DataPointEntry`](type-alias.DataPointEntry.md)[];
  };
 }

Data point in an Areamap chart.

> ## `AreamapDataPoint.entries`
>
> **entries**?: `object`
>
> A collection of data point entries that represents values for all related `dataOptions`.
>
> > ### `entries.color`
> >
> > **color**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
> >
> > Data point entries for the `color` data options
> >
> > ### `entries.geo`
> >
> > **geo**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
> >
> > Data point entries for the `geo` data options
> >
> >
>
>

# Type alias AreamapDataPointEventHandler

> **AreamapDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a data point on Areamap is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`AreamapDataPoint`](type-alias.AreamapDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias AreamapType

> **AreamapType**: `"usa"` \| `"world"`

Type of map to display on the AreamapChart component

s.AreamapDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias AreamapType

> **AreamapType**: `"usa"` \| `"world"`

Type of map to display on the AreamapChart component

# Type alias AutoZoomNavigatorScrollerLocation

> **AutoZoomNavigatorScrollerLocation**: `object`

The scroll location of the navigator scroller / auto zoom feature

## Type declaration

### `max`

**max**: `number`

***

### `min`

**min**: `number`

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

iskerType

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

### `value`

**value**: ([`CalculatedMeasureColumn`](../../sdk-data/interfaces/interface.CalculatedMeasureColumn.md) \| [`Column`](../../sdk-data/interfaces/interface.Column.md) \| [`MeasureColumn`](../../sdk-data/interfaces/interface.MeasureColumn.md) \| [`StyledColumn`](../interfaces/interface.StyledColumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[]

Measure columns (or measures) representing the target numeric values used for computing boxplot metrics.

***

olumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[]

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

s represent the target numeric value column for computing boxplot metrics according to the selected `boxType`

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

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.category`
>
> **category**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `category` data options
>
> #### `entries.outliers`
>
> **outliers**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `outliers` data options
>
> #### `entries.value`
>
> **value**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
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

nt entries for the `value` data options
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

# Type alias BoxplotDataPointEventHandler

> **BoxplotDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a data point on Boxplot is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md) |
| `nativeEvent` | `PointerEvent` |

## Returns

`void`

# Type alias BoxplotSubtype

> **BoxplotSubtype**: `"boxplot/full"` \| `"boxplot/hollow"`

# Type alias CalendarDayOfWeek

> **CalendarDayOfWeek**: `"friday"` \| `"monday"` \| `"saturday"` \| `"sunday"` \| `"thursday"` \| `"tuesday"` \| `"wednesday"`

Day of the week

# Type alias CalendarHeatmapCellLabels

> **CalendarHeatmapCellLabels**: `object`

Configuration for day numbers (1-31) labels in calendar-heatmap cells

## Type declaration

### `enabled`

**enabled**?: `boolean`

Boolean flag that defines if calendar day numbers should be shown in cells

#### Default

```ts
true
```

***

in calendar-heatmap cells

## Type declaration

### `enabled`

**enabled**?: `boolean`

Boolean flag that defines if calendar day numbers should be shown in cells

#### Default

```ts
true
```

***

### `style`

**style**?: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"color"` \> & \{
  `color`: `"contrast"` \| `string`;
 }

Style configuration for calendar day numbers in cells

::: warning Deprecated
Please use `textStyle` instead
:::

> #### `style.color`
>
> **color**?: `"contrast"` \| `string`
>
> Color of the labels text
>
> The "contrast" color applies the maximum contrast between the background and the text
>
>

***

### `textStyle`

**textStyle**?: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"color"` \> & \{
  `color`: `"contrast"` \| `string`;
 }

Style configuration for calendar day numbers in cells

> #### `textStyle.color`
>
> **color**?: `"contrast"` \| `string`
>
> Color of the labels text
>
> The "contrast" color applies the maximum contrast between the background and the text
>
>

# Type alias CalendarHeatmapChartType

> **CalendarHeatmapChartType**: `"calendar-heatmap"`

Calendar heatmap chart types

# Type alias CalendarHeatmapDataPoint

> **CalendarHeatmapDataPoint**: `object`

Data point in a CalendarHeatmap chart.

## Type declaration

pe**: `"calendar-heatmap"`

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
> **date**: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `date` data options
>
> #### `entries.value`
>
> **value**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `value` data options
>
>

# Type alias CalendarHeatmapDataPointEventHandler

> **CalendarHeatmapDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a calendar-heatmap data point is clicked

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md) |
| `nativeEvent` | `PointerEvent` |

## Returns

`void`

# Type alias CalendarHeatmapDataPointsEventHandler

> **CalendarHeatmapDataPointsEventHandler**: (`points`, `nativeEvent`) => `void`

Click handler for when multiple calendar-heatmap data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias CalendarHeatmapSubtype

> **CalendarHeatmapSubtype**: `"calendar-heatmap/continuous"` \| `"calendar-heatmap/split"`

Calendar heatmap chart subtype

# Type alias CalendarHeatmapViewType

> **CalendarHeatmapViewType**: `"half-year"` \| `"month"` \| `"quarter"` \| `"year"`

View type determines how many months to display: 'month' (1), 'quarter' (3), 'half-year' (6), 'year' (12)

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

> **ChartDataOptions**: [`RegularChartDataOptions`](type-alias.RegularChartDataOptions.md) \| [`TabularChartDataOptions`](type-alias.TabularChartDataOptions.md)

Configuration for querying aggregate data and assigning data to chart encodings.

There are separate configurations for [Cartesian](../interfaces/interface.CartesianChartDataOptions.md),
[Categorical](../interfaces/interface.CategoricalChartDataOptions.md),
[Scatter](../interfaces/interface.ScatterChartDataOptions.md),
[Indicator](../interfaces/interface.IndicatorChartDataOptions.md),
[Table](../interfaces/interface.TableDataOptions.md),
[Boxplot](type-alias.BoxplotChartDataOptions.md),
[Areamap](../interfaces/interface.AreamapChartDataOptions.md), and
[Scattermap](../interfaces/interface.ScattermapChartDataOptions.md) charts.

# Type alias ChartDataPoint

> **ChartDataPoint**: [`AreamapDataPoint`](type-alias.AreamapDataPoint.md) \| [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md) \| [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md) \| [`DataPoint`](type-alias.DataPoint.md) \| [`ScatterDataPoint`](type-alias.ScatterDataPoint.md) \| [`ScattermapDataPoint`](type-alias.ScattermapDataPoint.md)

Abstract data point in a chart - union of all types of data points.

taPoint.md) \| [`ScatterDataPoint`](type-alias.ScatterDataPoint.md) \| [`ScattermapDataPoint`](type-alias.ScattermapDataPoint.md)

Abstract data point in a chart - union of all types of data points.

# Type alias ChartDataPoints

> **ChartDataPoints**: [`AreamapDataPoint`](type-alias.AreamapDataPoint.md)[] \| [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md)[] \| [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)[] \| [`DataPoint`](type-alias.DataPoint.md)[] \| [`ScatterDataPoint`](type-alias.ScatterDataPoint.md)[] \| [`ScattermapDataPoint`](type-alias.ScattermapDataPoint.md)[]

Data points in a chart. Array of data points of the same data point type.

# Type alias ChartDataPointsEventHandler

> **ChartDataPointsEventHandler**: (`points`, `nativeEvent`) => `void`

Click handler for when an abstract data point (data point of any chart) is clicked

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`ChartDataPoints`](type-alias.ChartDataPoints.md) |
| `nativeEvent` | `MouseEvent` \| `PointerEvent` |

## Returns

`void`

# Type alias ChartStyleOptions

> **ChartStyleOptions**: [`RegularChartStyleOptions`](type-alias.RegularChartStyleOptions.md) \| [`TabularChartStyleOptions`](type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

(type-alias.RegularChartStyleOptions.md) \| [`TabularChartStyleOptions`](type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

# Type alias ChartType

> **ChartType**: [`AreamapChartType`](type-alias.AreamapChartType.md) \| [`BoxplotChartType`](type-alias.BoxplotChartType.md) \| [`CalendarHeatmapChartType`](type-alias.CalendarHeatmapChartType.md) \| [`CartesianChartType`](type-alias.CartesianChartType.md) \| [`CategoricalChartType`](type-alias.CategoricalChartType.md) \| [`IndicatorChartType`](type-alias.IndicatorChartType.md) \| [`RangeChartType`](type-alias.RangeChartType.md) \| [`ScatterChartType`](type-alias.ScatterChartType.md) \| [`ScattermapChartType`](type-alias.ScattermapChartType.md) \| [`TableChartType`](type-alias.TableChartType.md)

Chart type of one of the supported chart families

# Type alias ChartWidgetStyleOptions

> **ChartWidgetStyleOptions**: [`ChartStyleOptions`](type-alias.ChartStyleOptions.md) & [`WidgetContainerStyleOptions`](../interfaces/interface.WidgetContainerStyleOptions.md)

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

# Type alias ColorValue

> **ColorValue**: `string`

A color value that can be a CSS color string, hex value, or rgba/hsla string.

# Type alias CommonFiltersOptions

> **CommonFiltersOptions**: `object`

Options for common filters defined at the dashboard level to be applied to certain widgets.

## Type declaration

### `applyMode`

**applyMode**?: \`$\{CommonFiltersApplyMode}\`

Apply mode for common filters: 'highlight' or 'filter'.

***

### `forceApplyBackgroundFilters`

**forceApplyBackgroundFilters**?: `boolean`

Boolean flag whether to apply all background filters as slice filters ignoring "disabled" state and "ignoreFilters" rules

If not specified, the default value is `true`.

***

### `ignoreFilters`

**ignoreFilters**?: [`FiltersIgnoringRules`](type-alias.FiltersIgnoringRules.md)

Filters to ignore when applying common filters.

***

### `shouldAffectFilters`

**shouldAffectFilters**?: `boolean`

Boolean flag whether widget interactions – for example, selection of bars on a bar chart –
should affect common filters.

If not specified, the default value is `true`.

dAffectFilters**?: `boolean`

Boolean flag whether widget interactions – for example, selection of bars on a bar chart –
should affect common filters.

If not specified, the default value is `true`.

# Type alias ComposableDashboardProps

> **ComposableDashboardProps**: `Pick`\< [`DashboardProps`](../interfaces/interface.DashboardProps.md), `"config"` \| `"filters"` \| `"layoutOptions"` \| `"widgets"` \| `"widgetsOptions"` \>

# Type alias ComposedDashboardResult`<D>`

> **ComposedDashboardResult**: <`D`> `object`

Result of the [useComposedDashboard](../dashboards/function.useComposedDashboard.md) hook.

## Type parameters

| Parameter |
| :------ |
| `D` *extends* [`ComposableDashboardProps`](type-alias.ComposableDashboardProps.md) \| [`DashboardProps`](../interfaces/interface.DashboardProps.md) |

## Type declaration

### `dashboard`

**dashboard**: `D`

The composable dashboard object containing the current state of the dashboard.

***

### `setFilters`

**setFilters**: (`filters`) => `void`

API to set filters on the dashboard.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

#### Returns

`void`

***

---- | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

#### Returns

`void`

***

### `setWidgetsLayout`

**setWidgetsLayout**: (`newLayout`) => `void`

API to set the layout of the widgets on the dashboard.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newLayout` | [`WidgetsPanelLayout`](type-alias.WidgetsPanelLayout.md) |

#### Returns

`void`

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

onditions**?: [`DataColorCondition`](type-alias.DataColorCondition.md)[]

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

# Type alias Coordinates

> **Coordinates**: `object`

## Type declaration

### `lat`

**lat**: `number`

***

### `lng`

**lng**: `number`

# Type alias CsvQueryErrorState

> **CsvQueryErrorState**: `object`

State of a query execution that has failed.

## Type declaration

### `data`

**data**: `undefined`

The result data if the query has succeeded

***

ryErrorState

> **CsvQueryErrorState**: `object`

State of a query execution that has failed.

## Type declaration

### `data`

**data**: `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"error"`

The status of the query execution

# Type alias CsvQueryLoadingState

> **CsvQueryLoadingState**: `object`

State of a query execution that is loading.

## Type declaration

### `data`

**data**: `Blob` \| `string` \| `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `true`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"loading"`

The status of the query execution

# Type alias CsvQueryState

> **CsvQueryState**: [`CsvQueryErrorState`](type-alias.CsvQueryErrorState.md) \| [`CsvQueryLoadingState`](type-alias.CsvQueryLoadingState.md) \| [`CsvQuerySuccessState`](type-alias.CsvQuerySuccessState.md)

State of a query execution.

State`](type-alias.CsvQueryErrorState.md) \| [`CsvQueryLoadingState`](type-alias.CsvQueryLoadingState.md) \| [`CsvQuerySuccessState`](type-alias.CsvQuerySuccessState.md)

State of a query execution.

# Type alias CsvQuerySuccessState

> **CsvQuerySuccessState**: `object`

State of a query execution that has succeeded.

## Type declaration

### `data`

**data**: `Blob` \| `string`

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the query has succeeded

***

### `status`

**status**: `"success"`

The status of the query execution

# Type alias CustomDrilldownResult

> **CustomDrilldownResult**: `object`

Result of custom drilldown execution

User provides selected points and desired category to drilldown to
and receives set of filters to apply and new category to display

## Type declaration

### `breadcrumbsComponent`

**breadcrumbsComponent**?: `JSX.Element`

Breadcrumbs that only allow for selection slicing, clearing, & navigation

***

### `drilldownDimension`

**drilldownDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

New dimension that should replace the current dimension

***

ng, & navigation

***

### `drilldownDimension`

**drilldownDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

New dimension that should replace the current dimension

***

### `drilldownFilters`

**drilldownFilters**: `MembersFilter`[]

The drilldown filters that should be applied to the next drilldown

***

### `onContextMenu`

**onContextMenu**: (`menuPosition`) => `void`

Callback to open context menu

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `menuPosition` | [`MenuPosition`](type-alias.MenuPosition.md) |

#### Returns

`void`

***

### `onDataPointsSelected`

**onDataPointsSelected**: [`DataPointsEventHandler`](type-alias.DataPointsEventHandler.md)

Callback to provide next points to drilldown to

# Type alias CustomTranslationObject

> **CustomTranslationObject**: `object`

Custom translation object.

## Type declaration

### `language`

**language**: `string`

The language code of the translations.

***

### `namespace`

**namespace**?: `string`

The translation namespace (usually a package name in camelCase). It identifies the specific context in which the translation is being registered.
If not specified, the default value is `sdkUi`.

***

### `resources`

**resources**: [`NestedTranslationResources`](type-alias.NestedTranslationResources.md)

The translation resources.

registered.
If not specified, the default value is `sdkUi`.

***

### `resources`

**resources**: [`NestedTranslationResources`](type-alias.NestedTranslationResources.md)

The translation resources.

# Type alias CustomWidgetComponent`<Props>`

> **CustomWidgetComponent**: <`Props`> (`props`) => `ReactNode`

A user-defined custom widget component. This is can be specified when registering a
custom widget with `registerCustomWidget` from the `useCustomWidgets` hook.

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `Props` | [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md) | The props type for the custom widget component |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | `Props` |

## Returns

`ReactNode`

# Type alias CustomWidgetDataPoint`<T>`

> **CustomWidgetDataPoint**: <`T`> `T`

Represents a single data point in a custom widget.

This type is used to define the structure of a data point that is passed to event handlers
like `onDataPointClick`. It typically extends `AbstractDataPointWithEntries` to include
specific entries for categories, values, or other dimensions used in the widget.

t is passed to event handlers
like `onDataPointClick`. It typically extends `AbstractDataPointWithEntries` to include
specific entries for categories, values, or other dimensions used in the widget.

## Example

```typescript
interface MyWidgetDataPoint extends CustomWidgetDataPoint {
  entries: {
    category: DataPointEntry[];
    value: DataPointEntry[];
  };
}

const onDataPointClick = (point: MyWidgetDataPoint) => {
  console.log('Clicked category:', point.entries.category[0].value);
};
```

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `T` *extends* [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) |

# Type alias CustomWidgetDataPointContextMenuHandler`<T>`

> **CustomWidgetDataPointContextMenuHandler**: <`T`> (`point`, `nativeEvent`) => `void`

Generic event handler for custom widget data point context menu.

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `T` *extends* [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | The shape of the data point |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`CustomWidgetDataPoint`](type-alias.CustomWidgetDataPoint.md)\< `T` \> |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`CustomWidgetDataPoint`](type-alias.CustomWidgetDataPoint.md)\< `T` \> |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias CustomWidgetDataPointEventHandler`<T>`

> **CustomWidgetDataPointEventHandler**: <`T`> (`point`, `nativeEvent`) => `void`

Generic event handler for custom widget data point click.

## Example

```ts
const handleClick: CustomWidgetDataPointEventHandler<MyDataPoint> = (point, event) => {
  console.log('Clicked:', point.label, point.value);
};
```

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `T` *extends* [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | The shape of the data point |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`CustomWidgetDataPoint`](type-alias.CustomWidgetDataPoint.md)\< `T` \> |
| `nativeEvent` | `MouseEvent` \| `PointerEvent` |

## Returns

`void`

# Type alias CustomWidgetDataPointsEventHandler`<T>`

> **CustomWidgetDataPointsEventHandler**: <`T`> (`points`, `nativeEvent`) => `void`

Generic event handler for custom widget data points selection.

## Example

```ts
const handleSelect: CustomWidgetDataPointsEventHandler<MyDataPoint> = (points, event) => {
  console.log('Selected:', points.length, 'points');
};
```

idget data points selection.

## Example

```ts
const handleSelect: CustomWidgetDataPointsEventHandler<MyDataPoint> = (points, event) => {
  console.log('Selected:', points.length, 'points');
};
```

## Type parameters

| Parameter | Default | Description |
| :------ | :------ | :------ |
| `T` *extends* [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | [`AbstractDataPointWithEntries`](type-alias.AbstractDataPointWithEntries.md) | The shape of the data point |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`CustomWidgetDataPoint`](type-alias.CustomWidgetDataPoint.md)\< `T` \>[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias CustomWidgetQueryState

> **CustomWidgetQueryState**: [`QueryState`](type-alias.QueryState.md)

State of a query execution retrieving data of a custom widget.

# Type alias CustomWidgetStyleOptions

> **CustomWidgetStyleOptions**: [`WidgetContainerStyleOptions`](../interfaces/interface.WidgetContainerStyleOptions.md) & `Record`\< `string`, `unknown` \> & \{
  `height`: `number`;
  `width`: `number`;
 }

Style settings defining the look and feel of CustomWidget

> ## `CustomWidgetStyleOptions.height`
>
> **height**?: `number`
>
> The height of the custom widget component.
>
> ## `CustomWidgetStyleOptions.width`
>
> **width**?: `number`
>
> The width of the custom widget component.
>
>

ns.height`
>
> **height**?: `number`
>
> The height of the custom widget component.
>
> ## `CustomWidgetStyleOptions.width`
>
> **width**?: `number`
>
> The width of the custom widget component.
>
>

# Type alias DashStyle

> **DashStyle**: `"Dash"` \| `"DashDot"` \| `"Dot"` \| `"LongDash"` \| `"LongDashDot"` \| `"LongDashDotDot"` \| `"ShortDash"` \| `"ShortDashDot"` \| `"ShortDashDotDot"` \| `"ShortDot"` \| `"Solid"`

Configuration that defines line dash type

# Type alias DashboardChangeEvent

> **DashboardChangeEvent**: [`DashboardFiltersPanelCollapseChangedEvent`](../interfaces/interface.DashboardFiltersPanelCollapseChangedEvent.md) \| [`DashboardFiltersUpdatedEvent`](../interfaces/interface.DashboardFiltersUpdatedEvent.md) \| [`DashboardWidgetsDeletedEvent`](../interfaces/interface.DashboardWidgetsDeletedEvent.md) \| [`DashboardWidgetsPanelIsEditingChangedEvent`](../interfaces/interface.DashboardWidgetsPanelIsEditingChangedEvent.md) \| [`DashboardWidgetsPanelLayoutUpdatedEvent`](../interfaces/interface.DashboardWidgetsPanelLayoutUpdatedEvent.md)

Events that can be triggered by the Dashboard component

## Example

Example of a filters update event:

```ts
{ type: 'filters/updated', payload: filters }
```

# Type alias DashboardModelErrorState

> **DashboardModelErrorState**: `object`

State of a dashboard model load that has failed.

## Type declaration

### `dashboard`

**dashboard**: `undefined`

The result dashboard model if the load has succeeded

***

lErrorState**: `object`

State of a dashboard model load that has failed.

## Type declaration

### `dashboard`

**dashboard**: `undefined`

The result dashboard model if the load has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the dashboard model load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dashboard model is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard model load has succeeded

***

### `status`

**status**: `"error"`

The status of the dashboard model load

# Type alias DashboardModelLoadingState

> **DashboardModelLoadingState**: `object`

State of a dashboard model loading.

## Type declaration

### `dashboard`

**dashboard**: [`DashboardModel`](../fusion-assets/interface.DashboardModel.md) \| `undefined`

The result dashboard model if the load has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the dashboard model load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the dashboard model is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard model load has succeeded

***

### `status`

**status**: `"loading"`

The status of the dashboard model load

ard model is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard model load has succeeded

***

### `status`

**status**: `"loading"`

The status of the dashboard model load

# Type alias DashboardModelState

> **DashboardModelState**: [`DashboardModelErrorState`](type-alias.DashboardModelErrorState.md) \| [`DashboardModelLoadingState`](type-alias.DashboardModelLoadingState.md) \| [`DashboardModelSuccessState`](type-alias.DashboardModelSuccessState.md)

States of a dashboard model load.

# Type alias DashboardModelSuccessState

> **DashboardModelSuccessState**: `object`

State of a dashboard model load that has succeeded.

## Type declaration

### `dashboard`

**dashboard**: [`DashboardModel`](../fusion-assets/interface.DashboardModel.md)

The result dashboard model if the load has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the dashboard model load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dashboard model is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the dashboard model load has succeeded

***

### `status`

**status**: `"success"`

The status of the dashboard model load

# Type alias DashboardModelsErrorState

> **DashboardModelsErrorState**: `object`

State of a dashboard models load that has failed.

## Type declaration

s"`

The status of the dashboard model load

# Type alias DashboardModelsErrorState

> **DashboardModelsErrorState**: `object`

State of a dashboard models load that has failed.

## Type declaration

### `dashboards`

**dashboards**: `undefined`

The result dashboard models if the load has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the dashboard models load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dashboard models is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard models load has succeeded

***

### `status`

**status**: `"error"`

The status of the dashboard models load

# Type alias DashboardModelsLoadingState

> **DashboardModelsLoadingState**: `object`

State of a dashboard models loading.

## Type declaration

### `dashboards`

**dashboards**: [`DashboardModel`](../fusion-assets/interface.DashboardModel.md)[] \| `undefined`

The result dashboard models if the load has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the dashboard models load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the dashboard models is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard models load has succeeded

***

### `status`

**status**: `"loading"`

The status of the dashboard models load

models is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dashboard models load has succeeded

***

### `status`

**status**: `"loading"`

The status of the dashboard models load

# Type alias DashboardModelsState

> **DashboardModelsState**: [`DashboardModelsErrorState`](type-alias.DashboardModelsErrorState.md) \| [`DashboardModelsLoadingState`](type-alias.DashboardModelsLoadingState.md) \| [`DashboardModelsSuccessState`](type-alias.DashboardModelsSuccessState.md)

States of a dashboard models load.

# Type alias DashboardModelsSuccessState

> **DashboardModelsSuccessState**: `object`

State of a dashboard models load that has succeeded.

## Type declaration

### `dashboards`

**dashboards**: [`DashboardModel`](../fusion-assets/interface.DashboardModel.md)[]

The result dashboard models if the load has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the dashboard models load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dashboard models is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the dashboard models load has succeeded

***

### `status`

**status**: `"success"`

The status of the dashboard models load

# Type alias DashboardStyleOptions

> **DashboardStyleOptions**: `object`

Style options for the dashboard.

## Type declaration

### `backgroundColor`

**backgroundColor**?: `string`

Background color

***

lias DashboardStyleOptions

> **DashboardStyleOptions**: `object`

Style options for the dashboard.

## Type declaration

### `backgroundColor`

**backgroundColor**?: `string`

Background color

***

### `dividerLineColor`

**dividerLineColor**?: `string`

Divider line color

***

### `dividerLineWidth`

**dividerLineWidth**?: `number`

Width of the divider line between widgets

***

### `palette`

**palette**?: [`ColorPaletteTheme`](type-alias.ColorPaletteTheme.md)

Collection of colors used to color various elements

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

### `operator`

**operator**: `"!="` \| `"<"` \| `"<="` \| `"="` \| `">"` \| `">="` \| `"≠"` \| `"≤"` \| `"≥"`

Supported operators for `expression`

# Type alias DataColorOptions

> **DataColorOptions**: [`ConditionalDataColorOptions`](type-alias.ConditionalDataColorOptions.md) \| [`RangeDataColorOptions`](type-alias.RangeDataColorOptions.md) \| [`UniformDataColorOptions`](type-alias.UniformDataColorOptions.md) \| `string`

All possible color options for data.

rOptions.md) \| [`RangeDataColorOptions`](type-alias.RangeDataColorOptions.md) \| [`UniformDataColorOptions`](type-alias.UniformDataColorOptions.md) \| `string`

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

### `dataOptionName`

**dataOptionName**: `"breakBy"` \| `"breakByColor"` \| `"breakByPoint"` \| `"category"` \| `"color"` \| `"colorBy"` \| `"columns"` \| `"date"` \| `"details"` \| `"geo"` \| `"max"` \| `"min"` \| `"outliers"` \| `"rows"` \| `"secondary"` \| `"size"` \| `"value"` \| `"values"` \| `"x"` \| `"y"`

Data option location name that identifies the property containing the data option.

Examples:
- PivotTable: `'rows'` | `'columns'` | `'values'`
- Cartesian charts: `'category'` | `'value'` | `'breakBy'`
- Scatter charts: `'x'` | `'y'` | `'breakByPoint'` | `'breakByColor'` | `'size'`

xamples:
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

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.breakBy`
>
> **breakBy**?: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `breakBy` data options
>
> #### `entries.category`
>
> **category**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `category` data options
>
> #### `entries.value`
>
> **value**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
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

` data options
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

# Type alias DataPointEntry

> **DataPointEntry**: [`AttributeDataPointEntry`](../interfaces/interface.AttributeDataPointEntry.md) \| [`BasicDataPointEntry`](../interfaces/interface.BasicDataPointEntry.md) \| [`MeasureDataPointEntry`](../interfaces/interface.MeasureDataPointEntry.md)

A data point entry that represents a single dimension within a multi-dimensional data point.

# Type alias DataPointEventHandler

> **DataPointEventHandler**: (`point`, `nativeEvent`) => `void`

A handler function that allows you to customize what happens when certain events occur to
a data point.

For an example of how the `DataPointEventHandler` function can be used, see the
[Compose SDK Charts Guide](/guides/sdk/guides/charts/guide-compose-sdk-charts.html#callbacks).

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`DataPoint`](type-alias.DataPoint.md) |
| `nativeEvent` | `PointerEvent` |

## Returns

`void`

# Type alias DataPointsEventHandler

> **DataPointsEventHandler**: (`points`, `nativeEvent`) => `void`

Click handler for when multiple data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`DataPoint`](type-alias.DataPoint.md)[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

iple data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`DataPoint`](type-alias.DataPoint.md)[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias DataSourceDimensionsErrorState

> **DataSourceDimensionsErrorState**: `object`

State of a data source dimensions load that has failed.

## Type declaration

### `dimensions`

**dimensions**: `undefined`

Dimensions, if the load succeeded

***

### `error`

**error**: `Error`

Error, if one occurred

***

### `isError`

**isError**: `true`

Whether the dimensions load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dimensions are loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dimensions load has succeeded

***

### `status`

**status**: `"error"`

Loading status

# Type alias DataSourceDimensionsLoadingState

> **DataSourceDimensionsLoadingState**: `object`

State of data source dimensions that is loading.

## Type declaration

### `dimensions`

**dimensions**: `undefined`

Dimensions, if the load succeeded

***

### `error`

**error**: `undefined`

Error, if one occurred

***

### `isError`

**isError**: `false`

Whether the dimensions load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the dimensions are loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dimensions load has succeeded

***

### `status`

**status**: `"loading"`

Loading status

ing**: `true`

Whether the dimensions are loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the dimensions load has succeeded

***

### `status`

**status**: `"loading"`

Loading status

# Type alias DataSourceDimensionsState

> **DataSourceDimensionsState**: [`DataSourceDimensionsErrorState`](type-alias.DataSourceDimensionsErrorState.md) \| [`DataSourceDimensionsLoadingState`](type-alias.DataSourceDimensionsLoadingState.md) \| [`DataSourceDimensionsSuccessState`](type-alias.DataSourceDimensionsSuccessState.md)

States of a data source dimensions load.

# Type alias DataSourceDimensionsSuccessState

> **DataSourceDimensionsSuccessState**: `object`

State of a data source dimensions load that has succeeded.

## Type declaration

### `dimensions`

**dimensions**: [`Dimension`](../../sdk-data/interfaces/interface.Dimension.md)[]

Dimensions, if the load succeeded

***

### `error`

**error**: `undefined`

Error, if one occurred

***

### `isError`

**isError**: `false`

Whether the dimensions load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the dimensions are loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the dimensions load has succeeded

***

### `status`

**status**: `"success"`

Loading status

# Type alias DateConfig

> **DateConfig**: `object`

Date configurations

## Type declaration

### `fiscalMonth`

**fiscalMonth**: [`MonthOfYear`](type-alias.MonthOfYear.md)

First month of the fiscal year that is configured

***

teConfig**: `object`

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

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](type-alias.HierarchyId.md))[]

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

**points**: [`ChartDataPoint`](type-alias.ChartDataPoint.md)[]

Points selected for drilldown

# Type alias DrilldownWidgetConfig

> **DrilldownWidgetConfig**: `object`

An object that allows users to pass advanced configuration options as a prop for the [DrilldownWidget](../drilldown/function.DrilldownWidget.md) component

## Type declaration

### `breadcrumbsComponent`

**breadcrumbsComponent**?: `ComponentType`\< [`DrilldownBreadcrumbsProps`](../interfaces/interface.DrilldownBreadcrumbsProps.md) \>

React component to be rendered as breadcrumbs

[DrilldownBreadcrumbs](../drilldown/function.DrilldownBreadcrumbs.md) will be used if not provided

***

ces/interface.DrilldownBreadcrumbsProps.md) \>

React component to be rendered as breadcrumbs

[DrilldownBreadcrumbs](../drilldown/function.DrilldownBreadcrumbs.md) will be used if not provided

***

### `contextMenuComponent`

**contextMenuComponent**?: (`contextMenuProps`) => `JSX.Element`

React component to be rendered as context menu

[ContextMenu](../drilldown/function.ContextMenu.md) will be used if not provided

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contextMenuProps` | [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md) |

#### Returns

`JSX.Element`

***

### `isBreadcrumbsDetached`

**isBreadcrumbsDetached**?: `boolean`

Boolean to override default breadcrumbs location and instead only return them as a property of the 'children' function

# Type alias EmptyObject

> **EmptyObject**: `Record`\< `string`, `never` \>

Empty object with no properties

# Type alias EndCapType

> **EndCapType**: `"Round"` \| `"Square"`

Configuration that defines line end cap type

# Type alias ExecuteCSVQueryConfig

> **ExecuteCSVQueryConfig**: `object`

Configuration for [useExecuteCsvQuery](../queries/function.useExecuteCsvQuery.md) hook.

## Type declaration

### `asDataStream`

**asDataStream**?: `boolean`

If set to true, the data will be returned as a Blob.

for [useExecuteCsvQuery](../queries/function.useExecuteCsvQuery.md) hook.

## Type declaration

### `asDataStream`

**asDataStream**?: `boolean`

If set to true, the data will be returned as a Blob.

# Type alias ExecuteQueryResult

> **ExecuteQueryResult**: [`QueryState`](type-alias.QueryState.md) & \{
  `refetch`: () => `void`;
 }

Result of a query execution.

> ## `ExecuteQueryResult.refetch`
>
> **refetch**: () => `void`
>
> Function to refetch the query
>
> ### Returns
>
> `void`
>
>
>
>

# Type alias FilterMembersState

> **FilterMembersState**: [`FilterMembersErrorState`](../interfaces/interface.FilterMembersErrorState.md) \| [`FilterMembersLoadingState`](../interfaces/interface.FilterMembersLoadingState.md) \| [`FilterMembersSuccessState`](../interfaces/interface.FilterMembersSuccessState.md)

States of the [useGetFilterMembers](../filter-tiles/function.useGetFilterMembers.md) hook.

# Type alias FilterThemeSettings

> **FilterThemeSettings**: `object`

Filter theme settings

## Type declaration

### `panel`

**panel**: `object`

> #### `panel.backgroundColor`
>
> **backgroundColor**?: `string`
>
> Background color
>
> #### `panel.dividerLineColor`
>
> **dividerLineColor**?: `string`
>
> Divider line color for the filter panel
>
> #### `panel.dividerLineWidth`
>
> **dividerLineWidth**?: `number`
>
> Divider line width for the filter panel
>
> #### `panel.titleColor`
>
> **titleColor**?: `string`
>
> Title color
>
>

panel
>
> #### `panel.dividerLineWidth`
>
> **dividerLineWidth**?: `number`
>
> Divider line width for the filter panel
>
> #### `panel.titleColor`
>
> **titleColor**?: `string`
>
> Title color
>
>

# Type alias FilterVariant

> **FilterVariant**: `"horizontal"` \| `"vertical"`

Orientation options for the filter tile. The filter tile can
be arranged vertically, or horizontally to fit most toolbars.

# Type alias FiltersIgnoringRules

> **FiltersIgnoringRules**: `object`

Filters ignoring rules.

## Type declaration

### `all`

**all**?: `boolean`

Boolean flag whether to ignore all filters.

If not specified, the default value is `false`.

***

### `ids`

**ids**?: `string`[]

Filter GUIDs to ignore.

# Type alias GenericDataOptions

> **GenericDataOptions**: `Record`\< `string`, ([`StyledColumn`](../interfaces/interface.StyledColumn.md) \| [`StyledMeasureColumn`](../interfaces/interface.StyledMeasureColumn.md))[] \>

Data options with arbitrary keys. This is typically used in the context of a custom widget.

# Type alias GeoDataElement

> **GeoDataElement**: [`RawGeoDataElement`](type-alias.RawGeoDataElement.md) & \{
  `color`: [`Color`](type-alias.Color.md);
 }

GeoDataElement with color property, calculated from `originalValue`

> ## `GeoDataElement.color`
>
> **color**?: [`Color`](type-alias.Color.md)
>
> Calculated color for this geo-element
>
>

md);
 }

GeoDataElement with color property, calculated from `originalValue`

> ## `GeoDataElement.color`
>
> **color**?: [`Color`](type-alias.Color.md)
>
> Calculated color for this geo-element
>
>

# Type alias GetFilterMembersResult

> **GetFilterMembersResult**: [`FilterMembersState`](type-alias.FilterMembersState.md) & \{}

Result of the [useGetFilterMembers](../filter-tiles/function.useGetFilterMembers.md) hook.

# Type alias GradientColor

> **GradientColor**: [`LinearGradientColor`](../interfaces/interface.LinearGradientColor.md) \| [`RadialGradientColor`](../interfaces/interface.RadialGradientColor.md)

Enhanced gradient color options that provide better type safety and developer experience.

This is a discriminated union that allows for either linear or radial gradients,
with comprehensive type checking and better IntelliSense support.

## Example

```ts
// Linear gradient example
const linearGradient: GradientColor = {
  type: 'linear',
  direction: { x1: 0, y1: 0, x2: 0, y2: 1 },
  stops: [
    { position: 0, color: '#003399' },
    { position: 0.5, color: '#ffffff' },
    { position: 1, color: '#3366AA' }
  ]
};

// Radial gradient example
const radialGradient: GradientColor = {
  type: 'radial',
  center: { centerX: 0.5, centerY: 0.5, radius: 0.8 },
  stops: [
    { position: 0, color: '#ff0000' },
    { position: 1, color: '#0000ff' }
  ]
};
```

radient: GradientColor = {
  type: 'radial',
  center: { centerX: 0.5, centerY: 0.5, radius: 0.8 },
  stops: [
    { position: 0, color: '#ff0000' },
    { position: 1, color: '#0000ff' }
  ]
};
```

# Type alias GradientPosition

> **GradientPosition**: `number`

A position value for gradient stops, ranging from 0 (start) to 1 (end).

# Type alias HierarchyId

> **HierarchyId**: `string`

A unique identifier representing a hierarchy.

# Type alias HierarchyModelsErrorState

> **HierarchyModelsErrorState**: `object`

State of a hierarchy models load that has failed.

## Type declaration

### `error`

**error**: `Error`

Error, if one occurred

***

### `hierarchies`

**hierarchies**: `undefined`

Hierarchy models, if the load succeeded

***

### `isError`

**isError**: `true`

Whether the hierarchy models load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the hierarchy models is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the hierarchy models load has succeeded

***

### `status`

**status**: `"error"`

Loading status

# Type alias HierarchyModelsLoadingState

> **HierarchyModelsLoadingState**: `object`

State of hierarchy models that is loading.

## Type declaration

### `error`

**error**: `undefined`

Error, if one occurred

***

### `hierarchies`

**hierarchies**: [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[] \| `undefined`

Hierarchy models, if the load succeeded

***

efined`

Error, if one occurred

***

### `hierarchies`

**hierarchies**: [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[] \| `undefined`

Hierarchy models, if the load succeeded

***

### `isError`

**isError**: `false`

Whether the hierarchy models load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the hierarchy models is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the hierarchy models load has succeeded

***

### `status`

**status**: `"loading"`

Loading status

# Type alias HierarchyModelsState

> **HierarchyModelsState**: [`HierarchyModelsErrorState`](type-alias.HierarchyModelsErrorState.md) \| [`HierarchyModelsLoadingState`](type-alias.HierarchyModelsLoadingState.md) \| [`HierarchyModelsSuccessState`](type-alias.HierarchyModelsSuccessState.md)

States of hierarchy models load.

# Type alias HierarchyModelsSuccessState

> **HierarchyModelsSuccessState**: `object`

State of a hierarchy models load that has succeeded.

## Type declaration

### `error`

**error**: `undefined`

Error, if one occurred

***

### `hierarchies`

**hierarchies**: [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[]

Hierarchy models, if the load succeeded

***

### `isError`

**isError**: `false`

Whether the hierarchy models load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the hierarchy models is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the hierarchy models load has succeeded

***

d has failed

***

### `isLoading`

**isLoading**: `false`

Whether the hierarchy models is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the hierarchy models load has succeeded

***

### `status`

**status**: `"success"`

Loading status

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

# Type alias IndicatorDataPoint

> **IndicatorDataPoint**: `object`

Data point that represents the entire Indicator chart data.

## Type declaration

text**?: `string`
>
> The text of the title
>
>

# Type alias IndicatorDataPoint

> **IndicatorDataPoint**: `object`

Data point that represents the entire Indicator chart data.

## Type declaration

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.max`
>
> **max**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `max` data options
>
> #### `entries.min`
>
> **min**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `min` data options
>
> #### `entries.secondary`
>
> **secondary**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `secondary` data options
>
> #### `entries.value`
>
> **value**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `value` data options
>
>

# Type alias IndicatorDataPointEventHandler

> **IndicatorDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when an indicator chart is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`IndicatorDataPoint`](type-alias.IndicatorDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias IndicatorRenderOptions

> **IndicatorRenderOptions**: `object`

Indicator render options.

## Type declaration

catorDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

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

omponent, which is considered in the following order of priority:
>
> 1. Value passed to this property (in pixels)
> 2. Width of the container wrapping this component
> 3. Default value of 200px
>
>

# Type alias JtdTarget

> **JtdTarget**: \{
  `caption`: `string`;
  `id`: `string`;
 } \| \{
  `caption`: `string`;
  `dashboard`: [`DashboardProps`](../interfaces/interface.DashboardProps.md);
 }

Target dashboard for Jump To Dashboard functionality.
Supports both dashboard ID reference and in-code dashboard object.

## See

 - JumpToDashboardConfig
 - DashboardProps

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

> **Legend**: [`LegendOptions`](type-alias.LegendOptions.md)

Alias for LegendOptions for backward compatibility

::: warning Deprecated
Please use [LegendOptions](type-alias.LegendOptions.md) instead
:::

gend**: [`LegendOptions`](type-alias.LegendOptions.md)

Alias for LegendOptions for backward compatibility

::: warning Deprecated
Please use [LegendOptions](type-alias.LegendOptions.md) instead
:::

# Type alias LegendOptions

> **LegendOptions**: `object`

Options that define legend - a key that provides information about the data series or colors used in chart.

## Type declaration

### `align`

**align**?: `"center"` \| `"left"` \| `"right"`

Horizontal alignment of the legend

***

### `backgroundColor`

**backgroundColor**?: [`GradientColor`](type-alias.GradientColor.md) \| `string`

Background color of the legend

***

### `borderColor`

**borderColor**?: [`GradientColor`](type-alias.GradientColor.md) \| `string`

Color of the legend border

***

### `borderRadius`

**borderRadius**?: `number`

Border radius in pixels applied to the legend border, if visible.

#### Default

```ts
0
```

***

### `borderWidth`

**borderWidth**?: `number`

Width of the legend border in pixels

***

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if legend should be shown on the chart

***

### `floating`

**floating**?: `boolean`

If `true`, the legend can float over the chart.

#### Default

```ts
false
```

***

### `items`

**items**?: [`LegendItemsOptions`](../interfaces/interface.LegendItemsOptions.md)

Configuration for legend items

***

### `margin`

**margin**?: `number`

Margin in pixels between the legend and the axis labels or plot area

***

`](../interfaces/interface.LegendItemsOptions.md)

Configuration for legend items

***

### `margin`

**margin**?: `number`

Margin in pixels between the legend and the axis labels or plot area

***

### `maxHeight`

**maxHeight**?: `number`

Maximum height of the legend in pixels.
When the maximum height is exceeded by the number of items in the legend, scroll navigation arrows will appear

***

### `padding`

**padding**?: `number`

Padding inside the legend, in pixels

***

### `position`

**position**?: [`LegendPosition`](type-alias.LegendPosition.md)

Position of the legend

::: warning Deprecated
Please use `align`, `verticalAlign` and `items.layout` properties instead
:::

***

### `reversed`

**reversed**?: `boolean`

If `true`, the order of legend items is reversed.

#### Default

```ts
false
```

***

### `rtl`

**rtl**?: `boolean`

If `true`, legend items are displayed right-to-left.

#### Default

```ts
false
```

***

### `shadow`

**shadow**?: `boolean`

Whether to show shadow on the legend

***

### `symbols`

**symbols**?: [`LegendSymbolsOptions`](../interfaces/interface.LegendSymbolsOptions.md)

Configuration for legend symbols in pixels

***

### `title`

**title**?: [`LegendTitleOptions`](../interfaces/interface.LegendTitleOptions.md)

Configuration for the legend title

***

### `verticalAlign`

**verticalAlign**?: `"bottom"` \| `"middle"` \| `"top"`

Vertical alignment of the legend

***

erfaces/interface.LegendTitleOptions.md)

Configuration for the legend title

***

### `verticalAlign`

**verticalAlign**?: `"bottom"` \| `"middle"` \| `"top"`

Vertical alignment of the legend

***

### `width`

**width**?: `number` \| `string`

Width of the legend, specified in pixels e.g. `200` or percentage of the chart width e.g. `'30%'`

***

### `xOffset`

**xOffset**?: `number`

Horizontal offset of the legend in pixels, relative to its horizontal alignment specified via `align`.

#### Default

```ts
0
```

***

### `yOffset`

**yOffset**?: `number`

Vertical offset of the legend in pixels, relative to its vertical alignment specified via `verticalAlign`.

#### Default

```ts
0
```

# Type alias LegendPosition

> **LegendPosition**: `"bottom"` \| `"left"` \| `"right"` \| `"top"` \| `null`

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

### `endCap`

**endCap**?: [`EndCapType`](type-alias.EndCapType.md)

Style of the line end caps.

Controls how the ends of lines are rendered:
- `'Round'`: Rounded ends for a softer appearance
- `'Square'`: Sharp, flat ends for a crisp appearance

***

EndCapType.md)

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

# Type alias LoadingIndicatorConfig

> **LoadingIndicatorConfig**: `object`

A config that defines the behavior of the loading indicator

## Type declaration

### `delay`

**delay**?: `number`

Delay in milliseconds before the loading indicator is shown

***

### `enabled`

**enabled**?: `boolean`

Boolean flag that defines if the loading indicator should be shown

# Type alias LoadingOverlayProps

> **LoadingOverlayProps**: `object`

Loading overlay props.

## Type declaration

**?: `boolean`

Boolean flag that defines if the loading indicator should be shown

# Type alias LoadingOverlayProps

> **LoadingOverlayProps**: `object`

Loading overlay props.

## Type declaration

### `children`

**children**?: `ReactNode`

Child component to wrap in the overlay.

***

### `isVisible`

**isVisible**?: `boolean`

Visibility of the overlay (does not work if loading indicator is disabled in app config).

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

# Type alias MenuItemSection

> **MenuItemSection**: `object`

Context menu section
Used in [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md)

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

# Type alias MenuPosition

> **MenuPosition**: `object`

Context menu position coordinates
Used in [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md)

## Type declaration

### `left`

**left**: `number`

Horizontal position

***

: `object`

Context menu position coordinates
Used in [`ContextMenuProps`](../interfaces/interface.ContextMenuProps.md)

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

# Type alias NestedTranslationResources

> **NestedTranslationResources**: `object`

Translation resources with nested structure.

## Index signature

 \[`key`: `string`\]: [`NestedTranslationResources`](type-alias.NestedTranslationResources.md) \| `string`

ionResources**: `object`

Translation resources with nested structure.

## Index signature

 \[`key`: `string`\]: [`NestedTranslationResources`](type-alias.NestedTranslationResources.md) \| `string`

# Type alias NlqResult

> **NlqResult**: `Omit`\< [`NlqResponseData`](../interfaces/interface.NlqResponseData.md), `"followupQuestions"` \>

# Type alias NlqResultChartType

> **NlqResultChartType**: `"bar" | "column" | "indicator" | "line" | "pie" | "table"`

NLQ result chart types

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

### `thousandSeparator`

**thousandSeparator**?: `boolean`

Boolean flag whether the thousand separator is shown

If true, show the thousand separator, e.g. `1,000`. Otherwise, show `1000`

***

### `trillion`

**trillion**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one trillion - e.g. 1T

# Type alias PiePercentageLabels

> **PiePercentageLabels**: `object`

Configuration for percentage labels
Percentage labels are shown on top of series slices

## Type declaration

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if percentage label should be shown

***

### `showDecimals`

**showDecimals**?: `boolean`

Boolean flag that defines if percentage label should be shown with decimals

an`

Boolean flag that defines if percentage label should be shown

***

### `showDecimals`

**showDecimals**?: `boolean`

Boolean flag that defines if percentage label should be shown with decimals

# Type alias PieSeriesLabels

> **PieSeriesLabels**: [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & \{
  `percentageLabels`: [`PiePercentageLabels`](type-alias.PiePercentageLabels.md);
  `showCategory`: `boolean`;
  `showValue`: `boolean`;
  `textStyle`: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"pointerEvents"` \| `"textOverflow"` \>;
 }

> ## `PieSeriesLabels.percentageLabels`
>
> **percentageLabels**?: [`PiePercentageLabels`](type-alias.PiePercentageLabels.md)
>
> Configuration for percentage labels
> Percentage labels are shown on top of series slices
> Styling from series labels are not applied to percentage labels
>
> ## `PieSeriesLabels.showCategory`
>
> **showCategory**?: `boolean`
>
> Boolean flag that defines if the category should be shown
>
> ### Default
>
> `true`
>
> ## `PieSeriesLabels.showValue`
>
> **showValue**?: `boolean`
>
> Boolean flag that defines if value should be shown in series labels
> (if not specified, default is determined by chart type)
>
> ## `PieSeriesLabels.textStyle`
>
> **textStyle**?: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"pointerEvents"` \| `"textOverflow"` \>
>
> Styling for labels text
>
>

rmined by chart type)
>
> ## `PieSeriesLabels.textStyle`
>
> **textStyle**?: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"pointerEvents"` \| `"textOverflow"` \>
>
> Styling for labels text
>
>

# Type alias PieSubtype

> **PieSubtype**: `"pie/classic"` \| `"pie/donut"` \| `"pie/ring"`

Property of [PieStyleOptions](../interfaces/interface.PieStyleOptions.md)

Subtype of PieChart

**Values**

- `pie/classic` - a circle divided into a series of segments where each segment represents a particular category.
- `pie/donut` - a circle divided into a series of segments where each segment represents a particular category with its center cut out to look like a donut.
- `pie/ring` - a circle divided into a series of segments where each segment represents a particular category with its center cut out to look like a ring.

# Type alias PivotQueryErrorState

> **PivotQueryErrorState**: `object`

State of a query execution that has failed.

## Type declaration

### `data`

**data**: `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"error"`

The status of the query execution

g**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"error"`

The status of the query execution

# Type alias PivotQueryLoadingState

> **PivotQueryLoadingState**: `object`

State of a query execution that is loading.

## Type declaration

### `data`

**data**: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md) \| `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `true`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"loading"`

The status of the query execution

# Type alias PivotQueryState

> **PivotQueryState**: [`PivotQueryErrorState`](type-alias.PivotQueryErrorState.md) \| [`PivotQueryLoadingState`](type-alias.PivotQueryLoadingState.md) \| [`PivotQuerySuccessState`](type-alias.PivotQuerySuccessState.md)

State of a pivot query execution.

# Type alias PivotQuerySuccessState

> **PivotQuerySuccessState**: `object`

State of a query execution that has succeeded.

## Type declaration

### `data`

**data**: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md)

The result data if the query has succeeded

***

that has succeeded.

## Type declaration

### `data`

**data**: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md)

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the query has succeeded

***

### `status`

**status**: `"success"`

The status of the query execution

# Type alias PivotRowsSort

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

values of "Female" (for Gender) and "0-18" (for AgeRange):
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

# Type alias PivotTableDataPoint

> **PivotTableDataPoint**: `object`

Data point in a PivotTable.

## Type declaration

### `entries`

**entries**: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.columns`
>
> **columns**?: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `columns` data options
>
> #### `entries.rows`
>
> **rows**?: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `rows` data options
>
> #### `entries.values`
>
> **values**?: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `values` data options
>
>

***

point entries for the `rows` data options
>
> #### `entries.values`
>
> **values**?: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `values` data options
>
>

***

### `isCaptionCell`

**isCaptionCell**: `boolean`

Boolean flag that defines if the data point is a caption cell

***

### `isDataCell`

**isDataCell**: `boolean`

Boolean flag that defines if the data point is a data cell

***

### `isTotalCell`

**isTotalCell**: `boolean`

Boolean flag that defines if the data point is a total cell (subtotal or grandtotal)

# Type alias PivotTableDataPointEventHandler

> **PivotTableDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a pivot table cell is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`PivotTableDataPoint`](type-alias.PivotTableDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

# Type alias PivotTableDrilldownOptions

> **PivotTableDrilldownOptions**: [`PivotTableNonSelectableDrilldownOptions`](type-alias.PivotTableNonSelectableDrilldownOptions.md) \| [`PivotTableSelectableDrilldownOptions`](type-alias.PivotTableSelectableDrilldownOptions.md)

Configuration for the pivot table drilldown

# Type alias PivotTableNonSelectableDrilldownOptions

> **PivotTableNonSelectableDrilldownOptions**: `object`

Configuration for the pivot table drilldown without initial target and selections

## Type declaration

votTableNonSelectableDrilldownOptions

> **PivotTableNonSelectableDrilldownOptions**: `object`

Configuration for the pivot table drilldown without initial target and selections

## Type declaration

### `drilldownPaths`

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](type-alias.HierarchyId.md))[]

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

### `drilldownPaths`

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](type-alias.HierarchyId.md))[]

Dimensions and hierarchies available for drilldown on

***

### `drilldownSelections`

**drilldownSelections**: [`DrilldownSelection`](type-alias.DrilldownSelection.md)[]

Current selections for multiple drilldowns

***

chies available for drilldown on

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

# Type alias PivotTableWidgetStyleOptions

> **PivotTableWidgetStyleOptions**: [`PivotTableStyleOptions`](../interfaces/interface.PivotTableStyleOptions.md) & [`WidgetContainerStyleOptions`](../interfaces/interface.WidgetContainerStyleOptions.md)

Style settings defining the look and feel of PivotTableWidget

# Type alias PolarSubtype

> **PolarSubtype**: `"polar/area"` \| `"polar/column"` \| `"polar/line"`

Property of [PolarStyleOptions](../interfaces/interface.PolarStyleOptions.md)

Subtype of PolarChart

**Values**

- `polar/column` - a chart where data points are displayed using the angle and distance from the center point.
- `polar/area` - a chart in which the data points are connected by a line with the area below the line filled.
- `polar/line` -  a chart in which the data points are connected by a line.

nter point.
- `polar/area` - a chart in which the data points are connected by a line with the area below the line filled.
- `polar/line` -  a chart in which the data points are connected by a line.

# Type alias QueryByWidgetIdQueryParams

> **QueryByWidgetIdQueryParams**: `object`

Query parameters constructed over either a chart widget or pivot table widget. This is returned as part of the query state [QueryByWidgetIdState](type-alias.QueryByWidgetIdState.md).

## Type declaration

### `pivotQuery`

**pivotQuery**: [`ExecutePivotQueryParams`](../interfaces/interface.ExecutePivotQueryParams.md) \| `undefined`

Query parameters constructed over the pivot table widget

***

### `query`

**query**: [`ExecuteQueryParams`](../interfaces/interface.ExecuteQueryParams.md) \| `undefined`

Query parameters constructed over the chart widget

# Type alias QueryByWidgetIdState

> **QueryByWidgetIdState**: [`QueryState`](type-alias.QueryState.md) & [`QueryByWidgetIdQueryParams`](type-alias.QueryByWidgetIdQueryParams.md)

State of a query execution retrieving data of Fusion widget.

# Type alias QueryErrorState

> **QueryErrorState**: `object`

State of a query execution that has failed.

## Type declaration

### `data`

**data**: `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the query has failed

***

: `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `Error`

The error if any occurred

***

### `isError`

**isError**: `true`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"error"`

The status of the query execution

# Type alias QueryLoadingState

> **QueryLoadingState**: `object`

State of a query execution that is loading.

## Type declaration

### `data`

**data**: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md) \| `undefined`

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `true`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the query has succeeded

***

### `status`

**status**: `"loading"`

The status of the query execution

# Type alias QueryRecommendationResponse

> **QueryRecommendationResponse**: [`QueryRecommendation`](../interfaces/interface.QueryRecommendation.md)[]

# Type alias QueryState

> **QueryState**: [`QueryErrorState`](type-alias.QueryErrorState.md) \| [`QueryLoadingState`](type-alias.QueryLoadingState.md) \| [`QuerySuccessState`](type-alias.QuerySuccessState.md)

State of a query execution.

*: [`QueryErrorState`](type-alias.QueryErrorState.md) \| [`QueryLoadingState`](type-alias.QueryLoadingState.md) \| [`QuerySuccessState`](type-alias.QuerySuccessState.md)

State of a query execution.

# Type alias QuerySuccessState

> **QuerySuccessState**: `object`

State of a query execution that has succeeded.

## Type declaration

### `data`

**data**: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md)

The result data if the query has succeeded

***

### `error`

**error**: `undefined`

The error if any occurred

***

### `isError`

**isError**: `false`

Whether the query has failed

***

### `isLoading`

**isLoading**: `false`

Whether the query is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the query has succeeded

***

### `status`

**status**: `"success"`

The status of the query execution

# Type alias RadiusSizes

> **RadiusSizes**: `"Large"` \| `"Medium"` \| `"None"` \| `"Small"`

Possible sizes for border radius.

# Type alias RangeChartType

> **RangeChartType**: `"arearange"`

AreaRange chart types

Sizes

> **RadiusSizes**: `"Large"` \| `"Medium"` \| `"None"` \| `"Small"`

Possible sizes for border radius.

# Type alias RangeChartType

> **RangeChartType**: `"arearange"`

AreaRange chart types

# Type alias RangeDataColorOptions

> **RangeDataColorOptions**: `object`

Range color options for data similar to the Range option in the Sisense UI.

Use `minColor` and `maxColor` to define the start and end color of the range.
A color name (for example, `red`), or a hexadecimal value (for example, `#ff0000`) can be specified.

By default, the color range is set to match the minimum and maximum values of the data.
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

data

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

# Type alias RawGeoDataElement

> **RawGeoDataElement**: `object`

Raw GeoDataElement from data

## Type declaration

### `formattedOriginalValue`

**formattedOriginalValue**: `string`

Formatted measure value for this geo-element to display

***

### `geoName`

**geoName**: `string`

Name of geo-element (country or state)

***

### `originalValue`

**originalValue**: `number`

Original numeric measure value for this geo-element

display

***

### `geoName`

**geoName**: `string`

Name of geo-element (country or state)

***

### `originalValue`

**originalValue**: `number`

Original numeric measure value for this geo-element

# Type alias RegularChartDataOptions

> **RegularChartDataOptions**: [`AreamapChartDataOptions`](../interfaces/interface.AreamapChartDataOptions.md) \| [`BoxplotChartCustomDataOptions`](type-alias.BoxplotChartCustomDataOptions.md) \| [`BoxplotChartDataOptions`](type-alias.BoxplotChartDataOptions.md) \| [`CalendarHeatmapChartDataOptions`](../interfaces/interface.CalendarHeatmapChartDataOptions.md) \| [`CartesianChartDataOptions`](../interfaces/interface.CartesianChartDataOptions.md) \| [`CategoricalChartDataOptions`](../interfaces/interface.CategoricalChartDataOptions.md) \| [`IndicatorChartDataOptions`](../interfaces/interface.IndicatorChartDataOptions.md) \| [`RangeChartDataOptions`](../interfaces/interface.RangeChartDataOptions.md) \| [`ScatterChartDataOptions`](../interfaces/interface.ScatterChartDataOptions.md) \| [`ScattermapChartDataOptions`](../interfaces/interface.ScattermapChartDataOptions.md)

Configuration for how to query aggregate data and assigning data to chart encodings of regular charts.

s.md) \| [`ScattermapChartDataOptions`](../interfaces/interface.ScattermapChartDataOptions.md)

Configuration for how to query aggregate data and assigning data to chart encodings of regular charts.

# Type alias RegularChartStyleOptions

> **RegularChartStyleOptions**: [`AreaRangeStyleOptions`](../interfaces/interface.AreaRangeStyleOptions.md) \| [`AreaStyleOptions`](../interfaces/interface.AreaStyleOptions.md) \| [`AreamapStyleOptions`](../interfaces/interface.AreamapStyleOptions.md) \| [`BoxplotStyleOptions`](../interfaces/interface.BoxplotStyleOptions.md) \| [`CalendarHeatmapStyleOptions`](../interfaces/interface.CalendarHeatmapStyleOptions.md) \| [`FunnelStyleOptions`](../interfaces/interface.FunnelStyleOptions.md) \| [`IndicatorStyleOptions`](type-alias.IndicatorStyleOptions.md) \| [`LineStyleOptions`](../interfaces/interface.LineStyleOptions.md) \| [`PieStyleOptions`](../interfaces/interface.PieStyleOptions.md) \| [`PolarStyleOptions`](../interfaces/interface.PolarStyleOptions.md) \| [`ScatterStyleOptions`](../interfaces/interface.ScatterStyleOptions.md) \| [`ScattermapStyleOptions`](../interfaces/interface.ScattermapStyleOptions.md) \| [`StackableStyleOptions`](../interfaces/interface.StackableStyleOptions.md) \| [`StreamgraphStyleOptions`](../interfaces/interface.StreamgraphStyleOptions.md) \| [`SunburstStyleOptions`](../interfaces/interface.SunburstStyleOptions.md) \| [`TreemapStyleOptions`](../interfaces/interface.TreemapStyleOptions.md)

Style options for regular chart types

ons.md) \| [`SunburstStyleOptions`](../interfaces/interface.SunburstStyleOptions.md) \| [`TreemapStyleOptions`](../interfaces/interface.TreemapStyleOptions.md)

Style options for regular chart types

# Type alias RegularChartType

> **RegularChartType**: `Exclude`\< [`ChartType`](type-alias.ChartType.md), [`TableChartType`](type-alias.TableChartType.md) \>

Chart type of the regular charts

# Type alias RequestConfig

> **RequestConfig**: `object`

Additional request configuration options for the `useFetch` hook.

## Type declaration

### `nonJSONBody`

**nonJSONBody**?: `boolean`

Indicates that the request body is not a JSON object.

***

### `returnBlob`

**returnBlob**?: `boolean`

Indicates that the response should be treated as a Blob.

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
> **breakByColor**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `breakByColor` data options
>
> #### `entries.breakByPoint`
>
> **breakByPoint**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `breakByPoint` data options
>
> #### `entries.size`
>
> **size**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `size` data options
>
> #### `entries.x`
>
> **x**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `x` data options
>
> #### `entries.y`
>
> **y**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
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

# Type alias ScatterDataPointEventHandler

> **ScatterDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a scatter data point is clicked

tring`

Value of the y axis

# Type alias ScatterDataPointEventHandler

> **ScatterDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a scatter data point is clicked

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`ScatterDataPoint`](type-alias.ScatterDataPoint.md) |
| `nativeEvent` | `PointerEvent` |

## Returns

`void`

# Type alias ScatterDataPointsEventHandler

> **ScatterDataPointsEventHandler**: (`points`, `nativeEvent`) => `void`

Click handler for when multiple scatter data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `points` | [`ScatterDataPoint`](type-alias.ScatterDataPoint.md)[] |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

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

# Type alias ScatterSeriesLabels

> **ScatterSeriesLabels**: [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & [`SeriesLabelsAligning`](type-alias.SeriesLabelsAligning.md)

# Type alias ScattermapChartType

> **ScattermapChartType**: `"scattermap"`

Scattermap chart types

# Type alias ScattermapDataPoint

> **ScattermapDataPoint**: `object`

Data point in an Scattermap chart.

## Type declaration

ype

> **ScattermapChartType**: `"scattermap"`

Scattermap chart types

# Type alias ScattermapDataPoint

> **ScattermapDataPoint**: `object`

Data point in an Scattermap chart.

## Type declaration

### `categories`

**categories**: `string`[]

Array with categories strings used for location definition

***

### `coordinates`

**coordinates**: [`Coordinates`](type-alias.Coordinates.md)

Location coordinates

***

### `displayName`

**displayName**: `string`

Location name displayed on marker

***

### `entries`

**entries**?: `object`

A collection of data point entries that represents values for all related `dataOptions`.

> #### `entries.colorBy`
>
> **colorBy**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `colorBy` data options
>
> #### `entries.details`
>
> **details**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `details` data options
>
> #### `entries.geo`
>
> **geo**: [`DataPointEntry`](type-alias.DataPointEntry.md)[]
>
> Data point entries for the `geo` data options
>
> #### `entries.size`
>
> **size**?: [`DataPointEntry`](type-alias.DataPointEntry.md)
>
> Data point entry for the `size` data options
>
>

***

### `value`

**value**: `number`

Numeric measure value

# Type alias ScattermapDataPointEventHandler

> **ScattermapDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a data point on Scattermap is clicked.

measure value

# Type alias ScattermapDataPointEventHandler

> **ScattermapDataPointEventHandler**: (`point`, `nativeEvent`) => `void`

Click handler for when a data point on Scattermap is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | [`ScattermapDataPoint`](type-alias.ScattermapDataPoint.md) |
| `nativeEvent` | `MouseEvent` |

## Returns

`void`

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

> **SeriesLabels**: [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & [`SeriesLabelsAligning`](type-alias.SeriesLabelsAligning.md) & \{
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

# Type alias SeriesLabelsAligning

> **SeriesLabelsAligning**: `object`

## Type declaration

### `align`

**align**?: `"center"` \| `"left"` \| `"right"`

The horizontal alignment of the data label compared to the point

For some chart types, this will only apply when `alignInside` is `true`.

***

ign`

**align**?: `"center"` \| `"left"` \| `"right"`

The horizontal alignment of the data label compared to the point

For some chart types, this will only apply when `alignInside` is `true`.

***

### `alignInside`

**alignInside**?: `boolean`

If `true`, series labels appear inside bars/columns instead of at the datapoints. Not applicable for some chart types e.g. line, area

***

### `verticalAlign`

**verticalAlign**?: `"bottom"` \| `"middle"` \| `"top"`

The vertical alignment of the data label

For some chart types, this will only apply when `alignInside` is `true`.

# Type alias SeriesLabelsBase

> **SeriesLabelsBase**: `object`

## Type declaration

### `backgroundColor`

**backgroundColor**?: `"auto"` \| [`GradientColor`](type-alias.GradientColor.md) \| `string`

Background color of the labels. `auto` uses the same color as the data point

***

### `borderColor`

**borderColor**?: [`GradientColor`](type-alias.GradientColor.md) \| `string`

Color of the labels border

***

### `borderRadius`

**borderRadius**?: `number`

Border radius in pixels applied to the labels border, if visible

#### Default

```ts
0
```

***

### `borderWidth`

**borderWidth**?: `number`

Border width of the series labels, in pixels

***

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if series labels should be shown on the chart

***

### `padding`

**padding**?: `number`

Padding of the series labels, in pixels

***

# `enabled`

**enabled**: `boolean`

Boolean flag that defines if series labels should be shown on the chart

***

### `padding`

**padding**?: `number`

Padding of the series labels, in pixels

***

### `prefix`

**prefix**?: `string`

Text to be shown before the series labels

***

### `rotation`

**rotation**?: `number`

Rotation of series labels (in degrees)
Note that due to a more complex structure, backgrounds, borders and padding will be lost on a rotated data label

***

### `suffix`

**suffix**?: `string`

Text to be shown after the series labels

***

### `textStyle`

**textStyle**?: [`SeriesLabelsTextStyle`](type-alias.SeriesLabelsTextStyle.md)

Styling for labels text

***

### `xOffset`

**xOffset**?: `number`

Horizontal offset of the labels in pixels, relative to its horizontal alignment specified via `align`

#### Default

```ts
0
```

***

### `yOffset`

**yOffset**?: `number`

Vertical offset of the labels in pixels, relative to its vertical alignment specified via `verticalAlign`

#### Default

```ts
0
```

Default

```ts
0
```

***

### `yOffset`

**yOffset**?: `number`

Vertical offset of the labels in pixels, relative to its vertical alignment specified via `verticalAlign`

#### Default

```ts
0
```

# Type alias SeriesLabelsTextStyle

> **SeriesLabelsTextStyle**: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"color"` \| `"pointerEvents"` \| `"textOverflow"` \> & \{
  `color`: `"contrast"` \| `string`;
 }

> ## `SeriesLabelsTextStyle.color`
>
> **color**?: `"contrast"` \| `string`
>
> Color of the labels text
> The default color setting is "contrast", which applies the maximum contrast between the background and the text
>
> ### Default
>
> ```ts
> 'contrast'
> ```
>
>

# Type alias SeriesStyleOptions

> **SeriesStyleOptions**: `object`

Specific style options to be applied to specific series in Chart.
Supported only for cartesian and polar charts.

## Type declaration

### `lineWidth`

**lineWidth**?: [`LineWidth`](type-alias.LineWidth.md)

#### Inherit Doc

***

### `markers`

**markers**?: [`Markers`](type-alias.Markers.md)

#### Inherit Doc

# Type alias ShadowsTypes

> **ShadowsTypes**: `"Dark"` \| `"Light"` \| `"Medium"` \| `"None"`

Possible types of shadows.

# Type alias SharedFormulaErrorState

> **SharedFormulaErrorState**: `object`

State of a shared formula load that has failed.

## Type declaration

### `error`

**error**: `Error`

The error if any occurred

***

haredFormulaErrorState

> **SharedFormulaErrorState**: `object`

State of a shared formula load that has failed.

## Type declaration

### `error`

**error**: `Error`

The error if any occurred

***

### `formula`

**formula**: `undefined`

The result shared formula if the load has succeeded

***

### `isError`

**isError**: `true`

Whether the shared formula load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the shared formula is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the shared formula load has succeeded

***

### `status`

**status**: `"error"`

The status of the shared formula load

# Type alias SharedFormulaLoadingState

> **SharedFormulaLoadingState**: `object`

State of a shared formula loading.

## Type declaration

### `error`

**error**: `undefined`

The error if any occurred

***

### `formula`

**formula**: [`CalculatedMeasure`](../../sdk-data/interfaces/interface.CalculatedMeasure.md) \| `null`

The result shared formula if the load has succeeded

***

### `isError`

**isError**: `false`

Whether the shared formula load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the shared formula is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the shared formula load has succeeded

***

### `status`

**status**: `"loading"`

The status of the shared formula load

red formula is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the shared formula load has succeeded

***

### `status`

**status**: `"loading"`

The status of the shared formula load

# Type alias SharedFormulaState

> **SharedFormulaState**: [`SharedFormulaErrorState`](type-alias.SharedFormulaErrorState.md) \| [`SharedFormulaLoadingState`](type-alias.SharedFormulaLoadingState.md) \| [`SharedFormulaSuccessState`](type-alias.SharedFormulaSuccessState.md)

States of a shared formula load.

# Type alias SharedFormulaSuccessState

> **SharedFormulaSuccessState**: `object`

State of a shared formula load that has succeeded.

## Type declaration

### `error`

**error**: `undefined`

The error if any occurred

***

### `formula`

**formula**: [`CalculatedMeasure`](../../sdk-data/interfaces/interface.CalculatedMeasure.md) \| `null`

The result shared formula if the load has succeeded

***

### `isError`

**isError**: `false`

Whether the shared formula load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the shared formula is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the shared formula load has succeeded

***

### `status`

**status**: `"success"`

The status of the shared formula load

# Type alias SortDirection

> **SortDirection**: `"sortAsc"` \| `"sortDesc"` \| `"sortNone"`

Sorting direction, either in Ascending order, Descending order, or None

atus of the shared formula load

# Type alias SortDirection

> **SortDirection**: `"sortAsc"` \| `"sortDesc"` \| `"sortNone"`

Sorting direction, either in Ascending order, Descending order, or None

# Type alias SpaceSizes

> **SpaceSizes**: `"Large"` \| `"Medium"` \| `"None"` \| `"Small"`

Possible sizes for spacing.

# Type alias SpecificWidgetOptions

> **SpecificWidgetOptions**: `object`

Options for a specific widget

## Type declaration

### `filtersOptions`

**filtersOptions**?: [`CommonFiltersOptions`](type-alias.CommonFiltersOptions.md)

Options for common filters defined at the dashboard level to be applied to certain widgets.

***

### `jtdConfig`

**jtdConfig**?: [`JumpToDashboardConfig`](../interfaces/interface.JumpToDashboardConfig.md) \| [`JumpToDashboardConfigForPivot`](../interfaces/interface.JumpToDashboardConfigForPivot.md)

Jump To Dashboard config for widgets.

hboardConfig`](../interfaces/interface.JumpToDashboardConfig.md) \| [`JumpToDashboardConfigForPivot`](../interfaces/interface.JumpToDashboardConfigForPivot.md)

Jump To Dashboard config for widgets.

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

# Type alias SunburstSeriesLabels

> **SunburstSeriesLabels**: [`SunburstSeriesLabelsBase`](type-alias.SunburstSeriesLabelsBase.md) \| [`SunburstSeriesLabelsBase`](type-alias.SunburstSeriesLabelsBase.md)[]

alias SunburstSeriesLabels

> **SunburstSeriesLabels**: [`SunburstSeriesLabelsBase`](type-alias.SunburstSeriesLabelsBase.md) \| [`SunburstSeriesLabelsBase`](type-alias.SunburstSeriesLabelsBase.md)[]

# Type alias SunburstSeriesLabelsBase

> **SunburstSeriesLabelsBase**: [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & \{
  `backgroundColor`: `string`;
  `borderColor`: `string`;
 }

> ## `SunburstSeriesLabelsBase.backgroundColor`
>
> **backgroundColor**?: `string`
>
> Background color of the labels.
>
> ## `SunburstSeriesLabelsBase.borderColor`
>
> **borderColor**?: `string`
>
> Color of the labels border
>
>

# Type alias TabberButtonsWidgetCustomOptions

> **TabberButtonsWidgetCustomOptions**: `object`

Custom options for the tabber buttons widget

## Type declaration

### `activeTab`

**activeTab**?: `number`

Index of the currently active tab (zero-based)

#### Default Value

```ts
0
```

***

### `tabNames`

**tabNames**: `string`[]

Array of tab names to display in the tabber buttons widget

# Type alias TabberButtonsWidgetStyleOptions

> **TabberButtonsWidgetStyleOptions**: `object`

Configuration options that define style of the various elements of the tabbers buttons widget.

## Type declaration

### `descriptionColor`

**descriptionColor**?: `string`

Color of the widget description text

***

### `selectedBackgroundColor`

**selectedBackgroundColor**?: `string`

Background color of the selected tab

***

onColor`

**descriptionColor**?: `string`

Color of the widget description text

***

### `selectedBackgroundColor`

**selectedBackgroundColor**?: `string`

Background color of the selected tab

***

### `selectedColor`

**selectedColor**?: `string`

Text color of the selected tab

***

### `showDescription`

**showDescription**?: `boolean`

Whether to display the widget description

#### Default Value

```ts
true
```

***

### `showSeparators`

**showSeparators**?: `boolean`

Whether to show visual separators between tabs

#### Default Value

```ts
true
```

***

### `tabCornerRadius`

**tabCornerRadius**?: `"large"` \| `"medium"` \| `"none"` \| `"small"`

Corner radius style for tabs

***

### `tabsAlignment`

**tabsAlignment**?: `"center"` \| `"left"` \| `"right"`

Horizontal alignment of tabs within the widget

***

### `tabsInterval`

**tabsInterval**?: `"large"` \| `"medium"` \| `"small"` \| `number`

Spacing interval between tabs.
Can be a predefined size ('small', 'medium', 'large') or a number (treated as pixels).

#### Default

```ts
'medium'
```

#### Example

```typescript
tabsInterval: 'small'
tabsInterval: 16  // treated as 16px
```

***

### `tabsSize`

**tabsSize**?: `"large"` \| `"medium"` \| `"small"` \| `number`

Size of the tabs.
Can be a predefined size ('small', 'medium', 'large') or a number (treated as pixels).

#### Default

```ts
'medium'
```

#### Example

```typescript
tabsSize: 'medium'
tabsSize: 14  // treated as 14px
```

***

defined size ('small', 'medium', 'large') or a number (treated as pixels).

#### Default

```ts
'medium'
```

#### Example

```typescript
tabsSize: 'medium'
tabsSize: 14  // treated as 14px
```

***

### `unselectedBackgroundColor`

**unselectedBackgroundColor**?: `string`

Background color of unselected tabs

***

### `unselectedColor`

**unselectedColor**?: `string`

Text color of unselected tabs

# Type alias TabberConfig

> **TabberConfig**: `object`

Configuration for a tabber widget.

## Type declaration

### `tabs`

**tabs**: [`TabberTabConfig`](type-alias.TabberTabConfig.md)[]

Tabs configuration for the tabber widget.

# Type alias TabberTabConfig

> **TabberTabConfig**: `object`

Configuration for a single tab in a tabber widget.

## Type declaration

### `displayWidgetIds`

**displayWidgetIds**: `string`[]

Widget IDs from the dashboard to display in the tab.

# Type alias TabbersConfig

> **TabbersConfig**: `Record`\< [`WidgetId`](type-alias.WidgetId.md), [`TabberConfig`](type-alias.TabberConfig.md) \>

Configuration for tabbers in a dashboard.
It includes separate configuration for each tabber.

# Type alias TableChartType

> **TableChartType**: `"table"`

Table chart types

# Type alias TableColorOptions

> **TableColorOptions**: `object`

Configuration for Table color options

## Type declaration

### `backgroundColor`

**backgroundColor**?: `string`

Color used for background fill

***

olorOptions

> **TableColorOptions**: `object`

Configuration for Table color options

## Type declaration

### `backgroundColor`

**backgroundColor**?: `string`

Color used for background fill

***

### `enabled`

**enabled**: `boolean`

Boolean flag whether to fill with color

***

### `textColor`

**textColor**?: `string`

Color used for text

# Type alias TableType

> **TableType**: `"table"`

Table chart types

# Type alias TabularChartDataOptions

> **TabularChartDataOptions**: [`TableDataOptions`](../interfaces/interface.TableDataOptions.md)

Configuration for how to query data and assign data to tabular charts.

# Type alias TabularChartStyleOptions

> **TabularChartStyleOptions**: [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md)

Configuration options that define functional style of the various elements of the tabular charts.

# Type alias TabularWidgetType

> **TabularWidgetType**: `"pivot"` \| `"pivot2"` \| `"tablewidget"` \| `"tablewidgetagg"`

The type of a widget on a dashboard that is a variant of tabular widget.

# Type alias TextStyle

> **TextStyle**: `object`

Style configuration for text elements in charts and UI components.
Defines the visual appearance and behavior of text rendering.

## Type declaration

### `color`

**color**?: `string`

Text color in any valid CSS color format.
Examples: '#FF0000', 'rgb(255, 0, 0)', 'red', 'rgba(255, 0, 0, 0.5)'

***

havior of text rendering.

## Type declaration

### `color`

**color**?: `string`

Text color in any valid CSS color format.
Examples: '#FF0000', 'rgb(255, 0, 0)', 'red', 'rgba(255, 0, 0, 0.5)'

***

### `fontFamily`

**fontFamily**?: `string`

Font family name for the text.
Examples: 'Arial', 'Helvetica', 'Times New Roman', 'sans-serif'

***

### `fontSize`

**fontSize**?: `string`

Font size in CSS units (px, em, rem, pt, etc.).
Examples: '12px', '1.2em', '16pt'

***

### `fontStyle`

**fontStyle**?: `string`

Font style for text rendering.
Examples: 'normal', 'italic', 'oblique'

***

### `fontWeight`

**fontWeight**?: `string`

Font weight for text rendering.
Examples: 'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'

***

### `pointerEvents`

**pointerEvents**?: `string`

CSS pointer-events property for text interaction.
Controls how the text responds to mouse events.
Examples: 'auto', 'none', 'visible', 'visibleFill', 'visibleStroke'

***

### `textOutline`

**textOutline**?: `string`

Text outline/stroke configuration.
Defines the outline color and width for text rendering.
Examples: '1px solid black', '2px #333'

***

### `textOverflow`

**textOverflow**?: `string`

Text overflow handling behavior.
Controls how text is displayed when it exceeds its container.
Examples: 'clip', 'ellipsis', 'visible', 'hidden'

***

### `textOverflow`

**textOverflow**?: `string`

Text overflow handling behavior.
Controls how text is displayed when it exceeds its container.
Examples: 'clip', 'ellipsis', 'visible', 'hidden'

# Type alias TextWidgetStyleOptions

> **TextWidgetStyleOptions**: `object`

Style settings defining the look and feel of TextWidget

## Type declaration

### `bgColor`

**bgColor**: `string`

***

### `html`

**html**: `string`

***

### `vAlign`

**vAlign**: \`valign-$\{"middle" \| "top" \| "bottom"}\`

# Type alias TextWidgetType

> **TextWidgetType**: `"richtexteditor"`

The type of a widget on a dashboard that is a variant of text widget.

# Type alias ThemeOid

> **ThemeOid**: `string`

Identifier of a theme as defined in the Sisense instance.

# Type alias ThemeProviderProps

> **ThemeProviderProps**: `PropsWithChildren`\< \{
  `theme`: [`ThemeOid`](type-alias.ThemeOid.md) \| [`ThemeSettings`](../interfaces/interface.ThemeSettings.md);
 } \>

Configurations for Theme.

Two options are supported:

(1) `ThemeSettings` -- Custom theme settings that override the default theme settings.

OR

(2) `ThemeOid` -- Theme identifier as defined in a Fusion instance (**Admin > App Configuration > Look and Feel**).
See [Customizing the Sisense User Interface](https://docs.sisense.com/main/SisenseLinux/customizing-the-sisense-user-interface.htm) for more details.

(**Admin > App Configuration > Look and Feel**).
See [Customizing the Sisense User Interface](https://docs.sisense.com/main/SisenseLinux/customizing-the-sisense-user-interface.htm) for more details.

# Type alias ThemeSettingsFontSource

> **ThemeSettingsFontSource**: \{
  `local`: `string`;
 } \| \{
  `url`: `string`;
 } \| \{
  `format`: `string`;
  `url`: `string`;
 }

# Type alias TotalLabels

> **TotalLabels**: `object`

Configuration options for total labels in stacked charts.

Total labels display the sum of all series values at each data point in stacked charts.
This configuration allows you to customize the appearance and positioning of these labels.

## Type declaration

### `align`

**align**?: `"center"` \| `"left"` \| `"right"`

The horizontal alignment of the total label compared to the point

***

### `backgroundColor`

**backgroundColor**?: `"auto"` \| [`GradientColor`](type-alias.GradientColor.md) \| `string`

Background color of the labels. `auto` uses the same color as the data point

***

### `borderColor`

**borderColor**?: [`GradientColor`](type-alias.GradientColor.md) \| `string`

Color of the labels border

***

### `borderRadius`

**borderRadius**?: `number`

Border radius in pixels applied to the labels border, if visible

#### Default

```ts
0
```

***

### `borderWidth`

**borderWidth**?: `number`

Border width of the series labels, in pixels

***

r`

Border radius in pixels applied to the labels border, if visible

#### Default

```ts
0
```

***

### `borderWidth`

**borderWidth**?: `number`

Border width of the series labels, in pixels

***

### `delay`

**delay**?: `number`

The animation delay time in milliseconds. Set to 0 to render the data labels immediately

***

### `enabled`

**enabled**: `boolean`

Boolean flag that defines if total labels should be shown on the chart
Total labels are only supported for stacked chart subtypes (Column, Bar, Area)

***

### `prefix`

**prefix**?: `string`

Text to be shown before the total label

***

### `rotation`

**rotation**?: `number`

Rotation of total labels (in degrees)

***

### `suffix`

**suffix**?: `string`

Text to be shown after the total label

***

### `textStyle`

**textStyle**?: [`TotalLabelsTextStyle`](type-alias.TotalLabelsTextStyle.md)

Styling for labels text

***

### `verticalAlign`

**verticalAlign**?: `"bottom"` \| `"middle"` \| `"top"`

The vertical alignment of the total label compared to the point

***

### `xOffset`

**xOffset**?: `number`

Horizontal offset of the total label in pixels, relative to its horizontal alignment specified via `align`

***

### `yOffset`

**yOffset**?: `number`

Vertical offset of the total label in pixels, relative to its vertical alignment specified via `verticalAlign`

horizontal alignment specified via `align`

***

### `yOffset`

**yOffset**?: `number`

Vertical offset of the total label in pixels, relative to its vertical alignment specified via `verticalAlign`

# Type alias TotalLabelsTextStyle

> **TotalLabelsTextStyle**: `Omit`\< [`TextStyle`](type-alias.TextStyle.md), `"pointerEvents"` \| `"textOverflow"` \> & \{
  `align`: `"center"` \| `"left"` \| `"right"`;
 }

Text styling options for total labels.

Extends the base TextStyle with additional alignment options specific to total labels.

> ## `TotalLabelsTextStyle.align`
>
> **align**?: `"center"` \| `"left"` \| `"right"`
>
> Horizontal alignment of the total label text
>
>

# Type alias TranslationConfig

> **TranslationConfig**: `object`

Translation Configuration

## Type declaration

ter"` \| `"left"` \| `"right"`
>
> Horizontal alignment of the total label text
>
>

# Type alias TranslationConfig

> **TranslationConfig**: `object`

Translation Configuration

## Type declaration

### `customTranslations`

**customTranslations**?: ([`CustomTranslationObject`](type-alias.CustomTranslationObject.md) \| [`CustomTranslationObject`](type-alias.CustomTranslationObject.md)[])[]

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

# Type alias TreemapSeriesLabels

> **TreemapSeriesLabels**: [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & [`SeriesLabelsAligning`](type-alias.SeriesLabelsAligning.md)[] \| [`SeriesLabelsBase`](type-alias.SeriesLabelsBase.md) & [`SeriesLabelsAligning`](type-alias.SeriesLabelsAligning.md)

# Type alias TriggerMethod

> **TriggerMethod**: `"click"` \| `"rightclick"`

Jump To Dashboard action trigger method type
click - when user clicks on the widget
rightclick - when user right clicks on the widget, opening the context menu

## See

[JumpToDashboardConfig](../interfaces/interface.JumpToDashboardConfig.md)

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

# Type alias UseComposedDashboardOptions

> **UseComposedDashboardOptions**: `object`

g., `red`, or a hexadecimal value, e.g., `#ff0000`.

***

### `type`

**type**: `"uniform"`

Color options type

# Type alias UseComposedDashboardOptions

> **UseComposedDashboardOptions**: `object`

# Type alias UseQueryResult`<TData, TError>`

> **UseQueryResult**: <`TData`, `TError`> `TanstackUseQueryResult`\< `TData`, `TError` \>

The result of the `useFetch` hook.
Return value of the `useQuery` hook from `@tanstack/react-query`.

## See

https://tanstack.com/query/v4/docs/framework/react/reference/useQuery

## Type parameters

| Parameter | Description |
| :------ | :------ |
| `TData` | The type of the data returned by the fetch request |
| `TError` | The type of the error returned by the fetch request |

# Type alias ValueToColorMap

> **ValueToColorMap**: `object`

Mapping of each of the chart value series to colors.

## Index signature

 \[`value`: `string`\]: `string`

# Type alias WidgetDataOptions

> **WidgetDataOptions**: [`ChartDataOptions`](type-alias.ChartDataOptions.md) \| `EmptyObject` \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Widget data options.

# Type alias WidgetId

> **WidgetId**: `string`

Widget ID

# Type alias WidgetModelErrorState

> **WidgetModelErrorState**: `object`

State of a widget model load that has failed.

## Type declaration

### `error`

**error**: `Error`

Error, if one occurred

***

### `isError`

**isError**: `true`

Whether the widget model load has failed

***

dget model load that has failed.

## Type declaration

### `error`

**error**: `Error`

Error, if one occurred

***

### `isError`

**isError**: `true`

Whether the widget model load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the widget model is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the widget model load has succeeded

***

### `status`

**status**: `"error"`

Loading status

***

### `widget`

**widget**: `undefined`

Widget model, if the load succeeded

# Type alias WidgetModelLoadingState

> **WidgetModelLoadingState**: `object`

State of a widget model that is loading.

## Type declaration

### `error`

**error**: `undefined`

Error, if one occurred

***

### `isError`

**isError**: `false`

Whether the widget model load has failed

***

### `isLoading`

**isLoading**: `true`

Whether the widget model is loading

***

### `isSuccess`

**isSuccess**: `false`

Whether the widget model load has succeeded

***

### `status`

**status**: `"loading"`

Loading status

***

### `widget`

**widget**: [`WidgetModel`](../fusion-assets/interface.WidgetModel.md) \| `undefined`

Widget model, if the load succeeded

# Type alias WidgetModelState

> **WidgetModelState**: [`WidgetModelErrorState`](type-alias.WidgetModelErrorState.md) \| [`WidgetModelLoadingState`](type-alias.WidgetModelLoadingState.md) \| [`WidgetModelSuccessState`](type-alias.WidgetModelSuccessState.md)

States of a widget model load.

.WidgetModelErrorState.md) \| [`WidgetModelLoadingState`](type-alias.WidgetModelLoadingState.md) \| [`WidgetModelSuccessState`](type-alias.WidgetModelSuccessState.md)

States of a widget model load.

# Type alias WidgetModelSuccessState

> **WidgetModelSuccessState**: `object`

State of a widget model load that has succeeded.

## Type declaration

### `error`

**error**: `undefined`

Error, if one occurred

***

### `isError`

**isError**: `false`

Whether the widget model load has failed

***

### `isLoading`

**isLoading**: `false`

Whether the widget model is loading

***

### `isSuccess`

**isSuccess**: `true`

Whether the widget model load has succeeded

***

### `status`

**status**: `"success"`

Loading status

***

### `widget`

**widget**: [`WidgetModel`](../fusion-assets/interface.WidgetModel.md)

Widget model, if the load succeeded

succeeded

***

### `status`

**status**: `"success"`

Loading status

***

### `widget`

**widget**: [`WidgetModel`](../fusion-assets/interface.WidgetModel.md)

Widget model, if the load succeeded

# Type alias WidgetProps

> **WidgetProps**: [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`ChartWidgetProps`](../interfaces/interface.ChartWidgetProps.md), `"chart"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`CustomWidgetProps`](../interfaces/interface.CustomWidgetProps.md), `"custom"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`PivotTableWidgetProps`](../interfaces/interface.PivotTableWidgetProps.md), `"pivot"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`TextWidgetProps`](../interfaces/interface.TextWidgetProps.md), `"text"` \>

Props for the widget component within a container component like dashboard.

ops`](type-alias.WithCommonWidgetProps.md)\< [`TextWidgetProps`](../interfaces/interface.TextWidgetProps.md), `"text"` \>

Props for the widget component within a container component like dashboard.

# Type alias WidgetStyleOptions

> **WidgetStyleOptions**: [`ChartStyleOptions`](type-alias.ChartStyleOptions.md) \| [`CustomWidgetStyleOptions`](type-alias.CustomWidgetStyleOptions.md) \| [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md) \| [`TextWidgetStyleOptions`](type-alias.TextWidgetStyleOptions.md) & [`WidgetContainerStyleOptions`](../interfaces/interface.WidgetContainerStyleOptions.md)

Complete set of configuration options that define functional style of the various elements of the charts as well as the look and feel of widget itself and widget header.

# Type alias WidgetThemeSettings

> **WidgetThemeSettings**: `object`

Widget theme settings

## Type declaration

### `border`

**border**?: `boolean`

Widget container border toggle

***

### `borderColor`

**borderColor**?: `string`

Widget container border color

***

### `cornerRadius`

**cornerRadius**?: [`RadiusSizes`](type-alias.RadiusSizes.md)

Corner radius of the widget container

***

rColor`

**borderColor**?: `string`

Widget container border color

***

### `cornerRadius`

**cornerRadius**?: [`RadiusSizes`](type-alias.RadiusSizes.md)

Corner radius of the widget container

***

### `header`

**header**?: `object`

Widget header styles

> #### `header.backgroundColor`
>
> **backgroundColor**?: `string`
>
> Header background color
>
> #### `header.dividerLine`
>
> **dividerLine**?: `boolean`
>
> Toggle of the divider line between widget header and chart
>
> #### `header.dividerLineColor`
>
> **dividerLineColor**?: `string`
>
> Divider line color
>
> #### `header.titleAlignment`
>
> **titleAlignment**?: [`AlignmentTypes`](type-alias.AlignmentTypes.md)
>
> Header title alignment
>
> #### `header.titleFontSize`
>
> **titleFontSize**?: `number`
>
> Header title font size
>
> #### `header.titleTextColor`
>
> **titleTextColor**?: `string`
>
> Header title text color
>
>

***

### `shadow`

**shadow**?: [`ShadowsTypes`](type-alias.ShadowsTypes.md)

Shadow level of the widget container

Effective only when spaceAround is defined

***

### `spaceAround`

**spaceAround**?: [`SpaceSizes`](type-alias.SpaceSizes.md)

Space between widget container edge and the chart

# Type alias WidgetType

> **WidgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Type of the widget component.

pe-alias.SpaceSizes.md)

Space between widget container edge and the chart

# Type alias WidgetType

> **WidgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Type of the widget component.

# Type alias WidgetsOptions

> **WidgetsOptions**: `Record`\< [`WidgetId`](type-alias.WidgetId.md), [`SpecificWidgetOptions`](type-alias.SpecificWidgetOptions.md) \>

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


## Enumerations

# Enumerations

- [CommonFiltersApplyMode](enumeration.CommonFiltersApplyMode.md)

# Enumeration CommonFiltersApplyMode

Common filters apply mode.

## Enumeration Members

### FILTER

> **FILTER**: `"filter"`

***

### HIGHLIGHT

> **HIGHLIGHT**: `"highlight"`


## Variables

# Variables

- [GradientDirections](variable.GradientDirections.md)
- [RadialGradientPresets](variable.RadialGradientPresets.md)

# Variable GradientDirections

> **`const`** **GradientDirections**: `object`

Common gradient direction presets for convenience.

## Type declaration

### `bottomToTop`

**`readonly`** **bottomToTop**: `object`

Bottom to top gradient

> #### `bottomToTop.x1`
>
> **`readonly`** **x1**: `0` = `0`
>
> #### `bottomToTop.x2`
>
> **`readonly`** **x2**: `0` = `0`
>
> #### `bottomToTop.y1`
>
> **`readonly`** **y1**: `1` = `1`
>
> #### `bottomToTop.y2`
>
> **`readonly`** **y2**: `0` = `0`
>
>

***

>
> #### `bottomToTop.x2`
>
> **`readonly`** **x2**: `0` = `0`
>
> #### `bottomToTop.y1`
>
> **`readonly`** **y1**: `1` = `1`
>
> #### `bottomToTop.y2`
>
> **`readonly`** **y2**: `0` = `0`
>
>

***

### `diagonalTopLeft`

**`readonly`** **diagonalTopLeft**: `object`

Diagonal top-left to bottom-right

> #### `diagonalTopLeft.x1`
>
> **`readonly`** **x1**: `0` = `0`
>
> #### `diagonalTopLeft.x2`
>
> **`readonly`** **x2**: `1` = `1`
>
> #### `diagonalTopLeft.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `diagonalTopLeft.y2`
>
> **`readonly`** **y2**: `1` = `1`
>
>

***

### `diagonalTopRight`

**`readonly`** **diagonalTopRight**: `object`

Diagonal top-right to bottom-left

> #### `diagonalTopRight.x1`
>
> **`readonly`** **x1**: `1` = `1`
>
> #### `diagonalTopRight.x2`
>
> **`readonly`** **x2**: `0` = `0`
>
> #### `diagonalTopRight.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `diagonalTopRight.y2`
>
> **`readonly`** **y2**: `1` = `1`
>
>

***

### `leftToRight`

**`readonly`** **leftToRight**: `object`

Left to right gradient

> #### `leftToRight.x1`
>
> **`readonly`** **x1**: `0` = `0`
>
> #### `leftToRight.x2`
>
> **`readonly`** **x2**: `1` = `1`
>
> #### `leftToRight.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `leftToRight.y2`
>
> **`readonly`** **y2**: `0` = `0`
>
>

***

>
> #### `leftToRight.x2`
>
> **`readonly`** **x2**: `1` = `1`
>
> #### `leftToRight.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `leftToRight.y2`
>
> **`readonly`** **y2**: `0` = `0`
>
>

***

### `rightToLeft`

**`readonly`** **rightToLeft**: `object`

Right to left gradient

> #### `rightToLeft.x1`
>
> **`readonly`** **x1**: `1` = `1`
>
> #### `rightToLeft.x2`
>
> **`readonly`** **x2**: `0` = `0`
>
> #### `rightToLeft.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `rightToLeft.y2`
>
> **`readonly`** **y2**: `0` = `0`
>
>

***

### `topToBottom`

**`readonly`** **topToBottom**: `object`

Top to bottom gradient

> #### `topToBottom.x1`
>
> **`readonly`** **x1**: `0` = `0`
>
> #### `topToBottom.x2`
>
> **`readonly`** **x2**: `0` = `0`
>
> #### `topToBottom.y1`
>
> **`readonly`** **y1**: `0` = `0`
>
> #### `topToBottom.y2`
>
> **`readonly`** **y2**: `1` = `1`
>
>

# Variable RadialGradientPresets

> **`const`** **RadialGradientPresets**: `object`

Common radial gradient presets for convenience.

## Type declaration

### `bottomLeft`

**`readonly`** **bottomLeft**: `object`

Bottom-left focused radial gradient

> #### `bottomLeft.centerX`
>
> **`readonly`** **centerX**: `0` = `0`
>
> #### `bottomLeft.centerY`
>
> **`readonly`** **centerY**: `1` = `1`
>
> #### `bottomLeft.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>

***

terX`
>
> **`readonly`** **centerX**: `0` = `0`
>
> #### `bottomLeft.centerY`
>
> **`readonly`** **centerY**: `1` = `1`
>
> #### `bottomLeft.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>

***

### `bottomRight`

**`readonly`** **bottomRight**: `object`

Bottom-right focused radial gradient

> #### `bottomRight.centerX`
>
> **`readonly`** **centerX**: `1` = `1`
>
> #### `bottomRight.centerY`
>
> **`readonly`** **centerY**: `1` = `1`
>
> #### `bottomRight.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>

***

### `center`

**`readonly`** **center**: `object`

Center-focused radial gradient

> #### `center.centerX`
>
> **`readonly`** **centerX**: `0.5` = `0.5`
>
> #### `center.centerY`
>
> **`readonly`** **centerY**: `0.5` = `0.5`
>
> #### `center.radius`
>
> **`readonly`** **radius**: `0.8` = `0.8`
>
>

***

### `topLeft`

**`readonly`** **topLeft**: `object`

Top-left focused radial gradient

> #### `topLeft.centerX`
>
> **`readonly`** **centerX**: `0` = `0`
>
> #### `topLeft.centerY`
>
> **`readonly`** **centerY**: `0` = `0`
>
> #### `topLeft.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>

***

### `topRight`

**`readonly`** **topRight**: `object`

Top-right focused radial gradient

> #### `topRight.centerX`
>
> **`readonly`** **centerX**: `1` = `1`
>
> #### `topRight.centerY`
>
> **`readonly`** **centerY**: `0` = `0`
>
> #### `topRight.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>


## Functions

>
> **`readonly`** **centerX**: `1` = `1`
>
> #### `topRight.centerY`
>
> **`readonly`** **centerY**: `0` = `0`
>
> #### `topRight.radius`
>
> **`readonly`** **radius**: `1` = `1`
>
>


## Functions

# Functions

- [createLinearGradient](function.createLinearGradient.md)
- [createRadialGradient](function.createRadialGradient.md)
- [isGradient](function.isGradient.md)
- [isLinearGradient](function.isLinearGradient.md)
- [isRadialGradient](function.isRadialGradient.md)
- [LoadingOverlay](function.LoadingOverlay.md)
- [useGetDataSourceDimensions](function.useGetDataSourceDimensions.md)

# Function LoadingOverlay

> **LoadingOverlay**(`props`): `Element`

Component that displays a loading overlay.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`LoadingOverlayProps`](../type-aliases/type-alias.LoadingOverlayProps.md) | Loading overlay props. |

## Returns

`Element`

Child component wrapped in dynamic overlay.

## Example

Example of a loading overlay:
```ts
<LoadingOverlay isVisible={isLoading}>
  <Chart {...chartOptions} />
</LoadingOverlay>
```

# Function createLinearGradient

> **createLinearGradient**(`direction`, `stops`): [`LinearGradientColor`](../interfaces/interface.LinearGradientColor.md)

Helper function to create a linear gradient with common direction presets.

> **createLinearGradient**(`direction`, `stops`): [`LinearGradientColor`](../interfaces/interface.LinearGradientColor.md)

Helper function to create a linear gradient with common direction presets.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `direction` | [`LinearGradientDirection`](../interfaces/interface.LinearGradientDirection.md) | The gradient direction |
| `stops` | *readonly* [`GradientStop`](../interfaces/interface.GradientStop.md)[] | The color stops |

## Returns

[`LinearGradientColor`](../interfaces/interface.LinearGradientColor.md)

A linear gradient configuration

## Example

```ts
const gradient = createLinearGradient(
  GradientDirections.topToBottom,
  [
    { position: 0, color: '#003399' },
    { position: 1, color: '#3366AA' }
  ]
);
```

# Function createRadialGradient

> **createRadialGradient**(`center`, `stops`): [`RadialGradientColor`](../interfaces/interface.RadialGradientColor.md)

Helper function to create a radial gradient with common presets.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `center` | [`RadialGradientConfig`](../interfaces/interface.RadialGradientConfig.md) | The gradient center configuration |
| `stops` | *readonly* [`GradientStop`](../interfaces/interface.GradientStop.md)[] | The color stops |

## Returns

[`RadialGradientColor`](../interfaces/interface.RadialGradientColor.md)

A radial gradient configuration

[`GradientStop`](../interfaces/interface.GradientStop.md)[] | The color stops |

## Returns

[`RadialGradientColor`](../interfaces/interface.RadialGradientColor.md)

A radial gradient configuration

## Example

```ts
const gradient = createRadialGradient(
  RadialGradientPresets.center,
  [
    { position: 0, color: '#ff0000' },
    { position: 1, color: '#0000ff' }
  ]
);
```

# Function isGradient

> **isGradient**(`value`): `value is GradientColor`

Utility type to check if a value is any gradient.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check |

## Returns

`value is GradientColor`

True if the value is a gradient

# Function isLinearGradient

> **isLinearGradient**(`value`): `value is LinearGradientColor`

Utility type to check if a value is a linear gradient.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check |

## Returns

`value is LinearGradientColor`

True if the value is a linear gradient

# Function isRadialGradient

> **isRadialGradient**(`value`): `value is RadialGradientColor`

Utility type to check if a value is a radial gradient.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check |

## Returns

`value is RadialGradientColor`

True if the value is a radial gradient

eters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check |

## Returns

`value is RadialGradientColor`

True if the value is a radial gradient

# Function useGetDataSourceDimensions

> **useGetDataSourceDimensions**(`params`): [`DataSourceDimensionsState`](../type-aliases/type-alias.DataSourceDimensionsState.md)

Gets the dimensions of a data source.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetDataSourceDimensionsParams`](../interfaces/interface.GetDataSourceDimensionsParams.md) | The parameters for getting the dimensions |

## Returns

[`DataSourceDimensionsState`](../type-aliases/type-alias.DataSourceDimensionsState.md)

The dimensions state

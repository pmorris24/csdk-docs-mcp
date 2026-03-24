# Class ChartWidget

The Chart Widget component extending the [Chart](../charts/class.Chart.md) component to support widget style options.
It can be used along with the [DrilldownWidget](../drilldown/class.DrilldownWidget.md) component to support advanced data drilldown.

charts/class.Chart.md) component to support widget style options.
It can be used along with the [DrilldownWidget](../drilldown/class.DrilldownWidget.md) component to support advanced data drilldown.

## Example

Here's how you can use the ChartWidget component in a Vue application:
```vue
<template>
   <DrilldownWidget :drilldownPaths="drilldownPaths" :initialDimension="dimProductName">
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
         :on-data-points-selected="(dataPoints:any,event:any) => {
         onDataPointsSelected(dataPoints);
         onContextMenu({ left: event.clientX, top: event.clientY });
       }"
         :on-data-point-click="(dataPoint:any,event:any) => {
         onDataPointsSelected([dataPoint]);
         onContextMenu({ left: event.clientX, top: event.clientY });
       }"
         :on-data-point-context-menu="(dataPoint:any,event:any) => {
         onDataPointsSelected([dataPoint]);
         onContextMenu({ left: event.clientX, top: event.clientY });
       }"
       />
     </template>
   </DrilldownWidget>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../assets/sample-retail-model';
import { ChartWidget } from '@sisense/sdk-ui-vue';

const dimProductName = DM.DimProducts.ProductName;
const measureTotalRevenue = measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue, 'Total Revenue');
const chartWidgetProps = ref({
  // Configure your ChartWidgetProps here
});
</script>
```
<img src="../../../img/vue-widget-example.png" width="800px" />

Sale_orders.OrderRevenue, 'Total Revenue');
const chartWidgetProps = ref({
  // Configure your ChartWidgetProps here
});
</script>
```
<img src="../../../img/vue-widget-example.png" width="800px" />

## Param

ChartWidget properties

## Properties

### Data

#### dataSource

> **`readonly`** **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

### Chart

#### chartType

> **`readonly`** **chartType**: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Default chart type of each series

***

#### dataOptions

> **`readonly`** **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

#### dataOptions

> **`readonly`** **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

### Widget

#### description

> **`readonly`** **description**?: `string`

Description of the widget

***

#### highlightSelectionDisabled

> **`readonly`** **highlightSelectionDisabled**?: `boolean`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **`readonly`** **styleOptions**?: [`ChartWidgetStyleOptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md)

Style options for both the chart and widget including the widget header

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

e-aliases/type-alias.ChartWidgetStyleOptions.md)

Style options for both the chart and widget including the widget header

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

### Callbacks

#### onBeforeRender

> **`readonly`** **onBeforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### onDataPointClick

> **`readonly`** **onDataPointClick**?: [`AreamapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.AreamapDataPointEventHandler.md) \| [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`IndicatorDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.IndicatorDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md) \| [`ScattermapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScattermapDataPointEventHandler.md)

Click handler callback for a data point

***

#### onDataPointContextMenu

> **`readonly`** **onDataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **`readonly`** **onDataPointsSelected**?: [`CalendarHeatmapDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md) \| [`DataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointsEventHandler.md) \| [`ScatterDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

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

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Class Dashboard

A component used for easily rendering a dashboard.

## Example

Here's how you can use the Dashboard component in a Vue application:
```vue
<template>
 <Dashboard
   v-if="dashboardProps"
   :title="dashboardProps.title"
   :layoutOptions="dashboardProps.layoutOptions"
   :widgets="dashboardProps.widgets"
   :filters="dashboardProps.filters"
   :defaultDataSource="dashboardProps.defaultDataSource"
   :widgetsOptions="dashboardProps.widgetsOptions"
   :styleOptions="dashboardProps.styleOptions"
 />
</template>

<script setup lang="ts">
import { dashboardModelTranslator, useGetDashboardModel, Dashboard } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { dashboard } = useGetDashboardModel({
 dashboardOid: '6441e728dac1920034bce737',
 includeWidgets: true,
 includeFilters: true,
});

const dashboardProps = computed(() =>
  dashboard.value ? dashboardModelTranslator.toDashboardProps(dashboard.value) : null,
);
</script>
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Properties

### config

> **`readonly`** **config**?: [`DashboardConfig`](../interfaces/interface.DashboardConfig.md)

The configuration for the dashboard

***

sdk/guides/dashboards/index.html).

## Properties

### config

> **`readonly`** **config**?: [`DashboardConfig`](../interfaces/interface.DashboardConfig.md)

The configuration for the dashboard

***

### defaultDataSource

> **`readonly`** **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The default data source to use for the dashboard

***

### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

The dashboard filters to be applied to each of the widgets based on the widget filter options

***

### layoutOptions

> **`readonly`** **layoutOptions**?: [`DashboardLayoutOptions`](../interfaces/interface.DashboardLayoutOptions.md)

Dashboard layout options

***

### styleOptions

> **`readonly`** **styleOptions**?: [`DashboardStyleOptions`](../../sdk-ui/type-aliases/type-alias.DashboardStyleOptions.md)

The style options for the dashboard

***

### title

> **`readonly`** **title**?: `string`

The title of the dashboard

***

### widgets

> **`readonly`** **widgets**: [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md)[]

The widgets to render in the dashboard

***

### widgetsOptions

> **`readonly`** **widgetsOptions**?: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md)

The options for each of the widgets

dgets to render in the dashboard

***

### widgetsOptions

> **`readonly`** **widgetsOptions**?: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md)

The options for each of the widgets

# Class PivotTableWidget

The PivotTableWidget component extending the [PivotTable](../data-grids/class.PivotTable.md) component to support widget style options.

The options for each of the widgets

# Class PivotTableWidget

The PivotTableWidget component extending the [PivotTable](../data-grids/class.PivotTable.md) component to support widget style options.

## Example

Here's how you can use the PivotTableWidget component in a Vue application:
```vue
<template>
  <PivotTableWidget
     :dataSource="pivotTableWidgetProps.dataSource"
     :filters="pivotTableWidgetProps.filters"
     :dataOptions="pivotTableWidgetProps.dataOptions"
     :styleOptions="pivotTableWidgetProps.styleOptions"
     :title="pivotTableWidgetProps.title"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { measureFactory } from '@sisense/sdk-data';
import { PivotTableWidget, type PivotTableWidgetProps } from '@sisense/sdk-ui-vue';
import * as DM from '../assets/sample-ecommerce-model';

const pivotTableWidgetProps = ref<PivotTableWidgetProps>({
  dataSource: DM.DataSource,
  dataOptions: {
    rows: [DM.Category.Category],
    values: [measureFactory.sum(DM.Commerce.Cost, 'Total Cost')],
  },
  filters: [],
  title: 'Pivot Table Widget Example',
  styleOptions: {
    spaceAround: 'Medium',
    cornerRadius: 'Large',
    shadow: 'Light',
    border: true,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
    header: {
      hidden: false,
      titleTextColor: '#333333',
      titleAlignment: 'Center',
      dividerLine: true,
      dividerLineColor: '#e0e0e0',
      backgroundColor: '#f5f5f5',
    },
  },
});
</script>
```
<img src="../../../img/vue-pivot-table-widget-example.png" width="600px" />

dividerLine: true,
      dividerLineColor: '#e0e0e0',
      backgroundColor: '#f5f5f5',
    },
  },
});
</script>
```
<img src="../../../img/vue-pivot-table-widget-example.png" width="600px" />

## Param

Pivot Table Widget properties

## Properties

### Data

#### dataSource

> **`readonly`** **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will highlight query results

### Chart

#### dataOptions

> **`readonly`** **dataOptions**: [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the table

taOptions

> **`readonly`** **dataOptions**: [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the table

### Widget

#### description

> **`readonly`** **description**?: `string`

Description of the widget

***

#### drilldownOptions

> **`readonly`** **drilldownOptions**?: [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md)

Configuration for the pivot table drilldown

***

#### styleOptions

> **`readonly`** **styleOptions**?: [`PivotTableWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.PivotTableWidgetStyleOptions.md)

Style options for both the table and widget including the widget header

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

### Callbacks

#### onDataPointClick

> **`readonly`** **onDataPointClick**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### onDataPointContextMenu

> **`readonly`** **onDataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

# Class Widget

Facade component that renders a widget within a dashboard based on the widget type.

ointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

# Class Widget

Facade component that renders a widget within a dashboard based on the widget type.

## Example

```vue
<script setup lang="ts">
import { Widget, type WidgetProps } from '@sisense/sdk-ui-vue';
import { measureFactory } from '@sisense/sdk-data';

const widgetProps: WidgetProps = {
  id: 'widget-id',
  widgetType: 'chart',
  dataSource: DM.DataSource,
  chartType: 'column',
  dataOptions: {
    category: [dimProductName],
    value: [
      {
        column: measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue, 'Total Revenue'),
        sortType: 'sortDesc',
      },
    ],
    breakBy: [],
  },
};
</script>

<template>
  <Widget
    :id="widgetProps.id"
    :widgetType="widgetProps.widgetType"
    :dataSource="widgetProps.dataSource"
    :chartType="widgetProps.chartType"
    :dataOptions="widgetProps.dataOptions"
  />
</template>
```
<img src="../../../img/vue-widget-example.png" width="800px" />

## Properties

rops.dataSource"
    :chartType="widgetProps.chartType"
    :dataOptions="widgetProps.dataOptions"
  />
</template>
```
<img src="../../../img/vue-widget-example.png" width="800px" />

## Properties

### Data

#### dataSource

> **`readonly`** **dataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **`readonly`** **filters**?: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

### Chart

#### chartType

> **`readonly`** **chartType**?: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Default chart type of each series

***

#### dataOptions

> **`readonly`** **dataOptions**?: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md) \| [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md) \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

aliases/type-alias.GenericDataOptions.md) \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

### Widget

#### customWidgetType

> **`readonly`** **customWidgetType**?: `string`

Custom widget type. This is typically the name/ID of the custom widget.

***

#### description

> **`readonly`** **description**?: `string`

Description of the widget

***

#### drilldownOptions

> **`readonly`** **drilldownOptions**?: [`DrilldownOptions`](../type-aliases/type-alias.DrilldownOptions.md) \| [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md)

List of categories to allow drilldowns on

***

#### id

> **`readonly`** **id**: `string`

Unique identifier of the widget

***

#### styleOptions

> **`readonly`** **styleOptions**?: [`ChartWidgetStyleOptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md) \| [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md) \| [`PivotTableWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.PivotTableWidgetStyleOptions.md) \| [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md)

Style options for both the chart and widget including the widget header

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

***

#### widgetType

> **`readonly`** **widgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Widget type

der

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

***

#### widgetType

> **`readonly`** **widgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Widget type

### Callbacks

#### onBeforeRender

> **`readonly`** **onBeforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### onDataPointClick

> **`readonly`** **onDataPointClick**?: [`AreamapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.AreamapDataPointEventHandler.md) \| [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`CustomWidgetDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointEventHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \> \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`IndicatorDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.IndicatorDataPointEventHandler.md) \| [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md) \| [`ScattermapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScattermapDataPointEventHandler.md) \| `TextWidgetDataPointEventHandler`

Click handler callback for a data point

***

#### onDataPointContextMenu

> **`readonly`** **onDataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`CustomWidgetDataPointContextMenuHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointContextMenuHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \> \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`PivotTableDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **`readonly`** **onDataPointsSelected**?: [`CalendarHeatmapDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md) \| [`CustomWidgetDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CustomWidgetDataPointsEventHandler.md)\< [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \> \| [`DataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointsEventHandler.md) \| [`ScatterDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

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

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Function addFilter

> **addFilter**(`dashboard`, `newFilter`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with an additional filter added to its existing filters.

This function does not modify the original dashboard; instead, it returns a new dashboard with the added filter.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) to which the filter will be added. |
| `newFilter` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md) | The filter to add to the dashboard. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the new filter added.

## Example

Add a new filter to a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const newFilter: Filter = {...};
const updatedDashboard = dashboardHelpers.addFilter(existingDashboard, newFilter);
```

filter to a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const newFilter: Filter = {...};
const updatedDashboard = dashboardHelpers.addFilter(existingDashboard, newFilter);
```

# Function addFilters

> **addFilters**(`dashboard`, `newFilters`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with additional filters added to its existing filters.

This function does not modify the original dashboard; instead, it returns a new dashboard with the added filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) to which the filters will be added. |
| `newFilters` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md)[] | An array of filters to add to the dashboard. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the new filters added.

## Example

Add multiple new filters to a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const newFilters: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.addFilters(existingDashboard, newFilters);
```

# Function extractDimensionsAndMeasures

> **extractDimensionsAndMeasures**(`dataOptions`): `object`

Utility function for converting data options to parameters for executing a query.

Filters);
```

# Function extractDimensionsAndMeasures

> **extractDimensionsAndMeasures**(`dataOptions`): `object`

Utility function for converting data options to parameters for executing a query.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `dataOptions` | [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md) |

## Returns

### `dimensions`

**dimensions**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[]

### `measures`

**measures**: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[]

# Function removeFilter

> **removeFilter**(`dashboard`, `filterToRemove`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with a specific filter removed.

This function removes the filter with the same GUID as the provided filter from the dashboard's filters.
This function does not modify the original dashboard; instead, it returns a new dashboard with the updated filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) from which to remove the filter. |
| `filterToRemove` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md) | The filter to be removed. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filter removed.

faces/interface.Filter.md) | The filter to be removed. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filter removed.

## Example

Remove a filter from a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const filterToRemove: Filter = {...};
const updatedDashboard = dashboardHelpers.removeFilter(existingDashboard, filterToRemove);
```

# Function removeFilters

> **removeFilters**(`dashboard`, `filtersToRemove`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with multiple filters removed.

This function removes all filters with the same GUID as the provided filters from the dashboard's filters.
This function does not modify the original dashboard; instead, it returns a new dashboard with the updated filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) from which the specified filters are removed. |
| `filtersToRemove` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md)[] | An array of filters to remove. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filters removed.

terface.Filter.md)[] | An array of filters to remove. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filters removed.

## Example

Remove multiple filters from a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const filtersToRemove: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.removeFilters(existingDashboard, filtersToRemove);
```

# Function replaceFilter

> **replaceFilter**(
  `dashboard`,
  `filterToReplace`,
  `newFilter`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with a specific filter replaced.

This function searches for a filter with the same GUID as the provided `filterToReplace` and replaces it with `newFilter`.
This function does not modify the original dashboard; instead, it returns a new dashboard with the updated filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) containing the filter to be replaced. |
| `filterToReplace` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md) | The existing filter to be replaced. |
| `newFilter` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md) | The new filter to replace the existing one. |

nterfaces/interface.Filter.md) | The existing filter to be replaced. |
| `newFilter` | [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md) | The new filter to replace the existing one. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filter replaced.

## Example

Replace a filter in a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const filterToReplace: Filter = {...};
const newFilter: Filter = {...};
const updatedDashboard = dashboardHelpers.replaceFilter(existingDashboard, filterToReplace, newFilter);
```

# Function replaceFilters

> **replaceFilters**(`dashboard`, `newFilters`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new dashboard instance with its filters replaced by a new set of filters.

This function does not modify the original dashboard; instead, it returns a new dashboard with the updated filters.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard (`DashboardProps`) whose filters are to be replaced. |
| `newFilters` | [`FilterRelations`](../../../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md)[] | An array of new filters or filter relations to set on the dashboard. |

/../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../../../sdk-data/interfaces/interface.Filter.md)[] | An array of new filters or filter relations to set on the dashboard. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the updated filters.

## Example

Replace all filters on a dashboard with a new set of filters.
```ts
const existingDashboard: DashboardProps = {...}
const newFilters: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.replaceFilters(existingDashboard, newFilters);
```

# Function useComposedDashboard

> **useComposedDashboard**<`D`>(`initialDashboard`, `options` = `{}`): `object`

A Vue composable function `useComposedDashboard` that takes in separate dashboard elements and
composes them into a coordinated dashboard with cross filtering, and change detection.

## Type parameters

| Parameter |
| :------ |
| `D` *extends* [`ComposableDashboardProps`](../interfaces/interface.ComposableDashboardProps.md) \| [`DashboardProps`](../interfaces/interface.DashboardProps.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `initialDashboard` | [`MaybeRef`](../type-aliases/type-alias.MaybeRef.md)\< `D` \> |
| `options` | [`UseComposedDashboardOptions`](../../sdk-ui/type-aliases/type-alias.UseComposedDashboardOptions.md) |

## Returns

### `dashboard`

**dashboard**: `Ref`\< `D` \>

ybeRef.md)\< `D` \> |
| `options` | [`UseComposedDashboardOptions`](../../sdk-ui/type-aliases/type-alias.UseComposedDashboardOptions.md) |

## Returns

### `dashboard`

**dashboard**: `Ref`\< `D` \>

### `setFilters`

**setFilters**: (`filters`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

#### Returns

`void`

### `setWidgetsLayout`

**setWidgetsLayout**: (`newLayout`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newLayout` | [`WidgetsPanelColumnLayout`](../interfaces/interface.WidgetsPanelColumnLayout.md) |

#### Returns

`void`

out`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newLayout` | [`WidgetsPanelColumnLayout`](../interfaces/interface.WidgetsPanelColumnLayout.md) |

#### Returns

`void`

## Example

How to use `useComposedDashboard` within a Vue component:
```vue
<script setup lang="ts">
import { Widget, FilterTile, useComposedDashboard, type DashboardProps } from '@sisense/sdk-ui-vue';

const initialDashboardProps: DashboardProps = { ... };
const { dashboard } = useComposedDashboard(initialDashboardProps);
</script>
<template>
 <div>
   <FilterTile v-for="(filter, index) in dashboard.filters" :key="index" :filter="filter" />
   <Widget v-for="(widgetProps, index) in dashboard.widgets" :key="index" v-bind="widgetProps" />
 </div>
</template>
```

The composable returns an object with the following properties:
- `dashboard`: The composable dashboard object containing the current state of the dashboard.
- `setFilters`: API to set filters on the dashboard.
- `setWidgetsLayout`: API to set the layout of the widgets on the dashboard.

# Function useCustomWidgets

> **useCustomWidgets**(): `object`

Vue composable function for working with custom widgets

## Returns

sLayout`: API to set the layout of the widgets on the dashboard.

# Function useCustomWidgets

> **useCustomWidgets**(): `object`

Vue composable function for working with custom widgets

## Returns

### `hasCustomWidget`

**hasCustomWidget**: (`customWidgetType`) => `boolean`

Checks if a custom widget is registered.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The type of the custom widget. |

#### Returns

`boolean`

True if the custom widget is registered, false otherwise.

| Description |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The type of the custom widget. |

#### Returns

`boolean`

True if the custom widget is registered, false otherwise.

### `registerCustomWidget`

**registerCustomWidget**: <`Props`>(`customWidgetType`, `customWidget`) => `void`

Registers a new custom widget.

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `Props` *extends* [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md)\< [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md), [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md), [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md), `Props` \> | [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md)\< [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md), [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md), [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \> |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The unique identifier for the custom widget type. |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `Props` \> | The custom widget component to register. |

#### Returns

`void`

ustom widget type. |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `Props` \> | The custom widget component to register. |

#### Returns

`void`

## Example

How to use `useCustomWidgets` to register a custom widget in a dashboard:
```vue
<script setup lang="ts">
import { useCustomWidgets, DashboardById } from '@sisense/sdk-ui-vue';
import CustomHistogramWidget from './custom-histogram-widget';

const { registerCustomWidget } = useCustomWidgets();
registerCustomWidget('histogramwidget', CustomHistogramWidget);

</script>
<template>
 <DashboardById dashboardOid="your-dashboard-oid" />
</template>
```

egisterCustomWidget } = useCustomWidgets();
registerCustomWidget('histogramwidget', CustomHistogramWidget);

</script>
<template>
 <DashboardById dashboardOid="your-dashboard-oid" />
</template>
```

# Function useJtdWidget

> **useJtdWidget**(`widgetProps`, `config`): `Ref`\< [`WidgetProps`](../../sdk-ui/type-aliases/type-alias.WidgetProps.md) \| `null` \>

Composable to add Jump To Dashboard (JTD) functionality to individual Widget components.

Jump To Dashboard (JTD) allows users to navigate from one dashboard to another when interacting with widgets,
such as clicking on chart data points or using context menus. This composable is particularly useful when rendering
Widget components directly (not through a Dashboard component), but you still want JTD navigation functionality.

For widgets that are part of a dashboard, consider using `applyJtdConfig` or `applyJtdConfigs` instead,
as they apply JTD configuration at the dashboard level rather than individual widget level.

Note: dashboard-only 'includeDashboardFilters' is not supported and would just be ignored, since we do not have a dashboard in the current context.

hboard level rather than individual widget level.

Note: dashboard-only 'includeDashboardFilters' is not supported and would just be ignored, since we do not have a dashboard in the current context.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `widgetProps` | [`MaybeRef`](../type-aliases/type-alias.MaybeRef.md)\< [`WidgetProps`](../../sdk-ui/type-aliases/type-alias.WidgetProps.md) \| `null` \> | Widget properties to enhance with JTD functionality (can be a ref or plain object) |
| `config` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`JumpToDashboardConfig`](../interfaces/interface.JumpToDashboardConfig.md) \| [`JumpToDashboardConfigForPivot`](../interfaces/interface.JumpToDashboardConfigForPivot.md) \> | Jump To Dashboard configuration |

## Returns

`Ref`\< [`WidgetProps`](../../sdk-ui/type-aliases/type-alias.WidgetProps.md) \| `null` \>

Computed ref containing enhanced widget props with JTD navigation capabilities

configuration |

## Returns

`Ref`\< [`WidgetProps`](../../sdk-ui/type-aliases/type-alias.WidgetProps.md) \| `null` \>

Computed ref containing enhanced widget props with JTD navigation capabilities

## Example

Basic JTD configuration with right-click navigation.
```vue
<script setup>
import { ref } from 'vue';
import { Widget, useJtdWidget } from '@sisense/sdk-ui-vue';

const myWidgetProps = ref({
  id: 'widget-1',
  widgetType: 'chart',
  dataSource: 'Sample ECommerce',
  // ... other widget props
});

const jtdConfig = {
  targets: [{ id: 'dashboard-1', caption: 'Sales Dashboard' }],
  interaction: {
    triggerMethod: 'rightclick',
    captionPrefix: 'Jump to'
  }
};

const widgetWithJtd = useJtdWidget(myWidgetProps, jtdConfig);
</script>

<template>
  <Widget v-bind="widgetWithJtd" />
</template>
```

ggerMethod: 'rightclick',
    captionPrefix: 'Jump to'
  }
};

const widgetWithJtd = useJtdWidget(myWidgetProps, jtdConfig);
</script>

<template>
  <Widget v-bind="widgetWithJtd" />
</template>
```

## Example

JTD configuration with multiple targets and custom styling.
```vue
<script setup>
import { ref } from 'vue';
import { Widget, useJtdWidget } from '@sisense/sdk-ui-vue';

const chartProps = ref({ ... });

const jtdConfig = {
  enabled: true,
  targets: [
    { id: 'sales-dashboard', caption: 'Sales Analysis' },
    { id: 'marketing-dashboard', caption: 'Marketing Insights' }
  ],
  interaction: {
    triggerMethod: 'click',
    captionPrefix: 'Navigate to',
    showIcon: true
  },
  filtering: {
    mergeWithTargetFilters: true,
    includeWidgetFilters: true
  }
};

const widgetWithJtd = useJtdWidget(chartProps, jtdConfig);
</script>

<template>
  <Widget v-bind="widgetWithJtd" />
</template>
```


## Fusion Assets

: true,
    includeWidgetFilters: true
  }
};

const widgetWithJtd = useJtdWidget(chartProps, jtdConfig);
</script>

<template>
  <Widget v-bind="widgetWithJtd" />
</template>
```


## Fusion Assets

# Fusion Assets

Vue components, composables and utilities for working with Fusion dashboards, widgets, queries, and formulas

- [DashboardById](class.DashboardById.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [DashboardModel](interface.DashboardModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [dashboardModelTranslator](namespace.dashboardModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion dashboard model from and to other dashboard data structures
- [useExecuteQueryByWidgetId](function.useExecuteQueryByWidgetId.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useFetch](function.useFetch.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetDashboardModel](function.useGetDashboardModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetDashboardModels](function.useGetDashboardModels.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetHierarchyModels](function.useGetHierarchyModels.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetSharedFormula](function.useGetSharedFormula.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetWidgetModel](function.useGetWidgetModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [WidgetById](class.WidgetById.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [WidgetModel](interface.WidgetModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [widgetModelTranslator](namespace.widgetModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion widget model from and to other widget data structures

Translator](namespace.widgetModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion widget model from and to other widget data structures

# Namespace dashboardModelTranslator <Badge type="fusionEmbed" text="Fusion Embed" />

Utility functions to translate a Fusion dashboard model from and to other dashboard data structures

## Index

### Functions

- [toDashboardProps](functions/function.toDashboardProps.md)

Utility functions to translate a Fusion dashboard model from and to other dashboard data structures

# Functions

- [toDashboardProps](function.toDashboardProps.md)

# Namespace widgetModelTranslator <Badge type="fusionEmbed" text="Fusion Embed" />

Utility functions to translate a Fusion widget model from and to other widget data structures

## Index

Props.md)

# Namespace widgetModelTranslator <Badge type="fusionEmbed" text="Fusion Embed" />

Utility functions to translate a Fusion widget model from and to other widget data structures

## Index

### Functions

- [toChartProps](functions/function.toChartProps.md)
- [toChartWidgetProps](functions/function.toChartWidgetProps.md)
- [toExecutePivotQueryParams](functions/function.toExecutePivotQueryParams.md)
- [toExecuteQueryParams](functions/function.toExecuteQueryParams.md)
- [toPivotTableProps](functions/function.toPivotTableProps.md)
- [toPivotTableWidgetProps](functions/function.toPivotTableWidgetProps.md)
- [toTableProps](functions/function.toTableProps.md)
- [toTextWidgetProps](functions/function.toTextWidgetProps.md)
- [toWidgetProps](functions/function.toWidgetProps.md)

Utility functions to translate a Fusion widget model from and to other widget data structures

# Functions

- [toChartProps](function.toChartProps.md)
- [toChartWidgetProps](function.toChartWidgetProps.md)
- [toExecutePivotQueryParams](function.toExecutePivotQueryParams.md)
- [toExecuteQueryParams](function.toExecuteQueryParams.md)
- [toPivotTableProps](function.toPivotTableProps.md)
- [toPivotTableWidgetProps](function.toPivotTableWidgetProps.md)
- [toTableProps](function.toTableProps.md)
- [toTextWidgetProps](function.toTextWidgetProps.md)
- [toWidgetProps](function.toWidgetProps.md)

votTableWidgetProps](function.toPivotTableWidgetProps.md)
- [toTableProps](function.toTableProps.md)
- [toTextWidgetProps](function.toTextWidgetProps.md)
- [toWidgetProps](function.toWidgetProps.md)

# Class DashboardById <Badge type="fusionEmbed" text="Fusion Embed" />

A component used for easily rendering a dashboard by its ID in a Sisense Fusion instance.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Example

Here's how you can use the DashboardById component in a Vue application:
```vue
<template>
   <DashboardById
     :dashboardOid="dashboardOid"
   />
</template>

<script setup lang="ts">
import { DashboardById } from '@sisense/sdk-ui-vue';

const dashboardOid = '6441e728dac1920034bce737';
</script>
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Properties

### config

> **`readonly`** **config**?: [`DashboardByIdConfig`](../interfaces/interface.DashboardByIdConfig.md)

The configuration for the dashboard

***

### dashboardOid

> **`readonly`** **dashboardOid**: `string`

The OID of the dashboard to render.

Config`](../interfaces/interface.DashboardByIdConfig.md)

The configuration for the dashboard

***

### dashboardOid

> **`readonly`** **dashboardOid**: `string`

The OID of the dashboard to render.

# Class WidgetById <Badge type="fusionEmbed" text="Fusion Embed" />

The `WidgetById` component, which is a thin wrapper on the [ChartWidget](../dashboards/class.ChartWidget.md) component,
used to render a widget created in the Sisense instance.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Example

Here's how you can use the WidgetById component in a Vue application:
```vue
<template>
   <WidgetById
     widgetOid="64473e07dac1920034bce77f"
     dashboardOid="6441e728dac1920034bce737"
   />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WidgetById } from '@sisense/sdk-ui-vue';

</script>
```

## Properties

f"
     dashboardOid="6441e728dac1920034bce737"
   />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WidgetById } from '@sisense/sdk-ui-vue';

</script>
```

## Properties

### Data

#### filters

> **`readonly`** **filters**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Filters that will slice query results

Provided filters will be merged with the existing filters from the widget configuration.

***

#### filtersMergeStrategy

> **`readonly`** **filtersMergeStrategy**?: `"codeFirst"` \| `"codeOnly"` \| `"widgetFirst"`

Strategy for merging the existing widget filters (including highlights) with the filters provided via the `filters` and `highlights` props:

- `widgetFirst` - prioritizes the widget filters over the provided filters in case of filter conflicts by certain attributes.
- `codeFirst` - prioritizes the provided filters over the widget filters in case of filter conflicts by certain attributes.
- `codeOnly` - applies only the provided filters and completely ignores the widget filters.

If not specified, the default strategy is `codeFirst`.

***

#### highlights

> **`readonly`** **highlights**?: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Highlight filters that will highlight results that pass filter criteria

***

#### includeDashboardFilters

> **`readonly`** **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

**`readonly`** **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

### Widget

#### dashboardOid

> **`readonly`** **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

***

#### description

> **`readonly`** **description**?: `string`

Description of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### highlightSelectionDisabled

> **`readonly`** **highlightSelectionDisabled**?: `boolean`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **`readonly`** **styleOptions**?: [`WidgetByIdStyleOptions`](../interfaces/interface.WidgetByIdStyleOptions.md)

Style options for the widget including the widget container and the chart or table inside.

***

#### title

> **`readonly`** **title**?: `string`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **`readonly`** **widgetOid**: `string`

Identifier of the widget

: `string`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **`readonly`** **widgetOid**: `string`

Identifier of the widget

### Callbacks

#### onBeforeRender

> **`readonly`** **onBeforeRender**?: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md)

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### onDataPointClick

> **`readonly`** **onDataPointClick**?: [`AreamapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.AreamapDataPointEventHandler.md) \| [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`IndicatorDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.IndicatorDataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md) \| [`ScattermapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScattermapDataPointEventHandler.md)

Click handler callback for a data point

***

#### onDataPointContextMenu

> **`readonly`** **onDataPointContextMenu**?: [`BoxplotDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.BoxplotDataPointEventHandler.md) \| [`CalendarHeatmapDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointEventHandler.md) \| [`DataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointEventHandler.md) \| [`ScatterDataPointEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointEventHandler.md)

Context menu handler callback for a data point

***

#### onDataPointsSelected

> **`readonly`** **onDataPointsSelected**?: [`CalendarHeatmapDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.CalendarHeatmapDataPointsEventHandler.md) \| [`DataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.DataPointsEventHandler.md) \| [`ScatterDataPointsEventHandler`](../../sdk-ui/type-aliases/type-alias.ScatterDataPointsEventHandler.md)

Handler callback for selection of multiple data points

***

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

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`Data`](../../sdk-data/interfaces/interface.Data.md) |

##### Returns

[`Data`](../../sdk-data/interfaces/interface.Data.md)

# Function toChartProps

> **toChartProps**(`widgetModel`): [`ChartProps`](../../../interfaces/interface.ChartProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartProps`](../../../interfaces/interface.ChartProps.md)

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartProps`](../../../interfaces/interface.ChartProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, Chart } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const chartProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toChartProps(widgetModel.value) : null,
);
</script>

<template>
 <Chart
   v-if="chartProps"
   :chartType="chartProps.chartType"
   :dataSet="chartProps.dataSet"
   :dataOptions="chartProps.dataOptions"
   :filters="chartProps.filters"
   :highlights="chartProps.highlights"
   :styleOptions="chartProps.styleOptions"
 />
</template>
```

Note: this method is not supported for pivot widgets.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTable](../../../data-grids/class.PivotTable.md).

# Function toChartWidgetProps

> **toChartWidgetProps**(`widgetModel`): [`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

../interface.WidgetModel.md) to the props for rendering a chart widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, ChartWidget } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const chartWidgetProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toChartWidgetProps(widgetModel.value) : null,
);
</script>

<template>
 <ChartWidget
   v-if="chartWidgetProps"
   :chartType="chartWidgetProps.chartType"
   :dataSource="chartWidgetProps.dataSource"
   :dataOptions="chartWidgetProps.dataOptions"
   :filters="chartWidgetProps.filters"
   :highlights="chartWidgetProps.highlights"
   :styleOptions="chartWidgetProps.styleOptions"
 />
</template>
```

Note: this method is not supported for pivot widgets.

# Function toDashboardProps

> **toDashboardProps**(`dashboardModel`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Translates [DashboardModel](../../interface.DashboardModel.md) to [DashboardProps](../../../interfaces/interface.DashboardProps.md).

ashboardProps`](../../../interfaces/interface.DashboardProps.md)

Translates [DashboardModel](../../interface.DashboardModel.md) to [DashboardProps](../../../interfaces/interface.DashboardProps.md).

## Parameters

| Parameter | Type |
| :------ | :------ |
| `dashboardModel` | [`DashboardModel`](../../interface.DashboardModel.md) |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

## Example

```vue
<script setup lang="ts">
import { dashboardModelTranslator, useGetDashboardModel, Dashboard } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { dashboard } = useGetDashboardModel({
 dashboardOid: 'your-dashboard-oid',
 includeWidgets: true,
 includeFilters: true,
});

const dashboardProps = computed(() =>
 dashboard.value ? dashboardModelTranslator.toDashboardProps(dashboard.value) : null,
);
</script>

<template>
 <Dashboard
   v-if="dashboardProps"
   :title="dashboardProps.title"
   :layoutOptions="dashboardProps.layoutOptions"
   :widgets="dashboardProps.widgets"
   :filters="dashboardProps.filters"
   :defaultDataSource="dashboardProps.defaultDataSource"
   :widgetsOptions="dashboardProps.widgetsOptions"
   :styleOptions="dashboardProps.styleOptions"
 />
</template>
```

dashboardProps.filters"
   :defaultDataSource="dashboardProps.defaultDataSource"
   :widgetsOptions="dashboardProps.widgetsOptions"
   :styleOptions="dashboardProps.styleOptions"
 />
</template>
```

# Function toExecutePivotQueryParams

> **toExecutePivotQueryParams**(`widgetModel`): [`ExecutePivotQueryParams`](../../../../sdk-ui/interfaces/interface.ExecutePivotQueryParams.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the parameters for executing a query for the pivot widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecutePivotQueryParams`](../../../../sdk-ui/interfaces/interface.ExecutePivotQueryParams.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, useExecuteQuery } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const executePivotQueryParams = computed(() =>
 widgetModel.value ? widgetModelTranslator.toExecutePivotQueryParams(widgetModel.value): { enabled: false },
);

const { data, isLoading, isError } = useExecutePivotQuery(executePivotQueryParams);
</script>
```

Note: this method is supported only for getting pivot query.
Use [toExecuteQueryParams](function.toExecuteQueryParams.md) instead for getting query parameters for non-pivot widgets.

;
</script>
```

Note: this method is supported only for getting pivot query.
Use [toExecuteQueryParams](function.toExecuteQueryParams.md) instead for getting query parameters for non-pivot widgets.

# Function toExecuteQueryParams

> **toExecuteQueryParams**(`widgetModel`): [`ExecuteQueryParams`](../../../interfaces/interface.ExecuteQueryParams.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the parameters for executing a query for the widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecuteQueryParams`](../../../interfaces/interface.ExecuteQueryParams.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, useExecuteQuery } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const executeQueryParams = computed(() =>
 widgetModel.value
   ? widgetModelTranslator.toExecuteQueryParams(widgetModel.value)
   : { enabled: false },
);

const { data, isLoading, isError } = useExecuteQuery(executeQueryParams);
</script>
```

Note: this method is not supported for getting pivot query.
Use [toExecutePivotQueryParams](function.toExecutePivotQueryParams.md) instead for getting query parameters for the pivot widget.

pt>
```

Note: this method is not supported for getting pivot query.
Use [toExecutePivotQueryParams](function.toExecutePivotQueryParams.md) instead for getting query parameters for the pivot widget.

# Function toPivotTableProps

> **toPivotTableProps**(`widgetModel`): [`PivotTableProps`](../../../interfaces/interface.PivotTableProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a pivot table.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableProps`](../../../interfaces/interface.PivotTableProps.md)

ers

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableProps`](../../../interfaces/interface.PivotTableProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, PivotTable } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const pivotTableProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toPivotTableProps(widgetModel.value) : null,
);
</script>

<template>
 <PivotTable
   v-if="pivotTableProps"
   :dataSet="pivotTableProps.dataSet"
   :dataOptions="pivotTableProps.dataOptions"
   :filters="pivotTableProps.filters"
   :styleOptions="pivotTableProps.styleOptions"
 />
</template>
```

Note: this method is not supported for chart or table widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the [Chart](../../../charts/class.Chart.md).
Use [toTableProps](function.toTableProps.md) instead for getting props for the [Table](../../../data-grids/class.Table.md).

# Function toPivotTableWidgetProps

> **toPivotTableWidgetProps**(`widgetModel`): [`PivotTableWidgetProps`](../../../../sdk-ui/interfaces/interface.PivotTableWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a pivot table widget.

PivotTableWidgetProps`](../../../../sdk-ui/interfaces/interface.PivotTableWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a pivot table widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableWidgetProps`](../../../../sdk-ui/interfaces/interface.PivotTableWidgetProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const pivotTableWidgetProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toPivotTableWidgetProps(widgetModel.value) : null,
);
</script>
```

Note: this method is not supported for chart or table widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the [ChartWidget](../../../dashboards/class.ChartWidget.md).

# Function toTableProps

> **toTableProps**(`widgetModel`): [`TableProps`](../../../interfaces/interface.TableProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a table.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`TableProps`](../../../interfaces/interface.TableProps.md)

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`TableProps`](../../../interfaces/interface.TableProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, Table } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const tableProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toTableProps(widgetModel.value) : null,
);
</script>

<template>
 <Table
   v-if="tableProps"
   :dataSet="tableProps.dataSet"
   :dataOptions="tableProps.dataOptions"
   :filters="tableProps.filters"
   :styleOptions="tableProps.styleOptions"
 />
</template>
```

Note: this method is not supported for chart and pivot widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the [Chart](../../../charts/class.Chart.md).
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTable](../../../data-grids/class.PivotTable.md).

# Function toTextWidgetProps

> **toTextWidgetProps**(`widgetModel`): [`TextWidgetProps`](../../../interfaces/interface.TextWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a text widget.

getProps**(`widgetModel`): [`TextWidgetProps`](../../../interfaces/interface.TextWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a text widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`TextWidgetProps`](../../../interfaces/interface.TextWidgetProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid',
});

const textWidgetProps = computed(() =>
 widgetModel.value ? widgetModelTranslator.toTextWidgetProps(widgetModel.value) : null,
);
</script>
```

Note: this method is not supported for chart or pivot widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the [ChartWidget](../../../dashboards/class.ChartWidget.md).
Use [toPivotTableWidgetProps](function.toPivotTableWidgetProps.md) instead for getting props for the pivot table widget.

# Function toWidgetProps

> **toWidgetProps**(`widgetModel`): [`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

Translates [WidgetModel](../../interface.WidgetModel.md) to [WidgetProps](../../../type-aliases/type-alias.WidgetProps.md).

Model`): [`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

Translates [WidgetModel](../../interface.WidgetModel.md) to [WidgetProps](../../../type-aliases/type-alias.WidgetProps.md).

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

## Example

```vue
<script setup lang="ts">
import { widgetModelTranslator, useGetWidgetModel, Widget } from '@sisense/sdk-ui-vue';
import { computed } from 'vue';

const { data: widgetModel } = useGetWidgetModel({
  dashboardOid: 'your-dashboard-oid',
  widgetOid: 'your-widget-oid',
});

const widgetProps = computed(() =>
  widgetModel.value ? widgetModelTranslator.toWidgetProps(widgetModel.value) : null,
);
</script>

<template>
  <Widget v-if="widgetProps" v-bind="widgetProps" />
</template>
```

ps = computed(() =>
  widgetModel.value ? widgetModelTranslator.toWidgetProps(widgetModel.value) : null,
);
</script>

<template>
  <Widget v-if="widgetProps" v-bind="widgetProps" />
</template>
```

# Function useExecuteQueryByWidgetId <Badge type="fusionEmbed" text="Fusion Embed" />

> **useExecuteQueryByWidgetId**(`params`): `ToRefs`\< [`QueryByWidgetIdState`](../../sdk-ui/type-aliases/type-alias.QueryByWidgetIdState.md) \>

A Vue composable function `useExecuteQueryByWidgetId` for executing queries by widget ID using the Sisense SDK.
It simplifies the process of fetching data related to a specific widget based on provided parameters and manages
the query's loading, success, and error states. This composable integrates with the Sisense application context
to perform queries and handle their results within Vue components.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`ExecuteQueryByWidgetIdParams`](../interfaces/interface.ExecuteQueryByWidgetIdParams.md) \> | Parameters for executing the query, including widget ID, filters,<br />and other relevant query options. The `filters` parameter allows for specifying dynamic filters for the query. |

## Returns

`ToRefs`\< [`QueryByWidgetIdState`](../../sdk-ui/type-aliases/type-alias.QueryByWidgetIdState.md) \>

ions. The `filters` parameter allows for specifying dynamic filters for the query. |

## Returns

`ToRefs`\< [`QueryByWidgetIdState`](../../sdk-ui/type-aliases/type-alias.QueryByWidgetIdState.md) \>

## Example

Here's how to use `useExecuteQueryByWidgetId` within a Vue component:
```vue
<script setup>
import { ref } from 'vue';
import { useExecuteQueryByWidgetId } from '@sisense/sdk-ui-vue';

const widgetId = ref('your_widget_id_here');
const filters = ref([...]); // Define filters if necessary

const { data, isLoading, isError, isSuccess, error } = useExecuteQueryByWidgetId({
  widgetId,
  filters,
  enabled: true, // Optional: Use to enable/disable the query execution
});
</script>
```

This composable returns an object containing reactive state management properties for the query:
- `data`: The result of the query, undefined until the query completes successfully.
- `isLoading`: A boolean indicating if the query is currently loading.
- `isError`: A boolean indicating if an error occurred during the query execution.
- `isSuccess`: A boolean indicating if the query executed successfully.
- `error`: An Error object containing the error details if an error occurred.
- `query`: The query object returned for chart widget, useful for debugging or advanced handling.
- `pivotQuery`: The pivot query object returned for pivot widget, useful for debugging or advanced handling.

Utilizing this composable allows for declarative and reactive handling of widget-specific queries within Vue applications,
facilitating easier data fetching and state management with the Sisense SDK.

tilizing this composable allows for declarative and reactive handling of widget-specific queries within Vue applications,
facilitating easier data fetching and state management with the Sisense SDK.

# Function useFetch <Badge type="fusionEmbed" text="Fusion Embed" />

> **useFetch**<`TData`>(
  `path`,
  `init`?,
  `options`?): `ToRefs`\< `DataState`\< `TData` \> \>

A Vue composable function `useFetch` that allows to make authorized fetch request to any Sisense API.

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `TData` | `unknown` |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | [`MaybeRef`](../type-aliases/type-alias.MaybeRef.md)\< `string` \> | The endpoint path to fetch data from. This should be a relative path like '/api/v1/endpoint' |
| `init`? | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< `RequestInit` \> | The request init object |
| `options`? | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`UseFetchOptions`](../type-aliases/type-alias.UseFetchOptions.md) \> | The additional request options |

## Returns

`ToRefs`\< `DataState`\< `TData` \> \>

iases/type-alias.MaybeRefOrWithRefs.md)\< [`UseFetchOptions`](../type-aliases/type-alias.UseFetchOptions.md) \> | The additional request options |

## Returns

`ToRefs`\< `DataState`\< `TData` \> \>

## Example

How to use `useFetch` within a Vue component to fetch and display widget information:
```vue
<script setup>
import { ref } from "vue";
import { useFetch } from "./composables/useFetch";

const enabled = ref(true);
const { data, isLoading, isError, error } = useFetch(
  "api/v1/elasticubes/getElasticubes",
  {
    method: "POST",
  },
  {
    enabled,
  });
</script>
```

The composable returns an object with reactive properties that represent the state of the data fetch operation:
- `data`: The fetched data, which is `undefined` until the operation is successfully completed.
- `isLoading`: A boolean indicating whether the fetch operation is currently in progress.
- `isError`: A boolean indicating whether an error occurred during the fetch operation.
- `isSuccess`: A boolean indicating whether the fetch operation was successfully completed without any errors.
- `error`: An error object containing details about any errors that occurred during the fetch operation.

boolean indicating whether the fetch operation was successfully completed without any errors.
- `error`: An error object containing details about any errors that occurred during the fetch operation.

# Function useGetDashboardModel <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetDashboardModel**(`params`): `ToRefs`\< [`DashboardModelState`](../../sdk-ui/type-aliases/type-alias.DashboardModelState.md) \>

A Vue composable function `useGetDashboardModel` for fetching a Sisense dashboard model.
It simplifies the process of retrieving detailed dashboard data, including widgets if specified,
by managing the loading, success, and error states of the request. This composable is especially useful
for Vue applications that need to integrate Sisense dashboard analytics, providing a reactive way to fetch
and display dashboard data.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

reactive way to fetch
and display dashboard data.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`GetDashboardModelParams`](../interfaces/interface.GetDashboardModelParams.md) \> | The parameters for fetching the dashboard model, including the<br />dashboard OID and an option to include widgets within the dashboard. Supports dynamic parameter values through<br />Vue refs, allowing for reactive dashboard loading based on user interactions or other application states. |

## Returns

`ToRefs`\< [`DashboardModelState`](../../sdk-ui/type-aliases/type-alias.DashboardModelState.md) \>

r reactive dashboard loading based on user interactions or other application states. |

## Returns

`ToRefs`\< [`DashboardModelState`](../../sdk-ui/type-aliases/type-alias.DashboardModelState.md) \>

## Example

How to use `useGetDashboardModel` within a Vue component to fetch and display a Sisense dashboard:
```vue
<template>
 <Dashboard
   v-if="dashboardProps"
   :title="dashboardProps.title"
   :layoutOptions="dashboardProps.layoutOptions"
   :widgets="dashboardProps.widgets"
   :filters="dashboardProps.filters"
   :defaultDataSource="dashboardProps.dataSource"
   :widgetsOptions="dashboardProps.widgetsOptions"
   :styleOptions="dashboardProps.styleOptions"
 />
</template>

<script setup lang="ts">
import { dashboardModelTranslator, useGetDashboardModel } from '@sisense/sdk-ui-vue';

const { dashboard } = useGetDashboardModel({
 dashboardOid: '6441e728dac1920034bce737',
 includeWidgets: true,
 includeFilters: true,
});

const dashboardProps = computed(() =>
  dashboard.value ? dashboardModelTranslator.toDashboardProps(dashboard.value) : null,
);
</script>
```

The composable returns an object with reactive properties to manage the state of the dashboard model fetching process:
- `dashboard`: The fetched dashboard model data, which is `undefined` until the fetch completes successfully.
- `isLoading`: Indicates if the dashboard model is currently being fetched.
- `isError`: Indicates if an error occurred during the fetch process.
- `isSuccess`: Indicates if the dashboard model was successfully fetched without errors.
- `error`: Contains the error object if an error occurred during the fetch.

Utilizing this composable enables developers to declaratively integrate Sisense dashboard analytics into their Vue applications,
managing data fetching and state with minimal boilerplate code.

tch.

Utilizing this composable enables developers to declaratively integrate Sisense dashboard analytics into their Vue applications,
managing data fetching and state with minimal boilerplate code.

# Function useGetDashboardModels <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetDashboardModels**(`params`): `ToRefs`\< [`DashboardModelsState`](../../sdk-ui/type-aliases/type-alias.DashboardModelsState.md) \>

A Vue composable function `useGetDashboardModels` for fetching multiple Sisense dashboard models.
This function abstracts the complexities of managing API calls and state management for fetching an array of
dashboard models from Sisense. It provides a reactive interface to handle loading, success, and error states,
making it easier to integrate Sisense analytics within Vue applications.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`GetDashboardModelsParams`](../interfaces/interface.GetDashboardModelsParams.md) \> | Parameters for fetching the dashboard models, which can include filters,<br />sorting options, and pagination settings to customize the fetch operation. The parameters allow for precise control<br />over which dashboards are retrieved and in what order. |

nclude filters,<br />sorting options, and pagination settings to customize the fetch operation. The parameters allow for precise control<br />over which dashboards are retrieved and in what order. |

## Returns

`ToRefs`\< [`DashboardModelsState`](../../sdk-ui/type-aliases/type-alias.DashboardModelsState.md) \>

ow for precise control<br />over which dashboards are retrieved and in what order. |

## Returns

`ToRefs`\< [`DashboardModelsState`](../../sdk-ui/type-aliases/type-alias.DashboardModelsState.md) \>

## Example

How to use `useGetDashboardModels` within a Vue component to fetch and list Sisense dashboards:
```vue
<script setup>
import { ref } from 'vue';
import { useGetDashboardModels } from '@sisense/sdk-ui-vue';

const params = ref({
  // Define your parameters here, such as pagination settings, filters, etc.
});

const { data: dashboardModels, isLoading, isError, error } = useGetDashboardModels(params);
</script>
```

The composable returns an object with reactive properties that represent the state of the fetch operation:
- `data`: An array of dashboard models returned from the fetch operation. This is `undefined` until the operation completes successfully.
- `isLoading`: A boolean indicating whether the fetch operation is currently in progress.
- `isError`: A boolean indicating whether an error occurred during the fetch operation.
- `isSuccess`: A boolean indicating whether the fetch operation completed successfully without any errors.
- `error`: An error object containing details about any errors that occurred during the fetch operation.

This composable is ideal for Vue applications requiring a list of Sisense dashboards, providing a streamlined, reactive
way to fetch and manage the state of multiple dashboard models.

ch operation.

This composable is ideal for Vue applications requiring a list of Sisense dashboards, providing a streamlined, reactive
way to fetch and manage the state of multiple dashboard models.

# Function useGetHierarchyModels <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetHierarchyModels**(`params`): `ToRefs`\< `DataState`\< [`HierarchyModel`](../../sdk-ui/interfaces/interface.HierarchyModel.md)[] \> \>

A Vue composable function `useGetHierarchyModels` for retrieving hierarchy models from Sisense instance.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`GetHierarchyModelsParams`](../interfaces/interface.GetHierarchyModelsParams.md) \> | The parameters for fetching the hierarchy models. |

## Returns

`ToRefs`\< `DataState`\< [`HierarchyModel`](../../sdk-ui/interfaces/interface.HierarchyModel.md)[] \> \>

erarchyModelsParams.md) \> | The parameters for fetching the hierarchy models. |

## Returns

`ToRefs`\< `DataState`\< [`HierarchyModel`](../../sdk-ui/interfaces/interface.HierarchyModel.md)[] \> \>

## Example

Retrieve hierarchy models:

```vue
<script setup lang="ts">
import { useGetHierarchyModels } from '@sisense/sdk-ui-vue';
const { data: hierarchyModels } = useGetHierarchyModels({
  dataSource: DM.DataSource,
  dimension: DM.DimCountries.Region,
});
</script>
```

The composable returns an object with reactive properties that represent the state of the hierarchy models fetch operation:
- `data`: Fetched hierarchy models, which is `undefined` until the operation is successfully completed.
- `isLoading`: A boolean indicating whether the fetch operation is currently in progress.
- `isError`: A boolean indicating whether an error occurred during the fetch operation.
- `isSuccess`: A boolean indicating whether the fetch operation was successfully completed without any errors.
- `error`: An error object containing details about any errors that occurred during the fetch operation.

This composable streamlines the process of fetching and managing Sisense hierarchy models within Vue applications, providing
developers with a reactive and efficient way to integrate Sisense data visualizations and analytics.

the process of fetching and managing Sisense hierarchy models within Vue applications, providing
developers with a reactive and efficient way to integrate Sisense data visualizations and analytics.

# Function useGetSharedFormula <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetSharedFormula**(`params`): `ToRefs`\< [`SharedFormulaState`](../../sdk-ui/type-aliases/type-alias.SharedFormulaState.md) \>

A Vue composable function `useGetSharedFormula` for retrieving shared formulas from Sisense.
This function enables fetching a shared formula either by its unique OID or by its name and associated data source,
providing flexibility in how shared formulas are accessed. It manages the fetch operation's state, including loading,
success, and error states, offering a reactive way to integrate Sisense formulas into Vue applications.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`UseGetSharedFormulaParams`](../interfaces/interface.UseGetSharedFormulaParams.md) \> | Parameters for fetching the shared formula, including the formula's OID,<br />or its name and the data source. This allows for precise specification of the formula to be fetched, supporting dynamic<br />values through Vue refs for reactive fetching based on user interactions or other application states. |

e. This allows for precise specification of the formula to be fetched, supporting dynamic<br />values through Vue refs for reactive fetching based on user interactions or other application states. |

## Returns

`ToRefs`\< [`SharedFormulaState`](../../sdk-ui/type-aliases/type-alias.SharedFormulaState.md) \>

Vue refs for reactive fetching based on user interactions or other application states. |

## Returns

`ToRefs`\< [`SharedFormulaState`](../../sdk-ui/type-aliases/type-alias.SharedFormulaState.md) \>

## Example

How to use `useGetSharedFormula` within a Vue component to fetch a shared formula:
```vue
<script setup>
import { ref } from 'vue';
import { useGetSharedFormula } from '@sisense/sdk-ui-vue';

// To fetch by OID
const paramsByOid = ref({
  oid: 'your_formula_oid',
});

// Or to fetch by name and dataSource
const paramsByName = ref({
  name: 'your_formula_name',
  dataSource: 'your_data_source_id',
});

const { formula, isLoading, isError, isSuccess, error } = useGetSharedFormula(paramsByOid);
// Or use `paramsByName` instead of `paramsByOid` depending on the fetching method
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">Error: {{ error?.message }}</div>
  <div v-else-if="formula">{{ formula }}</div>
</template>
```

The composable returns an object with reactive properties to manage the state of the shared formula fetching process:
- `formula`: The fetched shared formula, which is `undefined` until the operation completes successfully, or `null` if not found. It can be either a `CalculatedMeasure` or `DimensionalCalculatedMeasure` based on the fetch result.
- `isLoading`: Indicates whether the fetch operation is currently in progress.
- `isError`: Indicates whether an error occurred during the fetch operation.
- `isSuccess`: Indicates whether the fetch operation completed successfully without any errors.
- `error`: Contains the error object if an error occurred during the fetch.
- `status`: The status of the fetch operation ('loading', 'success', or 'error').

This composable provides a streamlined, reactive approach to fetching shared formulas from Sisense, facilitating their integration into Vue applications for enhanced data analytics capabilities.

).

This composable provides a streamlined, reactive approach to fetching shared formulas from Sisense, facilitating their integration into Vue applications for enhanced data analytics capabilities.

# Function useGetWidgetModel <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetWidgetModel**(`params`): `ToRefs`\< `DataState`\< [`WidgetModel`](interface.WidgetModel.md) \> \>

A Vue composable function `useGetWidgetModel` for retrieving widget models from a Sisense dashboard.
It is designed to fetch a specific widget model based on the provided dashboard and widget OIDs, handling the loading,
success, and error states of the fetch operation. This composable is particularly useful for Vue applications that
require detailed information about a Sisense widget for data visualization or analytics purposes.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MaybeRefOrWithRefs`](../type-aliases/type-alias.MaybeRefOrWithRefs.md)\< [`GetWidgetModelParams`](../interfaces/interface.GetWidgetModelParams.md) \> | The parameters for fetching the widget model, including the `dashboardOid`<br />(the OID of the dashboard containing the widget) and the `widgetOid` (the OID of the widget to fetch). This allows for<br />precise and dynamic fetching of widget models based on application needs. |

the OID of the dashboard containing the widget) and the `widgetOid` (the OID of the widget to fetch). This allows for<br />precise and dynamic fetching of widget models based on application needs. |

## Returns

`ToRefs`\< `DataState`\< [`WidgetModel`](interface.WidgetModel.md) \> \>

dget to fetch). This allows for<br />precise and dynamic fetching of widget models based on application needs. |

## Returns

`ToRefs`\< `DataState`\< [`WidgetModel`](interface.WidgetModel.md) \> \>

## Example

Retrieve a widget model and use it to populate a `Chart` component:

```vue
<script setup lang="ts">
import { Chart, useGetWidgetModel, widgetModelTranslator } from '@sisense/sdk-ui-vue';
const { data: widget } = useGetWidgetModel({
  dashboardOid: 'your_dashboard_oid',
  widgetOid: 'your_widget_oid',
});
</script>
<template>
  <Chart v-if="widget" v-bind="widgetModelTranslator.toChartProps(widget)" />
</template>
```

The composable returns an object with reactive properties that represent the state of the widget model fetch operation:
- `data`: The fetched widget model, which is `undefined` until the operation is successfully completed. The widget model
  contains detailed information about the widget, such as its configuration, data, and settings.
- `isLoading`: A boolean indicating whether the fetch operation is currently in progress.
- `isError`: A boolean indicating whether an error occurred during the fetch operation.
- `isSuccess`: A boolean indicating whether the fetch operation was successfully completed without any errors.
- `error`: An error object containing details about any errors that occurred during the fetch operation.

This composable streamlines the process of fetching and managing Sisense widget models within Vue applications, providing
developers with a reactive and efficient way to integrate Sisense data visualizations and analytics.

nes the process of fetching and managing Sisense widget models within Vue applications, providing
developers with a reactive and efficient way to integrate Sisense data visualizations and analytics.

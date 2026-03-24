# Class ChartWidgetComponent

The Chart Widget component extending [ChartComponent](../charts/class.ChartComponent.md) to support widget style options.

[replaceFilters](function.replaceFilters.md)

# Class ChartWidgetComponent

The Chart Widget component extending [ChartComponent](../charts/class.ChartComponent.md) to support widget style options.

## Example

```html
<csdk-chart-widget
  [chartType]="chartWidget.chartType"
  [dataSource]="chartWidget.dataSource"
  [dataOptions]="chartWidget.dataOptions"
  [highlights]="filters"
  [title]="chartWidget.title"
  [description]="chartWidget.description"
  [beforeRender]="onBeforeRender"
  (dataPointClick)="logArguments($event)"
  (dataPointContextMenu)="logArguments($event)"
  (dataPointsSelect)="logArguments($event)"
/>
```
```ts
import { Component } from '@angular/core';
import { ChartType } from '@sisense/sdk-ui-angular';
import { filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
  filters = [filterFactory.members(DM.Divisions.Divison_name, ['Cardiology', 'Neurology'])];
  chartWidget = {
    chartType: 'column' as ChartType,
    dataSource: DM.DataSource,
    dataOptions: {
      category: [DM.Divisions.Divison_name],
      value: [measureFactory.sum(DM.Admissions.Cost_of_admission)],
      breakBy: [],
    },
    title: 'Chart Title',
    description: 'Chart Description',
  };
 logArguments(...args: any[]) {
  console.log(args);
}

onBeforeRender(options: any) {
  console.log('beforeRender');
  console.log(options);
  return options;
}

}
```
<img src="../../../img/angular-chart-widget-example.png" width="500px" />

g(args);
}

onBeforeRender(options: any) {
  console.log('beforeRender');
  console.log(options);
  return options;
}

}
```
<img src="../../../img/angular-chart-widget-example.png" width="500px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new ChartWidgetComponent**(`sisenseContextService`, `themeService`): [`ChartWidgetComponent`](class.ChartWidgetComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`ChartWidgetComponent`](class.ChartWidgetComponent.md)

## Properties

### Data

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Highlight filters that will highlight results that pass filter criteria

y results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Highlight filters that will highlight results that pass filter criteria

### Chart

#### chartType

> **chartType**: [`ChartType`](../type-aliases/type-alias.ChartType.md)

Default chart type of each series

***

#### dataOptions

> **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md)

Configurations for how to interpret and present the data passed to the chart

### Widget

#### description

> **description**: `string` \| `undefined`

Description of the widget

***

#### highlightSelectionDisabled

> **highlightSelectionDisabled**: `boolean` \| `undefined`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **styleOptions**: [`ChartWidgetStyleOptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md) \| `undefined`

Style options for both the chart and widget including the widget header

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

-alias.ChartWidgetStyleOptions.md) \| `undefined`

Style options for both the chart and widget including the widget header

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

### Callbacks

#### beforeRender

> **beforeRender**: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md) \| `undefined`

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**: `EventEmitter`\< [`ChartDataPointClickEvent`](../type-aliases/type-alias.ChartDataPointClickEvent.md) \>

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**: `EventEmitter`\< [`ChartDataPointContextMenuEvent`](../type-aliases/type-alias.ChartDataPointContextMenuEvent.md) \>

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**: `EventEmitter`\< [`ChartDataPointsEvent`](../type-aliases/type-alias.ChartDataPointsEvent.md) \>

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

a`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

# Class CustomWidgetsService

Service for working with custom widgets.

## Constructors

### constructor

> **new CustomWidgetsService**(): [`CustomWidgetsService`](class.CustomWidgetsService.md)

#### Returns

[`CustomWidgetsService`](class.CustomWidgetsService.md)

## Methods

### hasCustomWidget

> **hasCustomWidget**(`customWidgetType`): `boolean`

Checks if a custom widget is registered.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The type of the custom widget. |

#### Returns

`boolean`

True if the custom widget is registered, false otherwise.

***

cription |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The type of the custom widget. |

#### Returns

`boolean`

True if the custom widget is registered, false otherwise.

***

### registerCustomWidget

> **registerCustomWidget**<`Props`>(`customWidgetType`, `customWidget`): `void`

Registers a new custom widget.

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `Props` *extends* [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md)\< [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md), [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md), [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md), `Props` \> | [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md)\< [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md), [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md), [`AbstractDataPointWithEntries`](../../sdk-ui/type-aliases/type-alias.AbstractDataPointWithEntries.md) \> |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customWidgetType` | `string` | The unique identifier for the custom widget type. |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `Props` \> | The custom widget component class to register. |

#### Returns

`void`

widget type. |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `Props` \> | The custom widget component class to register. |

#### Returns

`void`

# Class DashboardComponent

An Angular component used for easily rendering a dashboard created in Sisense Fusion.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

y rendering a dashboard created in Sisense Fusion.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Example

```html
<csdk-dashboard
 *ngIf="dashboard"
 [title]="dashboard.title"
 [layoutOptions]="dashboard.layoutOptions"
 [widgets]="dashboard.widgets"
 [filters]="dashboard.filters"
 [defaultDataSource]="dashboard.defaultDataSource"
 [widgetsOptions]="dashboard.widgetsOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
  type DashboardProps,
  DashboardService,
  dashboardModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

 dashboard: DashboardProps | null = null;

 constructor(private dashboardService: DashboardService) {}

 async ngOnInit(): Promise<void> {
   const dashboardModel = await this.dashboardService.getDashboardModel('your-dashboard-oid', { includeWidgets: true, includeFilters: true });
   this.dashboard = dashboardModelTranslator.toDashboardProps(dashboardModel);
 }
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new DashboardComponent**(`sisenseContextService`, `themeService`): [`DashboardComponent`](class.DashboardComponent.md)

Constructor for the `Dashboard` component.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DashboardComponent`](class.DashboardComponent.md)

## Properties

### Constructor

#### sisenseContextService

> **sisenseContextService**: [`SisenseContextService`](../contexts/class.SisenseContextService.md)

Sisense context service

***

#### themeService

> **themeService**: [`ThemeService`](../contexts/class.ThemeService.md)

Theme service

eContextService`](../contexts/class.SisenseContextService.md)

Sisense context service

***

#### themeService

> **themeService**: [`ThemeService`](../contexts/class.ThemeService.md)

Theme service

### Other

#### config

> **config**: [`DashboardConfig`](../interfaces/interface.DashboardConfig.md) \| `undefined`

The configuration for the dashboard

***

#### defaultDataSource

> **defaultDataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

The default data source to use for the dashboard

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

The dashboard filters to be applied to each of the widgets based on the widget filter options

***

#### layoutOptions

> **layoutOptions**: [`DashboardLayoutOptions`](../interfaces/interface.DashboardLayoutOptions.md) \| `undefined`

Dashboard layout options

***

#### styleOptions

> **styleOptions**: [`DashboardStyleOptions`](../../sdk-ui/type-aliases/type-alias.DashboardStyleOptions.md) \| `undefined`

The style options for the dashboard

***

#### title

> **title**: `string` \| `undefined`

The title of the dashboard

***

#### widgets

> **widgets**: [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md)[]

The widgets to render in the dashboard

***

#### widgetsOptions

> **widgetsOptions**: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md) \| `undefined`

The options for each of the widgets

dgets to render in the dashboard

***

#### widgetsOptions

> **widgetsOptions**: [`WidgetsOptions`](../type-aliases/type-alias.WidgetsOptions.md) \| `undefined`

The options for each of the widgets

# Class PivotTableWidgetComponent

The Pivot Table Widget component extends the [PivotTableComponent](../data-grids/class.PivotTableComponent.md) component to support widget features,
including a header, widget style options, and more.

e Pivot Table Widget component extends the [PivotTableComponent](../data-grids/class.PivotTableComponent.md) component to support widget features,
including a header, widget style options, and more.

## Example

```html
<csdk-pivot-table-widget
 [dataSource]="pivotProps.dataSource"
 [dataOptions]="pivotProps.dataOptions"
 [filters]="pivotProps.filters"
 [styleOptions]="pivotProps.styleOptions"
 [title]="pivotProps.title"
 [description]="pivotProps.description"
/>
```
```ts
import { Component } from '@angular/core';
import { type PivotTableWidgetProps } from '@sisense/sdk-ui-angular';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-ecommerce';

@Component({
 selector: 'app-analytics',
 templateUrl: './analytics.component.html',
 styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {

 pivotProps: PivotTableWidgetProps = {
   dataSource: DM.DataSource,
   dataOptions: {
     rows: [
       { column: DM.Category.Category, includeSubTotals: true },
       { column: DM.Commerce.AgeRange, includeSubTotals: true },
       DM.Commerce.Condition,
     ],
     columns: [{ column: DM.Commerce.Gender, includeSubTotals: true }],
     values: [
       measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
       {
         column: measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue'),
         totalsCalculation: 'sum',
         dataBars: true,
       },
     ],
     grandTotals: { rows: true, columns: true },
   },
   filters: [filterFactory.members(DM.Commerce.Gender, ['Female', 'Male'])],
   styleOptions: { width: 1400, height: 600, rowsPerPage: 25 },
   title: 'Pivot Table Widget',
   description: 'Pivot Table Widget Description',
 };
}
```
<img src="../../../img/angular-pivot-table-widget-example.png" width="800px" />

t: 600, rowsPerPage: 25 },
   title: 'Pivot Table Widget',
   description: 'Pivot Table Widget Description',
 };
}
```
<img src="../../../img/angular-pivot-table-widget-example.png" width="800px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new PivotTableWidgetComponent**(`sisenseContextService`, `themeService`): [`PivotTableWidgetComponent`](class.PivotTableWidgetComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`PivotTableWidgetComponent`](class.PivotTableWidgetComponent.md)

## Properties

s.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`PivotTableWidgetComponent`](class.PivotTableWidgetComponent.md)

## Properties

### Data

#### dataOptions

> **dataOptions**: [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the table

***

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will highlight query results

### Widget

#### description

> **description**: `string` \| `undefined`

Title of the widget

***

#### drilldownOptions

> **drilldownOptions**: [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md) \| `undefined`

Configuration for the pivot table drilldown

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

ns`](../type-aliases/type-alias.PivotTableDrilldownOptions.md) \| `undefined`

Configuration for the pivot table drilldown

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

### Callbacks

#### dataPointClick

> **dataPointClick**: `EventEmitter`\< [`PivotTableDataPointEvent`](../type-aliases/type-alias.PivotTableDataPointEvent.md) \>

Callback function that is called when the pivot table cell is clicked

***

#### dataPointContextMenu

> **dataPointContextMenu**: `EventEmitter`\< [`PivotTableDataPointEvent`](../type-aliases/type-alias.PivotTableDataPointEvent.md) \>

Callback function that is called when the pivot table cell is right-clicked

### Representation

#### styleOptions

> **styleOptions**: [`PivotTableWidgetStyleOptions`](../type-aliases/type-alias.PivotTableWidgetStyleOptions.md) \| `undefined`

Style options for both the table and widget including the widget header

# Class WidgetComponent

Facade component that renders a widget within a dashboard based on the widget type.

\| `undefined`

Style options for both the table and widget including the widget header

# Class WidgetComponent

Facade component that renders a widget within a dashboard based on the widget type.

## Example

```html
<!--Component HTML template in example.component.html-->
<csdk-widget
 [id]="widgetProps.id"
 [title]="widgetProps.title"
 [widgetType]="widgetProps.widgetType"
 [chartType]="widgetProps.chartType"
 [dataSource]="widgetProps.dataSource"
 [dataOptions]="widgetProps.dataOptions"
/>
```

```ts
// Component behavior in example.component.ts
import { Component } from '@angular/core';
import { type WidgetProps } from '@sisense/sdk-ui-angular';

@Component({
 selector: 'example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 widgetProps: WidgetProps = {
   id: 'widget-id',
   widgetType: 'chart',
   chartType: 'column',
   title: 'Widget Title',
   dataSource: DM.DataSource,
   dataOptions: {
     category: [DM.Divisions.Divison_name],
     value: [measureFactory.sum(DM.Admissions.Cost_of_admission)],
     breakBy: [],
   },
 };
}
```
<img src="../../../img/angular-chart-widget-example.png" width="500px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

dmission)],
     breakBy: [],
   },
 };
}
```
<img src="../../../img/angular-chart-widget-example.png" width="500px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new WidgetComponent**(`sisenseContextService`, `themeService`): [`WidgetComponent`](class.WidgetComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`WidgetComponent`](class.WidgetComponent.md)

## Properties

### Data

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Highlight filters that will highlight results that pass filter criteria

y results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Highlight filters that will highlight results that pass filter criteria

### Chart

#### chartType

> **chartType**: [`ChartType`](../type-aliases/type-alias.ChartType.md) \| `undefined`

Default chart type of each series

***

#### dataOptions

> **dataOptions**: [`ChartDataOptions`](../type-aliases/type-alias.ChartDataOptions.md) \| [`GenericDataOptions`](../type-aliases/type-alias.GenericDataOptions.md) \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md) \| `undefined`

Configurations for how to interpret and present the data passed to the chart

ias.GenericDataOptions.md) \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md) \| `undefined`

Configurations for how to interpret and present the data passed to the chart

### Widget

#### customWidgetType

> **customWidgetType**: `string` \| `undefined`

Custom widget type. This is typically the name/ID of the custom widget.

***

#### description

> **description**: `string` \| `undefined`

Description of the widget

***

#### drilldownOptions

> **drilldownOptions**: [`DrilldownOptions`](../type-aliases/type-alias.DrilldownOptions.md) \| [`PivotTableDrilldownOptions`](../type-aliases/type-alias.PivotTableDrilldownOptions.md) \| `undefined`

List of categories to allow drilldowns on

***

#### id

> **id**: `string`

Unique identifier of the widget

***

#### styleOptions

> **styleOptions**: [`ChartWidgetStyleOptions`](../type-aliases/type-alias.ChartWidgetStyleOptions.md) \| [`CustomWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.CustomWidgetStyleOptions.md) \| [`PivotTableWidgetStyleOptions`](../type-aliases/type-alias.PivotTableWidgetStyleOptions.md) \| [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md) \| `undefined`

Style options for both the chart and widget including the widget header

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

***

#### widgetType

> **widgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Widget type

g the widget header

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

***

#### widgetType

> **widgetType**: `"chart"` \| `"custom"` \| `"pivot"` \| `"text"`

Widget type

### Callbacks

#### beforeRender

> **beforeRender**: [`BeforeRenderHandler`](../type-aliases/type-alias.BeforeRenderHandler.md) \| [`IndicatorBeforeRenderHandler`](../type-aliases/type-alias.IndicatorBeforeRenderHandler.md) \| `undefined`

A callback that allows you to customize the underlying chart element before it is rendered. The returned options are then used when rendering the chart.

This callback is not supported for Areamap Chart, Scattermap Chart, Table, and PivotTable.

***

#### dataPointClick

> **dataPointClick**: `EventEmitter`\< [`WidgetDataPointClickEvent`](../type-aliases/type-alias.WidgetDataPointClickEvent.md) \>

Click handler callback for a data point

***

#### dataPointContextMenu

> **dataPointContextMenu**: `EventEmitter`\< [`WidgetDataPointContextMenuEvent`](../type-aliases/type-alias.WidgetDataPointContextMenuEvent.md) \>

Context menu handler callback for a data point

***

#### dataPointsSelect

> **dataPointsSelect**: `EventEmitter`\< [`ChartDataPointsEvent`](../type-aliases/type-alias.ChartDataPointsEvent.md) \>

Handler callback for selection of multiple data points

***

#### dataReady

> **dataReady**: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

a`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

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


## Fusion Assets

ingDashboard: DashboardProps = {...}
const newFilters: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.replaceFilters(existingDashboard, newFilters);
```


## Fusion Assets

# Fusion Assets

Angular components, services, and utilities for working with Fusion dashboards, widgets, queries, and formulas

- [DashboardByIdComponent](class.DashboardByIdComponent.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [DashboardModel](interface.DashboardModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [dashboardModelTranslator](namespace.dashboardModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion dashboard model from and to other dashboard data structures
- [DashboardService](class.DashboardService.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [FormulaService](class.FormulaService.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [HierarchyService](class.HierarchyService.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [WidgetByIdComponent](class.WidgetByIdComponent.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [WidgetModel](interface.WidgetModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [widgetModelTranslator](namespace.widgetModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion widget model from and to other widget data structures
- [WidgetService](class.WidgetService.md) <Badge type="fusionEmbed" text="Fusion Embed" />

n Embed" /> - Utility functions to translate a Fusion widget model from and to other widget data structures
- [WidgetService](class.WidgetService.md) <Badge type="fusionEmbed" text="Fusion Embed" />

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

# Class DashboardByIdComponent <Badge type="fusionEmbed" text="Fusion Embed" />

An Angular component used for easily rendering a dashboard by its ID created in a Sisense Fusion instance.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Example

```ts
import { Component } from '@angular/core';
@Component({
  selector: 'code-example',
  template: `
    <div style="width: 100vw;">
      `<csdk-dashboard-by-id *ngIf="dashboardOid" [dashboardOid]="dashboardOid" />`
    </div>
  `,
 })
export class CodeExampleComponent {
  dashboardOid = 'your-dashboard-oid';
}
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new DashboardByIdComponent**(`sisenseContextService`, `themeService`): [`DashboardByIdComponent`](class.DashboardByIdComponent.md)

Constructor for the `DashboardById` component.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DashboardByIdComponent`](class.DashboardByIdComponent.md)

## Properties

### Constructor

#### sisenseContextService

> **sisenseContextService**: [`SisenseContextService`](../contexts/class.SisenseContextService.md)

Sisense context service

***

#### themeService

> **themeService**: [`ThemeService`](../contexts/class.ThemeService.md)

Theme service

### Other

#### config

> **config**: [`DashboardByIdConfig`](../interfaces/interface.DashboardByIdConfig.md) \| `undefined`

The configuration for the dashboard

***

#### dashboardOid

> **dashboardOid**: `string`

The OID of the dashboard to render.

onfig`](../interfaces/interface.DashboardByIdConfig.md) \| `undefined`

The configuration for the dashboard

***

#### dashboardOid

> **dashboardOid**: `string`

The OID of the dashboard to render.

# Class DashboardService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with Sisense Fusion dashboards.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Constructors

### constructor

> **new DashboardService**(`sisenseContextService`): [`DashboardService`](class.DashboardService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`DashboardService`](class.DashboardService.md)

## Methods

|
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`DashboardService`](class.DashboardService.md)

## Methods

### createComposedDashboard

> **createComposedDashboard**<`D`>(`initialDashboard`, `options` = `{}`): `object`

Сomposes dashboard or separate dashboard elements into a coordinated dashboard
with cross filtering, and change detection.

#### Type parameters

| Parameter |
| :------ |
| `D` *extends* [`ComposableDashboardProps`](../interfaces/interface.ComposableDashboardProps.md) \| [`DashboardProps`](../interfaces/interface.DashboardProps.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `initialDashboard` | `D` | Initial dashboard |
| `options` | [`UseComposedDashboardOptions`](../../sdk-ui/type-aliases/type-alias.UseComposedDashboardOptions.md) | Configuration options |

#### Returns

Reactive composed dashboard object and API methods for interacting with it.
The returned object includes a `destroy()` method that should be called when
the dashboard is no longer needed to prevent memory leaks (e.g., in `ngOnDestroy`).

##### `dashboard$`

**dashboard$**: `BehaviorSubject`\< `D` \>

##### `destroy`

**destroy**: () => `void`

###### Returns

`void`

##### `setFilters`

**setFilters**: (`filters`) => `Promise`\< `void` \>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] |

###### Returns

`Promise`\< `void` \>

##### `setWidgetsLayout`

**setWidgetsLayout**: (`newLayout`) => `Promise`\< `void` \>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `newLayout` | [`WidgetsPanelColumnLayout`](../interfaces/interface.WidgetsPanelColumnLayout.md) |

###### Returns

`Promise`\< `void` \>

#### Example

An example of using the `createComposedDashboard` to construct a composed dashboard and render it:
```html
 <!--Component HTML template in example.component.html-->
 <div *ngIf="dashboard$ | async as dashboard">
   <csdk-filter-tile
     *ngFor="let filter of getDashboardFilters(dashboard); trackBy: trackByIndex"
     [filter]="filter"
   />
   <csdk-widget
     *ngFor="let widget of dashboard.widgets; trackBy: trackByIndex"
     [id]="widget.id"
     [widgetType]="widget.widgetType"
     [chartType]="widget.chartType"
     [customWidgetType]="widget.customWidgetType"
     [dataSource]="widget.dataSource"
     [dataOptions]="widget.dataOptions"
     [filters]="widget.filters"
     [highlights]="widget.highlights"
     [styleOptions]="widget.styleOptions"
     [drilldownOptions]="widget.drilldownOptions"
     [title]="widget.title"
     [description]="widget.description"
     [beforeMenuOpen]="widget.beforeMenuOpen"
     (dataPointClick)="widget.dataPointClick?.($event)"
     (dataPointContextMenu)="widget.dataPointContextMenu?.($event)"
     (dataPointsSelect)="widget.dataPointsSelect?.($event)"
   />
 </div>
```

```ts
 // Component behavior in example.component.ts
 import { Component, OnDestroy } from '@angular/core';
 import { BehaviorSubject } from 'rxjs';
 import { DashboardService, type DashboardProps } from '@sisense/sdk-ui-angular';

 @Component({
   selector: 'example',
   templateUrl: './example.component.html',
   styleUrls: ['./example.component.scss'],
 })
 export class ExampleComponent implements OnDestroy {
   dashboard$: BehaviorSubject<DashboardProps> | undefined;
   private composedDashboard: ReturnType<DashboardService['createComposedDashboard']> | undefined;

   constructor(private dashboardService: DashboardService) {}

   ngOnInit() {
     const initialDashboard: DashboardProps = { ... };
     this.composedDashboard = this.dashboardService.createComposedDashboard(initialDashboard);
     this.dashboard$ = this.composedDashboard.dashboard$;
   }

   ngOnDestroy() {
     this.composedDashboard?.destroy();
   }

   trackByIndex = (index: number) => index;

   getDashboardFilters = ({ filters }: DashboardProps) => Array.isArray(filters) ? filters : [];
 }
```

***

this.composedDashboard?.destroy();
   }

   trackByIndex = (index: number) => index;

   getDashboardFilters = ({ filters }: DashboardProps) => Array.isArray(filters) ? filters : [];
 }
```

***

### getDashboardModel

> **getDashboardModel**(`dashboardOid`, `options`?): `Promise`\< [`DashboardModel`](interface.DashboardModel.md) \>

Retrieves an existing dashboard model from the Sisense instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboardOid` | `string` | Identifier of the dashboard |
| `options`? | [`GetDashboardModelOptions`](../interfaces/interface.GetDashboardModelOptions.md) | Advanced configuration options |

#### Returns

`Promise`\< [`DashboardModel`](interface.DashboardModel.md) \>

Dashboard model

***

### getDashboardModels

> **getDashboardModels**(`options`?): `Promise`\< [`DashboardModel`](interface.DashboardModel.md)[] \>

Retrieves existing dashboard models from the Sisense instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`GetDashboardModelsOptions`](../interfaces/interface.GetDashboardModelsOptions.md) | Advanced configuration options |

#### Returns

`Promise`\< [`DashboardModel`](interface.DashboardModel.md)[] \>

Dashboard models array

# Class FormulaService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with shared formulas.

## Constructors

Model`](interface.DashboardModel.md)[] \>

Dashboard models array

# Class FormulaService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with shared formulas.

## Constructors

### constructor

> **new FormulaService**(`sisenseContextService`): [`FormulaService`](class.FormulaService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`FormulaService`](class.FormulaService.md)

## Methods

### getSharedFormula

> **getSharedFormula**(`params`): `Promise`\< [`CalculatedMeasure`](../../sdk-data/interfaces/interface.CalculatedMeasure.md) \| `null` \>

Fetch a [shared formula](https://docs.sisense.com/main/SisenseLinux/shared-formulas.htm) from a Fusion instance.

The formula can be identified either by `oid` or by `name` and `dataSource` pair.

When the retrieval is successful but the shared formula is not found, the result is `null`. When the retrieval is not successful, the promise is rejected with an error.

## Example

Retrieve a shared formula by oid:

```ts
try {
  const formula = await formulaService.getSharedFormula({
    oid: 'd61c337b-fabc-4e9e-b4cc-a30116857153',
  });

  if (formula) {
    console.log('Formula found:', formula);
  } else {
    console.log('Formula not found');
  }
} catch (error) {
  console.error('Error:', error);
}
```

b4cc-a30116857153',
  });

  if (formula) {
    console.log('Formula found:', formula);
  } else {
    console.log('Formula not found');
  }
} catch (error) {
  console.error('Error:', error);
}
```

## Example

Retrieve a shared formula by name and data source:

```ts
try {
  const formula = await formulaService.getSharedFormula({
    name: 'My Shared Formula',
    dataSource: DM.DataSource,
  });

  if (formula) {
    console.log('Formula found:', formula);
  } else {
    console.log('Formula not found');
  }
} catch (error) {
  console.error('Error:', error);
}
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetSharedFormulaParams`](../interfaces/interface.GetSharedFormulaParams.md) | Parameters for retrieving the shared formula. Must include either `oid` or both `name` and `dataSource`. |

#### Returns

`Promise`\< [`CalculatedMeasure`](../../sdk-data/interfaces/interface.CalculatedMeasure.md) \| `null` \>

Promise that resolves to the shared formula, or `null` if not found

# Class HierarchyService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with Sisense Fusion hierarchies.

## Constructors

solves to the shared formula, or `null` if not found

# Class HierarchyService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with Sisense Fusion hierarchies.

## Constructors

### constructor

> **new HierarchyService**(`sisenseContextService`): [`HierarchyService`](class.HierarchyService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`HierarchyService`](class.HierarchyService.md)

## Methods

### getHierarchyModels

> **getHierarchyModels**(`params`): `Promise`\< [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[] \>

Retrieves existing hierarchy models from the Sisense instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetHierarchyModelsParams`](../interfaces/interface.GetHierarchyModelsParams.md) | Parameters to identify the target hierarchy models |

#### Returns

`Promise`\< [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[] \>

Hierarchy models array

HierarchyModelsParams.md) | Parameters to identify the target hierarchy models |

#### Returns

`Promise`\< [`HierarchyModel`](../interfaces/interface.HierarchyModel.md)[] \>

Hierarchy models array

# Class WidgetByIdComponent <Badge type="fusionEmbed" text="Fusion Embed" />

The `WidgetById` component, which is a thin wrapper on [ChartWidgetComponent](../dashboards/class.ChartWidgetComponent.md),
is used to render a widget created in a Sisense Fusion instance.

To learn more about using Sisense Fusion Widgets in Compose SDK, see
[Sisense Fusion Widgets](https://developer.sisense.com/guides/sdk/guides/charts/guide-fusion-widgets.html).

## Example

```html
<csdk-widget-by-id
   [widgetOid]="widgetOid"
   [dashboardOid]="dashboardOid"
   [includeDashboardFilters]="true"
/>
```
```ts
import { Component } from '@angular/core';

@Component({
 selector: 'app-widgets',
 templateUrl: './widgets.component.html',
 styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
 widgetOid: string = '60f3e3e3e4b0e3e3e4b0e3e3';
 dashboardOid: string = '60f3e3e3e4b0e3e3e4b0e3e3';
}
```

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

sComponent {
 widgetOid: string = '60f3e3e3e4b0e3e3e4b0e3e3';
 dashboardOid: string = '60f3e3e3e4b0e3e3e4b0e3e3';
}
```

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new WidgetByIdComponent**(`sisenseContextService`, `themeService`): [`WidgetByIdComponent`](class.WidgetByIdComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`WidgetByIdComponent`](class.WidgetByIdComponent.md)

## Properties

ontexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`WidgetByIdComponent`](class.WidgetByIdComponent.md)

## Properties

### Data

#### filters

> **filters**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

Provided filters will be merged with the existing filters from the widget configuration.

***

#### filtersMergeStrategy

> **filtersMergeStrategy**: `"codeFirst"` \| `"codeOnly"` \| `"widgetFirst"` \| `undefined`

Strategy for merging the existing widget filters (including highlights) with the filters provided via the `filters` and `highlights` props:

- `widgetFirst` - prioritizes the widget filters over the provided filters in case of filter conflicts by certain attributes.
- `codeFirst` - prioritizes the provided filters over the widget filters in case of filter conflicts by certain attributes.
- `codeOnly` - applies only the provided filters and completely ignores the widget filters.

If not specified, the default strategy is `codeFirst`.

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Highlight filters that will highlight results that pass filter criteria

***

#### includeDashboardFilters

> **includeDashboardFilters**: `boolean` \| `undefined`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

> **includeDashboardFilters**: `boolean` \| `undefined`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

### Widget

#### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

***

#### description

> **description**: `string` \| `undefined`

Description of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### highlightSelectionDisabled

> **highlightSelectionDisabled**: `boolean` \| `undefined`

Boolean flag whether selecting data points triggers highlight filter of the selected data

Recommended to turn on when the Chart Widget component is enhanced with data drilldown by the Drilldown Widget component

If not specified, the default value is `false`

***

#### styleOptions

> **styleOptions**: [`WidgetByIdStyleOptions`](../interfaces/interface.WidgetByIdStyleOptions.md) \| `undefined`

Style options for the widget including the widget container and the chart or table inside.

***

#### title

> **title**: `string` \| `undefined`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **widgetOid**: `string`

Identifier of the widget

: `string` \| `undefined`

Title of the widget

If not specified, it takes the existing value from the widget configuration.

***

#### widgetOid

> **widgetOid**: `string`

Identifier of the widget

### Callbacks

#### dataReady

> **dataReady**: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

# Class WidgetService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with Sisense Fusion widgets.

## Dashboards

ieved.
It can be used to inject modification of queried data.

# Class WidgetService <Badge type="fusionEmbed" text="Fusion Embed" />

Service for working with Sisense Fusion widgets.

## Dashboards

### createJtdWidget

> **createJtdWidget**(`widgetProps`, `jtdConfig`): `object`

Adds Jump To Dashboard (JTD) functionality to widget props.

Jump To Dashboard (JTD) allows users to navigate from one dashboard to another when interacting with widgets,
such as clicking on chart data points or using context menus. This method is particularly useful when rendering
Widget components directly (not through a Dashboard component), but you still want JTD navigation functionality.

For widgets that are part of a dashboard, consider using `applyJtdConfig` or `applyJtdConfigs` instead,
as they apply JTD configuration at the dashboard level rather than individual widget level.

Note: dashboard-only 'includeDashboardFilters' is not supported and would just be ignored, since we do not have a dashboard in the current context.

This method enhances the provided widget props with JTD navigation capabilities, including:
- Click and right-click event handlers for navigation
- Hyperlink styling for actionable pivot cells (when applicable)
- JTD icon display in widget headers

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `widgetProps` | [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `null` | Base widget props to enhance with JTD functionality |
| `jtdConfig` | [`JumpToDashboardConfig`](../interfaces/interface.JumpToDashboardConfig.md) \| [`JumpToDashboardConfigForPivot`](../interfaces/interface.JumpToDashboardConfigForPivot.md) | JTD configuration defining navigation targets and behavior |

#### Returns

Object containing:
        - `widget$`: The observable that emits enhanced widget props with JTD handlers.
        - `destroy`: Function to clean up resources. Call this when the component is destroyed.

##### `destroy`

**destroy**: () => `void`

###### Returns

`void`

##### `widget$`

**widget$**: `BehaviorSubject`\< [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `null` \>

#### Example

```TypeScript
import { Component, OnDestroy } from '@angular/core';
import {
  WidgetService,
  widgetModelTranslator,
  type WidgetProps,
} from '@sisense/sdk-ui-angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'code-example',
  template: `
    `<csdk-widget
      *ngIf="widgetProps$ && (widgetProps$ | async) as widgetProps"
      [id]="widgetProps.id"
      [widgetType]="widgetProps.widgetType"
      [chartType]="widgetProps.chartType"
      [title]="widgetProps.title"
      [dataSource]="widgetProps.dataSource"
      [dataOptions]="widgetProps.dataOptions"
      [filters]="widgetProps.filters"
      [highlights]="widgetProps.highlights"
      [styleOptions]="widgetProps.styleOptions"
      [beforeMenuOpen]="widgetProps.beforeMenuOpen"
      (dataPointClick)="widgetProps.dataPointClick?.($event)"
      (dataPointContextMenu)="widgetProps.dataPointContextMenu?.($event)"
      (dataPointsSelect)="widgetProps.dataPointsSelect?.($event)"
    />`
  `,
})
export class CodeExample implements OnDestroy {
  constructor(private widgetService: WidgetService) {}

  widgetProps$: BehaviorSubject<WidgetProps | null> | null = null;
  private jtdDestroy: (() => void) | null = null;

  async ngOnInit(): Promise<void> {
    const widget = await this.widgetService.getWidgetModel({
      dashboardOid: '65a82171719e7f004018691c',
      widgetOid: '65a82171719e7f004018691f',
    });

    const baseProps = widget
      ? widgetModelTranslator.toWidgetProps(widget)
      : null;

    if (baseProps) {
      const jtdConfig = {
        targets: [{ id: 'target-dashboard-id', caption: 'Details' }],
        interaction: { triggerMethod: 'rightclick' },
      };
      const jtdResult = this.widgetService.createJtdWidget(
        baseProps,
        jtdConfig,
      );
      this.widgetProps$ = jtdResult.widget$;
      this.jtdDestroy = jtdResult.destroy;
    }
  }

  ngOnDestroy(): void {
    this.jtdDestroy?.();
  }
}
```

baseProps,
        jtdConfig,
      );
      this.widgetProps$ = jtdResult.widget$;
      this.jtdDestroy = jtdResult.destroy;
    }
  }

  ngOnDestroy(): void {
    this.jtdDestroy?.();
  }
}
```

## Constructors

### constructor

> **new WidgetService**(`sisenseContextService`, `themeService`): [`WidgetService`](class.WidgetService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`WidgetService`](class.WidgetService.md)

## Methods

### getWidgetModel

> **getWidgetModel**(`params`): `Promise`\< [`WidgetModel`](interface.WidgetModel.md) \>

Retrieves an existing widget model from the Sisense instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetWidgetModelParams`](../interfaces/interface.GetWidgetModelParams.md) | Parameters to identify the target widget |

#### Returns

`Promise`\< [`WidgetModel`](interface.WidgetModel.md) \>

Widget model

# Function toChartProps

> **toChartProps**(`widgetModel`): [`ChartProps`](../../../interfaces/interface.ChartProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

el](../../interface.WidgetModel.md) to the props for rendering a chart.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartProps`](../../../interfaces/interface.ChartProps.md)

## Example

```html
<csdk-chart
 *ngIf="chartProps"
 [chartType]="chartProps.chartType"
 [dataSet]="chartProps.dataSet"
 [dataOptions]="chartProps.dataOptions"
 [filters]="chartProps.filters"
 [highlights]="chartProps.highlights"
 [styleOptions]="chartProps.styleOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type ChartProps
 WidgetService,
 widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 chartProps: ChartProps | null = null;

 constructor(private widgetService: WidgetService) {}

 async ngOnInit(): Promise<void> {
   const widgetModel = await widgetService.getWidgetModel({
     dashboardOid: 'your-dashboard-oid',
     widgetOid: 'your-widget-oid'
   });
   this.chartProps = widgetModelTranslator.toChartProps(widgetModel);
 }
}
```

Note: this method is not supported for pivot widgets.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTableComponent](../../../data-grids/class.PivotTableComponent.md).

is not supported for pivot widgets.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTableComponent](../../../data-grids/class.PivotTableComponent.md).

# Function toChartWidgetProps

> **toChartWidgetProps**(`widgetModel`): [`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

s

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

## Example

```html
<csdk-chart-widget
 *ngIf="chartWidgetProps"
 [chartType]="chartWidgetProps.chartType"
 [dataSource]="chartWidgetProps.dataSource"
 [dataOptions]="chartWidgetProps.dataOptions"
 [filters]="chartWidgetProps.filters"
 [highlights]="chartWidgetProps.highlights"
 [styleOptions]="chartWidgetProps.styleOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type ChartWidgetProps
 WidgetService,
 widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 chartWidgetProps: ChartWidgetProps | null = null;

 constructor(private widgetService: WidgetService) {}

 async ngOnInit(): Promise<void> {
   const widgetModel = await widgetService.getWidgetModel({
     dashboardOid: 'your-dashboard-oid',
     widgetOid: 'your-widget-oid'
   });
   this.chartWidgetProps = widgetModelTranslator.toChartWidgetProps(widgetModel);
 }
}
```

Note: this method is not supported for pivot widgets.

board-oid',
     widgetOid: 'your-widget-oid'
   });
   this.chartWidgetProps = widgetModelTranslator.toChartWidgetProps(widgetModel);
 }
}
```

Note: this method is not supported for pivot widgets.

# Function toDashboardProps

> **toDashboardProps**(`dashboardModel`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Translates [DashboardModel](../../interface.DashboardModel.md) to [DashboardProps](../../../interfaces/interface.DashboardProps.md).

## Parameters

| Parameter | Type |
| :------ | :------ |
| `dashboardModel` | [`DashboardModel`](../../interface.DashboardModel.md) |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Parameter | Type |
| :------ | :------ |
| `dashboardModel` | [`DashboardModel`](../../interface.DashboardModel.md) |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

## Example

```html
<csdk-dashboard
 *ngIf="dashboard"
 [title]="dashboard.title"
 [layoutOptions]="dashboard.layoutOptions"
 [widgets]="dashboard.widgets"
 [filters]="dashboard.filters"
 [defaultDataSource]="dashboard.defaultDataSource"
 [widgetsOptions]="dashboard.widgetsOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type DashboardProps,
 DashboardService,
 dashboardModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
 dashboard: DashboardProps | null = null;

 constructor(private dashboardService: DashboardService) {}

 async ngOnInit(): Promise<void> {
   const dashboardModel = await this.dashboardService.getDashboardModel('your-dashboard-oid', {
     includeWidgets: true,
     includeFilters: true,
   });
   this.dashboard = dashboardModelTranslator.toDashboardProps(dashboardModel);
 }
}
```

# Function toExecutePivotQueryParams

> **toExecutePivotQueryParams**(`widgetModel`): [`ExecutePivotQueryParams`](../../../interfaces/interface.ExecutePivotQueryParams.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the parameters for executing a query for the pivot widget.

PivotQueryParams`](../../../interfaces/interface.ExecutePivotQueryParams.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the parameters for executing a query for the pivot widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecutePivotQueryParams`](../../../interfaces/interface.ExecutePivotQueryParams.md)

## Example

```ts
const widgetModel = await widgetService.getWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid'
});
const executePivotQueryParams = widgetModelTranslator.toExecutePivotQueryParams(widgetModel);
const queryResult = await queryService.executePivotQuery(executeQueryParams);
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

Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecuteQueryParams`](../../../interfaces/interface.ExecuteQueryParams.md)

## Example

```ts
const widgetModel = await widgetService.getWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid'
});
const executeQueryParams = widgetModelTranslator.toExecuteQueryParams(widgetModel);
const queryResult = await queryService.executeQuery(executeQueryParams);
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

```html
<csdk-pivot-table
 *ngIf="pivotTableProps"
 [dataSet]="pivotTableProps.dataSet"
 [dataOptions]="pivotTableProps.dataOptions"
 [filters]="pivotTableProps.filters"
 [styleOptions]="pivotTableProps.styleOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type PivotTableProps
 WidgetService,
 widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 pivotTableProps: PivotTableProps | null = null;

 constructor(private widgetService: WidgetService) {}

 async ngOnInit(): Promise<void> {
   const widgetModel = await widgetService.getWidgetModel({
     dashboardOid: 'your-dashboard-oid',
     widgetOid: 'your-widget-oid'
   });
   this.pivotTableProps = widgetModelTranslator.toPivotTableProps(widgetModel);
 }
}
```

Note: this method is not supported for chart or table widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the [ChartComponent](../../../charts/class.ChartComponent.md).
Use [toTableProps](function.toTableProps.md) instead for getting props for the [TableComponent](../../../data-grids/class.TableComponent.md).

hartComponent](../../../charts/class.ChartComponent.md).
Use [toTableProps](function.toTableProps.md) instead for getting props for the [TableComponent](../../../data-grids/class.TableComponent.md).

# Function toPivotTableWidgetProps

> **toPivotTableWidgetProps**(`widgetModel`): [`PivotTableWidgetProps`](../../../interfaces/interface.PivotTableWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a pivot table widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableWidgetProps`](../../../interfaces/interface.PivotTableWidgetProps.md)

eter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableWidgetProps`](../../../interfaces/interface.PivotTableWidgetProps.md)

## Example

```html
<csdk-pivot-table-widget
 *ngIf="pivotWidgetProps"
 [dataSet]="pivotWidgetProps.dataSet"
 [dataOptions]="pivotWidgetProps.dataOptions"
 [filters]="pivotWidgetProps.filters"
 [styleOptions]="pivotWidgetProps.styleOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type PivotTableWidgetProps
 WidgetService,
 widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 pivotWidgetProps: PivotTableWidgetProps | null = null;

 constructor(private widgetService: WidgetService) {}

 async ngOnInit(): Promise<void> {
   const widgetModel = await widgetService.getWidgetModel({
     dashboardOid: 'your-dashboard-oid',
     widgetOid: 'your-widget-oid'
   });
   this.pivotWidgetProps = widgetModelTranslator.toPivotTableWidgetProps(widgetModel);
 }
}
```

Note: this method is not supported for chart or table widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the [ChartWidgetComponent](../../../dashboards/class.ChartWidgetComponent.md).

rted for chart or table widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the [ChartWidgetComponent](../../../dashboards/class.ChartWidgetComponent.md).

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

```html
<csdk-table
 *ngIf="tableProps"
 [dataSet]="tableProps.dataSet"
 [dataOptions]="tableProps.dataOptions"
 [filters]="tableProps.filters"
 [styleOptions]="tableProps.styleOptions"
/>
```

```ts
import { Component } from '@angular/core';
import {
 type TableProps
 WidgetService,
 widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 tableProps: TableProps | null = null;

 constructor(private widgetService: WidgetService) {}

 async ngOnInit(): Promise<void> {
   const widgetModel = await widgetService.getWidgetModel({
     dashboardOid: 'your-dashboard-oid',
     widgetOid: 'your-widget-oid'
   });
   this.tableProps = widgetModelTranslator.toTableProps(widgetModel);
 }
}
```

Note: this method is not supported for chart and pivot widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the [ChartComponent](../../../charts/class.ChartComponent.md).
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTableComponent](../../../data-grids/class.PivotTableComponent.md).

/../charts/class.ChartComponent.md).
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the [PivotTableComponent](../../../data-grids/class.PivotTableComponent.md).

# Function toTextWidgetProps

> **toTextWidgetProps**(`widgetModel`): [`TextWidgetProps`](../../../interfaces/interface.TextWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a text widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`TextWidgetProps`](../../../interfaces/interface.TextWidgetProps.md)

## Example

```ts
const widgetModel = await widgetService.getWidgetModel({
 dashboardOid: 'your-dashboard-oid',
 widgetOid: 'your-widget-oid'
});
const textWidgetProps = widgetModelTranslator.toTextWidgetProps(widgetModel);
```

Note: this method is not supported for chart or pivot widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the [ChartWidgetComponent](../../../dashboards/class.ChartWidgetComponent.md).
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

rameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

## Example

```html
<csdk-widget
  *ngIf="widgetProps"
  [id]="widgetProps.id"
  [widgetType]="widgetProps.widgetType"
  [chartType]="widgetProps.chartType"
  [dataSource]="widgetProps.dataSource"
  [dataOptions]="widgetProps.dataOptions"
  [filters]="widgetProps.filters"
  [highlights]="widgetProps.highlights"
  [styleOptions]="widgetProps.styleOptions"
  [title]="widgetProps.title"
  [description]="widgetProps.description"
/>
```

```ts
import { Component } from '@angular/core';
import {
  type WidgetProps,
  WidgetService,
  widgetModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  widgetProps: WidgetProps | null = null;

  constructor(private widgetService: WidgetService) {}

  async ngOnInit(): Promise<void> {
    const widgetModel = await widgetService.getWidgetModel({
      dashboardOid: 'your-dashboard-oid',
      widgetOid: 'your-widget-oid'
    });
    this.widgetProps = widgetModelTranslator.toWidgetProps(widgetModel);
  }
}
```

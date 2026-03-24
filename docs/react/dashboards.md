# Function ChartWidget

> **ChartWidget**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

The Chart Widget component extending the [Chart](../charts/function.Chart.md) component to support widget style options.
It can be used along with the [DrilldownWidget](../drilldown/function.DrilldownWidget.md) component to support advanced data drilldown.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ChartWidgetProps`](../interfaces/interface.ChartWidgetProps.md) | ChartWidget properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ChartWidget component representing a chart type as specified in `ChartWidgetProps.`[chartType](../interfaces/interface.ChartWidgetProps.md#charttype)

rns

`ReactElement`\< `any`, `any` \> \| `null`

ChartWidget component representing a chart type as specified in `ChartWidgetProps.`[chartType](../interfaces/interface.ChartWidgetProps.md#charttype)

## Example

Example of using the `ChartWidget` component to
plot a bar chart of the `Sample ECommerce` data source hosted in a Sisense instance.
```ts
<ChartWidget
  dataSource={DM.DataSource}
  chartType="bar"
  dataOptions={{
    category: [DM.Category.Category],
    value: [measureFactory.sum(DM.Commerce.Revenue)],
    breakBy: [],
  }}
/>
```

<img src="../../../img/chart-widget-with-drilldown-example-1.png" width="800px" />

# Function Dashboard

> **Dashboard**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component that renders a dashboard whose elements are customizable. It includes internal logic of applying common filters to widgets.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DashboardProps`](../interfaces/interface.DashboardProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DashboardProps`](../interfaces/interface.DashboardProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

## Example

Example of rendering a Fusion dashboard using the `useGetDashboardModel hook and the `Dashboard` component.

```ts
import { Dashboard, useGetDashboardModel, dashboardModelTranslator } from '@sisense/sdk-ui';

const CodeExample = () => {
 const { dashboard } = useGetDashboardModel({
   dashboardOid: '65a82171719e7f004018691c',
   includeFilters: true,
   includeWidgets: true,
 });

 return (
   <>
     {dashboard && (
       <Dashboard {...dashboardModelTranslator.toDashboardProps(dashboard)} />
     )}
   </>
 );
};

export default CodeExample;
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

# Function PivotTableWidget

> **PivotTableWidget**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component extending `PivotTable` to support widget style options.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PivotTableWidgetProps`](../interfaces/interface.PivotTableWidgetProps.md) | Pivot Table Widget properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Widget component representing a pivot table

WidgetProps`](../interfaces/interface.PivotTableWidgetProps.md) | Pivot Table Widget properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

Widget component representing a pivot table

## Example

Example of using the `PivotTableWidget` component to
plot a pivot table over the `Sample ECommerce` data source hosted in a Sisense instance.
```ts
<PivotTableWidget
  dataSource={DM.DataSource}
  dataOptions={{
    rows: [DM.Category.Category],
    values: [measureFactory.sum(DM.Commerce.Cost, 'Total Cost')]
  }}
  title="Pivot Table Widget Example"
  styleOptions={{
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
      backgroundColor: '#f5f5f5'
    }
  }}
/>
```
<img src="../../../img/pivot-widget-example.png" width="800px" />

# Function Widget

> **Widget**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Facade component that renders a widget within a dashboard based on the widget type.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

dget type.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

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

ard.
```ts
const existingDashboard: DashboardProps = {...};
const newFilters: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.addFilters(existingDashboard, newFilters);
```

# Function applyJtdConfig

> **applyJtdConfig**(
  `dashboard`,
  `widgetOid`,
  `config`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new `DashboardProps` instance with JTD (Jump To Dashboard) configuration applied to a single widget.

Jump To Dashboard (JTD) allows users to navigate from one dashboard to another when interacting with widgets,
such as clicking on chart data points or using context menus. This function applies JTD configuration to a specific
widget in a dashboard, enabling jump-to-dashboard functionality.

This function does not modify the original dashboard; instead, it returns a new `DashboardProps` instance with the JTD
configuration applied. If the specified widget does not exist in the dashboard, the function returns the original
`DashboardProps` unchanged and logs a warning to the console.

instance with the JTD
configuration applied. If the specified widget does not exist in the dashboard, the function returns the original
`DashboardProps` unchanged and logs a warning to the console.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard to modify. Must be a valid `DashboardProps` object containing the target widget. |
| `widgetOid` | `string` | The unique identifier (OID) of the widget to apply JTD configuration to. Must match an existing widget ID in the dashboard. |
| `config` | [`JumpToDashboardConfig`](../../../interfaces/interface.JumpToDashboardConfig.md) | The JTD configuration to apply. |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new `DashboardProps` instance with the JTD configuration applied to the specified widget. If the widget doesn't exist, returns the original dashboard unchanged.

## Example

Apply JTD configuration to a dashboard widget.
```ts
const jtdConfig: JumpToDashboardConfig = {
  targets: [{ id: 'dashboardId1', caption: 'Analytics Dashboard' }],
  interaction: {
    triggerMethod: 'rightclick',
    contextMenuCaption: 'Jump to Analytics'
  }
};

const updatedDashboard = dashboardHelpers.applyJtdConfig(dashboard, 'widgetId3', jtdConfig);
```

interaction: {
    triggerMethod: 'rightclick',
    contextMenuCaption: 'Jump to Analytics'
  }
};

const updatedDashboard = dashboardHelpers.applyJtdConfig(dashboard, 'widgetId3', jtdConfig);
```

# Function applyJtdConfigs

> **applyJtdConfigs**(`dashboard`, `jtdConfigs`): [`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

Creates a new `DashboardProps` instance with JTD (Jump To Dashboard) configurations applied to multiple widgets in a single operation.

Jump To Dashboard (JTD) allows users to navigate from one dashboard to another when interacting with widgets.
This function efficiently applies JTD configurations to multiple widgets in a single operation.

This function does not modify the original dashboard; instead, it returns a new `DashboardProps` instance with all valid
JTD configurations applied. Configurations for non-existent widgets are automatically filtered out, and warnings
are logged to the console for invalid widget OIDs.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dashboard` | [`DashboardProps`](../../../interfaces/interface.DashboardProps.md) | The original dashboard to modify. Must be a valid `DashboardProps` object with widgets to configure. |
| `jtdConfigs` | `Record`\< `string`, [`JumpToDashboardConfig`](../../../interfaces/interface.JumpToDashboardConfig.md) \> | An object mapping widget OIDs (keys) to their respective JTD configurations (values). |

| `Record`\< `string`, [`JumpToDashboardConfig`](../../../interfaces/interface.JumpToDashboardConfig.md) \> | An object mapping widget OIDs (keys) to their respective JTD configurations (values). |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new `DashboardProps` instance with all valid JTD configurations applied to their respective widgets. Invalid widget configurations are skipped and warnings are logged.

nterface.DashboardProps.md)

A new `DashboardProps` instance with all valid JTD configurations applied to their respective widgets. Invalid widget configurations are skipped and warnings are logged.

## Example

Apply a variety of Jump To Dashboard configuration options to multiple widgets in a single operation.
```ts
import { dashboardHelpers } from '@sisense/sdk-ui';

const dashboard: DashboardProps = {
  title: 'Executive Dashboard',
  widgets: [
    { id: 'widgetId1', widgetType: 'chart', chartType: 'column', dataOptions: {...} },
    { id: 'widgetId2', widgetType: 'chart', chartType: 'pie', dataOptions: {...} },
    { id: 'widgetId3', widgetType: 'table', dataOptions: {...} }
  ]
};

const jtdConfigs = {
  'widgetId1': {
    enabled: true,
    targets: [{ id: 'dashboardId1', caption: 'Sales Breakdown' }],
    interaction: {
      triggerMethod: 'rightclick'
    }
  },
  'widgetId2': {
    targets: [{ id: 'dashboardId2', caption: 'Revenue Analysis' }],
    interaction: {
      triggerMethod: 'click',
      contextMenuCaption: 'Analyze Revenue'
    }
  },
  'widgetId3': {
    enabled: true,
    targets: [
      { id: 'dashboardId3', caption: 'Customer Details' },
      { id: 'dashboardId4', caption: 'Product Analytics' }
    ],
    interaction: {
      triggerMethod: 'rightclick'
    }
  }
};

const updatedDashboard = dashboardHelpers.applyJtdConfigs(dashboard, jtdConfigs);
```

rdId4', caption: 'Product Analytics' }
    ],
    interaction: {
      triggerMethod: 'rightclick'
    }
  }
};

const updatedDashboard = dashboardHelpers.applyJtdConfigs(dashboard, jtdConfigs);
```

## Example

Batch apply JTD configurations with error handling.
```ts
const configsWithInvalidWidget = {
  'widgetId1': { targets: [{ id: 'dashboardId1', caption: 'Target' }] },
  'invalidWidgetId': { targets: [{ id: 'dashboardId2', caption: 'Other' }] } // Will be filtered out
};

const result = dashboardHelpers.applyJtdConfigs(dashboard, configsWithInvalidWidget);
// Console warning: "Widgets with OIDs [invalidWidgetId] not found in dashboard..."
// Only 'widgetId1' gets the JTD configuration applied
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

urns

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

## Example

Remove a filter from a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const filterToRemove: Filter = {...};
const updatedDashboard = dashboardHelpers.removeFilter(existingDashboard, filterToRemove);
```

dashboard.
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

## Example

Remove multiple filters from a dashboard.
```ts
const existingDashboard: DashboardProps = {...};
const filtersToRemove: Filter[] = [{...}, {...}, ...];
const updatedDashboard = dashboardHelpers.removeFilters(existingDashboard, filtersToRemove);
```

nst existingDashboard: DashboardProps = {...};
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

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the specified filter replaced.

ter.md) | The new filter to replace the existing one. |

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

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

A new dashboard instance with the updated filters.

ray of new filters or filter relations to set on the dashboard. |

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

> **useComposedDashboard**<`D`>(`initialDashboard`, `options`? = `{}`): [`ComposedDashboardResult`](../type-aliases/type-alias.ComposedDashboardResult.md)\< `D` \>

React hook that takes in separate dashboard elements and
composes them into a coordinated dashboard with change detection, cross filtering, and drill down.

## Type parameters

| Parameter | Description |
| :------ | :------ |
| `D` *extends* [`ComposableDashboardProps`](../type-aliases/type-alias.ComposableDashboardProps.md) \| [`DashboardProps`](../interfaces/interface.DashboardProps.md) | The type parameter for a dashboard properties, restricted to ComposableDashboardProps or DashboardProps |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `initialDashboard` | `D` | set of properties for the Dashboard component |
| `options`? | [`UseComposedDashboardOptions`](../type-aliases/type-alias.UseComposedDashboardOptions.md) | Options for the composable. |

ard` | `D` | set of properties for the Dashboard component |
| `options`? | [`UseComposedDashboardOptions`](../type-aliases/type-alias.UseComposedDashboardOptions.md) | Options for the composable. |

## Returns

[`ComposedDashboardResult`](../type-aliases/type-alias.ComposedDashboardResult.md)\< `D` \>

An object containing the composed dashboard and APIs to interact with it.

## Example

```ts
import { useComposedDashboard } from '@sisense/sdk-ui/dashboard/use-composed-dashboard.js';
import { Widget } from '@sisense/sdk-ui';
import { DashboardProps } from '@/dashboard/types.js';
import { FilterTile } from '@/filters';

const CodeExample = () => {
  const dashboardProps: DashboardProps = { ... };

  const {
    dashboard: { title, widgets, filters = [] }
  } = useComposedDashboard(dashboardProps);

  return (
    <div>
      <span>{title}</span>
      <div>
        {widgets.map((widget) => (
          <Widget key={widget.id} {...widget} />
        ))}
      </div>

      {Array.isArray(filters) ? filters.map((filter) => (
        <FilterTile
          key={filter.name}
          filter={filter}
          onChange={(filter) => console.log('Updated filter', filter)}
        />
      )) : null}
    </div>
  );
}
  export default CodeExample;
```

# Function useCustomWidgets

> **useCustomWidgets**(): `object`

Hook that provides API for configuring custom widgets.

## Returns

)) : null}
    </div>
  );
}
  export default CodeExample;
```

# Function useCustomWidgets

> **useCustomWidgets**(): `object`

Hook that provides API for configuring custom widgets.

## Returns

### `getCustomWidget`

**getCustomWidget**: (`customWidgetType`) => [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `any` \> \| `undefined`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `customWidgetType` | `string` |

#### Returns

[`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `any` \> \| `undefined`

### `hasCustomWidget`

**hasCustomWidget**: (`customWidgetType`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `customWidgetType` | `string` |

#### Returns

`boolean`

### `registerCustomWidget`

**registerCustomWidget**: <`T`>(`customWidgetType`, `customWidget`) => `void`

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `customWidgetType` | `string` |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `T` \> |

#### Returns

`void`

er | Type |
| :------ | :------ |
| `customWidgetType` | `string` |
| `customWidget` | [`CustomWidgetComponent`](../type-aliases/type-alias.CustomWidgetComponent.md)\< `T` \> |

#### Returns

`void`

## Example

Example of registering a custom widget in a dashboard:
```ts
import { useCustomWidgets, DashboardById } from '@sisense/sdk-ui';
import CustomHistogramWidget from './custom-histogram-widget';

const Example = () => {
  const { registerCustomWidget } = useCustomWidgets();
  registerCustomWidget('histogramwidget', CustomHistogramWidget);

  return <DashboardById dashboardOid="your-dashboard-oid" />;
}
```

() => {
  const { registerCustomWidget } = useCustomWidgets();
  registerCustomWidget('histogramwidget', CustomHistogramWidget);

  return <DashboardById dashboardOid="your-dashboard-oid" />;
}
```

# Function useJtdWidget

> **useJtdWidget**(...`args`): [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `null`

Hook to add Jump To Dashboard (JTD) functionality to individual Widget components.

Jump To Dashboard (JTD) allows users to navigate from one dashboard to another when interacting with widgets,
such as clicking on chart data points or using context menus. This hook is particularly useful when rendering
Widget components directly (not through a Dashboard component), but you still want JTD navigation functionality.

For widgets that are part of a dashboard, consider using `applyJtdConfig` or `applyJtdConfigs` instead,
as they apply JTD configuration at the dashboard level rather than individual widget level.

Note: dashboard-only 'includeDashboardFilters' is not supported and would just be ignored, since we do not have a dashboard in the current context.

This hook enhances the provided widget props with JTD navigation capabilities, including:
- Click and right-click event handlers for navigation
- Hyperlink styling for actionable pivot cells (when applicable)
- JTD icon display in widget headers

th JTD navigation capabilities, including:
- Click and right-click event handlers for navigation
- Hyperlink styling for actionable pivot cells (when applicable)
- JTD icon display in widget headers

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `null`, [`JumpToDashboardConfig`](../interfaces/interface.JumpToDashboardConfig.md) \| [`JumpToDashboardConfigForPivot`](../interfaces/interface.JumpToDashboardConfigForPivot.md)] |

## Returns

[`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `null`

Enhanced widget props with JTD navigation capabilities, menu combination, and styling applied

## Example

Basic JTD configuration with right-click navigation.
```typescript
import { useJtdWidget } from '@sisense/sdk-ui';

const jtdConfig: JumpToDashboardConfig = {
  targets: [{ id: 'dashboard-1', caption: 'Sales Dashboard' }],
  interaction: {
    triggerMethod: 'rightclick',
    captionPrefix: 'Jump to'
  }
};

const MyComponent = () => {
  const widgetWithJtd = useJtdWidget(myWidgetProps, jtdConfig);

  return <Widget {...widgetWithJtd} />;
};
```

Method: 'rightclick',
    captionPrefix: 'Jump to'
  }
};

const MyComponent = () => {
  const widgetWithJtd = useJtdWidget(myWidgetProps, jtdConfig);

  return <Widget {...widgetWithJtd} />;
};
```

## Example

JTD configuration with multiple targets and custom styling.
```typescript
const jtdConfig: JumpToDashboardConfig = {
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
```


## Fusion Assets

to',
    showIcon: true
  },
  filtering: {
    mergeWithTargetFilters: true,
    includeWidgetFilters: true
  }
};

const widgetWithJtd = useJtdWidget(chartProps, jtdConfig);
```


## Fusion Assets

# Fusion Assets

React components, hooks, and utilities for working with Fusion dashboards, widgets, queries, and formulas

- [DashboardById](function.DashboardById.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [DashboardModel](interface.DashboardModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [dashboardModelTranslator](namespace.dashboardModelTranslator/index.md) <Badge type="fusionEmbed" text="Fusion Embed" /> - Utility functions to translate a Fusion dashboard model from and to other dashboard data structures
- [ExecuteQueryByWidgetId](function.ExecuteQueryByWidgetId.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useExecuteQueryByWidgetId](function.useExecuteQueryByWidgetId.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useFetch](function.useFetch.md)
- [useGetDashboardModel](function.useGetDashboardModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetDashboardModels](function.useGetDashboardModels.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetHierarchyModels](function.useGetHierarchyModels.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetSharedFormula](function.useGetSharedFormula.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [useGetWidgetModel](function.useGetWidgetModel.md) <Badge type="fusionEmbed" text="Fusion Embed" />
- [WidgetById](function.WidgetById.md) <Badge type="fusionEmbed" text="Fusion Embed" />
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

# Function DashboardById <Badge type="fusionEmbed" text="Fusion Embed" />

> **DashboardById**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

React component that renders a dashboard created in Sisense Fusion by its ID.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DashboardByIdProps`](../interfaces/interface.DashboardByIdProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

## Example

```ts
import { DashboardById } from '@sisense/sdk-ui';

 const CodeExample = () => {
   return (
     <>
       <DashboardById
         dashboardOid="65a82171719e7f004018691c"
       />
     </>
   );
 };

 export default CodeExample;
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

8691c"
       />
     </>
   );
 };

 export default CodeExample;
```

To learn more about this and related dashboard components,
see [Embedded Dashboards](/guides/sdk/guides/dashboards/index.html).

# Function ExecuteQueryByWidgetId <Badge type="fusionEmbed" text="Fusion Embed" />

> **ExecuteQueryByWidgetId**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

Executes a query over the existing widget and renders a function as child component.
The child component is passed the state of the query as defined in [QueryByWidgetIdState](../type-aliases/type-alias.QueryByWidgetIdState.md).

This component takes the Children Prop Pattern and
offers an alternative approach to the [useExecuteQueryByWidgetId](function.useExecuteQueryByWidgetId.md) hook.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ExecuteQueryByWidgetIdProps`](../interfaces/interface.ExecuteQueryByWidgetIdProps.md) | ExecuteQueryByWidgetId properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ExecuteQueryByWidgetId component

idgetIdProps`](../interfaces/interface.ExecuteQueryByWidgetIdProps.md) | ExecuteQueryByWidgetId properties |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

ExecuteQueryByWidgetId component

## Example

The example below executes a query over the existing dashboard widget with the specified widget and dashboard OIDs.
```ts
<ExecuteQueryByWidgetId
  widgetOid={'64473e07dac1920034bce77f'}
  dashboardOid={'6441e728dac1920034bce737'}
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
</ExecuteQueryByWidgetId>
```

# Function WidgetById <Badge type="fusionEmbed" text="Fusion Embed" />

> **WidgetById**(`props`): `ReactElement`\< `any`, `any` \> \| `null`

The WidgetById component, which is a thin wrapper on the [ChartWidget](../dashboards/function.ChartWidget.md) component,
is used to render a widget created in a Sisense Fusion instance.

To learn more about using Sisense Fusion Widgets in Compose SDK,
see [Sisense Fusion Widgets](/guides/sdk/guides/charts/guide-fusion-widgets.html).

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

n Widgets in Compose SDK,
see [Sisense Fusion Widgets](/guides/sdk/guides/charts/guide-fusion-widgets.html).

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Example

Display two dashboard widgets from a Fusion instance.

<iframe
 src='https://csdk-playground.sisense.com/?example=fusion-assets%2Ffusion-widgets&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

## Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`WidgetByIdProps`](../interfaces/interface.WidgetByIdProps.md) |

## Returns

`ReactElement`\< `any`, `any` \> \| `null`

# Function toChartProps

> **toChartProps**(`widgetModel`): [`ChartProps`](../../../interfaces/interface.ChartProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartProps`](../../../interfaces/interface.ChartProps.md)

## Example

```ts
<Chart {...widgetModelTranslator.toChartProps(widgetModel)} />
```

Note: this method is not supported for pivot widgets.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the `<PivotTable>`  component.

tProps(widgetModel)} />
```

Note: this method is not supported for pivot widgets.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the `<PivotTable>`  component.

# Function toChartWidgetProps

> **toChartWidgetProps**(`widgetModel`): [`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a chart widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ChartWidgetProps`](../../../interfaces/interface.ChartWidgetProps.md)

## Example

```ts
<ChartWidget {...widgetModelTranslator.toChartWidgetProps(widgetModel)} />
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

## Example

```ts
<Dashboard {...dashboardModelTranslator.toDashboardProps(dashboardModel)} />
```

hboardModel.md) |

## Returns

[`DashboardProps`](../../../interfaces/interface.DashboardProps.md)

## Example

```ts
<Dashboard {...dashboardModelTranslator.toDashboardProps(dashboardModel)} />
```

# Function toExecutePivotQueryParams

> **toExecutePivotQueryParams**(`widgetModel`): [`ExecutePivotQueryParams`](../../../interfaces/interface.ExecutePivotQueryParams.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the parameters for executing a query for the pivot widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecutePivotQueryParams`](../../../interfaces/interface.ExecutePivotQueryParams.md)

## Example

```ts
const {data, isLoading, isError} = useExecutePivotQuery(widgetModelTranslator.toExecutePivotQueryParams(widgetModel));
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

WidgetModel.md) to the parameters for executing a query for the widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`ExecuteQueryParams`](../../../interfaces/interface.ExecuteQueryParams.md)

## Example

```ts
const {data, isLoading, isError} = useExecuteQuery(widgetModelTranslator.toExecuteQueryParams(widgetModel));
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

## Example

```ts
<PivotTable {...widgetModelTranslator.toPivotTableProps(widgetModel)} />
```

Note: this method is not supported for chart or table widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the `<Chart>`  component.
Use [toTableProps](function.toTableProps.md) instead for getting props for the `<Table>`  component.

[toChartProps](function.toChartProps.md) instead for getting props for the `<Chart>`  component.
Use [toTableProps](function.toTableProps.md) instead for getting props for the `<Table>`  component.

# Function toPivotTableWidgetProps

> **toPivotTableWidgetProps**(`widgetModel`): [`PivotTableWidgetProps`](../../../interfaces/interface.PivotTableWidgetProps.md)

Translates a [WidgetModel](../../interface.WidgetModel.md) to the props for rendering a pivot table widget.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`PivotTableWidgetProps`](../../../interfaces/interface.PivotTableWidgetProps.md)

## Example

```ts
<PivotTableWidget {...widgetModelTranslator.toPivotTableWidgetProps(widgetModel)} />
```

Note: this method is not supported for chart or table widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the `<ChartWidget>`  component.

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

```ts
<Table {...widgetModelTranslator.toTableProps(widgetModel)} />
```

Note: this method is not supported for chart and pivot widgets.
Use [toChartProps](function.toChartProps.md) instead for getting props for the `<Chart>`  component.
Use [toPivotTableProps](function.toPivotTableProps.md) instead for getting props for the `<PivotTable>`  component.

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
<TextWidget {...widgetModelTranslator.toTextWidgetProps(widgetModel)} />
```

Note: this method is not supported for chart or pivot widgets.
Use [toChartWidgetProps](function.toChartWidgetProps.md) instead for getting props for the `<ChartWidget>`  component.
Use [toPivotTableWidgetProps](function.toPivotTableWidgetProps.md) instead for getting props for the `<PivotTableWidget>`  component.

d) instead for getting props for the `<ChartWidget>`  component.
Use [toPivotTableWidgetProps](function.toPivotTableWidgetProps.md) instead for getting props for the `<PivotTableWidget>`  component.

# Function toWidgetProps

> **toWidgetProps**(`widgetModel`): [`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

Translates [WidgetModel](../../interface.WidgetModel.md) to [WidgetProps](../../../type-aliases/type-alias.WidgetProps.md).

## Parameters

| Parameter | Type |
| :------ | :------ |
| `widgetModel` | [`WidgetModel`](../../interface.WidgetModel.md) |

## Returns

[`WidgetProps`](../../../type-aliases/type-alias.WidgetProps.md)

## Example

```ts
<Widget {...widgetModelTranslator.toWidgetProps(widgetModel)} />
```

# Function useExecuteQueryByWidgetId <Badge type="fusionEmbed" text="Fusion Embed" />

> **useExecuteQueryByWidgetId**(...`args`): [`QueryByWidgetIdState`](../type-aliases/type-alias.QueryByWidgetIdState.md)

React hook that executes a data query extracted from an existing widget in the Sisense instance.

This approach, which offers an alternative to [ExecuteQueryByWidgetId](function.ExecuteQueryByWidgetId.md) component, is similar to React Query's `useQuery` hook.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecuteQueryByWidgetIdParams`](../interfaces/interface.ExecuteQueryByWidgetIdParams.md)] |

ns in Fusion are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ExecuteQueryByWidgetIdParams`](../interfaces/interface.ExecuteQueryByWidgetIdParams.md)] |

## Returns

[`QueryByWidgetIdState`](../type-aliases/type-alias.QueryByWidgetIdState.md)

Query state that contains the status of the query execution, the result data, the constructed query parameters, or the error if any occurred

## Example

The example below executes a query over the existing dashboard widget with the specified widget and dashboard OIDs.
```ts
 const { data, isLoading, isError } = useExecuteQueryByWidgetId({
   widgetOid: '64473e07dac1920034bce77f',
   dashboardOid: '6441e728dac1920034bce737'
 });
 if (isLoading) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (data) {
   return <div>{`Total Rows: ${data.rows.length}`}</div>;
 }
 return null;
```
See also hook [useExecuteQuery](../queries/function.useExecuteQuery.md), which execute a query specified in code.

# Function useFetch

> **useFetch**<`TData`, `TError`>(...`args`): [`UseQueryResult`](../type-aliases/type-alias.UseQueryResult.md)\< `TData`, `TError` \>

React hook that allows to make authorized fetch request to any Sisense API.

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |

r` \>

React hook that allows to make authorized fetch request to any Sisense API.

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`string`, `RequestInit`, \{<br />  `enabled`: `boolean`;<br />  `requestConfig`: [`RequestConfig`](../type-aliases/type-alias.RequestConfig.md);<br /> }] |

## Returns

[`UseQueryResult`](../type-aliases/type-alias.UseQueryResult.md)\< `TData`, `TError` \>

Query state that contains the status of the query execution, the result data, or the error if any occurred

## Example

```ts
 const { data, isLoading, error } = useFetch<unknown, Error>('api/v1/elasticubes/getElasticubes', {
   method: 'POST',
 });
```

# Function useGetDashboardModel <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetDashboardModel**(...`args`): [`DashboardModelState`](../type-aliases/type-alias.DashboardModelState.md)

React hook that retrieves an existing dashboard model from the Sisense instance.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetDashboardModelParams`](../interfaces/interface.GetDashboardModelParams.md)] |

nd Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetDashboardModelParams`](../interfaces/interface.GetDashboardModelParams.md)] |

## Returns

[`DashboardModelState`](../type-aliases/type-alias.DashboardModelState.md)

Dashboard load state that contains the status of the execution, the result dashboard model, or the error if any

## Example

An example of retrieving an existing dashboard model from the Sisense instance and render its widgets with component `WidgetById`:
```ts
 const { dashboard, isLoading, isError } = useGetDashboardModel({
   dashboardOid: '6448665edac1920034bce7a8',
   includeWidgets: true,
 });
 if (isLoading) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (dashboard) {
   return (
     <div>
       {`Dashboard Title - ${dashboard.title}`}
       {dashboard.widgets?.map((widget) => (
         <WidgetById key={widget.oid} widgetOid={widget.oid} dashboardOid={dashboard.oid} />
       ))}
     </div>
   );
 }
 return null;
```

d.title}`}
       {dashboard.widgets?.map((widget) => (
         <WidgetById key={widget.oid} widgetOid={widget.oid} dashboardOid={dashboard.oid} />
       ))}
     </div>
   );
 }
 return null;
```

# Function useGetDashboardModels <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetDashboardModels**(...`args`): [`DashboardModelsState`](../type-aliases/type-alias.DashboardModelsState.md)

React hook that retrieves existing dashboards that the user can access to from the Sisense instance.

**Note:** Dashboard and Widget extensions based on JS scripts and add-ons in Fusion – for example, Blox and Jump To Dashboard – are not supported.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetDashboardModelsParams`](../interfaces/interface.GetDashboardModelsParams.md)] |

## Returns

[`DashboardModelsState`](../type-aliases/type-alias.DashboardModelsState.md)

Load state that contains the status of the execution, the result dashboards, or the error if any

## Example

```ts
 const { dashboards, isLoading, isError } = useGetDashboardModels();
 if (isLoading) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (dashboards) {
   return <div>{`Total Dashboards: ${dashboards.length}`}</div>;
 }
 return null;
```

Loading) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (dashboards) {
   return <div>{`Total Dashboards: ${dashboards.length}`}</div>;
 }
 return null;
```

# Function useGetHierarchyModels <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetHierarchyModels**(...`args`): [`HierarchyModelsState`](../type-aliases/type-alias.HierarchyModelsState.md)

React hook that retrieves existing hierarchy models from a Fusion instance.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetHierarchyModelsParams`](../interfaces/interface.GetHierarchyModelsParams.md)] |

## Returns

[`HierarchyModelsState`](../type-aliases/type-alias.HierarchyModelsState.md)

Load state that contains the status of the execution, the result hierarchy models, or the error if one has occurred

## Example

Retrieve the hierarchy models and render their counts.
```ts
 const { hierarchies, isLoading, isError } = useGetHierarchyModels({
   dataSource: DM.DataSource,
   dimension: DM.Commerce.AgeRange,
 });

 if (isLoading) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (hierarchies) {
   return <div>{`Total Hierarchies: ${hierarchies.length}`}</div>;
 }
 return null;
```

ding) {
   return <div>Loading...</div>;
 }
 if (isError) {
   return <div>Error</div>;
 }
 if (hierarchies) {
   return <div>{`Total Hierarchies: ${hierarchies.length}`}</div>;
 }
 return null;
```

# Function useGetSharedFormula <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetSharedFormula**(...`args`): [`SharedFormulaState`](../type-aliases/type-alias.SharedFormulaState.md)

Fetch a [shared formula](https://docs.sisense.com/main/SisenseLinux/shared-formulas.htm) from the a Fusion instance.

The formula can be identified either by `oid` or by name and data source pair.

When the retrieval is successful but the shared formula is not found, the resulting `formula` is `null`. When the retrieval is not successful the resulting `formula` is `undefined`.

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`UseGetSharedFormulaParams`](../interfaces/interface.UseGetSharedFormulaParams.md)] |

## Returns

[`SharedFormulaState`](../type-aliases/type-alias.SharedFormulaState.md)

Formula load state that contains the status of the execution, the result formula, or the error if any

## Example

An example of retrieving a shared formula by oid:
   ```ts
   const { formula, isLoading, isError } = useGetSharedFormula({ oid: 'd61c337b-fabc-4e9e-b4cc-a30116857153' })
   ```

if any

## Example

An example of retrieving a shared formula by oid:
   ```ts
   const { formula, isLoading, isError } = useGetSharedFormula({ oid: 'd61c337b-fabc-4e9e-b4cc-a30116857153' })
   ```

## Example

An example of retrieving a shared formula by name and data source:
   ```ts
   const { formula, isLoading, isError } = useGetSharedFormula({ name: 'My Shared Formula', datasource: DM.DataSource })
   ```

# Function useGetWidgetModel <Badge type="fusionEmbed" text="Fusion Embed" />

> **useGetWidgetModel**(...`args`): [`WidgetModelState`](../type-aliases/type-alias.WidgetModelState.md)

React hook that retrieves an existing widget model from a Fusion instance.

**Note:** Widget extensions based on JS scripts and add-ons in Fusion are not supported.

## Example

Retrieve a widget model and use it to populate a `Chart` component

<iframe
 src='https://csdk-playground.sisense.com/?example=fusion-assets%2Fuse-get-widget-model&mode=docs'
 width=800
 height=870
 style='border:none;'
/>

Additional `useGetWidgetModel` examples:

- [Modify Chart Type](https://www.sisense.com/developers/playground/?example=fusion-assets%2Fuse-get-widget-model-change-chart-type)

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetWidgetModelParams`](../interfaces/interface.GetWidgetModelParams.md)] |

ssets%2Fuse-get-widget-model-change-chart-type)

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`GetWidgetModelParams`](../interfaces/interface.GetWidgetModelParams.md)] |

## Returns

[`WidgetModelState`](../type-aliases/type-alias.WidgetModelState.md)

Widget load state that contains the status of the execution, the result widget model, or the error if one has occurred

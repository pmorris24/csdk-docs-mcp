# Embedded Dashboards

Alternative to iFrame and Embed SDK, Compose SDK now allows you (1) to embed an existing Fusion dashboard into your application, (2) to customize the dashboard to your specific needs, or (3) to compose a dashboard fully in code. These capabilities are available in React, Angular, and Vue.

<SectionIndex />


<!-- Source: guides/dashboards/guide-1-embed-fusion-dashboard.md -->
# 1 | Embed Fusion Dashboard

oard fully in code. These capabilities are available in React, Angular, and Vue.

<SectionIndex />


<!-- Source: guides/dashboards/guide-1-embed-fusion-dashboard.md -->
# 1 | Embed Fusion Dashboard

## Component `DashboardById`

To embed a Fusion dashboard into your application as-is, you can use component `DashboardById` available from the `sdk-ui-*` package. This method is the quickest and simplest, but it comes with limited customization options for the dashboard.

The following code examples and screenshots use the Sample ECommerce dashboard identified by OID pre-existing in a Sisense instance.

##### React

```ts
import { DashboardById } from '@sisense/sdk-ui';

const CodeExample = () => {
  return (
    <DashboardById dashboardOid='your-dashboard-oid'/>
  );
};

export default CodeExample;
```

##### Angular

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'code-example',
  template: `
    <div style="width: 100vw;">
      <csdk-dashboard-by-id *ngIf="dashboardOid" [dashboardOid]="dashboardOid" />
    </div>
  `,
})
export class CodeExampleComponent {
  dashboardOid = 'your-dashboard-oid';
}
```

##### Vue
```ts
<script setup lang="ts">
import { DashboardById } from '@sisense/sdk-ui-vue';
import { ref } from 'vue';

const dashboardOid = ref<string>('your-dashboard-oid');
</script>
<template>
  <div style="width: 100vw"><DashboardById v-if="dashboardOid" :dashboardOid="dashboardOid" /></div>
</template>
```

![Embedded Sample ECommerce Dashboard](../../img/dashboard-guides/fusion-dashboard-light-theme.png 'Embedded Sample ECommerce Dashboard')

::: tip Note
Follow [this guide](../custom-widgets/index.md) to learn how to define your own custom widget component, and have it rendered in place of a corresponding Fusion widget plugin when using the `DashboardById` component.
:::

/custom-widgets/index.md) to learn how to define your own custom widget component, and have it rendered in place of a corresponding Fusion widget plugin when using the `DashboardById` component.
:::

## Simple customization

While `DashboardById` does not allow customizations, you can still use a `ThemeProvider` (React and Vue) or `ThemeService` (Angular) to apply a consistent look and feel to the dashboard elements including toolbar, widgets panel, and filters panel.

The following React code example renders the dashboard in dark mode:

```ts
import { DashboardById, ThemeProvider, getDefaultThemeSettings } from '@sisense/sdk-ui';

const CodeExample = () => {
  const darkTheme = getDefaultThemeSettings(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <DashboardById dashboardOid='your-dashboard-oid'/>
    </ThemeProvider>
  );
};

export default CodeExample;
```

![Embedded Sample ECommerce Dashboard in Dark Mode](../../img/dashboard-guides/fusion-dashboard-dark-theme.png 'Embedded Sample ECommerce Dashboard in Dark Mode')


## Next Up

In this section you learned how to embed a Fusion dashboard using component `DashboardById`. In the next section, you'll see how to customize the elements of the embedded Fusion dashboard.

Go to the [next lesson](./guide-2-customize-fusion-dashboard.md).



<!-- Source: guides/dashboards/guide-2-customize-fusion-dashboard.md -->
# 2 | Customize Fusion Dashboard

dded Fusion dashboard.

Go to the [next lesson](./guide-2-customize-fusion-dashboard.md).



<!-- Source: guides/dashboards/guide-2-customize-fusion-dashboard.md -->
# 2 | Customize Fusion Dashboard

## Generic `Dashboard` Component

You can write a little more code to embed the dashboard with customizations. In the following example, we use a combination of the `useGetDashboardModel` hook and `Dashboard` component, in lieu of the `DashboardById` component.

##### React

```ts
import { Dashboard, dashboardModelTranslator, useGetDashboardModel } from '@sisense/sdk-ui';

const CodeExample = () => {
  // DashboardModel is the data representation of a Fusion dashboard in Compose SDK
  const { dashboard } = useGetDashboardModel({
    dashboardOid: 'your-dashboard-oid',
    includeFilters: true,
    includeWidgets: true,
  });

  if (!dashboard) {
    return null;
  }

  // DashboardProps is a set of properties for the generic Dashboard component
  const { title, widgets, layoutOptions, filters, styleOptions, widgetsOptions } =
    dashboardModelTranslator.toDashboardProps(dashboard);

  return (
    <Dashboard
      title={title}
      layoutOptions={layoutOptions}
      widgets={widgets}
      filters={filters}
      styleOptions={styleOptions}
      widgetsOptions={widgetsOptions}
    />
  );
};

export default CodeExample;
```

##### Angular

```ts
import { Component } from '@angular/core';
import {
  type DashboardProps,
  DashboardService,
  dashboardModelTranslator,
} from '@sisense/sdk-ui-angular';

@Component({
  selector: 'code-example',
  template: `
    <div style="width: 100vw">
      <csdk-dashboard
        *ngIf="dashboardProps"
        [title]="dashboardProps.title"
        [layoutOptions]="dashboardProps.layoutOptions"
        [widgets]="dashboardProps.widgets"
        [filters]="dashboardProps.filters"
        [defaultDataSource]="dashboardProps.defaultDataSource"
        [widgetsOptions]="dashboardProps.widgetsOptions"
      />
    </div>
  `,
})
export class CodeExampleComponent {
  dashboardProps: DashboardProps | null = null;

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit(): Promise<void> {
    const dashboardModel = await this.dashboardService.getDashboardModel(
      '66fb233ae2c222003368dac1',
      { includeWidgets: true, includeFilters: true },
    );
    this.dashboardProps = dashboardModelTranslator.toDashboardProps(dashboardModel);
  }
}
```

##### Vue
```ts
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
  <div style="width: 100vw">
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
  </div>
</template>
```

![Embedded Sample ECommerce Dashboard](../../img/dashboard-guides/fusion-dashboard-light-theme.png 'Embedded Sample ECommerce Dashboard')

As shown in the code, there is a clear separation between `DashboardModel` and `DashboardProps`.

In Compose SDK, `DashboardModel` is the data representation of a Fusion dashboard – in other words, metadata of a Fusion dashboard.

On the other hand, `DashboardProps` is a set of properties for the generic `Dashboard` component.

Following the design principle of Separation of Concerns, `DashboardProps` and `Dashboard` are no longer coupled to the `DashboardModel`.

It is still very simple to translate the `DashboardModel` to `DashboardProps` using the provided utilty function, `dashboardModelTranslator.toDashboardProps`, and you have access to all elements of the dashboard for manipulation, which we will demonstrate in the next example.

using the provided utilty function, `dashboardModelTranslator.toDashboardProps`, and you have access to all elements of the dashboard for manipulation, which we will demonstrate in the next example.

## Customize Embedded Fusion Dashboard

Here, we add a dashboard filter on the `Gender` dimension. We also customize the look of the charts by adding rounded corners for the bars.

Basically, a dashboard and its props are composed of existing building blocks in Compose SDK including `ChartWidget` and `*FilterTile`. Any APIs supported in chart widgets like `onBeforeRender`, `onDataPointClick` are also available for manipulation in `DashboardProps.widgets`.

##### React

```ts
import { Dashboard, dashboardModelTranslator, useGetDashboardModel } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { filterFactory } from '@sisense/sdk-data';

const CodeExample = () => {
  // DashboardModel is the data representation of a Fusion dashboard in Compose SDK
  const { dashboard } = useGetDashboardModel({
    dashboardOid: 'your-dashboard-oid',
    includeFilters: true,
    includeWidgets: true,
  });

  if (!dashboard) {
    return null;
  }

  // DashboardProps is a set of properties for the Dashboard component
  const { title, widgets, layoutOptions, filters, styleOptions, widgetsOptions } =
    dashboardModelTranslator.toDashboardProps(dashboard);

  // Add a filter to the dashboard filters
  const updatedFilters = [...filters, filterFactory.members(DM.Commerce.Gender, ['Male'])];

  // Customize the look of the chart widgets that are based on Highcharts
  const updatedWidgets = widgets.map((widget) => ({
    ...widget,
    onBeforeRender: (highchartsOptions: any) => {
      highchartsOptions.series.forEach((s: any) => {
        s.borderRadiusTopLeft = `10px`;
        s.borderRadiusTopRight = `10px`;
      });
      return highchartsOptions;
    },
  }));

  return (
    <Dashboard
      title={title}
      layoutOptions={layoutOptions}
      widgets={updatedWidgets}
      filters={updatedFilters}
      styleOptions={styleOptions}
      widgetsOptions={widgetsOptions}
    />
  );
};

export default CodeExample;
```

##### Angular

```ts
import { Component } from '@angular/core';
import {
  type DashboardProps,
  DashboardService,
  dashboardModelTranslator,
} from '@sisense/sdk-ui-angular';
import * as DM from './sample-ecommerce';
import { filterFactory } from '@sisense/sdk-data';

@Component({
  selector: 'code-example',
  template: `
    <div style="width: 100vw">
      <csdk-dashboard
        *ngIf="dashboardProps"
        [title]="dashboardProps.title"
        [layoutOptions]="dashboardProps.layoutOptions"
        [widgets]="dashboardProps.widgets"
        [filters]="dashboardProps.filters"
        [defaultDataSource]="dashboardProps.defaultDataSource"
        [widgetsOptions]="dashboardProps.widgetsOptions"
      />
    </div>
  `,
})
export class CodeExampleComponent {
  dashboardProps: DashboardProps | null = null;

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit(): Promise<void> {
    const dashboardModel = await this.dashboardService.getDashboardModel(
      'your-dashboard-oid',
      { includeWidgets: true, includeFilters: true },
    );

    this.dashboardProps = dashboardModelTranslator.toDashboardProps(dashboardModel);

    const { filters, widgets } = this.dashboardProps;

    // Add a filter to the dashboard filters
    this.dashboardProps.filters = [
      ...(filters ?? []),
      filterFactory.members(DM.Commerce.Gender, ['Male']),
    ];

    // Customize the look of the chart widgets that are based on Highcharts
    this.dashboardProps.widgets = widgets.map((widget) => ({
      ...widget,
      onBeforeRender: (highchartsOptions: any) => {
        highchartsOptions.series.forEach((s: any) => {
          s.borderRadiusTopLeft = `10px`;
          s.borderRadiusTopRight = `10px`;
        });
        return highchartsOptions;
      },
    }));
  }
}
```

##### Vue
```ts
<script setup lang="ts">
import { filterFactory } from '@sisense/sdk-data';
import { dashboardModelTranslator, useGetDashboardModel, Dashboard } from '@sisense/sdk-ui-vue';
import * as DM from '../assets/sample-ecommerce-model';
import { computed } from 'vue';

const { dashboard } = useGetDashboardModel({
  dashboardOid: '66fb233ae2c222003368dac1',
  includeWidgets: true,
  includeFilters: true,
});

const dashboardProps = computed(() => {
  if (!dashboard.value) {
    return null;
  }

  const props = dashboardModelTranslator.toDashboardProps(dashboard.value);

  return {
    ...props,
    // Add a filter to the dashboard filters
    filters: [...props.filters, filterFactory.members(DM.Commerce.Gender, ['Male'])],
    // Customize the look of the chart widgets that are based on Highcharts
    widgets: props.widgets.map((widget) => ({
      ...widget,
      onBeforeRender: (highchartsOptions: any) => {
        highchartsOptions.series.forEach((s: any) => {
          s.borderRadiusTopLeft = `10px`;
          s.borderRadiusTopRight = `10px`;
        });
        return highchartsOptions;
      },
    })),
  };
});
</script>
<template>
  <div style="width: 100vw">
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
  </div>
</template>
```

![Embedded Sample ECommerce Dashboard with Customizations](../../img/dashboard-guides/fusion-dashboard-customized.png 'Embedded Sample ECommerce Dashboard with Customizations')


::: tip Note
Alternative to manipulating `DashboardProps.filters` directly, you can use dashboard helper functions available from each of the `sdk-ui-*` packages.
:::

hboard with Customizations')


::: tip Note
Alternative to manipulating `DashboardProps.filters` directly, you can use dashboard helper functions available from each of the `sdk-ui-*` packages.
:::


## Next Up

In this section you learned how to embed a Fusion dashboard and customize it to your specific needs using the `Dashboard` component. In the next section, you'll see how to compose a dashboard fully in code.

Go to the [next lesson](./guide-3-compose-dashboard-in-code.md).



<!-- Source: guides/dashboards/guide-3-compose-dashboard-in-code.md -->
# 3 | Compose Dashboard In Code

It’s time to detach ourselves from Fusion dashboards.

In the following examples, you'll learn how to programmatically create a dashboard based on the data fetched from Sisense using the generic `Dashboard` component — without relying on any pre-existing Fusion dashboards.

::: tip Note
The examples below assume that the app is already set up to connect to the Sample ECommerce data model in a Sisense instance using `SisenseContextProvider` – see [Quickstart guides](../../getting-started/index.md).

To keep the code concise, the examples are provided in React, but the same configurations can be adapted for Angular and Vue.
:::

rovider` – see [Quickstart guides](../../getting-started/index.md).

To keep the code concise, the examples are provided in React, but the same configurations can be adapted for Angular and Vue.
:::

## Create an Empty Dashboard

In this example, we'll start `dashboardProps` almost empty with just title and an empty array of WidgetProps.

##### React

```ts
import { Dashboard, DashboardProps, WidgetProps } from '@sisense/sdk-ui';
import { useMemo } from 'react';

const CodeExample = () => {
  // DashboardProps is a set of properties for the Dashboard component
  const dashboardProps: DashboardProps = useMemo(() => {
    const widgets: WidgetProps[] = [];

    return { title: 'Fabulous ECommerce Dashboard', widgets };
  }, []);

  return <Dashboard {...dashboardProps} />;
};

export default CodeExample;
```

![Empty Sample ECommerce Dashboard](../../img/dashboard-guides/generic-dashboard-empty.png 'Empty Sample ECommerce Dashboard')

<Dashboard {...dashboardProps} />;
};

export default CodeExample;
```

![Empty Sample ECommerce Dashboard](../../img/dashboard-guides/generic-dashboard-empty.png 'Empty Sample ECommerce Dashboard')

## Add a Chart Widget

Let's add a chart widget to the list of widgets. It is a simple indicator displaying Total Revenue.

##### React

```ts
import { Dashboard, DashboardProps, WidgetProps } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { useMemo } from 'react';
import { measureFactory } from '@sisense/sdk-data';

const CodeExample = () => {
  // DashboardProps is a set of properties for the Dashboard component
  const dashboardProps: DashboardProps = useMemo(() => {
    const widgets: WidgetProps[] = [
      {
        id: 'widget-1',
        widgetType: 'chart',
        chartType: 'indicator',
        title: 'Total Revenue',
        dataOptions: {
          value: [
            {
              column: measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue').format('0,0$'),
            },
          ],
        },
      },
    ];

    return { title: 'Fabulous ECommerce Dashboard', widgets };
  }, []);

  return <Dashboard {...dashboardProps} />;
};

export default CodeExample;
```

![Dashboard with One Widget](../../img/dashboard-guides/generic-dashboard-one-chart-widget.png 'Dashboard with One Widget')

Let's take a closer look at `WidgetProps`:
- `id` is needed for layout and widget options.
- `widgetType` can be one of the four currently supported types: `chart`, `pivot`, `text`, and `plugin`.
- `filters` is not provided as the dashboard does not have any filters yet.
- `layoutOptions` helps to customize how `widgets` are laid out. If it is not provided, dashboard will use a simple vertical column layout by default.

This isn't a very interesting dashboard. Let’s improve this in the next example.

ze how `widgets` are laid out. If it is not provided, dashboard will use a simple vertical column layout by default.

This isn't a very interesting dashboard. Let’s improve this in the next example.

## Add Dashboard Filters, Other Widgets, and Set Up Layout

Below is the code for the same Sample Ecommerce dashboard created programatically.

##### React

```ts
import {
  Dashboard,
  DashboardProps,
  IndicatorStyleOptions,
  LineStyleOptions,
  NumberFormatConfig,
  ScatterStyleOptions,
  StackableStyleOptions,
  WidgetProps,
  WidgetsPanelColumnLayout,
} from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { useMemo } from 'react';
import { Filter, filterFactory, measureFactory } from '@sisense/sdk-data';

const seriesToColorMap = {
  Female: '#00cee6',
  Male: '#9b9bd7',
  Unspecified: '#6eda55',
};

export const getIndicatorStyleOptions = (
  title: string,
  secondaryTitle = '',
): IndicatorStyleOptions => {
  return {
    indicatorComponents: {
      title: {
        shouldBeShown: true,
        text: title,
      },
      secondaryTitle: {
        text: secondaryTitle,
      },
      ticks: {
        shouldBeShown: true,
      },
      labels: {
        shouldBeShown: true,
      },
    },
    subtype: 'indicator/gauge',
    skin: 1,
  };
};

const scatterStyleOptions: ScatterStyleOptions = {
  xAxis: {
    logarithmic: true,
  },
  yAxis: {
    logarithmic: true,
  },
  height: 454,
};

const barStyleOptions: StackableStyleOptions = {
  subtype: 'bar/stacked',
  height: 454,
};

const numberFormat: NumberFormatConfig = {
  name: 'Numbers',
  decimalScale: 2,
  trillion: true,
  billion: true,
  million: true,
  kilo: true,
  thousandSeparator: true,
  prefix: false,
  symbol: '$',
};

const lineChartStyleOptions: LineStyleOptions = {
  subtype: 'line/spline',
  lineWidth: { width: 'bold' },
  yAxis: {
    title: { enabled: true, text: 'SALES' },
  },
  y2Axis: {
    title: { enabled: true, text: 'QUANTITY' },
  },
  markers: {
    enabled: true,
    fill: 'hollow',
  },
  height: 454,
};

const CodeExample = () => {
  // DashboardProps is a set of properties for the Dashboard component
  const dashboardProps: DashboardProps = useMemo(() => {
    const widgets: WidgetProps[] = [
      {
        id: 'widget-1',
        widgetType: 'chart',
        chartType: 'indicator',
        title: 'Total Revenue',
        dataOptions: {
          value: [
            {
              column: DM.Measures.SumRevenue,
              numberFormatConfig: numberFormat,
            },
          ],
          secondary: [],
          min: [measureFactory.constant(0)],
          max: [measureFactory.constant(125000000)],
        },
        styleOptions: getIndicatorStyleOptions('Total Revenue'),
      },
      {
        id: 'widget-2',
        widgetType: 'chart',
        chartType: 'indicator',
        title: 'Total Units Sold',
        dataOptions: {
          value: [DM.Measures.Quantity],
          secondary: [],
          min: [measureFactory.constant(0)],
          max: [measureFactory.constant(250000)],
        },
        styleOptions: getIndicatorStyleOptions('Total Units Sold'),
      },
      {
        id: 'widget-3',
        widgetType: 'chart',
        chartType: 'indicator',
        title: 'Total Sales',
        dataOptions: {
          value: [measureFactory.countDistinct(DM.Commerce.VisitID)],
          secondary: [],
          min: [measureFactory.constant(0)],
          max: [measureFactory.constant(100000)],
        },
        styleOptions: getIndicatorStyleOptions('Total Sales'),
      },
      {
        id: 'widget-4',
        widgetType: 'chart',
        chartType: 'indicator',
        title: 'Total Brands',
        dataOptions: {
          value: [measureFactory.countDistinct(DM.Brand.BrandID)],
          secondary: [],
          min: [measureFactory.constant(0)],
          max: [measureFactory.constant(2500)],
        },
        styleOptions: getIndicatorStyleOptions('Total Brands'),
      },
      {
        id: 'widget-5',
        widgetType: 'chart',
        chartType: 'line',
        title: 'REVENUE vs.UNITS SOLD',
        dataOptions: {
          category: [
            {
              column: DM.Commerce.Date.Months,
              dateFormat: 'yy-MM',
            },
          ],
          value: [
            DM.Measures.SumRevenue,
            {
              column: DM.Measures.Quantity,
              showOnRightAxis: true,
              chartType: 'column',
            },
          ],
          breakBy: [],
        },
        styleOptions: lineChartStyleOptions,
      },
      {
        id: 'widget-6',
        widgetType: 'chart',
        chartType: 'pie',
        title: 'GENDER BREAKDOWN',
        dataOptions: {
          category: [DM.Commerce.Gender],
          value: [DM.Measures.SumRevenue],
        },
        filters: [filterFactory.members(DM.Commerce.Gender, ['Male', 'Female'])],
        styleOptions: scatterStyleOptions,
      },
      {
        id: 'widget-7',
        widgetType: 'chart',
        chartType: 'pie',
        title: 'AGE RANGE BREAKDOWN',
        dataOptions: {
          category: [DM.Commerce.AgeRange],
          value: [DM.Measures.SumRevenue],
        },
        filters: [filterFactory.members(DM.Commerce.Gender, ['Male', 'Female'])],
        styleOptions: scatterStyleOptions,
      },
      {
        id: 'widget-8',
        widgetType: 'chart',
        chartType: 'scatter',
        title: 'TOP CATEGORIES BY REVENUE, UNITS SOLD AND GENDER',
        dataOptions: {
          x: DM.Measures.SumRevenue,
          y: DM.Measures.Quantity,
          breakByPoint: DM.Category.Category,
          breakByColor: DM.Commerce.Gender,
          size: DM.Measures.SumCost,
          seriesToColorMap,
        },
        filters: [
          filterFactory.members(DM.Commerce.Gender, ['Male', 'Female']),
          filterFactory.topRanking(DM.Category.Category, DM.Measures.SumRevenue, 10),
        ],
        styleOptions: scatterStyleOptions,
      },
      {
        id: 'widget-9',
        widgetType: 'chart',
        chartType: 'bar',
        title: 'TOP 3 CATEGORIES BY REVENUE AND AGE',
        dataOptions: {
          category: [DM.Commerce.AgeRange],
          value: [DM.Measures.SumRevenue],
          breakBy: [DM.Category.Category],
        },
        filters: [filterFactory.topRanking(DM.Category.Category, DM.Measures.SumRevenue, 3)],
        styleOptions: barStyleOptions,
      },
    ];

    const filters: Filter[] = [
      filterFactory.members(DM.Commerce.Date.Years, ['2013-01-01T00:00:00']),
      filterFactory.members(DM.Country.Country, []),
      filterFactory.greaterThan(DM.Commerce.Revenue, 0),
    ];

    const widgetsPanelLayout: WidgetsPanelColumnLayout = {
      columns: [
        {
          widthPercentage: 20,
          rows: [
            { cells: [{ widthPercentage: 100, widgetId: 'widget-1' }] },
            { cells: [{ widthPercentage: 100, widgetId: 'widget-2' }] },
            { cells: [{ widthPercentage: 100, widgetId: 'widget-3' }] },
            { cells: [{ widthPercentage: 100, widgetId: 'widget-4' }] },
          ],
        },
        {
          widthPercentage: 40,
          rows: [
            { cells: [{ widthPercentage: 100, widgetId: 'widget-5' }] },
            {
              cells: [
                { widthPercentage: 50, widgetId: 'widget-6' },
                { widthPercentage: 50, widgetId: 'widget-7' },
              ],
            },
          ],
        },
        {
          widthPercentage: 40,
          rows: [
            { cells: [{ widthPercentage: 100, widgetId: 'widget-8' }] },
            { cells: [{ widthPercentage: 100, widgetId: 'widget-9' }] },
          ],
        },
      ],
    };

    return {
      title: 'Fabulous ECommerce Dashboard',
      widgets,
      filters,
      layoutOptions: { widgetsPanel: widgetsPanelLayout },
    };
  }, []);

  return <Dashboard {...dashboardProps} />;
};

export default CodeExample;
```

![Sample ECommerce Dashboard In Code](../../img/dashboard-guides/generic-dashboard-ecommerce.png 'Sample ECommerce Dashboard In Code')

The dashboard is fully interactive. Cross filtering and drilldown work as expected.

At first glance, this code may seem like a significant leap from the previous example. However, upon closer inspection, you'll notice there's no advanced coding or complex algorithms involved. It's simply a standard configuration of dashboard elements: 9 widgets, 3 dashboard filters, and a widget layout.
The Compose SDK handles all the internal wiring and interactions for you.

involved. It's simply a standard configuration of dashboard elements: 9 widgets, 3 dashboard filters, and a widget layout.
The Compose SDK handles all the internal wiring and interactions for you.


## Learn More

In this section you learned how to compose a dashboard fully in code using the `Dashboard` component.

To deepen your understanding, check out [the API Doc](../../modules/index.md) and [Compose SDK Playground](https://www.sisense.com/developers/playground/?example=fusion-assets%2Ffusion-dashboard).



<!-- Source: guides/drilldown/index.md -->

e API Doc](../../modules/index.md) and [Compose SDK Playground](https://www.sisense.com/developers/playground/?example=fusion-assets%2Ffusion-dashboard).



<!-- Source: guides/drilldown/index.md -->

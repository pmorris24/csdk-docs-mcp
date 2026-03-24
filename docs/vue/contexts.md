# Contexts

Vue context components

- [SisenseContextProvider](class.SisenseContextProvider.md)
- [ThemeProvider](class.ThemeProvider.md)

# Class SisenseContextProvider

Sisense Context Provider Component allowing you to connect to
a Sisense instance and provide that context
to all Compose SDK components in your application.

ider.md)

# Class SisenseContextProvider

Sisense Context Provider Component allowing you to connect to
a Sisense instance and provide that context
to all Compose SDK components in your application.

## Example

Here's how to use the `SisenseContextProvider` component to wrap your Sisense-enabled application:
Add SisenseContextProvider to the main component of your app as below and then wrap
other SDK components inside this component.
```vue
<template>
  <SisenseContextProvider
    :url="sisenseUrl"
    :defaultDataSource="defaultDataSource"
    :ssoEnabled="true"
    :token="authToken"
    :wat="watToken"
    :appConfig="appConfigurations"
  >
    <!-- Your application components here -->
  </SisenseContextProvider>
</template>

<script>
import { ref } from 'vue';
import SisenseContextProvider from './SisenseContextProvider.vue';

export default {
  components: { SisenseContextProvider },
  setup() {
    const sisenseUrl = ref('https://your-sisense-instance.com');
    const defaultDataSource = ref('default_datasource_id');
    const authToken = ref('your_auth_token');
    const watToken = ref('your_wat_token');
    const appConfigurations = ref({});

    return { sisenseUrl, defaultDataSource, authToken, watToken, appConfigurations };
  }
};
</script>
```

## Param

Sisense context provider props

## Properties

onst appConfigurations = ref({});

    return { sisenseUrl, defaultDataSource, authToken, watToken, appConfigurations };
  }
};
</script>
```

## Param

Sisense context provider props

## Properties

### Sisense App

#### appConfig

> **`readonly`** **appConfig**?: [`AppConfig`](../type-aliases/type-alias.AppConfig.md)

Application specific configurations such as locale and date formats.

***

#### defaultDataSource

> **`readonly`** **defaultDataSource**?: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

Default data source explicitly set to be used by child components that are not defined with a data source.

***

#### url

> **`readonly`** **url**: `string`

URL of the Sisense environment the app connects to

a source explicitly set to be used by child components that are not defined with a data source.

***

#### url

> **`readonly`** **url**: `string`

URL of the Sisense environment the app connects to

### Sisense Authentication

#### ssoEnabled

> **`readonly`** **ssoEnabled**?: `boolean`

[Single Sign-On](https://docs.sisense.com/main/SisenseLinux/using-single-sign-on-to-access-sisense.htm) toggle.

Set to `true` to use SSO authentication. When `true`, this overrides any other authentication methods. Defaults to `false`.

***

#### token

> **`readonly`** **token**?: `null` \| `string`

Token for [bearer authentication](https://developer.sisense.com/guides/restApi/using-rest-api.html).

To signify that the token is pending (e.g., being generated), set the value to `null`. This is supported for React and Vue only.

***

#### wat

> **`readonly`** **wat**?: `null` \| `string`

[Web Access Token](https://docs.sisense.com/main/SisenseLinux/using-web-access-token.htm).

To signify that the token is pending (e.g., being generated), set the value to `null`. This is supported for React and Vue only.

# Class ThemeProvider

Theme provider, which allows you to adjust the look and feel of child components.

Components not wrapped in a theme provider use the current theme from the connected Fusion instance by default.

er

Theme provider, which allows you to adjust the look and feel of child components.

Components not wrapped in a theme provider use the current theme from the connected Fusion instance by default.

## Example

Example of a theme provider, which changes the colors and font of the nested indicator chart:
```vue
<template>
  <ThemeProvider :theme="customTheme">
    <IndicatorChart .... />
  </ThemeProvider>
</template>

<script>
import { ref } from 'vue';
import ThemeProvider from './ThemeProvider.vue';

export default {
  components: { ThemeProvider },
  setup() {
    const customTheme = ref({
        chart: {
          backgroundColor: '#333333',
          textColor: 'orange',
          secondaryTextColor: 'purple',
        },
        typography: {
          fontFamily: 'impact',
        },
    });

    return { customTheme };
  }
};
</script>
```

Alternatively, to fetch theme settings based on a theme ID:
```vue
<template>
  <ThemeProvider :theme="'theme_id_string'">
    <!-- Components that will use the fetched theme settings -->
  </ThemeProvider>
</template>
```

Indicator chart with custom theme settings:

<img src="../../../img/indicator-chart-example-2.png" width="400px" />

For comparison, indicator chart with default theme settings:

<img src="../../../img/indicator-chart-example-1.png" width="400px" />

## See

[ThemeSettings](../interfaces/interface.ThemeSettings.md) and [IndicatorChart](../charts/class.IndicatorChart.md)

## Param

Theme provider props

cator-chart-example-1.png" width="400px" />

## See

[ThemeSettings](../interfaces/interface.ThemeSettings.md) and [IndicatorChart](../charts/class.IndicatorChart.md)

## Param

Theme provider props

## Properties

### theme

> **`readonly`** **theme**?: [`ThemeSettings`](../interfaces/interface.ThemeSettings.md) \| `string`

Theme settings object for custom themes or a string identifier to fetch theme settings. When provided as an object, it merges with the default theme settings. When provided as a string, it attempts to fetch theme settings using the provided ID.


## Charts

fier to fetch theme settings. When provided as an object, it merges with the default theme settings. When provided as a string, it attempts to fetch theme settings using the provided ID.


## Charts

# Charts

Vue components and utilities for working with charts

- [AreaChart](class.AreaChart.md)
- [AreamapChart](class.AreamapChart.md)
- [AreaRangeChart](class.AreaRangeChart.md)
- [BarChart](class.BarChart.md)
- [BoxplotChart](class.BoxplotChart.md)
- [boxWhiskerProcessResult](function.boxWhiskerProcessResult.md) - Utility function that combines box whisker data and outliers data
- [CalendarHeatmapChart](class.CalendarHeatmapChart.md)
- [Chart](class.Chart.md) - Common component for rendering charts of different types including table
- [ColumnChart](class.ColumnChart.md)
- [FunnelChart](class.FunnelChart.md)
- [IndicatorChart](class.IndicatorChart.md)
- [LineChart](class.LineChart.md)
- [PieChart](class.PieChart.md)
- [PolarChart](class.PolarChart.md)
- [ScatterChart](class.ScatterChart.md)
- [ScattermapChart](class.ScattermapChart.md)
- [StreamgraphChart](class.StreamgraphChart.md)
- [SunburstChart](class.SunburstChart.md)
- [TreemapChart](class.TreemapChart.md)

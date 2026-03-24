# Contexts

Angular context modules, services, and variables

- [SdkUiModule](class.SdkUiModule.md)
- [SISENSE\_CONTEXT\_CONFIG\_TOKEN](variable.SISENSE_CONTEXT_CONFIG_TOKEN.md)
- [SisenseContextService](class.SisenseContextService.md)
- [THEME\_CONFIG\_TOKEN](variable.THEME_CONFIG_TOKEN.md)
- [ThemeService](class.ThemeService.md)

# Class SdkUiModule

SDK UI Module, which is a container for components.

s.SisenseContextService.md)
- [THEME\_CONFIG\_TOKEN](variable.THEME_CONFIG_TOKEN.md)
- [ThemeService](class.ThemeService.md)

# Class SdkUiModule

SDK UI Module, which is a container for components.

## Example

Example of importing `SdkUiModule` and injecting [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) into your application:

```ts
export const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: "<instance url>", // replace with the URL of your Sisense instance
  token: "<api token>", // replace with the API token of your user account
  defaultDataSource: DM.DataSource,
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```

## Constructors

### constructor

> **new SdkUiModule**(): [`SdkUiModule`](class.SdkUiModule.md)

#### Returns

[`SdkUiModule`](class.SdkUiModule.md)

# Class SisenseContextService

Service for managing Sisense Fusion context and client application lifecycle.

This service provides a centralized way to configure and manage the connection to a Sisense instance within Angular applications.

## Constructors

e Fusion context and client application lifecycle.

This service provides a centralized way to configure and manage the connection to a Sisense instance within Angular applications.

## Constructors

### constructor

> **new SisenseContextService**(`sisenseContextConfig`?): [`SisenseContextService`](class.SisenseContextService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextConfig`? | [`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) |

#### Returns

[`SisenseContextService`](class.SisenseContextService.md)

## Methods

### getConfig

> **getConfig**(): [`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) \| `undefined`

Retrieves the current [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) configuration object.

#### Returns

[`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) \| `undefined`

The current configuration object, or undefined if not yet configured

***

nfiguration object.

#### Returns

[`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) \| `undefined`

The current configuration object, or undefined if not yet configured

***

### setConfig

> **setConfig**(`config`): `Promise`\< `void` \>

Configures and initializes the Sisense context with the provided settings.

This method allows to establish a connection to a Sisense instance.
It could be used as runtime alternative to [SISENSE_CONTEXT_CONFIG_TOKEN](variable.SISENSE_CONTEXT_CONFIG_TOKEN.md) based configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | [`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) | Configuration object |

#### Returns

`Promise`\< `void` \>

Promise that resolves when configuration is complete (success or failure)

#### Example

Basic configuration:
```ts
await SisenseContextService.setConfig({
  url: 'https://your-sisense-instance.com',
  token: 'your-api-token',
  defaultDataSource: 'Sample ECommerce'
});
```

# Class ThemeService

Service for working with Sisense Fusion themes.

If no theme service is used, the current Fusion theme is applied by default.

## Constructors

urce: 'Sample ECommerce'
});
```

# Class ThemeService

Service for working with Sisense Fusion themes.

If no theme service is used, the current Fusion theme is applied by default.

## Constructors

### constructor

> **new ThemeService**(`sisenseContextService`, `themeConfig`?): [`ThemeService`](class.ThemeService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](class.SisenseContextService.md) |
| `themeConfig`? | [`ThemeConfig`](../type-aliases/type-alias.ThemeConfig.md) |

#### Returns

[`ThemeService`](class.ThemeService.md)

## Methods

### updateThemeSettings

> **updateThemeSettings**(`theme`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `theme` | [`ThemeSettings`](../interfaces/interface.ThemeSettings.md) \| `string` |

#### Returns

`Promise`\< `void` \>

# Variable SISENSE\_CONTEXT\_CONFIG\_TOKEN

> **`const`** **SISENSE\_CONTEXT\_CONFIG\_TOKEN**: `InjectionToken`\< [`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) \>

Token used to inject [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) into your application

en`\< [`SisenseContextConfig`](../interfaces/interface.SisenseContextConfig.md) \>

Token used to inject [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) into your application

## Example

Example of importing [SdkUiModule](class.SdkUiModule.md) and injecting [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) into your application:

```ts
export const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: "<instance url>", // replace with the URL of your Sisense instance
  token: "<api token>", // replace with the API token of your user account
  defaultDataSource: DM.DataSource,
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```

# Variable THEME\_CONFIG\_TOKEN

> **`const`** **THEME\_CONFIG\_TOKEN**: `InjectionToken`\< [`ThemeConfig`](../type-aliases/type-alias.ThemeConfig.md) \>

Token used to inject [ThemeConfig](../type-aliases/type-alias.ThemeConfig.md) into your application

CONFIG\_TOKEN**: `InjectionToken`\< [`ThemeConfig`](../type-aliases/type-alias.ThemeConfig.md) \>

Token used to inject [ThemeConfig](../type-aliases/type-alias.ThemeConfig.md) into your application

## Example

Example of injecting both [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) and [ThemeConfig](../type-aliases/type-alias.ThemeConfig.md) into your application:

```ts
export const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: "<instance url>", // replace with the URL of your Sisense instance
  token: "<api token>", // replace with the API token of your user account
  defaultDataSource: DM.DataSource,
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
    {
      provide: THEME_CONFIG_TOKEN,
      useValue: {
        // initial theme settings
      } as ThemeConfig,
    },
  ],
  bootstrap: [AppComponent],
})
```


## Charts

NSE_CONTEXT_CONFIG },
    {
      provide: THEME_CONFIG_TOKEN,
      useValue: {
        // initial theme settings
      } as ThemeConfig,
    },
  ],
  bootstrap: [AppComponent],
})
```


## Charts

# Charts

Angular components and utilities for working with charts

- [AreaChartComponent](class.AreaChartComponent.md)
- [AreamapChartComponent](class.AreamapChartComponent.md)
- [AreaRangeChartComponent](class.AreaRangeChartComponent.md)
- [BarChartComponent](class.BarChartComponent.md)
- [BoxplotChartComponent](class.BoxplotChartComponent.md)
- [boxWhiskerProcessResult](function.boxWhiskerProcessResult.md) - Utility function that combines box whisker data and outliers data
- [CalendarHeatmapChartComponent](class.CalendarHeatmapChartComponent.md)
- [ChartComponent](class.ChartComponent.md) - Common component for rendering charts of different types including table
- [ColumnChartComponent](class.ColumnChartComponent.md)
- [FunnelChartComponent](class.FunnelChartComponent.md)
- [IndicatorChartComponent](class.IndicatorChartComponent.md)
- [LineChartComponent](class.LineChartComponent.md)
- [PieChartComponent](class.PieChartComponent.md)
- [PolarChartComponent](class.PolarChartComponent.md)
- [ScatterChartComponent](class.ScatterChartComponent.md)
- [ScattermapChartComponent](class.ScattermapChartComponent.md)
- [StreamgraphChartComponent](class.StreamgraphChartComponent.md)
- [SunburstChartComponent](class.SunburstChartComponent.md)
- [TreemapChartComponent](class.TreemapChartComponent.md)

tComponent.md)
- [StreamgraphChartComponent](class.StreamgraphChartComponent.md)
- [SunburstChartComponent](class.SunburstChartComponent.md)
- [TreemapChartComponent](class.TreemapChartComponent.md)

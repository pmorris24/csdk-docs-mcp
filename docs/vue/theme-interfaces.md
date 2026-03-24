# Interface ThemeProviderProps

Configurations for Theme.

Two options are supported:

(1) `ThemeSettings` -- Custom theme settings that override the default theme settings.

OR

(2) `ThemeOid` -- Theme identifier as defined in a Fusion instance (**Admin > App Configuration > Look and Feel**).
See [Customizing the Sisense User Interface](https://docs.sisense.com/main/SisenseLinux/customizing-the-sisense-user-interface.htm) for more details.

## Properties

### theme

> **theme**?: [`ThemeSettings`](interface.ThemeSettings.md) \| `string`

Theme for visual styling of the various components

# Interface ThemeSettings

Theme settings defining the look and feel of components.

## Properties

### aiChat

> **aiChat**?: [`AiChatThemeSettings`](../../sdk-ui/interfaces/interface.AiChatThemeSettings.md)

Theme settings specific to the AI Chatbot component

***

### chart

> **chart**?: [`ChartThemeSettings`](../../sdk-ui/interfaces/interface.ChartThemeSettings.md)

Chart theme settings

***

### filter

> **filter**?: [`FilterThemeSettings`](../../sdk-ui/type-aliases/type-alias.FilterThemeSettings.md)

Filter theme settings

***

### general

> **general**?: [`GeneralThemeSettings`](../../sdk-ui/interfaces/interface.GeneralThemeSettings.md)

General theme settings

***

ias.FilterThemeSettings.md)

Filter theme settings

***

### general

> **general**?: [`GeneralThemeSettings`](../../sdk-ui/interfaces/interface.GeneralThemeSettings.md)

General theme settings

***

### palette

> **palette**?: [`ColorPaletteTheme`](../type-aliases/type-alias.ColorPaletteTheme.md)

Collection of colors used to color various elements

***

### typography

> **typography**?: [`TypographyThemeSettings`](../../sdk-ui/interfaces/interface.TypographyThemeSettings.md)

Text theme settings

***

### widget

> **widget**?: [`WidgetThemeSettings`](../../sdk-ui/type-aliases/type-alias.WidgetThemeSettings.md)

Widget theme settings

# Interface DashboardModel <Badge type="fusionEmbed" text="Fusion Embed" />

Model of Sisense Fusion dashboard defined in the abstractions of Compose SDK.

## Properties

ops(widgetModel);
  }
}
```

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

### dataOptions

> **dataOptions**: [`WidgetDataOptions`](../type-aliases/type-alias.WidgetDataOptions.md)

Widget data options.

***

idget, this is typically the name/ID of the custom widget.

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

Angular filter tile components

- [CriteriaFilterTileComponent](class.CriteriaFilterTileComponent.md)
- [DateRangeFilterTileComponent](class.DateRangeFilterTileComponent.md)
- [FiltersPanelComponent](class.FiltersPanelComponent.md)
- [FilterTileComponent](class.FilterTileComponent.md) - Facade component rendering a filter tile based on filter type
- [MemberFilterTileComponent](class.MemberFilterTileComponent.md)
- [RelativeDateFilterTileComponent](class.RelativeDateFilterTileComponent.md)

# Class CriteriaFilterTileComponent

Criteria Filter Tile Component

rTileComponent](class.MemberFilterTileComponent.md)
- [RelativeDateFilterTileComponent](class.RelativeDateFilterTileComponent.md)

# Class CriteriaFilterTileComponent

Criteria Filter Tile Component

## Example

```html
    <csdk-criteria-filter-tile
      [title]="criteriaFilterTileProps.title"
      [filter]="criteriaFilterTileProps.filter"
      (filterChange)="criteriaFilterTileProps.setFilter($event)"
    />
```
```ts
import { Component } from '@angular/core';
import { Filter, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  DM = DM;
  title: 'Room Number',
  filter: filterFactory.lessThan(DM.Rooms.Room_number, 200) ,
  setFilter({ filter }: { filter: Filter | null }) {
    console.log(filter);
    if (filter) {
      this.filter = filter ;
    }
  },
}
```
<img src="../../../img/angular-criteria-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

is.filter = filter ;
    }
  },
}
```
<img src="../../../img/angular-criteria-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new CriteriaFilterTileComponent**(`sisenseContextService`, `themeService`): [`CriteriaFilterTileComponent`](class.CriteriaFilterTileComponent.md)

Constructor for the `CriteriaFilterTileComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`CriteriaFilterTileComponent`](class.CriteriaFilterTileComponent.md)

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

#### arrangement

> **arrangement**: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md) \| `undefined`

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

#### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Text or numeric filter object to initialize filter type and default values

***

#### filterChange

> **filterChange**: `EventEmitter`\< `ArgumentsAsObject`\< (`filter`) => `void`, [`"filter"`] \> \>

Callback returning updated filter object

***

#### measures

> **measures**: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[] \| `undefined`

List of available measures to rank by. Required only for ranking filters.

***

#### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Class DateRangeFilterTileComponent

Date Range Filter Tile Component

nly for ranking filters.

***

#### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Class DateRangeFilterTileComponent

Date Range Filter Tile Component

## Example

```html
<csdk-date-range-filter-tile
      [title]="dateRangeFilterTileProps.title"
      [attribute]="dateRangeFilterTileProps.attribute"
      [filter]="dateRangeFilterTileProps.filter"
      (filterChange)="dateRangeFilterTileProps.setFilter($event)"
    />
```
```ts
import { Component } from '@angular/core';
import { Filter, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  DM = DM;

  dateRangeFilterTileProps = {
    title: 'Range Filter',
    attribute: DM.ER.Date.Years,
    filter: filterFactory.dateRange(DM.ER.Date.Years),
    setFilter({ filter }: { filter: Filter | null }) {
      console.log(filter);
      if (filter) {
        this.filter = filter;
      }
    },
  };
}
```
<img src="../../../img/angular-date-range-filter-tile-example.png" width="450px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

= filter;
      }
    },
  };
}
```
<img src="../../../img/angular-date-range-filter-tile-example.png" width="450px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new DateRangeFilterTileComponent**(`sisenseContextService`, `themeService`): [`DateRangeFilterTileComponent`](class.DateRangeFilterTileComponent.md)

Constructor for the `DateRangeFilterTileComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DateRangeFilterTileComponent`](class.DateRangeFilterTileComponent.md)

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

#### attribute

> **attribute**: [`LevelAttribute`](../../sdk-data/interfaces/interface.LevelAttribute.md)

Date level attribute the filter is based on

***

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### earliestDate

> **earliestDate**: `string` \| `undefined`

Earliest allowed date for selection.

If not specified, the earliest date of the target date-level attribute will be used.

***

#### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Date range filter.

***

#### filterChange

> **filterChange**: `EventEmitter`\< `ArgumentsAsObject`\< (`filter`) => `void`, [`"filter"`] \> \>

Callback function that is called when the date range filter object should be updated.

***

#### lastDate

> **lastDate**: `string` \| `undefined`

Latest allowed date for selection.

If not specified, the latest date of the target date-level attribute will be used.

***

#### title

> **title**: `string`

Filter tile title

ing` \| `undefined`

Latest allowed date for selection.

If not specified, the latest date of the target date-level attribute will be used.

***

#### title

> **title**: `string`

Filter tile title

# Class FilterTileComponent

UI component that renders a filter tile based on filter type

## Example

Here’s how to render a filter model as a filter tile.

```html
<!--Component HTML template in example.component.html-->
<csdk-filter-tile
 [filter]="filterTileProps.filter"
 (filterChange)="filterTileProps.filterChange($event)"
/>
```

```ts
// Component behavior in example.component.ts
import { Component } from '@angular/core';
import { type FilterTileProps } from '@sisense/sdk-ui-angular';
import { filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
 selector: 'example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 filterTileProps: FilterTileProps = {
   filter: filterFactory.members(DM.ER.Date.Years, ['2013-01-01T00:00:00']),
   filterChange({ filter }) {
     if (filter) {
       this.filter = filter;
     }
   },
 };
}
```
<img src="../../../img/angular-member-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

filter = filter;
     }
   },
 };
}
```
<img src="../../../img/angular-member-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new FilterTileComponent**(`sisenseContextService`, `themeService`): [`FilterTileComponent`](class.FilterTileComponent.md)

Constructor for the `FilterTileComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`FilterTileComponent`](class.FilterTileComponent.md)

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

#### defaultDataSource

> **defaultDataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Default data source used for filter tiles

***

#### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Filter to display

***

#### filterChange

> **filterChange**: `EventEmitter`\< [`FilterChangeEvent`](../type-aliases/type-alias.FilterChangeEvent.md) \>

Filter change event handler.

***

#### filterDelete

> **filterDelete**: `EventEmitter`\< `void` \>

Filter delete event handler.

***

#### filterEdit

> **filterEdit**: `EventEmitter`\< [`FilterEditEvent`](../type-aliases/type-alias.FilterEditEvent.md) \>

Filter edit event handler.

# Class FiltersPanelComponent

Filters panel component that renders a list of filter tiles

itter`\< [`FilterEditEvent`](../type-aliases/type-alias.FilterEditEvent.md) \>

Filter edit event handler.

# Class FiltersPanelComponent

Filters panel component that renders a list of filter tiles

## Example

Here's how to render a filters panel with a set of filters.

```html
<!--Component HTML template in example.component.html-->
<csdk-filters-panel
 [filters]="filtersPanelProps.filters"
 [defaultDataSource]="filtersPanelProps.defaultDataSource"
 (filtersChange)="filtersPanelProps.filtersChange($event)"
/>
```

```ts
// Component behavior in example.component.ts
import { Component } from '@angular/core';
import { type FiltersPanelProps } from '@sisense/sdk-ui-angular';
import { filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
 selector: 'example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 filtersPanelProps: FiltersPanelProps = {
   filters: [
     filterFactory.members(DM.ER.Date.Years, ['2013-01-01T00:00:00']),
     filterFactory.members(DM.ER.Departments.Department, ['Cardiology']),
   ],
   defaultDataSource: DM.DataSource,
   filtersChange({ filters }) {
     this.filtersPanelProps.filters = filters;
   },
 };
}
```

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

taSource: DM.DataSource,
   filtersChange({ filters }) {
     this.filtersPanelProps.filters = filters;
   },
 };
}
```

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new FiltersPanelComponent**(`sisenseContextService`, `themeService`): [`FiltersPanelComponent`](class.FiltersPanelComponent.md)

Constructor for the `FiltersPanelComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`FiltersPanelComponent`](class.FiltersPanelComponent.md)

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

> **config**: [`FiltersPanelConfig`](../interfaces/interface.FiltersPanelConfig.md) \| `undefined`

The configuration for the filters panel

***

#### defaultDataSource

> **defaultDataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Default data source used for filter tiles

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

Array of filters to display

***

#### filtersChange

> **filtersChange**: `EventEmitter`\< [`FiltersPanelChangeEvent`](../type-aliases/type-alias.FiltersPanelChangeEvent.md) \>

Callback to handle changes in filters

# Class MemberFilterTileComponent

Member Filter Tile Component

itter`\< [`FiltersPanelChangeEvent`](../type-aliases/type-alias.FiltersPanelChangeEvent.md) \>

Callback to handle changes in filters

# Class MemberFilterTileComponent

Member Filter Tile Component

## Example

```html
    <csdk-member-filter-tile
      title="Years Filter"
      [attribute]="DM.ER.Date.Years"
      [filter]="memberFilterTileProps.yearFilter"
      (filterChange)="memberFilterTileProps.setYearFilter($event)"
    />
```
```ts
import { Component } from '@angular/core';
import { Filter, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  DM = DM;
  memberFilterTileProps = {
    yearFilter: filterFactory.members(DM.ER.Date.Years, ['2013-01-01T00:00:00']),
    setYearFilter({ filter }: { filter: Filter | null }) {
      if (filter) {
        this.yearFilter = filter;
      }
    },
  };
}
```
<img src="../../../img/angular-member-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

ter = filter;
      }
    },
  };
}
```
<img src="../../../img/angular-member-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new MemberFilterTileComponent**(`sisenseContextService`, `themeService`): [`MemberFilterTileComponent`](class.MemberFilterTileComponent.md)

Constructor for the `MemberFilterTileComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`MemberFilterTileComponent`](class.MemberFilterTileComponent.md)

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

#### attribute

> **attribute**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Attribute to filter on. A query will run to fetch all this attribute's members

***

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source the query is run against - e.g. `Sample ECommerce`

If not specified, the query will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null`

Source filter object. Caller is responsible for keeping track of filter state

***

#### filterChange

> **filterChange**: `EventEmitter`\< `ArgumentsAsObject`\< (`filter`) => `void`, [`"filter"`] \> \>

Callback indicating when the source members filter should be updated

***

#### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Class RelativeDateFilterTileComponent

Relative Date Filter Tile Component

should be updated

***

#### title

> **title**: `string`

Title for the filter tile, which is rendered into the header

# Class RelativeDateFilterTileComponent

Relative Date Filter Tile Component

## Example

```html
<csdk-relative-date-filter-tile
      [title]="relativeDateFilterTileProps.title"
      [arrangement]="relativeDateFilterTileProps.arrangement"
      [filter]="relativeDateFilterTileProps.filter"
      (filterChange)="relativeDateFilterTileProps.setFilter($event)"
    />
```
```ts
import { Component } from '@angular/core';
import { Filter, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  DM = DM;

  relativeDateFilterTileProps = {
    title: 'Relative Date Filter',
    arrangement: 'vertical',
    filter: filterFactory.dateRelativeTo(DM.ER.Date.Days, 0, 150),
    setFilter({ filter }: { filter: Filter | null }) {
      console.log(filter);
      if (filter) {
        this.filter = filter;
      }
    },
  };
}
```
<img src="../../../img/angular-relative-date-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

ilter;
      }
    },
  };
}
```
<img src="../../../img/angular-relative-date-filter-tile-example.png" width="225px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new RelativeDateFilterTileComponent**(`sisenseContextService`, `themeService`): [`RelativeDateFilterTileComponent`](class.RelativeDateFilterTileComponent.md)

Constructor for the `RelativeDateFilterTileComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`RelativeDateFilterTileComponent`](class.RelativeDateFilterTileComponent.md)

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

#### arrangement

> **arrangement**: [`FilterVariant`](../type-aliases/type-alias.FilterVariant.md) \| `undefined`

Arrangement of the filter inputs. Use vertical for standard filter tiles and horizontal for toolbars

***

#### filter

> **filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)

Relative date filter.

***

#### filterChange

> **filterChange**: `EventEmitter`\< `ArgumentsAsObject`\< (`filter`) => `void`, [`"filter"`] \> \>

Callback function that is called when the relative date filter object should be updated.

***

#### limit

> **limit**: \{
  `maxDate`: `string`;
  `minDate`: `string`;
 } \| `undefined`

Limit of the date range that can be selected.

***

#### title

> **title**: `string`

Filter tile title


## Drilldown

# Drilldown

Angular components for creating drilldown experiences

- [ContextMenuComponent](class.ContextMenuComponent.md)
- [DrilldownBreadcrumbsComponent](class.DrilldownBreadcrumbsComponent.md)
- [DrilldownWidgetComponent](class.DrilldownWidgetComponent.md)

# Class ContextMenuComponent

Context Menu Component

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

)
- [DrilldownWidgetComponent](class.DrilldownWidgetComponent.md)

# Class ContextMenuComponent

Context Menu Component

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new ContextMenuComponent**(`sisenseContextService`, `themeService`): [`ContextMenuComponent`](class.ContextMenuComponent.md)

Constructor for the `ContextMenuComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`ContextMenuComponent`](class.ContextMenuComponent.md)

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

#### contextMenuClose

> **contextMenuClose**: `EventEmitter`\< `ArgumentsAsObject`\< () => `void`, [] \> \>

Callback function that is evaluated when the context menu is closed

***

#### itemSections

> **itemSections**: [`MenuItemSection`](../type-aliases/type-alias.MenuItemSection.md)[] \| `undefined`

Menu item sections

***

#### position

> **position**: [`MenuPosition`](../type-aliases/type-alias.MenuPosition.md) \| `null` \| `undefined`

Context menu position

# Class DrilldownBreadcrumbsComponent

Drilldown Breadcrumbs Component

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new DrilldownBreadcrumbsComponent**(`sisenseContextService`, `themeService`): [`DrilldownBreadcrumbsComponent`](class.DrilldownBreadcrumbsComponent.md)

Constructor for the `DrilldownBreadcrumbsComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DrilldownBreadcrumbsComponent`](class.DrilldownBreadcrumbsComponent.md)

## Properties

ice |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DrilldownBreadcrumbsComponent`](class.DrilldownBreadcrumbsComponent.md)

## Properties

### Widget

#### currentDimension

> **currentDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Currently selected drilldown dimension

***

#### drilldownSelectionsClear

> **drilldownSelectionsClear**: `EventEmitter`\< `ArgumentsAsObject`\< () => `void`, [] \> \>

Callback function that is evaluated when the close (X) button is clicked

***

#### drilldownSelectionsSlice

> **drilldownSelectionsSlice**: `EventEmitter`\< `number` \>

Callback function that is evaluated when a breadcrumb is clicked

***

#### filtersDisplayValues

> **filtersDisplayValues**: `string`[][]

List of drilldown filters formatted to be displayed as breadcrumbs

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

# Class DrilldownWidgetComponent

An Angular component designed to add drilldown functionality to any type of chart.

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

An example of using the `csdk-drilldown-widget` component to plot a `csdk-column-chart`
over the Sample Healthcare data source hosted in a Sisense instance:
```ts
// Component behavior in .component.ts
chart = {
  dataOptions: {
    category: [DM.Divisions.Divison_name],
    value: [measureFactory.sum(DM.Admissions.Cost_of_admission)],
    breakBy: [],
  },
  dataPointContextMenu: ({ point, nativeEvent }: { point: any; nativeEvent: MouseEvent }) => {
    this.drilldownResult?.onDataPointsSelected?.([point], nativeEvent);
    this.drilldownResult?.onContextMenu({
      left: nativeEvent.clientX,
      top: nativeEvent.clientY,
    });
  }
}

drilldownResult?: CustomDrilldownResult;

drilldown = {
  drilldownPaths: [DM.Patients.Gender, DM.Admissions.Surgical_Procedure],
  initialDimension: DM.Divisions.Divison_name,
  drilldownChange: (drilldownResult: CustomDrilldownResult) => {
    this.drilldownResult = drilldownResult;
    this.chart.dataOptions = {
      ...this.chart.dataOptions,
      category: [drilldownResult.drilldownDimension]
    }
  }
};
```
```html
<!--Component HTML template in .component.html-->
<csdk-drilldown-widget
  [drilldownPaths]="drilldown.drilldownPaths"
  [initialDimension]="drilldown.initialDimension"
  (drilldownResultChange)="drilldown.drilldownChange($event)"
>
  <csdk-column-chart
    [dataSet]="DM.DataSource"
    [dataOptions]="chart.dataOptions"
    [filters]="drilldownResult?.drilldownFilters || []"
    (dataPointContextMenu)="chart.dataPointContextMenu($event)"
  />
</csdk-drilldown-widget>
```
<img src="../../../img/angular-drilldown-widget-example.png" width="800px" />

rilldownFilters || []"
    (dataPointContextMenu)="chart.dataPointContextMenu($event)"
  />
</csdk-drilldown-widget>
```
<img src="../../../img/angular-drilldown-widget-example.png" width="800px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new DrilldownWidgetComponent**(`sisenseContextService`, `themeService`): [`DrilldownWidgetComponent`](class.DrilldownWidgetComponent.md)

Constructor for the `DrilldownWidgetComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DrilldownWidgetComponent`](class.DrilldownWidgetComponent.md)

## Properties

ntext service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |

#### Returns

[`DrilldownWidgetComponent`](class.DrilldownWidgetComponent.md)

## Properties

### Widget

#### config

> **config**?: `Omit`\< [`DrilldownWidgetConfig`](../../sdk-ui/type-aliases/type-alias.DrilldownWidgetConfig.md) \| `undefined`, "breadcrumbsComponent \| contextMenuComponent" \> & \{
  `breadcrumbsComponent`: (`drilldownBreadcrumbsProps`) => `HTMLDivElement`;
  `contextMenuComponent`: (`contextMenuProps`) => `HTMLDivElement`;
 }

An object that allows users to pass advanced configuration options as a prop for the `DrilldownWidget` component

> ##### `config.breadcrumbsComponent`
>
> **breadcrumbsComponent**?: (`drilldownBreadcrumbsProps`) => `HTMLDivElement`
>
> ###### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `drilldownBreadcrumbsProps` | [`DrilldownBreadcrumbsProps`](../../sdk-ui/interfaces/interface.DrilldownBreadcrumbsProps.md) |
>
>
> ###### Returns
>
> `HTMLDivElement`
>
>
>
> ##### `config.contextMenuComponent`
>
> **contextMenuComponent**?: (`contextMenuProps`) => `HTMLDivElement`
>
> ###### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `contextMenuProps` | [`ContextMenuProps`](../../sdk-ui/interfaces/interface.ContextMenuProps.md) |
>
>
> ###### Returns
>
> `HTMLDivElement`
>
>
>
>

***

#### drilldownPaths

> **drilldownPaths**: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md))[] \| `undefined`

Dimensions and hierarchies available for drilldown on.

***

#### initialDimension

> **initialDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Initial dimension to apply first set of filters to

s available for drilldown on.

***

#### initialDimension

> **initialDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Initial dimension to apply first set of filters to

### Callbacks

#### drilldownResultChange

> **drilldownResultChange**: `EventEmitter`\< [`CustomDrilldownResult`](../type-aliases/type-alias.CustomDrilldownResult.md) \>

Drilldown result change handler callback

### Constructor

#### sisenseContextService

> **sisenseContextService**: [`SisenseContextService`](../contexts/class.SisenseContextService.md)

Sisense context service

***

#### themeService

> **themeService**: [`ThemeService`](../contexts/class.ThemeService.md)

Theme service


## Queries

# Queries

Angular query service

- [QueryService](class.QueryService.md)

# Class QueryService

Service for executing data queries.

## Constructors

### constructor

> **new QueryService**(`sisenseContextService`): [`QueryService`](class.QueryService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`QueryService`](class.QueryService.md)

## Methods

| Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`QueryService`](class.QueryService.md)

## Methods

### executeCsvQuery

> **executeCsvQuery**(`params`): `Promise`\< \{
  `data`: `Blob` \| `string`;
 } \>

Executes a CSV data query.
Similar to [QueryService.executeQuery](class.QueryService.md#executequery), but returns the data in CSV format as text or as a stream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ExecuteCsvQueryParams`](../interfaces/interface.ExecuteCsvQueryParams.md) | CSV query parameters |

#### Returns

`Promise`\< \{
  `data`: `Blob` \| `string`;
 } \>

CSV query result

***

arams` | [`ExecuteCsvQueryParams`](../interfaces/interface.ExecuteCsvQueryParams.md) | CSV query parameters |

#### Returns

`Promise`\< \{
  `data`: `Blob` \| `string`;
 } \>

CSV query result

***

### executeCustomWidgetQuery

> **executeCustomWidgetQuery**(`params`): `Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Executes a data query from custom widget component props.

This method takes custom widget props (dataSource, dataOptions, filters, etc.)
and executes the appropriate data query

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ExecuteCustomWidgetQueryParams`](../interfaces/interface.ExecuteCustomWidgetQueryParams.md) | Custom widget component props containing data source, data options, filters, etc. |

#### Returns

`Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Promise resolving to query result with formatted data

***

filters, etc. |

#### Returns

`Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Promise resolving to query result with formatted data

***

### executePivotQuery

> **executePivotQuery**(`params`): `Promise`\< \{
  `data`: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md);
 } \>

Executes a data query for a pivot table.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ExecutePivotQueryParams`](../interfaces/interface.ExecutePivotQueryParams.md) | Pivot query parameters |

#### Returns

`Promise`\< \{
  `data`: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md);
 } \>

Pivot query result

***

eryParams.md) | Pivot query parameters |

#### Returns

`Promise`\< \{
  `data`: [`PivotQueryResultData`](../../sdk-data/interfaces/interface.PivotQueryResultData.md);
 } \>

Pivot query result

***

### executeQuery

> **executeQuery**(`params`): `Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Executes a data query. If you want to display the query results, you can use
them to populate Compose SDK UI elements or third party UI elements.

To learn how to populate third party UI elements with query results, see the
[External Charts Guide](/guides/sdk/guides/charts/guide-external-charts.html#query)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ExecuteQueryParams`](../interfaces/interface.ExecuteQueryParams.md) | Query parameters |

#### Returns

`Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Query result

***

es/interface.ExecuteQueryParams.md) | Query parameters |

#### Returns

`Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } \>

Query result

***

### executeQueryByWidgetId

> **executeQueryByWidgetId**(`params`): `Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } & [`QueryByWidgetIdQueryParams`](../../sdk-ui/type-aliases/type-alias.QueryByWidgetIdQueryParams.md) \>

Executes a data query extracted from an existing widget in the Sisense instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ExecuteQueryByWidgetIdParams`](../interfaces/interface.ExecuteQueryByWidgetIdParams.md) | Parameters to identify the target widget |

#### Returns

`Promise`\< \{
  `data`: [`QueryResultData`](../../sdk-data/interfaces/interface.QueryResultData.md);
 } & [`QueryByWidgetIdQueryParams`](../../sdk-ui/type-aliases/type-alias.QueryByWidgetIdQueryParams.md) \>

Query result


## Data Grids

# Data Grids

Angular components for data grids

- [PivotTableComponent](class.PivotTableComponent.md)
- [TableComponent](class.TableComponent.md)

# Class PivotTableComponent

Pivot Table with and pagination.

s

Angular components for data grids

- [PivotTableComponent](class.PivotTableComponent.md)
- [TableComponent](class.TableComponent.md)

# Class PivotTableComponent

Pivot Table with and pagination.

## Example

```html
 <csdk-pivot-table
   [dataSet]="pivotTable.dataSet"
   [dataOptions]="pivotTable.dataOptions"
   [filters]="pivotTable.filters"
   [styleOptions]="pivotTable.styleOptions"
 />
```
```ts
import { Component } from '@angular/core';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-ecommerce';
import type { PivotTableDataOptions } from '@sisense/sdk-ui-angular';

@Component({
 selector: 'app-analytics',
 templateUrl: './analytics.component.html',
 styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {

 pivotTableDataOptions: PivotTableDataOptions = {
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
 };

 pivotTable = {
   dataSet: DM.DataSource,
   dataOptions: this.pivotTableDataOptions,
   filters: [filterFactory.members(DM.Commerce.Gender, ['Female', 'Male'])],
   styleOptions: { width: 1400, height: 600, rowsPerPage: 50 },
 };

}
```
<img src="../../../img/angular-pivot-table-example.png" width="800px" />

.members(DM.Commerce.Gender, ['Female', 'Male'])],
   styleOptions: { width: 1400, height: 600, rowsPerPage: 50 },
 };

}
```
<img src="../../../img/angular-pivot-table-example.png" width="800px" />

## Remarks

Configuration options can also be applied within the scope of a `<SisenseContextProvider>` to control the default behavior of PivotTable, by changing available settings within `appConfig.chartConfig.tabular.*`

Follow the link to [AppConfig](../type-aliases/type-alias.AppConfig.md) for more details on the available settings.

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new PivotTableComponent**(`sisenseContextService`, `themeService`): [`PivotTableComponent`](class.PivotTableComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`PivotTableComponent`](class.PivotTableComponent.md)

## Properties

ontexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`PivotTableComponent`](class.PivotTableComponent.md)

## Properties

### Data

#### dataOptions

> **dataOptions**: [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### dataSet

> **dataSet**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

Data source name (as a `string`) - e.g. `Sample ECommerce`.

If not specified, the component will use the `defaultDataSource` specified in the parent Sisense Context.

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will highlight query results

Filters that will slice query results

***

#### highlights

> **highlights**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will highlight query results

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

> **styleOptions**: [`PivotTableStyleOptions`](../interfaces/interface.PivotTableStyleOptions.md) \| `undefined`

Configurations for how to style and present a pivot table's data.

# Class TableComponent

Table with aggregation and pagination.

](../interfaces/interface.PivotTableStyleOptions.md) \| `undefined`

Configurations for how to style and present a pivot table's data.

# Class TableComponent

Table with aggregation and pagination.

## Example

```html
 <csdk-table [dataSet]="table.dataSet" [dataOptions]="table.dataOptions" [filters]="filters" />
```
```ts
import { Component } from '@angular/core';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
 selector: 'app-analytics',
 templateUrl: './analytics.component.html',
 styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
 DM = DM;
 filters = [filterFactory.members(DM.Divisions.Divison_name, ['Cardiology', 'Neurology'])];
 table = {
   dataSet: DM.DataSource,
   dataOptions: {
     columns: [DM.Admissions.Patient_ID, measureFactory.sum(DM.Admissions.Cost_of_admission)],
   },
 };

}
```
<img src="../../../img/angular-table-chart-example.png" width="800px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

missions.Cost_of_admission)],
   },
 };

}
```
<img src="../../../img/angular-table-chart-example.png" width="800px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new TableComponent**(`sisenseContextService`, `themeService`): [`TableComponent`](class.TableComponent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`TableComponent`](class.TableComponent.md)

## Properties

ice`](../contexts/class.SisenseContextService.md) |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) |

#### Returns

[`TableComponent`](class.TableComponent.md)

## Properties

### Data

#### dataOptions

> **dataOptions**: [`TableDataOptions`](../interfaces/interface.TableDataOptions.md)

Configurations for how to interpret and present the data passed to the component

***

#### dataSet

> **dataSet**: [`Data`](../../sdk-data/interfaces/interface.Data.md) \| [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md) \| `undefined`

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

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

rs**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters that will slice query results

### Callbacks

#### dataReady

> **dataReady**: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md) \| `undefined`

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

### Representation

#### styleOptions

> **styleOptions**: [`TableStyleOptions`](../interfaces/interface.TableStyleOptions.md) \| `undefined`

Configurations for how to style and present a table's data.


## Generative Ai

# Generative AI

Angular modules, components, and services for working with Generative AI features provided by Sisense Fusion
::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

- [AI\_CONTEXT\_CONFIG\_TOKEN](variable.AI_CONTEXT_CONFIG_TOKEN.md)
- [AiService](class.AiService.md)
- [ChatbotComponent](class.ChatbotComponent.md)
- [GetNlgInsightsComponent](class.GetNlgInsightsComponent.md)
- [SdkAiModule](class.SdkAiModule.md)

# Class AiService

Service for working with Sisense Fusion Generative AI.

## Constructors

nt.md)
- [GetNlgInsightsComponent](class.GetNlgInsightsComponent.md)
- [SdkAiModule](class.SdkAiModule.md)

# Class AiService

Service for working with Sisense Fusion Generative AI.

## Constructors

### constructor

> **new AiService**(`sisenseContextService`, `aiContextConfig`?): [`AiService`](class.AiService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |
| `aiContextConfig`? | [`AiContextConfig`](../interfaces/interface.AiContextConfig.md) |

#### Returns

[`AiService`](class.AiService.md)

## Methods

### getNlgInsights

> **getNlgInsights**(`params`): `Promise`\< `string` \| `undefined` \>

Fetches an analysis of the provided query using natural language generation (NLG).
Specifying NLG parameters is similar to providing parameters to the [QueryService.executeQuery](../queries/class.QueryService.md#executequery) service method, using dimensions, measures, and filters.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetNlgInsightsParams`](../interfaces/interface.GetNlgInsightsParams.md) | Parameters for getting NLG insights |

#### Returns

`Promise`\< `string` \| `undefined` \>

NLG insights text summary

***

`GetNlgInsightsParams`](../interfaces/interface.GetNlgInsightsParams.md) | Parameters for getting NLG insights |

#### Returns

`Promise`\< `string` \| `undefined` \>

NLG insights text summary

***

### getNlqResult <Badge type="beta" text="Beta" />

> **getNlqResult**(`params`): `Promise`\< [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `undefined` \>

Executes a natural language query (NLQ) against a data model or perspective

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetNlqResultParams`](../interfaces/interface.GetNlqResultParams.md) | NLQ query parameters |

#### Returns

`Promise`\< [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md) \| `undefined` \>

The result as WidgetProps

***

### getQueryRecommendations <Badge type="beta" text="Beta" />

> **getQueryRecommendations**(`params`): `Promise`\< [`QueryRecommendation`](../interfaces/interface.QueryRecommendation.md)[] \>

Fetches recommended questions for a data model or perspective.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetQueryRecommendationsParams`](../interfaces/interface.GetQueryRecommendationsParams.md) | Parameters for recommendations |

#### Returns

`Promise`\< [`QueryRecommendation`](../interfaces/interface.QueryRecommendation.md)[] \>

An array of objects, each containing recommended question text and its corresponding `widgetProps`

Returns

`Promise`\< [`QueryRecommendation`](../interfaces/interface.QueryRecommendation.md)[] \>

An array of objects, each containing recommended question text and its corresponding `widgetProps`

# Class ChatbotComponent

An Angular component that renders a chatbot with data topic selection.

## Example

An example of using the `ChatbotComponent`:

```html
<!--Component HTML template in example.component.html-->
<csdk-chatbot
 [width]="chatbot.width"
 [height]="chatbot.height"
 [config]="chatbot.config"
/>
```

```ts
// Component behavior in example.component.ts
import { Component } from '@angular/core';

@Component({
 selector: 'example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 chatbot = {
   width: '500px',
   height: '700px',
   config: {
     numOfRecommendations: 5,
   },
 };
}
```

<img src="../../../img/angular-chatbot-example.png" width="500px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

: {
     numOfRecommendations: 5,
   },
 };
}
```

<img src="../../../img/angular-chatbot-example.png" width="500px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new ChatbotComponent**(
  `sisenseContextService`,
  `themeService`,
  `aiService`): [`ChatbotComponent`](class.ChatbotComponent.md)

Constructor for the `ChatbotComponent`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |
| `aiService` | [`AiService`](class.AiService.md) | AI service |

#### Returns

[`ChatbotComponent`](class.ChatbotComponent.md)

## Properties

### Constructor

#### aiService

> **aiService**: [`AiService`](class.AiService.md)

AI service

***

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

> **config**: `Partial`\< [`ChatConfig`](../interfaces/interface.ChatConfig.md) \> \| `undefined`

Various configuration options for the chatbot

***

#### height

> **height**: `Height`\< `number` \| `string` \> \| `undefined`

Total height of the chatbot

If not specified, a default height of `900px` will be used.

***

#### width

> **width**: `Width`\< `number` \| `string` \> \| `undefined`

Total width of the chatbot

If not specified, a default width of `500px` will be used.

# Class GetNlgInsightsComponent

An Angular component that fetches and displays a collapsible analysis of the provided query using natural language generation (NLG).
Specifying NLG parameters is similar to providing parameters to the [QueryService.executeQuery](../queries/class.QueryService.md#executequery) service method, using dimensions, measures, and filters.

pecifying NLG parameters is similar to providing parameters to the [QueryService.executeQuery](../queries/class.QueryService.md#executequery) service method, using dimensions, measures, and filters.

## Example

An example of using the `GetNlgInsightsComponent`:

```html
<!--Component HTML template in example.component.html-->
<csdk-get-nlg-insights
 [dataSource]="nlgParams.dataSource"
 [dimensions]="nlgParams.dimensions"
 [measures]="nlgParams.measures"
/>
```

```ts
// Component behavior in example.component.ts
import { Component } from '@angular/core';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from '../../assets/sample-healthcare-model';

@Component({
 selector: 'example',
 templateUrl: './example.component.html',
 styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
 nlgParams = {
   dataSource: DM.DataSource.title,
   dimensions: [DM.Divisions.Divison_name],
   measures: [measureFactory.sum(DM.Admissions.Cost_of_admission)],
 };
}
```

<img src="../../../img/angular-get-nlg-insights-example.png" width="700px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

dmissions.Cost_of_admission)],
 };
}
```

<img src="../../../img/angular-get-nlg-insights-example.png" width="700px" />

## Implements

- `AfterViewInit`
- `OnChanges`
- `OnDestroy`

## Constructors

### constructor

> **new GetNlgInsightsComponent**(
  `sisenseContextService`,
  `themeService`,
  `aiService`): [`GetNlgInsightsComponent`](class.GetNlgInsightsComponent.md)

Constructor for the `GetNlgInsightsProps`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) | Sisense context service |
| `themeService` | [`ThemeService`](../contexts/class.ThemeService.md) | Theme service |
| `aiService` | [`AiService`](class.AiService.md) | AI service |

#### Returns

[`GetNlgInsightsComponent`](class.GetNlgInsightsComponent.md)

## Properties

### Constructor

#### aiService

> **aiService**: [`AiService`](class.AiService.md)

AI service

***

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

#### dataSource

> **dataSource**: [`DataSource`](../../sdk-data/type-aliases/type-alias.DataSource.md)

The data source that the query targets - e.g. `Sample ECommerce`

***

#### dimensions

> **dimensions**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)[] \| `undefined`

Dimensions of the query

***

#### filters

> **filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[] \| `undefined`

Filters of the query

***

#### measures

> **measures**: [`Measure`](../../sdk-data/interfaces/interface.Measure.md)[] \| `undefined`

Measures of the query

***

#### verbosity

> **verbosity**: `"High"` \| `"Low"` \| `undefined`

The verbosity of the NLG summarization

# Class SdkAiModule

SDK AI Module, which is a container for generative AI components and services.

sity

> **verbosity**: `"High"` \| `"Low"` \| `undefined`

The verbosity of the NLG summarization

# Class SdkAiModule

SDK AI Module, which is a container for generative AI components and services.

## Example

Example of importing [SdkAiModule](class.SdkAiModule.md) and injecting [AiContextConfig](../interfaces/interface.AiContextConfig.md) into your application,
along with importing dependency [SdkUiModule](../contexts/class.SdkUiModule.md) and injecting [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) to connect to a Sisense instance:

```ts
import { SdkUiModule, SisenseContextConfig } from '@sisense/sdk-ui-angular';
import { SdkAiModule, AI_CONTEXT_CONFIG_TOKEN, AiContextConfig } from '@sisense/sdk-ui-angular/ai';

const AI_CONTEXT_CONFIG: AiContextConfig = {
  volatile: true,
};
const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: "<instance url>", // replace with the URL of your Sisense instance
  token: "<api token>", // replace with the API token of your user account
  defaultDataSource: DM.DataSource,
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
    SdkAiModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: AI_CONTEXT_CONFIG_TOKEN, useValue: AI_CONTEXT_CONFIG },
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```

## Constructors

de: AI_CONTEXT_CONFIG_TOKEN, useValue: AI_CONTEXT_CONFIG },
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```

## Constructors

### constructor

> **new SdkAiModule**(): [`SdkAiModule`](class.SdkAiModule.md)

#### Returns

[`SdkAiModule`](class.SdkAiModule.md)

# Variable AI\_CONTEXT\_CONFIG\_TOKEN

> **`const`** **AI\_CONTEXT\_CONFIG\_TOKEN**: `InjectionToken`\< [`AiContextConfig`](../interfaces/interface.AiContextConfig.md) \>

Token used to inject [AiContextConfig](../interfaces/interface.AiContextConfig.md) into your application.

EN**: `InjectionToken`\< [`AiContextConfig`](../interfaces/interface.AiContextConfig.md) \>

Token used to inject [AiContextConfig](../interfaces/interface.AiContextConfig.md) into your application.

## Example

Example of importing [SdkAiModule](class.SdkAiModule.md) and injecting [AiContextConfig](../interfaces/interface.AiContextConfig.md) into your application,
along with importing dependency [SdkUiModule](../contexts/class.SdkUiModule.md) and injecting [SisenseContextConfig](../interfaces/interface.SisenseContextConfig.md) to connect to a Sisense instance:

```ts
import { SdkUiModule, SisenseContextConfig } from '@sisense/sdk-ui-angular';
import { SdkAiModule, AI_CONTEXT_CONFIG_TOKEN, AiContextConfig } from '@sisense/sdk-ui-angular/ai';

const AI_CONTEXT_CONFIG: AiContextConfig = {
  volatile: true,
};
const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: "<instance url>", // replace with the URL of your Sisense instance
  token: "<api token>", // replace with the API token of your user account
  defaultDataSource: DM.DataSource,
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
    SdkAiModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: AI_CONTEXT_CONFIG_TOKEN, useValue: AI_CONTEXT_CONFIG },
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```


## Interfaces

ide: AI_CONTEXT_CONFIG_TOKEN, useValue: AI_CONTEXT_CONFIG },
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
```


## Interfaces

# Interfaces

TypeScript interfaces for components and services listed above

- [AiContextConfig](interface.AiContextConfig.md)
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
- [CriteriaFilterTileProps](interface.CriteriaFilterTileProps.md)
- [CustomWidgetComponentProps](interface.CustomWidgetComponentProps.md)
- [DashboardByIdConfig](interface.DashboardByIdConfig.md)
- [DashboardByIdProps](interface.DashboardByIdProps.md)
- [DashboardConfig](interface.DashboardConfig.md)
- [DashboardFiltersPanelConfig](interface.DashboardFiltersPanelConfig.md)
- [DashboardLayoutOptions](interface.DashboardLayoutOptions.md)
- [DashboardProps](interface.DashboardProps.md)
- [DataLimits](interface.DataLimits.md)
- [DateRangeFilterTileProps](interface.DateRangeFilterTileProps.md)
- [DrilldownBreadcrumbsProps](interface.DrilldownBreadcrumbsProps.md)
- [ExecuteCsvQueryParams](interface.ExecuteCsvQueryParams.md)
- [ExecuteCustomWidgetQueryParams](interface.ExecuteCustomWidgetQueryParams.md)
- [ExecutePivotQueryParams](interface.ExecutePivotQueryParams.md)
- [ExecuteQueryByWidgetIdParams](interface.ExecuteQueryByWidgetIdParams.md)
- [ExecuteQueryParams](interface.ExecuteQueryParams.md)
- [FiltersPanelConfig](interface.FiltersPanelConfig.md)
- [FiltersPanelProps](interface.FiltersPanelProps.md)
- [FilterTileProps](interface.FilterTileProps.md)
- [FunnelChartProps](interface.FunnelChartProps.md)
- [FunnelStyleOptions](interface.FunnelStyleOptions.md)
- [GaugeIndicatorStyleOptions](interface.GaugeIndicatorStyleOptions.md)
- [GetDashboardModelOptions](interface.GetDashboardModelOptions.md)
- [GetDashboardModelsOptions](interface.GetDashboardModelsOptions.md)
- [GetFilterMembersData](interface.GetFilterMembersData.md)
- [GetFilterMembersParams](interface.GetFilterMembersParams.md)
- [GetHierarchyModelsParams](interface.GetHierarchyModelsParams.md)
- [GetNlgInsightsParams](interface.GetNlgInsightsParams.md)
- [GetNlgInsightsProps](interface.GetNlgInsightsProps.md)
- [GetNlqResultParams](interface.GetNlqResultParams.md)
- [GetQueryRecommendationsParams](interface.GetQueryRecommendationsParams.md)
- [GetSharedFormulaParams](interface.GetSharedFormulaParams.md)
- [GetWidgetModelParams](interface.GetWidgetModelParams.md)
- [Hierarchy](interface.Hierarchy.md)
- [HierarchyModel](interface.HierarchyModel.md)
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
- [RangeChartDataOptions](interface.RangeChartDataOptions.md)
- [RelativeDateFilterTileProps](interface.RelativeDateFilterTileProps.md)
- [ScatterChartDataOptions](interface.ScatterChartDataOptions.md)
- [ScatterChartProps](interface.ScatterChartProps.md)
- [ScattermapChartDataOptions](interface.ScattermapChartDataOptions.md)
- [ScattermapChartProps](interface.ScattermapChartProps.md)
- [ScattermapStyleOptions](interface.ScattermapStyleOptions.md)
- [ScatterStyleOptions](interface.ScatterStyleOptions.md)
- [SisenseContextConfig](interface.SisenseContextConfig.md)
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
- [ThemeSettings](interface.ThemeSettings.md)
- [TreemapChartProps](interface.TreemapChartProps.md)
- [TreemapStyleOptions](interface.TreemapStyleOptions.md)
- [WidgetByIdProps](interface.WidgetByIdProps.md)
- [WidgetByIdStyleOptions](interface.WidgetByIdStyleOptions.md)
- [WidgetsPanelColumnLayout](interface.WidgetsPanelColumnLayout.md)

StyleOptions.md)
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

> **widgets**: [`WidgetProps`](../type-aliases/type-alias.WidgetProps.md)[]

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
import { Component, Input } from '@angular/core';
import {
  CustomWidgetComponentProps,
  CustomWidgetsService,
  GenericDataOptions,
  AbstractDataPointWithEntries,
  DataPointEntry,
  StyledColumn,
  StyledMeasureColumn,
} from '@sisense/sdk-ui-angular';
import type { DataSource, Filter, FilterRelations } from '@sisense/sdk-data';

interface MyDataOptions extends GenericDataOptions {
  category: StyledColumn[];
  value: StyledMeasureColumn[];
}

interface MyDataPoint extends AbstractDataPointWithEntries {
  entries: {
    category: DataPointEntry[];
    value: DataPointEntry[];
  };
}

type MyWidgetProps = CustomWidgetComponentProps<MyDataOptions, object, MyDataPoint>;

@Component({
  selector: 'app-my-widget',
  template: `<div>My Custom Widget</div>`,
})
export class MyWidgetComponent implements MyWidgetProps {
  @Input() dataOptions!: MyDataOptions;
  @Input() dataSource?: DataSource;
  @Input() styleOptions?: object;
  @Input() filters?: Filter[] | FilterRelations;
  @Input() highlights?: Filter[];
  @Input() description?: string;
  @Input() onDataPointClick?: (point: MyDataPoint, nativeEvent: MouseEvent) => void;
  @Input() onDataPointContextMenu?: (point: MyDataPoint, nativeEvent: MouseEvent) => void;
  @Input() onDataPointsSelected?: (points: MyDataPoint[], nativeEvent: MouseEvent) => void;
}

// In AppModule or a component, register the custom widget:
constructor(private customWidgets: CustomWidgetsService) {
  this.customWidgets.registerCustomWidget('my-widget', MyWidgetComponent);
}
```

/ In AppModule or a component, register the custom widget:
constructor(private customWidgets: CustomWidgetsService) {
  this.customWidgets.registerCustomWidget('my-widget', MyWidgetComponent);
}
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

Props of the [DashboardByIdComponent](../fusion-assets/class.DashboardByIdComponent.md).

## Properties

### config

> **config**?: [`DashboardByIdConfig`](interface.DashboardByIdConfig.md)

The configuration for the dashboard

***

### dashboardOid

> **dashboardOid**: `string`

The OID of the dashboard to render.

**config**?: [`DashboardByIdConfig`](interface.DashboardByIdConfig.md)

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

Props of the [DashboardComponent](../dashboards/class.DashboardComponent.md).

ets panel
If not provided, the widgets will be laid out in one column vertically by default

# Interface DashboardProps

Props of the [DashboardComponent](../dashboards/class.DashboardComponent.md).

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

# Interface ExecuteCustomWidgetQueryParams

Parameters for custom widget query execution.

## Properties

### beforeQuery

> **beforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

### count

> **count**?: `number`

Number of rows to return in the query result

If not specified, the default value is `20000`

***

:------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

***

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

### ungroup

> **ungroup**?: `boolean`

Boolean flag whether to include `ungroup: true` in non-aggregated JAQL queries.

This improves computation and performance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface ExecutePivotQueryParams

Parameters for pivot data query execution.

## Properties

mance of querying tables when no aggregation is needed

If not specified, the default value is `false`

# Interface ExecutePivotQueryParams

Parameters for pivot data query execution.

## Properties

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

#### beforeQuery

> **beforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

##### Returns

`any`

# Interface ExecuteQueryByWidgetIdParams

Parameters for data query by widget id execution.

## Properties

### beforeQuery

> **beforeQuery**?: (`jaql`) => `any`

Sync or async callback that allows to modify the JAQL payload before it is sent to the server.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `jaql` | `any` |

#### Returns

`any`

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

of rows to return in the query result

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

Filters

> **includeDashboardFilters**?: `boolean`

Boolean flag whether to include dashboard filters in the widget's `filters` and `highlights`

If not specified, the default value is `false`.

***

### offset

> **offset**?: `number`

Offset of the first row to return

If not specified, the default value is `0`

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

# Interface GetWidgetModelParams

Parameters for retrieving an existing widget model from the Sisense instance

## Properties

### dashboardOid

> **dashboardOid**: `string`

Identifier of the dashboard that contains the widget

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

Props of the [PivotTableComponent](../data-grids/class.PivotTableComponent.md).

## Properties

ce.StyledMeasureColumn.md))[]

Measures for the values of the pivot table

# Interface PivotTableProps

Props of the [PivotTableComponent](../data-grids/class.PivotTableComponent.md).

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

#### dataPointClick

> **dataPointClick**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

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

Props of the [PivotTableWidgetComponent](../dashboards/class.PivotTableWidgetComponent.md).

## Properties

ainer wrapping this component
3. Default value of 400px

# Interface PivotTableWidgetProps

Props of the [PivotTableWidgetComponent](../dashboards/class.PivotTableWidgetComponent.md).

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

#### dataPointClick

> **dataPointClick**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is clicked

***

#### dataPointContextMenu

> **dataPointContextMenu**?: [`PivotTableDataPointEventHandler`](../type-aliases/type-alias.PivotTableDataPointEventHandler.md)

Callback function that is called when the pivot table cell is right-clicked

# Interface TextWidgetProps

Props for the text widget.

## Properties

### Widget

#### styleOptions

> **styleOptions**: [`TextWidgetStyleOptions`](../../sdk-ui/type-aliases/type-alias.TextWidgetStyleOptions.md)

Style options for the text widget.

# Interface WidgetByIdProps

Props of the [WidgetByIdComponent](../fusion-assets/class.WidgetByIdComponent.md).

## Properties

dth of the container wrapping this component
3. Default value of 400px

# Interface WidgetByIdProps

Props of the [WidgetByIdComponent](../fusion-assets/class.WidgetByIdComponent.md).

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

#### dataReady

> **dataReady**?: (`data`) => [`Data`](../../sdk-data/interfaces/interface.Data.md)

A callback that allows to modify data immediately after it has been retrieved.
It can be used to inject modification of queried data.

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

TypeScript type aliases for components and services listed above

- [AppConfig](type-alias.AppConfig.md)
- [AreamapChartType](type-alias.AreamapChartType.md)
- [AreamapDataPointEvent](type-alias.AreamapDataPointEvent.md)
- [AreamapDataPointEventHandler](type-alias.AreamapDataPointEventHandler.md)
- [AreaSubtype](type-alias.AreaSubtype.md)
- [AxisLabel](type-alias.AxisLabel.md)
- [BeforeRenderHandler](type-alias.BeforeRenderHandler.md)
- [BoxplotChartCustomDataOptions](type-alias.BoxplotChartCustomDataOptions.md)
- [BoxplotChartDataOptions](type-alias.BoxplotChartDataOptions.md)
- [BoxplotChartType](type-alias.BoxplotChartType.md)
- [BoxplotDataPoint](type-alias.BoxplotDataPoint.md)
- [BoxplotDataPointEvent](type-alias.BoxplotDataPointEvent.md)
- [BoxplotDataPointEventHandler](type-alias.BoxplotDataPointEventHandler.md)
- [BoxplotDataPointsEvent](type-alias.BoxplotDataPointsEvent.md)
- [BoxplotSubtype](type-alias.BoxplotSubtype.md)
- [BoxWhiskerType](type-alias.BoxWhiskerType.md)
- [CalendarDayOfWeek](type-alias.CalendarDayOfWeek.md)
- [CalendarHeatmapChartType](type-alias.CalendarHeatmapChartType.md)
- [CalendarHeatmapDataPoint](type-alias.CalendarHeatmapDataPoint.md)
- [CalendarHeatmapDataPointEvent](type-alias.CalendarHeatmapDataPointEvent.md)
- [CalendarHeatmapDataPointEventHandler](type-alias.CalendarHeatmapDataPointEventHandler.md)
- [CalendarHeatmapDataPointsEvent](type-alias.CalendarHeatmapDataPointsEvent.md)
- [CalendarHeatmapDataPointsEventHandler](type-alias.CalendarHeatmapDataPointsEventHandler.md)
- [CalendarHeatmapSubtype](type-alias.CalendarHeatmapSubtype.md)
- [CalendarHeatmapViewType](type-alias.CalendarHeatmapViewType.md)
- [CartesianChartType](type-alias.CartesianChartType.md)
- [CartesianWidgetType](type-alias.CartesianWidgetType.md)
- [CategoricalChartType](type-alias.CategoricalChartType.md)
- [CategoricalWidgetType](type-alias.CategoricalWidgetType.md)
- [ChartDataOptions](type-alias.ChartDataOptions.md)
- [ChartDataPointClickEvent](type-alias.ChartDataPointClickEvent.md)
- [ChartDataPointClickEventHandler](type-alias.ChartDataPointClickEventHandler.md)
- [ChartDataPointContextMenuEvent](type-alias.ChartDataPointContextMenuEvent.md)
- [ChartDataPointContextMenuEventHandler](type-alias.ChartDataPointContextMenuEventHandler.md)
- [ChartDataPointsEvent](type-alias.ChartDataPointsEvent.md)
- [ChartDataPointsEventHandler](type-alias.ChartDataPointsEventHandler.md)
- [ChartStyleOptions](type-alias.ChartStyleOptions.md)
- [ChartType](type-alias.ChartType.md)
- [ChartWidgetStyleOptions](type-alias.ChartWidgetStyleOptions.md)
- [Color](type-alias.Color.md)
- [ColorPaletteTheme](type-alias.ColorPaletteTheme.md)
- [ConditionalDataColorOptions](type-alias.ConditionalDataColorOptions.md)
- [Convolution](type-alias.Convolution.md)
- [CustomDrilldownResult](type-alias.CustomDrilldownResult.md)
- [CustomWidgetComponent](type-alias.CustomWidgetComponent.md)
- [DashStyle](type-alias.DashStyle.md)
- [DataColorCondition](type-alias.DataColorCondition.md)
- [DataColorOptions](type-alias.DataColorOptions.md)
- [DataOptionLocation](type-alias.DataOptionLocation.md)
- [DataPoint](type-alias.DataPoint.md)
- [DataPointEvent](type-alias.DataPointEvent.md)
- [DataPointEventHandler](type-alias.DataPointEventHandler.md)
- [DataPointsEvent](type-alias.DataPointsEvent.md)
- [DataPointsEventHandler](type-alias.DataPointsEventHandler.md)
- [DateConfig](type-alias.DateConfig.md)
- [DateLevel](type-alias.DateLevel.md)
- [DayOfWeek](type-alias.DayOfWeek.md)
- [DecimalScale](type-alias.DecimalScale.md)
- [DrilldownOptions](type-alias.DrilldownOptions.md)
- [DrilldownSelection](type-alias.DrilldownSelection.md)
- [EndCapType](type-alias.EndCapType.md)
- [FilterChangeEvent](type-alias.FilterChangeEvent.md)
- [FilterChangeEventHandler](type-alias.FilterChangeEventHandler.md)
- [FilterDeleteEventHandler](type-alias.FilterDeleteEventHandler.md)
- [FilterEditEvent](type-alias.FilterEditEvent.md)
- [FilterEditEventHandler](type-alias.FilterEditEventHandler.md)
- [FiltersPanelChangeEvent](type-alias.FiltersPanelChangeEvent.md)
- [FiltersPanelChangeEventHandler](type-alias.FiltersPanelChangeEventHandler.md)
- [FilterVariant](type-alias.FilterVariant.md)
- [GenericDataOptions](type-alias.GenericDataOptions.md)
- [IndicatorBeforeRenderHandler](type-alias.IndicatorBeforeRenderHandler.md)
- [IndicatorChartType](type-alias.IndicatorChartType.md)
- [IndicatorComponents](type-alias.IndicatorComponents.md)
- [IndicatorDataPoint](type-alias.IndicatorDataPoint.md)
- [IndicatorDataPointEvent](type-alias.IndicatorDataPointEvent.md)
- [IndicatorDataPointEventHandler](type-alias.IndicatorDataPointEventHandler.md)
- [IndicatorRenderOptions](type-alias.IndicatorRenderOptions.md)
- [IndicatorStyleOptions](type-alias.IndicatorStyleOptions.md)
- [Labels](type-alias.Labels.md)
- [Legend](type-alias.Legend.md)
- [LineOptions](type-alias.LineOptions.md)
- [LineSubtype](type-alias.LineSubtype.md)
- [LineWidth](type-alias.LineWidth.md)
- [Markers](type-alias.Markers.md)
- [MenuItemSection](type-alias.MenuItemSection.md)
- [MenuPosition](type-alias.MenuPosition.md)
- [MonthOfYear](type-alias.MonthOfYear.md)
- [MultiColumnValueToColorMap](type-alias.MultiColumnValueToColorMap.md)
- [Navigator](type-alias.Navigator.md)
- [NumberFormatConfig](type-alias.NumberFormatConfig.md)
- [PieSubtype](type-alias.PieSubtype.md)
- [PivotRowsSort](type-alias.PivotRowsSort.md)
- [PivotTableDataPointEvent](type-alias.PivotTableDataPointEvent.md)
- [PivotTableDataPointEventHandler](type-alias.PivotTableDataPointEventHandler.md)
- [PivotTableDrilldownOptions](type-alias.PivotTableDrilldownOptions.md)
- [PivotTableNonSelectableDrilldownOptions](type-alias.PivotTableNonSelectableDrilldownOptions.md)
- [PivotTableSelectableDrilldownOptions](type-alias.PivotTableSelectableDrilldownOptions.md)
- [PivotTableWidgetStyleOptions](type-alias.PivotTableWidgetStyleOptions.md)
- [PolarSubtype](type-alias.PolarSubtype.md)
- [RangeChartType](type-alias.RangeChartType.md)
- [RangeDataColorOptions](type-alias.RangeDataColorOptions.md)
- [ScatterChartType](type-alias.ScatterChartType.md)
- [ScatterDataPoint](type-alias.ScatterDataPoint.md)
- [ScatterDataPointEvent](type-alias.ScatterDataPointEvent.md)
- [ScatterDataPointEventHandler](type-alias.ScatterDataPointEventHandler.md)
- [ScatterDataPointsEvent](type-alias.ScatterDataPointsEvent.md)
- [ScatterDataPointsEventHandler](type-alias.ScatterDataPointsEventHandler.md)
- [ScattermapChartType](type-alias.ScattermapChartType.md)
- [ScattermapDataPointEvent](type-alias.ScattermapDataPointEvent.md)
- [ScattermapDataPointEventHandler](type-alias.ScattermapDataPointEventHandler.md)
- [ScattermapLocationLevel](type-alias.ScattermapLocationLevel.md)
- [ScattermapMarkers](type-alias.ScattermapMarkers.md)
- [ScatterMarkerSize](type-alias.ScatterMarkerSize.md)
- [SeriesChartType](type-alias.SeriesChartType.md)
- [SeriesLabels](type-alias.SeriesLabels.md)
- [SortDirection](type-alias.SortDirection.md)
- [StackableSubtype](type-alias.StackableSubtype.md)
- [TableType](type-alias.TableType.md)
- [TabularWidgetType](type-alias.TabularWidgetType.md)
- [TextWidgetDataPointEvent](type-alias.TextWidgetDataPointEvent.md)
- [ThemeConfig](type-alias.ThemeConfig.md)
- [ThemeOid](type-alias.ThemeOid.md)
- [TranslationConfig](type-alias.TranslationConfig.md)
- [UniformDataColorOptions](type-alias.UniformDataColorOptions.md)
- [ValueToColorMap](type-alias.ValueToColorMap.md)
- [WidgetDataOptions](type-alias.WidgetDataOptions.md)
- [WidgetDataPointClickEvent](type-alias.WidgetDataPointClickEvent.md)
- [WidgetDataPointClickEventHandler](type-alias.WidgetDataPointClickEventHandler.md)
- [WidgetDataPointContextMenuEvent](type-alias.WidgetDataPointContextMenuEvent.md)
- [WidgetDataPointContextMenuEventHandler](type-alias.WidgetDataPointContextMenuEventHandler.md)
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

# Type alias AreamapDataPointEvent

> **AreamapDataPointEvent**: `object`

ched to the top representing 100%.

# Type alias AreamapChartType

> **AreamapChartType**: `"areamap"`

Areamap chart types

# Type alias AreamapDataPointEvent

> **AreamapDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `point`

**point**: [`AreamapDataPoint`](../../sdk-ui/type-aliases/type-alias.AreamapDataPoint.md)

Data point that was clicked

# Type alias AreamapDataPointEventHandler

> **AreamapDataPointEventHandler**: (`event`) => `void`

Click handler for when a data point on Areamap is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`AreamapDataPointEvent`](type-alias.AreamapDataPointEvent.md) |

## Returns

`void`

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

`number`

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

aPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)[]
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

# Type alias BoxplotDataPointEvent

> **BoxplotDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `PointerEvent`

Native PointerEvent

***

### `point`

**point**: [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md)

Data point that was clicked

# Type alias BoxplotDataPointEventHandler

> **BoxplotDataPointEventHandler**: (`event`) => `void`

Click handler for when a data point on Boxplot is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`BoxplotDataPointEvent`](type-alias.BoxplotDataPointEvent.md) |

## Returns

`void`

# Type alias BoxplotDataPointsEvent

> **BoxplotDataPointsEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `points`

**points**: [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md)[]

Data point that were selected

# Type alias BoxplotSubtype

> **BoxplotSubtype**: `"boxplot/full"` \| `"boxplot/hollow"`

`points`

**points**: [`BoxplotDataPoint`](type-alias.BoxplotDataPoint.md)[]

Data point that were selected

# Type alias BoxplotSubtype

> **BoxplotSubtype**: `"boxplot/full"` \| `"boxplot/hollow"`

# Type alias CalendarDayOfWeek

> **CalendarDayOfWeek**: `"friday"` \| `"monday"` \| `"saturday"` \| `"sunday"` \| `"thursday"` \| `"tuesday"` \| `"wednesday"`

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

# Type alias CalendarHeatmapDataPointEvent

> **CalendarHeatmapDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `PointerEvent`

Native PointerEvent

***

### `point`

**point**: [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)

Data point that was clicked

## `nativeEvent`

**nativeEvent**: `PointerEvent`

Native PointerEvent

***

### `point`

**point**: [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)

Data point that was clicked

# Type alias CalendarHeatmapDataPointEventHandler

> **CalendarHeatmapDataPointEventHandler**: (`event`) => `void`

Click handler for when a calendar-heatmap data point is clicked

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`CalendarHeatmapDataPointEvent`](type-alias.CalendarHeatmapDataPointEvent.md) |

## Returns

`void`

# Type alias CalendarHeatmapDataPointsEvent

> **CalendarHeatmapDataPointsEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `points`

**points**: [`CalendarHeatmapDataPoint`](type-alias.CalendarHeatmapDataPoint.md)[]

Data points that were selected

# Type alias CalendarHeatmapDataPointsEventHandler

> **CalendarHeatmapDataPointsEventHandler**: (`event`) => `void`

Click handler for when multiple calendar-heatmap data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`CalendarHeatmapDataPointsEvent`](type-alias.CalendarHeatmapDataPointsEvent.md) |

## Returns

`void`

# Type alias CalendarHeatmapSubtype

> **CalendarHeatmapSubtype**: `"calendar-heatmap/continuous"` \| `"calendar-heatmap/split"`

Calendar heatmap chart subtype

ointsEvent.md) |

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

.md),
[Boxplot](type-alias.BoxplotChartDataOptions.md),
[Areamap](../interfaces/interface.AreamapChartDataOptions.md), and
[Scattermap](../interfaces/interface.ScattermapChartDataOptions.md) charts.

# Type alias ChartDataPointClickEvent

> **ChartDataPointClickEvent**: [`AreamapDataPointEvent`](type-alias.AreamapDataPointEvent.md) \| [`BoxplotDataPointEvent`](type-alias.BoxplotDataPointEvent.md) \| [`CalendarHeatmapDataPointEvent`](type-alias.CalendarHeatmapDataPointEvent.md) \| [`DataPointEvent`](type-alias.DataPointEvent.md) \| [`IndicatorDataPointEvent`](type-alias.IndicatorDataPointEvent.md) \| [`ScatterDataPointEvent`](type-alias.ScatterDataPointEvent.md) \| [`ScattermapDataPointEvent`](type-alias.ScattermapDataPointEvent.md)

# Type alias ChartDataPointClickEventHandler

> **ChartDataPointClickEventHandler**: (`event`) => `void`

Click handler for when a data point on Chart is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ChartDataPointClickEvent`](type-alias.ChartDataPointClickEvent.md) |

## Returns

`void`

# Type alias ChartDataPointContextMenuEvent

> **ChartDataPointContextMenuEvent**: [`BoxplotDataPointEvent`](type-alias.BoxplotDataPointEvent.md) \| [`CalendarHeatmapDataPointEvent`](type-alias.CalendarHeatmapDataPointEvent.md) \| [`DataPointEvent`](type-alias.DataPointEvent.md) \| [`ScatterDataPointEvent`](type-alias.ScatterDataPointEvent.md)

| [`CalendarHeatmapDataPointEvent`](type-alias.CalendarHeatmapDataPointEvent.md) \| [`DataPointEvent`](type-alias.DataPointEvent.md) \| [`ScatterDataPointEvent`](type-alias.ScatterDataPointEvent.md)

# Type alias ChartDataPointContextMenuEventHandler

> **ChartDataPointContextMenuEventHandler**: (`event`) => `void`

Context menu handler for when a data point on the Chart is right-clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ChartDataPointContextMenuEvent`](type-alias.ChartDataPointContextMenuEvent.md) |

## Returns

`void`

# Type alias ChartDataPointsEvent

> **ChartDataPointsEvent**: [`CalendarHeatmapDataPointsEvent`](type-alias.CalendarHeatmapDataPointsEvent.md) \| [`DataPointsEvent`](type-alias.DataPointsEvent.md) \| [`ScatterDataPointsEvent`](type-alias.ScatterDataPointsEvent.md)

# Type alias ChartDataPointsEventHandler

> **ChartDataPointsEventHandler**: (`event`) => `void`

Click handler for when multiple data points on Chart are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ChartDataPointsEvent`](type-alias.ChartDataPointsEvent.md) |

## Returns

`void`

# Type alias ChartStyleOptions

> **ChartStyleOptions**: [`RegularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.RegularChartStyleOptions.md) \| [`TabularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

yleOptions.md) \| [`TabularChartStyleOptions`](../../sdk-ui/type-aliases/type-alias.TabularChartStyleOptions.md)

Configuration options that define functional style of the various elements of chart.

# Type alias ChartType

> **ChartType**: [`AreamapChartType`](type-alias.AreamapChartType.md) \| [`BoxplotChartType`](type-alias.BoxplotChartType.md) \| [`CalendarHeatmapChartType`](type-alias.CalendarHeatmapChartType.md) \| [`CartesianChartType`](type-alias.CartesianChartType.md) \| [`CategoricalChartType`](type-alias.CategoricalChartType.md) \| [`IndicatorChartType`](type-alias.IndicatorChartType.md) \| [`RangeChartType`](type-alias.RangeChartType.md) \| [`ScatterChartType`](type-alias.ScatterChartType.md) \| [`ScattermapChartType`](type-alias.ScattermapChartType.md) \| [`TableChartType`](../../sdk-ui/type-aliases/type-alias.TableChartType.md)

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

# Type alias CustomDrilldownResult

> **CustomDrilldownResult**: [`CustomDrilldownResult`](../../sdk-ui/type-aliases/type-alias.CustomDrilldownResult.md) & \{
  `breadcrumbsComponent`: \{
    `render`: `ComponentRenderer`;
  };
 }

> ## `CustomDrilldownResult.breadcrumbsComponent`
>
> **breadcrumbsComponent**?: `object`
>
> > ### `breadcrumbsComponent.render`
> >
> > **render**: `ComponentRenderer`
> >
> >
>
>

derer`;
  };
 }

> ## `CustomDrilldownResult.breadcrumbsComponent`
>
> **breadcrumbsComponent**?: `object`
>
> > ### `breadcrumbsComponent.render`
> >
> > **render**: `ComponentRenderer`
> >
> >
>
>

# Type alias CustomWidgetComponent`<Props>`

> **CustomWidgetComponent**: <`Props`> `Type`\< `Props` \>

Type representing an Angular component class that can be used as a user-defined custom widget.

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `Props` *extends* [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md) | [`CustomWidgetComponentProps`](../interfaces/interface.CustomWidgetComponentProps.md) |

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

# Type alias DataPointEvent

> **DataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `PointerEvent`

Native PointerEvent

***

### `point`

**point**: [`DataPoint`](type-alias.DataPoint.md)

Data point that was clicked

# Type alias DataPointEventHandler

> **DataPointEventHandler**: (`event`) => `void`

A handler function that allows you to customize what happens when certain events occur to
a data point.

clicked

# Type alias DataPointEventHandler

> **DataPointEventHandler**: (`event`) => `void`

A handler function that allows you to customize what happens when certain events occur to
a data point.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`DataPointEvent`](type-alias.DataPointEvent.md) |

## Returns

`void`

# Type alias DataPointsEvent

> **DataPointsEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `points`

**points**: [`DataPoint`](type-alias.DataPoint.md)[]

Data points that were selected

# Type alias DataPointsEventHandler

> **DataPointsEventHandler**: (`event`) => `void`

Click handler for when multiple data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`DataPointsEvent`](type-alias.DataPointsEvent.md) |

## Returns

`void`

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

### `selectedDateLevel`

**selectedDateLevel**: [`DateLevel`](type-alias.DateLevel.md)

The selected date level for this particular column of data

***

### `timeZone`

**timeZone**: `string`

The IANA time zone

***

evel`

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

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

Dimensions and hierarchies available for drilldown on.

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

*: `object`

Selection for the drilldown

## Type declaration

### `nextDimension`

**nextDimension**: [`Attribute`](../../sdk-data/interfaces/interface.Attribute.md)

Dimension to drilldown to

***

### `points`

**points**: [`ChartDataPoint`](../../sdk-ui/type-aliases/type-alias.ChartDataPoint.md)[]

Points selected for drilldown

# Type alias EndCapType

> **EndCapType**: `"Round"` \| `"Square"`

Configuration that defines line end cap type

# Type alias FilterChangeEvent

> **FilterChangeEvent**: `object`

## Type declaration

### `filter`

**filter**: [`Filter`](../../sdk-data/interfaces/interface.Filter.md) \| `null`

Filter that was changed

# Type alias FilterChangeEventHandler

> **FilterChangeEventHandler**: (`event`) => `void`

Filter change event handler.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`FilterChangeEvent`](type-alias.FilterChangeEvent.md) |

## Returns

`void`

# Type alias FilterDeleteEventHandler

> **FilterDeleteEventHandler**: () => `void`

Filter delete event handler.

## Returns

`void`

# Type alias FilterEditEvent

> **FilterEditEvent**: `object`

## Type declaration

### `levelIndex`

**levelIndex**?: `number`

Index of the filter level that triggers the edit event (in the case of a cascading filter)

# Type alias FilterEditEventHandler

> **FilterEditEventHandler**: (`event`) => `void`

Filter edit event handler.

the filter level that triggers the edit event (in the case of a cascading filter)

# Type alias FilterEditEventHandler

> **FilterEditEventHandler**: (`event`) => `void`

Filter edit event handler.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`FilterEditEvent`](type-alias.FilterEditEvent.md) |

## Returns

`void`

# Type alias FilterVariant

> **FilterVariant**: `"horizontal"` \| `"vertical"`

Orientation options for the filter tile. The filter tile can
be arranged vertically, or horizontally to fit most toolbars.

# Type alias FiltersPanelChangeEvent

> **FiltersPanelChangeEvent**: `object`

## Type declaration

### `filters`

**filters**: [`FilterRelations`](../../sdk-data/interfaces/interface.FilterRelations.md) \| [`Filter`](../../sdk-data/interfaces/interface.Filter.md)[]

The updated filters

# Type alias FiltersPanelChangeEventHandler

> **FiltersPanelChangeEventHandler**: (`event`) => `void`

Filters panel change event handler.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`FiltersPanelChangeEvent`](type-alias.FiltersPanelChangeEvent.md) |

## Returns

`void`

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
> **max**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `max` data options
>
> #### `entries.min`
>
> **min**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `min` data options
>
> #### `entries.secondary`
>
> **secondary**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `secondary` data options
>
> #### `entries.value`
>
> **value**?: [`DataPointEntry`](../../sdk-ui/type-aliases/type-alias.DataPointEntry.md)
>
> Data point entry for the `value` data options
>
>

# Type alias IndicatorDataPointEvent

> **IndicatorDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `point`

**point**: [`IndicatorDataPoint`](type-alias.IndicatorDataPoint.md)

Data point that was clicked

# Type alias IndicatorDataPointEventHandler

> **IndicatorDataPointEventHandler**: (`event`) => `void`

Click handler for when a data point on Indicator is clicked.

md)

Data point that was clicked

# Type alias IndicatorDataPointEventHandler

> **IndicatorDataPointEventHandler**: (`event`) => `void`

Click handler for when a data point on Indicator is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`IndicatorDataPointEvent`](type-alias.IndicatorDataPointEvent.md) |

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

5` \| `6` \| `7` \| `8` \| `9`

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

greater than or equal one thousand - e.g. 1K

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

### `thousandSeparator`

**thousandSeparator**?: `boolean`

Boolean flag whether the thousand separator is shown

If true, show the thousand separator, e.g. `1,000`. Otherwise, show `1000`

***

### `trillion`

**trillion**?: `boolean`

Boolean flag whether to show an abbreviation
for a number greater than or equal one trillion - e.g. 1T

separator, e.g. `1,000`. Otherwise, show `1000`

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

# Type alias PivotTableDataPointEvent

> **PivotTableDataPointEvent**: `object`

## Type declaration

alias.SortDirection.md)

Sorting direction, either in Ascending order, Descending order, or None

# Type alias PivotTableDataPointEvent

> **PivotTableDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `point`

**point**: [`PivotTableDataPoint`](../../sdk-ui/type-aliases/type-alias.PivotTableDataPoint.md)

Data point that was clicked

# Type alias PivotTableDataPointEventHandler

> **PivotTableDataPointEventHandler**: (`event`) => `void`

Click handler for when a pivot table data point is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`PivotTableDataPointEvent`](type-alias.PivotTableDataPointEvent.md) |

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

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

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

**drilldownPaths**?: ([`Attribute`](../../sdk-data/interfaces/interface.Attribute.md) \| [`Hierarchy`](../interfaces/interface.Hierarchy.md) \| [`HierarchyId`](../../sdk-ui/type-aliases/type-alias.HierarchyId.md))[]

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

> **PivotTableWidgetStyleOptions**: [`PivotTableStyleOptions`](../interfaces/interface.PivotTableStyleOptions.md) & [`WidgetContainerStyleOptions`](../../sdk-ui/interfaces/interface.WidgetContainerStyleOptions.md)

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

# Type alias ScatterDataPointEvent

> **ScatterDataPointEvent**: `object`

## Type declaration

ber` \| `string`

Value of the x axis

***

### `y`

**y**?: `number` \| `string`

Value of the y axis

# Type alias ScatterDataPointEvent

> **ScatterDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `PointerEvent`

Native PointerEvent

***

### `point`

**point**: [`ScatterDataPoint`](type-alias.ScatterDataPoint.md)

Data point that was clicked

# Type alias ScatterDataPointEventHandler

> **ScatterDataPointEventHandler**: (`event`) => `void`

Click handler for when a scatter data point is clicked

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ScatterDataPointEvent`](type-alias.ScatterDataPointEvent.md) |

## Returns

`void`

# Type alias ScatterDataPointsEvent

> **ScatterDataPointsEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `points`

**points**: [`ScatterDataPoint`](type-alias.ScatterDataPoint.md)[]

Data points that were selected

# Type alias ScatterDataPointsEventHandler

> **ScatterDataPointsEventHandler**: (`event`) => `void`

Click handler for when multiple scatter data points are selected.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ScatterDataPointsEvent`](type-alias.ScatterDataPointsEvent.md) |

## Returns

`void`

# Type alias ScatterMarkerSize

> **ScatterMarkerSize**: `object`

## Type declaration

### `scatterBubbleMaxSize`

**scatterBubbleMaxSize**: `number`

***

DataPointsEvent.md) |

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

# Type alias ScattermapChartType

> **ScattermapChartType**: `"scattermap"`

Scattermap chart types

# Type alias ScattermapDataPointEvent

> **ScattermapDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `point`

**point**: [`ScattermapDataPoint`](../../sdk-ui/type-aliases/type-alias.ScattermapDataPoint.md)

Data point that was clicked

# Type alias ScattermapDataPointEventHandler

> **ScattermapDataPointEventHandler**: (`event`) => `void`

Click handler for when a data point on Scattermap is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ScattermapDataPointEvent`](type-alias.ScattermapDataPointEvent.md) |

## Returns

`void`

data point on Scattermap is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`ScattermapDataPointEvent`](type-alias.ScattermapDataPointEvent.md) |

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

`number`
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

# Type alias TextWidgetDataPointEvent

> **TextWidgetDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

ant of tabular widget.

# Type alias TextWidgetDataPointEvent

> **TextWidgetDataPointEvent**: `object`

## Type declaration

### `nativeEvent`

**nativeEvent**: `MouseEvent`

Native MouseEvent

***

### `point`

**point**: `TextWidgetDataPoint`

Data point that was clicked

# Type alias ThemeConfig

> **ThemeConfig**: `PropsWithChildren`\< \{
  `theme`: [`ThemeOid`](type-alias.ThemeOid.md) \| [`ThemeSettings`](../interfaces/interface.ThemeSettings.md);
 } \>

Configurations for Theme.

Two options are supported:

(1) `ThemeSettings` -- Custom theme settings that override the default theme settings.

OR

(2) `ThemeOid` -- Theme identifier as defined in a Fusion instance (**Admin > App Configuration > Look and Feel**).
See [Customizing the Sisense User Interface](https://docs.sisense.com/main/SisenseLinux/customizing-the-sisense-user-interface.htm) for more details.

# Type alias ThemeOid

> **ThemeOid**: `string`

Identifier of a theme as defined in the Sisense instance.

# Type alias TranslationConfig

> **TranslationConfig**: `object`

Translation Configuration

## Type declaration

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

# Type alias ValueToColorMap

> **ValueToColorMap**: `object`

Mapping of each of the chart value series to colors.

## Index signature

 \[`value`: `string`\]: `string`

# Type alias WidgetDataOptions

> **WidgetDataOptions**: [`ChartDataOptions`](type-alias.ChartDataOptions.md) \| `EmptyObject` \| [`PivotTableDataOptions`](../interfaces/interface.PivotTableDataOptions.md)

Widget data options.

# Type alias WidgetDataPointClickEvent

> **WidgetDataPointClickEvent**: [`ChartDataPointClickEvent`](type-alias.ChartDataPointClickEvent.md) \| [`PivotTableDataPointEvent`](type-alias.PivotTableDataPointEvent.md) \| [`TextWidgetDataPointEvent`](type-alias.TextWidgetDataPointEvent.md)

ntClickEvent`](type-alias.ChartDataPointClickEvent.md) \| [`PivotTableDataPointEvent`](type-alias.PivotTableDataPointEvent.md) \| [`TextWidgetDataPointEvent`](type-alias.TextWidgetDataPointEvent.md)

# Type alias WidgetDataPointClickEventHandler

> **WidgetDataPointClickEventHandler**: (`event`) => `void`

Click handler for when a data point on Widget is clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`WidgetDataPointClickEvent`](type-alias.WidgetDataPointClickEvent.md) |

## Returns

`void`

# Type alias WidgetDataPointContextMenuEvent

> **WidgetDataPointContextMenuEvent**: [`ChartDataPointContextMenuEvent`](type-alias.ChartDataPointContextMenuEvent.md) \| [`PivotTableDataPointEvent`](type-alias.PivotTableDataPointEvent.md)

# Type alias WidgetDataPointContextMenuEventHandler

> **WidgetDataPointContextMenuEventHandler**: (`event`) => `void`

Context menu handler for when a data point on Widget is right-clicked.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`WidgetDataPointContextMenuEvent`](type-alias.WidgetDataPointContextMenuEvent.md) |

## Returns

`void`

# Type alias WidgetId

> **WidgetId**: `string`

Widget ID

| :------ | :------ |
| `event` | [`WidgetDataPointContextMenuEvent`](type-alias.WidgetDataPointContextMenuEvent.md) |

## Returns

`void`

# Type alias WidgetId

> **WidgetId**: `string`

Widget ID

# Type alias WidgetProps

> **WidgetProps**: `SoftUnion`\< [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`ChartWidgetProps`](../interfaces/interface.ChartWidgetProps.md), `"chart"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`CustomWidgetProps`](../../sdk-ui/interfaces/interface.CustomWidgetProps.md), `"custom"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`PivotTableWidgetProps`](../interfaces/interface.PivotTableWidgetProps.md), `"pivot"` \> \| [`WithCommonWidgetProps`](type-alias.WithCommonWidgetProps.md)\< [`TextWidgetProps`](../interfaces/interface.TextWidgetProps.md), `"text"` \> \> & \{
  `dataPointClick`: [`WidgetDataPointClickEventHandler`](type-alias.WidgetDataPointClickEventHandler.md);
  `dataPointContextMenu`: [`WidgetDataPointContextMenuEventHandler`](type-alias.WidgetDataPointContextMenuEventHandler.md);
  `dataPointsSelect`: [`ChartDataPointsEventHandler`](type-alias.ChartDataPointsEventHandler.md);
 }

Props of the [WidgetComponent](../dashboards/class.WidgetComponent.md).

> ## `WidgetProps.dataPointClick`
>
> **dataPointClick**?: [`WidgetDataPointClickEventHandler`](type-alias.WidgetDataPointClickEventHandler.md)
>
> ## `WidgetProps.dataPointContextMenu`
>
> **dataPointContextMenu**?: [`WidgetDataPointContextMenuEventHandler`](type-alias.WidgetDataPointContextMenuEventHandler.md)
>
> ## `WidgetProps.dataPointsSelect`
>
> **dataPointsSelect**?: [`ChartDataPointsEventHandler`](type-alias.ChartDataPointsEventHandler.md)
>
>

(type-alias.WidgetDataPointContextMenuEventHandler.md)
>
> ## `WidgetProps.dataPointsSelect`
>
> **dataPointsSelect**?: [`ChartDataPointsEventHandler`](type-alias.ChartDataPointsEventHandler.md)
>
>

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

| Parameter | Description |
| :------ | :------ |
| `BaseWidget` |  |
| `Type` |  |

# Type alias X2Title

> **X2Title**: `object`

## Type declaration

### `enabled`

**enabled**: `boolean`

***

### `text`

**text**?: `string`


## Filters

# Filters

- [FilterService](class.FilterService.md)

# Class FilterService

Service for working with filter.

## Constructors

nabled**: `boolean`

***

### `text`

**text**?: `string`


## Filters

# Filters

- [FilterService](class.FilterService.md)

# Class FilterService

Service for working with filter.

## Constructors

### constructor

> **new FilterService**(`sisenseContextService`): [`FilterService`](class.FilterService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sisenseContextService` | [`SisenseContextService`](../contexts/class.SisenseContextService.md) |

#### Returns

[`FilterService`](class.FilterService.md)

## Methods

### getFilterMembers

> **getFilterMembers**(`params`): `Promise`\< [`GetFilterMembersData`](../interfaces/interface.GetFilterMembersData.md) \>

Retrieves members of the provided filter.

Those members can be used to display a list of members in a third-party filter component such as Material UI Select.

interface.GetFilterMembersData.md) \>

Retrieves members of the provided filter.

Those members can be used to display a list of members in a third-party filter component such as Material UI Select.

## Example

Retrieve selected members from a Filter on Country of the Sample ECommerce data model.

```ts
try {
  const data = await filterService.getFilterMembers({
    filter: filterFactory.members(DM.Country.Country, ['United States', 'Canada'])
  });

  const { selectedMembers, allMembers, excludeMembers, enableMultiSelection } = data;
  console.log('selectedMembers', selectedMembers);
} catch (error) {
  console.error('Error:', error);
}
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetFilterMembersParams`](../interfaces/interface.GetFilterMembersParams.md) | Parameters for retrieving filter members |

#### Returns

`Promise`\< [`GetFilterMembersData`](../interfaces/interface.GetFilterMembersData.md) \>

Promise that resolves to the filter members data

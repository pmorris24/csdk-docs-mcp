# Function add

> **add**(
  `value1`,
  `value2`,
  `name`?,
  `withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by adding two given numbers or measures.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value1` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | First value |
| `value2` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | Second value |
| `name`? | `string` | Optional name for the new measure |
| `withParentheses`? | `boolean` | Optional boolean flag whether to wrap the arithmetic operation with parentheses |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

```ts
const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureSum = measureFactory.add(measure1, measure2);
```

mple

```ts
const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureSum = measureFactory.add(measure1, measure2);
```

# Function aggregate

> **aggregate**(
  `attribute`,
  `aggregationType`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates an aggregated measure.

This is a base function to build other aggregation functions (e.g., `sum`, `average`, etc.)
as listed in [AggregationTypes](../../../variables/variable.AggregationTypes.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `aggregationType` | `string` | Aggregation type. See [AggregationTypes](../../../variables/variable.AggregationTypes.md) |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the total cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.aggregate(DM.Commerce.Cost, 'sum'),
```

easure.md)

A measure instance

## Example

Calculate the total cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.aggregate(DM.Commerce.Cost, 'sum'),
```

# Function and <Badge type="beta" text="Beta" />

> **and**(`left`, `right`): [`FilterRelations`](../../../../../interfaces/interface.FilterRelations.md)

Creates an 'AND' filter relations

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `left` | [`FilterRelationsNode`](../../../../../type-aliases/type-alias.FilterRelationsNode.md) | First filter or filter relations |
| `right` | [`FilterRelationsNode`](../../../../../type-aliases/type-alias.FilterRelationsNode.md) | Second filter or filter relations |

## Returns

[`FilterRelations`](../../../../../interfaces/interface.FilterRelations.md)

Filter relations

## Example

Create filter relations for items that have a revenue greater than 100 and are in new condition
in the Sample ECommerce data model.
```ts
const revenueFilter = filterFactory.greaterThan(DM.Commerce.Revenue, 100);
const conditionFilter = filterFactory.equals(DM.Commerce.Condition, 'New');

const andFilerRelation = filterFactory.logic.and(revenueFilter, conditionFilter);
```

aterThan(DM.Commerce.Revenue, 100);
const conditionFilter = filterFactory.equals(DM.Commerce.Condition, 'New');

const andFilerRelation = filterFactory.logic.and(revenueFilter, conditionFilter);
```

# Function average

> **average**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates an average aggregation measure over the given attribute.

Both `average()` and `avg()` can be used interchangeably.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the average cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.average(DM.Commerce.Cost)
```

# Function avg

> **avg**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates an average aggregation measure over the given attribute.

Both `average()` and `avg()` can be used interchangeably.

`format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates an average aggregation measure over the given attribute.

Both `average()` and `avg()` can be used interchangeably.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the average cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.avg(DM.Commerce.Cost)
```

# Function between

> **between**(
  `attribute`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values within or exactly matching two specified numerical boundaries.

`valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values within or exactly matching two specified numerical boundaries.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `valueA` | `number` | Value to filter from |
| `valueB` | `number` | Value to filter to |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items from the Sample ECommerce data model where the cost is greater than or equal to 100 and less than or equal to 200.
```ts
filterFactory.between(DM.Commerce.Cost, 100, 200)
```

# Function betweenNotEqual

> **betweenNotEqual**(
  `attribute`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that isolates attribute values strictly within two specified numerical boundaries.

ibute`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that isolates attribute values strictly within two specified numerical boundaries.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `valueA` | `number` | Value to filter from |
| `valueB` | `number` | Value to filter to |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items from the Sample ECommerce data model where the cost is greater than 100 and less than 200.
```ts
filterFactory.betweenNotEqual(DM.Commerce.Cost, 100, 200)
```

# Function bottomRanking

> **bottomRanking**(
  `attribute`,
  `measure`,
  `count`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items that rank towards the bottom for a given measure.

nking**(
  `attribute`,
  `measure`,
  `count`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items that rank towards the bottom for a given measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to filter |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to filter by |
| `count` | `number` | Number of members to return |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for age ranges with the bottom 3 lowest total revenue in the Sample ECommerce data model.
```ts
filterFactory.bottomRanking(
  DM.Commerce.AgeRange,
  measureFactory.sum(DM.Commerce.Revenue),
  3
)
```

# Function boxWhiskerExtremumsValues

> **boxWhiskerExtremumsValues**(`target`): [`Measure`](../../../interfaces/interface.Measure.md)[]

Returns an array of extremum values for box whisker plot.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Attribute`](../../../interfaces/interface.Attribute.md) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing extremum values for box whisker plots.

ttribute.md) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing extremum values for box whisker plots.

# Function boxWhiskerIqrOutliers

> **boxWhiskerIqrOutliers**(`target`): [`Attribute`](../../../interfaces/interface.Attribute.md)

Returns an attribute representing outlier points based on interquartile range (IQR) calculations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Attribute`](../../../interfaces/interface.Attribute.md) | The target attribute for calculations. |

## Returns

[`Attribute`](../../../interfaces/interface.Attribute.md)

An attribute representing outliers for box whisker plots using IQR.

# Function boxWhiskerIqrValues

> **boxWhiskerIqrValues**(`target`): [`Measure`](../../../interfaces/interface.Measure.md)[]

Returns an array of values for box whisker plot using interquartile range (IQR) calculations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Attribute`](../../../interfaces/interface.Attribute.md) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing IQR values for box whisker plots.

ace.Attribute.md) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing IQR values for box whisker plots.

# Function boxWhiskerStdDevOutliers

> **boxWhiskerStdDevOutliers**(`target`): [`Attribute`](../../../interfaces/interface.Attribute.md)

Returns an attribute representing outlier points based on standard deviation calculations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Attribute`](../../../interfaces/interface.Attribute.md) | The target attribute for calculations. |

## Returns

[`Attribute`](../../../interfaces/interface.Attribute.md)

An attribute representing outliers for box whisker plots using standard deviation.

# Function boxWhiskerStdDevValues

> **boxWhiskerStdDevValues**(`target`): [`Measure`](../../../interfaces/interface.Measure.md)[]

Returns an array of values for box whisker plot using standard deviation calculations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Attribute`](../../../interfaces/interface.Attribute.md) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing standard deviation values for box whisker plots.

d) | The target attribute for calculations. |

## Returns

[`Measure`](../../../interfaces/interface.Measure.md)[]

An array of measures representing standard deviation values for box whisker plots.

# Function cascading

> **cascading**(`filters`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that contains a list of dependent/cascading filters,
where each filter depends on the results or state of the previous ones in the array.

Each filter in the array operates in the context of its predecessors, and the
cascading behavior ensures that all filters are applied sequentially.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`Filter`](../../../interfaces/interface.Filter.md)[] | Array of dependent filters |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

```ts
// Create a cascading filter for gender and age range
const cascadingFilter = filterFactory.cascading(
  [
    filterFactory.members(DM.Commerce.Gender, ['Male', 'Female']),
    filterFactory.members(DM.Commerce.AgeRange, ['0-18']),
  ],
  { disabled: true }, // Optional configuration to disable the cascading filter
);
```

embers(DM.Commerce.Gender, ['Male', 'Female']),
    filterFactory.members(DM.Commerce.AgeRange, ['0-18']),
  ],
  { disabled: true }, // Optional configuration to disable the cascading filter
);
```

# Function constant

> **constant**(`value`): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure from a numeric value.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to be returned as a measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Creates a calculated measure from a numeric value.
```ts
measureFactory.constant(42)
```

# Function contains

> **contains**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that contain a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

t attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories in the Sample ECommerce data model where the category name contains
'digital'. This filter matches categories like 'Digital Cameras' and 'MP3 & Digital Media Players'.
```ts
filterFactory.contains(DM.Category.Category, 'digital')
```

# Function contribution

> **contribution**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated contribution measure.

A contribution measure calculates the contribution, in percentage, of a measure towards the total.
Percentages are expressed as a number between 0 and 1 (e.g. 42% is `0.42`).

For example, using the Sample Ecommerce data model you can retrieve the total cost of products
categorized by age range. Using a contribution measure you can calculate how much each age range's
total cost contributes to the total cost across all age ranges. So, the total cost for the 35-44
age range is 23.64M, which is 22% of the 107.27M of all age ranges together. Therefore, the
contribution of the 35-44 age range is `.22`.

cost across all age ranges. So, the total cost for the 35-44
age range is 23.64M, which is 22% of the 107.27M of all age ranges together. Therefore, the
contribution of the 35-44 age range is `.22`.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the Contribution logic to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculates the percentage of the total cost across all categories for items in a category from the
Sample Ecommerce data model.
```ts
measureFactory.contribution(measureFactory.sum(DM.Commerce.Cost))
```

Contribution values from the Sample Ecommerce data model when categorizing by age range.
| AgeRange | Cost | Contribution |
| --- | --- | --- |
| 0-18 | 4.32M | 0.04 |
| 19-24 | 8.66M | 0.08 |
| 25-34 | 21.19M | 0.2 |
| 35-44 | 23.64M | 0.22 |
| 45-54 | 20.39M | 0.19 |
| 55-64 | 11.82M | 0.11 |
| 65+ | 17.26M | 0.16 |

# Function count

> **count**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a count aggregation measure over the given attribute.

To count distinct values in the given attribute, use [countDistinct](function.countDistinct.md).

/interfaces/interface.BaseMeasure.md)

Creates a count aggregation measure over the given attribute.

To count distinct values in the given attribute, use [countDistinct](function.countDistinct.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Counts the number of Commerce items from the Sample Ecommerce data model.
```ts
measureFactory.count(DM.Commerce.BrandID)
```

# Function countDistinct

> **countDistinct**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a count distinct aggregation measure over the given attribute.

To count all values in the given attribute, use [count](function.count.md).

e`](../../../interfaces/interface.BaseMeasure.md)

Creates a count distinct aggregation measure over the given attribute.

To count all values in the given attribute, use [count](function.count.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the number of distinct brands from the Sample Ecommerce data model.
```ts
measureFactory.countDistinct(DM.Brand.BrandID)
```

aces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the number of distinct brands from the Sample Ecommerce data model.
```ts
measureFactory.countDistinct(DM.Brand.BrandID)
```

# Function customFormula

> **customFormula**(
  `title`,
  `formula`,
  `context`,
  `format`?,
  `description`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure for a valid custom formula built from [base functions](/guides/sdk/reference/functions.html#measured-value-functions).

Use square brackets (`[]`) within the `formula` property to include dimensions, measures, or filters.
Each unique dimension, measure, or filter included in the `formula` must be defined using a property:value pair in the `context` parameter.

You can nest custom formulas by placing one inside the `formula` parameter of another.

Note: To use [shared formulas](https://docs.sisense.com/main/SisenseLinux/shared-formulas.htm)
from a Fusion instance, you must fetch them first using [useGetSharedFormula](../../../../sdk-ui/fusion-assets/function.useGetSharedFormula.md).

cs.sisense.com/main/SisenseLinux/shared-formulas.htm)
from a Fusion instance, you must fetch them first using [useGetSharedFormula](../../../../sdk-ui/fusion-assets/function.useGetSharedFormula.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | Title of the measure to be displayed in legend |
| `formula` | `string` | Formula to be used for the measure |
| `context` | [`CustomFormulaContext`](../../../interfaces/interface.CustomFormulaContext.md) | Formula context as a map of strings to attributes, measures, or filters |
| `format`? | `string` | Optional format string for the measure |
| `description`? | `string` | Optional description of the measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

he measure |
| `description`? | `string` | Optional description of the measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

An example of constructing a custom formulas using dimensions, measures, and nested custom formulas
from the Sample Ecommerce data model.
```ts
// Custom formula
const profitabilityRatio = measureFactory.customFormula(
  'Profitability Ratio',
  '([totalRevenue] - SUM([cost])) / [totalRevenue]',
  {
    totalRevenue: measureFactory.sum(DM.Commerce.Revenue),
    cost: DM.Commerce.Cost,
  },
);

// Nested custom formula
const profitabilityRatioRank = measureFactory.customFormula(
  'Profitability Ratio Rank',
  'RANK([profRatio], "ASC", "1224")',
  {
    profRatio: profitabilityRatio,
  },
);
```

Another example of constructing a custom formula using measures and filters
```ts
const totalCostWithFilter = measureFactory.customFormula(
  'Total Cost with Filter',
  '(SUM([cost]), [categoryFilter])',
  {
    cost: DM.Commerce.Cost,
    categoryFilter: filterFactory.members(DM.Category.Category, ['Apple Mac Desktops']),
  },
);
```

# Function dateFrom

> **dateFrom**(
  `level`,
  `from`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate date values starting from and including the given date and level.

> **dateFrom**(
  `level`,
  `from`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate date values starting from and including the given date and level.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `from` | `Date` \| `string` | Date or string representing the value to filter from |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in the Sample ECommerce data model where the date is not before the year 2010.
```ts
filterFactory.dateFrom(DM.Commerce.Date.Years, '2010-01')
```

# Function dateRange

> **dateRange**(
  `level`,
  `from`?,
  `to`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items between and including the given dates and level.

> **dateRange**(
  `level`,
  `from`?,
  `to`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items between and including the given dates and level.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `from`? | `Date` \| `string` | Date or string representing the start member to filter from |
| `to`? | `Date` \| `string` | Date or string representing the end member to filter to |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in the Sample ECommerce data model where the date is from the years 2009, 2010, or 2011.
```ts
filterFactory.dateRange(DM.Commerce.Date.Years, '2009-01', '2011-01')
```

## Example

Filter for items in the Sample ECommerce data model where the date is from the years 2009, 2010, or 2011.
```ts
filterFactory.dateRange(DM.Commerce.Date.Years, '2009-01', '2011-01')
```

# Function dateRelative

> **dateRelative**(
  `level`,
  `offset`,
  `count`,
  `anchor`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value within a specified range after a
given date and level.

Although the `offset` can be used to set a beginning date prior to the `anchor`, the filter range always
continues forward after the offset beginning date. So, using an `offset` of `-6` and a `count` of `18` when `level`
is a month level creates a range that begins 6 month before the `anchor` date and extends to 12 months after
the `anchor` date.

date. So, using an `offset` of `-6` and a `count` of `18` when `level`
is a month level creates a range that begins 6 month before the `anchor` date and extends to 12 months after
the `anchor` date.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `offset` | `number` | Number of levels to skip from the given `anchor` or the default of the current day.<br />Positive numbers skip forwards and negative numbers skip backwards (e.g. `-6` is 6 months backwards when `level` is a months level attribute) |
| `count` | `number` | Number of levels to include in the filter (e.g. `6` is 6 months when `level` is a months level attribute) |
| `anchor`? | `Date` \| `string` | Date to filter from, defaults to the current day |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

[`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in the Sample ECommerce data model where the date is in 2011 or the first half of 2012.
```ts
filterFactory.dateRelative(DM.Commerce.Date.Months, 0, 18, '2011-01'),
```

Filter for items in the Sample ECommerce data model where the date is in the second half of 2010 or in 2011.
```ts
filterFactory.dateRelative(DM.Commerce.Date.Months, -6, 18, '2011-01'),
```

Filter for items in the Sample ECommerce data model where the date is in the past 6 months.
```ts
filterFactory.dateRelative(DM.Commerce.Date.Months, -6, 6),
```

# Function dateRelativeFrom

> **dateRelativeFrom**(
  `level`,
  `offset`,
  `count`,
  `anchor`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value within a specified range after a
given date and level.

,
  `anchor`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value within a specified range after a
given date and level.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `offset` | `number` | Number of levels to skip from the given `anchor` or the default of the current day (e.g. `6` is 6 months when `level` is a months level attribute) |
| `count` | `number` | Number of levels to include in the filter (e.g. `6` is 6 months when `level` is a months level attribute) |
| `anchor`? | `Date` \| `string` | Date to filter from, defaults to the current day |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in the Sample ECommerce data model where the date is in 2011 or the first half of 2012.
```ts
filterFactory.dateRelativeFrom(DM.Commerce.Date.Months, 0, 18, '2011-01'),
```

Example

Filter for items in the Sample ECommerce data model where the date is in 2011 or the first half of 2012.
```ts
filterFactory.dateRelativeFrom(DM.Commerce.Date.Months, 0, 18, '2011-01'),
```

# Function dateRelativeTo

> **dateRelativeTo**(
  `level`,
  `offset`,
  `count`,
  `anchor`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value within a specified range before a
given date and level.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `offset` | `number` | Number of levels to skip from the given `anchor` or the default of the current day (e.g. `6` is 6 months when `level` is a months level attribute) |
| `count` | `number` | Number of levels to include in the filter (e.g. `6` is 6 months when `level` is a months level attribute) |
| `anchor`? | `Date` \| `string` | Date to filter to, defaults to the current day |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

[`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in the Sample ECommerce data model where the date is in the first half of 2010 or in 2011.
```ts
filterFactory.dateRelativeTo(DM.Commerce.Date.Months, 0, 18, '2011-12'),
```

# Function dateTo

> **dateTo**(
  `level`,
  `to`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items up until and including the given date and level.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LevelAttribute`](../../../interfaces/interface.LevelAttribute.md) | Date [LevelAttribute](../../../interfaces/interface.LevelAttribute.md) to filter on |
| `to` | `Date` \| `string` | Date or string representing the last member to filter to |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the date is from the year 2010 or earlier in the Sample ECommerce data model.
```ts
filterFactory.dateTo(DM.Commerce.Date.Years, '2010-01')
```

A filter instance

## Example

Filter for items where the date is from the year 2010 or earlier in the Sample ECommerce data model.
```ts
filterFactory.dateTo(DM.Commerce.Date.Years, '2010-01')
```

# Function diffPastMonth

> **diffPastMonth**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the difference between this month's data
and the data from the previous month for the given measure.

The date dimension will be dynamically taken from the query that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply difference to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the difference between this month's total cost and the previous month's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastMonth(measureFactory.sum(DM.Commerce.Cost))
```

the difference between this month's total cost and the previous month's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastMonth(measureFactory.sum(DM.Commerce.Cost))
```

# Function diffPastQuarter

> **diffPastQuarter**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the difference between this quarter's data
and the data from the previous quarter for the given measure.

The date dimension will be dynamically taken from the query that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply difference to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the difference between this quarter's total cost and the previous quarter's total cost
from the Sample Ecommerce data model.
```ts
measureFactory.diffPastQuarter(measureFactory.sum(DM.Commerce.Cost))
```

ifference between this quarter's total cost and the previous quarter's total cost
from the Sample Ecommerce data model.
```ts
measureFactory.diffPastQuarter(measureFactory.sum(DM.Commerce.Cost))
```

# Function diffPastWeek

> **diffPastWeek**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the difference between this week's data
and the data from the previous week for the given measure.

The date dimension will be dynamically taken from the query that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply difference to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the difference between this week's total cost and the previous week's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastWeek(measureFactory.sum(DM.Commerce.Cost))
```

ate the difference between this week's total cost and the previous week's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastWeek(measureFactory.sum(DM.Commerce.Cost))
```

# Function diffPastYear

> **diffPastYear**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the difference between this year's data
and the data from the previous year for the given measure.

The date dimension will be dynamically taken from the query that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply difference to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the difference between this year's total cost and the previous year's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastYear(measureFactory.sum(DM.Commerce.Cost))
```

ate the difference between this year's total cost and the previous year's total cost from
the Sample Ecommerce data model.
```ts
measureFactory.diffPastYear(measureFactory.sum(DM.Commerce.Cost))
```

# Function difference

> **difference**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the difference between this period's data
and the data from the previous period for the given measure.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply difference to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the difference between this period's total cost and the previous period's total cost
from the Sample Ecommerce data model.
```ts
measureFactory.difference(measureFactory.sum(DM.Commerce.Cost))
```

# Function divide

> **divide**(
  `value1`,
  `value2`,
  `name`?,
  `withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by dividing two given numbers or measures. Divides `value1` by `value2`.

`withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by dividing two given numbers or measures. Divides `value1` by `value2`.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value1` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | First value |
| `value2` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | Second value |
| `name`? | `string` | Optional name for the new measure |
| `withParentheses`? | `boolean` | Optional boolean flag whether to wrap the arithmetic operation with parentheses |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

```ts
const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureQuotient = measureFactory.divide(measure1, measure2);
```

# Function doesntContain

> **doesntContain**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that do not contain a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

es that do not contain a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories in the Sample ECommerce data model where the category name doesn't contain
'digital'. This filter matches categories not like 'Digital Cameras' and 'MP3 & Digital Media Players'.
```ts
filterFactory.contains(DM.Category.Category, 'digital')
```

# Function doesntEndWith

> **doesntEndWith**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that do not end with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

s that do not end with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries in the Sample ECommerce data model where the country name doesn't end with
'land'. This filter matches countries not like 'Iceland' and 'Ireland'.
```ts
filterFactory.doesntEndWith(DM.Country.Country, 'land')
```

# Function doesntEqual

> **doesntEqual**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that do not equal a specified string or number.

When filtering against a string:

 + Matching is case insensitive.
 + You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

er.

When filtering against a string:

 + Matching is case insensitive.
 + You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text or numeric attribute to filter on |
| `value` | `number` \| `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items not in new condition from the Sample ECommerce data model.
```ts
filterFactory.doesntEqual(DM.Commerce.Condition, 'New')
```

# Function doesntStartWith

> **doesntStartWith**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that do not start with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

that do not start with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries in the Sample ECommerce data model where the country name doesn't start with
'United'. This filter matches countries not like 'United States' and 'United Kingdom'.
```ts
filterFactory.doesntStartWith(DM.Country.Country, 'United')
```

# Function endsWith

> **endsWith**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that end with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

e values that end with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries in the Sample ECommerce data model where the country name ends with
'land'. This filter matches countries like 'Ireland' and 'Iceland'.
```ts
filterFactory.endsWith(DM.Country.Country, 'land')
```

# Function equals

> **equals**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that equal a specified string or number.

When filtering against a string:

 + Matching is case insensitive.
 + You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

er.

When filtering against a string:

 + Matching is case insensitive.
 + You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text or numeric attribute to filter on |
| `value` | `number` \| `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items in new condition from the Sample ECommerce data model.
```ts
filterFactory.equals(DM.Commerce.Condition, 'New')
```

# Function exclude

> **exclude**(
  `filter`,
  `input`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that excludes items matching the given filter
from all items or from items matching the optional input filter.

`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that excludes items matching the given filter
from all items or from items matching the optional input filter.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](../../../interfaces/interface.Filter.md) | Filter to exclude |
| `input`? | [`Filter`](../../../interfaces/interface.Filter.md) | Input filter to exclude from, on the same attribute. If not provided, the filter excludes from all items. |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter representing an exclusion of the given filter
from all attribute members or from the optional input filter

## Example

Filter for items where the country name does not contain the letter 'A'
from the Sample ECommerce data model.
```ts
filterFactory.exclude(filterFactory.contains(DM.Country.Country, 'A'))
```

Filter for items where the country name starts with the letter 'B' but does not contain the letter 'A'
from the Sample ECommerce data model. This filter will match countries like 'Belgium', but will not
match countries like 'Bermuda'.
```ts
filterFactory.exclude(
  filterFactory.contains(DM.Country.Country, 'A'),
  filterFactory.startsWith(DM.Country.Country, 'B')
)
```

like 'Belgium', but will not
match countries like 'Bermuda'.
```ts
filterFactory.exclude(
  filterFactory.contains(DM.Country.Country, 'A'),
  filterFactory.startsWith(DM.Country.Country, 'B')
)
```

# Function forecast

> **forecast**(
  `measure`,
  `name`?,
  `options`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that generates a forecast based on a specified measure employing
advanced autoML techniques.

This function offers flexible options allowing you to:
+ Let the function auto-select the best statistical model or explicitly choose a preferred model
+ Control the time period used for training the model
+ Set additional options to improve forecast accuracy by supplying expected lower and upper limits.

In addition to the forecast, upper and lower confidence intervals are returned
with the name of the new measure and a suffix of _upper and _lower
respectively.

Forecast requires a Sisense instance version of L2023.6.0 or greater.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the forecast logic to |
| `name`? | `string` | Name for the new measure |
| `options`? | [`ForecastFormulaOptions`](../../../type-aliases/type-alias.ForecastFormulaOptions.md) | Forecast options |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

../../../type-aliases/type-alias.ForecastFormulaOptions.md) | Forecast options |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate a forecast for total cost from the Sample Ecommerce data model from the Sample
Ecommerce data model.
```ts
measureFactory.forecast(
  measureFactory.sum(DM.Commerce.Cost),
  'Total Cost Forecast',
  {
    modelType: 'prophet',
    roundToInt: true,
  }
)
```

# Function greaterThan

> **greaterThan**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values strictly greater than a specified number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `value` | `number` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the cost is greater than 100 from the Sample ECommerce data model.
```ts
filterFactory.greaterThan(DM.Commerce.Cost, 100)
```

erface.Filter.md)

A filter instance

## Example

Filter for items where the cost is greater than 100 from the Sample ECommerce data model.
```ts
filterFactory.greaterThan(DM.Commerce.Cost, 100)
```

# Function greaterThanOrEqual

> **greaterThanOrEqual**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values greater than or equal to a specified number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `value` | `number` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the cost is greater than or equal to 100 from the Sample ECommerce data model.
```ts
filterFactory.greaterThanOrEqual(DM.Commerce.Cost, 100)
```

A filter instance

## Example

Filter for items where the cost is greater than or equal to 100 from the Sample ECommerce data model.
```ts
filterFactory.greaterThanOrEqual(DM.Commerce.Cost, 100)
```

# Function growth

> **growth**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates growth over a period of time.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

Growth is calculated using the following formula: `(currentPeriod – previousPeriod) / previousPeriod`.

For example, if this period the value is 12 and the previous period's value was 10, the growth for
this period is 20%, returned as '0.2' (calculation: `(12 – 10) / 10 = 0.2`).

If the previous period's value is greater than the current period, the growth will be negative.

For example, if this period the value is 80, and the previous period's was 100, the growth for
this period is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

| Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth in total cost this period in comparison to the previous period from the
Sample Ecommerce data model.
```ts
measureFactory.growth(measureFactory.sum(DM.Commerce.Cost))
```

# Function growthPastMonth

> **growthPastMonth**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the growth from the previous month to the current month.

The date dimension will be dynamically taken from the query that uses the returned measure.

Growth is calculated using the following formula: `(currentMonth – previousMonth) / previousMonth`.

For example, if this month the value is 12 and the previous month's value was 10, the growth for
this month is 20%, returned as '0.2' (calculation: `(12 – 10) / 10 = 0.2`).

If the previous month's value is greater than the current month, the growth will be negative.

For example, if this month the value is 80, and the previous month's was 100, the growth for
this month is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

rowth will be negative.

For example, if this month the value is 80, and the previous month's was 100, the growth for
this month is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth in total cost this month in comparison to the previous month from the Sample
Ecommerce data model.
```ts
measureFactory.growthPastMonth(measureFactory.sum(DM.Commerce.Cost))
```

Calculate the growth in total cost this month in comparison to the previous month from the Sample
Ecommerce data model.
```ts
measureFactory.growthPastMonth(measureFactory.sum(DM.Commerce.Cost))
```

# Function growthPastQuarter

> **growthPastQuarter**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the growth from the previous quarter to the current quarter.

The date dimension will be dynamically taken from the query that uses the returned measure.

Growth is calculated using the following formula: `(currentQuarter – previousQuarter) / previousQuarter`.

For example, if this quarter the value is 12 and the previous quarter's value was 10, the growth for
this quarter is 20%, returned as '0.2' (calculation: `(12 – 10) / 10 = 0.2`).

If the previous quarter's value is greater than the current quarter, the growth will be negative.

For example, if this quarter the value is 80, and the previous quarter's was 100, the growth for
this quarter is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

| Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth in total cost this quarter in comparison to the previous quarter from the
Sample Ecommerce data model.
```ts
measureFactory.growthPastQuarter(measureFactory.sum(DM.Commerce.Cost))
```

# Function growthPastWeek

> **growthPastWeek**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the growth from the previous week to the current week.

The date dimension will be dynamically taken from the query that uses the returned measure.

Growth is calculated using the following formula: `(currentWeek – previousWeek) / previousWeek`.

For example, if this week the value is 12 and the previous week's value was 10, the growth for
this week is 20%, returned as '0.2' (calculation: `(12 – 10) / 10 = 0.2`).

If the previous week's value is greater than the current week, the growth will be negative.

For example, if this week the value is 80, and the previous week's was 100, the growth for
this week is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

e growth will be negative.

For example, if this week the value is 80, and the previous week's was 100, the growth for
this week is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth in total cost this week in comparison to the previous week from the Sample
Ecommerce data model.
```ts
measureFactory.growthPastWeek(measureFactory.sum(DM.Commerce.Cost))
```

e

Calculate the growth in total cost this week in comparison to the previous week from the Sample
Ecommerce data model.
```ts
measureFactory.growthPastWeek(measureFactory.sum(DM.Commerce.Cost))
```

# Function growthPastYear

> **growthPastYear**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the growth from the previous year to the current year.

The date dimension will be dynamically taken from the query that uses the returned measure.

Growth is calculated using the following formula: `(currentYear – previousYear) / previousYear`.

For example, if this year the value is 12 and the previous year's value was 10, the growth for
this year is 20%, returned as '0.2' (calculation: `(12 – 10) / 10 = 0.2`).

If the previous year's value is greater than the current year, the growth will be negative.

For example, if this year the value is 80, and the previous year's was 100, the growth for
this year is -20%, returned as `-0.2` (calculation: `(80 – 100) / 100 = -0.2`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

| Measure to apply growth to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth in total cost this year in comparison to the previous year from the Sample
Ecommerce data model.
```ts
measureFactory.growthPastYear(measureFactory.sum(DM.Commerce.Cost))
```

# Function growthRate

> **growthRate**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates growth rate over a period of time.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

Growth rate is calculated using the following formula: `currentPeriod / previousPeriod`.

For example, if this period the value is 12 and the previous period's value was 10, the growth rate for
this period is 120%, returned as '1.2' (calculation: `12 / 10 = 1.2`).

If the previous period's value is greater than the current period, the growth rate will be less than one.

For example, if this period the value is 80, and the previous period's was 100, the growth for
this period is 80%, returned as `0.8` (calculation: `80 / 100 = .8`).

owth rate will be less than one.

For example, if this period the value is 80, and the previous period's was 100, the growth for
this period is 80%, returned as `0.8` (calculation: `80 / 100 = .8`).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the Growth rate |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the growth rate in total cost this period in comparison to the previous period from the
Sample Ecommerce data model.
```ts
measureFactory.growthRate(measureFactory.sum(DM.Commerce.Cost))
```

# Function intersection

> **intersection**(`filters`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter representing the intersection of multiple filters on the same attribute. The resulting
intersection filter filters on items that match all of the given filters.

To create 'and' filters using different attributes, use the [`and()`](../namespaces/namespace.logic/functions/function.and.md) function.

filter filters on items that match all of the given filters.

To create 'and' filters using different attributes, use the [`and()`](../namespaces/namespace.logic/functions/function.and.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`Filter`](../../../interfaces/interface.Filter.md)[] | Filters to intersect. The filters must all be on the same attribute. |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries that start with the letter 'A' **and** end with the letter 'A'
in the Sample ECommerce data model.
```ts
filterFactory.intersection([
  filterFactory.startsWith(DM.Country.Country, 'A'),
  filterFactory.endsWith(DM.Country.Country, 'A'),
])
```

# Function lessThan

> **lessThan**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values strictly less than a specified number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `value` | `number` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

c attribute to filter on |
| `value` | `number` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the cost is less than 100 from the Sample ECommerce data model.
```ts
filterFactory.lessThan(DM.Commerce.Cost, 100)
```

# Function lessThanOrEqual

> **lessThanOrEqual**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values less than or equal to a specified number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter on |
| `value` | `number` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the cost is less than or equal to 100 from the Sample ECommerce data model.
```ts
filterFactory.lessThanOrEqual(DM.Commerce.Cost, 100)
```

.md)

A filter instance

## Example

Filter for items where the cost is less than or equal to 100 from the Sample ECommerce data model.
```ts
filterFactory.lessThanOrEqual(DM.Commerce.Cost, 100)
```

# Function like

> **like**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that match a specified string pattern.

The pattern can include the following wildcard characters:

+ `_`: Matches a single character
+ `%`: Matches multiple characters

To search for a literal underscore (`_`) or percent symbol (`%`), use the backslash (``) escape
character.

Matching is case insensitive.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries from the Sample ECommerce data model where the country name starts with an
'A' and ends with an 'a'. This filter matches countries like 'Argentina' and 'Australia'.
```ts
filterFactory.like(DM.Country.Country, 'A%a')
```

rce data model where the country name starts with an
'A' and ends with an 'a'. This filter matches countries like 'Argentina' and 'Australia'.
```ts
filterFactory.like(DM.Country.Country, 'A%a')
```

# Function max

> **max**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a max aggregation measure over the given attribute.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the maximum cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.max(DM.Commerce.Cost)
```

# Function measureBetween

> **measureBetween**(
  `measure`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value between or equal to two given numbers.

eBetween**(
  `measure`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value between or equal to two given numbers.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `valueA` | `number` | Min value |
| `valueB` | `number` | Max value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue greater than or equal to 50 and less than
or equal to 100 in the Sample ECommerce data model.
```ts
filterFactory.measureBetween(
  measureFactory.average(DM.Commerce.Revenue),
  50,
  100
)
```

# Function measureBetweenNotEqual

> **measureBetweenNotEqual**(
  `measure`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value between but not equal to two given numbers.

ual**(
  `measure`,
  `valueA`,
  `valueB`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value between but not equal to two given numbers.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `valueA` | `number` | Min value |
| `valueB` | `number` | Max value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue greater than 50 and less than
100 in the Sample ECommerce data model.
```ts
filterFactory.measureBetweenNotEqual(
  measureFactory.average(DM.Commerce.Revenue),
  50,
  100
)
```

an average revenue greater than 50 and less than
100 in the Sample ECommerce data model.
```ts
filterFactory.measureBetweenNotEqual(
  measureFactory.average(DM.Commerce.Revenue),
  50,
  100
)
```

# Function measureBottomRanking

> **measureBottomRanking**(
  `measure`,
  `count`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that returns the bottom N values of the last dimension,
independently for each unique combination of all preceding dimensions.

This filter applies ranking within groups rather than globally. It shows the bottom N values
of the rightmost dimension for every unique combination of the other dimensions to its left.
The order of dimensions in your query determines the grouping behavior.

**Key Differences from [bottomRanking](function.bottomRanking.md):**
- `bottomRanking`: Filters a specific dimension globally (you specify which dimension)
- `measureBottomRanking`: Always filters the last/rightmost dimension, grouped by all others

**How it works:**
- With 1 dimension: Returns the bottom N values of that dimension
- With 2+ dimensions: Returns the bottom N values of the LAST dimension for each combination of the others

others

**How it works:**
- With 1 dimension: Returns the bottom N values of that dimension
- With 2+ dimensions: Returns the bottom N values of the LAST dimension for each combination of the others

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Base measure to rank by |
| `count` | `number` | Number of items to return per group (applies to the last dimension) |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

**Example 1: Single dimension (equivalent to bottomRanking) - Query with one dimension [Category]**
```ts
// Returns bottom 5 Categories by revenue
filterFactory.measureBottomRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```
Result: 5 categories with lowest revenue (e.g., Accessories, Cables, etc.)

This produces the same result as:
```ts
filterFactory.bottomRanking(
  DM.Commerce.Category,
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```

**Note:** With only one dimension, there are no groups to rank within,
so the behavior is identical to `bottomRanking`.

DM.Commerce.Category,
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```

**Note:** With only one dimension, there are no groups to rank within,
so the behavior is identical to `bottomRanking`.

## Example

**Example 2: Two dimensions - Query with dimensions [Gender, Category]**
```ts
// Returns bottom 2 Categories for each Gender
filterFactory.measureBottomRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  2
)
```
Result: 3 genders × 2 categories each = 6 rows
- Male: Bottom 2 categories by revenue
- Female: Bottom 2 categories by revenue
- Unspecified: Bottom 2 categories by revenue

## Example

**Example 3: Three dimensions - Query with dimensions [Gender, Age Range, Category]**
```ts
// Returns bottom 2 Categories for each (Gender, Age Range) combination
filterFactory.measureBottomRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  2
)
```
Result: 3 genders × 7 age ranges × 2 categories per combination = ~42 rows

# Function measureEquals

> **measureEquals**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value equal to a given number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `value` | `number` | Value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

aseMeasure.md) | Measure to filter by |
| `value` | `number` | Value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue equal 50 in the Sample ECommerce data model.
```ts
filterFactory.measureEquals(
  measureFactory.average(DM.Commerce.Revenue),
  50
)
```

# Function measureGreaterThan

> **measureGreaterThan**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value greater than to a given number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `value` | `number` | Min value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue greater than
to 50 in the Sample ECommerce data model.
```ts
filterFactory.measureGreaterThan(
  measureFactory.average(DM.Commerce.Revenue),
  50
)
```

r for categories that have an average revenue greater than
to 50 in the Sample ECommerce data model.
```ts
filterFactory.measureGreaterThan(
  measureFactory.average(DM.Commerce.Revenue),
  50
)
```

# Function measureGreaterThanOrEqual

> **measureGreaterThanOrEqual**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value greater than or equal to a given number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `value` | `number` | Min value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue greater than
or equal to 50 in the Sample ECommerce data model.
```ts
filterFactory.measureGreaterThanOrEqual(
  measureFactory.average(DM.Commerce.Revenue),
  50
)
```

# Function measureLessThan

> **measureLessThan**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value less than a given number.

asureLessThan

> **measureLessThan**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value less than a given number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `value` | `number` | Value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue less than 100 in the Sample ECommerce data model.
```ts
filterFactory.measureLessThan(
  measureFactory.average(DM.Commerce.Revenue),
  100
)
```

# Function measureLessThanOrEqual

> **measureLessThanOrEqual**(
  `measure`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate a measure value less than or equal to a given number.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Measure to filter by |
| `value` | `number` | Max value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

easure.md) | Measure to filter by |
| `value` | `number` | Max value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for categories that have an average revenue less than
or equal to 100 in the Sample ECommerce data model.
```ts
filterFactory.measureLessThanOrEqual(
  measureFactory.average(DM.Commerce.Revenue),
  100
)
```

# Function measureTopRanking

> **measureTopRanking**(
  `measure`,
  `count`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter that returns the top N values of the last dimension,
independently for each unique combination of all preceding dimensions.

This filter applies ranking within groups rather than globally. It shows the top N values
of the rightmost dimension for every unique combination of the other dimensions to its left.
The order of dimensions in your query determines the grouping behavior.

**Key Differences from [topRanking](function.topRanking.md):**
- `topRanking`: Filters a specific dimension globally (you specify which dimension)
- `measureTopRanking`: Always filters the last/rightmost dimension, grouped by all others

**How it works:**
- With 1 dimension: Returns the top N values of that dimension
- With 2+ dimensions: Returns the top N values of the LAST dimension for each combination of the others

y all others

**How it works:**
- With 1 dimension: Returns the top N values of that dimension
- With 2+ dimensions: Returns the top N values of the LAST dimension for each combination of the others

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md) | Base measure to rank by |
| `count` | `number` | Number of items to return per group (applies to the last dimension) |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

**Example 1: Single dimension (equivalent to topRanking) - Query with one dimension [Category]**
```ts
// Returns top 5 Categories by total revenue
filterFactory.measureTopRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```
Result: 5 categories (e.g., Cell Phones, Computers, TVs, etc.)

This produces the same result as:
```ts
filterFactory.topRanking(
  DM.Commerce.Category,
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```

**Note:** With only one dimension, there are no groups to rank within,
so the behavior is identical to `topRanking`.

ng(
  DM.Commerce.Category,
  measureFactory.sum(DM.Commerce.Revenue),
  5
)
```

**Note:** With only one dimension, there are no groups to rank within,
so the behavior is identical to `topRanking`.

## Example

**Example 2: Two dimensions - Query with dimensions [Gender, Category]**
```ts
// Returns top 2 Categories for each Gender
filterFactory.measureTopRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  2
)
```
Result: 3 genders × 2 categories each = 6 rows
- Male: Top 2 categories by revenue
- Female: Top 2 categories by revenue
- Unspecified: Top 2 categories by revenue

## Example

**Example 3: Three dimensions - Query with dimensions [Gender, Age Range, Category]**
```ts
// Returns top 2 Categories for each (Gender, Age Range) combination
filterFactory.measureTopRanking(
  measureFactory.sum(DM.Commerce.Revenue),
  2
)
```
Result: 3 genders × 7 age ranges × 2 categories per combination = ~42 rows

# Function measuredValue

> **measuredValue**(
  `measure`,
  `filters`,
  `name`?,
  `format`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a measured value with the given measure and set of filters.

A measured value only includes values from items that match the provided filters.

For example you can use a measured value to get a total cost for all items where the cost is greater than 100.

Note that the filters on the measured value override the filters on the query, chart, or table the
measured value is used in.

e to get a total cost for all items where the cost is greater than 100.

Note that the filters on the measured value override the filters on the query, chart, or table the
measured value is used in.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to filter |
| `filters` | [`Filter`](../../../interfaces/interface.Filter.md)[] | Filters to apply to the measure |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the total cost across all items in a category from the Sample Ecommerce data model,
where the cost is greater than 100. Additional filtering on the cost will not affect this measure.
```ts
measureFactory.measuredValue(
  measureFactory.sum(DM.Commerce.Cost),
  [filterFactory.greaterThan(DM.Commerce.Cost, 100)],
  'Cost Greater Than 100'
),
```

# Function median

> **median**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a median aggregation measure over the given attribute.

# Function median

> **median**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a median aggregation measure over the given attribute.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the median cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.median(DM.Commerce.Cost)
```

# Function members

> **members**(
  `attribute`,
  `members`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that match any of the specified strings.

Matching is case sensitive.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to filter on |
| `members` | `string`[] | Array of member values to filter by |
| `config`? | [`MembersFilterConfig`](../../../interfaces/interface.MembersFilterConfig.md) | Optional configuration for the filter |

| `members` | `string`[] | Array of member values to filter by |
| `config`? | [`MembersFilterConfig`](../../../interfaces/interface.MembersFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the condition is 'Used' or 'Refurbished'
from the Sample ECommerce data model.
```ts
filterFactory.members(DM.Commerce.Condition, ['Used', 'Refurbished'])
```

# Function min

> **min**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a min aggregation measure over the given attribute.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the minimum cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.min(DM.Commerce.Cost)
```

erface.BaseMeasure.md)

A measure instance

## Example

Calculate the minimum cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.min(DM.Commerce.Cost)
```

# Function monthToDateSum

> **monthToDateSum**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total starting from the beginning
of the month up to the current day or week.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the MTD Sum to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the running total of total cost from the Sample Ecommerce data model, starting from the
beginning of the month up to the current day or week.
```ts
measureFactory.monthToDateSum(measureFactory.sum(DM.Commerce.Cost))
```

# Function multiply

> **multiply**(
  `value1`,
  `value2`,
  `name`?,
  `withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by multiplying two given numbers or measures.

`,
  `value2`,
  `name`?,
  `withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by multiplying two given numbers or measures.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value1` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | First value |
| `value2` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | Second value |
| `name`? | `string` | Optional name for the new measure |
| `withParentheses`? | `boolean` | Optional boolean flag whether to wrap the arithmetic operation with parentheses |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

```ts
const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureProduct = measureFactory.multiply(measure1, measure2);
```

# Function numeric

> **numeric**(
  `attribute`,
  `operatorA`?,
  `valueA`?,
  `operatorB`?,
  `valueB`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a custom numeric filter that filters for given attribute values.

`operatorA`?,
  `valueA`?,
  `operatorB`?,
  `valueB`?,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a custom numeric filter that filters for given attribute values.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Numeric attribute to filter |
| `operatorA`? | `string` | First operator |
| `valueA`? | `number` | First value |
| `operatorB`? | `string` | Second operator |
| `valueB`? | `number` | Second value |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A custom numeric filter of the given attribute

## Example

Filter for items where the cost is greater than 100 and less than 200
from the Sample ECommerce data model.
```ts
filterFactory.numeric(
  DM.Commerce.Cost,
  NumericOperators.From,
  100,
  NumericOperators.To,
  200
)
```

# Function or <Badge type="beta" text="Beta" />

> **or**(`left`, `right`): [`FilterRelations`](../../../../../interfaces/interface.FilterRelations.md)

Creates an 'OR' filter relations

200
)
```

# Function or <Badge type="beta" text="Beta" />

> **or**(`left`, `right`): [`FilterRelations`](../../../../../interfaces/interface.FilterRelations.md)

Creates an 'OR' filter relations

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `left` | [`FilterRelationsNode`](../../../../../type-aliases/type-alias.FilterRelationsNode.md) | First filter or filter relations |
| `right` | [`FilterRelationsNode`](../../../../../type-aliases/type-alias.FilterRelationsNode.md) | Second filter or filter relations |

## Returns

[`FilterRelations`](../../../../../interfaces/interface.FilterRelations.md)

Filter relations

## Example

Create filter relations for items that have a revenue greater than 100 or are in new condition
in the Sample ECommerce data model.
```ts
const revenueFilter = filterFactory.greaterThan(DM.Commerce.Revenue, 100);
const conditionFilter = filterFactory.equals(DM.Commerce.Condition, 'New');

const orFilerRelation = filterFactory.logic.or(revenueFilter, conditionFilter);
```

# Function pastDay

> **pastDay**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the value for the previous day.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate total cost for the previous day from the Sample Ecommerce data model.
```ts
measureFactory.pastDay(measureFactory.sum(DM.Commerce.Cost))
```

# Function pastMonth

> **pastMonth**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the value for the same day or week in the previous month.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate total cost for the corresponding day or week one month ago from the Sample Ecommerce
data model.
```ts
measureFactory.pastMonth(measureFactory.sum(DM.Commerce.Cost))
```

tance

## Example

Calculate total cost for the corresponding day or week one month ago from the Sample Ecommerce
data model.
```ts
measureFactory.pastMonth(measureFactory.sum(DM.Commerce.Cost))
```

# Function pastQuarter

> **pastQuarter**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the value for the same day, week, or month in the previous quarter.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate total cost for the corresponding day, week, or month one quarter ago from the Sample
Ecommerce data model.
```ts
measureFactory.pastQuarter(measureFactory.sum(DM.Commerce.Cost))
```

# Function pastWeek

> **pastWeek**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the value for the same day in the previous week.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

asure that calculates the value for the same day in the previous week.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate total cost for the corresponding day one week ago from the Sample Ecommerce data model.
```ts
measureFactory.pastWeek(measureFactory.sum(DM.Commerce.Cost))
```

# Function pastYear

> **pastYear**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the value for the same day, week, month, or quarter in the previous year.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

asure to apply past value to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate total cost for the corresponding day, week, month, or quarter one year ago from the
Sample Ecommerce data model.
```ts
measureFactory.pastYear(measureFactory.sum(DM.Commerce.Cost))
```

# Function quarterToDateSum

> **quarterToDateSum**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total starting from the beginning
of the quarter up to the current day, week, or month.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the QTD Sum to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the running total of total cost from the Sample Ecommerce data model, starting from the
beginning of the quarter up to the current day, week, or month.
```ts
measureFactory.quarterToDateSum(measureFactory.sum(DM.Commerce.Cost))
```

rom the Sample Ecommerce data model, starting from the
beginning of the quarter up to the current day, week, or month.
```ts
measureFactory.quarterToDateSum(measureFactory.sum(DM.Commerce.Cost))
```

# Function rank

> **rank**(
  `measure`,
  `name`?,
  `sort`?,
  `rankType`?,
  `groupBy`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the rank of a value in a list of values.

This function includes options that allow you do customize the ranking order and how to handle
equally ranked items.

The order options are:
+ `'DESC'` (default): Descending, meaning the largest number is ranked first.
+ `'ASC'`: Ascending, meaning the smallest number is ranked first.

The rank type options are:
+ `'1224'`: Standard competition, meaning items that rank equally receive the same ranking number,
  and then a gap is left after the equally ranked items in the ranking numbers.
+ `'1334'`: Modified competition ranking, meaning items that rank equally receive the same ranking number,
  and a gap is left before the equally ranked items in the ranking numbers.
+ `'1223'`: Dense ranking, meaning items that rank equally receive the same ranking number,
  and the next items receive the immediately following ranking number.
+ `'1234'`: Ordinal ranking, meaning all items receive distinct ordinal numbers,
  including items that rank equally. The assignment of distinct ordinal numbers for equal-ranking items is arbitrary.

+ `'1234'`: Ordinal ranking, meaning all items receive distinct ordinal numbers,
  including items that rank equally. The assignment of distinct ordinal numbers for equal-ranking items is arbitrary.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the ranking logic to |
| `name`? | `string` | Name for the new measure |
| `sort`? | `string` | Sorting for ranking. By default sort order is descending, where the largest number is ranked first. |
| `rankType`? | `string` | How to handle equally ranked items. By default the type is standard competition ranking. |
| `groupBy`? | [`Attribute`](../../../interfaces/interface.Attribute.md)[] | Rank partition attributes |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

te`](../../../interfaces/interface.Attribute.md)[] | Rank partition attributes |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the rank of the total cost per category, sorted with the smallest cost ranked first,
and ranking ties are handled using the ordinal ranking type from the Sample Ecommerce data model.
```ts
measureFactory.rank(
  measureFactory.sum(DM.Commerce.Cost),
  'Cost Rank',
  measureFactory.RankingSortTypes.Ascending,
  measureFactory.RankingTypes.Ordinal
)
```

Ranking values from the Sample Ecommerce data model when categorizing by age range using the above ranking.
| AgeRange | Cost | Cost Rank |
| --- | --- | --- |
| 0-18 | 4.32M | 1 |
| 19-24 | 8.66M | 2 |
| 25-34 | 21.19M | 6 |
| 35-44 | 23.64M | 7 |
| 45-54 | 20.39M | 5 |
| 55-64 | 11.82M | 3 |
| 65+ | 17.26M | 4 |

# Function runningSum

> **runningSum**(
  `measure`,
  `_continuous`?,
  `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total of a given measure.

The running sum is calculated using the current sort order of the query it's used in.

rface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total of a given measure.

The running sum is calculated using the current sort order of the query it's used in.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the running sum to |
| `_continuous`? | `boolean` | Boolean flag whether to accumulate the sum continuously<br />when there are two or more dimensions. The default value is false. |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the running sum of the total cost from the Sample Ecommerce data model across all categories.
```ts
measureFactory.runningSum(measureFactory.sum(DM.Commerce.Cost)),
```

Running sum values from the Sample Ecommerce data model when categorizing by age range.
| AgeRange | Cost | Running Cost |
| --- | --- | --- |
| 0-18 | 4.32M | 4.32M |
| 19-24 | 8.66M | 12.98M |
| 25-34 | 21.19M | 34.16M |
| 35-44 | 23.64M | 57.8M |
| 45-54 | 20.39M | 78.19M |
| 55-64 | 11.82M | 90.01M |
| 65+ | 17.26M | 107.27M |

| --- |
| 0-18 | 4.32M | 4.32M |
| 19-24 | 8.66M | 12.98M |
| 25-34 | 21.19M | 34.16M |
| 35-44 | 23.64M | 57.8M |
| 45-54 | 20.39M | 78.19M |
| 55-64 | 11.82M | 90.01M |
| 65+ | 17.26M | 107.27M |

# Function startsWith

> **startsWith**(
  `attribute`,
  `value`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate attribute values that start with a specified string.

Matching is case insensitive.

You can optionally use wildcard characters for pattern matching, as described in the
[`like()`](function.like.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Text attribute to filter on |
| `value` | `string` | Value to filter by |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries in the Sample ECommerce data model where the country name starts with
'United'. This filter matches countries like 'United States' and 'United Kingdom'.
```ts
filterFactory.startsWith(DM.Country.Country, 'United')
```

erce data model where the country name starts with
'United'. This filter matches countries like 'United States' and 'United Kingdom'.
```ts
filterFactory.startsWith(DM.Country.Country, 'United')
```

# Function subtract

> **subtract**(
  `value1`,
  `value2`,
  `name`?,
  `withParentheses`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure by subtracting two given numbers or measures. Subtracts `value2` from `value1`.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value1` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | First value |
| `value2` | [`Measure`](../../../interfaces/interface.Measure.md) \| `number` | Second value |
| `name`? | `string` | Optional name for the new measure |
| `withParentheses`? | `boolean` | Optional boolean flag whether to wrap the arithmetic operation with parentheses |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

```ts
const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureDifference = measureFactory.subtract(measure1, measure2);
```

const measure1 = measureFactory.sum(DM.Dimension.Attribute1);
const measure2 = measureFactory.sum(DM.Dimension.Attribute2);
const measureDifference = measureFactory.subtract(measure1, measure2);
```

# Function sum

> **sum**(
  `attribute`,
  `name`?,
  `format`?): [`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

Creates a sum aggregation measure over the given attribute.

To create a running sum, use [runningSum](function.runningSum.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to aggregate |
| `name`? | `string` | Optional name for the new measure |
| `format`? | `string` | Optional numeric formatting to apply using a Numeral.js format string. Can only be used for explicit queries. Cannot be used in charts, tables, etc. |

## Returns

[`BaseMeasure`](../../../interfaces/interface.BaseMeasure.md)

A measure instance

## Example

Calculate the total cost across all items in a category from the Sample Ecommerce data model.
```ts
measureFactory.sum(DM.Commerce.Cost)
```

# Function thisMonth

> **thisMonth**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value in the current calendar month.

thisMonth

> **thisMonth**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value in the current calendar month.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dimension` | [`DateDimension`](../../../interfaces/interface.DateDimension.md) | Date dimension to filter |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the date is in the current calendar month in the Sample ECommerce data model.
```ts
filterFactory.thisMonth(DM.Commerce.Date)
```

# Function thisQuarter

> **thisQuarter**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value in the current quarter.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dimension` | [`DateDimension`](../../../interfaces/interface.DateDimension.md) | Date dimension to filter |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

[`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the date is in the current quarter in the Sample ECommerce data model.
```ts
filterFactory.thisQuarter(DM.Commerce.Date)
```

# Function thisYear

> **thisYear**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value in the current calendar year.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dimension` | [`DateDimension`](../../../interfaces/interface.DateDimension.md) | Date dimension to filter |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the date is in the current calendar year in the Sample ECommerce data model.
```ts
filterFactory.thisYear(DM.Commerce.Date)
```

# Function today

> **today**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value of the current date.

e)
```

# Function today

> **today**(`dimension`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items with a date dimension value of the current date.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dimension` | [`DateDimension`](../../../interfaces/interface.DateDimension.md) | date dimension to filter |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for items where the date is today in the Sample ECommerce data model.
```ts
filterFactory.today(DM.Commerce.Date)
```

# Function topRanking

> **topRanking**(
  `attribute`,
  `measure`,
  `count`,
  `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter to isolate items that rank towards the top for a given measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attribute` | [`Attribute`](../../../interfaces/interface.Attribute.md) | Attribute to filter |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to filter by |
| `count` | `number` | Number of members to return |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

re to filter by |
| `count` | `number` | Number of members to return |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for age ranges with the top 3 highest total revenue in the Sample ECommerce data model.
```ts
filterFactory.topRanking(
  DM.Commerce.AgeRange,
  measureFactory.sum(DM.Commerce.Revenue),
  3
)
```

# Function trend

> **trend**(
  `measure`,
  `name`?,
  `options`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that computes a specified trend type for a given measure.

The trend types include linear (the default), logarithmic, advanced smoothing, and local estimates.
You can also opt to automatically identify and ignore anomalous values in the series.

Trend requires a Sisense instance version of L2023.6.0 or greater.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the trend logic to |
| `name`? | `string` | Name for the new measure |
| `options`? | [`TrendFormulaOptions`](../../../type-aliases/type-alias.TrendFormulaOptions.md) | Trend options |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

ons`](../../../type-aliases/type-alias.TrendFormulaOptions.md) | Trend options |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the trend in total cost from the Sample Ecommerce data model.
```ts
measureFactory.trend(
  measureFactory.sum(DM.Commerce.Cost),
  'Total Cost Trend',
  {
    modelType: 'advancedSmoothing',
    ignoreAnomalies: true,
  }
)
```

# Function union

> **union**(`filters`, `config`?): [`Filter`](../../../interfaces/interface.Filter.md)

Creates a filter representing the union of multiple filters on the same attribute. The resulting
union filter filters on items that match any of the given filters.

To create 'or' filters using different attributes, use the [`or()`](../namespaces/namespace.logic/functions/function.and.md) function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`Filter`](../../../interfaces/interface.Filter.md)[] | Filters to union. The filters must all be on the same attribute. |
| `config`? | [`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

[`BaseFilterConfig`](../../../interfaces/interface.BaseFilterConfig.md) | Optional configuration for the filter |

## Returns

[`Filter`](../../../interfaces/interface.Filter.md)

A filter instance

## Example

Filter for countries that start with the letter 'A' **or** end with the letter 'A'
in the Sample ECommerce data model.
```ts
filterFactory.union([
  filterFactory.startsWith(DM.Country.Country, 'A'),
  filterFactory.endsWith(DM.Country.Country, 'A'),
])
```

# Function weekToDateSum

> **weekToDateSum**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total starting from the beginning
of the week up to the current day.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the WTD Sum to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the running total of total cost from the Sample Ecommerce data model, starting from the
beginning of the week up to the current day.
```ts
measureFactory.weekToDateSum(measureFactory.sum(DM.Commerce.Cost))
```

total of total cost from the Sample Ecommerce data model, starting from the
beginning of the week up to the current day.
```ts
measureFactory.weekToDateSum(measureFactory.sum(DM.Commerce.Cost))
```

# Function yearToDateSum

> **yearToDateSum**(`measure`, `name`?): [`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

Creates a calculated measure that calculates the running total starting from the beginning
of the year up to the current day, week, month, or quarter.

The time resolution is determined by the minimum date level of the date dimension in the query
that uses the returned measure.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measure` | [`Measure`](../../../interfaces/interface.Measure.md) | Measure to apply the YTD Sum to |
| `name`? | `string` | Name for the new measure |

## Returns

[`CalculatedMeasure`](../../../interfaces/interface.CalculatedMeasure.md)

A calculated measure instance

## Example

Calculate the running total of total cost from the Sample Ecommerce data model, starting from the
beginning of the year up to the current day, week, month, or quarter.
```ts
measureFactory.yearToDateSum(measureFactory.sum(DM.Commerce.Cost))
```


## Interfaces

merce data model, starting from the
beginning of the year up to the current day, week, month, or quarter.
```ts
measureFactory.yearToDateSum(measureFactory.sum(DM.Commerce.Cost))
```


## Interfaces

# Interfaces

- [Attribute](interface.Attribute.md)
- [BaseFilterConfig](interface.BaseFilterConfig.md)
- [BaseMeasure](interface.BaseMeasure.md)
- [CalculatedMeasure](interface.CalculatedMeasure.md)
- [CalculatedMeasureColumn](interface.CalculatedMeasureColumn.md)
- [Cell](interface.Cell.md)
- [Column](interface.Column.md)
- [CustomFormulaContext](interface.CustomFormulaContext.md)
- [Data](interface.Data.md)
- [DateDimension](interface.DateDimension.md)
- [Dimension](interface.Dimension.md)
- [Filter](interface.Filter.md)
- [FilterRelations](interface.FilterRelations.md)
- [LevelAttribute](interface.LevelAttribute.md)
- [Measure](interface.Measure.md)
- [MeasureColumn](interface.MeasureColumn.md)
- [MeasureContext](interface.MeasureContext.md)
- [MembersFilterConfig](interface.MembersFilterConfig.md)
- [PivotAttribute](interface.PivotAttribute.md)
- [PivotMeasure](interface.PivotMeasure.md)
- [PivotQueryResultData](interface.PivotQueryResultData.md)
- [QueryResultData](interface.QueryResultData.md)

# Interface Attribute

Common interface of an attribute as in a dimensional model.

An attribute is an extension of a [Column](interface.Column.md) in a generic [data set](interface.Data.md).

## Methods

erface Attribute

Common interface of an attribute as in a dimensional model.

An attribute is an extension of a [Column](interface.Column.md) in a generic [data set](interface.Data.md).

## Methods

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

The Sort definition

***

### sort

> **sort**(`sort`): [`Attribute`](interface.Attribute.md)

Sorts the attribute by the given definition

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

### expression

> **`readonly`** **expression**: `string`

Expression representing the element in a [JAQL query](https://developer.sisense.com/guides/querying/useJaql/).
It is typically populated automatically in the data model generated by the data model generator.

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface BaseFilterConfig

Base filter configuration

## Properties

enerator.

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface BaseFilterConfig

Base filter configuration

## Properties

### Base Configurations

#### disabled

> **disabled**?: `boolean`

Boolean flag whether the filter is disabled

If not specified, the default value is `false`.

***

#### guid

> **`readonly`** **guid**?: `string`

Optional filter identifier

If not provided, a unique identifier will be generated.

***

#### locked

> **locked**?: `boolean`

Boolean flag whether the filter is locked

If not specified, the default value is `false`.

# Interface BaseMeasure

Common interface of a Base measure, which is aggregation over [Attribute](interface.Attribute.md).

## Methods

### format

> **format**(`format`): [`Measure`](interface.Measure.md)

Formats the measure according to the given `format` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`Measure`](interface.Measure.md)

A formatted instance of this measure

***

### getFormat

> **getFormat**(): `string` \| `undefined`

Gets the formatting string of this measure.

#### Returns

`string` \| `undefined`

Formatting string

***

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition of this measure.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

***

string

***

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition of this measure.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

***

### sort

> **sort**(`sort`): [`Measure`](interface.Measure.md)

Sorts the measure by the given `sort` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Measure`](interface.Measure.md)

A sorted instance of measure

## Properties

### aggregation

> **`readonly`** **aggregation**: `string`

Aggregation type

***

### attribute

> **`readonly`** **attribute**: [`Attribute`](interface.Attribute.md)

Aggregated attribute

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface CalculatedMeasure

Interface for a Calculated Measure, extending [Measure](interface.Measure.md).

## See

[Using the JAQL to Add A Formula](https://developer.sisense.com/guides/querying/useJaql/#step-7-adding-a-formula)

## Methods

### format

> **format**(`format`): [`Measure`](interface.Measure.md)

Formats the measure according to the given `format` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`Measure`](interface.Measure.md)

A formatted instance of this measure

***

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`Measure`](interface.Measure.md)

A formatted instance of this measure

***

### getFormat

> **getFormat**(): `string` \| `undefined`

Gets the formatting string of this measure.

#### Returns

`string` \| `undefined`

Formatting string

***

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition of this measure.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

***

### sort

> **sort**(`sort`): [`Measure`](interface.Measure.md)

Sorts the measure by the given `sort` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Measure`](interface.Measure.md)

A sorted instance of measure

## Properties

### context

> **context**: [`MeasureContext`](interface.MeasureContext.md)

Context of the calculated measure

***

### expression

> **expression**: `string`

Expression of the calculated measure

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface CalculatedMeasureColumn

Calculated Aggregate function applied to a [Column](interface.Column.md)(s).
When associated with a dimensional model, a Calculated Measure Column is
equivalent to a [CalculatedMeasure](interface.CalculatedMeasure.md).

function applied to a [Column](interface.Column.md)(s).
When associated with a dimensional model, a Calculated Measure Column is
equivalent to a [CalculatedMeasure](interface.CalculatedMeasure.md).

## Properties

### context

> **context**: [`MeasureContext`](interface.MeasureContext.md)

Measure context

***

### expression

> **expression**: `string`

Expression representing the element in a [JAQL query](https://developer.sisense.com/guides/querying/useJaql/).

***

### name

> **name**: `string`

Column name

***

### title

> **title**?: `string`

Optional title for the column after aggregation.
If not specified, the column `name` will be used.

***

### type

> **type**: `string`

Measure type

# Interface Cell

Data cell, which is a storage unit in a [user-provided data set](interface.Data.md)
or [query result data set](interface.QueryResultData.md).

## Properties

### blur

> **blur**?: `boolean`

Boolean flag representing three states that can be visualized in a chart:
- `true`: the data value is in blur state
- `false`: the data value is in highlight state
- if not specified, the data value is neither in highlight nor blur state

***

### color

> **color**?: `string`

Color associated with the data value when visualized in a chart

***

### data

> **data**: `any`

Cell data value

***

### text

> **text**?: `string`

Display text

color

> **color**?: `string`

Color associated with the data value when visualized in a chart

***

### data

> **data**: `any`

Cell data value

***

### text

> **text**?: `string`

Display text

# Interface Column

Column (or field) in a data set.
When associated with a dimensional model, a column is equivalent to an [Attribute](interface.Attribute.md).

## Properties

### name

> **name**: `string`

Column name

***

### type

> **type**: `string`

Column type

# Interface CustomFormulaContext

Context for a custom formula, as defined by `measureFactory.customFormula()`

## Indexable

 \[`key`: `string`\]: [`Attribute`](interface.Attribute.md) \| [`Filter`](interface.Filter.md) \| [`Measure`](interface.Measure.md)

# Interface Data

Data set, which is made up of an array of [columns](interface.Column.md)
and a two-dimensional array of data [cells](interface.Cell.md).

This structure can be used for user-provided data in [Chart components](../../sdk-ui/interfaces/interface.ChartProps.md).

## Properties

### columns

> **columns**: [`Column`](interface.Column.md)[]

Array of [columns](interface.Column.md)

***

### rows

> **rows**: ([`Cell`](interface.Cell.md) \| `number` \| `string`)[][]

Two-dimensional array of data cells, each of which is either a string, number, or type [Cell](interface.Cell.md)

# Interface DateDimension

Date Dimension extending [Dimension](interface.Dimension.md).

## Methods

array of data cells, each of which is either a string, number, or type [Cell](interface.Cell.md)

# Interface DateDimension

Date Dimension extending [Dimension](interface.Dimension.md).

## Methods

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

The Sort definition

***

### sort

> **sort**(`sort`): [`Attribute`](interface.Attribute.md)

Sorts the attribute by the given definition

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

### AggHours

> **`readonly`** **AggHours**: [`LevelAttribute`](interface.LevelAttribute.md)

Aggregated Hours level (for Live Models)

***

### AggMinutesRoundTo1

> **`readonly`** **AggMinutesRoundTo1**: [`LevelAttribute`](interface.LevelAttribute.md)

Aggregated Minutes (every minute) level

***

### AggMinutesRoundTo15

> **`readonly`** **AggMinutesRoundTo15**: [`LevelAttribute`](interface.LevelAttribute.md)

Aggregated Minutes (round to 15) level

***

### AggMinutesRoundTo30

> **`readonly`** **AggMinutesRoundTo30**: [`LevelAttribute`](interface.LevelAttribute.md)

Aggregated Minutes (round to 30) level

***

### Days

> **`readonly`** **Days**: [`LevelAttribute`](interface.LevelAttribute.md)

Days level

***

*: [`LevelAttribute`](interface.LevelAttribute.md)

Aggregated Minutes (round to 30) level

***

### Days

> **`readonly`** **Days**: [`LevelAttribute`](interface.LevelAttribute.md)

Days level

***

### expression

> **`readonly`** **expression**: `string`

Expression representing the element in a [JAQL query](https://developer.sisense.com/guides/querying/useJaql/).
It is typically populated automatically in the data model generated by the data model generator.

***

### Hours

> **`readonly`** **Hours**: [`LevelAttribute`](interface.LevelAttribute.md)

Hours level (for Live Models)

***

### Minutes

> **`readonly`** **Minutes**: [`LevelAttribute`](interface.LevelAttribute.md)

Minutes level (for Live Models)

***

### MinutesRoundTo15

> **`readonly`** **MinutesRoundTo15**: [`LevelAttribute`](interface.LevelAttribute.md)

Minutes (round to 15) level (for Live Models)

***

### MinutesRoundTo30

> **`readonly`** **MinutesRoundTo30**: [`LevelAttribute`](interface.LevelAttribute.md)

Minutes (round to 30) level (for Live Models)

***

### Months

> **`readonly`** **Months**: [`LevelAttribute`](interface.LevelAttribute.md)

Months level

***

### name

> **name**: `string`

Element name

***

### Quarters

> **`readonly`** **Quarters**: [`LevelAttribute`](interface.LevelAttribute.md)

Quarters level

***

### Seconds

> **`readonly`** **Seconds**: [`LevelAttribute`](interface.LevelAttribute.md)

Seconds level (for Live Models)

***

[`LevelAttribute`](interface.LevelAttribute.md)

Quarters level

***

### Seconds

> **`readonly`** **Seconds**: [`LevelAttribute`](interface.LevelAttribute.md)

Seconds level (for Live Models)

***

### type

> **`readonly`** **type**: `string`

Element type

***

### Weeks

> **`readonly`** **Weeks**: [`LevelAttribute`](interface.LevelAttribute.md)

Weeks level

***

### Years

> **`readonly`** **Years**: [`LevelAttribute`](interface.LevelAttribute.md)

Years level

# Interface Dimension

Common interface of a Dimension, which serves as a container for [Attribute](interface.Attribute.md)(s)
and other [DateDimension](interface.DateDimension.md)(s).

## Methods

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

The Sort definition

***

### sort

> **sort**(`sort`): [`Attribute`](interface.Attribute.md)

Sorts the attribute by the given definition

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

----- | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

### expression

> **`readonly`** **expression**: `string`

Expression representing the element in a [JAQL query](https://developer.sisense.com/guides/querying/useJaql/).
It is typically populated automatically in the data model generated by the data model generator.

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface Filter

Base interface for filter. See [filterFactory](../factories/namespace.filterFactory/index.md) for how to create filters.

## Properties

### filterType

> **`readonly`** **filterType**: `string`

Filter type

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface FilterRelations

Representation of filter logical relations (AND/OR)

## Properties

### left

> **left**: [`FilterRelationsNode`](../type-aliases/type-alias.FilterRelationsNode.md)

***

### operator

> **operator**: `"AND"` \| `"OR"`

***

### right

> **right**: [`FilterRelationsNode`](../type-aliases/type-alias.FilterRelationsNode.md)

# Interface LevelAttribute

Date Level Attribute associated with a granularity - for example, Years, Quarters, Months, Days.

## Methods

onsNode`](../type-aliases/type-alias.FilterRelationsNode.md)

# Interface LevelAttribute

Date Level Attribute associated with a granularity - for example, Years, Quarters, Months, Days.

## Methods

### format

> **format**(`format`): [`LevelAttribute`](interface.LevelAttribute.md)

Gets a formatted instance with the given definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`LevelAttribute`](interface.LevelAttribute.md)

A formatted instance of this level attribute

***

### getFormat

> **getFormat**(): `string` \| `undefined`

String formatting of this instance.

#### Returns

`string` \| `undefined`

string formatting

***

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

The Sort definition

***

### sort

> **sort**(`sort`): [`Attribute`](interface.Attribute.md)

Sorts the attribute by the given definition

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

----- | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Attribute`](interface.Attribute.md)

A sorted instance of the attribute

## Properties

### expression

> **`readonly`** **expression**: `string`

Expression representing the element in a [JAQL query](https://developer.sisense.com/guides/querying/useJaql/).
It is typically populated automatically in the data model generated by the data model generator.

***

### granularity

> **`readonly`** **granularity**: `string`

Granularity of the level. See supported granularity values at [DateLevels](../variables/variable.DateLevels.md).

***

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface Measure

Base interface for measure, which is typically numeric aggregation over [Attribute](interface.Attribute.md)(s).
See [measureFactory](../factories/namespace.measureFactory/index.md) for how to create measures.

## Methods

### format

> **format**(`format`): [`Measure`](interface.Measure.md)

Formats the measure according to the given `format` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`Measure`](interface.Measure.md)

A formatted instance of this measure

***

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format string |

#### Returns

[`Measure`](interface.Measure.md)

A formatted instance of this measure

***

### getFormat

> **getFormat**(): `string` \| `undefined`

Gets the formatting string of this measure.

#### Returns

`string` \| `undefined`

Formatting string

***

### getSort

> **getSort**(): [`Sort`](../enumerations/enumeration.Sort.md)

Gets the sort definition of this measure.

#### Returns

[`Sort`](../enumerations/enumeration.Sort.md)

***

### sort

> **sort**(`sort`): [`Measure`](interface.Measure.md)

Sorts the measure by the given `sort` definition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `sort` | [`Sort`](../enumerations/enumeration.Sort.md) | Sort definition |

#### Returns

[`Measure`](interface.Measure.md)

A sorted instance of measure

## Properties

### name

> **name**: `string`

Element name

***

### type

> **`readonly`** **type**: `string`

Element type

# Interface MeasureColumn

Aggregate function applied to a [Column](interface.Column.md).
When associated with a dimensional model, a Measure Column is equivalent to a [Measure](interface.Measure.md).

## Properties

### aggregation

> **aggregation**?: `string`

Aggregate function -- for example, `sum`, `count`.
If not specified, default value, `sum`, will be used.

***

### name

> **name**: `string`

Column name

***

egation

> **aggregation**?: `string`

Aggregate function -- for example, `sum`, `count`.
If not specified, default value, `sum`, will be used.

***

### name

> **name**: `string`

Column name

***

### title

> **title**?: `string`

Optional title for the column after aggregation.
If not specified, the column `name` will be used.

# Interface MeasureContext

Context of a calculated measure.

## Indexable

 \[`propName`: `string`\]: `any`

# Interface MembersFilterConfig

Configurations for members filter

## Properties

### Base Configurations

#### disabled

> **disabled**?: `boolean`

Boolean flag whether the filter is disabled

If not specified, the default value is `false`.

***

#### guid

> **`readonly`** **guid**?: `string`

Optional filter identifier

If not provided, a unique identifier will be generated.

***

#### locked

> **locked**?: `boolean`

Boolean flag whether the filter is locked

If not specified, the default value is `false`.

ifier

If not provided, a unique identifier will be generated.

***

#### locked

> **locked**?: `boolean`

Boolean flag whether the filter is locked

If not specified, the default value is `false`.

### Extended Configurations

#### deactivatedMembers

> **deactivatedMembers**?: `string`[]

Optional list of members to be shown as deactivated in the `MemberFilterTile` component.

This list should not contain members that are already included in the filter.

***

#### enableMultiSelection

> **enableMultiSelection**?: `boolean`

Boolean flag whether selection of multiple members is enabled

If not specified, the default value is `true`.

***

#### excludeMembers

> **excludeMembers**?: `boolean`

Boolean flag whether selected members are excluded or included in the filter

If not specified, the default value is false.

### Other

#### backgroundFilter

> **backgroundFilter**?: [`Filter`](interface.Filter.md)

Optional filter to be applied in the background

# Interface PivotAttribute

Wrapped attribute with additional options for pivot table

## Properties

### attribute

> **attribute**: [`Attribute`](interface.Attribute.md)

***

### includeSubTotals

> **includeSubTotals**?: `boolean`

***

### name

> **name**?: `string`

Custom name to override the default attribute name in pivot table headers.
If provided, this will be used as the display title in the pivot table.

***

### sort

> **sort**?: [`PivotRowsSort`](../type-aliases/type-alias.PivotRowsSort.md)

ibute name in pivot table headers.
If provided, this will be used as the display title in the pivot table.

***

### sort

> **sort**?: [`PivotRowsSort`](../type-aliases/type-alias.PivotRowsSort.md)

# Interface PivotMeasure

Wrapped measure with additional options for pivot table

## Properties

### measure

> **measure**: [`Measure`](interface.Measure.md)

***

### totalsCalculation

> **totalsCalculation**?: [`TotalsCalculation`](../type-aliases/type-alias.TotalsCalculation.md)

# Interface PivotQueryResultData

Pivot query result data set, which includes both a flat table of [QueryResultData](interface.QueryResultData.md) and grids of tree structures.

## Properties

### Table

#### table

> **table**: [`QueryResultData`](interface.QueryResultData.md)

Flat table structure

### Tree Structures

#### grids

> **grids**?: `object`

Grids of tree structures

##### Type declaration

> ###### `grids.columns`
>
> **columns**: [`PivotGrid`](../type-aliases/type-alias.PivotGrid.md)
>
> ###### `grids.corner`
>
> **corner**: [`PivotGrid`](../type-aliases/type-alias.PivotGrid.md)
>
> ###### `grids.rows`
>
> **rows**: [`PivotGrid`](../type-aliases/type-alias.PivotGrid.md)
>
> ###### `grids.values`
>
> **values**: [`PivotGrid`](../type-aliases/type-alias.PivotGrid.md)
>
>

# Interface QueryResultData

Query result data set, which is made of an array of [columns](interface.Column.md)
and a two-dimensional array of data [cells](interface.Cell.md).

## Properties

d)
>
>

# Interface QueryResultData

Query result data set, which is made of an array of [columns](interface.Column.md)
and a two-dimensional array of data [cells](interface.Cell.md).

## Properties

### columns

> **columns**: [`Column`](interface.Column.md)[]

Array of [columns](interface.Column.md)

***

### rows

> **rows**: [`Cell`](interface.Cell.md)[][]

Two-dimensional array of data [cells](interface.Cell.md)


## Type Aliases

# Type Aliases

- [AnyObject](type-alias.AnyObject.md)
- [DataSource](type-alias.DataSource.md)
- [DataSourceInfo](type-alias.DataSourceInfo.md)
- [FilterRelationsNode](type-alias.FilterRelationsNode.md)
- [ForecastFormulaOptions](type-alias.ForecastFormulaOptions.md)
- [PivotGrandTotals](type-alias.PivotGrandTotals.md)
- [PivotGrid](type-alias.PivotGrid.md)
- [PivotRowsSort](type-alias.PivotRowsSort.md)
- [SortDirection](type-alias.SortDirection.md)
- [TotalsCalculation](type-alias.TotalsCalculation.md)
- [TreeNode](type-alias.TreeNode.md)
- [TrendFormulaOptions](type-alias.TrendFormulaOptions.md)

# Type alias AnyObject

> **AnyObject**: `Record`\< `string`, `any` \>

Abstract object with any unknown values

# Type alias DataSource

> **DataSource**: [`DataSourceInfo`](type-alias.DataSourceInfo.md) \| `string`

Data source for queries to run against

# Type alias DataSourceInfo

> **DataSourceInfo**: `object`

Info of data source

## Type declaration

### `title`

**title**: `string`

***

### `type`

**type**: `"elasticube"` \| `"live"`

gainst

# Type alias DataSourceInfo

> **DataSourceInfo**: `object`

Info of data source

## Type declaration

### `title`

**title**: `string`

***

### `type`

**type**: `"elasticube"` \| `"live"`

# Type alias FilterRelationsNode

> **FilterRelationsNode**: [`Filter`](../interfaces/interface.Filter.md) \| [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

A node or a subtree of a [FilterRelations](../interfaces/interface.FilterRelations.md) tree

# Type alias ForecastFormulaOptions

> **ForecastFormulaOptions**: `object`

Forecast formula options.

## Type declaration

### `confidenceInterval`

**confidenceInterval**?: `number`

Confidence interval showing the probabilistic upper and lower limits of the
forecasted series according to the uncertainty level. The valid range is (0.8 <= X < 1).

#### Default Value

```ts
0.8
```

***

### `endDate`

**endDate**?: `Date` \| `string`

End date of the time series data that the forecasting model will be
trained on. This parameter can be used to discard the end of the series.
Specify a ISO 8601 date string or Date object.

***

### `forecastHorizon`

**forecastHorizon**?: `number`

Number of data points to be predicted.
The accepted value range is between 1-1,000

#### Default Value

```ts
3
```

***

or Date object.

***

### `forecastHorizon`

**forecastHorizon**?: `number`

Number of data points to be predicted.
The accepted value range is between 1-1,000

#### Default Value

```ts
3
```

***

### `lowerBound`

**lowerBound**?: `number`

Expected lower limit to improve the forecast accuracy when reaching
the limit. Note that values in the confidence interval can exceed
this limit.

***

### `modelType`

**modelType**?: `"auto"` \| `"autoArima"` \| `"holtWinters"` \| `"prophet"`

Forecasting model type. The 'auto' option automatically
fits the best combination of models.

#### Default Value

```ts
"auto"
```

***

### `roundToInt`

**roundToInt**?: `boolean`

Boolean flag to round the predicted result to an integer if set to true.
Otherwise, the predicted result is left as a float

#### Default Value

```ts
false
```

***

### `startDate`

**startDate**?: `Date` \| `string`

Start date of the time series data that the forecasting model will
be trained on. This parameter can be used to discard the beginning of
the series. Specify a ISO 8601 date string or Date object.

***

### `upperBound`

**upperBound**?: `number`

Expected upper limit to improve the forecast accuracy when reaching
the limit. Note that values in the confidence interval can exceed
this limit.

# Type alias PivotGrandTotals

> **PivotGrandTotals**: `object`

Data options for grand totals of a pivot table

## Type declaration

### `columns`

**columns**?: `boolean`

***

### `rows`

**rows**?: `boolean`

PivotGrandTotals

> **PivotGrandTotals**: `object`

Data options for grand totals of a pivot table

## Type declaration

### `columns`

**columns**?: `boolean`

***

### `rows`

**rows**?: `boolean`

# Type alias PivotGrid

> **PivotGrid**: ([`TreeNode`](type-alias.TreeNode.md) \| `string`)[][]

Grid of tree nodes

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

# Type alias SortDirection

> **SortDirection**: `"sortAsc"` \| `"sortDesc"` \| `"sortNone"`

Sorting direction, either in Ascending order, Descending order, or None

# Type alias TotalsCalculation

> **TotalsCalculation**: `"avg"` \| `"max"` \| `"median"` \| `"min"` \| `"sum"`

# Type alias TreeNode

> **TreeNode**: `object`

Tree node representing data in a pivot table

## Type declaration

### `children`

**children**?: [`TreeNode`](type-alias.TreeNode.md)[]

List of children of this node

***

### `data`

**data**?: `any`[]

Data list for rows nodes

***

### `index`

**index**?: `number`

Index in data list for columns nodes

***

### `value`

**value**?: `string`

Raw data

is node

***

### `data`

**data**?: `any`[]

Data list for rows nodes

***

### `index`

**index**?: `number`

Index in data list for columns nodes

***

### `value`

**value**?: `string`

Raw data

# Type alias TrendFormulaOptions

> **TrendFormulaOptions**: `object`

Trend formula options.

## Type declaration

### `ignoreAnomalies`

**ignoreAnomalies**?: `boolean`

Boolean flag that enables the function to automatically identify and ignore
anomalous values in the series. This can be particularly useful when you want
to maintain the integrity of your analysis by avoiding potential outliers.

#### Default Value

```ts
false
```

***

### `modelType`

**modelType**?: `"advancedSmoothing"` \| `"linear"` \| `"localEstimates"` \| `"logarithmic"`

Trend analysis model type to be used for the operation.

#### Default Value

```ts
"linear"
```


## Enumerations

# Enumerations

- [Sort](enumeration.Sort.md)

# Enumeration Sort

Different sort types.

## Enumeration Members

### Ascending

> **Ascending**: `1`

Sort Ascending

***

### Descending

> **Descending**: `2`

Sort Descending

***

### None

> **None**: `0`

No sort definition


## Variables

# Variables

- [AggregationTypes](variable.AggregationTypes.md)
- [DateLevels](variable.DateLevels.md)
- [NumericOperators](variable.NumericOperators.md)

# Variable AggregationTypes

> **`const`** **AggregationTypes**: `object`

Different aggregation types

## Type declaration

ariable.DateLevels.md)
- [NumericOperators](variable.NumericOperators.md)

# Variable AggregationTypes

> **`const`** **AggregationTypes**: `object`

Different aggregation types

## Type declaration

### `Average`

**Average**: `string` = `'avg'`

Average aggregation type

***

### `Count`

**Count**: `string` = `'count'`

Count aggregation type

***

### `CountDistinct`

**CountDistinct**: `string` = `'countDistinct'`

Count distinct aggregation type

***

### `Max`

**Max**: `string` = `'max'`

Max aggregation type

***

### `Median`

**Median**: `string` = `'median'`

Median aggregation type

***

### `Min`

**Min**: `string` = `'min'`

Min aggregation type

***

### `StandardDeviation`

**StandardDeviation**: `string` = `'stdev'`

Standard deviation aggregation type

***

### `Sum`

**Sum**: `string` = `'sum'`

Sum aggregation type

***

### `Variance`

**Variance**: `string` = `'var'`

Variance aggregation type

# Variable DateLevels

> **`const`** **DateLevels**: `object`

Levels for [DateDimension](../interfaces/interface.DateDimension.md)

## Type declaration

### `AggHours`

**`readonly`** **AggHours**: `"AggHours"` = `'AggHours'`

***

### `AggMinutesRoundTo1`

**`readonly`** **AggMinutesRoundTo1**: `"AggMinutesRoundTo1"` = `'AggMinutesRoundTo1'`

***

### `AggMinutesRoundTo15`

**`readonly`** **AggMinutesRoundTo15**: `"AggMinutesRoundTo15"` = `'AggMinutesRoundTo15'`

***

*AggMinutesRoundTo1**: `"AggMinutesRoundTo1"` = `'AggMinutesRoundTo1'`

***

### `AggMinutesRoundTo15`

**`readonly`** **AggMinutesRoundTo15**: `"AggMinutesRoundTo15"` = `'AggMinutesRoundTo15'`

***

### `AggMinutesRoundTo30`

**`readonly`** **AggMinutesRoundTo30**: `"AggMinutesRoundTo30"` = `'AggMinutesRoundTo30'`

***

### `Days`

**`readonly`** **Days**: `"Days"` = `'Days'`

***

### `Hours`

**`readonly`** **Hours**: `"Hours"` = `'Hours'`

***

### `Minutes`

**`readonly`** **Minutes**: `"Minutes"` = `'Minutes'`

***

### `MinutesRoundTo15`

**`readonly`** **MinutesRoundTo15**: `"MinutesRoundTo15"` = `'MinutesRoundTo15'`

***

### `MinutesRoundTo30`

**`readonly`** **MinutesRoundTo30**: `"MinutesRoundTo30"` = `'MinutesRoundTo30'`

***

### `Months`

**`readonly`** **Months**: `"Months"` = `'Months'`

***

### `Quarters`

**`readonly`** **Quarters**: `"Quarters"` = `'Quarters'`

***

### `Seconds`

**`readonly`** **Seconds**: `"Seconds"` = `'Seconds'`

***

### `Weeks`

**`readonly`** **Weeks**: `"Weeks"` = `'Weeks'`

***

### `Years`

**`readonly`** **Years**: `"Years"` = `'Years'`

# Variable NumericOperators

> **`const`** **NumericOperators**: `object`

Different numeric operators that can be used with numeric filters

## Type declaration

### `DoesntEqual`

**`readonly`** **DoesntEqual**: `"doesntEqual"` = `'doesntEqual'`

***

### `Equals`

**`readonly`** **Equals**: `"equals"` = `'equals'`

***

### `From`

**`readonly`** **From**: `"from"` = `'from'`

***

donly`** **DoesntEqual**: `"doesntEqual"` = `'doesntEqual'`

***

### `Equals`

**`readonly`** **Equals**: `"equals"` = `'equals'`

***

### `From`

**`readonly`** **From**: `"from"` = `'from'`

***

### `FromNotEqual`

**`readonly`** **FromNotEqual**: `"fromNotEqual"` = `'fromNotEqual'`

***

### `To`

**`readonly`** **To**: `"to"` = `'to'`

***

### `ToNotEqual`

**`readonly`** **ToNotEqual**: `"toNotEqual"` = `'toNotEqual'`


## Data Model Utilities

# Data Model Utilities

- [createAttribute](function.createAttribute.md)
- [createDateDimension](function.createDateDimension.md)
- [createDimension](function.createDimension.md)

# Function createAttribute

> **createAttribute**(`json`): [`Attribute`](../interfaces/interface.Attribute.md)

Creates an Attribute instance from the given JSON object.
If the JSON object contains a granularity property, a [LevelAttribute](../interfaces/interface.LevelAttribute.md) instance is created.

This function is used in the generated data model code to create dimension attributes from an input data source.

See also functions [createDimension](function.createDimension.md) and [createDateDimension](function.createDateDimension.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | JSON object representing the attribute |

## Returns

[`Attribute`](../interfaces/interface.Attribute.md)

An Attribute instance

pe | Description |
| :------ | :------ | :------ |
| `json` | `any` | JSON object representing the attribute |

## Returns

[`Attribute`](../interfaces/interface.Attribute.md)

An Attribute instance

# Function createDateDimension

> **createDateDimension**(`json`): [`DateDimension`](../interfaces/interface.DateDimension.md)

Creates a new Date Dimension instance from the given JSON object.

This function is used in the generated data model code to create date dimensions for an input data source.

See also functions [createDimension](function.createDimension.md) and [createAttribute](function.createAttribute.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | JSON object representing the Date Dimension |

## Returns

[`DateDimension`](../interfaces/interface.DateDimension.md)

A new Date Dimension instance

# Function createDimension

> **createDimension**(`json`): [`Dimension`](../interfaces/interface.Dimension.md)

Creates a new Dimension instance from the given JSON object.

This function is used in the generated data model code to create dimensions for an input data source.

See also functions [createDateDimension](function.createDateDimension.md) and [createAttribute](function.createAttribute.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | JSON object representing the Dimension |

md) and [createAttribute](function.createAttribute.md).

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | JSON object representing the Dimension |

## Returns

[`Dimension`](../interfaces/interface.Dimension.md)

A new Dimension instance


## Filter Utilities

# Filter Utilities

- [findFilter](function.findFilter.md)
- [isFilterRelations](function.isFilterRelations.md)
- [withAddedFilter](function.withAddedFilter.md)
- [withAddedFilters](function.withAddedFilters.md)
- [withoutFilter](function.withoutFilter.md)
- [withoutFilters](function.withoutFilters.md)
- [withReplacedFilter](function.withReplacedFilter.md)

# Function findFilter

> **findFilter**(`filters`, `searchFn`): [`Filter`](../interfaces/interface.Filter.md) \| `undefined`

Finds a filter in an array of filters or filter relations.
Returns the first filter that satisfies the provided search function.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` | An array of filters or filter relations to search. |
| `searchFn` | (`filter`) => `boolean` | A function that takes a filter and returns a boolean indicating whether the filter satisfies the search criteria. |

filters or filter relations to search. |
| `searchFn` | (`filter`) => `boolean` | A function that takes a filter and returns a boolean indicating whether the filter satisfies the search criteria. |

## Returns

[`Filter`](../interfaces/interface.Filter.md) \| `undefined`

The first filter that satisfies the search function, or `undefined` if no filter is found.

# Function isFilterRelations

> **isFilterRelations**(`filters`): `filters is FilterRelations`

Type guard for checking if the provided filters are FilterRelations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` | The filters to check. |

## Returns

`filters is FilterRelations`

`true` if the filters are FilterRelations, `false` otherwise.

# Function withAddedFilter

> **withAddedFilter**(`filter`): (`filters`) => [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

Returns a function that adds a filter to existing filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](../interfaces/interface.Filter.md) | The filter to add. |

ting filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](../interfaces/interface.Filter.md) | The filter to add. |

## Returns

A function that takes existing filters or filter relations and returns updated filters or filter relations with the new filter added.

> > (`filters`): [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
> ### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

## Example

```ts
// Using with an array of filters
const originalFilters = [filterByAgeRange];
const updatedFilters = withAddedFilter(filterByCost)(originalFilters);
// [filterByAgeRange, filterByCost]

// Using with filter relations
const originalFilterRelations = filterFactory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFilterRelations = withAddedFilter(filterByCost)(originalFilterRelations);
// (filterByAgeRange OR filterByRevenue) AND filterByCost
```

tory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFilterRelations = withAddedFilter(filterByCost)(originalFilterRelations);
// (filterByAgeRange OR filterByRevenue) AND filterByCost
```

# Function withAddedFilters

> **withAddedFilters**(`filtersToAdd`): (`filters`) => [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

Returns a function that adds multiple filters to existing filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filtersToAdd` | [`Filter`](../interfaces/interface.Filter.md)[] | An array of filters to add. |

## Returns

A function that takes existing filters or filter relations and returns updated filters or filter relations with the new filters added.

> > (`filters`): [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
> ### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

r`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

## Example

```ts
// Using with an array of filters
const originalFilters = [filterByAgeRange];
const updatedFilters = withAddedFilters([filterByCost, filterByRevenue])(originalFilters);
// [filterByAgeRange, filterByCost, filterByRevenue]

// Using with filter relations
const originalFilterRelations = filterFactory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFilterRelations = withAddedFilters([filterByCost, filterByRevenue])(originalFilterRelations);
// (filterByAgeRange OR filterByRevenue) AND filterByCost AND filterByRevenue
```

# Function withReplacedFilter

> **withReplacedFilter**(`filterToReplace`, `newFilter`): (`filters`) => [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

Returns a function that replaces a filter with a new filter in existing filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filterToReplace` | [`Filter`](../interfaces/interface.Filter.md) | The filter to replace. |
| `newFilter` | [`Filter`](../interfaces/interface.Filter.md) | The new filter to use as a replacement. |

`filterToReplace` | [`Filter`](../interfaces/interface.Filter.md) | The filter to replace. |
| `newFilter` | [`Filter`](../interfaces/interface.Filter.md) | The new filter to use as a replacement. |

## Returns

A function that takes existing filters or filter relations and returns updated filters or filter relations with the filter replaced.

> > (`filters`): [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
> ### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

## Example

```ts
// Using with an array of filters
const originalFilters = [filterByAgeRange, filterByRevenue];
const updatedFilters = withReplacedFilter(filterByRevenue, filterByCost)(originalFilters);
// [filterByAgeRange, filterByCost]

// Using with filter relations
const originalFilterRelations = filterFactory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFilterRelations = withReplacedFilter(filterByRevenue, filterByCost)(originalFilterRelations);
// (filterByAgeRange OR filterByCost)
```

tory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFilterRelations = withReplacedFilter(filterByRevenue, filterByCost)(originalFilterRelations);
// (filterByAgeRange OR filterByCost)
```

# Function withoutFilter

> **withoutFilter**(`filterToRemove`): (`filters`) => [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

Returns a function that removes a filter from existing filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filterToRemove` | [`Filter`](../interfaces/interface.Filter.md) | The filter to remove. |

## Returns

A function that takes existing filters or filter relations and returns updated filters or filter relations without the specified filter.

> > (`filters`): [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
> ### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

r`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

## Example

```ts
// Using with an array of filters
const originalFilters = [filterByAgeRange, filterByRevenue, filterByCost];
const updatedFilters = withoutFilter(filterByCost)(originalFilters);
// [filterByAgeRange, filterByRevenue]

// Using with filter relations
const originalFilterRelations = filterFactory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFiltersRelations = withoutFilter(filterByRevenue)(originalFilterRelations);
// filterByAgeRange
```

# Function withoutFilters

> **withoutFilters**(`filtersToRemove`): (`filters`) => [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]

Returns a function that removes multiple filters from existing filters or filter relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filtersToRemove` | [`Filter`](../interfaces/interface.Filter.md)[] | An array of filters to remove. |

relations.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filtersToRemove` | [`Filter`](../interfaces/interface.Filter.md)[] | An array of filters to remove. |

## Returns

A function that takes existing filters or filter relations and returns updated filters or filter relations without the specified filters.

> > (`filters`): [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
> ### Parameters
>
>
> | Parameter | Type |
> | :------ | :------ |
> | `filters` | [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[] \| `undefined` |
>
>
> ### Returns
>
> [`FilterRelations`](../interfaces/interface.FilterRelations.md) \| [`Filter`](../interfaces/interface.Filter.md)[]
>
>

## Example

```ts
// Using with an array of filters
const originalFilters = [filterByAgeRange, filterByRevenue, filterByCost];
const updatedFilters = withRemovedFilters([filterByRevenue, filterByCost])(originalFilters);
// [filterByAgeRange]

// Using with filter relations
const originalFilterRelations = filterFactory.logic.or(filterByAgeRange, filterByRevenue);
const updatedFiltersRelations = withRemovedFilters([filterByRevenue])(originalFilterRelations);
// filterByAgeRange
```

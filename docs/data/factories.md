# API Reference: sdk-data

Package: @sisense/sdk-data

# Module sdk-data

## Factories

- [analyticsFactory](factories/namespace.analyticsFactory/index.md)
- [filterFactory](factories/namespace.filterFactory/index.md)
- [measureFactory](factories/namespace.measureFactory/index.md)

## Data Model Utilities

- [createAttribute](data-model-utilities/function.createAttribute.md)
- [createDateDimension](data-model-utilities/function.createDateDimension.md)
- [createDimension](data-model-utilities/function.createDimension.md)

## Filter Utilities

- [findFilter](filter-utilities/function.findFilter.md)
- [isFilterRelations](filter-utilities/function.isFilterRelations.md)
- [withAddedFilter](filter-utilities/function.withAddedFilter.md)
- [withAddedFilters](filter-utilities/function.withAddedFilters.md)
- [withoutFilter](filter-utilities/function.withoutFilter.md)
- [withoutFilters](filter-utilities/function.withoutFilters.md)
- [withReplacedFilter](filter-utilities/function.withReplacedFilter.md)


## Factories

# Factories

- [analyticsFactory](namespace.analyticsFactory/index.md)
- [filterFactory](namespace.filterFactory/index.md)
- [measureFactory](namespace.measureFactory/index.md)

# Namespace analyticsFactory

Functions to create elements for advanced analytics – for example, attributes and measures for constructing a custom Boxplot chart

## Index

e.measureFactory/index.md)

# Namespace analyticsFactory

Functions to create elements for advanced analytics – for example, attributes and measures for constructing a custom Boxplot chart

## Index

### Functions

- [boxWhiskerExtremumsValues](functions/function.boxWhiskerExtremumsValues.md)
- [boxWhiskerIqrOutliers](functions/function.boxWhiskerIqrOutliers.md)
- [boxWhiskerIqrValues](functions/function.boxWhiskerIqrValues.md)
- [boxWhiskerStdDevOutliers](functions/function.boxWhiskerStdDevOutliers.md)
- [boxWhiskerStdDevValues](functions/function.boxWhiskerStdDevValues.md)

Functions to create elements for advanced analytics – for example, attributes and measures for constructing a custom Boxplot chart

# Functions

- [boxWhiskerExtremumsValues](function.boxWhiskerExtremumsValues.md)
- [boxWhiskerIqrOutliers](function.boxWhiskerIqrOutliers.md)
- [boxWhiskerIqrValues](function.boxWhiskerIqrValues.md)
- [boxWhiskerStdDevOutliers](function.boxWhiskerStdDevOutliers.md)
- [boxWhiskerStdDevValues](function.boxWhiskerStdDevValues.md)

# Namespace filterFactory

Functions to create date, text, or numeric filters on specified data.

Filters created with these functions can be used to:

+ Filter explicit queries by query components or query functions
+ Filter or highlight queries used by UI components, such as charts
+ Set the filters of filter components

functions can be used to:

+ Filter explicit queries by query components or query functions
+ Filter or highlight queries used by UI components, such as charts
+ Set the filters of filter components

## Example

Example of using React hook `useExecuteQuery` to query the `Sample ECommerce` data source.
Factory function `filterFactory.greaterThan()` is used to create a filter on `Revenue` to get values
greater than 1000.
```ts
  const { data, isLoading, isError } = useExecuteQuery({
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
    return <div>{`Total Rows: ${data.rows.length}`}</div>;
  }
  return null;
```

## Index

g) {
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

## Index

### Functions

- [between](functions/function.between.md)
- [betweenNotEqual](functions/function.betweenNotEqual.md)
- [bottomRanking](functions/function.bottomRanking.md)
- [cascading](functions/function.cascading.md)
- [contains](functions/function.contains.md)
- [dateFrom](functions/function.dateFrom.md)
- [dateRange](functions/function.dateRange.md)
- [dateRelative](functions/function.dateRelative.md)
- [dateRelativeFrom](functions/function.dateRelativeFrom.md)
- [dateRelativeTo](functions/function.dateRelativeTo.md)
- [dateTo](functions/function.dateTo.md)
- [doesntContain](functions/function.doesntContain.md)
- [doesntEndWith](functions/function.doesntEndWith.md)
- [doesntEqual](functions/function.doesntEqual.md)
- [doesntStartWith](functions/function.doesntStartWith.md)
- [endsWith](functions/function.endsWith.md)
- [equals](functions/function.equals.md)
- [exclude](functions/function.exclude.md)
- [greaterThan](functions/function.greaterThan.md)
- [greaterThanOrEqual](functions/function.greaterThanOrEqual.md)
- [intersection](functions/function.intersection.md)
- [lessThan](functions/function.lessThan.md)
- [lessThanOrEqual](functions/function.lessThanOrEqual.md)
- [like](functions/function.like.md)
- [measureBetween](functions/function.measureBetween.md)
- [measureBetweenNotEqual](functions/function.measureBetweenNotEqual.md)
- [measureBottomRanking](functions/function.measureBottomRanking.md)
- [measureEquals](functions/function.measureEquals.md)
- [measureGreaterThan](functions/function.measureGreaterThan.md)
- [measureGreaterThanOrEqual](functions/function.measureGreaterThanOrEqual.md)
- [measureLessThan](functions/function.measureLessThan.md)
- [measureLessThanOrEqual](functions/function.measureLessThanOrEqual.md)
- [measureTopRanking](functions/function.measureTopRanking.md)
- [members](functions/function.members.md) - Creates filter on attribute to match certain string values
- [numeric](functions/function.numeric.md)
- [startsWith](functions/function.startsWith.md)
- [thisMonth](functions/function.thisMonth.md)
- [thisQuarter](functions/function.thisQuarter.md)
- [thisYear](functions/function.thisYear.md)
- [today](functions/function.today.md)
- [topRanking](functions/function.topRanking.md)
- [union](functions/function.union.md)

s/function.thisQuarter.md)
- [thisYear](functions/function.thisYear.md)
- [today](functions/function.today.md)
- [topRanking](functions/function.topRanking.md)
- [union](functions/function.union.md)

### Namespaces

- [logic](namespaces/namespace.logic/index.md) <Badge type="beta" text="Beta" />

Functions to create date, text, or numeric filters on specified data.

Filters created with these functions can be used to:

+ Filter explicit queries by query components or query functions
+ Filter or highlight queries used by UI components, such as charts
+ Set the filters of filter components

## Example

Example of using React hook `useExecuteQuery` to query the `Sample ECommerce` data source.
Factory function `filterFactory.greaterThan()` is used to create a filter on `Revenue` to get values
greater than 1000.
```ts
  const { data, isLoading, isError } = useExecuteQuery({
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
    return <div>{`Total Rows: ${data.rows.length}`}</div>;
  }
  return null;
```

(isLoading) {
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

# Functions

- [between](function.between.md)
- [betweenNotEqual](function.betweenNotEqual.md)
- [bottomRanking](function.bottomRanking.md)
- [cascading](function.cascading.md)
- [contains](function.contains.md)
- [dateFrom](function.dateFrom.md)
- [dateRange](function.dateRange.md)
- [dateRelative](function.dateRelative.md)
- [dateRelativeFrom](function.dateRelativeFrom.md)
- [dateRelativeTo](function.dateRelativeTo.md)
- [dateTo](function.dateTo.md)
- [doesntContain](function.doesntContain.md)
- [doesntEndWith](function.doesntEndWith.md)
- [doesntEqual](function.doesntEqual.md)
- [doesntStartWith](function.doesntStartWith.md)
- [endsWith](function.endsWith.md)
- [equals](function.equals.md)
- [exclude](function.exclude.md)
- [greaterThan](function.greaterThan.md)
- [greaterThanOrEqual](function.greaterThanOrEqual.md)
- [intersection](function.intersection.md)
- [lessThan](function.lessThan.md)
- [lessThanOrEqual](function.lessThanOrEqual.md)
- [like](function.like.md)
- [measureBetween](function.measureBetween.md)
- [measureBetweenNotEqual](function.measureBetweenNotEqual.md)
- [measureBottomRanking](function.measureBottomRanking.md)
- [measureEquals](function.measureEquals.md)
- [measureGreaterThan](function.measureGreaterThan.md)
- [measureGreaterThanOrEqual](function.measureGreaterThanOrEqual.md)
- [measureLessThan](function.measureLessThan.md)
- [measureLessThanOrEqual](function.measureLessThanOrEqual.md)
- [measureTopRanking](function.measureTopRanking.md)
- [members](function.members.md) - Creates filter on attribute to match certain string values
- [numeric](function.numeric.md)
- [startsWith](function.startsWith.md)
- [thisMonth](function.thisMonth.md)
- [thisQuarter](function.thisQuarter.md)
- [thisYear](function.thisYear.md)
- [today](function.today.md)
- [topRanking](function.topRanking.md)
- [union](function.union.md)

h](function.thisMonth.md)
- [thisQuarter](function.thisQuarter.md)
- [thisYear](function.thisYear.md)
- [today](function.today.md)
- [topRanking](function.topRanking.md)
- [union](function.union.md)

# Namespaces

- [logic](../namespaces/namespace.logic/index.md) <Badge type="beta" text="Beta" />

# Namespace logic <Badge type="beta" text="Beta" />

Set of logic operators for filter relations construction

These operators are still in beta.

## Example

```ts
import { filters } from '@sisense/sdk-data';

// define filters
const revenueFilter = filterFactory.greaterThan(DM.Commerce.Revenue, 1000);
const countryFilter = filterFactory.members(DM.Commerce.Country, ['USA', 'Canada']);
const genderFilter = filterFactory.doesntContain(DM.Commerce.Gender, 'Unspecified');
const costFilter = filterFactory.between(DM.Commerce.Cost, 1000, 2000);

// create filter relations of two filters
const orFilerRelations = filterFactory.logic.or(revenueFilter, countryFilter);
// revenueFilter OR countryFilter

// filter relations can have nested filter relations
const mixedFilterRelations = filterFactory.logic.and(genderFilter, orFilerRelations);
// genderFilter AND (revenueFilter OR countryFilter)

// array, specified in filter relations, will be converted to an intersection of filters automatically
const arrayFilterRelations = filterFactory.logic.or([genderFilter, costFilter], mixedFilterRelations);
// (genderFilter AND costFilter) OR (genderFilter AND (revenueFilter OR countryFilter))
```

lly
const arrayFilterRelations = filterFactory.logic.or([genderFilter, costFilter], mixedFilterRelations);
// (genderFilter AND costFilter) OR (genderFilter AND (revenueFilter OR countryFilter))
```

## Index

### Functions

- [and](functions/function.and.md) <Badge type="beta" text="Beta" />
- [or](functions/function.or.md) <Badge type="beta" text="Beta" />

Set of logic operators for filter relations construction

These operators are still in beta.

md) <Badge type="beta" text="Beta" />
- [or](functions/function.or.md) <Badge type="beta" text="Beta" />

Set of logic operators for filter relations construction

These operators are still in beta.

## Example

```ts
import { filters } from '@sisense/sdk-data';

// define filters
const revenueFilter = filterFactory.greaterThan(DM.Commerce.Revenue, 1000);
const countryFilter = filterFactory.members(DM.Commerce.Country, ['USA', 'Canada']);
const genderFilter = filterFactory.doesntContain(DM.Commerce.Gender, 'Unspecified');
const costFilter = filterFactory.between(DM.Commerce.Cost, 1000, 2000);

// create filter relations of two filters
const orFilerRelations = filterFactory.logic.or(revenueFilter, countryFilter);
// revenueFilter OR countryFilter

// filter relations can have nested filter relations
const mixedFilterRelations = filterFactory.logic.and(genderFilter, orFilerRelations);
// genderFilter AND (revenueFilter OR countryFilter)

// array, specified in filter relations, will be converted to an intersection of filters automatically
const arrayFilterRelations = filterFactory.logic.or([genderFilter, costFilter], mixedFilterRelations);
// (genderFilter AND costFilter) OR (genderFilter AND (revenueFilter OR countryFilter))
```

# Functions

- [and](function.and.md) <Badge type="beta" text="Beta" />
- [or](function.or.md) <Badge type="beta" text="Beta" />

stFilter) OR (genderFilter AND (revenueFilter OR countryFilter))
```

# Functions

- [and](function.and.md) <Badge type="beta" text="Beta" />
- [or](function.or.md) <Badge type="beta" text="Beta" />

# Namespace measureFactory

Functions to create measures that aggregate, summarize, and accumulate data,
plus show changes in data over time.

Measures created with these functions can be used in the data options of UI components such as
[Chart](../../../sdk-ui/interfaces/interface.ChartProps.md), [ChartWidget](../../../sdk-ui/interfaces/interface.ChartWidgetProps.md),
and [ExecuteQuery](../../../sdk-ui/interfaces/interface.ExecuteQueryProps.md).

## Example

Example of using React hook useExecuteQuery to query the `Sample ECommerce` data source.
Factory function `measureFactory.sum()` is used to create a measure that sums the `Revenue` column.
```ts
  const { data, isLoading, isError } = useExecuteQuery({
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
    return <div>{`Total Rows: ${data.rows.length}`}</div>;
  }
  return null;
```

## Index

g) {
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

## Index

### Aggregation

- [aggregate](functions/function.aggregate.md)
- [average](functions/function.average.md)
- [avg](functions/function.avg.md)
- [count](functions/function.count.md)
- [countDistinct](functions/function.countDistinct.md)
- [max](functions/function.max.md)
- [median](functions/function.median.md)
- [min](functions/function.min.md)
- [sum](functions/function.sum.md)

### Arithmetic

- [add](functions/function.add.md)
- [constant](functions/function.constant.md)
- [divide](functions/function.divide.md)
- [multiply](functions/function.multiply.md)
- [subtract](functions/function.subtract.md)

tions/function.add.md)
- [constant](functions/function.constant.md)
- [divide](functions/function.divide.md)
- [multiply](functions/function.multiply.md)
- [subtract](functions/function.subtract.md)

### Time-based

- [difference](functions/function.difference.md)
- [diffPastMonth](functions/function.diffPastMonth.md)
- [diffPastQuarter](functions/function.diffPastQuarter.md)
- [diffPastWeek](functions/function.diffPastWeek.md)
- [diffPastYear](functions/function.diffPastYear.md)
- [monthToDateSum](functions/function.monthToDateSum.md)
- [pastDay](functions/function.pastDay.md)
- [pastMonth](functions/function.pastMonth.md)
- [pastQuarter](functions/function.pastQuarter.md)
- [pastWeek](functions/function.pastWeek.md)
- [pastYear](functions/function.pastYear.md)
- [quarterToDateSum](functions/function.quarterToDateSum.md)
- [weekToDateSum](functions/function.weekToDateSum.md)
- [yearToDateSum](functions/function.yearToDateSum.md)

### Statistics

- [contribution](functions/function.contribution.md)
- [growth](functions/function.growth.md)
- [growthPastMonth](functions/function.growthPastMonth.md)
- [growthPastQuarter](functions/function.growthPastQuarter.md)
- [growthPastWeek](functions/function.growthPastWeek.md)
- [growthPastYear](functions/function.growthPastYear.md)
- [growthRate](functions/function.growthRate.md)
- [rank](functions/function.rank.md)
- [runningSum](functions/function.runningSum.md)

ek.md)
- [growthPastYear](functions/function.growthPastYear.md)
- [growthRate](functions/function.growthRate.md)
- [rank](functions/function.rank.md)
- [runningSum](functions/function.runningSum.md)

### Advanced Analytics

- [customFormula](functions/function.customFormula.md)
- [forecast](functions/function.forecast.md)
- [measuredValue](functions/function.measuredValue.md)
- [trend](functions/function.trend.md)

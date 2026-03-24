# Tutorials

Step-by-step tutorials for building with Compose SDK
================================================================================


<!-- Source: tutorials/index.md -->
# Tutorials

Here you'll find tutorials that will walk you through building your first projects with Compose SDK.

<SectionIndex />


<!-- Source: tutorials/tutorial-charts/index.md -->
# Tutorial

In this tutorial, we’ll walk you through the steps of creating your first project with Compose SDK. We’ll work with charts and learn several ways to customize them. After completing this tutorial, you’ll have the fundamental skills necessary to start your own Compose SDK projects.

ith Compose SDK. We’ll work with charts and learn several ways to customize them. After completing this tutorial, you’ll have the fundamental skills necessary to start your own Compose SDK projects.

## What you'll learn

Along the way, you’ll learn how to:

- Setup a new project to work with Compose SDK
- Work with chart data from a Sisense instance
- Filter and highlight the chart data
- Use callbacks to customize the look and behavior of your charts
- Dynamically change the contents and layout a chart

## What you'll build

While developing our project, we’ll focus on functionality and try to minimize any code that will distract from that goal. So, while what we build might not look too pretty, it will be packed with features that you can apply to lots of different situations.

When done, we’ll have built a page that includes two charts. The charts use the Sample Retail data model from a Sisense instance. The top chart shows sales revenue per product category. The bottom chart also shows sales revenue per product category, but broken down by either product color, country region, or team manager.

We’ll build the first chart so that you can highlight certain data using toggle buttons or by clicking on data in the chart. Highlighting data in the top chart changes which data is displayed in the bottom chart.

We’ll also add the option to change the chart type from a column chart to bar chart.

![Tutorial result](../../img/tutorial/0-end-product.png 'Tutorial result')

ta is displayed in the bottom chart.

We’ll also add the option to change the chart type from a column chart to bar chart.

![Tutorial result](../../img/tutorial/0-end-product.png 'Tutorial result')

## Get started

Let's get started by setting up a Compose SDK project. Go to [Lesson 1](./lesson1.md).


<!-- Source: tutorials/tutorial-charts/lesson1.md -->
# Lesson 1 | Setup

In this lesson you’ll learn how to set up a new Compose SDK project and display your first chart in that project.

## Prerequisites

Before getting started, you’ll need:

- Node.js version 16 or higher
- npm

You’ll also need access to a Sisense instance with:

- The Sample Retail data source (you may need to go into the Sample Retail data model and unhide some of the columns that are hidden by default)
- An [API Token](../../getting-started/authentication-security.md#api-token) you can use to query with
- [CORS settings](../../getting-started/authentication-security.md#set-up-cors) that allow requests from `http://localhost:5173`, the URL that Vite serves your project on locally

n use to query with
- [CORS settings](../../getting-started/authentication-security.md#set-up-cors) that allow requests from `http://localhost:5173`, the URL that Vite serves your project on locally

## Project Code

You can follow along with this tutorial, writing the code as you go, to build the project on your own. You can also find the code for the tutorial project in a [GitHub repo](https://github.com/sisense/compose-sdk-charts-tutorial).

The tutorial repo is structured with a number of branches, each branch contains the code as it should be at a number of natural stopping points along the way of building the project. We’ll point out the stopping points when we reach them. The main branch of the repository contains the code for the finished project.

To work with the code from the repository:

1. Fork the repo
1. Run `npm install` to install all dependencies
1. Rename the `env.local.example` file to `env.local`
1. In the `env.local` file, enter the URL and API Token you’ll use to connect to your Sisense instance
1. Run `npm run dev`

From here on, we’ll assume that you’re writing the code on your own. But always know that you can use the code from the project if you get stuck, to skip ahead, or if you’re just too lazy to write the code yourself. Don’t worry, we won’t tell anybody.

de on your own. But always know that you can use the code from the project if you get stuck, to skip ahead, or if you’re just too lazy to write the code yourself. Don’t worry, we won’t tell anybody.

## Create a project

Let’s start by creating a React project and installing dependencies. We’ll use Vite to create a new project.

1. Navigate to the directory where you want to create your project
1. Run `npm create vite@latest`
1. Name your project `compose-sdk-charts-tutorial` when prompted
1. Select `React` as the framework
1. Select `TypeScript` as the variant
1. Run `cd compose-sdk-charts-tutorial` to navigate to your project directory
1. Run `npm install` to install your project and dependencies
1. Run `npm i @sisense/sdk-ui @sisense/sdk-data` to install Sisense packages

## Generate data model

Next we’ll generate a TypeScript representation of the Sample Retail data model. We’ll use this in our code when we need to refer to the data model in the Sisense instance.

You can generate a data model TypeScript file using the Compose SDK CLI tool.

To generate the data model:

1. Create a folder in the `src` directory of you project named `models`
1. Run the following command

```sh
npx @sisense/sdk-cli@latest get-data-model --token <api-token> --output src/models/sample-retail.ts --dataSource "Sample Retail" --url <your-instance-url>
```

Be sure to replace the placeholders with your API token and the URL of your Sisense instance.

-token> --output src/models/sample-retail.ts --dataSource "Sample Retail" --url <your-instance-url>
```

Be sure to replace the placeholders with your API token and the URL of your Sisense instance.

## Add a context provider

Now we can start writing our first bit of code.

Since most of our Compose SDK functionality needs access to a Sisense instance, the first thing we need to do is set up that access with `<SisenseContextProvider>`. There are a number of places you can choose to add it. Here, we’ll add the provider in `main.tsx`.

In `main.tsx`, import the `SisenseContextProvider` from the `sdk-ui` module:

```ts
import { SisenseContextProvider } from '@sisense/sdk-ui';
```

Wrap the `<App>` component with a `<SisenseContextProvider>` like this:

```ts
<SisenseContextProvider
  url={import.meta.env.VITE_APP_SISENSE_URL}
  token={import.meta.env.VITE_APP_SISENSE_TOKEN}
>
  <App />
</SisenseContextProvider>
```

This will read the Sisense instance URL and API Token from an `.env`, so let’s add that file now.

1. Create a file named `.env.local` in your project’s root directory
1. Add a `VITE_APP_SISENSE_URL` variable and set its value to your Sisense instance’s URL
1. Add a `VITE_APP_SISENSE_TOKEN` variable and set it value to your API Token

Your `.env.local` file should look something like this:

```
VITE_APP_SISENSE_URL="http://myinstanceurl/"
VITE_APP_SISENSE_TOKEN="OiJhbGJeyciIUzI1..."
```

ariable and set it value to your API Token

Your `.env.local` file should look something like this:

```
VITE_APP_SISENSE_URL="http://myinstanceurl/"
VITE_APP_SISENSE_TOKEN="OiJhbGJeyciIUzI1..."
```

## Add a chart

Finally, with all the setup out of the way we can add our first chart to our project.

In the `App.tsx` file, import the `<Chart>` component, the `measureFactory` namespace, and the TypeScript representation of the Sample Retail data model that we created earlier.

Note: From here on in we won’t mention imports anymore. Just know that you’ll need to add the appropriate imports as we continue to add code to our project.

```ts
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from './models/sample-retail';
```

Then, replace the contents of the `App()` function with the following code to create a chart.

```ts
return (
  <Chart
    dataSet={DM.DataSource}
    chartType={'column'}
    dataOptions={{
        category: [DM.DimProducts.CategoryName],
        value: [measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue)],
    }}
    styleOptions={{
        width: 1000,
        height: 400,
    }}
  />
);
```

This is our first chart, so let’s take a minute to understand what this code does.

---

First we add a chart component to our app.

```ts
<Chart
//...
/>
```

---

Inside the chart component we set the chart’s data set as the data source of the Sample Retail data model we imported.

```ts
dataSet={DM.DataSource}
```

---

We also set the chart’s type to be a column chart.

```ts
chartType={'column'}
```

---

Then, we set the data options. For this chart we’re getting the sum of sales order revenue categorized by product categories.

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue)],
}}
```

Notice how we’re using the imported data model again. This lets us conveniently refer to the attributes in our data model. Here we also use a measure function to perform an aggregation on one of our attributes to create a value for our chart.

---

And finally, we set some basic style options to define the size of the chart.

```ts
styleOptions={{
  width: 1000,
  height: 400,
}}
```

one of our attributes to create a value for our chart.

---

And finally, we set some basic style options to define the size of the chart.

```ts
styleOptions={{
  width: 1000,
  height: 400,
}}
```

## Run

Use the `npm run dev` command to get your project up and running so you can see it in action.
Navigate to http://localhost:5173 in a browser to see your first chart. It should look like this:

![First chart](../../img/tutorial/1-first-chart.png 'First chart')

::: tip
The code up until this point can be found in branch [1-setup](https://github.com/sisense/compose-sdk-charts-tutorial/tree/1-setup).
:::

## Up next

Great job creating your first chart. In the next lesson you’ll learn about different ways to show data in a chart. [Go to Lesson 2](./lesson2.md).


<!-- Source: tutorials/tutorial-charts/lesson2.md -->
# Lesson 2 | Chart data

In this lesson you’ll learn how to add more data to your chart. You’ll learn to work with the axes and labels to better indicate what data your chart is showing. You’ll also learn to group the data in a chart.

## Duplicate chart

Let’s begin by duplicating our current chart. Since we’ll now have two components in your return statement, make sure to wrap them in a React fragment.

At this point your code should look something like this, which should cause you to see two of the same chart on the page:

```ts
return (
  <>
    <Chart
      // Chart details here
    />
    <Chart
      // Chart details here
    />
  </>
);
```

e this, which should cause you to see two of the same chart on the page:

```ts
return (
  <>
    <Chart
      // Chart details here
    />
    <Chart
      // Chart details here
    />
  </>
);
```

## Multiple values

On the first chart, let’s add a second value in addition to the total sale order revenue. You might have noticed that both the `category` and `value` properties are arrays. That’s because we can have multiple categories and multiple values.

In this case, we want to add the total sale order quantity as a value. To do that, all we need to do is use a measure function to create a new value and add it to the `dataOptions.value` array. Each of the values in the array are `MeasureColumn` types.

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [
    measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue),
    measureFactory.sum(DM.Fact_Sale_orders.OrderQty),
  ],
}}
```

If you take a look at your charts, you’ll see something a bit strange. The sale order quantity data doesn’t seem to show up.

![Chart with multiple values](../../img/tutorial/2-multiple-values.png 'Chart with multiple values')

But if you have a keen eye, you might have noticed that the top chart’s columns are now narrower than they were before and the order quantity was added to the chart’s legend.

This should tip us off as to the problem here. The quantities are showing up, but they’re being measured on the same scale as the revenue. Since sales revenue is many times greater than sales quantity, the quantity is too small to be seen.

here. The quantities are showing up, but they’re being measured on the same scale as the revenue. Since sales revenue is many times greater than sales quantity, the quantity is too small to be seen.

## Styled columns

To remedy this situation, we can add a second Y-axis for the quantity. We’ll do this by adding a `StyledMeasureColumn` for our second measure. Doing this lets us add the option to show the second value on an additional Y-axis, which appears on the right side of the chart.

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [
    measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue),
    {
      column: measureFactory.sum(DM.Fact_Sale_orders.OrderQty),
      showOnRightAxis: true,
    },
  ],
}}
```

That should give you something that looks like this:

![Chart with second Y-axis](../../img/tutorial/2-styled-column.png 'Chart with second Y-axis')

showOnRightAxis: true,
    },
  ],
}}
```

That should give you something that looks like this:

![Chart with second Y-axis](../../img/tutorial/2-styled-column.png 'Chart with second Y-axis')

## Labels

Okay, that’s already a bit better because we can see the quantity data. But it’s still not crystal clear as to which Y-axis belongs to which set of values. And while we’re at it, we can clean up the names of the values in the legend.

We can do this quite easily. First we’ll clean up the legend by adding a name when we create our measures. We’ll do this both times we call the `measureFactory.sum()` function.

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [
    measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue, 'Total Revenue'),
    {
      column: measureFactory.sum(
        DM.Fact_Sale_orders.OrderQty,
        'Total Order Quantity'
      ),
      showOnRightAxis: true,
    },
  ],
}}
```

And we can add labels to the Y-axes using style options.

```ts
styleOptions={{
  width: 1000,
  height: 400,
  yAxis: { title: { enabled: true, text: 'Revenue' } },
  y2Axis: { title: { enabled: true, text: 'Quantity' } },
}}
```

Now you should have a chart that looks like this, including clear axes labels and a cleaned up legend.

![Chart with labels](../../img/tutorial/2-labels.png 'Chart with labels')

::: tip
The code up until this point can be found in branch [2a-chart-data](https://github.com/sisense/compose-sdk-charts-tutorial/tree/2a-chart-data).
:::

utorial/2-labels.png 'Chart with labels')

::: tip
The code up until this point can be found in branch [2a-chart-data](https://github.com/sisense/compose-sdk-charts-tutorial/tree/2a-chart-data).
:::

## Break by

Now let’s turn our attention to the bottom chart on the page. Let’s break down each of the categories in the chart by color.

To do so, all we need to do is add the `dataOptions.breakBy` property to the chart with the attribute we want to break on.

You know the drill by now. We use the imported data model to get the attribute and wrap it in an array.

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue)],
  breakBy: [DM.DimProducts.Color],
}}
```

That should give you a chart that looks like this:

![Chart with break by](../../img/tutorial/2-break-by.png 'Chart with break by')

_orders.OrderRevenue)],
  breakBy: [DM.DimProducts.Color],
}}
```

That should give you a chart that looks like this:

![Chart with break by](../../img/tutorial/2-break-by.png 'Chart with break by')

## Color map

Our chart is looking pretty good except for the incongruity between the column colors and the product colors they’re representing. It would probably be better for blue products to be represented by blue columns instead of purple ones.

We can easily fix this using a series-to-color map. This map does exactly what its name implies. It maps series of data to colors on a chart. In our case, we want each of our product colors to be represented by a corresponding hex color in the chart.

We can do that by adding a `seriesToColorMap` object to our `dataOptions`, where the object’s properties are the series we broke our data by and their values are corresponding color hex codes or [named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color)::

```ts
dataOptions={{
  category: [DM.DimProducts.CategoryName],
  value: [measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue)],
  breakBy: [DM.DimProducts.Color],
  seriesToColorMap: {
    Black: '#1b1b1b',
    Blue: '#0000cd',
    Gold: '#fcc200',
    Red: '#ce2029',
    Silver: '#acacac',
    Yellow: '#eee600'
  },
}}
```

Now our chart should look like this, with the colors matching:

![Chart with color map](../../img/tutorial/2-series-to-color.png 'Chart with color map')

::: tip
The code up until this point can be found in branch [2b-chart-data](https://github.com/sisense/compose-sdk-charts-tutorial/tree/2b-chart-data).
:::

ries-to-color.png 'Chart with color map')

::: tip
The code up until this point can be found in branch [2b-chart-data](https://github.com/sisense/compose-sdk-charts-tutorial/tree/2b-chart-data).
:::

## Up next

By now, you should feel pretty comfortable populating charts with data. In the next lesson you’ll learn how to filter and highlight the chart data. [Go to Lesson 3](./lesson3.md).


<!-- Source: tutorials/tutorial-charts/lesson3.md -->
# Lesson 3 | Filters & Highlights

In this lesson you’ll learn how to filter and highlight data in charts. You’ll learn to work with pre-built filtering components and to build your own filtering experiences.

Let’s start our filtering journey by filtering our charts based on product categories. We’ll do that first by using the pre-built filtering components and then later using our other components.

Before we do that, let’s revert our top chart to only show the sale order revenue, since that’s the only information we’ll be using going forward.

```ts
<Chart
  dataSet={DM.DataSource}
  chartType={'column'}
  dataOptions={{
    category: [DM.DimProducts.CategoryName],
    value: [
      measureFactory.sum(
        DM.Fact_Sale_orders.OrderRevenue,
        'Total Revenue'
      )
    ],
  }}
  styleOptions={{
    width: 1000,
    height: 400,
  }}
/>
```

oryName],
    value: [
      measureFactory.sum(
        DM.Fact_Sale_orders.OrderRevenue,
        'Total Revenue'
      )
    ],
  }}
  styleOptions={{
    width: 1000,
    height: 400,
  }}
/>
```

## Filtering preparation

Before we get to adding any components, let’s set the groundwork for how our filters will work.

To start, we need to add a couple of variables to keep track of our filters. We use a state variable to get and set the category we’re going to filter on. We also use a memoized array to hold the list of filters we’re currently filtering on.

```ts
const [categoryFilter, setCategoryFilter] = useState<Filter | null>(null);
const chartFilters = useMemo(
  () => (categoryFilter ? [categoryFilter] : []),
  [categoryFilter]
);
```

This is a common pattern to use when working with filters. In our case, we’re using only one filter criteria, but this pattern can be extended to using multiple filter criteria. In that case you would add a new state variable for each additional filter criteria and build the single memoized array accordingly.

We’ll start without any filters set, but we could just as easily use our state variable to set an initial filter when the page loads.

ilter criteria and build the single memoized array accordingly.

We’ll start without any filters set, but we could just as easily use our state variable to set an initial filter when the page loads.

## Filter tiles

Now we can add a filter tile to let users change the chart filters. This isn’t going to look too pretty, but let’s just add it like this for now.

```ts
<MemberFilterTile
  title={'Category'}
  dataSource={DM.DataSource}
  attribute={DM.DimProducts.CategoryName}
  filter={categoryFilter}
  onChange={setCategoryFilter}
/>
```

---

We start by giving the filter tile a title so users know what the tile will be filtering on.

```ts
title={'Category'}
```

---

Next, we connect the filter tile to the data source and the attribute it’s going to get its filter criteria from.

```ts
dataSource={DM.DataSource}
attribute={DM.DimProducts.CategoryName}
```

---

Then, we set the filter tile’s current filter. The filter tile itself is showing the category names, so it needs to know which ones are currently filtered and which ones are not.

```ts
filter = { categoryFilter };
```

---

Finally, we set what happens when a user changes the filter criteria using the filter tile. In this case we want to call the function that updates our state variable.

```ts
onChange = { setCategoryFilter };
```

et what happens when a user changes the filter criteria using the filter tile. In this case we want to call the function that updates our state variable.

```ts
onChange = { setCategoryFilter };
```

## Chart filter

The last step is to set our chart filter. To do that all we need to do is set the chart’s `filters` property to the variable holding our filters.

First, let’s do that only on the top chart. So, the top chart, should look like this:

```ts
<Chart
  dataSet={data}
  chartType={'column'}
  dataOptions={{
    category: [DM.DimProducts.CategoryName],
    value: [
      measureFactory.sum(
        DM.Fact_Sale_orders.OrderRevenue,
        'Total Revenue'
      )
    ],
  }}
  filters={chartFilters}
  styleOptions={{
    width: 1000,
    height: 400,
  }}
/>
```

Now you can use the filter tile and see how it filters the top chart.

![Chart with filter tile](../../img/tutorial/3-filter-tile.png 'Chart with filter tile')

## Filtering multiple charts

You can also filter more than one chart using the same filter tiles.

In our case, since all the groundwork is already set, all we need to do is add a `filters` property to the second chart that uses the same filters variable.

```ts
filters = {chartFilters}
```

After adding that code, when you use the filter tile to set a filter, it filters both charts at the same time.

![Two charts with filter](../../img/tutorial/3-double-filter.png 'Two charts with filter')

r adding that code, when you use the filter tile to set a filter, it filters both charts at the same time.

![Two charts with filter](../../img/tutorial/3-double-filter.png 'Two charts with filter')

## Highlighting

Highlighting works similarly to filtering. In fact, we can use just about everything we’ve built to add filtering to our charts to add highlighting instead. You create a highlight by applying a filter. Just keep in mind that when highlighting you can only use filters where the filter attribute matches the grouping of the chart.

In our case, let’s change the filtering in the top chart to highlight instead. To do so, all we need to do is change the `filters` property to a `highlights` property. So now our top chart looks like this:

```ts
<Chart
  dataSet={DM.DataSource}
  chartType={'column'}
  dataOptions={{
    category: [DM.DimProducts.CategoryName],
    value: [
      measureFactory.sum(
        DM.Fact_Sale_orders.OrderRevenue,
        'Total Revenue'
      )
    ],
  }}
  highlights={chartFilters}
  styleOptions={{
    width: 1000,
    height: 400,
  }}
/>
```

After changing that code, when you use the filter tile to set a filter, it highlights in the top chart and filters in the bottom chart.

![Charts with highlight and filter](../../img/tutorial/3-highlight-filter.png 'Charts with highlight and filter')

::: tip
The code up until this point can be found in branch [3a-filters-and-highlights](https://github.com/sisense/compose-sdk-charts-tutorial/tree/3a-filters-and-highlights).
:::

ight and filter')

::: tip
The code up until this point can be found in branch [3a-filters-and-highlights](https://github.com/sisense/compose-sdk-charts-tutorial/tree/3a-filters-and-highlights).
:::

## Custom filtering UI

Now that we’ve seen how to build filtering and highlighting using filter tiles, let’s see what we can do so without the pre-built components.

Of course, filtering is not dependent on the UI of your application. You can perform filtering for all sorts of reasons without any UI at all. But for now, let’s allow our users to filter using a UI, but use a UI of our choosing.

For our UI components, let’s use [Material UI](https://mui.com/material-ui/getting-started/). We’ll need to begin by installing some packages:

```sh
npm install @mui/material @emotion/react @emotion/styled
```

Next, we’ll add a hardcoded array of all our product categories. Really, you’d want to query for this information, but we’re hardcoding it here to make our example a little simpler. So we’ll add this:

```ts
const productCategories = [
  'Bikes',
  'Body Armor',
  'Build Kits',
  'Cables & Housing',
  'Frames',
  'Helmets',
  'Wheels & Wheelsets',
];
```

After that, we’ll change a bit how we store the filter information. This will make it a bit easier to work with our chosen UI elements.

So, whereas before we had a state variable holding a `Filter` object, now we’ll use it to hold an array of strings that we want to filter on.

```ts
// Change this line
const [categoryFilter, setCategoryFilter] = useState<Filter | null>(null);

// To this line
const [categories, setCategories] = useState<string[]>([]);
```

And before where we had a memoized list of filters, now we’ll build our filter from our list of strings to filter on.

```ts
// Change these lines
const chartFilters = useMemo(
  () => (categoryFilter ? [categoryFilter] : []),
  [categoryFilter]
);

// To these lines
const chartFilters = useMemo(
  () =>
    categories
      ? [filterFactory.members(DM.DimProducts.CategoryName, categories)]
      : [],
  [categories]
);
```

We’ve done all that so we can easily work with a Material UI `<ToggleButtonGroup>`. So now let’s replace our filter tile component with a toggle button group.

```ts
<ToggleButtonGroup value={categories} onChange={handleCategoryChange}>
  {productCategories.map((productCategory) => (
    <ToggleButton key={productCategory} value={productCategory}>
      {productCategory}
    </ToggleButton>
  ))}
</ToggleButtonGroup>
```

Here we’re using the toggle button group to work with our `categories` state variable. To create the various toggle buttons, we loop through the array of product categories and create a button for each category.

Now all we have to do is create a function to handle users toggling buttons on and off. This function simply takes the categories set using the toggle buttons and uses them to set the new value of our categories state variable.

```ts
const handleCategoryChange = (
  _event: React.MouseEvent<HTMLElement>,
  newCategories: string[]
) => {
  setCategories(newCategories);
};
```

You can now go back to your charts and see that the functionality is the same, but with the toggle buttons controlling the highlighting and filtering of the charts.

![Toggle button filter](../../img/tutorial/3-toggle-buttons.png 'Toggle button filter')

::: tip
The code up until this point can be found in branch [3b-filters-and-highlights](https://github.com/sisense/compose-sdk-charts-tutorial/tree/3b-filters-and-highlights).
:::

e button filter')

::: tip
The code up until this point can be found in branch [3b-filters-and-highlights](https://github.com/sisense/compose-sdk-charts-tutorial/tree/3b-filters-and-highlights).
:::

## Up next

At this point, you should know how to display the data you want in a chart and work with the way that data is displayed. In the next lesson you’ll learn how to take a bit more control of how a chart behaves. [Go to Lesson 4](./lesson4.md).


<!-- Source: tutorials/tutorial-charts/lesson4.md -->
# Lesson 4 | Callbacks

Chart callbacks are functions that run when specific events happen to a chart. You can use these callbacks to change the look and feel of a chart as well as add functionality to a chart.

Callbacks

Chart callbacks are functions that run when specific events happen to a chart. You can use these callbacks to change the look and feel of a chart as well as add functionality to a chart.

## Before render

One of the events you can handle with a callback occurs just before a chart is ready to render. You can use this event to change the underlying chart options. Compose SDK uses the [Highcharts](https://www.highcharts.com/) charting library under the hood. You can use the `HighchartsOptions` object sent to the `onBeforeRender()` callback to change the chart options.

In our project, let’s change the way our charts display tooltips when a user hovers over one of the chart’s columns. To do that, let’s start by adding this callback to the top chart’s properties.

```ts
onBeforeRender={(options: HighchartsOptions) => {
  if (options.tooltip) {
    options.tooltip.formatter = function () {
      const value = (
        this.y && this.y !== 0 ? this.y / 1000 : 0
      ).toFixed(1);
      return `${this.x}: <b>${value}K</b>`;
    };
  }
  return options;
}}
```

Here you can see that the callback function receives the `HighchartsOptions` object. Our function manipulates that object and then returns the changed object to be used as the chart’s options.

In our case, we check if our chart has a tooltip. If it does, we add a formatter function to define the contents of the tooltip. Here we take the raw Y-value and divide it by 1000, keeping one digit after the decimal. Then we return a string literal with the format we want for our condensed tooltip.

When users hover over a chart now, they’ll see the tooltip on the right in the image below instead of the one on the left.

![Chart with tooltips](../../img/tutorial/4-tooltips.png 'Chart with tooltips')

We can do something similar for the bottom chart. But since that chart is broken down further, let’s add some additional information to the tooltip by adding this callback.

```ts
onBeforeRender={(options: HighchartsOptions) => {
  if (options.tooltip) {
    options.tooltip.formatter = function () {
      const value = (
        this.y && this.y !== 0 ? this.y / 1000 : 0
      ).toFixed(1);
      return `${this.x} - ${this.series.name}: <b>${value}K</b>`;
    };
  }
  return options;
}}
```

This is very similar to the callback that we added to the top chart. The difference here is that we’ve added the series name to the formatter function, which results in a tooltip that looks like this:

![Chart with custom tooltip](../../img/tutorial/4-tooltip-break.png 'Chart with custom tooltip')

::: tip
The code up until this point can be found in branch [4a-callbacks](https://github.com/sisense/compose-sdk-charts-tutorial/tree/4a-callbacks).
:::

ltip-break.png 'Chart with custom tooltip')

::: tip
The code up until this point can be found in branch [4a-callbacks](https://github.com/sisense/compose-sdk-charts-tutorial/tree/4a-callbacks).
:::

## Data point click

In addition to the before render callback, there are other callbacks you can use to handle user interactions with a chart. To see how to use these, we’ll build an interaction that happens when a user clicks a data point.

In our project, we’ll add a handler to the top chart that handles clicks on the data columns. When a user clicks one of the columns, we’ll use a handler to toggle the highlighting of that column in the top chart and the filtering of that group in the bottom chart. While we’re at it, we’ll have the click also toggle the corresponding toggle button on or off.

To do that, let’s add this callback to the top chart’s properties.

```ts
onDataPointClick={(point: DataPoint) => {
  const category = point.categoryValue as string;
  setCategories((categories) =>
    categories.includes(category)
      ? categories.filter((item) => item !== (category as string))
      : [...categories, category as string]
  );
}}
```

Here, the callback gets the current category that was clicked. It then checks if the clicked category is already in the array of categories we store in our state variable. If the clicked category is already in the array, we remove it. If the clicked category is not yet in the list, we add it. Since we’re using the same array as the toggle buttons, clicking on the categories in the charts, will also affect which toggle buttons are selected.

::: tip
The code up until this point can be found in branch [4b-callbacks](https://github.com/sisense/compose-sdk-charts-tutorial/tree/4b-callbacks).
:::

o affect which toggle buttons are selected.

::: tip
The code up until this point can be found in branch [4b-callbacks](https://github.com/sisense/compose-sdk-charts-tutorial/tree/4b-callbacks).
:::

## Up next

At this point, you’ve learned the basics of working with charts and their properties. In the next lesson, you’ll learn how to dynamically change the data displayed in a chart and the layout of the chart itself. [Go to Lesson 5](./lesson5.md).


<!-- Source: tutorials/tutorial-charts/lesson5.md -->
# Lesson 5 | Dynamic Charts

One of the main advantages to creating charts in code, is that you can build them and manipulate them dynamically with code.

In this lesson we change our charts dynamically in a couple of ways. First, we’ll add functionality so our users can change what dimension the bottom chart is broken down by. Then, we also let users decide if they want to see the chart data in a column chart, as we’ve been presenting it until now, or as a bar chart.

These are only some examples of how you can dynamically change a chart. You can, of course, choose to change just about anything in a chart dynamically.

presenting it until now, or as a bar chart.

These are only some examples of how you can dynamically change a chart. You can, of course, choose to change just about anything in a chart dynamically.

## Dynamic break by

Let’s start by adding a way for users to change the break down of the bottom chart.

To start off this process, we need to add a new state variable that will track which dimension we want to break by. Here we set it to default to color.

```ts
const [breakBy, setBreakBy] = useState('color');
```

Next, we need another toggle button group. We’ll add this one so it appears under the bottom chart. To keep things simple, we hard code the different choices we want to let users break the chart by.

```ts
<ToggleButtonGroup value={breakBy} onChange={handleBreakChange} exclusive>
  <ToggleButton key={'color'} value={'color'}>
    Color
  </ToggleButton>
  <ToggleButton key={'region'} value={'region'}>
    Region
  </ToggleButton>
  <ToggleButton key={'manager'} value={'manager'}>
    Team Manager
  </ToggleButton>
</ToggleButtonGroup>
```

Now we need to add a function to handle changes to the toggle button group. All this function needs to do is to set the state variable that tracks what we’re currently breaking our chart by.

```ts
const handleBreakChange = (
    _event: React.MouseEvent<HTMLElement>,
    newBreak: string
) => {
    setBreakBy(newBreak);
};
```

After setting all that up, we need to apply the changes in state to our chart. But before we do that, we’ll need to add a utility function to change the the state variable value, which is stored as a string, to a dimension from our imported data model.

```ts
const breakStringToColumn = (breakString: string) => {
  if (breakString === 'manager') {
    return DM.DimEmployees.TeamManager;
  } else if (breakString === 'region') {
    return DM.DimCountries.Region;
  } else {
    return DM.DimProducts.Color;
  }
};
```

Then we call that function and pass it the `breakBy` state variable to dynamically assign the dimension we want to break by in the bottom charts `breakBy` property.

```ts
breakBy: [breakStringToColumn(breakBy)],
```

Finally, to finish things off we can add another couple of values to the mapping of the data series to colors. Here we add mappings for the series we get when breaking by region.

```ts
seriesToColorMap: {
  Black: '#1b1b1b',
  Blue: '#0000cd',
  Gold: '#fcc200',
  Red: '#ce2029',
  Silver: '#acacac',
  Yellow: '#eee600',
  USA: '#00008b',
  Europe: '#dc143c',
},
```

::: tip
The code up until this point can be found in branch [5a-dynamic-charts](https://github.com/sisense/compose-sdk-charts-tutorial/tree/5a-dynamic-charts).
:::

08b',
  Europe: '#dc143c',
},
```

::: tip
The code up until this point can be found in branch [5a-dynamic-charts](https://github.com/sisense/compose-sdk-charts-tutorial/tree/5a-dynamic-charts).
:::

## Dynamic chart type

For the final feature of this tutorial, we’ll let users decide what type of chart they want use to view the data. A lot of what we need to do should be familiar to you already.

We start by adding another state variable to track the current chart type.

```ts
const [chartType, setChartType] = useState<ChartType>('column');
```

Next, we’ll add another toggle button group for users to make their choices. But this time we’ll use icons in our buttons. So first we need to install the Material UI icons by running the following command:

```sh
npm install @mui/icons-material
```

Then, we can add the toggle button group. Here we’ll use two bar chart icons, which actually depict Compose SDK column charts. So we rotate the second icon 90 degrees to look like a Compose SDK bar chart. Let's add this group between the two charts.

```ts
<ToggleButtonGroup value={chartType} onChange={handleTypeChange} exclusive>
  <ToggleButton key={'column'} value={'column'}>
    <BarChartIcon />
  </ToggleButton>
  <ToggleButton key={'bar'} value={'bar'}>
    <BarChartIcon style={{ transform: 'rotate(90deg)' }} />
  </ToggleButton>
</ToggleButtonGroup>
```

After that, we add a simple handler function that handles changes to the toggle button group by updating the the state variable that tracks the chart type.

```ts
const handleTypeChange = (
  _event: React.MouseEvent<HTMLElement>,
  newType: ChartType
) => {
  if (newType) setChartType(newType);
};
```

Finally, we can go to both of our charts and update their chart types to read from the `chartType` state variable instead of a hardcoded string.

```ts
chartType = {chartType}
```

Now you can go back to your charts and use the toggle button to change the chart types.

::: tip
The code up until this point can be found in branch [5b-dynamic-charts](https://github.com/sisense/compose-sdk-charts-tutorial/tree/5b-dynamic-charts).
:::

button to change the chart types.

::: tip
The code up until this point can be found in branch [5b-dynamic-charts](https://github.com/sisense/compose-sdk-charts-tutorial/tree/5b-dynamic-charts).
:::

## The end

That concludes our tutorial. You now have a great foundation to go out and integrate Compose SDK into your own projects.


<!-- Source: tutorials/tutorial-genai/index.md -->
# Tutorial

In this tutorial, we’ll walk you through the setup and customization of the Compose SDK Generative AI components.

::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

## What you'll learn

Along the way, you’ll learn how to:

- Setup a new project to work with Compose SDK
- Render chatbots and customize them
- Display natural language textual insights from a query

## Get started

Let's get started by setting up a Compose SDK project with your first Generative AI component, the `Chatbot`. Go to [Lesson 1](./lesson1.md).


<!-- Source: tutorials/tutorial-genai/lesson1.md -->
# Lesson 1 | Setup

In this lesson, you’ll learn how to set up a new Compose SDK project and display a chatbot in that project. If you've gone through the Charts Tutorial, you'll notice that it's similar to [Lesson 1](../tutorial-charts/lesson1.md).

w to set up a new Compose SDK project and display a chatbot in that project. If you've gone through the Charts Tutorial, you'll notice that it's similar to [Lesson 1](../tutorial-charts/lesson1.md).

## Prerequisites

Before getting started, you’ll need:

- Node.js version 16 or higher
- npm

You’ll also need access to a Sisense instance with:

- The Sample Retail and Sample ECommerce data sources (you may need to go into each data model and unhide some of the columns that are hidden by default)
- An [API Token](../../getting-started/authentication-security.md#api-token) you can use to query with
- [CORS settings](../../getting-started/authentication-security.md#set-up-cors) that allow requests from `http://localhost:5173`, the URL that Vite serves your project on locally
- [GenAI enabled](https://docs.sisense.com/main/SisenseLinux/genai.htm#EnablingGenAI)

## Create a project

Let’s start by creating a React project and installing dependencies. We’ll use Vite to create a new project.

1. Navigate to the directory where you want to create your project
1. Run `npm create vite@latest`
1. Name your project `compose-sdk-genai-tutorial` when prompted
1. Select `React` as the framework
1. Select `TypeScript` as the variant
1. Run `cd compose-sdk-genai-tutorial` to navigate to your project directory
1. Run `npm install` to install your project and dependencies
1. Run `npm i @sisense/sdk-ui @sisense/sdk-data` to install Sisense packages

e-sdk-genai-tutorial` to navigate to your project directory
1. Run `npm install` to install your project and dependencies
1. Run `npm i @sisense/sdk-ui @sisense/sdk-data` to install Sisense packages

## Add context providers

Now we can start writing our first bit of code.

Since most of our Compose SDK functionality needs access to a Sisense instance, the first thing we need to do is set up that access with `<SisenseContextProvider>`. There are a number of places you can choose to add it. Here, we’ll add the provider in `main.tsx`.

In `main.tsx`, import the `SisenseContextProvider` from the `sdk-ui` module:

```ts
import { SisenseContextProvider } from '@sisense/sdk-ui';
```

Wrap the `<App>` component with a `<SisenseContextProvider>` like this:

```ts
<SisenseContextProvider
  url={import.meta.env.VITE_APP_SISENSE_URL}
  token={import.meta.env.VITE_APP_SISENSE_TOKEN}
>
  <App />
</SisenseContextProvider>
```

This will read the Sisense instance URL and API Token from an `.env`, so let’s add that file now.

1. Create a file named `.env.local` in your project’s root directory
1. Add a `VITE_APP_SISENSE_URL` variable and set its value to your Sisense instance’s URL
1. Add a `VITE_APP_SISENSE_TOKEN` variable and set it value to your API Token

Your `.env.local` file should look something like this:

```
VITE_APP_SISENSE_URL="http://myinstanceurl/"
VITE_APP_SISENSE_TOKEN="OiJhbGJeyciIUzI1..."
```

You'll also need the `<AiContextProvider>`. This is required for using any of the components exported from `@sisense/sdk-ui/ai`.

In `main.tsx`, import the `SisenseContextProvider` from the `sdk-ui/ai` namespace:

```ts
import { AiContextProvider } from '@sisense/sdk-ui/ai';
```

This component internally uses the `SisenseContextProvider`, so we'll go ahead and nest this provider in between our `<SisenseContextProvider>` and `<App>` components.

```ts
<SisenseContextProvider
  url={import.meta.env.VITE_APP_SISENSE_URL}
  token={import.meta.env.VITE_APP_SISENSE_TOKEN}
>
  <AiContextProvider>
    <App />
  </AiContextProvider>
</SisenseContextProvider>
```

ContextProvider
  url={import.meta.env.VITE_APP_SISENSE_URL}
  token={import.meta.env.VITE_APP_SISENSE_TOKEN}
>
  <AiContextProvider>
    <App />
  </AiContextProvider>
</SisenseContextProvider>
```

## Add a chatbot

Finally, with all the setup out of the way, we can add a chatbot to our project.

In the `App.tsx` file, import the `<Chatbot>` component.

Note: From here on in we won’t mention imports anymore. Just know that you’ll need to add the appropriate imports as we continue to add code to our project.

```ts
import { Chatbot } from '@sisense/sdk-ui/ai';
```

Then, replace the contents of the `App()` function with the following code to render a basic chatbot.

```ts
return (
  <Chatbot />
);
```

## Run

Use the `npm run dev` command to get your project up and running so you can see it in action.
Navigate to `http://localhost:5173` in a browser to see your chatbot. It should look like this:

![First chatbot](../../img/tutorial-genai/1-first-chatbot.png 'First chatbot')

Nice! We now have a chatbot that shows available data topics. Clicking on a data topic will start a chat with that data model/perspective as the chat context.

## Up next

In the next lesson, you'll learn how to customize the chatbot and render multiple chatbots on the same page. [Go to Lesson 2](./lesson2.md).


<!-- Source: tutorials/tutorial-genai/lesson2.md -->

xt

In the next lesson, you'll learn how to customize the chatbot and render multiple chatbots on the same page. [Go to Lesson 2](./lesson2.md).


<!-- Source: tutorials/tutorial-genai/lesson2.md -->
# Lesson 2 | Chatbot Customization

In this lesson, you'll learn how to customize your chatbot's behavior and look-and-feel. You'll learn how to display multiple chatbot instances.

ai/lesson2.md -->
# Lesson 2 | Chatbot Customization

In this lesson, you'll learn how to customize your chatbot's behavior and look-and-feel. You'll learn how to display multiple chatbot instances.

## Modify chatbot behavior

Let's start by adding some specific options to our current chatbot.

```ts
return (
  <Chatbot
    width="600px"
    height="600px"
    config={{
      defaultContextTitle: "Sample Retail",
      suggestionsWelcomeText: false,
      welcomeText: false,
    }}
  />
);
```

This resizes the chatbot, hides some text content, and skips the data topics screen by setting the default chat context to be "Sample Retail". Your app should now look like this:

![Custom chatbot](../../img/tutorial-genai/2-custom-chatbot.png 'Custom chatbot')

Let's change the look and feel of the chatbot and give it a dark theme. We'll need to wrap the chatbot in a `ThemeProvider`.

```ts
return (
  <ThemeProvider
    theme={{
      typography: {
        fontFamily: "Arial",
      },
      aiChat: {
        backgroundColor: "#121212",
        primaryTextColor: "#E5E7EB",
        userMessages: {
          backgroundColor: "#1E3A8A",
        },
        systemMessages: {
          backgroundColor: "#1F2937",
        },
        input: {
          backgroundColor: "#1C1C1E",
        },
        header: {
          textColor: "#E5E7EB",
          backgroundColor: "#0D1B2A",
        },
        suggestions: {
          textColor: "#E5E7EB",
          backgroundColor: "#1F2937",
          hover: {
            textColor: "#E5E7EB",
          },
        },
        clickableMessages: {
          textColor: "#E5E7EB",
          backgroundColor: "#1F2937",
          hover: {
            textColor: "#E5E7EB",
          },
        },
        icons: {
          color: "#FFFFFF",
        },
      },
    }}
  >
    <Chatbot
      width="600px"
      height="600px"
      config={{
        defaultContextTitle: "Sample Retail",
        suggestionsWelcomeText: false,
        welcomeText: false,
      }}
    />
  </ThemeProvider>
);
```

Your chatbot should now look something like this:

![Themed chatbot](../../img/tutorial-genai/2-themed-chatbot.png 'Themed chatbot')

welcomeText: false,
      }}
    />
  </ThemeProvider>
);
```

Your chatbot should now look something like this:

![Themed chatbot](../../img/tutorial-genai/2-themed-chatbot.png 'Themed chatbot')

## Multiple chatbots

It'd be nice to have 2 chatbots side-by-side, pointing to different contexts. Let's render another chatbot that uses Sample ECommerce as its default model.

```ts
return (
  <div style={{ display: "flex", columnGap: "20px" }}>
    <ThemeProvider
      theme={{
        // ...
      }}
    >
      <Chatbot
        width="600px"
        height="600px"
        config={{
          defaultContextTitle: "Sample Retail",
          suggestionsWelcomeText: false,
          welcomeText: false,
        }}
      />
    </ThemeProvider>
    <Chatbot
      width="600px"
      height="600px"
      config={{
        defaultContextTitle: "Sample ECommerce",
      }}
    />
  </div>
);
```

With this code, the two chatbots are spaced apart on the same row. The Sample ECommerce chatbot is configured with the default behavior and styling.

![Multiple chatbots](../../img/tutorial-genai/2-multiple-chatbots.png 'Multiple chatbots')

d apart on the same row. The Sample ECommerce chatbot is configured with the default behavior and styling.

![Multiple chatbots](../../img/tutorial-genai/2-multiple-chatbots.png 'Multiple chatbots')

## Code sample

Here's the complete `App.tsx` file after the past two lessons.

```ts
import { ThemeProvider } from '@sisense/sdk-ui';
import { Chatbot } from '@sisense/sdk-ui/ai';

function App() {
  return (
    <div style={{ display: "flex", columnGap: "20px" }}>
      <ThemeProvider
        theme={{
          typography: {
            fontFamily: "Arial",
          },
          aiChat: {
            backgroundColor: "#121212",
            primaryTextColor: "#E5E7EB",
            userMessages: {
              backgroundColor: "#1E3A8A",
            },
            systemMessages: {
              backgroundColor: "#1F2937",
            },
            input: {
              backgroundColor: "#1C1C1E",
            },
            header: {
              textColor: "#E5E7EB",
              backgroundColor: "#0D1B2A",
            },
            suggestions: {
              textColor: "#E5E7EB",
              backgroundColor: "#1F2937",
              hover: {
                textColor: "#E5E7EB",
              },
            },
            clickableMessages: {
              textColor: "#E5E7EB",
              backgroundColor: "#1F2937",
              hover: {
                textColor: "#E5E7EB",
              },
            },
            icons: {
              color: "#FFFFFF",
            },
          },
        }}
      >
        <Chatbot
          width="600px"
          height="600px"
          config={{
            defaultContextTitle: "Sample Retail",
            suggestionsWelcomeText: false,
            welcomeText: false,
          }}
        />
      </ThemeProvider>
      <Chatbot
        width="600px"
        height="600px"
        config={{
          defaultContextTitle: "Sample ECommerce",
        }}
      />
    </div>
  );
}

export default App;
```

vider>
      <Chatbot
        width="600px"
        height="600px"
        config={{
          defaultContextTitle: "Sample ECommerce",
        }}
      />
    </div>
  );
}

export default App;
```

## Up next

In the next lesson, you’ll learn how to display natural language textual insights from a query using Compose SDK. [Go to Lesson 3](./lesson3.md).


<!-- Source: tutorials/tutorial-genai/lesson3.md -->
# Lesson 3 | NLG

In this lesson, we'll use Compose SDK to show natural language insights from a query. We won't be building on the code from the previous lessons, so feel free to create a new file for this lesson.

## Generate data model

To define a query using Compose SDK, we’ll first need to generate a TypeScript representation of the data model. We'll do this using the Compose SDK CLI tool for the Sample Retail model.

To generate the data model:

1. Create a folder in the `src` directory of you project named `models`
1. Run the following command

```sh
npx @sisense/sdk-cli@latest get-data-model --token <api-token> --output src/models/sample-retail.ts --dataSource "Sample Retail" --url <your-instance-url>
```

Be sure to replace the placeholders with your API token and the URL of your Sisense instance.

-token> --output src/models/sample-retail.ts --dataSource "Sample Retail" --url <your-instance-url>
```

Be sure to replace the placeholders with your API token and the URL of your Sisense instance.

## Add a chart

We'll assume you already know about how charts work, but if you don't, check out [Lesson 1](../tutorial-charts/lesson1.md#add-a-chart) from the Charts Tutorial for more information on anything that's confusing here.

We'll use the empty `App` component again as an example, but feel free to give your component a different name.

Go ahead and add the following to render a chart.

```ts
import { Chart } from "@sisense/sdk-ui";
import { measureFactory } from "@sisense/sdk-data";
import * as DM from "./models/sample-retail";

function App() {
  const dimensions = [DM.DimProducts.CategoryName];
  const measures = [
    measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue),
    measureFactory.sum(DM.Fact_Sale_orders.OrderQty),
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        width: 1000,
      }}
    >
      <Chart
        dataSet={DM.DataSource}
        chartType={"column"}
        dataOptions={{
          category: dimensions,
          value: [
            measures[0],
            {
              column: measures[1],
              showOnRightAxis: true,
            },
          ],
        }}
        styleOptions={{
          height: 400,
        }}
      />
    </div>
  );
}

export default App;
```

This should be the result:

![Chart](../../img/tutorial-genai/3-chart.png 'Chart')

}}
        styleOptions={{
          height: 400,
        }}
      />
    </div>
  );
}

export default App;
```

This should be the result:

![Chart](../../img/tutorial-genai/3-chart.png 'Chart')

## Add NLG

Let's supplement this chart with some insights using Sisense's natural language generation (NLG) API. We'll add the `GetNlgInsights` component underneath the chart we just made.

```ts
<Chart
  // ...
/>
<GetNlgInsights
  dataSource={DM.DataSource}
  dimensions={dimensions}
  measures={measures}
>
```

The props into the `GetNlgInsights` component are pretty similar to what is passed into the `ExecuteQuery` component. The difference is that we're getting text in natural language instead of tabular data as a result.

Depending on how your LLM is configured, the text output might be a little different, but it should look something like this:

![Chart with summary](../../img/tutorial-genai/3-chart-with-summary.png 'Chart with summary')

LLM is configured, the text output might be a little different, but it should look something like this:

![Chart with summary](../../img/tutorial-genai/3-chart-with-summary.png 'Chart with summary')

## Format NLG output

We want to highlight key text from the NLG output, like any numbers or quantities that might appear. To do this, it might be easier to switch to the `useGetNlgInsights` hook, which will just give us a plain string without the container.

Let's go ahead and add the hook right after where we define our `dimensions` and `measures` variables.

```ts
const dimensions = [DM.DimProducts.CategoryName];
const measures = [
  measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue),
  measureFactory.sum(DM.Fact_Sale_orders.OrderQty),
];
const { data } = useGetNlgInsights({
  dataSource: DM.DataSource,
  dimensions,
  measures,
})
```

The `useGetNlgInsights` hook expects the exact same props as the `GetNlgInsights` component.

Let's format the data and then render it right underneath our `GetNlgInsights` hook.

```ts
const { data } = useGetNlgInsights({
  dataSource: DM.DataSource,
  dimensions,
  measures,
})

let summaryMarkup;
if (data) {
  summaryMarkup = {
    __html: data.replace(/(\d+)/g, "<b>$1</b>"),
  };
}

return (
  <div /* ... */>
    <Chart
      // ...
    />
    <GetNlgInsights
      // ...
    />
    {summaryMarkup && <div dangerouslySetInnerHTML={summaryMarkup} />}
  </div>
)
```

It's not the cleanest code, but we've effectively made all digits in the text summary bold, so here's the expected result:

![Chart with formatted summary](../../img/tutorial-genai/3-chart-with-formatted-summary.png 'Chart with formatted summary')

made all digits in the text summary bold, so here's the expected result:

![Chart with formatted summary](../../img/tutorial-genai/3-chart-with-formatted-summary.png 'Chart with formatted summary')

## Code sample

Here's the complete `App.tsx` file with all the code we've written in this lesson.

```ts
import { Chart } from "@sisense/sdk-ui";
import { GetNlgInsights, useGetNlgInsights } from "@sisense/sdk-ui/ai";
import { measureFactory } from "@sisense/sdk-data";
import * as DM from "./models/sample-retail";

function App() {
  const dimensions = [DM.DimProducts.CategoryName];
  const measures = [
    measureFactory.sum(DM.Fact_Sale_orders.OrderRevenue),
    measureFactory.sum(DM.Fact_Sale_orders.OrderQty),
  ];
  const { data } = useGetNlgInsights({
    dataSource: DM.DataSource,
    dimensions,
    measures,
  });

  let summaryMarkup;
  if (data) {
    summaryMarkup = {
      __html: data.replace(/(\d+)/g, "<b>$1</b>"),
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        width: 1000,
      }}
    >
      <Chart
        dataSet={DM.DataSource}
        chartType={"column"}
        dataOptions={{
          category: dimensions,
          value: [
            measures[0],
            {
              column: measures[1],
              showOnRightAxis: true,
            },
          ],
        }}
        styleOptions={{
          height: 400,
        }}
      />
      <GetNlgInsights
        dataSource={DM.DataSource}
        dimensions={dimensions}
        measures={measures}
      />
      {summaryMarkup && <div dangerouslySetInnerHTML={summaryMarkup} />}
    </div>
  );
}

export default App;
```


================================================================================

{summaryMarkup && <div dangerouslySetInnerHTML={summaryMarkup} />}
    </div>
  );
}

export default App;
```


================================================================================

# Drilldown

Drilling down on a chart allows your users to see more detailed data by selecting a dimension to drill down on. This enables them to examine complex datasets in a more manageable and intuitive way.

With Compose SDK you can create a drilldown experience using the charts in the `sdk-ui-*` modules:

![Drilldown with Compose SDK chart](../../img/drilldown-guide/csdk-context-menu.png 'Drilldown with Compose SDK chart')

You can also create a drilldown experience using third party charts:

![Drilldown with third party chart](../../img/drilldown-guide/plotly-csdk-context-menu.png 'Drilldown with third party chart')

With both types of charts, you can use the built in drilldown-related components to show drilldown context menus and drilldown breadcrumbs:

![Drilldown with Compose SDK components](../../img/drilldown-guide/csdk-components.png 'Drilldown with Compose SDK components')

Or you can provide your own custom context menu and breadcrumbs components:

![Drilldown with custom components](../../img/drilldown-guide/custom-components.png 'Drilldown with custom components')

If you're new to drilldown charts, start by learning how to create a [simple drilldown chart](./guide-1-simple-drilldown.md).

<SectionIndex />


<!-- Source: guides/drilldown/guide-1-simple-drilldown.md -->

e new to drilldown charts, start by learning how to create a [simple drilldown chart](./guide-1-simple-drilldown.md).

<SectionIndex />


<!-- Source: guides/drilldown/guide-1-simple-drilldown.md -->
# 1 | Simple Drilldown Chart

To create a drilldown experience on a Compose SDK chart, you need to wrap the chart inside a `<DrilldownWidget>`.

The `<DrilldownWidget>` component allows you to specify which dimensions can be used to drill down on and adds the following functionality to your chart:

- A context menu for initiating drilldown actions
- Breadcrumbs that allow for navigating the drilldown hierarchy and clearing the current drilldown selection
- Filters for the drilldown operation

## Chart

To demonstrate how to add a drilldown experience to a Compose SDK chart, let's start with this simple column chart:

![Column chart](../../img/drilldown-guide/plain-chart.png 'Column chart')

```ts
<Chart
  chartType="column"
  dataSet={DM.DataSource}
  dataOptions={{
    category: [DM.Commerce.AgeRange],
    value: [measureFactory.sum(DM.Commerce.Revenue)],
  }}
/>
```

'Column chart')

```ts
<Chart
  chartType="column"
  dataSet={DM.DataSource}
  dataOptions={{
    category: [DM.Commerce.AgeRange],
    value: [measureFactory.sum(DM.Commerce.Revenue)],
  }}
/>
```

## Drilldown Widget

Once you have a chart that you want to add a drilldown experience to, you need to wrap the chart in a `<DrilldownWidget>` and provide it with:

- `initialDimension`: The initial dimension that the wrapped chart will show
- `drilldownDimensions`: List of drilldown options that users can choose to drill down on

The widget then provides the chart with:

- Drilldown results in the form of the `drilldownDimension` and `drilldownFilters` to apply to the chart
- Functions for handling the selection of data points (`onDataPointsSelected`) and the showing of the drilldown context menu (`onContextMenu`)

For example, wrapping a chart in a `<DrilldownWidget>` may look something like this:

```ts
<DrilldownWidget
  initialDimension={DM.Commerce.AgeRange}
  drilldownDimensions={
    [DM.Commerce.Gender,
    DM.Commerce.Condition,
    DM.Category.Category
  ]}
>
  {({ drilldownDimension, drilldownFilters, onDataPointsSelected, onContextMenu }) => (
      <Chart
      // Chart properties go here
      />
  )}
</DrilldownWidget>
```

Here you can see that the `initialDimension` is set to be **Age Range**, as it was in the chart before adding drilldown functionality. Also, the `drilldownDimensions` is set to a list of the drilldown options. In this case, users can drill down on the **Gender**, **Condition**, and **Category** dimensions.

drilldown functionality. Also, the `drilldownDimensions` is set to a list of the drilldown options. In this case, users can drill down on the **Gender**, **Condition**, and **Category** dimensions.

## Apply to Chart

After wrapping the chart in a `<DrilldownWidget>`, you need to pass the control to the wrapper so the chart can be modified based on drilldown actions.

That means you need to:

- Switch out the chart's static `category` for the `drilldownDimension` from the `<DrilldownWidget>`
- Add a `filters` property to the chart with the value being the `drilldownFilters` from the `<DrilldownWidget>`
- Use the `onDataPointsSelected` and `onContextMenu` functions from the `<DrilldownWidget>` to provide the wrapper with the selected data and context menu position (typically, this is done using chart event callbacks, such as `onDataPointsSelected` and `onDataPointClick`)

That should leave you with code that looks something like this:

```ts
<DrilldownWidget
  initialDimension={DM.Commerce.AgeRange}
  drilldownDimensions={[
    DM.Commerce.Gender,
    DM.Commerce.Condition,
    DM.Category.Category
  ]}
>
  {({ drilldownFilters, drilldownDimension, onDataPointsSelected, onContextMenu }) => (
    <Chart
      chartType="column"
      dataSet={DM.DataSource}
      dataOptions={{
        category: [drilldownDimension],
        value: [measureFactory.sum(DM.Commerce.Revenue)],
      }}
      filters={drilldownFilters}
      onDataPointsSelected={(points: DataPoint[], nativeEvent: MouseEvent) => {
        onDataPointsSelected(points, nativeEvent);
        onContextMenu({
          left: nativeEvent.clientX,
          top: nativeEvent.clientY,
        });
      }}
      onDataPointClick={(point: DataPoint, nativeEvent: MouseEvent) => {
        onDataPointsSelected([point], nativeEvent);
        onContextMenu({
          left: nativeEvent.clientX,
          top: nativeEvent.clientY,
        });
      }}
    />
  )}
</DrilldownWidget>
```

onDataPointsSelected([point], nativeEvent);
        onContextMenu({
          left: nativeEvent.clientX,
          top: nativeEvent.clientY,
        });
      }}
    />
  )}
</DrilldownWidget>
```

## Results

At this point, you have a chart that you can drill down on. You can start the drilldown process by either clicking a a data point or selecting a number of data points.

For example, if you click on the 35-44 age range, you get a context menu with the drilldown category options you set in your code.

![Drilldown context menu](../../img/drilldown-guide/csdk-context-menu.png 'Drilldown context menu')

If you then click on a drilldown category, such as **Condition**, the chart updates accordingly. Note the breadcrumbs above the chart that indicate the current drilldown status.

![Drill down condition](../../img/drilldown-guide/drilldown-condition.png 'Drill down condition')

You can then continue to drill down. For example, you can click on the **Used** column and drill down on **Category**.

![Drill down again](../../img/drilldown-guide/csdk-components.png 'Drill down again')

As you drill down, the breadcrumbs keep track of the actions you've performed. You can use the breadcrumbs to go back up some of your drill hierarchy or to clear all the drilling down to return to the original chart.

the breadcrumbs keep track of the actions you've performed. You can use the breadcrumbs to go back up some of your drill hierarchy or to clear all the drilling down to return to the original chart.

## Next Up

In this section you learned how to create a drilldown experience using Compose SDK components. In the next section, you'll see how to customize the look and feel of a drilldown chart by providing custom context menu.

Go to the [next lesson](./guide-2-custom-context-menu.md).

SDK components. In the next section, you'll see how to customize the look and feel of a drilldown chart by providing custom context menu.

Go to the [next lesson](./guide-2-custom-context-menu.md).

## Full Code

For your convenience, here is the full code for the simple drilldown chart:

```ts
import * as DM from '../sample-ecommerce';
import { Chart, DataPoint, DrilldownWidget } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';

export const DrilldownChart = () => {
  return (
    <DrilldownWidget
        initialDimension={DM.Commerce.AgeRange}
        drilldownDimensions={[DM.Commerce.Gender, DM.Commerce.Condition, DM.Category.Category]}
    >
      {({ drilldownDimension, drilldownFilters, onDataPointsSelected, onContextMenu }) => (
        <Chart
          chartType="column"
          dataSet={DM.DataSource}
          dataOptions={{
            category: [drilldownDimension],
            value: [measureFactory.sum(DM.Commerce.Revenue)],
          }}
          filters={drilldownFilters}
          onDataPointsSelected={(points: DataPoint[], nativeEvent: MouseEvent) => {
            onDataPointsSelected(points, nativeEvent);
            onContextMenu({
                left: nativeEvent.clientX,
                top: nativeEvent.clientY,
            });
          }}
          onDataPointClick={(point: DataPoint, nativeEvent: MouseEvent) => {
            onDataPointsSelected([point], nativeEvent);
            onContextMenu({
                left: nativeEvent.clientX,
                top: nativeEvent.clientY,
            });
          }}
          styleOptions={{ width: 750 }}
        />
      )}
    </DrilldownWidget>
  );
};
```



<!-- Source: guides/drilldown/guide-2-custom-context-menu.md -->

lientY,
            });
          }}
          styleOptions={{ width: 750 }}
        />
      )}
    </DrilldownWidget>
  );
};
```



<!-- Source: guides/drilldown/guide-2-custom-context-menu.md -->
# 2 | Custom Context Menu

In this section, you'll learn how to customize the look and feel of a drilldown chart by providing a custom context menu.

You can use any components of you choose as the basis for a custom context menu. In this guide, we use the [Material UI Menu component](https://mui.com/material-ui/react-menu/) as the basis for the custom context menu.

## Props

A context menu has the following properties:

- `position`: The position at which to display the context menu
- `itemsSections`: The items for the context menu, organized by section (more on this below)
- `children`: Additional content, if there is any, to be displayed at the bottom of the context menu
- `closeContextMenu`: Function to run when the context menu is closed

So the first step in creating a custom context menu is to create a component with these properties:

```ts
export const CustomContextMenu = ({
  position,
  itemSections,
  children,
  closeContextMenu
}: ContextMenuProps) => {
    // Component code goes here
};
```

omponent with these properties:

```ts
export const CustomContextMenu = ({
  position,
  itemSections,
  children,
  closeContextMenu
}: ContextMenuProps) => {
    // Component code goes here
};
```

## Menu Component

Next, you can start to apply some of these properties in your component code:

- Use `position` to determine if the context menu is open and to place it in the correct location
- Use `closeContextMenu` to determine what happens when the context menu is closed
- Place any children that are passed through to the component at the bottom of your context menu

Using the `<Menu>` component, your code would look something like this:

```ts
const open = !!position;

return (
  <Menu
    anchorReference="anchorPosition"
    anchorPosition={position ?? { left: 0, top: 0 }}
    open={open}
    onClose={closeContextMenu}
  >
    {/* Menu items go here */}
    {children}
  </Menu>
);
```

nchorReference="anchorPosition"
    anchorPosition={position ?? { left: 0, top: 0 }}
    open={open}
    onClose={closeContextMenu}
  >
    {/* Menu items go here */}
    {children}
  </Menu>
);
```

## Menu Content

Finally, you need to add the drilldown options to the context menu. Do that by applying the information in `itemSections` to the contents of the `<Menu>` component.

The `itemSections` array contains information about the current drilldown dimension and the remaining possible dimensions to drill down on.

For example, consider the chart we discussed in the previous section where the `initialDimension` is **Age Range** and the `drilldownDimensions` are **Gender**, **Condition**, and **Category**. Before drilling down on the chart, the `itemSections` array contains the following:

```ts
[
  {
      sectionTitle: 'AgeRange',
  },
  {
      sectionTitle: 'Drill',
      items: [
        { caption: 'Gender' },
        { caption: 'Condition' },
        { caption: 'Category' }
      ],
  },
];
```

Then after drilling down on **Condition**, the `itemSections` array contains the following:

```ts
[
    {
        sectionTitle: 'Condition',
    },
    {
        sectionTitle: 'Drill',
        items: [
          { caption: 'Gender' },
          { caption: 'Category' }
        ],
    },
];
```

Now that you understand the contents of the `itemSections` array, you can decide how you want to use it to populate your menu options. You can of course choose to do this however you like.

Here, we ignore the current drilldown dimension and just create a menu item for each remaining drill category.

Each menu item contains an icon and the caption of the drilldown dimension. When the item is clicked, the context menu is closed and the `onClick` function from the item object is called to perform the drill down.

```ts
{!!itemSections &&
  !!(itemSections as Array<{ items: Array<object> }>)[1].items.length &&
  itemSections?.map(({ items }) =>
    items?.map((item) => (
      <MenuItem
        key={item.key ?? item.caption}
        onClick={() => {
          closeContextMenu();
          item.onClick?.();
        }}
      >
        <ListItemIcon>
          <MoveDown fontSize='small' />
        </ListItemIcon>
        <ListItemText> {item.caption}</ListItemText>
      </MenuItem>
    ))
  )
}
```

If there are no remaining drilldown dimensions, you may want to create a single menu item alerting the user that they cannot drill down any further.

```ts
{(!itemSections ||
  !(itemSections as Array<{ items: Array<object> }>)[1].items.length) && (
  <MenuItem key={'none'}>
    <ListItemText> {'Cannot drill down any further'}</ListItemText>
  </MenuItem>
)}
```

tions ||
  !(itemSections as Array<{ items: Array<object> }>)[1].items.length) && (
  <MenuItem key={'none'}>
    <ListItemText> {'Cannot drill down any further'}</ListItemText>
  </MenuItem>
)}
```

## Apply

Once you have a custom context menu component, you need to apply it to your chart. All you need to do is to add a `config` property to the `<DrilldownWidget>` that wraps the chart. Within the `config` object, set the `contextMenuComponent` property to the component you created.

```ts
<DrilldownWidget
  initialDimension={DM.Commerce.AgeRange}
  drilldownDimensions={[
    DM.Commerce.Gender,
    DM.Commerce.Condition,
    DM.Category.Category,
  ]}
  config={{
    contextMenuComponent: CustomContextMenu,
  }}
>
```

## Results

At this point, your custom context menu is ready for action. When you select a data point in your chart, you should see a context menu that looks like this:

![Custom context menu](../../img/drilldown-guide/custom-context-menu.png 'Custom context menu')

## Next Up

In this section you learned how to create a custom context menu. In the next section, you'll continue to customize the drilldown experience by creating a custom breadcrumbs component.

Go to the [next lesson](./guide-3-custom-breadcrumbs.md).

custom context menu. In the next section, you'll continue to customize the drilldown experience by creating a custom breadcrumbs component.

Go to the [next lesson](./guide-3-custom-breadcrumbs.md).

## Full Code

For your convenience, here is the full code for our custom context menu component:

```ts
import Menu from '@mui/material/Menu';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MoveDown from '@mui/icons-material/MoveDown';
import { ContextMenuProps } from '@sisense/sdk-ui';

export const CustomContextMenu = ({
  position,
  itemSections,
  children,
  closeContextMenu,
}: ContextMenuProps) => {
  const open = !!position;

  return (
    <Menu
      anchorReference='anchorPosition'
      anchorPosition={position ?? { left: 0, top: 0 }}
      open={open}
      onClose={closeContextMenu}
    >
      {!!itemSections &&
        !!(itemSections as Array<{ items: Array<object> }>)[1].items.length &&
        itemSections?.map(({ items }) =>
          items?.map((item) => (
            <MenuItem
              key={item.key ?? item.caption}
              onClick={() => {
                closeContextMenu();
                item.onClick?.();
              }}
            >
              <ListItemIcon>
                <MoveDown fontSize='small' />
              </ListItemIcon>
              <ListItemText> {item.caption}</ListItemText>
            </MenuItem>
          ))
        )}
      {(!itemSections ||
        !(itemSections as Array<{ items: Array<object> }>)[1].items.length) && (
        <MenuItem key={'none'}>
          <ListItemText> {'Cannot drill down any further'}</ListItemText>
        </MenuItem>
      )}
      {children}
    </Menu>
  );
};
```



<!-- Source: guides/drilldown/guide-3-custom-breadcrumbs.md -->

ListItemText> {'Cannot drill down any further'}</ListItemText>
        </MenuItem>
      )}
      {children}
    </Menu>
  );
};
```



<!-- Source: guides/drilldown/guide-3-custom-breadcrumbs.md -->
# 3 | Custom Breadcrumbs

In this section, you'll learn how to customize the look and feel of our drilldown chart by providing custom breadcrumbs.

Similar to the custom context menu, when building a custom breadcrumbs component, you can use whatever components you choose. In this guide, we use the [Material UI Breadcrumbs component](https://mui.com/material-ui/api/breadcrumbs/) as the basis for our custom breadcrumbs.

## Props

A breadcrumbs component has the following properties:

- `currentDimension`: The current drilldown dimension
- `filtersDisplayValues`: List of applied drilldown filters (more on this below)
- `clearDrilldownSelections`: Function to run when the clear button is clicked
- `sliceDrilldownSelections`: Function to run when a breadcrumb is clicked

So the first step in creating custom breadcrumbs is to create a component with these properties:

```ts
export const CustomBreadCrumbs = ({
  currentDimension,
  filtersDisplayValues,
  clearDrilldownSelections,
  sliceDrilldownSelections,
}: DrilldownBreadcrumbsProps) => {
  // Component code goes here
};
```

nst CustomBreadCrumbs = ({
  currentDimension,
  filtersDisplayValues,
  clearDrilldownSelections,
  sliceDrilldownSelections,
}: DrilldownBreadcrumbsProps) => {
  // Component code goes here
};
```

## Breadcrumbs Component

The breadcrumb component we build in this guide uses [Material UI Chip](https://mui.com/material-ui/api/chip/) components as the individual breadcrumbs. Again, you can choose to use another component if you want.

Here, whenever breadcrumbs are shown, there will be two chips on either end of the breadcrumbs.

- The first chip contains a button to clear the drilldown and return the chart to its original state
- The last chip displays the current drilldown dimension

For example, here you can see the clear button in the first chip and the current drilldown dimension, **Category** as the last chip:

![Special breadcrumb chips](../../img/drilldown-guide/breadcrumb-chips.png 'Special breadcrumb chips')

To create these chips, you can start to apply some of the properties mentioned above in your component code.

- Use `filterDisplayValues` to define which breadcrumbs to show
- Use `clearDrilldownSelections` to return the chart to its original state when the clear button in the first chip is clicked
- Use `currentDimension` to build the last drilldown chip

```ts
if (!filtersDisplayValues.length) return null;

return (
  <Breadcrumbs>
    <Chip label="Clear" key="Clear" color="error" onClick={clearDrilldownSelections} icon={<CancelIcon />} />
    {/* Code for additional chips goes here */}
    <Chip label={`${currentDimension.name || ''} (All)`} key="All" color="default" icon={<MoveDown />} />
  </Breadcrumbs>
);
```

={<CancelIcon />} />
    {/* Code for additional chips goes here */}
    <Chip label={`${currentDimension.name || ''} (All)`} key="All" color="default" icon={<MoveDown />} />
  </Breadcrumbs>
);
```

## Drilldown Chips

Now you can fill in the remaining chips for the current drilldown hierarchy.

You know how many chips to create based on the number of elements in the `filterDisplayValue` array. Each element in the array is an array itself of a drilldown level. When a single data point is selected for drilling down, the drilldown level is an array with a single element. If more than one data point is selected for drilling down, the drilldown level is an array containing all the selected points.

For example, consider the chart we discussed in previous sections where the `initialDimension` is **Age range** and the `drilldownDimensions` are **Gender**, **Condition**, and **Category**. If a user initially selects the **25-34** and **35-44** age ranges, drills down on category, and the selects the **New** category to drill down by age, the `filterDisplayValue` array will look like this:

```ts
[['25-34', '35-44'], ['New']];
```

Here two similar types of chips are used to display the values in the `filtersDisplayValue` array. In both types of chips, a value from `filtersDisplayValue` is used to show which dimensions have been selected for drilling down. If the value contains multiple category selections, you can choose how to display those. Here we choose to separate them with a pipe character (`|`).

The difference between the two types of chips is whether they are clickable or not. Clickable chips allow users to go back up the drilldown hierarchy. You go back up the hierarchy using the `sliceDrilldownSelections` callback.

Here you can see the two types of chips. The clickable chips are blue and the others are gray. Clickable chips where it makes sense to move back up the drilldown hierarchy. Non-clickable chips are used in all other cases.

![Breadcrumb chip types](../../img/drilldown-guide/breadcrumb-chips.png 'Breadcrumb chip types')

To create these chips, check the location of the current chip in `filtersDisplayValues` and then build the appropriate type of chip:

```ts
{
  filtersDisplayValues.map((displayValue, i) => {
    const isClickable = i < filtersDisplayValues.length - 1;
    return isClickable ? (
      <Chip
        label={displayValue.join(' | ')}
        key={displayValue.join(' | ')}
        onClick={() => sliceDrilldownSelections(i + 1)}
        color="primary"
        icon={<MoveDown />}
      />
    ) : (
      <Chip
        label={displayValue.join(' | ')}
        key={displayValue.join(' | ')}
        color="default"
        icon={<MoveDown />}
      />
    );
  });
}
```

own />}
      />
    ) : (
      <Chip
        label={displayValue.join(' | ')}
        key={displayValue.join(' | ')}
        color="default"
        icon={<MoveDown />}
      />
    );
  });
}
```

## Apply

Now that you've created a custom breadcrumbs component, you can apply it to a chart. All you need to do is to add a property in the `<DrilldownWidget>` `config`. Within the `config` object, set the `breadcrumbsMenuComponent` property to the component you created.

In the code below, we also choose to detach the breadcrumbs from the chart component so that we can place it wherever we want.

To do so:

- Set `isBreadcrumbsDetached` to `true`
- Add `breadcrumbsComponent` to the destructuring of the `<DrilldownWidget>` return value
- Place the `breadcrumbsComponent` where you want it to display

For example, the following code shows the breadcrumbs component right below the chart:

```ts
<DrilldownWidget
  initialDimension={DM.Commerce.AgeRange}
  drilldownDimensions={[
    DM.Commerce.Gender,
    DM.Commerce.Condition,
    DM.Category.Category,
  ]}
  config={{
    isBreadcrumbsDetached: true,
    breadcrumbsComponent: CustomBreadCrumbs,
  }}
>
  {({
      drilldownFilters,
      drilldownDimension,
      onDataPointsSelected,
      onContextMenu,
      breadcrumbsComponent,
    }) => (
      <>
        <Chart
          // Chart code here ...
        />
        {breadcrumbsComponent}
        </>
  )}
    </DrilldownWidget>
  );
}
```

Note that you can also detach the default breadcrumbs component and place it wherever you want using the same process.

{breadcrumbsComponent}
        </>
  )}
    </DrilldownWidget>
  );
}
```

Note that you can also detach the default breadcrumbs component and place it wherever you want using the same process.

## Results

At this point, your breadcrumbs component is ready for action. When you drill down on your chart, you should see a breadcrumbs component that looks like this:

![Custom breadcrumbs](../../img/drilldown-guide/custom-breadcrumbs.png 'Custom breadcrumbs')

## Next Up

In this section you learned how to create a breadcrumbs component. In the next section, you'll see how to create a drilldown experience on a third party chart.

Go to the [next lesson](./guide-4-third-party-chart.md).

learned how to create a breadcrumbs component. In the next section, you'll see how to create a drilldown experience on a third party chart.

Go to the [next lesson](./guide-4-third-party-chart.md).

## Full Code

For your convenience, here is the full code for our custom breadcrumbs component:

```ts
import { Breadcrumbs, Chip } from '@mui/material';
import { DrilldownBreadcrumbsProps } from '@sisense/sdk-ui';
import CancelIcon from '@mui/icons-material/Cancel';
import MoveDown from '@mui/icons-material/MoveDown';
import { CollectionsBookmark } from '@mui/icons-material';

export const CustomBreadCrumbs = ({
  currentDimension,
  filtersDisplayValues,
  clearDrilldownSelections,
  sliceDrilldownSelections,
}: DrilldownBreadcrumbsProps) => {
  if (!filtersDisplayValues.length) return null;

  return (
    <Breadcrumbs>
      <Chip
        label="Clear"
        key="Clear"
        color="error"
        onClick={clearDrilldownSelections}
        icon={<CancelIcon />}
      />
      {filtersDisplayValues.map((displayValue, i) => {
        const isClickable = i < filtersDisplayValues.length - 1;
        return isClickable ? (
            <Chip
                label={displayValue.join(' | ')}
                key={displayValue.join(' | ')}
                onClick={() => sliceDrilldownSelections(i + 1)}
                color="primary"
                icon={<MoveDown />}
            />
        ) : (
            <Chip
                label={displayValue.join(' | ')}
                key={displayValue.join(' | ')}
                color="default"
                icon={<MoveDown />}
            />
        );
      })}
      <Chip
        label={`${currentDimension.name || ''} (All)`}
        key="All"
        color="default"
        icon={<MoveDown />}
      />
    </Breadcrumbs>
  );
};
```



<!-- Source: guides/drilldown/guide-4-third-party-chart.md -->

ion.name || ''} (All)`}
        key="All"
        color="default"
        icon={<MoveDown />}
      />
    </Breadcrumbs>
  );
};
```



<!-- Source: guides/drilldown/guide-4-third-party-chart.md -->
# 4 | Third Party Drilldown Chart

In this section, you'll how to drill down when using a 3rd party charting library. In this guide, we'll switch out our Compose SDK chart with a chart from [Plotly.js](https://plotly.com/javascript/).

n this section, you'll how to drill down when using a 3rd party charting library. In this guide, we'll switch out our Compose SDK chart with a chart from [Plotly.js](https://plotly.com/javascript/).

## Plotly Wrapper

To get started, you need to build a wrapper around a Plotly chart component so that you can populate it with data retrieved by Compose SDK.

:::tip Learn more
Here, we briefly discuss this process. To learn more about using a third party chart with Compose SDK, see the [External Charts](../charts/guide-external-charts.md) section of the [Charts Guide](../charts/).
:::

In addition to being able to handle the data we provide it with, the wrapper needs to be able to handle data point selection and display a context menu when needed.

So the first step in creating the wrapper is to create a component with the following properties:

```ts
type Props = {
  rawData: QueryResultData,
  onDataPointsSelected: DataPointsEventHandler,
  onContextMenu: (menuPosition: MenuPosition) => void,
};

export const PlotlyBarChart: React.FC<Props> = ({ rawData, onDataPointsSelected, onContextMenu }) => {
  // Chart code goes here
};
```

Next, you to keep track of the data points selected for drilling down. To do so, create a state variable:

```ts
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
```

And you also need to store the data for the current state of the drilldown chart as well as the data converted to the format we need for the Plotly chart. To do so create some memoized variables:

```ts
const data = useMemo(
  () =>
    rawData.rows.map(([category, value]) => ({
      category: category.data as string,
      value: value.data as string | number,
    })),
  [rawData.rows]
);

const trace = useMemo(() => {
  setSelectedCategories([]);
  return generateTrace(data, rawData.columns[1].name);
}, [data, rawData.columns]);
```

Note that the `generateTrace()` function is used to reformat the data for the Plotly chart. That function looks like this:

```ts
const generateTrace = (
  data: { [key: string]: Datum }[],
  name: string
): Partial<Plotly.ScatterData> => ({
  type: 'bar',
  x: data.map((d) => d.category),
  y: data.map((d) => d.value),
  name: name,
});
```

Next, you need to handle clicks to open the drilldown context menu. To do so, use the `useEffect()` hook to create an event listener that uses the `onContextMenu` function from the component's props:

```ts
useEffect(() => {
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (!selectedCategories.length) return;
    onContextMenu({ left: event.clientX, top: event.clientY });
  };

  document.addEventListener('contextmenu', handleContextMenu);

  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
  };
}, [selectedCategories, onDataPointsSelected, onContextMenu]);
```

After that, you need to handle user selection of data points in the chart. To do so, use the `useCallback()` hook to set the `selectedCategories` state variable:

```ts
const handleSelection = useCallback(
  (event: PlotSelectionEvent) => {
    if (event.points.length) {
      const internalSelectedCategories = event.points.map((point) => {
        const clickedIndex = point.pointNumber;
        return data[clickedIndex].category;
      });
      setTimeout(
        () => setSelectedCategories(internalSelectedCategories),
        250
      );
      setTimeout(
        () =>
          onDataPointsSelected(
            internalSelectedCategories.map((category) => ({
              value: undefined,
              categoryValue: category,
              categoryDisplayValue: category,
              seriesValue: undefined,
            })),
            event as unknown as MouseEvent
          ),
        250
      );
    }
  },
  [data, onDataPointsSelected]
);
```

Finally, with all that done, you can apply it to the Plotly `<Plot>` component:

```ts
return (
  <Plot
    data={[trace]}
    layout={{
      datarevision: Date.now(),
    }}
    onSelected={handleSelection}
  />
);
```

When you put all the above code together, it looks like this:

```ts
import { useCallback, useEffect, useMemo, useState } from 'react';
import { QueryResultData } from '@sisense/sdk-data';
import Plot from 'react-plotly.js';
import { Datum, PlotSelectionEvent } from 'plotly.js';
import { DataPointsEventHandler, MenuPosition } from '@sisense/sdk-ui';

type Props = {
  rawData: QueryResultData;
  onDataPointsSelected: DataPointsEventHandler;
  onContextMenu: (menuPosition: MenuPosition) => void;
};

const generateTrace = (
  data: { [key: string]: Datum }[],
  name: string
): Partial<Plotly.ScatterData> => ({
  type: 'bar',
  x: data.map((d) => d.category),
  y: data.map((d) => d.value),
  name: name,
});

export const PlotlyBarChart: React.FC<Props> = ({
  rawData,
  onDataPointsSelected,
  onContextMenu,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const data = useMemo(
    () =>
      rawData.rows.map(([category, value]) => ({
        category: category.data as string,
        value: value.data as string | number,
      })),
    [rawData.rows]
  );

  const trace = useMemo(() => {
    setSelectedCategories([]);
    return generateTrace(data, rawData.columns[1].name);
  }, [data, rawData.columns]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      if (!selectedCategories.length) return;
      onContextMenu({ left: event.clientX, top: event.clientY });
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [selectedCategories, onDataPointsSelected, onContextMenu]);

  const handleSelection = useCallback(
    (event: PlotSelectionEvent) => {
      if (event.points.length) {
        const internalSelectedCategories = event.points.map((point) => {
          const clickedIndex = point.pointNumber;
          return data[clickedIndex].category;
        });
        setTimeout(
          () => setSelectedCategories(internalSelectedCategories),
          250
        );
        setTimeout(
          () =>
            onDataPointsSelected(
              internalSelectedCategories.map((category) => ({
                value: undefined,
                categoryValue: category,
                categoryDisplayValue: category,
                seriesValue: undefined,
              })),
              event as unknown as MouseEvent
            ),
          250
        );
      }
    },
    [data, onDataPointsSelected]
  );

  return (
    <Plot
      style={{ width: '700px', height: '450px' }}
      data={[trace]}
      layout={{
        datarevision: Date.now(),
      }}
      onSelected={handleSelection}
    />
  );
};

```

n (
    <Plot
      style={{ width: '700px', height: '450px' }}
      data={[trace]}
      layout={{
        datarevision: Date.now(),
      }}
      onSelected={handleSelection}
    />
  );
};

```

## Apply Drilldown Widget

Now that you have a Plotly chart properly wrapped, you can further wrap it in a `<DrilldownWidget>` component to add the drilldown functionality. To do so, you work exactly the same way as you would when wrapping a Compose SDK chart.

Here, since you're already using a custom chart, we'll also use the custom context menu and breadcrumbs from the previous sections. But if you want, you can use the Compose SDK components with your third party chart instead.

```ts
export const PlotlyDrilldownChart = () => {
  return (
    <DrilldownWidget
      initialDimension={DM.Commerce.AgeRange}
      drilldownDimensions={[
        DM.Commerce.Gender,
        DM.Commerce.Condition,
        DM.Category.Category
      ]}
      config={{
        isBreadcrumbsDetached: true,
        contextMenuComponent: CustomContextMenu,
        breadcrumbsComponent: CustomBreadCrumbs,
      }}
    >
      {/* Query and chart code go here */}
    </DrilldownWidget>
  );
};
```

Next, you need to execute a query to get the data for the third party chart. To do so, use the `<ExecuteQuery>` component. The properties of `<ExecuteQuery>` look a lot like the properties of the Compose SDK `<Chart>` from the beginning of this guide since they are both doing the same things under the hood to retrieve data.

Once again, in the `<ExecuteQuery>` we use the `drilldownDimension` and `drilldownFilters` to define which data we want to query for:

```ts
<ExecuteQuery
  dataSource={DM.DataSource}
  dimensions={[drilldownDimension]}
  measures={[measureFactory.sum(DM.Commerce.Revenue)]}
  filters={drilldownFilters}
>
  {({ data }) => {
    if (data) {
      return {
        /* Chart code goes here */
      };
    }
  }}
</ExecuteQuery>
```

All that's left to do now is to pass the retrieved data to your wrapped third party chart:

```ts
<PlotlyBarChart
  rawData={data}
  onContextMenu={onContextMenu}
  onDataPointsSelected={onDataPointsSelected}
/>
```

When you put all the above code together, it looks like this:

```ts
import * as DM from '../sample-ecommerce';
import { DrilldownWidget, ExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { CustomContextMenu } from './CustomContextMenu';
import { CustomBreadCrumbs } from './CustomBreadCrumbs';
import { PlotlyBarChart } from './PlotlyBarChart';

export const PlotlyDrilldownChart = () => {
  return (
    <DrilldownWidget
      initialDimension={DM.Commerce.AgeRange}
      drilldownDimensions={[
        DM.Commerce.Gender,
        DM.Commerce.Condition,
        DM.Category.Category
      ]}
      config={{
          isBreadcrumbsDetached: true,
          contextMenuComponent: CustomContextMenu,
          breadcrumbsComponent: CustomBreadCrumbs,
      }}
    >
      {({
        drilldownFilters,
        drilldownDimension,
        onDataPointsSelected,
        onContextMenu,
        breadcrumbsComponent
      }) => (
        <ExecuteQuery
          dataSource={DM.DataSource}
          dimensions={[drilldownDimension]}
          measures={[measureFactory.sum(DM.Commerce.Revenue)]}
          filters={drilldownFilters}
        >
          {({ data }) => {
            if (data) {
              return (
                <>
                  <PlotlyBarChart
                    rawData={data}
                    onContextMenu={onContextMenu}
                    onDataPointsSelected={onDataPointsSelected}
                  />
                  {breadcrumbsComponent}
                </>
              );
            }
          }}
        </ExecuteQuery>
      )}
    </DrilldownWidget>
  );
};
```

ted}
                  />
                  {breadcrumbsComponent}
                </>
              );
            }
          }}
        </ExecuteQuery>
      )}
    </DrilldownWidget>
  );
};
```

## Results

At this point, your custom third party chart is ready for action. When you select data points and drill down, your chart should look something like this:

![Third party drilldown chart](../../img/drilldown-guide/third-party.png 'Third party drilldown chart')



================================================================================

# @barejs/dashbourd-router

A [react]9https://reactjs.org/ [mui](https://mui.com/) dashboard incorporating [react-router](https://reactrouter.com/).

The dashboard is designed for micro-sites. Two navigation menus are provides: `sites` and `pages`.
The `sites` are rendered as simple `href` links, which provide the menus to navigate between micro-sites.
The `pages` are rendered as `react-router-dom` links, which provide the menus to navigate within the site.

The props are:

- `title` (`string`): Displayed on the app-bar.
- `basename` (`string`): Passed through to `BrowserRouter`.
- `sites` (`array`): The array of sites (see the section on sites and pages).
- `pages` (`array`): The array of pages (see the section on sites and pages).
- `routes` (`node`): A react node for the `react-router-dom` routes.
- `appBarItems` (`node`): A react node for the controls on the app-bar.

### `sites` and `pages`

Both the `sites` and `pages` are arrays of the following shape:

```javascript
[
  ...

  {
    code: 'app1', // A unique key
    title: 'Application 1', // The menu title.
    description: 'The first application', // Used a a tooltip.
    url: '/example/ui', // The url. An href for the sites, and router link for the pages.
    iconName: 'dashboard' // The name of an icon rendered in mui with <Icon>{iconName}</Icon>
  },

  ...
]
```

## Requirements

You will need to add founts to the `index.html`. This is used to specify the icon name in the sites and pages props.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

## Example

```javascript
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Typography from '@mui/material/Typography'

import DashboardRouter from 'barejs-dashboard-router'
import { Page1, Page2, Page3 } from './pages'

class Site extends React.Component {
  render() {
    return (
      <DashboardRouter
        title="Example Dashboard"
        basename="/example/ui"
        sites={[
          {
            code: 'app1',
            title: 'Application 1',
            description: 'The first application',
            url: '/example/ui',
            iconName: 'dashboard'
          },
          {
            code: 'app2',
            title: 'Application2',
            description: 'The second application',
            url: '/orders/ui',
            iconName: 'album'
          }
        ]}
        pages={[
          {
            code: 'page1',
            title: 'First Page',
            description: 'The first page',
            path: '/first-page',
            iconName: 'shopping_cart'
          },
          {
            code: 'page2',
            title: 'Second Page',
            description: 'The second page',
            path: '/second-page',
            iconName: 'people'
          },
          {
            code: 'page3',
            title: 'Third Page',
            description: 'The third page',
            path: '/third-page',
            iconName: 'agriculture'
          }
        ]}
        routes={
          <>
            <Redirect exact from="/" to="/first-page" />
            <Route
              exact
              path="/first-page"
              render={props => (
                <Page1 title="hello" {...props} {...this.props} />
              )}
            />
            <Route
              exact
              path="/second-page"
              render={props => <Page2 {...props} {...this.props} />}
            />
            <Route
              exact
              path="/third-page"
              render={props => <Page3 {...props} {...this.props} />}
            />
          </>
        }
        appBarItems={
          <Typography component="h4" variant="subtitle1" color="inherit" noWrap>
            John Doe
          </Typography>
        }
      />
    )
  }
}

export default Site
```

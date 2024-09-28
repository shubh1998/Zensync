import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routesList'
import MainLayout from 'components/layouts/MainLayout/index'
// import NotFoundComponent from 'pages/404/index'
import ViewProjectDetails from 'pages/ViewProjectDetails/index'

const CustomRoutes = () => {
  return (
    <>
      <Switch>
        {
          routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              exact
              render={() => (
                <MainLayout showHeader={route.showHeader} showFooter={route.showFooter} Component={route.component} />
              )}
            />
          ))
          }

        <Route component={() => (
          <MainLayout showHeader showFooter Component={ViewProjectDetails} />
        )}
        />

        {/* <Route component={() => (
          <MainLayout showHeader showFooter Component={NotFoundComponent} />
        )}
        /> */}
      </Switch>
    </>
  )
}

export default CustomRoutes

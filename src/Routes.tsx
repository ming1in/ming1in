import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyExoticComponent } from 'react';
import HomeView from './views/HomeView';
import LoadingView from './views/LoadingView';

export type ILazyComponent = (() => JSX.Element) | LazyExoticComponent<any>;

export interface IRouteConfig {
  exact: boolean;
  path: string;
  layout?: ILazyComponent;
  component: ILazyComponent;
}

const routesConfig: IRouteConfig[] = [
  {
    exact: true,
    path: '/',
    component: HomeView
  }
];

const renderRoutes = (routes: IRouteConfig[]): JSX.Element => (
  <Switch>
    {routes.map((route, i) => {
      // const Layout = route.layout;
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Suspense fallback={<LoadingView />}>
              {/* <Layout route={route}> */}
              <Component {...props} />
              {/* </Layout> */}
            </Suspense>
          )}
        />
      );
    })}
  </Switch>
);

function Routes(): JSX.Element {
  return renderRoutes(routesConfig);
}

export default Routes;

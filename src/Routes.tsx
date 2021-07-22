import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyExoticComponent } from 'react';
import HomeView from './views/HomeView';
import LoadingView from './views/LoadingView';

export type ILazyComponent = (() => JSX.Element) | LazyExoticComponent<FunctionComponent<any>>;

const NavLayout = lazy(() => import('./templates/NavTemplate'));

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
    layout: NavLayout,
    component: HomeView
  }
];

const renderRoutes = (routes: IRouteConfig[]): JSX.Element => (
  <Switch>
    {routes.map((route, i) => {
      const Layout = route.layout || Fragment;
      const Component = route.component || Fragment;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Suspense fallback={<LoadingView />}>
              <Layout>
                <Component {...props} />
              </Layout>
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

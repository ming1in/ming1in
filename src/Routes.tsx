import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyExoticComponent } from 'react';
import LoadingView from './views/LoadingView';
import { ERoute } from './types/enums/Routes';

export type ILazyComponent = (() => React.ReactElement) | LazyExoticComponent<FunctionComponent<any>>;

const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));
const GeneralTemplate = lazy(() => import('./templates/GeneralTemplate'));

export interface IRouteConfig {
  exact: boolean;
  path: string;
  layout?: ILazyComponent;
  component: ILazyComponent;
}

const routesConfig: IRouteConfig[] = [
  {
    exact: true,
    path: ERoute.Home,
    layout: HomeTemplate,
    component: lazy(() => import('./views/HomeView'))
  },
  {
    exact: true,
    path: ERoute.Resume,
    layout: GeneralTemplate,
    component: lazy(() => import('./views/ResumeView'))
  },
  {
    exact: true,
    path: ERoute.About,
    layout: GeneralTemplate,
    component: lazy(() => import('./views/AboutView'))
  }
];

const renderRoutes = (routes: IRouteConfig[]): React.ReactElement => (
  <Switch>
    {routes.map((route, idx) => {
      const Layout = route.layout || Fragment;
      const Component = route.component;

      return (
        <Route
          key={idx}
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

export default function Routes(): React.ReactElement {
  return renderRoutes(routesConfig);
}

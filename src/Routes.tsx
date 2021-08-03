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
  component: ILazyComponent | (() => null);
}

const externalRoutes: IRouteConfig[] = [
  {
    exact: true,
    path: '/git/gedcom',
    component: () => {
      window.location.href = 'https://github.com/ming1in/gedcom-parser';
      return null;
    }
  },
  {
    exact: true,
    path: '/git/zillow',
    component: () => {
      window.location.href = 'https://github.com/ming1in/Stevens-IT/tree/master/CS_559/projects/03_zillow';
      return null;
    }
  },
  {
    exact: true,
    path: '/git/jim',
    component: () => {
      window.location.href = 'https://github.com/ming1in/jim-app';
      return null;
    }
  },
  {
    exact: true,
    path: '/git/live-github',
    component: () => {
      window.location.href = 'https://github.com/WellSheet/live-github';
      return null;
    }
  }
];

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
  },
  ...externalRoutes
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

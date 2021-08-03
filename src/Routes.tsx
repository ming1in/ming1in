import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyExoticComponent } from 'react';
import LoadingView from './views/LoadingView';
import { EExternalRoute, EGithubRepoLink, EInternalRoute } from './types/enums/Routes';

export type ILazyComponent = (() => React.ReactElement) | LazyExoticComponent<FunctionComponent<any>>;

const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));
const GeneralTemplate = lazy(() => import('./templates/GeneralTemplate'));

export interface IRouteConfig {
  exact: boolean;
  path: EExternalRoute | EInternalRoute;
  layout?: ILazyComponent;
  component: ILazyComponent | (() => null);
}

const externalRoutes: IRouteConfig[] = [
  {
    exact: true,
    path: EExternalRoute.Gedcom,
    component: () => {
      window.location.href = EGithubRepoLink.Gedcom;
      return null;
    }
  },
  {
    exact: true,
    path: EExternalRoute.Zillow,
    component: () => {
      window.location.href = EGithubRepoLink.Zillow;
      return null;
    }
  },
  {
    exact: true,
    path: EExternalRoute.JimApp,
    component: () => {
      window.location.href = EGithubRepoLink.JimApp;
      return null;
    }
  },
  {
    exact: true,
    path: EExternalRoute.LiveGithub,
    component: () => {
      window.location.href = EGithubRepoLink.LiveGithub;
      return null;
    }
  }
];

const routesConfig: IRouteConfig[] = [
  {
    exact: true,
    path: EInternalRoute.Home,
    layout: HomeTemplate,
    component: lazy(() => import('./views/HomeView'))
  },
  {
    exact: true,
    path: EInternalRoute.Resume,
    layout: GeneralTemplate,
    component: lazy(() => import('./views/ResumeView'))
  },
  {
    exact: true,
    path: EInternalRoute.About,
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

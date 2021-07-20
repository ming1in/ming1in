import HomeView from "./views/HomeView";
import { LazyExoticComponent } from "react";
import { Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";

export type ILazyComponent = (() => JSX.Element) | LazyExoticComponent<any>;

interface IRouteConfig {
  exact: boolean;
  path: string;
  component: ILazyComponent;
  layout?: ILazyComponent;
}

const routesConfig: IRouteConfig[] = [
  {
    exact: true,
    path: "/",
    component: HomeView,
  },
];

const renderRoutes = (routes: IRouteConfig[]) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Suspense fallback={<LoadingView />}>
                <Layout route={route}>
                  <Component {...props} />
                </Layout>
              </Suspense>
            )}
          />
        );
      })}
    </Switch>
  );
};

function Routes(): JSX.Element {
  return renderRoutes(routesConfig);
}

export default Routes;

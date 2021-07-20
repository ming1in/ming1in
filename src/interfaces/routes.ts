import { LazyExoticComponent } from 'react';

export type ILazyComponent = (() => JSX.Element) | LazyExoticComponent<any>;

export interface IRouteConfig {
  exact: boolean;
  path: string;
  layout: ILazyComponent;
  banner?: ILazyComponent;
  sidebarHeader?: ILazyComponent;
  sidebar?: ILazyComponent;
  mobile?: ILazyComponent;
  component: ILazyComponent;
}

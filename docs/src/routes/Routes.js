import React, {Suspense} from "react";
import {useLocation} from "react-router-dom";
import {DocsLayout} from "../layouts/DocsLayout";
import {GeneralLayout} from "../layouts/GeneralLayout";
import {flattenedRoutes as routes} from './index';
import {Route, Switch} from "react-router";

const docsRegex = new RegExp("/?docs");

export const Routes = (props) => {
  const location = useLocation();

  const Layout = docsRegex.test(location.pathname) ? DocsLayout : GeneralLayout;

  return (
    <Suspense fallback={<div/>}>
      <Layout {...props}>
        <Switch>
          {routes.map(({children, path, exact, component: Component}, index) => (
              !children && (
                <Route key={index}
                       path={path}
                       exact={exact}
                       render={props => <Component {...props}/>}
                />
              )
            )
          )}
        </Switch>
      </Layout>
    </Suspense>
  );
};

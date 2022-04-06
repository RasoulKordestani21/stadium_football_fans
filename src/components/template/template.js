// @flow
import * as React from "react";
import { Route, Routes, BrowserRouter as Router, HashRouter } from "react-router-dom";

import routes from "../../router/router";


export const Template = () => {
  return (
    <HashRouter>
      <Routes>
        {console.log(routes)}
        {routes.map(route => (
          <>
            <Route
              exact
              path={route.path}
              element={route.component}
              key={route.path}
            />
          </>
        ))}
      </Routes>
    </HashRouter>
  );
};

export default Template;

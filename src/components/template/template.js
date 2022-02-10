// @flow
import * as React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import routes from "../../router/router";

export const Template = () => {
  return (
    <Router>
      <Routes>
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
    </Router>
  );
};

export default Template;

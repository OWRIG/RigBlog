import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
// import Header from './components/Header'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/rigblog/:id/" component={Blog} />
      <Route path="*" component={Error} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;

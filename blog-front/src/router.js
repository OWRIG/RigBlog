import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
// import Header from './components/Header'

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/rigblog/:id/" component={Blog} />
            <Route path="*" component={Error} />
        </Switch>
    </BrowserRouter>
);

export default BasicRoute;

/* eslint-disable */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import AdminIndex from "./AdminIndex.js";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

function Index() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/admin/" component={AdminIndex} />
      {/* <Route path="/admin/add/" component={AddArticle} />
      <Route path="/admin/add/:id" component={AddArticle} />
      {/* <Route path="/admin/add/:id" component={AddArticle} /> */}
      {/* <Route path="/admin/list/" component={ArticleList} /> */}
    </Router>
  );
}

export default Index;

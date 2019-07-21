import React from "react";
import { render } from "react-dom";
import Header from "./components/header";
import articles from "./fixtures";
import ArticleList from "./components/article-list";
import Chart from "./components/chart";

render(
  <div>
    <Header />
    <Chart articles={articles} />
    <ArticleList articles={articles} defaultOpenId={articles[0].id} />
  </div>,
  document.getElementById("app")
);

import React from "react";
import articles from "../fixtures";
import Header from "./header";
import Chart from "./chart";
import ArticleList from "./article-list";
import Counter from "./counter";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Chart articles={articles} />
      <ArticleList articles={articles} defaultOpenId={articles[0].id} />
    </div>
  );
}

App.propTypes = {};

export default App;

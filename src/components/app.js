import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";
import Filters from "./filters";

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Counter />
      <ArticleList />
    </div>
  );
}

App.propTypes = {};

export default App;

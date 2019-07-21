import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <ArticleList />
    </div>
  );
}

App.propTypes = {};

export default App;

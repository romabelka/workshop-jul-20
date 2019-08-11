import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";
import Filters from "./filters";
import useInput from "../hooks/use-input";
import { Provider as UserProvider } from "../contexts/user-context";

function App() {
  const [username, setUsername] = useInput("Roma");
  return (
    <div>
      Username: <input value={username} onChange={setUsername} />
      <Header />
      <Filters />
      <Counter />
      <UserProvider value={username}>
        <ArticleList />
      </UserProvider>
    </div>
  );
}

App.propTypes = {};

export default App;

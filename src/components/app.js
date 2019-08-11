import React from "react";
import { NavLink, Route } from "react-router-dom";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";
import Filters from "./filters";
import useInput from "../hooks/use-input";
import { Provider as UserProvider } from "../contexts/user-context";

function App() {
  const [username, setUsername] = useInput("Roma");
  return (
    <UserProvider value={username}>
      <div>
        <h3>Main menu</h3>
        <div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: "red" }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: "red" }}>
              counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: "red" }}>
              filters
            </NavLink>
          </div>
        </div>
        Username: <input value={username} onChange={setUsername} />
        <Header />
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticleList} />
      </div>
    </UserProvider>
  );
}

App.propTypes = {};

export default App;

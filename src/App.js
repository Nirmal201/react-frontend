import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

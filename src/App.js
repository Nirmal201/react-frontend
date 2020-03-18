import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Pet name="Luna" animal="Dog" breed="Mixed"></Pet>
      <Pet name="Jira" animal="pepera" breed="Masala"></Pet>
      <Pet name="Meetha" animal="salt" breed="lol"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));

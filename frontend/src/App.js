import React from "react";
import Home from "./pages/Home";
import { Route, Link } from "react-router";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;

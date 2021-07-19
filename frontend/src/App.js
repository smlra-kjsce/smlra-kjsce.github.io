import React from "react";
import Home from "./pages/Home";
import { Route, Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;

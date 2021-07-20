import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;

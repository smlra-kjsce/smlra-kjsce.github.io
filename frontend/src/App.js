import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Initiatives from "./pages/Initiatives";
import { Route, Link } from "react-router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/initiatives" component={Initiatives} />
    </div>
  );
}

export default App;

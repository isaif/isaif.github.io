import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import SideBar from "./SideBar/SideBar.js";
import SocialLinks from "./SocialLinks.js";
import Home from "./Home.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Contact from "./Contact.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <SocialLinks />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

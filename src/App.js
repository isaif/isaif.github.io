import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
    </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

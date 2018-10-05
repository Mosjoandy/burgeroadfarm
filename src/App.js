import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Directions from "./pages/Directions";
import Media from "./pages/Media";
import Emailer from "./pages/Emailer";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/directions" component={Directions} />
      <Route path="/media" component={Media} />
      <Route path="/bossjontue" component={Emailer} />
    </div>
  </Router>
);

export default App;

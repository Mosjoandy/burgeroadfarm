import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import './App.css';


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;

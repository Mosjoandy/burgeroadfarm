import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Directions from "./pages/Directions";
import Media from "./pages/Media";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Authenticate";
import './App.css';

class App extends React.Component {

  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/bossjontue" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>)
  }

};

export default App;

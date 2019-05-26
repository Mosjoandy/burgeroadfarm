import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import FullContact from "./pages/Contact/FullContact";
import About from "./pages/About/About";
import Directions from "./pages/Directions/Directions";
import Media from "./pages/Media/Media";
import NoMatch from "./pages/NoMatch/NoMatch";
import Login from "./pages/Authenticate";
import Social from "./components/Social/Social";
import './App.css';

class App extends React.Component {

  render() {
    return (

      <Router>

        <div>
          <Social />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/bossjontue" component={Login} />
            <Route exact path="/fullcontact" component={FullContact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>)
  }

};

export default App;

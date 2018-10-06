import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Directions from "./pages/Directions";
import Media from "./pages/Media";
import Emailer from "./pages/Emailer";
import NoMatch from "./pages/NoMatch";
import { auth, provider } from "./firebase";
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null,
      current: "/bossjontue"
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  };

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  };

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      };
    });
  };

  routeCheck = (string) => {
    if (this.state.current !== string) {
      this.setState({
        current: string
      });
    };
  };

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
            <Route exact path="/bossjontue" component={Emailer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>)
  }

};

export default App;

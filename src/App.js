import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Creator from "./components/Creator";
import Manager from "./components/Manager";
import Headroom from "react-headroom";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";

import "./app.css";
import mintableLogo from "./images/mintable.jpg";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Footer />
            <Headroom
              style={{
                background: "rgba(255, 255, 255, 1)"
              }}
            >
              <div style={{ maxWidth: 960 }} className="headroom1">
                <Link to="/">
                  <img
                    src={mintableLogo}
                    alt="Make your Ethereum collectible on Mintable.io"
                  />
                  <h1
                    style={{
                      display: "inline",
                      color: "red"
                    }}
                  >
                    {" "}
                    Beta!{" "}
                  </h1>
                </Link>
              </div>

              <div
                className="column topnav is-paddingless"
                style={{
                  background: "rgba(51, 0, 85, .9)",
                  boxShadow: "3px 3px 30px rgb(0, 0, 0 )"
                }}
              >
                {" "}
                <Link
                  to="/browse"
                  className="is-pulled-right"
                  style={{
                    margin: 0,
                    color: "#ff0000ee"
                  }}
                >
                  Browse and Collect!
                </Link>
                <Link to="/create">Create Your Token!</Link>
                <Link to="/manager" className="">
                  Manage a token
                </Link>
                <Link
                  to="/login"
                  className="is-pulled-right"
                  style={{
                    margin: 0,
                    color: "#ff0000ee"
                  }}
                >
                  Login
                </Link>
              </div>
            </Headroom>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/create" component={Creator} />
            <Route exact path="/manager" component={Manager} />
            <Route
              exact
              path="/manager/:address"
              render={props => <Manager {...props} />}
            />
            <Route
              exact
              path="/manager/:address/:tokenID"
              render={props => <Manager {...props} />}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

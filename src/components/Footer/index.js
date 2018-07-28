import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "./footer.css";
import "../../../node_modules/bulma/css/bulma.css";

class Footer extends Component {
  render() {
    return (
      <div className="dropdown is-hoverable is-up bottomRight z">
        <div className="dropdown-trigger">
          <AwesomeButton
            className="mobile"
            type="youtube"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span className="huge">?</span>
          </AwesomeButton>
        </div>
        <div
          className="dropdown-menu positioning "
          id="dropdown-menu4"
          role="menu"
        >
          <div className="dropdown-content ">
            <div className="dropdown-item ">
              <div className="columns is-multiline flexw ">
                <Link to="/howitworks" className="column is-full hoverable ">
                  Help
                </Link>
                <Link to="/browse" className="column is-full hoverable ">
                  How to step up MetaMask
                </Link>
              </div>
              <div className="columns   flexw">
                <Link
                  to="/browse"
                  className="column is-one-quarter hoverable has-text-weight-bold"
                >
                  Browse
                </Link>

                <Link
                  to="/create"
                  className="column  is-one-quarter hoverable has-text-weight-bold"
                >
                  Create
                </Link>

                <Link
                  to="/manager"
                  className="column  is-one-quarter hoverable has-text-weight-bold "
                >
                  Manage
                </Link>

                <Link
                  to="/contact"
                  className="column  is-one-quarter hoverable has-text-weight-bold"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

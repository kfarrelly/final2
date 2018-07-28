import React, { Component } from "react";

import "react-awesome-button/dist/themes/theme-blue.css";
import { Cards } from "./cards.js";
import Footer from "../Footer";
import "./index.css";
import "../../../node_modules/bulma/css/bulma.css";
import CTAheader from "./CTAheader.js";
import { HowitWorks } from "./howitWorks.js";

class Mainpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img:
        "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    };
  }

  render() {
    var item = {};
    return (
      <div className="main">
        <CTAheader />
        <Cards className="mobile-Spacing" />
        <HowitWorks />
        <Footer />
      </div>
    );
  }
}

export default Mainpage;

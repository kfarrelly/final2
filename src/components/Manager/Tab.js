import React, { Component } from "react";
import "../../../node_modules/bulma/css/bulma.css";
import "./tabs.css";
class Tab extends Component {
  render() {
    return (
      <div className="tabular">
        {this.props.tokens.map((item, key) => {
          console.log("running and this is the item:  " + item);

          return (
            <div
              onClick={() => this.props.onClick(item)}
              className="column shadowbox border1 tabby subtitle"
              key={key}
            >
              Token: {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tab;

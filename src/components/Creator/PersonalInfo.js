import React, { Component } from "react";
import Web3HOC from "./web3HOC.js";
import "../../../node_modules/bulma/css/bulma.css";
import "./App.css";
class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  addDefaultSrc(ev) {
    ev.target.src =
      "https://www.seiu721.org/wp-content/uploads/2017/06/cropped-seiu-721-site-icon-270x270.png";
  }
  render() {
    return (
      <div className="columns is-multiline">
        {this.props.tokens.map((item, key) => {
          return (
            <div className="column is-one-fifth" key={key}>
              <div className="card border1 shadowbox">
                <div className="card-image is-marginless">
                  <figure className="image is-4by3 is-marginless">
                    <img
                      className="border2"
                      onError={this.addDefaultSrc}
                      src={item.url}
                      alt={item.name}
                    />
                  </figure>
                </div>
                <div className="card-content container1 is-paddingless">
                  <div className="media-content ">
                    <p className="title is-4 has-text-left ">{item.name}</p>
                    <p className="subtitle is-6 has-text-justified">
                      symbol: {item.sym}
                    </p>
                  </div>
                </div>

                <div className="card-content container1">
                  <a href={item.url}>{item.url}</a>
                  <p>{item.input1}</p>
                  <p>{item.input2}</p>
                  <p>{item.input3}</p>
                  <p>{item.number}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PersonalInfo;

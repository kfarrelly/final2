import React, { Component } from "react";
import "./App.css";
import "../../../node_modules/bulma/css/bulma.css";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  addDefaultSrc(ev) {
    ev.target.src =
      "https://pbs.twimg.com/profile_images/941686687805132800/sHttVPav_400x400.png";
  }

  render() {
    if (this.props.item.length === 0) {
      return (
        <h3 className="h1-center">
          {" "}
          Web3 Error: Not connected to correct network, or account is locked{" "}
        </h3>
      );
    } else {
      return (
        <div className="columns is-multiline">
          {this.props.item.map((item, key) => {
            return (
              <div
                key={key}
                className="column  dropdown is-hoverable is-one-fifth"
              >
                <div
                  className="card   border1 shadowbox dropdown-trigger"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                >
                  {" "}
                  <div
                    className="dropdown-menu popupBox "
                    id="dropdown-menu2 "
                    role="menu"
                  >
                    <div className="dropdown-content  popup word-wrap">
                      <div className="dropdown-item ">
                        <div className="" />
                        <a
                          target="_blank"
                          href={`http://mintable.app/manager/${item.address}`}
                        >
                          {item.address}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-image is-marginless">
                    <figure className="image is-4by3 is-marginless">
                      <img
                        onError={this.addDefaultSrc}
                        src={item.url}
                        alt={item.name}
                        className="border2"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{item.name} </p>
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
              </div>
            );
          })}
        </div>
      );
    }
  }
}
export default ListComponent;

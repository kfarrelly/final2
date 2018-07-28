import React, { Component } from "react";
import Web3HOC from "./web3HOC.js";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "../../../node_modules/bulma/css/bulma.css";

class ConfirmationPage extends React.Component {
  render() {
    return (
      <div className="modal is-active ">
        <div className="modal-background">
          <div className="modal-card ">
            <section className="modal-card-body ">
              <button className="delete" onClick={this.props.toggle} />
              <h1 className="h1-center"> Confirmation Page </h1>
              <p className="subtitle is-4 has-text-centered">
                <strong>
                  You are about to create your ERC-721, please confirm these
                  details are correct!
                </strong>
              </p>

              <aside className="menu">
                <p className="subtitle has-text-black has-text-centered">
                  Your ERC721
                </p>
                <ul className="menu-list flex1">
                  <li className="has-background-warning">
                    Name: <strong>{this.props.input.input1}</strong>
                  </li>
                </ul>
                <p className="subtitle has-text-black has-text-centered">
                  IPFS or Image URL
                </p>
                <ul className="menu-list flex1">
                  <li className="has-background-warning">
                    URL: <strong>{this.props.input.url}</strong>
                  </li>
                </ul>
                <p className="subtitle flex1 has-text-black has-text-centered">
                  Strings
                </p>
                <ul className="menu-list  has-background-warning">
                  <li>
                    String 1: <strong>{this.props.input.input2}</strong>{" "}
                  </li>
                  <li>
                    String 2: <strong>{this.props.input.input3}</strong>
                  </li>
                  <li>
                    String 3: <strong>{this.props.input.input5}</strong>
                  </li>
                </ul>
                <p className="subtitle has-text-black flex1 has-text-centered">
                  Number
                </p>
                <ul className="menu-list flex1 ">
                  <li className="has-background-warning">
                    {" "}
                    Number: <strong>{this.props.input.input4}</strong>
                  </li>
                </ul>
              </aside>
              <hr />
              <p className=" title has-text-weight-bold has-text-centered has-text-danger">
                {" "}
                Sending your transaction to the blockchain takes time, please do
                not close the loading page after you submit!{" "}
              </p>

              <div className="h1-center">
                <AwesomeButton
                  type="facebook"
                  action={this.props.create}
                  size="large"
                  className="margined1"
                >
                  Submit
                </AwesomeButton>
              </div>
              <div className="flex1 h1-center">
                <AwesomeButton
                  type="reddit"
                  action={this.props.toggle}
                  size="large"
                >
                  Go back
                </AwesomeButton>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Web3HOC(ConfirmationPage);

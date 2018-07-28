import React, { Component } from "react";
import { GridLoader } from "react-spinners";
import Collapsible from "react-collapsible";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Web3HOC from "../Creator/web3HOC.js";

import "../../../node_modules/bulma/css/bulma.css";

class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.onClick} />
        <div className="modal-card ">
          <header className="modal-card-head">
            <p className="modal-card-title">
              Waiting for you to submit transaction....
            </p>
          </header>
          <section className="modal-card-body">
            <div className="content">
              {!this.props.mined ? (
                <section className="modal-card-body">
                  <div className="content">
                    <div className="h1-center padding">
                      <h2>
                        please do not close the loading page until your
                        transaction is processed!
                      </h2>
                      <p>
                        {" "}
                        if you rejected the metamask transaction, click restart{" "}
                      </p>
                      <div className="center">
                        <GridLoader
                          className="center"
                          color={"#a876e3"}
                          size={75}
                          loading={true}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <section className="modal-card-body">
                  <div className="content">
                    <div>
                      <h2>Transaction Finished!!</h2>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              View your Transaction here: {this.props.txHash}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Your ERC721 was sent to: {this.props.newAddress}
                          </td>
                        </tr>
                        <tr>
                          <td>Owner: {this.props.account}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>
          </section>

          <footer className="modal-card-foot">
            <div className="dropdown is-hoverable is-up">
              <div className="dropdown-trigger">
                <button
                  className="button is-danger"
                  onClick={this.props.onClick}
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <span>Restart</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <p>
                      If you rejected the transaction, click here to restart. If
                      you close this you won't see your results again!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Web3HOC(LoadingPage);

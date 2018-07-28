import React, { Component } from "react";
import "../../../node_modules/bulma/css/bulma.css";
import Web3HOC from "../Creator/web3HOC.js";

class Transfer extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    const addr = e.target.address.value;
    const id = e.target.id.value;

    this.props.onClickSubmit(addr, id);
  };

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.onClick} />
        <div className="modal-card">
          <section className="modal-card-body">
            <div className="content">
              <h1 className="title h1-center"> Transfer Tokens </h1>
              <p className="has-text-danger h1-center">
                {" "}
                Requires that you are the owner of the token you are
                transferring{" "}
              </p>
              <p className="subtitle">
                <a href="https://blog.eristica.com/how-to-transfer-ert-erc20-tokens-using-myetherwallet-2ea84b35a473">
                  How it works
                </a>
              </p>
              <p className="">
                Enter the ID of the token you want to transfer, the address to
                whom its going to, and thats it!{" "}
              </p>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">Address to recieve token</label>
                <input
                  name="Address"
                  className="input is-info"
                  id="address"
                  required="true"
                />
                <label htmlFor="number">Token ID</label>
                <input
                  className="input is-info"
                  id="id"
                  type="number"
                  required="true"
                />
                <hr />
                <button className="button is-link is-fullwidth is-large">
                  Submit
                </button>
              </form>
            </div>
          </section>
          <footer className="modal-card-foot is-clearfix">
            <a className="button" onClick={this.props.onClick}>
              Cancel
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
export default Web3HOC(Transfer);

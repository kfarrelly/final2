import React, { Component } from "react";
import Footer from "../Footer";

import { AwesomeButton } from "react-awesome-button";

import metamask from "../../images/metamask_locked.jpg";
import metaMaskClose from "../../images/metamask_icon.png";
import "../../../node_modules/bulma/css/bulma.css";
import "./web3.css";
const Web3HOC = WrappedComponent => {
  return class Web3HOC extends Component {
    render() {
      if (
        (this.props.network === "4" && this.props.accounts !== undefined) ||
        this.props.web3Flag === true
      ) {
        return <WrappedComponent {...this.props} />;
      } else {
        console.log(
          "ERROR IN WEB3HOC --- Current network is ID: " + this.props.network
        );
        console.log(this.props);

        return (
          <div className="modal is-active ">
            <div className="modal-background " />
            <div className="modal-card sized topRight ">
              <section className="modal-card-body border1 ">
                <div className="content">
                  <h1 className="title">
                    {" "}
                    Check that metamask is unlocked and on Rinkeby{" "}
                  </h1>
                  <img src={metamask} />
                  <span className=" fadeOut1">
                    <img
                      src={metaMaskClose}
                      className="image x50 reddit1 positioning fadeOut1"
                    />
                  </span>
                </div>{" "}
                <AwesomeButton
                  type="facebook"
                  href="https://consensys.zendesk.com/hc/en-us/categories/360000441452-Using-MetaMask"
                  target="_blank"
                  size="large"
                  className="margined1"
                >
                  Show me how to set up metamask
                </AwesomeButton>
              </section>
            </div>
            <Footer />
          </div>
        );
      }
    }
  };
};

export default Web3HOC;

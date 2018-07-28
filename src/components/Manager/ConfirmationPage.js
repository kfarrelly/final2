import React, { Component } from "react";
import "../../../node_modules/bulma/css/bulma.css";
import "./editpage.css";
import Web3HOC from "../Creator/web3HOC.js";

const ConfirmationPage = props => {
  console.log(props.url);

  return (
    <div className="modal is-active ">
      <div className="modal-background" onClick={props.onClick} />
      <div className="modal-card sizing">
        <section className="modal-card-body">
          <div>
            <p className="title">
              Confirmation Page: You are about to transfer Token ID:{" "}
              <span className="title has-background-warning">
                {props.txDetails[1]}
              </span>
            </p>
            <p className="subtitle topleft">
              {" "}
              From your address of:{" "}
              <span className="subtitle has-background-success">
                {" "}
                {props.owner}
              </span>{" "}
            </p>
            <p className="has-text-danger h1-center">
              {" "}
              Please carefully review your transaction below
            </p>

            <div className="columns is-multiline">
              <div className="column">
                <figure className="image item max1 box">
                  <a href={props.token.url} target="_blank">
                    <img
                      onError={props.default}
                      src={props.token.url}
                      alt="ERC721 made here at Mintable.io"
                    />
                  </a>
                </figure>
              </div>

              <div className="column">
                <figure className="image item max1 box is-pulled-right">
                  <img
                    onError={props.default}
                    src={props.pic}
                    alt="ERC721 made here at Mintable.io"
                  />
                </figure>
              </div>
            </div>
          </div>
          <p className="">
            <span className="subtitle has-background-warning">
              Token: {props.txDetails[1]}
            </span>{" "}
            is being sent to Address:
            <span className="subtitle has-background-warning">
              {" "}
              {props.txDetails[0]}
            </span>{" "}
          </p>
          <p>
            {" "}
            This cannot be undone once submitted. Make sure you want to transfer
            ownership of this token to the address listed.{" "}
          </p>
          <p>
            {" "}
            If this information is correct then press submit and accept the
            transaction{" "}
          </p>
          <div>
            <a
              className="button is-danger is-fullwidth nearBottom is-large"
              onClick={props.onClick}
            >
              {" "}
              Reset{" "}
            </a>
          </div>{" "}
          <div className="topleft">
            <a
              className="button is-link is-fullwidth nearBottom is-large "
              onClick={props.onClickSubmit}
            >
              {" "}
              Submit{" "}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Web3HOC(ConfirmationPage);

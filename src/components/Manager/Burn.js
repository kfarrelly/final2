import React, { Component } from "react";
import "../../../node_modules/bulma/css/bulma.css";

const Burn = (props, token, web3) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.onClick} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title" />
          <button className="delete" onClick={props.onClick} />
        </header>
        <section className="modal-card-body">
          <div className="content" />
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={props.onClick}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Burn;

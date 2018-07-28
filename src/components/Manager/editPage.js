import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./inputPage.css";
import "../../../node_modules/bulma/css/bulma.css";
import { GridLoader } from "react-spinners";
import SocialSharing from "./SocialSharing.js";
import "./editpage.css";
import Tabs from "./Tab.js";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
class EditPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  calculate() {
    let array = [];
    let i = 1;
    while (i < this.props.token.totalSupply) {
      array.push(i);
      i++;
    }
    return array;
  }
  mint() {
    this.props.mint;
  }
  onClick(e) {
    console.log("editPage running onClick from tab" + e);

    let a = this.props.address;
    this.props.tabOnClick(e, a);
  }
  addDefaultSrc(ev) {
    ev.target.src =
      "https://pbs.twimg.com/profile_images/941686687805132800/sHttVPav_400x400.png";
  }
  link() {
    return "https://www.rinkeby.etherscan.io/token/" + this.props.address;
  }

  render() {
    const url = "http://mintable.io/manager/" + this.props.address;
    const title =
      "I made a collectible ERC-721 at Mintable.io! Check out " +
      this.props.token.name;
    return (
      <div>
        {this.props.isRealAddress ? (
          <section className="hero  is-large is-bold relative">
            <div className="hero-body">
              <div className="custom shadowbox box margin">
                <Tabs
                  tokens={this.calculate()}
                  onClick={this.onClick.bind(this)}
                />
                <header>
                  <p className="title has-text-black">
                    {this.props.token.name} -{" "}
                    <a href={this.link()} target="_blank">
                      {this.props.address}{" "}
                    </a>
                  </p>
                </header>
                <section className="body ">
                  <div className="columns is-multiline topleft padding50">
                    <div className="column is-full-mobile is-full-tablet is-one-quarter-desktop is-one-quarter-widescreen ">
                      <figure className="image">
                        <a href={this.props.token.url} target="_blank">
                          <img
                            onError={this.addDefaultSrc}
                            src={this.props.token.url}
                            alt="ERC721 made here at ERC21 Generator"
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="column  is-full-mobile is-full-tablet is-half-desktop is-three-quarters-widescreen">
                      <figure className="">
                        <div className="column">
                          <p className="title has-text-grey">
                            Name:{" "}
                            <span className="title has-text-black">
                              {this.props.token.name}
                            </span>{" "}
                          </p>
                        </div>

                        <div className="column">
                          <p className="title has-text-grey">
                            Symbol:{" "}
                            <span className="title has-text-black">
                              {" "}
                              {this.props.token.symbol}{" "}
                            </span>{" "}
                          </p>
                        </div>

                        <div className="column">
                          <p className="title has-text-grey">
                            IPFS link or token URL:{" "}
                            <span className="title has-text-black">
                              <a href={this.props.token.url}>
                                {this.props.token.url}
                              </a>
                            </span>{" "}
                          </p>
                        </div>

                        <div className="column">
                          <span className="title has-text-grey">
                            MetaData:{" "}
                            <span className="title has-text-black">
                              {this.props.token.input1}
                            </span>
                            <p className="title has-text-black">
                              {this.props.token.input2}
                            </p>
                            <p className="title has-text-black">
                              {this.props.token.input3}
                            </p>
                            <p className="title has-text-black">
                              {this.props.token.int}
                            </p>
                          </span>
                        </div>
                      </figure>
                    </div>

                    <SocialSharing url={url} title={title} />
                  </div>
                  <div>
                    <div className="box columns is-multiline shadowbox">
                      <div className="column  is-full-mobile is-full-tablet is-half-desktop is-half-widescreen">
                        <p className="title has-text-black">Admin Abilities</p>
                        <hr />
                        <div>
                          <div className="">
                            <p className="subtitle has-text-black">
                              {" "}
                              Mint Tokens{" "}
                            </p>
                            <p>
                              {" "}
                              Create a new child token under this contract -
                              must be the owner{" "}
                            </p>
                            <p className="is-multiline">
                              {" "}
                              Requires all the information for a new token,plus
                              who will{" "}
                            </p>{" "}
                            <p>own it (address it will be sent to) </p>
                            <hr />
                            <AwesomeButton
                              type="secondary"
                              action={this.props.mint}
                            >
                              Mint
                            </AwesomeButton>
                          </div>
                          <hr />
                          <div>
                            <p className="subtitle has-text-black">
                              {" "}
                              Burn Tokens{" "}
                              <span className="has-text-danger">
                                {" "}
                                Coming Soon{" "}
                              </span>
                            </p>
                            <p>
                              {" "}
                              Burn a token and delete it forever. Must be the
                              owner.
                            </p>

                            <hr />

                            <AwesomeButton disabled="true" type="reddit">
                              Burn
                            </AwesomeButton>
                          </div>
                        </div>
                      </div>

                      <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen">
                        <hr />
                        <p className="title has-text-black">Transfers</p>

                        <div>
                          <p className="subtitle has-text-black"> Transfer </p>
                          <p>
                            {" "}
                            Transfer tokens from yourself, to someone else.{" "}
                          </p>
                          <p> Requires Ownership and address of reciever </p>
                          <hr />

                          <AwesomeButton
                            type="facebook"
                            action={this.props.transfer}
                          >
                            Transfer
                          </AwesomeButton>
                        </div>
                        <hr />
                        <div>
                          <p className="subtitle is-strong has-text-black">
                            {" "}
                            Safe Transfer{" "}
                            <span className="has-text-danger">
                              {" "}
                              Coming Soon{" "}
                            </span>
                          </p>
                          <p>
                            {" "}
                            Safe Transfer tokens from yourself, to someone else.{" "}
                          </p>
                          <p> Requires Ownership and address of reciever </p>
                          <hr />
                          <AwesomeButton disabled="true">
                            Safe Transfer
                          </AwesomeButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        ) : (
          <div className="center">
            <GridLoader
              className="center"
              color={"#340057"}
              size={75}
              loading={!this.props.isRealAddress}
            />
          </div>
        )}
      </div>
    );
  }
}
export default EditPage;

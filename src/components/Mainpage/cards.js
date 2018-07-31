import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import code from "../../images/code.png";
import browse from "../../images/browse.png";
import "./index.css";
import "../../../node_modules/bulma/css/bulma.css";

export const Cards = props => {
  return (
    <section className="hero is-medium is-bold is-dark">
      <h1 className="h1-center spacing responsive-size"> What is Mintable? </h1>

      <div className="hero-body">
        <div className="columns is-desktop is-relative cards">
          <div
            className="column height  is-full-mobile is-full-tablet is-one-third-desktop 
          is-one-third-widescreen mobileCentered"
          >
            {" "}
            <img src={code} className="pos zind" />
            <h1 className="marginBottom">
              {" "}
              Mintable creates an ERC-721 for you. So you don't have to worry
              about the security of coding your own smart contract{" "}
            </h1>{" "}
            <AwesomeButton className="centered" type="facebook" href="/create">
              Create a token!
            </AwesomeButton>
            <div className="has-text-white subtitle line-1 anim-typew pos1 background1">
              <code>
                {" "}
                contract ERC721Basic function balanceOf(address _owner{" "}
              </code>
              <p className=" background1">
                public view returns (uint256 _balance);{" "}
              </p>
              <p className=" background1">
                function ownerOf(uint256 _tokenId) public view{" "}
              </p>
              <p className=" background1">returns (address _owner);</p>{" "}
              <p className=" background1">
                {" "}
                function exists(uint256 _tokenId) public view returns
              </p>{" "}
              <p className=" background1">
                {" "}
                (bool _exists); function approve(address _to, uint256 _tokenId)
              </p>{" "}
              <p className=" background1">
                {" "}
                public; function getApproved(uint256 _tokenId) public view
                returns
              </p>{" "}
              <p className=" background1">
                {" "}
                bool _approved) public; function isApprovedForAll(address
                _owner,
              </p>{" "}
              <p className=" background1">
                address _operator) public view returns (bool); function
              </p>{" "}
            </div>
          </div>
          <div className="column relative is-full-mobile is-full-tablet is-one-third-desktop is-one-third-widescreen mobileCentered">
            <img src={browse} className="pos2" />
            <h1> Browse and Collect Tokens to share them with the world! </h1>
            <AwesomeButton className="centered " type="reddit" href="/browse">
              Browse!
            </AwesomeButton>
          </div>
          <div className="column  relative is-full-mobile is-full-tablet is-one-third-desktop is-one-third-widescreen mobileCentered">
            <img
              src="https://vignette.wikia.nocookie.net/scribblenauts/images/0/0f/Auction_House.png/revision/latest?cb=20130307204322"
              className="catImage1 pos3"
            />
            <h1>
              {" "}
              Manage and Sell your collectibles for real{" "}
              <span className="green">&#926;</span>Ether, and everything is
              decentralized!
            </h1>
            <AwesomeButton
              className="centered "
              type="link"
              href="/browse"
              size="small"
            >
              Visit the Auction House
            </AwesomeButton>
          </div>
        </div>
      </div>
    </section>
  );
};

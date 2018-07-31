import React, { Component } from "react";

import LazyHero from "react-lazy-hero";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css";
import right from "../../images/right.png";
import left from "../../images/left.png";
import ipfs from "../../images/ipfs.png";
import "../../../node_modules/bulma/css/bulma.css";
const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ zIndex: 1000, position: "absolute" }}
      onClick={onClick}
    >
      <img src={left} />
    </div>
  );
};
const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ zIndex: 1000 }} onClick={onClick}>
      <img src={right} />
    </div>
  );
};
class CTAheader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img:
        "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      img1: ipfs
    };
  }
  render() {
    //TODO remove item = {}
    var settings = {
      dots: true,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true,
      nextArrow: <SampleNextArrow />
    };
    var item = {};
    return (
      <div className="padding1">
        <LazyHero
          imageSrc={this.state.img}
          color="#305"
          opacity={0.75}
          minHeight="85vh"
          parallaxOffset={100}
          transitionDuration={600}
          transitionTimingFunction="ease-in-out"
        >
          <h1 className="has-text-white h1 topLeft line-1 anim-typewriter">
            Get your collectible on.{" "}
          </h1>
          <span className="header has-text-white left">
            Browse, Manage, Collect, or Create
          </span>
          <span className=" h2 has-text-white topPadding left">
            <p className="subtitle-header">
              {" "}
              and even <span className="green">Sell</span> your ERC-721 tokens
              on the Ethereum Blockchain
            </p>
          </span>
          <div className="isright">
            <Slider {...settings}>
              <div className="column max ">
                <div className="card border1 shadowbox zind">
                  <div className="card-image  is-marginless">
                    <figure className="image  catImage is-marginless">
                      <img
                        src="https://pbs.twimg.com/profile_images/3318891830/06715c901d11d2c8bb522ac87d3c39a7_400x400.png"
                        alt={item.name}
                        className="border2 image1"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title font is-4">Batty Cat Card</p>
                        <p className="subtitle"> Token ID: 1 </p>
                      </div>
                    </div>

                    <div className="card-content is-paddingless container1">
                      <a href={item.url}>{item.url}</a>
                      <label htmlFor="input3">URL:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="Could be Image or IPFS"
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">Special Power:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="His jumping level is 99"
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">MetaData:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="He's the hero Gotham deserves"
                        readOnly="true"
                        type="text"
                      />{" "}
                      <p>{item.input2}</p>
                      <p>{item.input3}</p>
                      <p>{item.number}</p>
                    </div>
                  </div>
                  <AwesomeButton
                    type="github"
                    action={this.props.create}
                    className="marginBottom"
                  >
                    Create a token!
                  </AwesomeButton>
                </div>
              </div>

              <div className="column max">
                <div className="card border1  shadowbox">
                  <div className="card-image  is-marginless">
                    <figure className="image catImage  is-marginless">
                      <img
                        src={this.state.img1}
                        alt={item.name}
                        className="border2 image1"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title font is-4">IPFS Data for Sale</p>
                        <p className="subtitle"> Token ID: 2 </p>
                      </div>
                    </div>

                    <div className="card-content is-paddingless container1">
                      <a href={item.url}>{item.url}</a>
                      <label htmlFor="input3">URL:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="IPFS Link"
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">Files Included:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="admin.php..."
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">MetaData:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="Any data you want"
                        readOnly="true"
                        type="text"
                      />{" "}
                      <p>{item.input2}</p>
                      <p>{item.input3}</p>
                      <p>{item.number}</p>
                    </div>
                  </div>
                  <AwesomeButton
                    type="github"
                    action={this.props.create}
                    className="marginBottom"
                  >
                    Create a token!
                  </AwesomeButton>
                </div>
              </div>
              <div className="column max">
                <div className="card border1  shadowbox">
                  <div className="card-image  is-marginless">
                    <figure className="image catImage  is-marginless">
                      <img
                        src="http://www.geldfritz.net/cdn/21/1990/406/proof-of-ownership-letter-sample_55048.jpg"
                        alt={item.name}
                        className="border2 image1"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title font is-4">Proof Of Ownership</p>
                        <p className="subtitle"> Token ID: 3 </p>
                      </div>
                    </div>

                    <div className="card-content is-paddingless container1">
                      <a href={item.url}>{item.url}</a>
                      <label htmlFor="input3">URL:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="Could be Image link or IPFS files"
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">Certificate Number:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="#3216416"
                        readOnly="true"
                        type="text"
                      />
                      <label htmlFor="input3">MetaData:</label>
                      <input
                        className="input is-primary"
                        id="input3"
                        value="Any data you want"
                        readOnly="true"
                        type="text"
                      />{" "}
                      <p>{item.input2}</p>
                      <p>{item.input3}</p>
                      <p>{item.number}</p>
                    </div>
                  </div>
                  <AwesomeButton
                    type="github"
                    action={this.props.create}
                    className="marginBottom"
                  >
                    Create a token!
                  </AwesomeButton>
                </div>
              </div>
            </Slider>
          </div>{" "}
          <div className="flexBox">
            <div className="flexItem">
              <AwesomeButton
                type="secondary"
                action={this.props.create}
                className="marginBottom"
              >
                Watch a video on how it works
              </AwesomeButton>
            </div>
            <div className="flexItem">
              <AwesomeButton
                type="facebook"
                action={this.props.create}
                className="marginBottom"
              >
                Create a token!
              </AwesomeButton>
            </div>
          </div>
        </LazyHero>
        <section className="hero is-medium is-bold is-dark mobilespace">
          <div className="hero-body mobileSpace" />
        </section>
      </div>
    );
  }
}

export default CTAheader;

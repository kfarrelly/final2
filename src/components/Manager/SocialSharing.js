import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton
} from "react-share";
import PropTypes from "prop-types";
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon
} from "react-share";
import "../Creator/App.css";

const SocialSharing = props => {
  var url = props.url;
  var title = props.title;
  return (
    <div className="h1-center center1 margin">
      <p className="h1-center title"> Share with your Friends! </p>
      <div className="flex1">
        <div className="twitter ">
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={75} round={true} />
          </TwitterShareButton>
        </div>
        <div>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={75} round />
          </FacebookShareButton>
        </div>

        <div>
          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={75} round />
          </TelegramShareButton>
        </div>

        <div>
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={75} round />
          </WhatsappShareButton>
        </div>

        <div>
          <GooglePlusShareButton url={url}>
            <GooglePlusIcon size={75} round />
          </GooglePlusShareButton>
        </div>

        <div>
          <LinkedinShareButton
            url={url}
            title={title}
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon size={75} round />
          </LinkedinShareButton>
        </div>

        <div>
          <PinterestShareButton
            url={url}
            media={`${String(window.location)}/$url}`}
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={75} round />
          </PinterestShareButton>
        </div>
        <div className="reddit">
          <RedditShareButton
            url={url}
            title={title}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={75} round />
          </RedditShareButton>
        </div>

        <div>
          <EmailShareButton url={url} subject={title} body="body">
            <EmailIcon size={75} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};
export default SocialSharing;

SocialSharing.PropTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

import React, { Component } from "react";

import "react-awesome-button/dist/themes/theme-blue.css";
import Video from "./video.js";
import "./index.css";
import "../../../node_modules/bulma/css/bulma.css";
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
export const HowitWorks = () => {
  return (
    <section className="hero is-medium is-bold is-dark">
      <h1 className="h1-center">Watch a video on how it works! </h1>
      <div className="hero body">
        <div className="container h1-center">
          <Video />
        </div>
      </div>
    </section>
  );
};
const _onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

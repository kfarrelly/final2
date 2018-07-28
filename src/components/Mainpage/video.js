import React, { Component } from "react";
import YouTube from "react-youtube";
import "react-awesome-button/dist/themes/theme-blue.css";

import "./index.css";
import "../../../node_modules/bulma/css/bulma.css";

const videoIdA = "eFFgbc5Vcbw";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: videoIdA,
      player: null,
      opts: {
        height: "350",

        width: "350",
        playerVars: {
          autoplay: 1,
          start: 74
        }
      }
    };

    this.onReady = this.onReady.bind(this);

    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    console.log(
      `YouTube Player object for videoId: "${
        this.state.videoId
      }" has been saved to state.`
    ); // eslint-disable-line
    this.setState({
      player: event.target
    });

    this.state.player.setVolume(0);
  }

  onPlayVideo() {}

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  render() {
    return (
      <div>
        <YouTube
          videoId={this.state.videoId}
          opts={this.state.opts}
          onReady={this.onReady}
        />
      </div>
    );
  }
}

export default Video;

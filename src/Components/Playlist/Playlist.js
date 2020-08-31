import React, { Component } from "react";
import "./Playlist.css";

class Playlist extends Component {
  render() {
    return (
      <div>
        <div className="Playlist">
          <input defaultValue={"New Playlist"} />
          {/* <!-- Add a TrackList component --> */}
          <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      </div>
    );
  }
}

export default Playlist;

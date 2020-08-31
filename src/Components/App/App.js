import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            Da<span className="highlight">zz</span>le
          </h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults />
              <Playlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

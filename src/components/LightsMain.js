import React, { Component } from "react";
import LightsOut from "./LightsOut";
import "./LightsMain.css";

class LightsMain extends Component {
  constructor(props) {
    super(props);
    this.state = { gameStart: false };
    this.redayPlay = this.redayPlay.bind(this);
  }
  redayPlay() {
    this.setState({ gameStart: true });
  }

  render() {
    return (
      <div>
        <h1>LightsOut</h1>
        {this.state.gameStart ? (
          <LightsOut />
        ) : (
          <div>
            <h2>Game Rules:</h2>
            <h3>
              1. In this game, a click on the blue color cell makes the
              adjecent, top and below cells are toggle thier colors.
            </h3>

            <h3>
              2. If all cells blue colors are turn to grey color then You are
              Won the Game.
            </h3>
            <h3>3. The game gives you 'n' number of chances.</h3>
            <p style={{ textAlign: "center", margin: "15px 0 0 0" }}>
              If you are ready to play Game Click Ok to Play
            </p>
            <div style={{ textAlign: "center" }}>
              <button onClick={this.redayPlay} className="okBtn">
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LightsMain;

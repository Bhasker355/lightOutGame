import React, { Component } from "react";
import "./LightsOut.css";

class LightsOut extends Component {
  static defaultProps = {
    row: 5,
    col: 5,
  };
  constructor(props) {
    super(props);
    this.state = {
      boxesRow: Array.from({ length: this.props.row }),
      boxesCol: Array.from({ length: this.props.col }),
    };
    this.game = this.game.bind(this);
  }
  game(evt) {
    let totalEl = evt.target.parentElement.children;
    let totalElLength = totalEl.length;

    let prevtotalEl = evt.target.parentElement.previousElementSibling;

    let nexttotalEl = evt.target.parentElement.nextElementSibling;

    for (let i = 0; i < totalElLength; i++) {
      if (totalEl.item(i) === evt.target) {
        if (prevtotalEl) {
          prevtotalEl.children.item(i).classList.toggle("blue");
        }

        if (nexttotalEl) {
          nexttotalEl.children.item(i).classList.toggle("blue");
        }
      }
    }

    evt.target.classList.toggle("blue");
    if (evt.target.previousElementSibling) {
      evt.target.previousElementSibling.classList.toggle("blue");
    }
    if (evt.target.nextElementSibling) {
      evt.target.nextElementSibling.classList.toggle("blue");
    }

    console.log(
      evt.target.parentElement.parentElement.children.item(0).classList
    );
  }

  render() {
    let eachCol = this.state.boxesCol.map((e, idx) => (
      <div key={idx} className="sing-box blue" onClick={this.game}></div>
    ));

    return (
      <div className="LightsOut">
        {this.state.boxesRow.map((e, idx) => (
          <div key={idx} className="row">
            {eachCol}
          </div>
        ))}
      </div>
    );
  }
}

export default LightsOut;

import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="display-container">
        <div className="pre-render"> {this.props.preResult}</div>
        <div id="display">{this.props.result}</div>
      </div>
    );
  }
}

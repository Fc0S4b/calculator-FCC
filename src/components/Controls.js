import React from "react";
import btns from "../utils/utils";

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.handleControl = this.handleControl.bind(this);
  }

  handleControl(e) {
    if (this.props.result.length > 15 || this.props.preResult.length > 20) {
      this.props.warningAlert();
    } else {
      if (e.target.value === "C") {
        this.props.clear(this.props.result);
      }
      if (e.target.value === "AC") {
        this.props.allClear();
      }

      if (e.target.value === "." && !this.props.isDecimal) {
        this.props.addOperand(e.target.value);
        this.props.setIsDecimal(true);
        this.props.setIsOperator(true);
      }
      if (e.target.value === "=") {
        this.props.calculateResult();
      }
    }
  }
  render() {
    const { controls } = btns;
    return (
      <div className="controls">
        {controls.map((control) => {
          const { id, value, text } = control;
          return (
            <button key={id} id={id} value={value} onClick={this.handleControl}>
              {text}
            </button>
          );
        })}
      </div>
    );
  }
}

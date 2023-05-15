import React from "react";
import btns from "../utils/utils";

export default class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumericalValue = this.handleNumericalValue.bind(this);
  }

  handleNumericalValue(e) {
    if (this.props.result.length > 15 || this.props.preResult.length > 20) {
      this.props.warningAlert();
    } else {
      this.props.addOperand(e.target.value);
      this.props.setIsOperator(false);
    }
  }
  render() {
    const { numbers } = btns;
    return (
      <div className="numbers">
        {numbers.map((numBtn) => {
          const { id, value, text } = numBtn;

          return (
            <button
              key={id}
              id={id}
              value={value}
              onClick={this.handleNumericalValue}
            >
              {text}
            </button>
          );
        })}
      </div>
    );
  }
}

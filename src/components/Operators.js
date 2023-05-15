import React from "react";
import btns from "../utils/utils";

export default class Operators extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueOp = this.handleValueOp.bind(this);
  }

  handleValueOp(e) {
    if (this.props.result.length > 15 || this.props.preResult.length > 20) {
      this.props.warningAlert();
    } else {
      const operator = e.target.value;
      if (
        !this.props.isOperator ||
        (this.props.isOperator &&
          this.props.operator !== operator &&
          this.props.lastInput !== ".")
      ) {
        this.props.setOperator(operator);
        this.props.setIsOperator(true);
        this.props.setIsDecimal(false);
      }
    }
  }
  render() {
    const { operators } = btns;

    return (
      <div className="operators">
        {operators.map((operator) => {
          const { id, value, text } = operator;
          return (
            <button key={id} id={id} value={value} onClick={this.handleValueOp}>
              {text}
            </button>
          );
        })}
      </div>
    );
  }
}

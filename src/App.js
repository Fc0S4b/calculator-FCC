import "./styles.css";
import React from "react";
import { Controls, Display, Numbers, Operators } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display result={this.props.result} preResult={this.props.preResult} />
        <div className="btn-group">
          <Operators
            setOperator={this.props.setOperator}
            setIsOperator={this.props.setIsOperator}
            isOperator={this.props.isOperator}
            operator={this.props.operator}
            setIsDecimal={this.props.setIsDecimal}
            lastInput={this.props.lastInput}
            result={this.props.result}
            preResult={this.props.preResult}
            warningAlert={this.props.warningAlert}
          />
          <div className="numbers-ctrl">
            <Numbers
              setIsOperator={this.props.setIsOperator}
              addOperand={this.props.addOperand}
              preResult={this.props.preResult}
              result={this.props.result}
              warningAlert={this.props.warningAlert}
            />
            <Controls
              clear={this.props.clear}
              allClear={this.props.allClear}
              result={this.props.result}
              preResult={this.props.preResult}
              addOperand={this.props.addOperand}
              setIsDecimal={this.props.setIsDecimal}
              isDecimal={this.props.isDecimal}
              setIsOperator={this.props.setIsOperator}
              calculateResult={this.props.calculateResult}
              warningAlert={this.props.warningAlert}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

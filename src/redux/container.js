import { createStore } from "redux";
import { connect } from "react-redux";
import resultReducer from "./reducer";
import App from "../App";
import {
  addOperand,
  setOperator,
  setIsOperator,
  clear,
  allClear,
  setIsDecimal,
  calculateResult,
  warningAlert
} from "./actions";

// create store
export const store = createStore(resultReducer);

// pass states as props to react components

export function mapStateToProps(state) {
  return {
    result: state.result,
    preResult: state.preResult,
    operator: state.operator,
    isOperator: state.isOperator,
    isDecimal: state.isDecimal,
    lastInput: state.lastInput
  };
}

// pass actions as props to react components
export const mapDispatchToProps = (dispatch) => {
  return {
    addOperand: (numberValue) => {
      dispatch(addOperand(numberValue));
    },
    setIsOperator: (operator) => {
      dispatch(setIsOperator(operator));
    },
    setOperator: (operator) => {
      dispatch(setOperator(operator));
    },
    setIsDecimal: (value) => {
      dispatch(setIsDecimal(value));
    },
    clear: (currentValue) => {
      dispatch(clear(currentValue));
    },
    allClear: () => {
      dispatch(allClear());
    },
    calculateResult: () => {
      dispatch(calculateResult());
    },
    warningAlert: () => {
      dispatch(warningAlert());
    }
  };
};

// connect redux to React
export const Container = connect(mapStateToProps, mapDispatchToProps)(App);

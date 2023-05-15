import {
  IS_OPERATOR,
  ADD_OPERAND,
  ADD_OPERATOR,
  IS_DECIMAL,
  CLEAR,
  ALL_CLEAR,
  CALCULATE_RESULT,
  WARNING_ALERT
} from "./actionType";

export const addOperand = (numberValue) => {
  return {
    type: ADD_OPERAND,
    payload: numberValue
  };
};
export const setIsOperator = (isOperator) => {
  return {
    type: IS_OPERATOR,
    payload: isOperator
  };
};

export const setOperator = (operator) => {
  return {
    type: ADD_OPERATOR,
    payload: operator
  };
};

export const setIsDecimal = (value) => {
  return {
    type: IS_DECIMAL,
    payload: value
  };
};

export const clear = (currentValue) => {
  return {
    type: CLEAR,
    payload: currentValue
  };
};

export const allClear = () => {
  return {
    type: ALL_CLEAR
  };
};

export const calculateResult = () => {
  return {
    type: CALCULATE_RESULT
  };
};

export const warningAlert = () => {
  return {
    type: WARNING_ALERT
  };
};

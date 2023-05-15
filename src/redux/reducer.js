import {
  IS_OPERATOR,
  ADD_OPERAND,
  ADD_OPERATOR,
  IS_DECIMAL,
  CALCULATE_RESULT,
  CLEAR,
  ALL_CLEAR,
  WARNING_ALERT
} from "./actionType";

const defaultState = {
  isOperator: false,
  isDecimal: false,
  operator: "",
  preResult: "0",
  result: "0",
  lastInput: "0"
};

const resultReducer = (state = defaultState, action) => {
 
  switch (action.type) {
    case ADD_OPERAND:
      if (state.preResult === "0" && action.payload === "0") {
        return {
          ...state,
          preResult: "0",
          result: "0",
          lastInput: "0"
        };
      } else if (state.isDecimal && !state.isOperator) {
        return {
          ...state,
          preResult: state.preResult + action.payload,
          result: state.result + action.payload,
          lastInput: action.payload
        };
      } else if (
        !state.isDecimal &&
        action.payload === "." &&
        /[x\-+\/]/.test(state.lastInput)
      ) {
        // bug: result add 0 when clear and add decimal after lastInput equals to a operator
        return {
          ...state,
          preResult: state.preResult + "0" + action.payload,
          result: state.result + "0" + action.payload,
          lastInput: action.payload
        };
      } else if (
        !state.isDecimal &&
        !state.isOperator &&
        state.lastInput === "0" &&
        action.payload === "."
      ) {
        return {
          ...state,
          preResult: state.preResult + action.payload,
          result: state.result + action.payload,
          lastInput: action.payload
        };
      } else {
        return {
          ...state,
          preResult:
            state.preResult !== "0"
              ? state.preResult + action.payload
              : state.preResult.replace(/^0/, "") + action.payload,
          result: state.result.replace(/^0|[\+\/x-]/, "") + action.payload,
          lastInput: action.payload
        };
      }

    case ADD_OPERATOR:
      if (action.payload === "+" && state.lastInput === "-") {
        return {
          ...state,
          preResult: state.preResult.replace(/\-$/, "1+"),
          result: action.payload,
          operator: action.payload,
          lastInput: action.payload
        };
      } else if (action.payload !== "-") {
        return {
          ...state,
          preResult: state.preResult.replace(/[\+\/x]$/, "") + action.payload,
          result: action.payload,
          operator: action.payload,
          lastInput: action.payload
        };
      } else {
        return {
          ...state,
          preResult: state.preResult + action.payload,
          result: action.payload,
          operator: action.payload,
          lastInput: action.payload
        };
      }

    case IS_OPERATOR:
      return {
        ...state,
        isOperator: action.payload
      };
    case IS_DECIMAL:
      return {
        ...state,
        isDecimal: action.payload
      };
    case CLEAR:
      let regex = new RegExp(state.result + "$");
      const isNumberRegex = /^[+-]?\d+(\.\d+)?$/;
      const isNumber = isNumberRegex.test(state.preResult);
      const lastPreResult = state.preResult.replace(regex, "");
      const lastOp = lastPreResult[lastPreResult.length - 1];

      return {
        ...state,
        operator: lastOp ? lastOp : "",
        isOperator: false,
        isDecimal: false,
        preResult:
          isNumber || /\.$/.test(state.preResult)
            ? "0"
            : state.preResult.replace(regex, ""),
        result: "0",
        lastInput: lastOp ? lastOp : "0"
      };

    case ALL_CLEAR:
      return {
        ...state,
        operator: "",
        isOperator: false,
        isDecimal: false,
        preResult: "0",
        result: "0",
        lastInput: "0"
      };

    case CALCULATE_RESULT:
      if (!state.isOperator) {
        const newResult = eval(state.preResult.replace(/[x]/g, "*"));
        const formatResult = /\.\d{4,}/.test(newResult)
          ? newResult.toFixed(4)
          : newResult.toString();
        return {
          ...state,
          preResult: formatResult,
          result: "" + formatResult
        };
      } else {
        const formatResult = "NaN";
        return {
          ...state,
          preResult: formatResult,
          result: "" + formatResult
        };
      }
    case WARNING_ALERT:
      return {
        ...state,
        preResult: "Limit reached",
        result: "Limit reached",
        isOperator: true
      };

    default:
      return state;
  }
};

export default resultReducer;

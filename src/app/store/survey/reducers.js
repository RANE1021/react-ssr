import * as types from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case [types.incrementYes]:
      return {
        ...state,
        yes: state.yes + 1
      };
    case [types.incrementNo]:
      return {
        ...state,
        no: state.no + 1
      };
    default:
      return state;
  }
};

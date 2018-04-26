import surveyReducers from "./reducers";
import * as surveyActions from "./actions";
import * as types from "./types";
import initialState from "./initialState";

const actualState = {
  ...initialState
};

describe("Survey Reducers", () => {
  it("it should return the initialState of the store", () => {
    expect(surveyReducers(actualState, {})).toEqual({ yes: 0, no: 0 });
  });

  it("should handle incrementYes", () => {
    expect(surveyReducers(actualState, { type: types.incrementYes })).toEqual({
      yes: 1,
      no: 0
    });
  });

  it("should handle incrementNo", () => {
    expect(surveyReducers(actualState, { type: types.incrementNo })).toEqual({
      yes: 0,
      no: 1
    });
  });
});

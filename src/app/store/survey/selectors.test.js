import { storeName } from "./types";
import initialState from "./preLoad";
import { createStore, surveySelectors } from "../survey";

const storeState = {
  ...initialState
}
const expectedState = {
  yes: 0,
  no: 0
};

// describe("Store selector", () => {
//   it("obtains initial state of yes", () => {

//     expect(storeState.yes).to.equal(expectedState.yes);
//   });
// });

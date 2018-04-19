import { createStore, combineReducers } from "redux";
import {
  actions as surveyActions,
  reducers as surveyReducers,
  selectors as surveySelectors,
  preload as surveyPreload,
  storeName as surveyStoreName
} from "./survey";

export default injectedState =>
  createStore(combineReducers({
    [surveyStoreName]: surveyReducers
  }), {
    [surveyStoreName]: surveyPreload(injectedState)
  });

  export {surveyActions, surveySelectors}

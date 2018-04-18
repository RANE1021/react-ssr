import { createStore, combineReducers } from "redux";
import {
  reducers as surveyReducers,
  selectors as surveySelectors,
  preload as surveyPreload,
  storeName as surveyStoreName
} from "./survey";

export default injectedState =>
  createStore(combineReducers({surveyReducers}), {
    [surveyStoreName]: surveyPreload(injectedState)
  });

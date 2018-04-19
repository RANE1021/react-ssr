import { connect as connectFela } from "react-fela";
import { connect as connectRedux } from "react-redux";

import * as styles from "./styles";
import component from "./component";
import { surveyActions, surveySelectors } from "~/store";

export const mapStateToProps = state => {
  const yes = surveySelectors.getYes(state);
  const no = surveySelectors.getNo(state);
  const total = surveySelectors.getTotal(state);

  return {
    yes,
    no,
    total
  };
};

export const mapDispatchToProps = dispatch => ({
  addYes: () => {
    dispatch(surveyActions.addYes());
  },
  addNo: () => {
    dispatch(surveyActions.addNo());
  }
});

export default connectRedux(mapStateToProps, mapDispatchToProps)(
  connectFela(styles)(component)
);

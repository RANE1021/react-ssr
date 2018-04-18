import React from "react";
import PropTypes from "prop-types";

import ImageExample from "~/components/SurveyExample/ImageExample";
import TotalStats from "~/components/SurveyExample/TotalStats";
import NoButton from "~/components/SurveyExample/NoButton";
import YesButton from "~/components/SurveyExample/YesButton";

const SurveyPage = ({ yes, no , total, addTotal, addYes, addNo, styles }) => (
  <div className={styles.wrapper}>
    <ImageExample />
    <TotalStats yes={yes} no={no} total={total}/>
    <YesButton onYesClick={addYes}/>
    <NoButton onNoClick={addNo}/>
  </div>
);

SurveyPage.propTypes = {
  styles: PropTypes.object.isRequired,
  addNo: PropTypes.func.isRequired,
  addYes: PropTypes.func.isRequired
};

export default SurveyPage;

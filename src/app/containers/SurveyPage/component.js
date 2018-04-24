import React from "react";
import PropTypes from "prop-types";

import ImageExample from "~/components/SurveyExample/ImageExample";
import TotalStats from "~/components/SurveyExample/TotalStats";
import NoButton from "~/components/SurveyExample/NoButton";
import YesButton from "~/components/SurveyExample/YesButton";

const SurveyPage = ({ yes, no, total, addYes, addNo, styles }) => {
  const handleYesClick = () => {
    addYes()
  }
  const handleNoClick = () => {
    addNo()
  }
  return (
    <div className={styles.wrapper}>
      <ImageExample />
      <TotalStats yes={yes} no={no} total={total} />
      <YesButton onYesClick={handleYesClick} />
      <NoButton onNoClick={handleNoClick} />
    </div>
  );
};

SurveyPage.propTypes = {
  styles: PropTypes.object.isRequired,
  addNo: PropTypes.func.isRequired,
  addYes: PropTypes.func.isRequired
};

export default SurveyPage;

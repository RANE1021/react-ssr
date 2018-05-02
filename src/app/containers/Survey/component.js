import React from "react";
import PropTypes from "prop-types";

import ImageExample from "~/components/SurveyExample/ImageExample";
import TotalStats from "~/components/SurveyExample/TotalStats";

const SurveyContainer = ({ yes, no, total, handleAddYes, handleAddNo, styles }) => {
  return (
    <div className={styles.wrapper}>
      <ImageExample />
      <TotalStats yes={yes} no={no} total={total} />
      <button onClick={handleAddYes}>Yes</button>
      <button onClick={handleAddNo}>No</button>
    </div>
  );
};

SurveyContainer.propTypes = {
  styles: PropTypes.object.isRequired,
  handleAddNo: PropTypes.func.isRequired,
  handleAddYes: PropTypes.func.isRequired
};

export default SurveyContainer;

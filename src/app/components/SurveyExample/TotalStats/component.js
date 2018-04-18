import React from "react";

//need to pass in styles and events
const Stats = ({ yes, no , total, styles }) => {
  return (
    <div>
      <div>Total Votes:{total}</div>
      <div>Yes:{yes}</div>
      <div>No:{no}</div>
    </div>
  );
};

export default Stats;

import React from "react";
import PropTypes from "prop-types";
import "./DrumPad.css";

const DrumPad = ({ drumPadName }) => {
  return <div className="drum-pad">{drumPadName}</div>;
};

DrumPad.propTypes = {
  drumPadName: PropTypes.string.isRequired
};

export default DrumPad;

import React from "react";
import PropTypes from "prop-types";

import "./PlayedSoundItem.css";

const PlayedSoundItem = ({ name, isPlayed }) => {
  return (
    <div className={`played-sound ${isPlayed ? "played-sound-played" : ""}`}>
      {name}
    </div>
  );
};

PlayedSoundItem.propTypes = {
  name: PropTypes.string.isRequired,
  isPlayed: PropTypes.bool.isRequired
};

export default PlayedSoundItem;

import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./DrumPad.css";

const DrumPad = ({ drumPad, handlePlay }) => {
  const drumSound = useRef();

  const handleClick = () => {
    handlePlay({ audio: drumSound.current, name: drumPad.name });
  };

  return (
    <div className="drum-pad" onClick={handleClick}>
      {drumPad.name}
      <audio
        ref={drumSound}
        className="clip"
        id={drumPad.name}
        src={drumPad.src}
      ></audio>
    </div>
  );
};

DrumPad.propTypes = {
  drumPad: PropTypes.object.isRequired,
  handlePlay: PropTypes.func.isRequired
};

export default DrumPad;

import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./DrumPad.css";

const DrumPad = ({ drumPad }) => {
  const drumSound = useRef();

  const handleClick = () => {
    drumSound.current.play();
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
  drumPad: PropTypes.object.isRequired
};

export default DrumPad;

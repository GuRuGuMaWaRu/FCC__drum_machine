import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";

import SoundContext from "../../context/sound/soundContext";
import "./DrumPad.css";

const DrumPad = ({ drumPad }) => {
  const drumSound = useRef();

  const soundContext = useContext(SoundContext);
  const { addSound } = soundContext;

  const handleClick = () => {
    drumSound.current.play();
    addSound({
      name: drumPad.name,
      sound: drumSound.current
    });
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

import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import uuidv1 from "uuid/v1";

import SoundContext from "../../context/sound/soundContext";
import "./DrumPad.css";

const DrumPad = ({ drumPad }) => {
  const drumSound = useRef();

  const soundContext = useContext(SoundContext);
  const { currentTrack, addSound, clearDisplays } = soundContext;

  const handleClick = () => {
    drumSound.current.currentTime = 0;
    drumSound.current.play();

    if (currentTrack.length > 9) {
      clearDisplays();
    } else {
      addSound({
        id: uuidv1(),
        name: drumPad.name,
        audio: drumSound.current
      });
    }
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

import React, { useContext } from "react";

import PlayedSoundItem from "./PlayedSoundItem";
import SoundContext from "../../context/sound/soundContext";
import "./PlayedSoundsDisplay.css";

const PlayedSoundsDisplay = () => {
  const soundContext = useContext(SoundContext);
  const { currentSound, currentTrack } = soundContext;

  return (
    <div id="played-sounds-display">
      {currentTrack.map(sound => (
        <PlayedSoundItem
          key={sound.id}
          name={sound.name}
          isPlayed={currentSound && currentSound.id === sound.id ? true : false}
        />
      ))}
    </div>
  );
};

export default PlayedSoundsDisplay;

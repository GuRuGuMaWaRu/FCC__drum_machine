import React, { useState, useContext } from "react";

import PlayedSoundsDisplay from "../displays/PlayedSoundsDisplay";
import SoundContext from "../../context/sound/soundContext";

const SoundStorePane = () => {
  const [playing, setPlaying] = useState(false);

  const soundContext = useContext(SoundContext);
  const { currentTrack, playSound } = soundContext;

  const handlePlay = () => {
    setPlaying(true);
    let iteration = 0;

    const intervalID = setInterval(() => {
      if (iteration >= currentTrack.length) {
        clearInterval(intervalID);
        playSound(null);
        setPlaying(false);
        return;
      }

      playSound({
        id: currentTrack[iteration].id,
        name: currentTrack[iteration].name
      });
      currentTrack[iteration].audio.currentTime = 0;
      currentTrack[iteration].audio.play();

      iteration += 1;
    }, 500);
  };

  return (
    <div>
      <PlayedSoundsDisplay />
      <button onClick={handlePlay} disabled={playing}>
        Play
      </button>
    </div>
  );
};

export default SoundStorePane;

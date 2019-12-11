import React, { useState, useContext } from "react";
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

      playSound(currentTrack[iteration].name);
      currentTrack[iteration].sound.play();

      iteration += 1;
    }, 500);
  };

  return (
    <div>
      <button onClick={handlePlay} disabled={playing}>
        Play
      </button>
    </div>
  );
};

export default SoundStorePane;

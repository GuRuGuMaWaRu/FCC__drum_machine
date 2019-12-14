import React, { useState, useContext } from "react";

import CurrentTrackDisplay from "../displays/CurrentTrackDisplay";
import SoundContext from "../../context/sound/soundContext";
import "./SoundStorePane.css";

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
    <div className="sound-store-pane">
      <div className="current-track-area">
        <button
          className="control-button play-button"
          onClick={handlePlay}
          disabled={playing}
        >
          <i className="fas fa-play"></i>
        </button>
        <CurrentTrackDisplay />
        <button className="control-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="control-button">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default SoundStorePane;

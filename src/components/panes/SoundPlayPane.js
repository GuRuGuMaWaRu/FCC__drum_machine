import React from "react";
import CurrentSoundDisplay from "../displays/CurrentSoundDisplay";
import DrumPadsPanel from "../sounds/DrumPadsPanel";

const SoundPlayPane = () => {
  return (
    <div>
      <CurrentSoundDisplay />
      <DrumPadsPanel />
    </div>
  );
};

export default SoundPlayPane;

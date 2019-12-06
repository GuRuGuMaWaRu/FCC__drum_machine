import React from "react";
import DrumPad from "./DrumPad";
import "./DrumPadsPanel.css";

const DrumPadsPanel = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div id="drum-pads-panel">
      {buttons.map(button => (
        <DrumPad key={button} drumPadName={button} />
      ))}
    </div>
  );
};

export default DrumPadsPanel;

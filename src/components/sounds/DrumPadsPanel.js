import React from "react";
import DrumPad from "./DrumPad";
import "./DrumPadsPanel.css";

const DrumPadsPanel = () => {
  const buttons = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div id="drum-pads-panel">
      {buttons.map(button => (
        <DrumPad key={button} drumPadName={button} />
      ))}
    </div>
  );
};

export default DrumPadsPanel;

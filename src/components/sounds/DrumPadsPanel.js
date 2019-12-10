import React from "react";
import DrumPad from "./DrumPad";
import "./DrumPadsPanel.css";

const DrumPadsPanel = () => {
  const drumPads = [
    {
      name: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      name: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      name: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      name: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      name: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      name: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      name: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      name: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    { name: "C", 
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" 
    }
  ];

  return (
    <div id="drum-pads-panel">
      {drumPads.map(drumPad => (
        <DrumPad key={drumPad.name} drumPad={drumPad} />
      ))}
    </div>
  );
};

export default DrumPadsPanel;

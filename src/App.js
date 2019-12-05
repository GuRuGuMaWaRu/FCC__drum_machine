import React from "react";

import SoundPlayPane from "./components/panes/SoundPlayPane";
import SoundStorePane from "./components/panes/SoundStorePane";

import "./App.css";

const App = () => {
  return (
    <div id="drum-machine">
      <SoundPlayPane />
      <SoundStorePane />
    </div>
  );
};

export default App;

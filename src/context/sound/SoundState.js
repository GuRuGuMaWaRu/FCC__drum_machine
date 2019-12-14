import React, { useReducer } from "react";

import SoundContext from "./soundContext";
import soundReducer from "./soundReducer";
import { ADD_SOUND, PLAY_SOUND, CLEAR_DISPLAYS, REMOVE_SOUND } from "../types";

const SoundState = props => {
  const initialState = {
    currentSound: {},
    currentTrack: [],
    savedTracks: []
  };

  const [state, dispatch] = useReducer(soundReducer, initialState);

  // Add sound
  const addSound = sound => {
    dispatch({
      type: ADD_SOUND,
      payload: sound
    });
  };

  // Play sound
  const playSound = sound => {
    dispatch({
      type: PLAY_SOUND,
      payload: sound
    });
  };

  // Remove sound
  const removeSound = () => {
    dispatch({
      type: REMOVE_SOUND
    });
  };

  // Clear displays
  const clearDisplays = () => {
    dispatch({
      type: CLEAR_DISPLAYS
    });
  };

  return (
    <SoundContext.Provider
      value={{
        currentSound: state.currentSound,
        currentTrack: state.currentTrack,
        savedTracks: state.savedTracks,
        addSound,
        playSound,
        removeSound,
        clearDisplays
      }}
    >
      {props.children}
    </SoundContext.Provider>
  );
};

export default SoundState;

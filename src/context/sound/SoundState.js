import React, { useReducer } from "react";

import SoundContext from "./soundContext";
import soundReducer from "./soundReducer";
import { ADD_SOUND } from "../types";

const SoundState = props => {
  const initialState = {
    currentSound: null,
    currentTrack: [],
    savedTracks: []
  };

  const [state, dispatch] = useReducer(soundReducer, initialState);

  const addSound = sound => {
    dispatch({
      type: ADD_SOUND,
      payload: sound
    });
  };

  return (
    <SoundContext.Provider
      value={{
        currentSound: state.currentSound,
        currentTrack: state.currentTrack,
        savedTracks: state.savedTracks,
        addSound
      }}
    >
      {props.children}
    </SoundContext.Provider>
  );
};

export default SoundState;

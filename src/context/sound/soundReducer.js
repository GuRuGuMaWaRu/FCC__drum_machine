import { ADD_SOUND } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SOUND:
      return {
        ...state,
        currentSound: action.payload.name,
        currentTrack: [...state.currentTrack, action.payload]
      };
    default:
      return state;
  }
};

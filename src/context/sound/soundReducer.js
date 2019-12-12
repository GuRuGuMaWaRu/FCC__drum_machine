import { ADD_SOUND, PLAY_SOUND } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SOUND:
      return {
        ...state,
        currentSound: { id: action.payload.id, name: action.payload.name },
        currentTrack: [...state.currentTrack, action.payload]
      };
    case PLAY_SOUND:
      return {
        ...state,
        currentSound: action.payload
      };
    default:
      return state;
  }
};

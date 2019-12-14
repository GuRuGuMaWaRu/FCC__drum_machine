import { ADD_SOUND, PLAY_SOUND, REMOVE_SOUND, CLEAR_DISPLAYS } from "../types";

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
    case REMOVE_SOUND:
      return {
        ...state,
        currentTrack: [...state.currentTrack.slice(0, -1)]
      };
    case CLEAR_DISPLAYS:
      return {
        ...state,
        currentSound: {}
      };
    default:
      return state;
  }
};

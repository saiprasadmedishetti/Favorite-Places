import { GET_ALL_PLACES, GET_SELECTED_PLACE } from "../actionTypes";

// initial state
const INITIAL_STATE = {
  places: [],
  selectedPlace: {},
};

// AppReducer
export const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case GET_SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default: {
      return state;
    }
  }
};

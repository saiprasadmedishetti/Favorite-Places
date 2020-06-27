import { GET_ALL_PLACES, GET_SELECTED_PLACE } from "../actionTypes";

//  action methods

// get all places
export const getAllPlaces = (data) => {
  return {
    type: GET_ALL_PLACES,
    payload: data,
  };
};
//
// get selected place
export const getSelectedPlace = (data) => {
  return {
    type: GET_SELECTED_PLACE,
    payload: data,
  };
};

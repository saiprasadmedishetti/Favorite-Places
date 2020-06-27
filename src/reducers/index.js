import { combineReducers } from "redux";
import { AppReducer } from "./AppReducer";

// combine reducers
const rootReducer = combineReducers({
  AppReducer,
});

export default rootReducer;

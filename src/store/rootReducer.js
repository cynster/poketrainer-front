import { combineReducers } from "redux";
import appState from "./appState/reducer";
import trainers from "./trainers/reducer";

export default combineReducers({
  appState,
  trainers
});
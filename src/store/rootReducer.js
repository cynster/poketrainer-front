import { combineReducers } from "redux";
import appState from "./appState/reducer";
import trainer from "./trainer/reducer";
import trainers from "./trainers/reducer"

export default combineReducers({
  appState,
  trainer,
  trainers
});
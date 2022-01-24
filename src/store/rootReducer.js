import { combineReducers } from "redux";
import appState from "./appState/reducer";
import trainer from "./trainer/reducer";
import trainers from "./trainers/reducer"
import pokemon from "./pokemon/reducer"

export default combineReducers({
  appState,
  trainer,
  trainers,
  pokemon
});
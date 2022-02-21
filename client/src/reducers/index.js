import { combineReducers } from "redux";
import AAlert from "./alert";
import auth from "./auth";

export default combineReducers({
  AAlert,
  auth,
});

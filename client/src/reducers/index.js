import { combineReducers } from "redux";
import AAlert from "./alert";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  AAlert,
  auth,
  profile,
});

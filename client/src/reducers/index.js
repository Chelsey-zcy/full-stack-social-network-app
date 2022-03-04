import { combineReducers } from "redux";
import AAlert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  AAlert,
  auth,
  profile,
  post,
});

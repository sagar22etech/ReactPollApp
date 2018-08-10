import { combineReducers } from "redux";

import signup from "./signup/reducers";
import login from "./login/reducers";
import listuser from "./listuser/reducers"

const makeRootReducer = combineReducers({
  signup: signup,
  login: login,
  listuser: listuser
});

export default makeRootReducer;

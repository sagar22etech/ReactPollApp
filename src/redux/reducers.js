import { combineReducers } from "redux";

import signup from "./signup/reducers";
import login from "./login/reducers";

const makeRootReducer = combineReducers({
  signup: signup,
  login: login
});

export default makeRootReducer;

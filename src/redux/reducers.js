import { combineReducers } from "redux";

import signup from "./signup/reducers";
import login from "./login/reducers";
import addpoll from "./addpoll/reducers";

const makeRootReducer = combineReducers({
  signup: signup,
  login: login,
  addpoll: addpoll
});

export default makeRootReducer;

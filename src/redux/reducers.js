import { combineReducers } from "redux";

import signup from "./signup/reducers";
import login from "./login/reducers";
import listuser from "./listuser/reducers";
import listpolls from "./listpolls/reducers";
import addpoll from "./addpoll/reducers";

const makeRootReducer = combineReducers({
  signup: signup,
  login: login,
  listuser: listuser,
  listpolls: listpolls,
  addpoll: addpoll
});

export default makeRootReducer;

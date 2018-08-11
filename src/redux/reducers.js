import { combineReducers } from "redux";

import signup from "./signup/reducers";
import login from "./login/reducers";
import listuser from "./listuser/reducers";
import listpolls from "./listpolls/reducers";

const makeRootReducer = combineReducers({
  signup: signup,
  login: login,
  listuser: listuser,
  listpolls: listpolls
});

export default makeRootReducer;

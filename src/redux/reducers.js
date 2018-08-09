import { combineReducers } from "redux";

import signup from "./signup/reducers";

const makeRootReducer = combineReducers({
  signup: signup
});

export default makeRootReducer;

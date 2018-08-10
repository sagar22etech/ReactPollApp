import { takeLatest } from "redux-saga/effects";
import constants from "./constants";

import { signUpRequest } from "./signup/actions";
import { loginRequest } from "./login/actions";
import { listUserRequest } from "./listuser/actions";

export function* watchActions() {
  yield takeLatest(constants.SIGNUP_REQUEST, signUpRequest);
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
 yield takeLatest(constants.LIST_USER_REQUEST, listUserRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}

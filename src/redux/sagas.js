import { takeLatest } from "redux-saga/effects";
import constants from "./constants";

import { signUpRequest } from "./signup/actions";
import { loginRequest } from "./login/actions";
import { pollFormRequest } from "./addpoll/actions";

export function* watchActions() {
  yield takeLatest(constants.SIGNUP_REQUEST, signUpRequest);
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.POLL_FORM_REQUEST,pollFormRequest)
}

export default function* rootSaga() {
  yield [watchActions()];
}

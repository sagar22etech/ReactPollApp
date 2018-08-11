import callAjax from "../../services/ajaxcall";
import storageHelper from "../../services/storagehelper";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";

export function* loginRequest(action) {
  try {
    const response = yield call(callAjax, "login", "POST", {
      email: action.payload.email,
      password: action.payload.password
    });
    if (response.status === 200) {
      storageHelper(response.data.data.api_token);
      yield put(actions.requestLoginSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.requestLoginError());
  }
}

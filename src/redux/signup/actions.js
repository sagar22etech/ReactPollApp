import callAjax from "../../services/ajaxcall";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";

export function* signUpRequest(action) {
  try {
    const response = yield call(callAjax, "add_user", "POST", {
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
      role: action.payload.role
    });
    if (response.status === 200) {
      yield put(actions.requestSignUpSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.requestSignUpError());
  }
}

import callAjax from "../../services/ajaxcall";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import storageHelper from "../../services/storagehelper";

export function* listUserRequest(action) {
  try {
    const response = yield call(callAjax, "list_users", "GET", {
      headers: { api_token: storageHelper() }
    });
    if (response.status === 200) {
      yield put(actions.requestUsersSuccess(response.data.data));
    }
  } catch (error) {
    yield put(actions.requestUsersError());
  }
}

import callAjax from "../../services/ajaxcall";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import storageHelper from "../../services/storagehelper";

export function* listPollsRequest(action) {
  try {
    const response = yield call(callAjax, "list_polls", "GET", {
      headers: { api_token: storageHelper() }
    });
    if (response.status === 200) {
      yield put(actions.requestPollsSuccess(response.data.data));
    }
  } catch (error) {
    yield put(actions.requestPollsError());
  }
}
export function* deleteOption(action) {
  try {
    const url =
      "delete_poll_option/" + action.payload.pid + "/" + action.payload.oid;
    const response = yield call(callAjax, url, "DELETE", {
      headers: { api_token: storageHelper() }
    });
    if (response.status === 200) {
        yield put(actions.deleteOptionSuccess(response.data.data));
        yield [listPollsRequest(actions.requestPolls())];
    }
  } catch (error) {
    yield put(actions.deleteOptionError());
  }
}

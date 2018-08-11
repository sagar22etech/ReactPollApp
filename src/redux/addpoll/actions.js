import callAjax from "../../services/ajaxcall";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions";

export function* pollFormRequest(action) {
  try {
    const response = yield call(
      callAjax,
      "add_poll",
      "POST",
      {
        title: action.payload.title,
        options: action.payload.options
      },
      {
        headers: {
          api_token:
            "ltLAy7yd36SLOxTxtUGu2AwsJNj6BSFsvwCyCfMC9lpoD5i5EVadfFLCbUNx"
        }
      }
    );
    if (response.status === 200) {
      yield put(actions.pollFormRequestSuccess());
    }
  } catch (error) {
    yield put(actions.pollFormRequestError());
  }
}

import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: ""
};

const listUserRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const listUserRequestSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
const listUserRequestError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
export default handleActions(
  {
    [constants.LIST_USER_REQUEST]: listUserRequest,
    [constants.LIST_USER_REQUEST_SUCCESS]: listUserRequestSuccess,
    [constants.LIST_USER_REQUEST_ERROR]: listUserRequestError
  },
  initialState
);

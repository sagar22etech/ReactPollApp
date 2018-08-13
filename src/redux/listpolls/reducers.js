import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  isDeleteOptionLoading: false,
  isDeleteOptionSuccess: false,
  isDeleteOptionError: false,
  msg: ""
};

const listPollsRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const listPollsRequestSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
const listPollsRequestError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
const deleteOptionRequest = (state, action) =>
  update(state, {
    isDeleteOptionLoading: { $set: true },
    isDeleteOptionSuccess: { $set: false },
    isDeleteOptionError: { $set: false }
  });
const deleteOptionRequestSuccess = (state, action) =>
  update(state, {
    isDeleteOptionLoading: { $set: false },
    isDeleteOptionSuccess: { $set: true },
    isDeleteOptionError: { $set: false }
  });
const deleteOptionRequestError = (state, action) =>
  update(state, {
    isDeleteOptionLoading: { $set: false },
    isDeleteOptionSuccess: { $set: false },
    isDeleteOptionError: { $set: true }
  });
export default handleActions(
  {
    [constants.LIST_POLLS_REQUEST]: listPollsRequest,
    [constants.LIST_POLLS_REQUEST_SUCCESS]: listPollsRequestSuccess,
    [constants.LIST_POLLS_REQUEST_ERROR]: listPollsRequestError,
    [constants.DELETE_OPTION_REQUEST]: deleteOptionRequest,
    [constants.DELETE_OPTION_REQUEST_SUCCESS]: deleteOptionRequestSuccess,
    [constants.DELETE_OPTION_REQUEST_ERROR]: deleteOptionRequestError
  },
  initialState
);

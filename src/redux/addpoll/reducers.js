import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    title: "",
    options: [{ option: "", vote: 0 }]
  },
  isLoading: false,
  isSuccess: false,
  isError: false
};

const handleAddOption = (state, action) =>
  update(state, {
    formData: {
      options: {
        $push: [{ option: action.payload.value, vote: action.payload.vote }]
      }
    }
  });

const handleDeleteOption = (state, action) => {
  return update(state, {
    formData: {
      options: { $splice: [[parseInt(action.payload), 1]] }
    }
  });
};

const handlePollFormData = (state, action) => {
  if (action.payload.name === "title") {
    return update(state, {
      formData: {
        title: { $set: action.payload.value }
      }
    });
  } else {
    return update(state, {
      formData: {
        options: {
          [action.payload.id]: {
            option: { $set: action.payload.value },
            vote: { $set: action.payload.vote }
          }
        }
      }
    });
  }
};

const handlePollFormRequest = (state, action) => {
  return update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
};

const handlePollFormRequestSuccess = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });
};

const handlePollFormRequestError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true }
  });
};

export default handleActions(
  {
    [constants.ADD_OPTIONS]: handleAddOption,
    [constants.DELETE_OPTIONS]: handleDeleteOption,
    [constants.POLL_FORM_DATA]: handlePollFormData,
    [constants.POLL_FORM_REQUEST]: handlePollFormRequest,
    [constants.POLL_FORM_REQUEST_SUCCESS]: handlePollFormRequestSuccess,
    [constants.POLL_FORM_REQUEST_ERROR]: handlePollFormRequestError
  },
  initialState
);

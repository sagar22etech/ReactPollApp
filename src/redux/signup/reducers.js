import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  data: {},
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    msg: ""
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const handleSignupRequest = (state, action) => {
  return update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });
};

const handleSignupSuccess = (state, action) => {
  return update(state, {
    data: { $set: action.payload.data },
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "Success" }
  });
};

const handleSignupError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });
};

const handleSignupFormData = (state, action) => {
  return update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
};

export default handleActions(
  {
    [constants.SIGNUP_REQUEST]: handleSignupRequest,
    [constants.SIGNUP_REQUEST_SUCCESS]: handleSignupSuccess,
    [constants.SIGNUP_REQUEST_ERROR]: handleSignupError,
    [constants.SIGNUP_FORM_DATA]: handleSignupFormData
  },
  initialState
);

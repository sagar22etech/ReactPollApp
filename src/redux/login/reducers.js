import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  data: {},
  formData: {
    email: "",
    password: ""
  },
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};
const handleLoginFormData = (state, action) =>
  update(state, {
    formData: {
      [action.payload.name]: { $set: action.payload.value }
    }
  });
const loginRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: "" }
  });

const loginRequestSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: "Login success" }
  });
const loginRequestError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.LOGIN_FORM_DATA]: handleLoginFormData,
    [constants.LOGIN_REQUEST]: loginRequest,
    [constants.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
    [constants.LOGIN_REQUEST_ERROR]: loginRequestError
  },
  initialState
);

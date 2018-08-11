import { createAction } from "redux-actions";
import constants from './constants'

export const requestSignUp = createAction(constants.SIGNUP_REQUEST)
export const requestSignUpSuccess = createAction(constants.SIGNUP_REQUEST_SUCCESS)
export const requestSignUpError = createAction(constants.SIGNUP_REQUEST_ERROR)
export const signupFormData = createAction(constants.SIGNUP_FORM_DATA)

export const requestLogin = createAction(constants.LOGIN_REQUEST);
export const requestLoginSuccess = createAction(constants.LOGIN_REQUEST_SUCCESS);
export const requestLoginError = createAction(constants.LOGIN_REQUEST_ERROR);
export const loginFormData = createAction(constants.LOGIN_FORM_DATA);

export const requestUsers = createAction(constants.LIST_USER_REQUEST);
export const requestUsersSuccess = createAction(constants.LIST_USER_REQUEST_SUCCESS);
export const requestUsersError = createAction(constants.LIST_USER_REQUEST_ERROR);

export const requestPolls = createAction(constants.LIST_POLLS_REQUEST);
export const requestPollsSuccess = createAction(constants.LIST_POLLS_REQUEST_SUCCESS);
export const requestPollsError = createAction(constants.LIST_POLLS_REQUEST_ERROR);

export const deleteOption = createAction(constants.DELETE_OPTION_REQUEST);
export const deleteOptionSuccess = createAction(constants.DELETE_OPTION_REQUEST_SUCCESS);
export const deleteOptionError = createAction(constants.DELETE_OPTION_REQUEST_ERROR);

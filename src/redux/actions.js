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

export const addOptions = createAction(constants.ADD_OPTIONS);
export const deleteOptions = createAction(constants.DELETE_OPTIONS);
export const pollFormData = createAction(constants.POLL_FORM_DATA);
export const pollFormRequest= createAction(constants.POLL_FORM_REQUEST);
export const pollFormRequestSuccess= createAction(constants.POLL_FORM_REQUEST);
export const pollFormRequestError= createAction(constants.POLL_FORM_REQUEST);
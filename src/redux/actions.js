import { createAction } from "redux-actions";
import constants from './constants'

export const requestSignUp = createAction(constants.SIGNUP_REQUEST)
export const requestSignUpSuccess = createAction(constants.SIGNUP_REQUEST_SUCCESS)
export const requestSignUpError = createAction(constants.SIGNUP_REQUEST_ERROR)

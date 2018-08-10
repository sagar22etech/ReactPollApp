import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    title: "",
    addOptions: [1],
    options: []
  }
};

const handleAddOption = (state, action) =>
  update(state, {
    formData: {
      addOptions: { $push: [action.payload.value] }
    }
  });

const handleDeleteOption = (state, action) =>
  update(state, {
    formData: {
      addOptions: { $splice: [[1, 1]] }
    }
  });

export default handleActions(
  {
    [constants.ADD_OPTIONS]: handleAddOption,
    [constants.DELETE_OPTIONS]: handleDeleteOption
  },
  initialState
);

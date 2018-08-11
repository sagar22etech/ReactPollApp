import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  formData: {
    title: "",
    options: [{ option: "", vote: 0 }]
  }
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

export default handleActions(
  {
    [constants.ADD_OPTIONS]: handleAddOption,
    [constants.DELETE_OPTIONS]: handleDeleteOption
  },
  initialState
);

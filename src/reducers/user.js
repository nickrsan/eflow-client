import { UserTypes as types } from "../action-types";
import objectAssign from "object-assign";

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  message: null,
  submitEmailMessage: "",
  error: null,
  currentUser: null,
  loginUserMessage: "",
  signUpUserMessage: "",
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_BROADCAST_MESSAGE:
      return objectAssign({}, state, { message: action.message });

    case types.SUBMIT_BUG_REPORT_OBJECT:
      return objectAssign({}, state, { submitEmailMessage: action.bugReport });

    case types.USER_LOGIN_OBJECT:
      return objectAssign({}, state, { currentUser: action.user });

    case types.REMOVE_USER_OBJECT:
      return objectAssign({}, state, { currentUser: null });

    default:
      return state;
  }
}

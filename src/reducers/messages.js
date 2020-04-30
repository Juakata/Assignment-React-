import { SET_MESSAGES, UPDATE_STATUS_MSG } from '../actions';

const messagesReducer = (state = [], action) => {
  const clone = [...state];
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    case UPDATE_STATUS_MSG:
      clone[action.index].status = action.status;
      return clone;
    default:
      return state;
  }
};

export default messagesReducer;

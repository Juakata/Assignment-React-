import { SET_MESSAGES } from '../actions';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;

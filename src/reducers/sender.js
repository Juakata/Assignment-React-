import { SET_CURRENT_SENDER } from '../actions';

const senderReducer = (state = -1, action) => {
  switch (action.type) {
    case SET_CURRENT_SENDER:
      return action.id;
    default:
      return state;
  }
};

export default senderReducer;

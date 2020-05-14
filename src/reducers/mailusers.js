import { SET_MAILUSERS } from '../actions';

const mailusersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MAILUSERS:
      return action.mailusers;
    default:
      return state;
  }
};

export default mailusersReducer;

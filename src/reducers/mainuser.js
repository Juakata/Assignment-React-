import { SET_MAINUSER } from '../actions';

const mainuserReducer = (state = '', action) => {
  switch (action.type) {
    case SET_MAINUSER:
      return action.name;
    default:
      return state;
  }
};

export default mainuserReducer;

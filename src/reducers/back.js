import { ADD_TO_BACK, REMOVE_FROM_BACK } from '../actions';

const backReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BACK:
      return [...state, action.page];
    case REMOVE_FROM_BACK:
      return state.filter(e => e !== action.page);
    default:
      return state;
  }
};

export default backReducer;

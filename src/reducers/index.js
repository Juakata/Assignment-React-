import { combineReducers } from 'redux';
import messages from './messages';
import mainuser from './mainuser';

const rootReducer = combineReducers({ messages, mainuser });

export default rootReducer;

import { combineReducers } from 'redux';
import messages from './messages';
import mainuser from './mainuser';
import back from './back';

const rootReducer = combineReducers({ messages, mainuser, back });

export default rootReducer;

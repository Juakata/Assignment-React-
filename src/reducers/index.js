import { combineReducers } from 'redux';
import messages from './messages';
import mainuser from './mainuser';
import mailusers from './mailusers';
import back from './back';
import sender from './sender';

const rootReducer = combineReducers({
  messages, mainuser, back, mailusers, sender,
});

export default rootReducer;

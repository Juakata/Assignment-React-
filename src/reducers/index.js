import { combineReducers } from 'redux';
import messages from './messages';
import mainuser from './mainuser';
import mailusers from './mailusers';
import back from './back';

const rootReducer = combineReducers({
  messages, mainuser, back, mailusers,
});

export default rootReducer;

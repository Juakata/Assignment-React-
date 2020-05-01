const SERVER = 'https://still-retreat-45947.herokuapp.com/api/v1/';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_MAINUSER = 'SET_MAINUSER';
export const UPDATE_STATUS_MSG = 'UPDATE_STATUS_MSG';
export const ADD_TO_BACK = 'ADD_TO_BACK';
export const REMOVE_FROM_BACK = 'REMOVE_FROM_BACK';
export const SET_MAILUSERS = 'SET_MAILUSERS';
export const SET_CURRENT_SENDER = 'SET_CURRENT_SENDER';

const addToBack = page => ({
  type: ADD_TO_BACK,
  page,
});

const removeFromBack = page => ({
  type: REMOVE_FROM_BACK,
  page,
});

const setMessages = messages => ({
  type: SET_MESSAGES,
  messages,
});

const updateStatusMsg = (index, status) => ({
  type: UPDATE_STATUS_MSG,
  index,
  status,
});

const setMainuser = name => ({
  type: SET_MAINUSER,
  name,
});

const setCurrentSender = id => ({
  type: SET_CURRENT_SENDER,
  id,
});

const setMailusers = mailusers => ({
  type: SET_MAILUSERS,
  mailusers,
});

const fetchUpdateMessage = obj => (
  dispatch => {
    const { id, index, status } = obj;
    fetch(`${SERVER}updatemessage/${id}/${status}`)
      .then(res => res.json())
      .then(() => dispatch(updateStatusMsg(index, status)));
  }
);

const fetchMessages = sender => (
  dispatch => {
    fetch(`${SERVER}pullvoicemails/1/${sender}`)
      .then(res => res.json())
      .then(data => dispatch(setMessages(data.messages)));
  }
);

const fetchMainuser = () => (
  dispatch => {
    fetch(`${SERVER}pullusermail/1`)
      .then(res => res.json())
      .then(data => dispatch(setMainuser(data.name)));
  }
);

const fetchMailusers = current => (
  dispatch => {
    fetch(`${SERVER}pullmailusers/${current}`)
      .then(res => res.json())
      .then(data => dispatch(setMailusers(data.mailusers)));
  }
);

export {
  fetchMessages, setMessages, setMainuser, fetchMainuser, updateStatusMsg,
  fetchUpdateMessage, addToBack, removeFromBack, fetchMailusers, setCurrentSender,
};

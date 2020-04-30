const SERVER = 'https://still-retreat-45947.herokuapp.com/api/v1/';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_MAINUSER = 'SET_MAINUSER';
export const UPDATE_STATUS_MSG = 'UPDATE_STATUS_MSG';

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

const fetchUpdateMessage = obj => (
  dispatch => {
    const { id, index, status } = obj;
    fetch(`${SERVER}updatemessage/${id}/${status}`)
      .then(res => res.json())
      .then(() => dispatch(updateStatusMsg(index, status)));
  }
);

const fetchMessages = () => (
  dispatch => {
    fetch(`${SERVER}pullvoicemails/1/2`)
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

export {
  fetchMessages, setMessages, setMainuser, fetchMainuser, updateStatusMsg,
  fetchUpdateMessage,
};

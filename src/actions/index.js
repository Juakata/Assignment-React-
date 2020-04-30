const SERVER = 'https://still-retreat-45947.herokuapp.com/api/v1/';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_MAINUSER = 'SET_MAINUSER';

const setMessages = messages => ({
  type: SET_MESSAGES,
  messages,
});

const setMainuser = name => ({
  type: SET_MAINUSER,
  name,
});

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
  fetchMessages, setMessages, setMainuser, fetchMainuser,
};

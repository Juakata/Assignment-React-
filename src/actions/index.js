const SERVER = 'https://still-retreat-45947.herokuapp.com/api/v1/';
export const SET_MESSAGES = 'SET_MESSAGES';

const setMessages = messages => ({
  type: SET_MESSAGES,
  messages,
});

const fetchMessages = () => (
  dispatch => {
    fetch(`${SERVER}pullvoicemails/1/2`)
      .then(res => res.json())
      .then(data => dispatch(setMessages(data.voicemails)));
  }
);

export { fetchMessages, setMessages };

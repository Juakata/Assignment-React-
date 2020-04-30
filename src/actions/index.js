const ADD_MESSAGE = 'ADD_MESSAGE';

const addMessage = messages => ({
  type: ADD_MESSAGE,
  messages,
});

export default { addMessage };

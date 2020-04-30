import React from 'react';
import PropTypes from 'prop-types';
import Message from '../components/Message';

const MessagesList = ({ messages }) => {
  const emptyMessages = (
    <p>There are not messages here.</p>
  );

  const messagesList = (
    <div>
      {messages.map(msg => <Message key={msg.id} msg={msg} />)}
    </div>
  );

  return (
    <div>
      {messages.length === 0 ? emptyMessages : messagesList}
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.instanceOf(Object).isRequired,
};

export default MessagesList;

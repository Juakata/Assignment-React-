import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ messages }) => {
  const emptyMessages = (
    <p>There are not messages here.</p>
  );

  const messagesList = (
    <div>
      {messages.map(msg => <div key={msg.id}>{msg.duration}</div>)}
    </div>
  );

  return (
    <div>
      {messages.length === 0 ? emptyMessages : messagesList}
    </div>
  );
};

Message.propTypes = {
  messages: PropTypes.instanceOf(Object).isRequired,
};

export default Message;

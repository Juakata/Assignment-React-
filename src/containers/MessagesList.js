import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Message from '../components/Message';

const MessagesList = ({ messages }) => {
  const emptyMessages = (
    <p>There are not messages here.</p>
  );

  const getHumanTime = interval => {
    const duration = moment.duration(interval);
    let result = '';
    const h = duration.hours() < 10 ? `0${duration.hours()}` : duration.hours();
    const m = duration.minutes() < 10 ? `0${duration.minutes()}` : duration.minutes();
    const s = duration.seconds() < 10 ? `0${duration.seconds()}` : duration.seconds();
    if (h > 0) {
      result = `${h} h : ${m} m : ${s} s`;
    } else if (m > 0) {
      result = `${m} m : ${s} s`;
    } else {
      result = `${s} s`;
    }
    return result;
  };

  const messagesList = (
    <div>
      {messages.map(msg => {
        const duration = getHumanTime(msg.duration);
        return <Message key={msg.id} msg={msg} duration={duration} />;
      })}
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

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Message from '../components/Message';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openWindow: false,
    };
  }

  openWindow = () => {
    this.setState(state => ({
      openWindow: !state.openWindow,
    }));
  }

  getHumanTime = interval => {
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

  render() {
    const { messages } = this.props;
    const emptyMessages = (
      <p>There are not messages here.</p>
    );

    const messagesList = (
      <div>
        {messages.map(msg => {
          const duration = this.getHumanTime(msg.duration);
          return <Message key={msg.id} msg={msg} duration={duration} />;
        })}
      </div>
    );

    return (
      <div>
        {messages.length === 0 ? emptyMessages : messagesList}
      </div>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.instanceOf(Object).isRequired,
};

export default MessagesList;

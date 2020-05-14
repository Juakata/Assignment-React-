import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Message from '../components/Message';
import { fetchUpdateMessage } from '../actions/index';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openWindow: false,
      mailId: '',
      mailIndex: '',
    };
  }

  handleWindow = (mailId, mailIndex) => {
    this.setState(state => ({
      openWindow: !state.openWindow,
      mailIndex,
      mailId,
    }));
  }

  handleBtns = btn => {
    const { mailId, mailIndex } = this.state;
    const { fetchUpdateMessage } = this.props;
    const obj = {
      id: mailId,
      index: mailIndex,
      status: '',
    };
    switch (btn) {
      case 'n':
        obj.status = 'new';
        fetchUpdateMessage(obj);
        break;
      case 's':
        obj.status = 'saved';
        fetchUpdateMessage(obj);
        break;
      case 'd':
        obj.status = 'deleted';
        fetchUpdateMessage(obj);
        break;
      default:
    }
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
    const { openWindow } = this.state;
    const { messages } = this.props;
    const emptyMessages = (
      <p>There are not messages here.</p>
    );

    const messagesList = (
      <div>
        {messages.map((msg, index) => {
          const duration = this.getHumanTime(msg.duration);
          return (
            <Message
              key={msg.id}
              msg={msg}
              duration={duration}
              handleWindow={() => this.handleWindow(msg.id, index)}
            />
          );
        })}
      </div>
    );
    const windowSelector = (
      <div
        type="button"
        tabIndex={0}
        role="button"
        onClick={this.handleWindow}
        onKeyPress={this.handleWindow}
        className="cover"
      >
        <button onClick={() => this.handleBtns('n')} className="btn-new" type="button">new</button>
        <button onClick={() => this.handleBtns('s')} className="btn-saved" type="button">saved</button>
        <button onClick={() => this.handleBtns('d')} className="btn-deleted" type="button">deleted</button>
      </div>
    );

    return (
      <div>
        {messages.length === 0 ? emptyMessages : messagesList}
        {openWindow && windowSelector}
      </div>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.instanceOf(Object).isRequired,
  fetchUpdateMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchUpdateMessage: (id, status) => dispatch(fetchUpdateMessage(id, status)),
});

export default connect(null, mapDispatchToProps)(MessagesList);

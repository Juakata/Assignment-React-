import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages, addToBack } from '../actions/index';
import MessagesList from './MessagesList';

class VoicemailMessages extends React.Component {
  componentDidMount() {
    const {
      fetchMessages, addToBack, back, sender, history,
    } = this.props;
    if (back.length < 1) {
      addToBack('list');
    }
    if (sender === -1) {
      history.push('/');
    }
    fetchMessages(sender);
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="container">
        <MessagesList messages={messages} />
      </div>
    );
  }
}

VoicemailMessages.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.instanceOf(Object).isRequired,
  addToBack: PropTypes.func.isRequired,
  back: PropTypes.instanceOf(Object).isRequired,
  sender: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
  back: state.back,
  sender: state.sender,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: sender => dispatch(fetchMessages(sender)),
  addToBack: page => dispatch(addToBack(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoicemailMessages));

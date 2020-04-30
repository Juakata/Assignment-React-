import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import MessagesList from './MessagesList';

class VoicemailMessages extends React.Component {
  componentDidMount() {
    const { fetchMessages } = this.props;
    fetchMessages();
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
};

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoicemailMessages);

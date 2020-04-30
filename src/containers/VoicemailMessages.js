import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages, addToBack } from '../actions/index';
import MessagesList from './MessagesList';

class VoicemailMessages extends React.Component {
  componentDidMount() {
    const { fetchMessages, addToBack, back } = this.props;
    if (back.length < 1) {
      addToBack('list');
    }
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
  addToBack: PropTypes.func.isRequired,
  back: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
  back: state.back,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
  addToBack: page => dispatch(addToBack(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoicemailMessages));

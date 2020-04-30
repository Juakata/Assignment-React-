import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addToBack } from '../actions/index';

class Selector extends React.Component {
  seeMessages = () => {
    const { history, addToBack } = this.props;
    history.push('/list');
    addToBack('list');
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.seeMessages()}
        >
          See Messages
        </button>
      </div>
    );
  }
}

Selector.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  addToBack: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToBack: page => dispatch(addToBack(page)),
});

export default withRouter(connect(null, mapDispatchToProps)(Selector));

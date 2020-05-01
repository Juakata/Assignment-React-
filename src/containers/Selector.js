import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addToBack, fetchMailusers } from '../actions/index';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: 'Select Person',
      windowOpen: false,
    };
  }

  componentDidMount() {
    const { fetchMailusers } = this.props;
    fetchMailusers(1);
  }

  seeMessages = () => {
    const { history, addToBack } = this.props;
    history.push('/list');
    addToBack('list');
  }

  handleWindow = () => {
    this.setState(state => ({
      windowOpen: !state.windowOpen,
    }));
  }

  render() {
    const { sender, windowOpen } = this.state;
    return (
      <div className="cont-center">
        <button onClick={() => this.handleWindow()} type="button" className="btn-selector">
          {sender}
          {windowOpen && (
            <ul className="person-ul-selector">
              <li>Hector</li>
              <li>Alejandro</li>
            </ul>
          )}
        </button>
        <button
          type="button"
          className="btn-see-messages"
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
  fetchMailusers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToBack: page => dispatch(addToBack(page)),
  fetchMailusers: mainuser => dispatch(fetchMailusers(mainuser)),
});

export default withRouter(connect(null, mapDispatchToProps)(Selector));

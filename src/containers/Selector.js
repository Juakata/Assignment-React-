import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addToBack, fetchMailusers, setCurrentSender } from '../actions/index';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: 'Select Person',
      windowOpen: false,
      id: -1,
    };
  }

  componentDidMount() {
    const { fetchMailusers } = this.props;
    fetchMailusers(1);
  }

  seeMessages = () => {
    const { history, addToBack, setCurrentSender } = this.props;
    const { id } = this.state;
    if (id !== -1) {
      history.push('/list');
      addToBack('list');
      setCurrentSender(id);
    }
  }

  changePerson = (name, id) => {
    this.setState({
      sender: name,
      id,
    });
  }

  handleWindow = () => {
    this.setState(state => ({
      windowOpen: !state.windowOpen,
    }));
  }

  render() {
    const { sender, windowOpen } = this.state;
    const { mailusers } = this.props;
    const mailusersList = mailusers.map(user => (
      <div
        onClick={() => this.changePerson(user.name, user.id)}
        onKeyDown={this.handleClick}
        tabIndex={0}
        role="button"
        key={user.id}
      >
        {user.name}
      </div>
    ));
    return (
      <div className="cont-center">
        <button onClick={() => this.handleWindow()} type="button" className="btn-selector">
          {sender}
          {windowOpen && (
            <div className="person-selector-container">
              {mailusersList}
            </div>
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
  mailusers: PropTypes.instanceOf(Object).isRequired,
  setCurrentSender: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mailusers: state.mailusers,
});

const mapDispatchToProps = dispatch => ({
  addToBack: page => dispatch(addToBack(page)),
  fetchMailusers: mainuser => dispatch(fetchMailusers(mainuser)),
  setCurrentSender: id => dispatch(setCurrentSender(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Selector));

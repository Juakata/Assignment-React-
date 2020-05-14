import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMainuser, removeFromBack } from '../actions/index';

class Header extends React.Component {
  componentDidMount() {
    const { fetchMainuser } = this.props;
    fetchMainuser();
  }

  goBack = () => {
    const { removeFromBack, history } = this.props;
    history.push('/');
    removeFromBack('list');
  }

  render() {
    const { mainuser, back } = this.props;
    return (
      <header className="my-header">
        {back.length > 0 && (
          <button
            onClick={() => this.goBack()}
            className="back-btn"
            type="button"
          >
            <i className="fas fa-arrow-left" />
          </button>
        )}
        <span>{`Welcome ${mainuser}!`}</span>
      </header>
    );
  }
}
Header.propTypes = {
  fetchMainuser: PropTypes.func.isRequired,
  mainuser: PropTypes.string.isRequired,
  back: PropTypes.instanceOf(Object).isRequired,
  removeFromBack: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  mainuser: state.mainuser,
  back: state.back,
});

const mapDispatchToProps = dispatch => ({
  fetchMainuser: () => dispatch(fetchMainuser()),
  removeFromBack: page => dispatch(removeFromBack(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

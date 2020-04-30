import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMainuser } from '../actions/index';

class Header extends React.Component {
  componentDidMount() {
    const { fetchMainuser } = this.props;
    fetchMainuser();
  }

  render() {
    const { mainuser } = this.props;
    return (
      <header className="my-header">
        <span>{`Welcome ${mainuser}!`}</span>
      </header>
    );
  }
}
Header.propTypes = {
  fetchMainuser: PropTypes.func.isRequired,
  mainuser: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  mainuser: state.mainuser,
});

const mapDispatchToProps = dispatch => ({
  fetchMainuser: () => dispatch(fetchMainuser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

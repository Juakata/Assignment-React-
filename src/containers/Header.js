import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMainuser } from '../actions/index';

class Header extends React.Component {
  componentDidMount() {
    const { fetchMainuser } = this.props;
    fetchMainuser();
  }

  render() {
    const { mainuser, back } = this.props;
    return (
      <header className="my-header">
        {back && (
          <Link className="back-link" to="/">
            <i className="fas fa-arrow-left" />
          </Link>
        )}
        <span>{`Welcome ${mainuser}!`}</span>
      </header>
    );
  }
}
Header.propTypes = {
  fetchMainuser: PropTypes.func.isRequired,
  mainuser: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  mainuser: state.mainuser,
  back: state.back,
});

const mapDispatchToProps = dispatch => ({
  fetchMainuser: () => dispatch(fetchMainuser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

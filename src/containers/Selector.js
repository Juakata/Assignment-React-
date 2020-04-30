import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Selector extends React.Component {
  render() {
    return (
      <div>
        <Link to="/list">See Messages</Link>
      </div>
    );
  }
}

export default connect(null, null)(Selector);

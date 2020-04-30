import React from 'react';
import { connect } from 'react-redux';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  componentDidMount() {
    fetch('https://still-retreat-45947.herokuapp.com/api/v1/pullvoicemails/1/2')
      .then(response => response.json())
      .then(data => {
      })
      .catch(() => {});
  }

  render() {
    const { test } = this.state;
    return (
      <div className="container">
        <span>{test}</span>
      </div>
    );
  }
}

export default connect(null, null)(Groups);

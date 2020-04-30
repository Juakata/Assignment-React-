import React from 'react';
import { connect } from 'react-redux';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    fetch('https://still-retreat-45947.herokuapp.com/api/v1/pullusermail/Andoni')
      .then(response => response.json())
      .then(data => {
        const { name } = data.usermail;
        this.setState({
          name,
        });
      })
      .catch(() => {});
  }

  render() {
    const { name } = this.state;
    return (
      <header className="my-header">
        <span>{`Welcome ${name}!`}</span>
      </header>
    );
  }
}

export default connect(null, null)(Groups);

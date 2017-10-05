import React from 'react';

export default class Profile extends React.Component {
  showMessage() {
    window.alert(this.props.name);
  }
  render() {
    return (
      <a href="#" onClick={this.showMessage.bind(this)}>Click Me I am React </a>
    )
  }
}

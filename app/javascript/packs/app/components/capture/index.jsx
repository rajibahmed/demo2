import React from 'react';

export default class Capture extends React.Component {
  showMessage() {
    window.alert(this.props.name);
  }
  render() {
    return (
      <div className="capture-app">
        <h3>React Component Loaded by Ember !!</h3>
        <p> This is passing props from Ember to react</p>
        <button onClick={this.showMessage.bind(this)} >Click Me</button>
      </div>
    )
  }
}

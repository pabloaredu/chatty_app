import React, {Component} from 'react';

class Chatbar extends Component {

  onNameKeyPress (event) {
    if (event.key === 'Enter') {
      this.props.username(event.target.value);
      this.props.newNotification(event.target.value);
    }
  }

  onMessageKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.newMessage(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    console.log("rendering <chatbar>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username"
        placeholder="Your Name (Optional)"
        onKeyPress={this.onNameKeyPress.bind(this)}/>

        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.onMessageKeyPress.bind(this)}/>
      </footer>
    );
  }
}

export default Chatbar;
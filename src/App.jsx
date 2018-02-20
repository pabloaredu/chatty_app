import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Anonumouse',
      messages: [{
        id: 1,
        type: 'system',
        text: 'Anonumouse changed their name to bob'
      }, {
        id: 2,
        type: 'user',
        text: 'hi',
        user: 'bob'
      }]
    };
  }

  newMessage(messageText) {
    const newMessageObject = {
      id: Math.random(),
      type: 'user',
      user: this.state.user,
      text: messageText
    };
    const newMessages = this.state.messages.concat(newMessageObject);
    this.setState({
      messages: newMessages
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <Chatbar newMessage={this.newMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
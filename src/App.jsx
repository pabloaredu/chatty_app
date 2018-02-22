import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      serverMessage:[]
    };
  }

// Changing user name
  newName (name) {
    this.setState({currentUser: {name:name}});
  }

// Creating new system notification
  newNotification(notificationText) {
    var notification = {
      type: "Notification",
      content: notificationText,
      username: this.state.currentUser.name
    };
    if(notification.username !== "Anonymous") {
      this.chatSocket.send(JSON.stringify(notification));
    }
  }

// Creating new user message
  newMessage(messageText) {
    const newMessageObject = {
      username: this.state.currentUser.name,
      content: messageText
    };
    // Sending new message to WebSocket
    const msg = {
          type: "Message",
          content: newMessageObject.content,
          username: newMessageObject.username,
        };
    this.chatSocket.send(JSON.stringify(msg));
  }

  componentDidMount() {
  // Opening WebSocket
    this.chatSocket = new WebSocket("ws://localhost:3001", "protocolOne");
    console.log("Connected to server");
    console.log("componentDidMount <App />");

    // Receiving message from WebSocket
    this.chatSocket.onmessage =  (event) => {
      console.log(event.data);
      const msgReceived = JSON.parse(event.data)
      console.log("this is the type of msg:",msgReceived.type);

      // Displaying message to all users
      if(msgReceived.type === 'Message'){
        const newMessages = this.state.messages.concat(msgReceived);
        this.setState({
          messages: newMessages
        });
      }else if(msgReceived.type === 'Notification'){
        const newMessages = this.state.messages.concat(msgReceived);
        this.setState({
          messages: newMessages
        });
      }else if (msgReceived.type === 'serverMessage'){
        console.log("Number of users", msgReceived.users);
        this.setState({
          serverMessage: msgReceived.users
        });
      }
      else {
        throw new Error("Unknown event type " + msgReceived.type);
      }
    }
  }

  render() {
    console.log("rendering <app>");
    return (
      <div>
        <Navbar numberOfUsers={this.state.serverMessage}/>
        <MessageList  messages={this.state.messages}/>
        <Chatbar  username={this.newName.bind(this)}
                  newMessage={this.newMessage.bind(this)}
                  newNotification={this.newNotification.bind(this)}/>
      </div>
    );
  }
}

export default App;
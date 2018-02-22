import React, {Component} from 'react';

class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      console.log("rendering <messages>");
          const messages = this.props.messages.map((message) => {
            if(message.type === "Message") {
              return (
                <div key={message.id} className="message">
                  <span className="message-username">{message.username}</span>
                  <span className="message-content">{message.content}</span>
                </div>
              )
            } else {
              return (
                <div key={message.id} className="message system">
                 <span> {message.username} changed their name to {message.content}.</span>
                </div>
              )
            }
          });
        return (
          <main className="messages">
            {messages}
          </main>
        );
    }
}

export default MessageList;


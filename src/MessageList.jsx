import React, {Component} from 'react';

class MessageList extends Component {

    constructor(props) {
        super(props);
        console.log("messages", this.props.messages);
    }

    render() {
        const messages = this.props.messages.map((message) => {
          return (
            <div key={message.id} className="message">
              <span className="message-username">{message.username}</span>
              <span className="message-content">{message.content}</span>
            </div>
            // <div className="message system">
            //   Anonymous1 changed their name to nomnom.
            // </div>
          )

        });

        return (
          <main className="messages">
            {messages}
          </main>
        );
    }
}

export default MessageList;
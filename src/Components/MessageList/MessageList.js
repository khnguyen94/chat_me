import React from "react";
import "./MessageList.css";
// import Message from "../Message/Message.js";

const sample_messages = [
  {
    senderID: "khnguyen",
    text: "Hey, how's it going?"
  },
  {
    senderID: "pabuckland",
    text: "I am well. How about you?"
  },
  {
    senderID: "khnguyen",
    text: "Doing great, thanks! Would you like to play with my cat Ruffus?"
  },
  {
    senderID: "pabuckland",
    text: "OMG, yes!!"
  }
];

function MessageListRender() {
    let renderMessages = sample_messages.map((message, index) => {
        return(
            <div key={index} className="message">
                <div className="sender-ID">
                    {message.senderID}
                </div>
                <div className="sender-text">{message.text}</div>
            </div>
        )
    })

  return(
    <div className="message-list">
        {renderMessages}
    </div>
  )
}

export default MessageListRender;

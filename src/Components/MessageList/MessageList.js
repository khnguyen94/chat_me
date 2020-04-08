import React from "react";
import "./MessageList.css";
// import Message from "../Message/Message.js";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "@material-ui/core/Avatar";
import { Chip } from "@material-ui/core";

const sample_messages = [
  {
    senderID: "khnguyen",
    senderABV: "kn",
    text: "Hey, how's it going?"
  },
  {
    senderID: "pabuckland",
    senderABV: "pb",
    text: "I am well. How about you?"
  },
  {
    senderID: "khnguyen",
    senderABV: "kn",
    text: "Doing great, thanks! Would you like to play with my cat Ruffus?"
  },
  {
    senderID: "pabuckland",
    senderABV: "pb",
    text: "OMG, yes!!"
  }
];

function MessageListRender(props) {

  let renderMessages = sample_messages.map((message, index) => {
    return (
      <div key={index} className="message">
        <Col md={1} sm={12} className="sender-chip-col">
          <Chip className="sender-chip" label={message.senderABV} />
        </Col>

        <Col md={11} sm={12} className="message-col">
          <Chip className="message-text" label={message.text} variant="outlined" color="primary"/>
        </Col>
      </div>
    );
  });

  return <div className="message-list">{renderMessages}</div>;
}

export default MessageListRender;

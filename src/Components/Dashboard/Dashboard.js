import React from "react";
import "./Dashboard.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import TopicsList from "../TopicsList/TopicsList.js";
import Tab from "react-bootstrap/Tab";
import { MenuList, MenuItem, Divider } from "@material-ui/core";
import MessageList from "../MessageList/MessageList.js";
import { Chip } from "@material-ui/core";
import SendMessageForm from "../SendMessageForm/SendMessageForm.js";

import { CTX } from "../Store/Store.js";

function DashboardRender() {
  // CTX store
  const [allChats] = React.useContext(CTX);
  const topics = Object.keys(allChats);

  // local states
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");

  let renderTopicsList = topics.map((topic, index) => {
    return (
      <div key={index}>
        <MenuItem onClick={(event) => {changeActiveTopic(event.target.innerText)}}>{topic}</MenuItem>
        <Divider />
      </div>
    );
  });

  let renderMessages = allChats[activeTopic].map((message, index) => {
    return (
      <div key={index} className="message">
        <Col md={1} sm={12} className="sender-chip-col">
          <Chip className="sender-chip" label={message.senderInitials} />
        </Col>

        <Col md={11} sm={12} className="message-col">
          <Chip className="message-text" label={message.msg} variant="outlined" color="primary"/>
        </Col>
      </div>
    );
  });

  return (
    <div className="dashboard">
      <Jumbotron>
        <h1>Chat Me</h1>

        <hr />

        <h3>{activeTopic}</h3>

        <Row>
          <Col xs={12} md={3}>
            <Container fluid className="topics-container">
              <div className="room-list">
                <Tab.Container id="room-list" defaultActiveKey="#link1">
                  <Row>
                    <Col>
                      <MenuList>{renderTopicsList}</MenuList>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Container>
          </Col>

          <Col xs={12} md={9}>
            <Container fluid className="chatbox-container">
            <div className="message-list">{renderMessages}</div>

              <SendMessageForm />
            </Container>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default DashboardRender;

import React from "react";
import "./Dashboard.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import TopicsList from "../TopicsList/TopicsList.js";
import MessageList from "../MessageList/MessageList.js";
import SendMessageForm from "../SendMessageForm/SendMessageForm.js";

function DashboardRender() {
  return (
    <div className="dashboard">
      <Jumbotron>
        <h1>Chat Me</h1>

        <hr />

        <Row>
          <Col xs={12} md={3}>
            <Container fluid className="topics-container">
              <TopicsList />
            </Container>
          </Col>

          <Col xs={12} md={9}>
            <Container fluid className="chatbox-container">
              <MessageList />

              <SendMessageForm />
            </Container>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default DashboardRender;

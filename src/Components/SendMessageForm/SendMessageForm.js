import React from "react";
import "./SendMessageForm.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SendMessageFormRender() {
  return (
    <div className="send-message-form">
      <Row className="new-message-row">
        <Col md={10} sm={12} id="message-text-col">
          <Form>
            <Form.Group controlId="message-text">
            <Form.Control type="text" placeholder="Message" />
            </Form.Group>
          </Form>
        </Col>

        <Col md={2} sm={12} id="submit-button-col">
          <Button variant="primary" type="submit" id="submit-button">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SendMessageFormRender;

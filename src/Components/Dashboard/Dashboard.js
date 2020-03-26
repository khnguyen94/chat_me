import React from "react";
import "./Dashboard.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import MessageList from "../MessageList/MessageList.js";
import SendMessageForm from "../SendMessageForm/SendMessageForm.js";

function DashboardRender() {
  return(
    <div className="dashboard">
      <Jumbotron>
        <h1>Chat Me</h1>

        <hr />

        <MessageList />

        <SendMessageForm />
      </Jumbotron>
    </div>
  );
}

export default DashboardRender; 

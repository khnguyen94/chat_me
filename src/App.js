import React, { Component } from "react";
import "./App.css";
import SendBird from "sendbird"; 
import Jumbotron from "react-bootstrap/jumbotron";
import MessageList from "./Components/MessageList/MessageList.js";
import RoomList from "./Components/RoomList/RoomList.js";
import NewRoomForm from "./Components/NewRoomForm/NewRoomForm.js";
import SendMessageForm from "./Components/SendMessageForm/SendMessageForm.js";

var sb = new SendBird({appId: "07A2D70F-9F26-486C-A5A7-2D964B5C74D3"});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Chat Me</h1>

          <hr />

          <MessageList />
        </Jumbotron>
      </div>
    );
  }
}

export default App;

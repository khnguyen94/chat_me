import React, { Component } from "react";
import "./App.css";

import SendBird from "sendbird";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Store from "./Components/Store/Store.js";
import RoomList from "./Components/TopicsList/TopicsList.js";
import NewRoomForm from "./Components/NewRoomForm/NewRoomForm.js";
import SendMessageForm from "./Components/SendMessageForm/SendMessageForm.js";

var sb = new SendBird({ appId: "07A2D70F-9F26-486C-A5A7-2D964B5C74D3" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store>
          <Dashboard />
        </Store>
      </div>
    );
  }
}

export default App;

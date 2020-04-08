import React from "react";
import "./TopicsList.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import { MenuList, MenuItem, Divider } from "@material-ui/core";

import {DashboardRender} from "../Dashboard/Dashboard.js";

function TopicsListRender(props) {

  console.log(props);

  let renderTopicsList = props.topics.map((topic, index) => {
    return (
      <div key={index}>
        <MenuItem>{topic}</MenuItem>
        <Divider />
      </div>
    );
  });

  return (
    <div className="room-list">
      <Tab.Container id="room-list" defaultActiveKey="#link1">
        <Row>
          <Col>
            <MenuList>{renderTopicsList}</MenuList>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default TopicsListRender;

import React from "react";
import "./TopicsList.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import { MenuList, MenuItem, Divider } from "@material-ui/core";

const sample_topics = [
  {
    topicID: "1",
    topicName: "Nike"
  },
  {
    topicID: "2",
    topicName: "Jordan"
  },
  {
    topicID: "3",
    topicName: "Adidas"
  },
  {
    topicID: "4",
    topicName: "Naked & Famous"
  },
  {
    topicID: "5",
    topicName: "Balenciaga"
  },
  {
    topicID: "6",
    topicName: "Patagonia"
  },
  {
    topicID: "7",
    topicName: "Gucci"
  }
];

function TopicsListRender() {
  let renderTopicsList = sample_topics.map((topic, index) => {
    return (
      <div>
        <MenuItem>{topic.topicName}</MenuItem>
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

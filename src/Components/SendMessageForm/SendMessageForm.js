import React from "react";
import "./SendMessageForm.css";

import { makeStyles } from "@material-ui/core/styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function SendMessageFormRender() {
  const [values, setValues] = React.useState({
    message: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="send-message-form">
      <Row className="new-message-row">
        <Col md={10} sm={12} id="message-text-col">
          <form className={""} noValidate autoComplete="off">
            <TextField
              fullWidth
              id="message-text"
              label="Message"
              variant="outlined"
            />
          </form>
        </Col>

        <Col md={2} sm={12} id="submit-button-col">
          <Button
            id="submit-button"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          ></Button>
        </Col>
      </Row>
    </div>
  );
}

export default SendMessageFormRender;

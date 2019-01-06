import React from "react";
import { Col, Button } from "react-bootstrap";
import "./Main.css";
function Button3(props) {
  return (
    <Col xs={7} sm={5}>
      <Button
        value={props.symbol[props.id]}
        className="btn"
        bsStyle="primary"
        bsSize="large"
        onClick={props.handleClick}
      >
        {props.symbol[props.id]}
      </Button>
    </Col>
  );
}

export default Button3;

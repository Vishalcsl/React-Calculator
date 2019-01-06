import React from "react";
import { Col, Button } from "react-bootstrap";
import "./Main.css";

function Button2(props) {
  return (
    <Col xs={4} md={3}>
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

export default Button2;

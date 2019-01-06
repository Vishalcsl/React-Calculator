import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Main.css";

function Button1(props) {
  console.log(props.clear);
  return (
    <Col xs={6} md={4}>
      <Button
        value={props.symbol[props.id]}
        className="btn"
        bsStyle={props.style}
        bsSize="large"
        onClick={props.handleClick}
      >
        {props.symbol[props.id]}
      </Button>
    </Col>
  );
}

export default Button1;

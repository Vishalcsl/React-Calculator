import React from "react";
import { Row } from "react-bootstrap";
import Button1 from "./Button1";
import "./Main.css";

function Row1(props) {
  return (
    <Row className="btn-row">
      <Button1
        style={props.danger}
        symbol={props.Array}
        id={0}
        handleClick={props.handleAC}
      />
      <Button1
        style={props.primary}
        symbol={props.Array}
        id={1}
        handleClick={props.handleClick}
      />
      <Button1
        style={props.primary}
        symbol={props.Array}
        id={2}
        handleClick={props.handleClick}
      />
    </Row>
  );
}

export default Row1;

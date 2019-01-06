import React from "react";
import Button1 from "./Button1";
import Button3 from "./Button3";
import { Row } from "react-bootstrap";
import "./Main.css";

function Row4(props) {
  return (
    <Row className="btn-row">
      <Button3 id={0} symbol={props.Array} handleClick={props.handleClick} />
      <Button1
        style={props.primary}
        symbol={props.Array}
        id={1}
        handleClick={props.handleClick}
      />
    </Row>
  );
}

export default Row4;

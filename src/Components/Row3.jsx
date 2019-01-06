import React from "react";
import { Row } from "react-bootstrap";
import "./Main.css";
import Button2 from "./Button2";

function Row3(props) {
  return (
    <Row className="btn-row">
      <Button2 id={0} symbol={props.Array} handleClick={props.handleClick} />
      <Button2 id={1} symbol={props.Array} handleClick={props.handleClick} />
      <Button2 id={2} symbol={props.Array} handleClick={props.handleClick} />
    </Row>
  );
}

export default Row3;

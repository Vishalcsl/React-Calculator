import React from "react";
import { Button } from "react-bootstrap";
import "./Equals.css";

function Equals(props) {
  return (
    <div id="equals">
      <Button
        value={"="}
        bsStyle="primary"
        bsSize="large"
        className="btn-large"
        onClick={props.handleClick}
      >
        =
      </Button>
    </div>
  );
}

export default Equals;

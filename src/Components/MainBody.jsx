import React, { Component } from "react";
import { Row, Grid } from "react-bootstrap";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Equals from "./Equals";
import "./Main.css";

export class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      primary: "primary",
      danger: "danger",
      symbolSet1: ["AC", "/", "*"],
      symbolSet2: [1, 2, 3, "-"],
      symbolSet3: [4, 5, 6, "+"],
      symbolSet4: [7, 8, 9],
      symbolSet5: [0, "."],
      displayTop: "",
      displayBottom: "0",
      input: "",
      operands: [],
      operators: [],
      cnt: 0,
      finalResult: -0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAC = this.handleAC.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleAC() {
    this.setState({
      displayBottom: "0",
      displayTop: "",
      input: "",
      operands: [],
      operators: [],
      finalResult: -0
    });
  }

  handleEquals() {
    const lastOperand = parseFloat(this.state.input);
    console.log(this.state.input);
    this.state.operands.push(lastOperand);
    if (this.state.operators.length === this.state.operands.length - 1) {
      var temp = this.state.operands[this.state.operands.length - 1];
      var result = 0;
      for (let i = this.state.operators.length - 1; i >= 0; i--) {
        switch (this.state.operators[i]) {
          case "+":
            result = this.state.operands[i] + temp;
            temp = result;
            break;

          case "-":
            result = this.state.operands[i] - temp;
            temp = result;
            break;

          case "*":
            result = this.state.operands[i] * temp;
            temp = result;
            break;

          case "/":
            result = this.state.operands[i] / temp;
            temp = result;
            break;
          default:
            result = 0;
            temp = 0;
            break;
        }
      }
      this.setState(prevState => ({
        displayBottom: result,
        displayTop: prevState.displayTop + "=" + result,
        finalResult: result,
        input: ""
      }));
      this.state.operands = [];
      this.state.operators = [];
    } else {
      this.setState({
        displayBottom: "ERROR",
        displayTop: "",
        operands: [],
        operators: [],
        cnt: 0,
        finalResult: -0
      });
    }
  }

  handleClick(event) {
    const { value } = event.target;
    var Input = this.state.input;

    if ((value >= 0 && value <= 9) || value === ".") {
      if (this.state.finalResult != -0) {
        this.state.displayTop = "";
      }
      Input = Input.concat(value);
      this.setState(prevState => ({
        displayTop: prevState.displayTop + value,
        displayBottom: Input,
        input: Input,
        cnt: 0,
        finalResult: -0
      }));
    } else if (value === "/" || "*" || "+" || "-") {
      if (this.state.finalResult !== -0) {
        this.state.operands.push(this.state.finalResult);
        this.state.finalResult = -0;
      }
      if (this.state.cnt === 0) {
        var operand = parseFloat(this.state.input);
        if (!isNaN(operand)) {
          this.state.operands.push(operand);
        }
        this.state.operators.push(value);
        this.setState(prevState => ({
          displayTop: prevState.displayTop + value,
          displayBottom: value,
          input: "",
          cnt: 1,
          finalResult: -0
        }));
      } else {
        this.state.operators.pop();
        this.state.operators.push(value);
        var str = this.state.displayTop;
        str = str.substring(0, str.length - 2);
        this.setState({
          displayTop: str + value,
          displayBottom: value,
          cnt: 1,
          finalResult: -0
        });
      }
    }
    console.log(this.state.operands);
    console.log(this.state.operators);
  }
  render() {
    return (
      <Grid>
        <div id="main">
          <Row className="display">
            <h4 style={style}>{this.state.displayTop}</h4>
          </Row>
          <Row className="display">
            <h3 style={{ fontFamily: "Digital", fontSize: "30px" }}>
              {this.state.displayBottom}
            </h3>
          </Row>
          <Row>
            <Row1
              Array={this.state.symbolSet1}
              handleAC={this.handleAC}
              primary={this.state.primary}
              danger={this.state.danger}
              handleClick={this.handleClick}
            />
          </Row>
          <Row>
            <Row2
              Array={this.state.symbolSet2}
              handleClick={this.handleClick}
            />
          </Row>
          <Row>
            <Row2
              Array={this.state.symbolSet3}
              handleClick={this.handleClick}
            />
          </Row>
          <Row>
            <Row3
              Array={this.state.symbolSet4}
              handleClick={this.handleClick}
            />
          </Row>
          <Row>
            <Row4
              Array={this.state.symbolSet5}
              primary={this.state.primary}
              handleClick={this.handleClick}
            />
          </Row>
          <Equals handleClick={this.handleEquals} />
        </div>
      </Grid>
    );
  }
}
const style = {
  color: "brown",
  fontFamily: "Digital",
  fontWeight: 400,
  marginTop: "15px",
  fontSize: "40px"
};

export default MainBody;

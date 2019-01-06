import React, { Component } from "react";
import { Navbar, PageHeader } from "react-bootstrap";
import "./Main.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <PageHeader>Calculator</PageHeader>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>CalCulo</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>Basic Calculation</Navbar.Text>
            <Navbar.Text pullRight>Calculate With Ease</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

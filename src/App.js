import React, { Component } from "react";
import "./App.css";
import "./Components/Main.css";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody />
      </div>
    );
  }
}

export default App;

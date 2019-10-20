import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.useless} style={{ textAlign: "center" }}>
          Useless
        </button>
      </div>
    );
  }
}

export default App;

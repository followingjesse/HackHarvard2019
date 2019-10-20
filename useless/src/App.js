import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }
  render = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.increment} style={{ textAlign: "center" }}>
          Useless
        </button>
      </div>
    );
  }

  increment = () => {
    this.state.counter = this.state.counter + 1;
    console.log(this.state.counter);
  }
}

export default App;

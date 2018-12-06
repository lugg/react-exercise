import React, { Component } from "react";
import Menu from "./components/Menu";
import Estimator from "./organisms/Estimator";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Estimator />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import CategorySelection from "./organisms/CategorySelection";
import LocationSelection from "./organisms/LocationSelection";

const Header = styled.h3`
  color: #1c1f34;
  font-size: 56px;
  margin-bottom: 68px;
  text-align: center;
  white-space: nowrap;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: "Henlo",
      step: "Location Selection"
    };
  }

  render() {
    const { category, step } = this.state;

    return (
      <div>
        <Menu />
        <Header>Get an estimate</Header>
        {step === "Category Selection" && (
          <CategorySelection
            onSelection={category => () => {
              this.setState({
                category,
                step: "Location Selection"
              });
            }}
          />
        )}
        {step === "Location Selection" && (
          <LocationSelection
            category={category}
            onChangeCategory={() =>
              this.setState({ category: "", step: "Category Selection" })
            }
          />
        )}
      </div>
    );
  }
}

export default App;

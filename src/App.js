import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import CategorySelection from "./organisms/CategorySelection";
import LocationSelection from "./organisms/LocationSelection";

const Header = styled.h3`
  color: #1c1f34;
  display: inline-block;
  font-size: 56px;
  margin-bottom: 68px;
  white-space: nowrap;
`;

const Content = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: "Henlo",
      step: "Category Selection"
    };
  }

  render() {
    const { category, step } = this.state;

    return (
      <div>
        <Menu />
        <Content>
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
        </Content>
      </div>
    );
  }
}

export default App;

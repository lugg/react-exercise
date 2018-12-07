import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Content = styled.div`
  max-width: 472px;
  margin: 0 auto;
`;

const CategoryCard = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  font-weight: 600;
`;

const Button = styled.button`
  background: none;
  color: #505fb4;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export default ({ category, onChangeCategory }) => (
  <Content>
    <CategoryCard>
      <Label>{category}</Label>
      <Button onClick={onChangeCategory}>Change</Button>
    </CategoryCard>
  </Content>
);

import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import TransportGraphics from "../../components/TransportGraphics";

const Division = styled.div`
  align-items: center;
  background-color: rgba(247, 247, 248, 0.5);
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px 15px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  width: 50%;
`;

const ProductText = styled.div`
  padding-bottom: 2px;
`;

const NameText = styled.span`
  color: #1f233b;
  font-size: 16px;
  font-weight: 600;
`;

const LuggerText = styled.span`
  color: #505fb4;
  font-weight: 600;
  font-size: 12px;
`;

const DescriptionText = styled.div`
  color: #848793;
  font-size: 12px;
  padding-bottom: 5px;
`;

const EstimateText = styled.div`
  color: #1f233b;
  font-size: 16px;
  font-weight: 600;
`;

export default ({
  baseCents,
  crewSize,
  description,
  laborMinuteCents,
  name,
  slug,
  ...otherProps
}) => {
  return (
    <Division {...otherProps}>
      <Content>
        <ProductText>
          <NameText>{name}</NameText>{" "}
          <LuggerText>
            {crewSize === 1 ? "1 Lugger" : `${crewSize} Luggers`}
          </LuggerText>
        </ProductText>
        <DescriptionText>{description}</DescriptionText>
        <EstimateText>
          ${(baseCents / 100).toFixed(2)} + $
          {(laborMinuteCents / 100).toFixed(2)} per min
        </EstimateText>
      </Content>
      <TransportGraphics crewSize={crewSize} slug={slug} />
      <Button styled>Book</Button>
    </Division>
  );
};

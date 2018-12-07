import React from "react";
import styled from "styled-components";
import LocationInput from "./LocationInput";
import Card from "../../components/Card";
import AllOurLuggersSvg from "../../assets/all_our_luggers.svg";

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

const Copy = styled.p`
  color: #848793;
  font-size: 14px;
  text-align: center;
`;

export default ({
  category,
  destination,
  handleDestinationChange,
  handleOriginChange,
  onChangeCategory,
  origin
}) => (
  <Content>
    <CategoryCard>
      <Label>{category}</Label>
      <Button onClick={onChangeCategory}>Change</Button>
    </CategoryCard>
    <Card>
      <LocationInput
        destination={destination}
        handleDestinationChange={handleDestinationChange}
        handleOriginChange={handleOriginChange}
        origin={origin}
      />
      <br />
      {!origin || !destination ? (
        <div>
          <br />
          <br />
          <img src={AllOurLuggersSvg} alt="" />
          <Copy>
            All our Luggers are equipped with the necessary tools such as
            straps, blankets and wrap to protect your items.
          </Copy>
        </div>
      ) : (
        <div>list list list</div>
      )}
    </Card>
  </Content>
);

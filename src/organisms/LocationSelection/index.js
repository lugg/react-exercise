import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import LocationInput from "./LocationInput";
import IdleCopy from "./IdleCopy";
import FareEstimateItem from "./FareEstimateItem";
import Card from "../../components/Card";

const Content = styled.div`
  max-width: 472px;
  margin: 0 auto;
`;

const CategoryCard = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px;
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
      {!origin || !destination ? (
        <IdleCopy />
      ) : (
        <Query
          query={GET_FARE_ESTIMATES}
          variables={{
            origin,
            destination,
            useCase: category
          }}
        >
          {({ data: { fareEstimates }, loading, error }) => {
            if (loading || !fareEstimates) {
              return <div>Loading...</div>;
            } else if (error) {
              return <div>{JSON.stringify(error)}</div>;
            }

            return fareEstimates.map(estimate => (
              <FareEstimateItem>{JSON.stringify(estimate)}</FareEstimateItem>
            ));
          }}
        </Query>
      )}
    </Card>
  </Content>
);

const GET_FARE_ESTIMATES = gql`
  query FareEstimates(
    $origin: String!
    $destination: String!
    $useCase: String!
  ) {
    fareEstimates(
      origin: $origin
      destination: $destination
      useCase: $useCase
    ) {
      id
      origin
      destination
      baseCents
      laborMinuteCents
      product {
        id
        name
        slug
        description
        crewSize
      }
    }
  }
`;

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import LocationInput from "./LocationInput";
import IdleCopy from "./IdleCopy";
import FareEstimateItem from "./FareEstimateItem";
import Button from "../../components/Button";
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
      {!category || !destination || !origin ? (
        <IdleCopy />
      ) : (
        <Query
          query={GET_FARE_ESTIMATES}
          variables={{
            destination,
            origin,
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
              <FareEstimateItem
                baseCents={estimate.baseCents}
                crewSize={estimate.product.crewSize}
                description={estimate.product.description}
                key={estimate.id}
                laborMinuteCents={estimate.laborMinuteCents}
                name={estimate.product.name}
                slug={estimate.product.slug}
              />
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
      baseCents
      laborMinuteCents
      product {
        crewSize
        description
        name
        slug
      }
    }
  }
`;

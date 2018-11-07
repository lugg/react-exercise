import React, { Component } from "react";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

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

class App extends Component {
  render() {
    return (
      <Query
        query={GET_FARE_ESTIMATES}
        variables={{
          origin: "Cost Plus World Market",
          destination: "487 Bryant St. San Francisco, CA",
          useCase: "Store Delivery"
        }}
      >
        {({ data: { fareEstimates }, loading, error }) => {
          if (loading || !fareEstimates) {
            return <div>Loading ...</div>;
          } else if (error) {
            return <div>{JSON.stringify(error)}</div>;
          }

          return <p>{JSON.stringify(fareEstimates)}</p>;
        }}
      </Query>
    );
  }
}

export default App;

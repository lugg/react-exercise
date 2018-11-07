import { uuid, randomInt, slugify } from "../utils";

export const schema = `
  type Query {
    fareEstimates(useCase: String!, origin: String! destination: String!): [FareEstimate!]!
  }

  type FareEstimate {
    id: ID!
    origin: String!
    destination: String!
    baseCents: Int!
    laborMinuteCents: Int!
    product: Product!
  }

  type Product {
    id: ID!
    slug: String!
    name: String!
    description: String!
    crewSize: Int!
  }
`;

const mockFareEstimate = () => {
  return {
    id: uuid(),
    baseCents: randomInt(5000, 10000),
    laborMinuteCents: randomInt(100, 200)
  };
};

const mockProduct = (name, description, crewSize) => {
  return {
    id: uuid(),
    slug: slugify(name),
    name,
    description,
    crewSize
  };
};

export const resolvers = {
  Query: {
    fareEstimates: (parent, { origin, destination }) => {
      return [
        {
          ...mockFareEstimate(),
          origin,
          destination,
          product: mockProduct("Lite", "Single item and small loads", 1)
        },
        {
          ...mockFareEstimate(),
          origin,
          destination,
          product: mockProduct("Pickup", "Single item and small loads", 2)
        },
        {
          ...mockFareEstimate(),
          origin,
          destination,
          product: mockProduct("Van", "Room full of stuff", 2)
        },
        {
          ...mockFareEstimate(),
          origin,
          destination,
          product: mockProduct("XL", "Studio and 1 bedroom apts", 1)
        }
      ];
    }
  },
};

import { graphql } from "msw";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export type TProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  crewSize: number;
};

export type TQuote = {
  id: string;
  origin: string;
  destination: string;
  baseCents: number;
  laborMinuteCents: number;
  product: { __typename: string } & TProduct;
};

interface IGetQuotesQuery {
  quotes: Array<{ __typename: string } & TQuote>;
}

interface IGetQuotesQueryVariables {
  origin: string;
  destination: string;
  useCase: string;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mockQuote(
  attrs: Pick<TQuote, "origin" | "destination" | "product">
): TQuote {
  return {
    ...attrs,
    id: uuidv4(),
    baseCents: randomInt(5000, 10000),
    laborMinuteCents: randomInt(100, 200),
  };
}

function mockProduct(
  attrs: Pick<TProduct, "name" | "description" | "crewSize">
): TProduct {
  return {
    id: uuidv4(),
    slug: slugify(attrs.name, { lower: true }),
    ...attrs,
  };
}

export const handlers = [
  graphql.query<IGetQuotesQuery, IGetQuotesQueryVariables>(
    "GetQuotes",
    (req, res, ctx) => {
      const { origin, destination } = req.variables;

      return res(
        ctx.data({
          quotes: [
            {
              __typename: "Quote",
              ...mockQuote({
                origin,
                destination,
                product: {
                  __typename: "Product",
                  ...mockProduct({
                    name: "Lite",
                    description: "Single item and small loads",
                    crewSize: 1,
                  }),
                },
              }),
            },
            {
              __typename: "Quote",
              ...mockQuote({
                origin,
                destination,
                product: {
                  __typename: "Product",
                  ...mockProduct({
                    name: "Pickup",
                    description: "Single item and small loads",
                    crewSize: 2,
                  }),
                },
              }),
            },
            {
              __typename: "Quote",
              ...mockQuote({
                origin,
                destination,
                product: {
                  __typename: "Product",
                  ...mockProduct({
                    name: "Van",
                    description: "Room full of stuff",
                    crewSize: 2,
                  }),
                },
              }),
            },
            {
              __typename: "Quote",
              ...mockQuote({
                origin,
                destination,
                product: {
                  __typename: "Product",
                  ...mockProduct({
                    name: "XL",
                    description: "Studio and 1 bedroom apts",
                    crewSize: 2,
                  }),
                },
              }),
            },
          ],
        })
      );
    }
  ),
];

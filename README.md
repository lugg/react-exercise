# Lugg's React Exercise

This is bare bones React application created using [Vite](https://vitejs.dev/) + TypeScript.

### What you'll be building

![Exercise](https://user-images.githubusercontent.com/59875/48161706-1462fe00-e290-11e8-9c72-159258c26faf.png)

You'll be building a simple estimates page that our customers would use on lugg.com to better understand what they can expect to pay before requesting a Lugg. You can find the real thing on our website [here](https://lugg.com/estimate). You'll find the [Figma](https://figma.com) `.fig` file in the `/design` folder within this repo detailing the three steps of the estimate process. You'll may notice some discrepancies between this design and what you see on [lugg.com](https://lugg.com) (i.e. the map on the right hand side). You do not need to implement the map. If you have any questions about how things should function please ask.

- How you decide to do CSS with React is entirely up to you. At Lugg we use [Tailwind](https://tailwindcss.com) but if something like CSS in JS is more flavor then please feel free to use that.
- Please DO NOT hard code the estimates. You are expected to fetch the estimate data using Apollo.

### Setup

```shell
$ git clone git@github.com:luggit/react-exercise.git
$ cd react-exercise
$ npm install
$ npm run dev
```

### Fetching data

I've setup apollo with some mock data so you can query a graphql backend without needing a server. You can get estimates as follows:

```js
import { gql, useQuery } from "@apollo/client";

const GET_QUOTES = gql`
  query GetQuotes($origin: String!, $destination: String!, $useCase: String!) {
    quotes(origin: $origin, destination: $destination, useCase: $useCase) {
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

const { loading, data, error } = useQuery(GET_QUOTES, {
  variables: {
    origin: "78 1st St, San Francisco, CA 94105",
    destination: "35 Topaz Way, San Francisco, CA 94131",
  },
});

if (loading) {
  return <span>loading...</span>;
}

if (error) {
  return <pre>{JSON.stringify(error, null, 2)}</pre>;
}

return <pre>{JSON.stringify(data, null, 2)}</pre>;
```

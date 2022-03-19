# React Exercise

This is a vanilla React Application created using `yarn create react-app`.

### What you'll be building

![Exercise](https://user-images.githubusercontent.com/59875/48161706-1462fe00-e290-11e8-9c72-159258c26faf.png)

You'll be building a simple estimates page that our customers would use on lugg.com to better understand what they can expect to pay before requesting a Lugg. You'll find the `.sketch` file in the `/design` folder within this repo detailing the three steps of the estimate process. If you have any questions about how things should function please ask.

- How you decide to do CSS with react is entirely your call. I've left all the css files from `create-react-app` intact but if CSS in JS is more your flavor then feel free to use that or any alternative.
- Please do not hard code the estimates. You are expected to fetch the estimate data using Apollo.

### Setup

```shell
$ git clone git@github.com:luggit/react-exercise.git
$ cd react-exercise
$ yarn
$ yarn start
```

### Fetching fare estimate data

I've setup apollo with some mock data so you can query a graphql backend without needing a server. You can fetch estimates as follows:

```
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

    return <div>{JSON.stringify(fareEstimates)}</div>;
  }}
</Query>
```

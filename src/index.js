import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./App";
import { schema, resolvers } from "./apollo/schema";
import GlobalStyles from "./components/GlobalStyles";

async function render() {
  const cache = new InMemoryCache();

  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: executableSchema }),
    cache
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <GlobalStyles />
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  );
}

render();

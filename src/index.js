import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";

import App from "./App";
import { schema, resolvers } from "./apollo/schema";

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
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  );
}

render();

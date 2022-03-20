import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3000",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {/* YOUR CODE GOES HERE */}
      <h3>Hello world!</h3>
    </ApolloProvider>
  );
}

export default App;

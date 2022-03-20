import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Quotes from "./components/quotes";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3000",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {/* YOUR CODE HERE */}
      <Quotes />
    </ApolloProvider>
  );
}

export default App;

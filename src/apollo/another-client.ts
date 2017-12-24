import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "https://graphql.brandfolder.com/graphql"
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

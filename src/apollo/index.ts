import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import anotherClient from "./another-client";
export { anotherClient };

const httpLink = new HttpLink({
  uri: "http://fake.graphql.guru/graphql"
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

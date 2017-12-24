import * as React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import DefaultClient from "./default-client";
import ManuallySelectedClient from "./manually-selected-client";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <DefaultClient />
          <ManuallySelectedClient />
        </div>
      </ApolloProvider>
    );
  }
}

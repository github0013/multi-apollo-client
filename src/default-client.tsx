import * as React from "react";
import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";

interface AddressProps {
  country: string;
}

interface Response {
  Address: AddressProps;
}

const Query = gql`
  {
    Address {
      country
    }
  }
`;

class DefaultClient extends React.Component<ChildProps<{}, Response>, {}> {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div />;
    }
    console.log(data.Address);
    return <div>{data.Address.country}</div>;
  }
}

export default graphql<Response>(Query)(DefaultClient);

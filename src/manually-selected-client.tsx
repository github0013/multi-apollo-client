import * as React from "react";
import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import { anotherClient } from "./apollo";

interface ViewerProps {
  id: string;
}

interface Response {
  viewer: ViewerProps;
}

const Query = gql`
  {
    viewer {
      id
    }
  }
`;

class ManuallySelectedClient extends React.Component<
  ChildProps<{}, Response>,
  {}
> {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div />;
    }
    console.log(data.viewer);
    return <div>{data.viewer.id}</div>;
  }
}

export default graphql<Response>(Query, {
  options: props => ({
    client: anotherClient
  })
})(ManuallySelectedClient);

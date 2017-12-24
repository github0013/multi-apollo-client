# how to use multiple apollo clients (different endpoints and etcs). checked on "react-apollo": "^2.0.4"

```bash
# install packages
yarn install

# run parcel
./node_modules/.bin/parcel src/index.html

# then open browser
open http://localhost:1234
```

### ApolloProvider
https://github.com/apollographql/react-apollo/blob/55d06d90d94f1a855a704b9ab386ead104522db3/src/ApolloProvider.tsx#L37   
`client` is just passed down by react's context   
https://reactjs.org/docs/context.html


### graphql
Then, when you build your query, you use `graphql` provided by "react-apollo".

```tsx
import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";

const Query = gql`
  {
    Address {
      country
    }
  }
`;
            //this graphql
export default graphql<Response>(Query)(DefaultClient);
```

It uses the `client` from the context.   
https://github.com/apollographql/react-apollo/blob/55d06d90d94f1a855a704b9ab386ead104522db3/src/graphql.tsx#L266


But if you pass your own client when to build, `graphql` will use it instead   
https://github.com/apollographql/react-apollo/blob/55d06d90d94f1a855a704b9ab386ead104522db3/src/graphql.tsx#L261


### QueryOpts
https://github.com/apollographql/react-apollo/blob/55d06d90d94f1a855a704b9ab386ead104522db3/src/types.ts#L33

### MutationOpts
https://github.com/apollographql/react-apollo/blob/55d06d90d94f1a855a704b9ab386ead104522db3/src/types.ts#L24


To wrap up, this is how you use multiple clients.   
https://github.com/github0013/multi-apollo-client/blob/master/src/manually-selected-client.tsx#L38

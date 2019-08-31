---
date: 2019-08-30
title: 'Implementing GraphQL in a microservice architecture'
template: post
thumbnail: '../thumbnails/react.png'
slug: implementing-graph-ql-in-a-microservice-architecture
categories:
  - Tutorial
tags:
  - apollo
  - graphql
---

Let's say you have your ApolloProvider set up like this:

```javascript
import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://www.example.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
```

If you would use a Query component, it would use the client you passed via context. But what if your team decided to move to a microservice architecture where you'll have to deal with multiple clients. How would you do this?

Here are 2 simple ways:

If you are using <Query /> component, easiest way to do this is to just pass a prop.

```javascript
const User = () => {
  return (
    <Query query={GET_USER} client={userClient}>
      ...
    </Query>
  )
}
```

If you are using useQuery react hook, you can pass a client instance in its options.
```javascript
const { data } = useQuery(GET_USER, {
  client: userClient
});

const User = () => {
  return (
    ...
  )
}
```

There are other to work with multiple graphql clients in react. If you want to know more, check out this article:

https://medium.com/open-graphql/apollo-multiple-clients-with-react-b34b571210a5

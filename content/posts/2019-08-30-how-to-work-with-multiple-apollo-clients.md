---
date: 2019-08-30
title: 'How to work with multiple apollo clients'
template: post
thumbnail: '../thumbnails/react.png'
slug: how-to-work-with-multiple-apollo-clients
categories:
  - Apollo
tags:
  - apollo

---

Let's say you have multiple apollo clients. One of the easiest way to achieve this is to just pass the client to your Query component or useQuery hook.

```javascript
const UserPhoto = () => (
  <Query query={GET_USER_PHOTO} client={userClient}>
    ...
  </Query>
);
```

```javascript
const { data } = useQuery(GET_USER_PHOTO, {
  client: userClient
});
```

If you want to know more about other ways to achieve this, you can check out this post:

https://medium.com/open-graphql/apollo-multiple-clients-with-react-b34b571210a5

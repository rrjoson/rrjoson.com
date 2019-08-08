---
date: 2019-08-05
title: 'Add easy type checking with JSDOC'
template: post
thumbnail: '../thumbnails/js.png'
slug: type-checking
categories:
  - Tools
  - JavaScript
tags:
  - jsdoc
  - documentation
---

### Preparing an example

For this article, let's say you have a function that concatenates the first name and last name

```javascript
const getFullName = (firstName, lastName) => {
  return `${firstName} + ${lastName}`;
};
```

Now, let's say you want to catch bugs early by early detection of type errors.

### Type checking

We can do this by adding JSDOC

```javascript
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 */
const getFullName = (firstName, lastName) => {
  return `${firstName} + ${lastName}`;
};
```

Finally, to add type checking, we can add ts check

```javascript
// @ts-check

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 */
const getFullName = (firstName, lastName) => {
  return `${firstName} + ${lastName}`;
};
```



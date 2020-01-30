---
date: 2020-01-30
title: 'Using react-testing-library'
template: post
thumbnail: '../thumbnails/octopus.png'
slug: using-react-testing-library
categories:
  - testing
tags:
  - testing
  - react-testing-library
---



[react-testing-library](https://github.com/testing-library/react-testing-library) is a very lightweight solution for testing React components. Here are a few of my learnings from building this [unsplash viewer](https://github.com/rrjoson/unsplash-react-testing-library):

### Simulating events
---
Consider using [@testing-library/user-event](https://github.com/testing-library/user-event) for simulating events instead of [fireEvent](https://testing-library.com/docs/dom-testing-library/api-events#fireevent).

If you want to simulate a user typing in an input field using fireEvent, you would write something like this:

```javascript
fireEvent.change(input, { target: { value: "Hello world" } });
```

The problem with this is that it doesn't simulate what a real user would do. It doesn't simulate events like focus, mouseEnter, keyDown, etc. If you want to simulate those events, you can use userEvent:


```javascript
import userEvent from "@testing-library/user-event";

userEvent.type(input, "Hello world");
```


### Targeting components
---

If you want to target a component, consider trageting them using data-testid instead of class names.

```javascript
const SearchResults = () => (
  <div data-testid='search-results'></div>
);
```

```javascript
const searchResults = getByTestId("search-results");
```

### Restricting queries
---

When I was trying to target a page number in the pagination component, I was trying to use `getByText('2')`. The problem here is that there might be more than one number `'2'` in the application. To solve this, I restricted the query to only search within the pagination component container.

```javascript
const paginationComponent = getByTestId("search-pagination");
within(paginationComponent).getByText("2");
```


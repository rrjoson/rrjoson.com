---
date: 2019-09-12
title: 'How to use GitHub wiki to speed up code reviews'
template: post
thumbnail: '../thumbnails/git.png'
slug: how-to-use-git-hub-wiki-to-speed-up-code-reviews
categories:
  - Productivity
tags:
  - productivity
  - github
---

When doing code reviews, you might find yourself having to point out inconsistencies in your team's coding style that a linter can't catch. Things like naming variables, file structure, etc. And sometimes having to do this and having to explain why a coding style is preferred over another can affect the time a PR gets merged.

One of the ways you can address is to create a GitHub wiki. If you have a standard for naming arrays as nameList instead of names, document it there. If your team prefers to import lodash functions like import _get from 'lodash/get;' instead of import get from 'lodash/get';, add it there. But make sure that you have discussed the pros and cons with your team before you put it there.

The result is a faster code review process because of two reasons. First, you can use that wiki as a guide when doing code reviews. Second, when a new developer comes in and a coding style was not followed, you can just refer to the wiki without having to explain why a coding style is preferred over the other.


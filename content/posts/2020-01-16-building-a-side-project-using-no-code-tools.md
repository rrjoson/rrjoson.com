---
date: 2020-01-16
title: 'Building a side project using no code tools'
template: post
thumbnail: '../thumbnails/writing.png'
slug: building-a-side-project-using-no-code-tools
categories:
  - side project
tags:
  - startups
---

### Backstory
Recently, I've been reading Pieter Level's [Make](https://makebook.io/) book. It is a bootstrapper's handbook on how to build startups the indie way. What I like about it is that it talks about using no-code development tools to validate your idea first, before investing a lot of time and energy in developing your product. Coincidentally, at one of the companies I'm applying at for a job, I was asked to do a mini-project as part of the interview process. I had to build something that tries to solve a pain point faced by people who are in the field of multi-family real estate investing. So I thought it was a great opportunity to start using no-code development tools I've been reading about in Make book.

### Problem
Currently, for investors to find multi-family real estate deals, they have to go through mailing lists, broker websites, Facebook groups, and many other platforms. In that process, one of their possible pain points is the time-consuming factor of going through all those platforms to find a good deal.

### Solution
To try to address this pain point, my plan was to create a private list of deals where people would have to pay a fee to get their deals posted. Therefore, in that way, people would be forced to only post the best deals. Think of it like [Remote OK](https://remoteok.io/), wherein companies would have to pay a fee to post a job listing.

I tried exploring no-code development tools, where I can collect payments, and from there I found Typeform. I discovered that it supports collecting payments through Stripe, so I decided to pay for a subscription for a month. Unfortunately, I found out that Stripe is not supported in the Philippines. Therefore, I had to go back to my drawing board, and rethink if there were other testable hypotheses, which does not require any payment.

In retrospect, I also realized my original plan had some issues. I thought why would people pay for their deal to get posted in an exclusive list if they are not sure that there are people actually checking that list.

After going back to my drawing board, I came up with another hypothesis. I thought that if investors would have a single list of all the deals, and would be able to filter that list based on their preference, then it would save them time. They don't have to go through multiple platforms anymore, they can just use filters to find the deals they want.

### Building
![](https://lh3.google.com/u/0/d/1OrXNG0EHkrrJhQ3IG-NHRMmYrcwpSMBM=w1280-h800-iv1)

#### React JS
Initially, for building the landing page, I tried using [Carrd](https://carrd.co/) to save time but later realized I have to pay to get Google Analytics and other integrations work. So, since I have experience in React JS, I built the landing page from scratch.

#### Netlify
To deploy the landing page, I used Netlify because it makes deployment really easy. You just have to connect your GitHub repo. It also has automatic deployments when you update your GitHub repo.

#### Typeform
![](https://lh3.google.com/u/0/d/1Y8RnFkBy4ksB1ZRaM4ReemgMaFBSeZW6=w1280-h800-iv1)
I wanted to create two forms. One form is for getting the user's email before I give them access to the crowd-sourced list. A second form for adding deals to the crowd-sourced list. Instead of creating my own form from scratch, I used Typeform to gather information. I used this instead of other alternatives because I found it to have better UX.

#### Google Sheets
![](https://lh3.google.com/u/0/d/1sx8qx2bvzUK65XRr7JTmpDLIeK5ZvfnD=w1280-h800-iv1)
![](https://lh3.google.com/u/0/d/1YdwnSgfyk3AYcogBjYPVrZLB_G0Fh6FP=w1280-h800-iv1)
For keeping track of the people who wanted access to the spreadsheet and for building the actual spreadsheet, I used Google Sheets. I could have used Airtable but I discovered I have to pay to connect Typeform to Airtable. Every time someone answers my forms, a new row automatically gets added to my Google Sheet.

#### Zapier
![](https://lh3.google.com/u/0/d/1iKJLdzE_Tytt1d8YjhHSyBLNVgXxAOfQ=w2878-h1498-iv1)
I used Zapier for automatically sending emails to the people who signed up to get access to the spreadsheet.

#### Intercom
I also added intercom to get any user feedback. This might be useful if people have any feedback about what they want to see in the spreadsheet.

#### Google Analytics
![](https://lh3.google.com/u/0/d/1idl2TIjZi29jFBnnyu2C_Xp1WhmxkJ_n=w1280-h800-iv1)
To track how many people are visiting my landing page when I launch, I added Google Analytics.

### Metrics
To validate my hypothesis, some of the metrics that I can measure are:

- Number of visits in the landing page (Check Google Analytics)
- Number of people signing up for access to the spreadsheet (Check Google Sheets)
- Number of contributions to the spreadsheet (Check Google Sheets)
- Number of people checking the spreadsheet (Check Google Sheets)

### Retrospective

First, I could have lessen the time doing this side project by not spending too much time thinking about the design of the landing page from scratch. Maybe next time I can just copy the layout of other landing pages or maybe just buy a template.

Second, I could have built a website that displays a list of deals with filters from scratch. But to test the idea as quick as possible, I just used the interface of Google Sheets directly to save development time.

Third, I could have done more research so I could have built better forms, especially for the form for gathering multi family real estate deals.

Lastly, if I had more time, maybe I should have written a script to scrape the web for multi family real estate deals and document it in the google spreadsheet.

### Results
I wasn't able to test my hypothesis yet but this is the [link](https://multi-family-real-estate-spreadsheet.netlify.com/) to the mini project. Maybe I'll do another blog post about the results if I get the chance to test it.



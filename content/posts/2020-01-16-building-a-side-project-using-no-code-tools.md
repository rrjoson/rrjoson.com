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
Recently, I've been reading Pieter Level's [Make](https://makebook.io/) book. It is a bootstrapper's handbook on how to build startups the indie way. What I like about it is that it talks about using no-code development tools to validate your idea first before investing a lot of time and energy in developing your product. Coincidentally, at one of the companies I'm applying at for a job, I was asked to do a mini-project as part of the interview process. I have to build something that tries to solve a pain point people are having in the field of multi-family real estate investing. So I thought to myself this is a great opportunity to start using no-code development tools I've been reading about in Make book.

### Problem
Currently, for investors to find multi-family real estate deals, they go through mailing lists, broker websites, Facebook groups, etc.
I'm assuming that one of their pain points is that it is very time-consuming to go through all these platforms to find a good deal.

### Solution
To try to address this pain point, my plan was to create a private list of deals where people would have to pay a fee to get their deals posted. My hypothesis is that if posting a deal is not free, people would be forced to only post the best deals. Think of it like [Remote OK](https://remoteok.io/) where companies would have to pay a fee to post a job listing.

So I tried exploring no-code development tools where I can collect payments and found Typeform. I saw that it supports collecting payments using Stripe so I paid for a subscription for a month. Unfortunately, I found out Stripe is not supported in the Philippines so I had to go back to my drawing board and rethink if there are other hypotheses that I can test without asking for a payment. In retrospect, I also realized my original plan had some issues. I thought why would people pay for their deal to get posted in an exclusive list if they are not sure if there are people actually checking that list.

After going back to my drawing board, I came up with another hypothesis that if investors would have a single list of all the deals and be able to filter that list based on their preference then it would save them time looking for deals. They don't have to go through multiple platforms anymore. They can use filters to find the deals they want.

### Building

#### React JS
Initially, for building the landing page, I tried using [Carrd](https://carrd.co/) to save time but later realized I have to pay to get Google Analytics and other integrations work. So since I have experience in React JS, I built the landing page from scratch.

#### Netlify
To deploy the landing page, I used Netlify because it makes deployment really easy. You just have to connect your GitHub repo. It also has automatic deployments when you update your GitHub repo.

#### Typeform
I wanted to create two forms. One form for getting the user's name and email before I give them access to the crowd-sourced list. And another form for adding deals to the crowd-sourced list. Instead of creating my own form from scratch, I used Typeform to gather information. I used this instead of other alternatives because I found it to have better UX.

#### Google Sheets
For keeping track of the people who wanted access to the spreadsheet and for building the actual spreadsheet, I used Google Sheets. I could have used Airtable but from my research, I have to pay to connect third-party services to Airtable.

#### Zapier
Every time someone answers my form, responses automatically gets added as rows in the Google Sheet. I was able to do this using Zapier.

I also used Zapier for automatically sending emails the people who signed up to get access to the spreadsheet.

#### Intercom
I also added intercom to get any user feedback. This might be useful if people have any feedback about what they want to see in the spreadsheet.

#### Google Analytics
To track how many people are visiting my landing page when I launch, I added Google Analytics.

### Metrics
To validate my hypothesis, some of the metrics that I can measure are:

- Number of visits in the landing page (Check Google Analytics)
- Number of people signing up for access to the spreadsheet (Check Google Sheets)
- Number of contributions to the spreadsheet (Check Google Sheets)
- Number of people checking the spreadsheet (Check Google Sheets)

### Retrospective

First, I could have lessen the time doing this side project by not spending too much time thinking about the design of the landing page from scratch. Maybe next time I can just copy the layout of other landing pages.

Second, I could have saved some money by researching first if I can use Stripe in the Philippines. I bought a Typeform subscription then only to find out that I can't use Stripe integration in Typeform because Stripe is not supported in the Philippines yet.

Third, I could have done more research so I could have built better forms especially for the form for gathering multi family real estate deals.

Lastly, if I had more time, maybe I should have written a script to scrape the web for multi family real estate deals and document it in the google spreadsheet.

### Results
I wasn't able to my hypothesis yet but this is the link to the mini project. Maybe I'll do another blog post about the results if I get the chance to test my hypothesis


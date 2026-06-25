---
repo: "mauroservienti/all-our-aggregates-are-wrong-demos"
name: "all-our-aggregates-are-wrong-demos"
description: "A microservices powered e-commerce shopping cart sample - based on SOA principles. Demos and sample for my \"All our Aggregates are Wrong\" talk"
url: "https://github.com/mauroservienti/all-our-aggregates-are-wrong-demos"
homepage: "https://milestone.topics.it/talks/all-our-aggregates-are-wrong.html"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["soa", "nservicebus", "aggregates", "ddd", "samples", "demos", "talks", "viewmodel-composition", "hacktoberfest"]
stars: 237
forks: 38
openIssues: 4
closedIssues: 21
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2018-09-06T11:27:35Z"
lastCommitAt: "2026-06-25T02:08:53Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 42
maintainers: ["mauroservienti-bot", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/147663472/01f6d400-61e1-11e9-8aa3-9b04f5f244ba"
---

# All our Aggregates are Wrong - Demos

A microservices-powered e-commerce shopping cart sample based on SOA principles. These are the demos for my [All our Aggregates are Wrong](https://milestone.topics.it/talks/all-our-aggregates-are-wrong.html) talk.

The demo showcases a shopping cart and its associated behaviors. Add items to the cart and observe the log messages printed in the various service terminal windows as events are processed. Leave the cart inactive for a few seconds and observe the stale cart policy kick in: after 30 seconds of inactivity a `ShoppingCartGotStale` event is published, and after 60 seconds the cart is deleted and a `ShoppingCartGotInactive` event is published.

## Solution overview

The solution is organized into four business domains, each owning its own data and communicating asynchronously via NServiceBus over RabbitMQ.

### Marketing

Manages the product catalog. The `Marketing.Api` exposes product data (names, descriptions) used to compose product listing and shopping cart views. `Marketing.Data` provides the EF Core data access layer backed by a dedicated PostgreSQL database.

### Sales

Manages the shopping cart lifecycle. `Sales.Api` exposes…

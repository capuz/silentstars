---
repo: "zendesk/laika"
name: "laika"
description: "Log, test, intercept and modify Apollo Client's operations"
readmeQualityOk: true
url: "https://github.com/zendesk/laika"
homepage: "https://zendesk.github.io/laika"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["apollo", "apollo-client", "graphql", "mock", "testing", "utility", "apollo-link", "mocking", "test", "testing-tools"]
stars: 124
forks: 9
openIssues: 0
closedIssues: 15
watchers: 71
contributors: 48
recentReleases: 0
createdAt: "2021-10-19T19:38:18Z"
lastCommitAt: "2026-10-26T18:07:11Z"
lastReleaseAt: "2023-03-04T00:15:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 33
maintainers: ["zendesk-heibot[bot]", "dependabot[bot]", "bbrzoska"]
openGraphImageUrl: "https://opengraph.githubassets.com/8179f958991d9c0bf68ae502312629310b369e0ca22132abd5added3ed0f2195/zendesk/laika"
discussionCount: 8
---

Test, mock, intercept and modify Apollo Client's operations — in both browser and unit tests!

Read the Medium article about Laika: [Mock GraphQL Subscriptions with Laika — the only Apollo Client mocking tool you’ll need](https://medium.com/zendesk-engineering/mock-graphql-operations-with-laika-the-only-apollo-client-mocking-tool-youll-need-c116e1f62128)

## Features

- **mock** responses in either unit tests or browser tests (think Playwright, Puppeteer or Cypress)
  - simulate error state
  - simulate loading state
  - simulate subscriptions (pushing data to the client at any given point)
- it can work in production code without affecting the size of the bundle (laika is lazily loaded)
- captures the variables that were called for a given operation for assertions
- **log** all the data passing through from the network (or whatever Links are after this one)
- **record** your user story
- **generate fixtures and working mock code** for use in your tests
- **modify** backend responses before they reach your components (e.g. to fuzz-test unexpected behavior)

## Usage

- Peer support: `@apollo/client` `>=3.2.5 <5`, `graphql` `^15 || ^16`, and `rxjs` `^7.3.0` for Apollo Client 4.x…

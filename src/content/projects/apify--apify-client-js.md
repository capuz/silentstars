---
repo: "apify/apify-client-js"
name: "apify-client-js"
description: "Apify API client for JavaScript / Node.js."
readmeQualityOk: true
url: "https://github.com/apify/apify-client-js"
homepage: "https://docs.apify.com/api/client/js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 88
forks: 54
openIssues: 30
closedIssues: 134
watchers: 7
contributors: 66
recentReleases: 0
createdAt: "2017-05-10T12:43:36Z"
lastCommitAt: "2026-09-02T08:03:57Z"
lastReleaseAt: "2021-04-21T11:06:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["apify-service-account", "renovate[bot]", "B4nan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c6a8703134ba491ca953c09871b7b897ee2c7c548a022a9ffec63be96395b54/apify/apify-client-js"
discussionCount: 6
---

# Apify API client for JavaScript

`apify-client` is the official library to access [Apify API](https://docs.apify.com/api/v2) from your
JavaScript applications. It runs both in Node.js and browser and provides useful features like
automatic retries and convenience functions that improve the experience of using the Apify API.

- [Quick Start](#quick-start)
- [Features](#features)
    - [Automatic parsing and error handling](#automatic-parsing-and-error-handling)
    - [Retries with exponential backoff](#retries-with-exponential-backoff)
    - [Convenience functions and options](#convenience-functions-and-options)
- [Usage concepts](#usage-concepts)
    - [Nested clients](#nested-clients)
    - [Pagination](#pagination)
- [API Reference](#api-reference)

## Quick Start

```js
const { ApifyClient } = require('apify-client');

const client = new ApifyClient({
    token: 'MY-APIFY-TOKEN',
});

// Starts an actor and waits for it to finish.
const { defaultDatasetId } = await client.actor('john-doe/my-cool-actor').call();
// Fetches results from the actor's dataset.
const { items } = await client.dataset(defaultDatasetId).listItems();
```

## Features

Besides greatly simplifying the…

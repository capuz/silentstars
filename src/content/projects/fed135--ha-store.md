---
repo: "fed135/ha-store"
name: "ha-store"
description: "Efficient data fetching for your Javascript Applications"
readmeQualityOk: true
url: "https://github.com/fed135/ha-store"
homepage: "https://ha-store.js.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["cache", "javascript", "nodejs", "dataloader", "nplus1", "thundering-herd"]
stars: 80
forks: 7
openIssues: 4
closedIssues: 17
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2018-04-26T11:52:26Z"
lastCommitAt: "2026-11-17T14:41:25Z"
lastReleaseAt: "2026-01-11T16:08:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 27
maintainers: ["fed135"]
openGraphImageUrl: "https://opengraph.githubassets.com/48fd91518ac9f5f000c137d493fabbb12c0e9192d857a086e436e56f53f644f9/fed135/ha-store"
fundingLinks: ["GITHUB:https://github.com/fed135", "OPEN_COLLECTIVE:https://opencollective.com/fredericcharette"]
---

High-Availability store
  Efficient data fetching to prevent thundering herds!

**HA-store** is a wrapper for your data queries, it features:

- Smart TLRU cache for 'hot' information
- Supports multiple caching levels
- Request coalescing and batching (solves the [Thundering Herd problem](https://en.wikipedia.org/wiki/Thundering_herd_problem))
- Insightful stats and [events](#Monitoring-and-events)
- Lightweight, configurable, battle-tested

Learn how you can improve your app's performance, design and resilience [here](https://github.com/fed135/ha-store/wiki)!

## Installing

`npm install ha-store`

## Usage

```javascript
// Create your store
import HAStore, {caches} from 'ha-store';

const itemStore = HAStore({
  resolver: getItems,
  delimiter: ['language'],
  caches: [
    caches.inMemory({
      limit: 1000,  // Maximum number of cached items
      ttl: 60000,   // Time to live: 60 seconds
    }),
  ],
});

// Define your resolver
function getItems(ids, params, contexts) {
  // Ids will be a list of all the unique requested items
  // Params will be the parameters for the request, which must be declared in the `delimiter` config of the store
  // Contexts will be the list of…

---
repo: "apify/apify-sdk-js"
name: "apify-sdk-js"
description: "Apify SDK monorepo"
readmeQualityOk: true
url: "https://github.com/apify/apify-sdk-js"
homepage: "https://docs.apify.com/sdk/js"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [50, 46]
topics: ["actor", "apify", "javascript", "nodejs", "sdk", "typescript"]
stars: 187
forks: 70
openIssues: 30
closedIssues: 120
watchers: 9
contributors: 63
recentReleases: 0
createdAt: "2022-04-22T10:40:07Z"
lastCommitAt: "2026-11-26T12:58:16Z"
lastReleaseAt: "2023-07-20T15:36:10Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 45
maintainers: ["renovate[bot]", "apify-service-account", "vladfrangu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f770fe6cec6350d59b54882337f3e95228eea6d554574578d0984efe5ed2033/apify/apify-sdk-js"
discussionCount: 1
---

# Apify SDK

`apify` is the official SDK for building [Apify Actors](https://docs.apify.com/platform/actors) in JavaScript and TypeScript. It handles the Actor lifecycle, storage access, platform events, proxy configuration, and more.

## Quick Start

This short tutorial will set you up to start using Apify SDK in a minute or two.
If you want to learn more, proceed to the [Apify Platform](https://docs.apify.com/sdk/js/docs/concepts/actor-lifecycle)
guide that will take you step by step through running your Actor on Apify's platform.

Apify SDK requires [Node.js](https://nodejs.org/en/) 16 or later. Add Apify SDK to any Node.js project by running:

```bash
npm install apify
```

To initialize your Actor and to stop it use the `Actor.init()` and `Actor.exit()` functions. You also may use `Actor.main()` function for cases with multiple crawlers in one context.

```typescript
import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();
await Actor.setValue('OUTPUT', {
    message: 'Hello from Apify SDK!',
    input,
});

await Actor.exit();
```

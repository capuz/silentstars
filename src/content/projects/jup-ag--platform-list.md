---
repo: "jup-ag/platform-list"
name: "platform-list"
description: "The community maintained Solana platform registry"
readmeQualityOk: true
url: "https://github.com/jup-ag/platform-list"
homepage: "https://explore.ag"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 16
forks: 45
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2025-11-28T08:01:56Z"
lastCommitAt: "2026-11-07T10:36:13Z"
lastReleaseAt: "2025-12-03T10:24:04Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 82
undervaluedScore: 72
maintainers: ["opptylabs", "kino-andrew", "ianleck"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bc08207565deae55959b5fa85561ccb11e1dfd95c4d53b8c18159b53525f72c/jup-ag/platform-list"
---

# @jup-ag/platform-list

A comprehensive registry of platforms in the Solana ecosystem. This package provides structured platform data including metadata, links, token(s) information, smart contracts and services.

## JSON endpoints

The latest generated JSON files are available via GitHub Releases:

- [`platforms.json`](https://github.com/jup-ag/platform-list/releases/latest/download/platforms.json)
- [`services.json`](https://github.com/jup-ag/platform-list/releases/latest/download/services.json)
- [`contracts.json`](https://github.com/jup-ag/platform-list/releases/latest/download/contracts.json)

## Installation

```bash
npm install @jup-ag/platform-list
# or
yarn add @jup-ag/platform-list
```

## Usage

Get platforms locally

```typescript
import { platforms } from "@jup-ag/platform-list";

console.log(platforms);
```

Get platforms dynamically

```typescript
import { fetchPlatforms } from "@jup-ag/platform-list";

fetchPlatforms()
  .then((fetchedPlatforms) => {
    console.log(fetchedPlatforms);
  })
  .catch((error) => {
    console.error("Error fetching platforms:", error);
  });
```

## Contributing

We welcome contributions from the community! If you want to add a new…

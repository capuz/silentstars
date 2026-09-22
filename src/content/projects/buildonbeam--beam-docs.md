---
repo: "BuildOnBeam/beam-docs"
name: "beam-docs"
description: "Beam documentation"
readmeQualityOk: true
url: "https://github.com/BuildOnBeam/beam-docs"
homepage: "https://docs.onbeam.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [84]
topics: ["documentation"]
stars: 12
forks: 12
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2023-05-26T12:11:40Z"
lastCommitAt: "2026-09-22T08:45:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 57
maintainers: ["vladzr", "0x0sub", "xtools-at"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b6606443a3127deb2cc2aca88d339103704ee76e7545e46104c1c594462846b/BuildOnBeam/beam-docs"
---

# Hello Beam

Beam is a sovereign Frontier Technology Network. Powered by the established Avalanche network, Beam operates independently to cater towards web3 developers.

## Contributions

If you would like to contribute to the documentation, please open a pull request.

### TL;DR

If you would like to get your hands dirty without reading our documentation, we strongly advise you to get started with one of our implementations ready [SDKs](https://docs.onbeam.com/sdk/clients). We currently provide SDKs for Node.js and C#, but are happy to facilitate more. If you are interested in an SDK for your implementation language which we don't provide yet, please open an [issue](https://github.com/BuildOnBeam/beam-api-clients/issues/new).

## Getting started

```typescript
import { Beam } from "@onbeam/automation-api-client";

const beam = new Beam("x-api-key");

const profile = await beam.profiles.createProfile({ entityId: "profileID", chainId: 4337 });
// {
//   "id": "string",
//   "gameId": "string",
//   "externalId": "string",
//   "wallets": [
//     {
//       "id": "string",
//       "externalId": "string",
//       "address": "string",
//       "chainId": 0,
//       ...
//     }…

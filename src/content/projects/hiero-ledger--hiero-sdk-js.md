---
repo: "hiero-ledger/hiero-sdk-js"
name: "hiero-sdk-js"
description: "A JavaScript/TypeScript SDK for Hiero: A Javascript toolkit for creating, updating, and interacting with on-ledger assets and smart contracts on Hedera and other Hiero networks"
url: "https://github.com/hiero-ledger/hiero-sdk-js"
homepage: "https://docs.hedera.com/hedera/sdks-and-apis/sdks"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["hashgraph", "hedera", "sdk", "distributed-ledger-technology", "javascript", "typescript", "typescript-sdk", "javascript-sdk", "hacktoberfest", "blockchain"]
stars: 323
forks: 243
openIssues: 48
closedIssues: 1160
watchers: 21
contributors: 130
recentReleases: 0
createdAt: "2019-07-25T21:30:47Z"
lastCommitAt: "2026-07-01T07:04:30Z"
lastReleaseAt: "2021-04-30T04:03:38Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 45
maintainers: ["dependabot[bot]", "Jexsie", "Fantomasa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/198903637/f864ba59-fc91-4d47-b351-8ff70c1cccb1"
discussionCount: 4
---

# Hiero JavaScript SDK

> The JavaScript SDK for interacting with a Hiero based network

> [!NOTE]  
> The project has been transferred from the [https://github.com/hashgraph](https://github.com/hashgraph) org and therefore the namespace is at several locations still based on `hashgraph` and `hedera`.
> We are working actively on migrating the namespace fully to hiero.

## Install

**NOTE**: v1 of the SDK is deprecated and support will be discontinued after October 2021. Please install the latest version 2.x or migrate from v1 to the latest 2.x version. You can reference the [migration documentation](./manual//MIGRATING_V1.md).

```
# with NPM
$ npm install --save @hiero-ledger/sdk

# with Yarn
$ yarn add @hiero-ledger/sdk

# with PNPM
$ pnpm add @hiero-ledger/sdk
```

## Browser Usage

The SDK is also available as a UMD (Universal Module Definition) build, which can be loaded directly in the browser from popular CDNs:

### UNPKG

```html
<script src="https://unpkg.com/@hiero-ledger/sdk@2.70.0/dist/umd.js"></script>
```

When using the UMD build in the browser, the SDK will be available as a global variable `sdk`. A minified version is also available at `dist/umd.min.js`.

##…

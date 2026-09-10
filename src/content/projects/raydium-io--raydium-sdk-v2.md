---
repo: "raydium-io/raydium-sdk-V2"
name: "raydium-sdk-V2"
description: "Open-source Typescript SDK for Raydium  "
readmeQualityOk: true
url: "https://github.com/raydium-io/raydium-sdk-V2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["raydium", "sdk"]
stars: 349
forks: 206
openIssues: 0
closedIssues: 116
watchers: 11
contributors: 13
recentReleases: 0
createdAt: "2022-11-21T08:35:14Z"
lastCommitAt: "2026-09-10T08:20:02Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 94
undervaluedScore: 30
maintainers: ["cruzshia", "agentmila", "rudy5348"]
openGraphImageUrl: "https://opengraph.githubassets.com/45f8eb0f81a06037bef4afee2adbd27c632032bc7342600b04740d3deef0775f/raydium-io/raydium-sdk-V2"
---

# Raydium SDK

[npm-image]: https://img.shields.io/npm/v/@raydium-io/raydium-sdk-v2.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@raydium-io/raydium-sdk-v2

An SDK for building applications on top of Raydium.

## Usage Guide

### Installation

```
$ yarn add @raydium-io/raydium-sdk-v2
```

## SDK method Demo

[SDK V2 Demo Repo](https://github.com/raydium-io/raydium-sdk-V2-demo)

## SDK local test

```
$ yarn dev {directory}

e.g. yarn dev test/init.ts
```

## Features

### Initialization

```javascript
import { Raydium } from "@raydium-io/raydium-sdk";
const raydium = await Raydium.load({
  connection,
  owner, // key pair or publicKey, if you run a node process, provide keyPair
  signAllTransactions, // optional - provide sign functions provided by @solana/wallet-adapter-react
  tokenAccounts, // optional, if dapp handle it by self can provide to sdk
  tokenAccountRawInfos, // optional, if dapp handle it by self can provide to sdk
  disableLoadToken: false, // default is false, if you don't need token info, set to true
});
```

#### how to transform token account data

```javascript
import { parseTokenAccountResp } from "@raydium-io/raydium-sdk";

const solAccountResp…

---
repo: "raydium-io/raydium-sdk-V2"
name: "raydium-sdk-V2"
description: "Open-source Typescript SDK for Raydium  "
url: "https://github.com/raydium-io/raydium-sdk-V2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 347
forks: 204
openIssues: 2
closedIssues: 114
watchers: 11
contributors: 14
recentReleases: 0
createdAt: "2022-11-21T08:35:14Z"
lastCommitAt: "2026-06-23T23:27:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 87
undervaluedScore: 30
maintainers: ["cruzshia", "agentmila", "0xstratus"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb2e9f3a54e665b0804f6df10768496e7a17bb326e4cfa9eceb6a1c96e617904/raydium-io/raydium-sdk-V2"
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

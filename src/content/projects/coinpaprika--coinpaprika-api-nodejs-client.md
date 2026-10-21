---
repo: "coinpaprika/coinpaprika-api-nodejs-client"
name: "coinpaprika-api-nodejs-client"
description: "Official CoinPaprika API Node.js client — 10,000+ coins, real-time prices, OHLCV, and exchange data."
readmeQualityOk: true
url: "https://github.com/coinpaprika/coinpaprika-api-nodejs-client"
homepage: "https://api.coinpaprika.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["api-client", "bitcoin", "blockchain", "coinpaprika", "crypto", "cryptocurrency", "javascript", "market-capitalization", "nodejs", "sdk"]
stars: 71
forks: 20
openIssues: 1
closedIssues: 7
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2018-09-21T08:18:13Z"
lastCommitAt: "2026-10-21T20:01:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 71
undervaluedScore: 36
maintainers: ["donbagger", "zagi", "r--w"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0938b2afaf0abbe89bfecd36ec6a44800aa14a2dc5199780e2282c28f737310/coinpaprika/coinpaprika-api-nodejs-client"
---

# Coinpaprika API NodeJS Client

This library provides convenient way to use [Coinpaprika.com API](https://api.coinpaprika.com/) in NodeJS.

[Coinpaprika](https://coinpaprika.com) delivers full market data to the world of crypto: coin prices, volumes, market caps, ATHs, return rates and more.

## Install

```sh
npm install @coinpaprika/api-nodejs-client
```

Requires Node.js **18 or newer** (uses the built-in global `fetch`). If you need to support Node 14 to 17, stay on the `2.x` line.

## Usage

### CommonJS

```js
const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');

const client = new CoinpaprikaAPI();

client.getGlobal().then(console.log).catch(console.error);
client.getCoin('btc-bitcoin').then(console.log).catch(console.error);
```

### ESM

```js
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';

const client = new CoinpaprikaAPI();
const data = await client.getGlobal();
```

### TypeScript

Type declarations ship with the package, so no `@types` install is needed.

```ts
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';

const client = new CoinpaprikaAPI({ apiKey: process.env.COINPAPRIKA_KEY });
const markets = await…

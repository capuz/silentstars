---
repo: "avaly/paddle-sdk"
name: "paddle-sdk"
description: "Paddle.com Node.js SDK"
readmeQualityOk: true
url: "https://github.com/avaly/paddle-sdk"
homepage: "https://avaly.github.io/paddle-sdk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["nodejs", "paddle", "payments", "typescript"]
stars: 100
forks: 32
openIssues: 6
closedIssues: 13
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2017-11-19T17:09:41Z"
lastCommitAt: "2026-10-03T09:24:12Z"
lastReleaseAt: "2026-04-02T15:12:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 30
maintainers: ["renovate[bot]", "avaly"]
openGraphImageUrl: "https://opengraph.githubassets.com/1935b641455f759b63478a3a7665d94c48fc9f5f8b94200d6c8b19b5f8ed1e35/avaly/paddle-sdk"
---

# Paddle.com Node.js SDK

Welcome to the [Paddle.com](https://www.paddle.com/) Node.js SDK documentation.

## Installation

Install the SDK module using `npm` / `pnpm` / `yarn`:

```
$ npm install paddle-sdk
$ pnpm install paddle-sdk
$ yarn add paddle-sdk
```

## Usage

```ts
import { PaddleSDK } from 'paddle-sdk';

async function run() {
  const client = new PaddleSDK('your-vendor-id-here', 'your-unique-api-key-here');

  const products = await client.getProducts();
  console.log(products);

  const plans = await client.getProductPlans(123);
  console.log(plans);
}

run();
```

For CommonJS:

```js
const { PaddleSDK } = require('paddle-sdk');
```

This package is published as ESM-only. CommonJS consumers can still use `require('paddle-sdk')` on Node.js 22.12.0 and newer.

## Documentation

Read the [documentation](https://avaly.github.io/paddle-sdk/).

## Change log

The change log can be found here: [CHANGELOG.md](https://github.com/avaly/paddle-sdk/blob/HEAD/CHANGELOG.md).

## Authors and license

Author: [Valentin Agachi](http://agachi.name/).

MIT License, see the included [License.md](https://github.com/avaly/paddle-sdk/blob/HEAD/License.md) file.

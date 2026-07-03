---
repo: "limrun-inc/typescript-sdk"
name: "typescript-sdk"
description: "The TypeScript/JavaScript SDK to interact with Limrun APIs."
url: "https://github.com/limrun-inc/typescript-sdk"
homepage: "https://lim.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 9
forks: 4
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-08T14:42:42Z"
lastCommitAt: "2026-07-03T12:21:28Z"
lastReleaseAt: "2025-10-07T09:18:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 59
maintainers: ["turkenh", "enesonus", "stainless-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77ae6e7c03c31ff24f4bb2dfad9361b80c531c4ded5179d4b7e71dde894c9293/limrun-inc/typescript-sdk"
---

# Limrun TypeScript API Library

This library provides convenient access to the Limrun REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [lim.run](https://lim.run). The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainless.com/).

## Installation

```sh
npm install @limrun/api
```

## Usage

The full API of this library can be found in [api.md](api.md).

```js
import Limrun from '@limrun/api';

const client = new Limrun({
  apiKey: process.env['LIM_API_KEY'], // This is the default and can be omitted
});

const androidInstance = await client.androidInstances.create();

console.log(androidInstance.metadata);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

```ts
import Limrun from '@limrun/api';

const client = new Limrun({
  apiKey: process.env['LIM_API_KEY'], // This is the default and can be omitted
});

const androidInstance: Limrun.AndroidInstance = await client.androidInstances.create();
```

Documentation for each method, request param, and response field are…

---
repo: "toomuchdesign/msw-inspector"
name: "msw-inspector"
description: "Inspect requests intercepted by MSW"
readmeQualityOk: true
url: "https://github.com/toomuchdesign/msw-inspector"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["msw", "test"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-03-18T15:23:38Z"
lastCommitAt: "2026-08-12T05:13:54Z"
lastReleaseAt: "2025-10-23T11:29:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 67
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e72e07ce99bff4e9336326b2c228a81d1c738703ee6249fe22fe5ff3ea116e3/toomuchdesign/msw-inspector"
---

# MSW inspector

Plug-and-play **request assertion** utility for any [`msw`][msw] mock setup, as [highly discouraged][msw-docs-request-assertions] by `msw` authors :)

## Why?

From [`msw` docs][msw-docs-request-assertions]:

> Instead of asserting that a request was made, or had the correct data, test how your application reacted to that request.

> There are, however, some special cases where asserting on network requests is the only option. These include, for example, polling, where no other side effect can be asserted upon.

MSW inspector has you covered for these special cases.

## How

MSW inspector provides a thin layer of logic over [msw life-cycle events][msw-docs-life-cycle-events].

Each intercepted request is stored as a **function mock call** retrievable by URL. This allows elegant assertions against request attributes like `method`, `headers`, `body` and `query` fully integrated with your test assertion library.

## Installation

```
npm install msw-inspector -D
```

## Example

This example uses Jest, but MSW inspector integrates with **any testing framework**.

```ts
import { jest } from '@jest/globals';
import { createMSWInspector } from 'msw-inspector';
import {…

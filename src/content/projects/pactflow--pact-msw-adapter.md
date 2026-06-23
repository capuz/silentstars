---
repo: "pactflow/pact-msw-adapter"
name: "pact-msw-adapter"
description: "Create MSW (mock-service-worker) mocks, and generate pact contracts from the recorded interactions."
url: "https://github.com/pactflow/pact-msw-adapter"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [74, 26]
topics: ["msw", "mock-service-worker", "pact", "javascript", "testing", "contract", "cdc", "mswjs", "pactflow", "open-source"]
stars: 52
forks: 18
openIssues: 8
closedIssues: 15
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2021-05-02T00:04:54Z"
lastCommitAt: "2026-06-23T23:16:48Z"
lastReleaseAt: "2022-07-15T17:06:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 48
maintainers: ["JP-Ellis", "pactflow-renovate-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c3a9a3a03c4e0f93959ddbf02b3cd8008cea4b8a88c0ec33984709765083f5/pactflow/pact-msw-adapter"
---

# pact-msw-adapter

> Generate pact contracts from the recorded mock service worker interactions.

Check out the [quick start guide](https://docs.pactflow.io/docs/bi-directional-contract-testing/tools/msw).

## Compatibility table

| pact msw version | msw version | node version | migration guide                                       |
|------------------|-------------|--------------|-------------------------------------------------------|
| `^2`             | `<=1`       | `>=16 <=20`  |                                                       |
| `^3`             | `^2`        | `>=22`       | [v2 to v3](#migrating-pact-msw-adapter-from-v2-to-v3) |

##  Getting started

```
npm install @pactflow/pact-msw-adapter --save-dev
```

MSW provides a `setupServer` for node environments and `setupWorker` for browser based environment

```js
import { setupServer } from "msw/node";
import { setupPactMswAdapter } from "@pactflow/pact-msw-adapter";
```

For browser based enviromnents

```js
import { setupWorker } from "msw/browser";
import { setupPactMswAdapter } from "@pactflow/pact-msw-adapter";
```

See [./src/pactFromMswServer.msw.spec.ts](./src/pactFromMswServer.msw.spec.ts) msw mock…

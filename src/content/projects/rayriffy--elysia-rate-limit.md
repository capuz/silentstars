---
repo: "rayriffy/elysia-rate-limit"
name: "elysia-rate-limit"
description: "Lightweight rate limiter plugin for Elysia.js"
readmeQualityOk: true
url: "https://github.com/rayriffy/elysia-rate-limit"
homepage: "https://npm.im/elysia-rate-limit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["elysia", "rate-limit", "rate-limiting", "api", "bun", "middleware", "elysia-plugin"]
stars: 232
forks: 16
openIssues: 0
closedIssues: 27
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2023-03-08T09:50:48Z"
lastCommitAt: "2026-07-18T05:48:23Z"
lastReleaseAt: "2024-03-29T19:24:54Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 31
maintainers: ["rayriffy", "github-actions[bot]", "lucass3na"]
openGraphImageUrl: "https://opengraph.githubassets.com/6189631418d6600ad7548ad0c06d0fac1b730bd13deb44f85214ca4a354d7c45/rayriffy/elysia-rate-limit"
---

# Elysia Rate Limit

Lightweight rate limiter plugin for [Elysia.js](https://elysiajs.com/)

## Install

```
bun add elysia-rate-limit
```

If you're using Elysia v2.0.0 or higher, you should use `elysia-rate-limit` v5.0.0 or higher. If you're using Elysia v1.0.0, you should use version 4.6.2 or lower.

## Compatibility

As long as you're on the latest version of Bun, and Elysia.
Using the latest version of `elysia-rate-limit` would works just fine.
However, please refer to the following table to determine which version to use.

| Plugin version | Requirements                 |
|----------------|------------------------------|
| 5.0.0+         | Bun > 1.0.3, Elysia >= 2.0.0 |
| 3.0.0 - 4.6.2  | Bun > 1.0.3, Elysia >= 1.0.0 |
| 2.0.0 - 2.2.0  | Bun > 1.0.3, Elysia < 1.0.0  |
| 1.0.2 - 1.3.0  | Bun <= 1.0.3, Elysia < 1.0.0 |

## Usage

Check out full sample at [`example`](https://github.com/rayriffy/elysia-rate-limit/blob/HEAD/example/basic.ts)

```ts
import { Elysia } from 'elysia'
import { rateLimit } from 'elysia-rate-limit'

new Elysia().use(rateLimit()).listen(3000)
```

## Configuration

### duration

`number | ((key: string, request: ExtendedRequest) => number |…

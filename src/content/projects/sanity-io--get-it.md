---
repo: "sanity-io/get-it"
name: "get-it"
description: "Composable HTTP request library for node and browsers"
readmeQualityOk: true
url: "https://github.com/sanity-io/get-it"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["http", "http-client", "request", "nodejs"]
stars: 38
forks: 8
openIssues: 1
closedIssues: 21
watchers: 5
contributors: 46
recentReleases: 0
createdAt: "2016-11-30T20:46:39Z"
lastCommitAt: "2026-11-06T13:19:47Z"
lastReleaseAt: "2023-01-14T10:23:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 57
maintainers: ["rexxars", "renovate[bot]", "squiggler-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4b5d6396ab95a776dfa802c1b68e905b3e99dc2219a8417f1c11ca873a89b0/sanity-io/get-it"
---

# get-it

Generic HTTP request library for Node.js (>= 22.12), browsers, Deno, Bun, and edge runtimes. It is built on `fetch()`.

## Features

- Promise-based API with TypeScript types
- Automatic JSON serialization/deserialization
- Base URL and default headers
- HTTP error throwing (on by default)
- Timeout with `AbortSignal.timeout()`
- Cancellation with the standard `AbortController`
- Proxy support in Node.js, Bun, and Deno (reads `HTTP_PROXY`/`HTTPS_PROXY` from environment)
- Middleware system for retry, debug logging, and custom logic
- Injectable `fetch` for testing and custom transports
- Built-in mock fetch with request matching, recording, and vitest matchers

## Installation

```bash
npm install get-it
```

## Usage

```ts
import {createRequester} from 'get-it'

const request = createRequester({
  base: 'https://api.example.com',
  headers: {Authorization: 'Bearer ...'},
})

// Simple GET
const users = await request('/users')
console.log(users.json())

// POST with JSON body (auto-serialized)
const created = await request({
  url: '/users',
  method: 'POST',
  body: {name: 'Espen'},
  as: 'json',
})
console.log(created.body) // parsed JSON
```

## Response

The…

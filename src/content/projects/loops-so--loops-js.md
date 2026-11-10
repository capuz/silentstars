---
repo: "loops-so/loops-js"
name: "loops-js"
description: "The Official Loops JavaScript SDK"
readmeQualityOk: true
url: "https://github.com/loops-so/loops-js"
homepage: "https://loops.so"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 5
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-10-09T08:31:34Z"
lastCommitAt: "2026-11-10T11:39:04Z"
lastReleaseAt: "2026-08-03T10:04:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 60
maintainers: ["danrowden", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74882b877134c7a219927add5b0d11f67023695b39b88ed92a2232ec1659bbaa/loops-so/loops-js"
---

# Loops JavaScript/TypeScript SDK

## Introduction

This is the official JavaScript SDK for [Loops](https://loops.so), with full TypeScript support.

It lets you easily integrate with the Loops API in any JavaScript project.

## Installation

You can install the package [from npm](https://www.npmjs.com/package/loops):

```bash
npm install loops
```

Minimum Node version required: 18.0.0.

You will need a Loops API key to use the package.

In your Loops account, go to the [API Settings page](https://app.loops.so/settings?page=api) and click "Generate key".

Copy this key and save it in your application code (for example as `LOOPS_API_KEY` in an `.env` file).

See the API documentation to learn more about [rate limiting](https://loops.so/docs/api-reference#rate-limiting) and [error handling](https://loops.so/docs/api-reference#debugging).

## Usage

```javascript
import { LoopsClient, APIError } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY);

try {
  const resp = await loops.createContact({ email: "email@provider.com" });
  // resp.success and resp.id available when successful
} catch (error) {
  if (error instanceof APIError) {
    // JSON returned by the…

---
repo: "todoist/todoist-sdk-typescript"
name: "todoist-sdk-typescript"
description: "A TypeScript wrapper for the Todoist REST API."
readmeQualityOk: true
url: "https://github.com/todoist/todoist-sdk-typescript"
homepage: "https://doist.github.io/todoist-sdk-typescript/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 114
forks: 17
openIssues: 1
closedIssues: 68
watchers: 4
contributors: 45
recentReleases: 0
createdAt: "2021-11-16T14:03:09Z"
lastCommitAt: "2026-11-14T21:59:29Z"
lastReleaseAt: "2022-10-13T17:52:30Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 49
maintainers: ["dependabot[bot]", "doist-release-bot[bot]", "scottlovegrove"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cf765de8d1e2582e28ccfff48ad6003df719ff3a6e27cc5e7ad36b625bce048/todoist/todoist-sdk-typescript"
---

# Todoist SDK

The official TypeScript SDK for the Todoist REST API.

## Installation

Requires Node 20.18.1+.

```
npm install @todoist/sdk
```

In a browser, use it through a bundler such as rspack, Vite or esbuild: the package's `browser` field leaves undici and Node's `fs` and `path` out of the bundle, and requests go through the browser's `fetch`.

Previously published as `@doist/todoist-sdk`.

### Usage

An example of initializing the API client and fetching a user's tasks:

```typescript
import { TodoistApi } from '@todoist/sdk'

const api = new TodoistApi('YOURTOKEN')

api.getTasks()
    .then((tasks) => console.log(tasks))
    .catch((error) => console.log(error))
```

### Documentation

For more detailed reference documentation, have a look at the [Todoist API v1 Documentation](https://todoist.com/api/v1/docs).

### Migration Guide

If you're migrating from an older version of the Todoist API (v9), please refer to the [official migration guide](https://todoist.com/api/v1/docs#tag/Migrating-from-v9) for detailed information about the changes and breaking updates.

Key changes in v1 include:

- Updated endpoint structure
- New pagination system
- Unified error response…

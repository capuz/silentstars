---
repo: "scaleway/scaleway-sdk-js"
name: "scaleway-sdk-js"
description: "Integrate Scaleway with your JS application"
readmeQualityOk: true
url: "https://github.com/scaleway/scaleway-sdk-js"
homepage: "https://www.npmjs.com/package/@scaleway/sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["scaleway", "sdk-js", "nodejs", "typescript", "api", "sdk"]
stars: 42
forks: 11
openIssues: 4
closedIssues: 25
watchers: 3
contributors: 39
recentReleases: 0
createdAt: "2022-07-07T11:46:54Z"
lastCommitAt: "2026-08-28T15:31:00Z"
lastReleaseAt: "2022-08-22T12:39:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["scaleway-bot", "philibea", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd32070f2cfc6f79b5737a3ca9f4a77b58eb4c81f7fe992c7c7415fd6de79569/scaleway/scaleway-sdk-js"
discussionCount: 1
---

# Scaleway JS SDK

This SDK enables you to interact with Scaleway APIs.

> **Note**
> The SDK works exclusively within a Node.js environment, as browser requests are limited by CORS restrictions.

**🔗  Important links:**

- [Reference documentation](https://scaleway.github.io/scaleway-sdk-js)
- [Example projects](https://github.com/scaleway/scaleway-sdk-js/blob/HEAD/examples)
- [Developers website](https://developers.scaleway.com) (API documentation)

## Getting Started

You'll need a pair of access and secret keys to connect to Scaleway API. Please check the [documentation](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/) on how to retrieve them.

**A minimal setup** would look like this:

```ts
import { Registry, createClient } from '@scaleway/sdk'

const client = createClient({
  accessKey: 'SCWXXXXXXXXXXXXXXXXX',
  secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
})

const api = new Registry.v1.API(client)
```

**For a simpler setup**, you could retrieve the profile from either the configuration file or the environment…

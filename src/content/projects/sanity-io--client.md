---
repo: "sanity-io/client"
name: "client"
description: "JavaScript client for retrieving, creating and patching data from Sanity.io"
readmeQualityOk: true
url: "https://github.com/sanity-io/client"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["sanity-io", "sanity", "javascript", "client-library"]
stars: 114
forks: 36
openIssues: 21
closedIssues: 54
watchers: 21
contributors: 84
recentReleases: 0
createdAt: "2022-01-26T04:59:14Z"
lastCommitAt: "2026-10-29T21:20:47Z"
lastReleaseAt: "2023-02-15T13:53:56Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 44
maintainers: ["squiggler-app[bot]", "renovate[bot]", "rexxars"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42b0b03854429e81930d05082e54e3d6c0e3e967ea6379cba911a7b2b1c607f/sanity-io/client"
---

# @sanity/client

JavaScript client for Sanity. Works in modern browsers, as well as runtimes like [Node.js], [Bun], [Deno], and [Edge Runtime]

## QuickStart

Install the client with a package manager:

```sh
npm install @sanity/client
```

Import and create a new client instance, and use its methods to interact with your project's [Content Lake]. Below are some simple examples in plain JavaScript. Read further for more comprehensive documentation.

```js
// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true, // set to `false` to bypass the edge cache
  // Set default headers to be included with all requests
  headers: {
    'X-Custom-Header': 'custom-value'
  },
  apiVersion: '2025-02-06', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  // token:…

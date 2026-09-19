---
repo: "Ahoo-Wang/fetcher"
name: "fetcher"
description: "Fetcher is not just another HTTP client—it's a complete ecosystem designed for modern web development with native LLM streaming API support. Built on the native Fetch API, Fetcher provides an Axios-like experience with powerful features while maintaining an incredibly small footprint."
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/fetcher"
homepage: "https://fetcher.ahoo.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "axios", "client", "event-source", "fetch", "http", "openai", "restful-api", "rpc", "event-stream"]
stars: 15
forks: 4
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-08-23T01:52:29Z"
lastCommitAt: "2026-09-19T01:17:22Z"
lastReleaseAt: "2025-08-24T08:11:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 60
maintainers: ["Ahoo-Wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/469be28c7c3b21f4c16eed64671e5e8a328ad8d5dd03edf167b4a5f906fcae39/Ahoo-Wang/fetcher"
---

# Fetcher

[中文](https://github.com/Ahoo-Wang/fetcher/blob/HEAD/README.zh-CN.md) · [Documentation](https://fetcher.ahoo.me/) ·
[Skills](https://fetcher.ahoo.me/skills/) ·
[Storybook](https://fetcher.ahoo.me/storybook/) ·
[npm](https://www.npmjs.com/package/@ahoo-wang/fetcher)

Fetcher is a TypeScript HTTP-client ecosystem built around the platform
`fetch` API. Start with typed requests, interceptors, timeouts, and streaming;
add React, OpenAPI generation, authentication, Wow CQRS, or data-viewer packages
only when the application needs them.

## Install

```bash
pnpm add @ahoo-wang/fetcher
```

Node.js 18.20.8 or newer is required.

## Your first request

```ts
import { Fetcher, FetcherError } from '@ahoo-wang/fetcher';

interface User {
  id: string;
  name: string;
}

const api = new Fetcher({
  baseURL: 'https://api.example.com',
  timeout: 10_000,
});

try {
  const response = await api.get('/users/{id}', {
    urlParams: {
      path: { id: 'u-42' },
      query: { include: 'team' },
    },
  });
  const user: User = await response.json();
  console.log(user.name);
} catch (error) {
  if (error instanceof FetcherError) {
    console.error(error.message);
  }
}
```

## Choose…

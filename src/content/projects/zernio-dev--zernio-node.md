---
repo: "zernio-dev/zernio-node"
name: "zernio-node"
description: "Zernio's Official Node.js SDK"
readmeQualityOk: true
url: "https://github.com/zernio-dev/zernio-node"
homepage: "https://zernio.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 43
forks: 10
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-15T16:14:29Z"
lastCommitAt: "2026-10-13T10:57:34Z"
lastReleaseAt: "2026-02-04T15:40:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59ac9a7b27911d503e1a68aa4a0d1e32d35f24f1e853ef0445df43b14d4e8665/zernio-dev/zernio-node"
---

The official Node.js SDK for the [Zernio API](https://zernio.com) — schedule and publish social media posts across Instagram, TikTok, YouTube, LinkedIn, X/Twitter, Facebook, Pinterest, Threads, Bluesky, Reddit, Snapchat, Telegram, WhatsApp, and Google Business Profile with a single integration.

## Installation

```bash
npm install @zernio/node
```

## Quick Start

```typescript
import Zernio from '@zernio/node';

const zernio = new Zernio(); // Uses ZERNIO_API_KEY env var

// Publish to multiple platforms with one call
const { data: post } = await zernio.posts.createPost({
  body: {
    content: 'Hello world from Zernio!',
    platforms: [
      { platform: 'twitter', accountId: 'acc_xxx' },
      { platform: 'linkedin', accountId: 'acc_yyy' },
      { platform: 'instagram', accountId: 'acc_zzz' },
    ],
    publishNow: true,
  },
});

console.log(`Published to ${post.platforms.length} platforms!`);
```

## Configuration

```typescript
const zernio = new Zernio({
  apiKey: 'your-api-key', // Defaults to process.env['ZERNIO_API_KEY']
  baseURL: 'https://zernio.com/api',
  timeout: 60000,
});
```

## Examples

### Schedule a Post

```typescript
const { data: post } = await…

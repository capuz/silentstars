---
repo: "PsychoLlama/holz"
name: "holz"
description: "Structured logging with unix-style plugins."
readmeQualityOk: true
url: "https://github.com/PsychoLlama/holz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["browser", "json", "logger", "nodejs", "structured-logging"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-02-18T20:12:05Z"
lastCommitAt: "2026-10-09T10:50:09Z"
lastReleaseAt: "2025-03-09T00:40:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["renovate[bot]", "PsychoLlama"]
openGraphImageUrl: "https://opengraph.githubassets.com/f71db0c75c1d3ee944d1f7c6142fb3b931070553feb1aefcd3c90566a616a100/PsychoLlama/holz"
---

## Purpose

Logging is personal. Every app has unique requirements, but they all do a mix of the same things. Frameworks bloat trying to handle every case.

Holz takes a different approach. The core interface produces structured data without opinions on where it goes:

```typescript
logger.info('Sending new user email', { userId: user.id });
```

```typescript
{
  timestamp: 1199145600000,
  message: 'Sending new user email',
  level: level.info,
  origin: ['UserService'],
  context: { userId: '465ebaec-2b53-4b81-95e9-9f35771c0af2' },
}
```

Logs are passed to one or more plugins: functions that take a log and decide what to do with it. They filter, transform, serialize, batch, or upload.

Holz aims to be **tiny**. Plugins are aggressively optimized for bundle size.

## Usage

If you don't want to bother with plugins, `@holz/logger` is an opinionated package with batteries included.

```typescript
import logger from '@holz/logger';

logger.info('Hello, world!');
```

It works in both Node and the browser.

By default, logs are hidden. To enable them, set the `DEBUG` environment variable to the namespace(s) you want to see logs for:

```bash
DEBUG='your-app*' node script.js
```…

---
repo: "abn/aiographql-client"
name: "aiographql-client"
description: "An asynchronous GraphQL client built on top of aiohttp and graphql-core-next"
readmeQualityOk: true
url: "https://github.com/abn/aiographql-client"
homepage: "https://aiographql-client.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aiohttp-client", "graphql", "asyncio", "python3", "graphql-core", "hacktoberfest"]
stars: 30
forks: 11
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2019-02-26T16:10:40Z"
lastCommitAt: "2026-09-19T01:38:20Z"
lastReleaseAt: "2026-09-19T01:38:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 64
maintainers: ["abn", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a1cf774e571b85fa6cedbf8f17f89b163126db65356eb48a241aca9509869c1/abn/aiographql-client"
discussionCount: 0
---

# Asynchronous GraphQL Client

An asynchronous GraphQL client built on top of aiohttp and graphql-core-next. It supports multiple transports, including `aiohttp` (default) and `httpx`. The client by default introspects schemas and validates all queries prior to dispatching to the server.

## Documentation

For the most recent project documentation, you can visit https://aiographql-client.readthedocs.io/.

## Installation

To install the client with the default `aiohttp` transport:

```bash
pip install aiographql-client[aiohttp]
```

To use `httpx` as the transport (includes `websockets` for subscriptions):

```bash
pip install aiographql-client[httpx]
```

To install the client with the default `aiohttp` transport and `pydantic` support:

```bash
pip install aiographql-client[aiohttp,pydantic]
```

## Transports & Auto-detection

The client supports multiple HTTP backends. You can choose which one to use during installation via extras.

- **`aiohttp`**: The default asynchronous HTTP client for the library. Supports both queries and subscriptions.
- **`httpx`**: A modern, feature-rich HTTP client. Supports queries and subscriptions (via `websockets`).

### Auto-detection

When you…

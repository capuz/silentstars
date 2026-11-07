---
repo: "hussein-awala/async-batcher"
name: "async-batcher"
description: "A service to batch the http requests."
readmeQualityOk: true
url: "https://github.com/hussein-awala/async-batcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["asyncio", "batch-processing", "fastapi", "grpc", "python", "http-requests"]
stars: 39
forks: 3
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-02-15T23:50:01Z"
lastCommitAt: "2026-11-07T22:52:09Z"
lastReleaseAt: "2025-02-17T21:46:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["hussein-awala"]
openGraphImageUrl: "https://opengraph.githubassets.com/068b25c80e2224ba91ab81ebdb5b96479d20ece031c47f21d2e5dc74c4aa0444/hussein-awala/async-batcher"
discussionCount: 2
---

# AsyncBatcher

AsyncBatcher combines concurrent Python requests into batches and routes each result back to its caller.
Wrap an existing bulk function, subclass `AsyncBatcher`, or use an adapter for a supported database,
messaging client, or prediction model. The core package has no runtime dependencies.

## Start with your workload

| You need to… | Start here |
| --- | --- |
| Combine concurrent web requests into model predictions or writes | [Function quickstart](#quickstart), then the [FastAPI lifespan recipe](https://github.com/hussein-awala/async-batcher/blob/HEAD/docs/fastapi-recipe.md) |
| Import a large file or consume an async stream without keeping all results | [Bounded maps](https://github.com/hussein-awala/async-batcher/blob/HEAD/docs/bulk-processing.md) and [SQLite imports](https://github.com/hussein-awala/async-batcher/blob/HEAD/docs/cookbook.md#import-a-file-or-async-stream-into-sqlite) |
| Use an existing database, messaging, or prediction client | Choose its [adapter](#optional-adapters) and read its failure/ownership rules |
| Send embeddings to a vector store | [Two-stage…

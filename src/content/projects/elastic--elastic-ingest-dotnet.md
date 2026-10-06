---
repo: "elastic/elastic-ingest-dotnet"
name: "elastic-ingest-dotnet"
description: "Data Ingestion Libraries for the Elastic Stack & Products"
readmeQualityOk: true
url: "https://github.com/elastic/elastic-ingest-dotnet"
homepage: "https://elastic.github.io/elastic-ingest-dotnet/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 9
forks: 5
openIssues: 2
closedIssues: 9
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2023-01-23T12:24:38Z"
lastCommitAt: "2026-10-06T10:41:21Z"
lastReleaseAt: "2023-04-05T12:58:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 54
maintainers: ["Mpdreamz", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8b16a785fcc409aa4fbcbb9c311e1a106ffb10408ebd0498850037906a83e90/elastic/elastic-ingest-dotnet"
---

# Elastic.Ingest.*

Production-ready bulk ingestion into Elasticsearch — batching, backpressure, retries, and index management handled for you.

Define your document type, declare how it maps to Elasticsearch with source-generated attributes, and get an `IngestChannel<T>` that auto-configures itself from your declaration. Composable strategies let you customize data streams, indices, ILM policies, and lifecycle management. Helper APIs cover PIT search, server-side reindex, delete-by-query, and client-side reindex.

Batches flush on count, age, **or byte budget** — whichever fires first — so wildly variable document sizes no longer blow past Elasticsearch's `max_coordinating_bytes` limit. Each event is serialized exactly once: the library slices one outbound page into multiple `_bulk` sub-requests at export time, bounded by the byte budget, with no intermediate buffers retained between events.

## Documentation

**<https://elastic.github.io/elastic-ingest-dotnet/>**

## Packages

| Package | NuGet | Description |
|---------|-------|-------------|
| [Elastic.Ingest.Elasticsearch](https://github.com/elastic/elastic-ingest-dotnet/blob/HEAD/src/Elastic.Ingest.Elasticsearch/README.md) |…

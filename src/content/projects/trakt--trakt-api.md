---
repo: "trakt/trakt-api"
name: "trakt-api"
description: "The Trakt API is a RESTful API that allows developers to integrate TV show and movie tracking features into their applications. It enables access to Trakt's extensive media database and lets apps synchronize a user's watch history, ratings, and lists with their Trakt.tv profile."
readmeQualityOk: true
url: "https://github.com/trakt/trakt-api"
homepage: "https://developer.trakt.tv/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [77, 20]
stars: 376
forks: 22
openIssues: 13
closedIssues: 557
watchers: 54
contributors: 13
recentReleases: 0
createdAt: "2019-01-01T20:09:21Z"
lastCommitAt: "2026-11-05T00:21:52Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 99
undervaluedScore: 38
maintainers: ["vladjerca", "StefanFriptu", "michaldrabik"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bc83e1310656c5c3a4a5511eea6c623a2262762540cc5326abd4ea3cf6cd7dd/trakt/trakt-api"
discussionCount: 149
---

At Trakt, we collect lots of interesting information about what tv shows and
movies everyone is watching. Part of the fun with such data is making it
available for anyone to mash up and use on their own apps. The **Trakt API** was
made just for this purpose. Let us know what you create!

## Project Structure

This [workspace](https://bun.com/docs/install/workspaces)
contains multiple projects:

- **`api`:** Core library that implements Trakt API interactions using `ts-rest`
  and `zod` for type-safe communication and validation.
- **`playground`:** CLI project for testing and exploring the Trakt API
  functionality.
- **`developer`:** Trakt's developer portal at `developer.trakt.tv`, with 28
  Markdown guides in Getting Started and an interactive API Reference
  playground. Lives in `projects/developer`. See
  [local setup](https://github.com/trakt/trakt-api/blob/HEAD/projects/developer/README.md#run-locally) and
  [editing guides and navigation](https://github.com/trakt/trakt-api/blob/HEAD/projects/developer/README.md#getting-started-guides).
- **`openapi`:** Simple `hono` server that serves the API contract as an OpenAPI
  specification.

## Environment Variables

The following…

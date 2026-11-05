---
repo: "softwareone-platform/mpt-extension-sdk"
name: "mpt-extension-sdk"
description: "SDK for SoftwareONE python extensions"
readmeQualityOk: true
url: "https://github.com/softwareone-platform/mpt-extension-sdk"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["library", "python", "sdk", "softwareone"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 13
recentReleases: 0
createdAt: "2025-03-17T12:06:54Z"
lastCommitAt: "2026-11-05T14:05:27Z"
lastReleaseAt: "2025-05-13T09:59:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_watch"]
healthScore: 89
undervaluedScore: 58
maintainers: ["svazquezco", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/469c1c7a6b9b7d4c0828f8e72d2d5774faf836ebc0f8806c4bdcb18a8102cffa/softwareone-platform/mpt-extension-sdk"
---

# SoftwareONE Extension SDK

`mpt-extension-sdk` is the shared Python SDK for building SoftwareONE Marketplace extensions.

The repository contains:

- public SDK primitives centered on `ExtensionApp`, `ExtensionRouter`, and typed execution contexts
- FastAPI runtime wiring for event handlers, task-backed routes, local development (`FastAPI + uvicorn`), and platform execution (`mrok`/`ziticorn`)
- shared Marketplace service clients, settings discovery, observability hooks, and pipeline helpers
- a Typer-based `mpt-ext` CLI for runtime startup and metadata generation/validation
- repository tooling and documentation for building and validating the SDK itself

## Documentation

Shortcuts to the documents a reader is most likely to want next. This is not the
full inventory: [docs/documentation.md](https://github.com/softwareone-platform/mpt-extension-sdk/blob/HEAD/docs/documentation.md) holds the
authoritative map of every document and the topic it owns.

- [docs/usage.md](https://github.com/softwareone-platform/mpt-extension-sdk/blob/HEAD/docs/usage.md): SDK usage guide with examples
-…

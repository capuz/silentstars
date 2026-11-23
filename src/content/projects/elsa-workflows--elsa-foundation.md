---
repo: "elsa-workflows/elsa-foundation"
name: "elsa-foundation"
description: "Foundational building blocks and shared infrastructure for the Elsa Workflows ecosystem"
readmeQualityOk: true
url: "https://github.com/elsa-workflows/elsa-foundation"
homepage: "https://elsafoundation.dev"
language: "C#"
languages: ["C#"]
languagePcts: [75]
topics: ["csharp", "dotnet", "elsa", "workflows"]
stars: 12
forks: 3
openIssues: 457
closedIssues: 1847
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-05-08T13:32:29Z"
lastCommitAt: "2026-11-23T09:26:13Z"
lastReleaseAt: "2026-10-07T15:44:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["sfmskywalker", "elsa-workflows-claude[bot]", "elsa-workflows-codex[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce4847942364fd046688aef01b6e1e697c7a1aade4affe5cd6a057936f69e47/elsa-workflows/elsa-foundation"
discussionCount: 2
---

# Elsa Foundation

`elsa-foundation` is the transitional Elsa 4 foundation workspace.

It contains the Elsa backend and Studio in three product roots:

- `Essentials/`: backend libraries, tests and host applications.
- `Extensions/<capability>/`: optional backend implementations, tests and Studio components where present.
- `Studio/`: the Studio shell, shared UI, tests and frontend tooling.

Shared engineering documentation, tools and workflows remain at the root. Public Elsa 4 documentation source lives in `website/docs/` and syncs to GitBook. Server and Studio retain independent builds and package identities.

These repositories develop the Elsa 4 preview. Elsa 3 uses the separate [elsa-core](https://github.com/elsa-workflows/elsa-core) and [elsa-studio](https://github.com/elsa-workflows/elsa-studio) repositories.

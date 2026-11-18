---
repo: "elsa-workflows/elsa-foundation"
name: "elsa-foundation"
description: "Foundational building blocks and shared infrastructure for the Elsa Workflows ecosystem"
readmeQualityOk: true
url: "https://github.com/elsa-workflows/elsa-foundation"
homepage: "https://elsafoundation.dev"
language: "C#"
languages: ["C#"]
languagePcts: [76]
topics: ["csharp", "dotnet", "elsa", "workflows"]
stars: 11
forks: 3
openIssues: 441
closedIssues: 1534
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-05-08T13:32:29Z"
lastCommitAt: "2026-11-18T11:23:00Z"
lastReleaseAt: "2026-10-07T15:44:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["sfmskywalker", "elsa-workflows-claude[bot]", "elsa-workflows-codex[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f828d3fdfb56110fff2109a85f9f543ffbf5967632c007267f5a85a03a3686a/elsa-workflows/elsa-foundation"
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

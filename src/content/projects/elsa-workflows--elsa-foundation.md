---
repo: "elsa-workflows/elsa-foundation"
name: "elsa-foundation"
description: "Foundational building blocks and shared infrastructure for the Elsa Workflows ecosystem"
readmeQualityOk: true
url: "https://github.com/elsa-workflows/elsa-foundation"
homepage: "https://elsafoundation.dev"
language: "C#"
languages: ["C#"]
languagePcts: [81]
topics: ["csharp", "dotnet", "elsa", "workflows"]
stars: 8
forks: 2
openIssues: 369
closedIssues: 1083
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2026-05-08T13:32:29Z"
lastCommitAt: "2026-10-25T08:39:34Z"
lastReleaseAt: "2026-10-07T15:44:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["elsa-workflows-codex[bot]", "elsa-workflows-bot[bot]", "sfmskywalker"]
openGraphImageUrl: "https://opengraph.githubassets.com/c168da2d79a6b886e1da7081cd1c1cb108c42f7037fd59484d28077abc229746/elsa-workflows/elsa-foundation"
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

- **Try Elsa 4:** [run Workbench and Studio from published Docker images](https://github.com/elsa-workflows/elsa-foundation/blob/HEAD/docker/compose/README.md#quick-start--published-images-no-clone-or-build).
- **Contribute to the server:** follow the [Elsa Foundation contribution guide](https://github.com/elsa-workflows/elsa-foundation/blob/HEAD/CONTRIBUTING.md).
-…

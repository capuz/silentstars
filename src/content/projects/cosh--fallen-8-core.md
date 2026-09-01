---
repo: "cosh/fallen-8-core"
name: "fallen-8-core"
description: "Fallen-8 is an in-memory graph database implemented in C#."
readmeQualityOk: true
url: "https://github.com/cosh/fallen-8-core"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [73, 23]
topics: ["csharp", "database", "graph"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-12-13T14:25:51Z"
lastCommitAt: "2026-09-01T08:46:24Z"
lastReleaseAt: "2023-03-14T23:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["cosh", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3d3a27314e3cf66f5adba98dd3c27ef2ba22ab6500ce9a80d3ebe6fbff029e/cosh/fallen-8-core"
---

## Welcome to Fallen-8

Fallen-8 is an in-memory [graph database](http://en.wikipedia.org/wiki/Graph_database)
written in C# (.NET 10), built for raw speed on heavy graph algorithms.

It has **no query language** — no Cypher, no Gremlin, and none is planned. Queries are C#:
small [delegate fragments](https://docs.fallen-8.com/delegates/) compiled at runtime, or precompiled stored
queries. That is a deliberate choice for the era of code-generating agents — an agent emits a
C# fragment, the engine compiles and runs it in-process at full speed, with no query-language
layer in between. This is the .NET Core evolution of the original
[fallen-8](https://github.com/cosh/fallen-8).

> 📚 **Full documentation: <https://docs.fallen-8.com/>** — a fast, searchable site
> with a deep dive per feature and the interactive API reference.

### Key features

Each feature has a deep-dive doc — follow the link.

- **[Graph model](https://docs.fallen-8.com/graph-model/)** — a directed property graph; typed properties on
  vertices and edges, all mutation through a serialized transaction queue.
- **[Delegates, not a query language](https://docs.fallen-8.com/delegates/)** — filters and cost functions…

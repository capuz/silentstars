---
repo: "debe/libpetri"
name: "libpetri"
description: "Coloured Time Petri Net (CTPN) engine — Java 25, TypeScript & Rust"
readmeQualityOk: true
url: "https://github.com/debe/libpetri"
language: "Java"
languages: ["Java", "Rust", "TypeScript"]
languagePcts: [35, 31, 25]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-27T20:07:46Z"
lastCommitAt: "2026-09-25T09:03:05Z"
lastReleaseAt: "2026-03-05T08:37:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 38
maintainers: ["debe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a03e84a2cc6101bc0f8b72537587df7bbf30515f3637a75fedfd7785ea4e0d1f/debe/libpetri"
---

# libpetri

**Build concurrent, time-aware systems from reusable Petri-net modules—and check their behavior before they run.**

libpetri is a Coloured Time Petri Net engine for Java, TypeScript, Rust, and Python. Places hold typed data, transitions perform work, arcs describe data flow, and timing constraints make deadlines part of the model. The net is not merely a diagram: it is the program the runtime executes.

Use it for workflow and agent orchestration, protocols, game logic, UI state machines, or other systems where concurrency, correlation, and timing are easier to see as a graph than as nested control flow.

</p>

## Choose an implementation

All four APIs follow the same [language-agnostic specification](https://github.com/debe/libpetri/blob/HEAD/spec/00-index.md). Java, TypeScript, and Rust implement it independently; Python binds the Rust runtime through PyO3.

| Language | Runtime | Maturity | Install | Guide |
|---|---|---:|---|---|
| Java 25 | `CompletionStage` actions | Production | `org.libpetri:libpetri:7.0.0` | [Java guide](https://github.com/debe/libpetri/blob/HEAD/java/README.md) |
| TypeScript 6 | Promises and the event loop | Production | `npm install…

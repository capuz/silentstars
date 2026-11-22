---
repo: "zedlanguage/zed"
name: "zed"
description: "A reactive dataflow programming language for the AI era, with automatic parallelization and very high standards of static verification"
readmeQualityOk: true
url: "https://github.com/zedlanguage/zed"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 198
forks: 7
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2026-10-25T11:56:41Z"
lastCommitAt: "2026-11-22T11:48:01Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["lukehutch"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbe8873614a06b205f36d0cbb9a575087a99052e6b3500f32ecd5609920a32b3/zedlanguage/zed"
---

> **Note**
>
> **Zed is still under construction and is not yet ready for use, but it is coming soon.**
> Releases will be announced at [x.com/zedlang](https://x.com/zedlang). This page describes the language as it will be when finished.

[You can read about the design philosophy behind Zed here.](https://github.com/zedlanguage/zed/wiki/Motivations-and-Design-Philosophy-Behind-Zed)

Zed is a dataflow programming language. A program is a set of definitions, each value is defined once in terms of the values it depends on, and the compiler orders the computation from that graph of dependencies. From the same graph, the compiler:

- runs code in parallel, with no threads or locks in the source, and gives the same result bit for bit on any number of cores;
- frees memory without a garbage collector, and often never allocates intermediate collections at all;
- recomputes only what a changed input affects;
- rejects whole classes of run-time errors at compile time, including null dereference, unhandled failure, out-of-bounds indexing and data races.

Its central data structure is the multi-level map, and the same code works on maps held in memory, in files or in a database.

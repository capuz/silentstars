---
repo: "parttimenerd/hprof-analyzer"
name: "hprof-analyzer"
description: "Fast Java heap dump analyzer, that emulates standard Eclipse MAT views with minimal memory in Rust"
readmeQualityOk: true
url: "https://github.com/parttimenerd/hprof-analyzer"
homepage: "https://parttimenerd.github.io/hprof-analyzer/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["heap-dump-analysis", "java"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-07-14T09:55:32Z"
lastCommitAt: "2026-11-26T09:05:38Z"
lastReleaseAt: "2026-11-19T11:10:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["parttimenerd"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bfeb49872e66c4372995b0bc002426fa36cc13dbf8e3e79102fe18a51bbbe27/parttimenerd/hprof-analyzer"
postedAt: "2026-11-09T12:06:47.127Z"
---

# hprof-analyzer

Analyze Java heap dumps and find memory leaks. One binary, no JVM required — generates self-contained HTML reports you can email, diff in CI, or open offline. Peak RSS stays well below the dump size (15 GiB on a 34 GiB dump), so you can analyze on the same machine that took the dump.

*By the [SapMachine](https://sapmachine.io) team.*

| | |
|-----------|------------|
| **[Analysis reports](#analysis-reports)** — leak suspects, retained-size breakdown, top consumers, threads ([sample](https://parttimenerd.github.io/hprof-analyzer/reports/)) | `hprof-analyzer heap.hprof report.html` |
| **[OQL queries](#oql-queries)** — GROUP BY, aggregates, viz directives, Eclipse MAT-compatible | `hprof-analyzer query heap.hprof --query "..."` |
| **[Interactive REPL](#interactive-repl)** — Tab completion, named views, result shaping, persistent history | `hprof-analyzer query heap.hprof --repl` |
| **[Interactive analysis](#cached-interactive-analysis)** — histogram, dominator tree, inspect objects (cached, sub-second after first run) | `hprof-analyzer heap summary heap.hprof` |

---
repo: "timgluz/teeline"
name: "teeline"
description: "A solver for Traveling Salesman Problem with tunable metaheuristics"
readmeQualityOk: true
url: "https://github.com/timgluz/teeline"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [42, 36]
topics: ["tsp", "or-tools", "optimization-algorithms", "2opt", "kd-tree", "ga", "genetic-algorithm"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 162
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2020-05-28T18:44:26Z"
lastCommitAt: "2026-09-14T09:12:59Z"
lastReleaseAt: "2026-08-09T13:25:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 72
maintainers: ["timgluz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6abff8a42aa3772f18daba9954360d00aa2ceb3357c1d33abd177a34e95bf7e3/timgluz/teeline"
---

# Teeline

Teeline is a solver for the symmetric Traveling Salesman Problem, written in Rust.

> *The Traveling Salesman Problem (TSP) is the search for a minimum cost Hamiltonian circuit connecting a set of locations.* — [source](http://www.optimization-online.org/DB_FILE/2017/12/6370.pdf)

It is a work in progress. It already implements all algorithms typically covered by a CS algorithms course. More advanced algorithms will be added once the code structure and interfaces have stabilised.

## Subprojects

| Subproject | Description |
| --- | --- |
| [teeline-api](https://github.com/timgluz/teeline/blob/HEAD/teeline-api/README.md) | REST API at [api.tspsolver.com](https://api.tspsolver.com) — solve TSP problems over HTTP, with OpenAPI/Scalar docs and self-serve API keys |
| [teeline-cli](https://github.com/timgluz/teeline/blob/HEAD/teeline-cli/README.md) | Command-line solver — reads TSPLIB files, prints the best tour found |
| [teeline-qt](https://github.com/timgluz/teeline/blob/HEAD/teeline-qt/README.md) | Qt 6 desktop GUI with live solver visualization and a pipeline builder |
| [teeline-wasm](https://github.com/timgluz/teeline/blob/HEAD/teeline-wasm/README.md) | WebAssembly…

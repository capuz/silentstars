---
repo: "aqarios/luna-bench"
name: "luna-bench"
description: "A framework for benchmarking optimization algorithms across quantum and classical domains."
readmeQualityOk: true
url: "https://github.com/aqarios/luna-bench"
homepage: "https://luna-bench.docs.aqarios.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 15
recentReleases: 4
createdAt: "2025-06-23T13:44:23Z"
lastCommitAt: "2026-08-28T14:24:08Z"
lastReleaseAt: "2026-07-20T12:25:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 93
maintainers: ["Llewe", "MaximilianJanetschek", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e6d133cbdfe502525b91d3411bc4d3b4967942a8198d23c726e7e3d53a61dc1/aqarios/luna-bench"
discussionCount: 8
---

</div>

# Luna-Bench

A framework for benchmarking optimization algorithms across quantum and classical domains. Define your models, plug
in solvers, and compare results with predefined features and metrics. Add plots to visualize your benchmark results.

> **Alpha Notice:** Luna-Bench is still in alpha. Many things are not final — for example, how metrics and features are
> accessed in plots is something we are still actively experimenting with to find the best approach. We highly welcome
> any user input and feedback! Feel free to open an issue or start a discussion.

## Why

Benchmarking optimization algorithms is tedious. You end up writing the same infrastructure over and over: result
storage, metric computation, plotting, managing model sets. Luna-Bench handles all of that so you can focus on the
algorithms themselves. Features and metrics are tested and reused across benchmarks, which means fewer bugs and more
consistent results.

- Compare quantum and classical solvers by adding algorithms easily from luna_quantum or add your own
- Persistent storage for results and configurations via SQLite
- Built-in metrics like approximation ratio, time to solution, and fraction of…

---
repo: "clocksmith/gamma"
name: "gamma"
description: "Low-level local LLM experiments, tools, and games"
readmeQualityOk: true
url: "https://github.com/clocksmith/gamma"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [40, 26]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-02-24T16:16:59Z"
lastCommitAt: "2026-08-24T04:21:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["clocksmith"]
openGraphImageUrl: "https://opengraph.githubassets.com/60b90a2bad11ceadd470598c867f8e095f7018f75b68ef3e5534ebe4f030e855/clocksmith/gamma"
---

# Gamma

Gamma is a Python toolkit for interactive model exploration, model comparison,
benchmarking, and controlled capability-transfer experiments. Its CLI can run a
token-prediction game, compare model outputs, benchmark engines, and coordinate
multiple active model engines.

- [Browser demo](https://gamma-web-game.web.app/)
- [Architecture](https://github.com/clocksmith/gamma/blob/HEAD/docs/ARCHITECTURE.md)
- [Documentation index](https://github.com/clocksmith/gamma/blob/HEAD/docs/README.md)
- [Durable goals](https://github.com/clocksmith/gamma/blob/HEAD/GOALS.md)
- [Component authority index](https://github.com/clocksmith/gamma/blob/HEAD/docs/COMPONENT_INDEX.md)

## Mission, goal, and value

Gamma’s mission is to make model and algorithm behavior inspectable, comparable,
and reproducible under named evaluation contracts.

The current goal is to give researchers and engineers one place to inspect
token choices, compare models and runtimes, run benchmark workloads, and record
whether a change improved the named task. The repository also carries domain
experiments for translation, embeddings, WGSL, compression, and the SAME-R
method.

Gamma serves:

- Researchers testing…

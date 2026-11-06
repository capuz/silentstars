---
repo: "astral-experiments/imre"
name: "imre"
description: "An experimental ahead-of-time compiler for typed Python, written in Rust."
readmeQualityOk: true
url: "https://github.com/astral-experiments/imre"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [53, 46]
stars: 19
forks: 0
openIssues: 111
closedIssues: 1004
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-10-17T14:45:43Z"
lastCommitAt: "2026-11-06T02:44:47Z"
lastReleaseAt: "2026-11-01T19:29:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["charliermarsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cd834fd4aa8f89e34d98749f79a65825024fdc2e1821461b9b47c4e01a8bbea/astral-experiments/imre"
---

# <img src="docs/assets/imre-mark.svg" width="24" height="24" alt=""> Imre

An experimental ahead-of-time compiler for typed Python, written in Rust.

> [!WARNING]
> This README includes human edits; all code changes, PR summaries, and additional
> documentation were authored entirely by GPT-6 Astra in [Codex](https://openai.com/codex/).
>
> Imre implements only a small part of Python and its standard library,
> with no guarantee of future development or maintenance. Use at your own risk.

## Benchmarks

Each CLI runs on one AMD EPYC Milan vCPU with warm filesystem caches. Imre and
CPython run the same Python. The catalog includes uv’s original implementation
as a second CPython reference. Road routing includes reading the graph and
finding all four distances.
[Workloads, raw samples and reproduction steps](https://github.com/astral-experiments/imre/blob/HEAD/benchmarks/applications/README.md)

The Flask benchmark issues health checks, escaped HTML greetings and JSON sums
over loopback. Each bar is the median of 70 rounds at eight concurrent clients.
Frozen Flask on Imre 0.1.5 compiles its routes and Jinja template
ahead of time. Stock Flask on CPython uses Werkzeug. Rust/Hyper…

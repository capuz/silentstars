---
repo: "astral-experiments/imre"
name: "imre"
description: "An experimental ahead-of-time compiler for typed Python, written in Rust."
readmeQualityOk: true
url: "https://github.com/astral-experiments/imre"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [50, 49]
stars: 32
forks: 1
openIssues: 111
closedIssues: 1004
watchers: 1
contributors: 7
recentReleases: 6
createdAt: "2026-10-17T14:45:43Z"
lastCommitAt: "2026-11-12T05:42:13Z"
lastReleaseAt: "2026-11-01T19:29:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["charliermarsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d32fd1977692eb3f160e78bcd2e0daba1b1beee467cd392e2eebdcb045af45/astral-experiments/imre"
---

# <img src="https://raw.githubusercontent.com/astral-experiments/imre/HEAD/docs/assets/imre-mark.svg" width="24" height="24" alt=""> Imre

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
Frozen Flask on Imre 0.1.5 compiles its routes and Jinja template…

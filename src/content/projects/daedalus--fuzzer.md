---
repo: "daedalus/fuzzer"
name: "fuzzer"
description: "Information-dense, coverage-guided binary fuzzer "
readmeQualityOk: true
url: "https://github.com/daedalus/fuzzer"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["afl-fuzz", "concolic", "fuzzer", "smt", "asan", "msan", "ubsan"]
stars: 45
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-18T18:09:54Z"
lastCommitAt: "2026-10-21T21:15:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["daedalus", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4daa4c5e21c6b40e12accc47c128943bd1b2fa9eaf1ee39b55cacb6f07dfc4c2/daedalus/fuzzer"
---

# fuzzer-tool

**Information-dense, coverage-guided binary fuzzer**: 271 mutation operators across 9 categories, 41 operator-scheduling strategies under Elo arbitration, AFL-style forkserver and SHM edge coverage, comparison tracing down to the individual call site, and information-theoretic seed scoring.

> **Honest caveat**: This is probably the most complex fuzzer from an information-theory standpoint, and also the slowest raw-throughput. The tradeoff is speed for edge-discovery novelty. For production fuzzing at scale, AFL family fuzzers remain the best choice.

---

## Architecture

The campaign loop runs down the dark spine — pick a seed, mutate it, execute it, measure what
came back — and the coloured edges on the right are the return paths that close it:

| Colour | Return path |
|---|---|
| green | coverage and operator reward feeding scheduling (`rarity · Chao2`, `reward`) |
| blue | comparison signal feeding mutation and stall detection (`redqueen · colorize · SMT`, `walls / stall`) |
| purple | corpus queue feeding seed selection |

Boxes are *subsystems*, not files — one box can cover several modules — but every module path
in the diagram is a real path under…

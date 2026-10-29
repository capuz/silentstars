---
repo: "ru551n/yavs"
name: "yavs"
description: "yavs: Yet Another VHDL Simulator, in Rust"
readmeQualityOk: true
url: "https://github.com/ru551n/yavs"
language: "Rust"
languages: ["Rust", "VHDL"]
languagePcts: [56, 40]
stars: 5
forks: 0
openIssues: 160
closedIssues: 714
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T13:32:34Z"
lastCommitAt: "2026-10-29T21:24:33Z"
lastReleaseAt: "2026-10-28T20:22:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 76
undervaluedScore: 61
maintainers: ["ru551n"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9c597beee6b0f2959cdbedd8a274cb16584addce7be1dc9d4cdece50684c6a7/ru551n/yavs"
---

# yavs

Yet Another VHDL Simulator: VHDL-1993, 2008 and 2019 in Rust.

## Why yavs

- **Measured speed:** about 5 times faster than an established open-source VHDL simulator on repeated runs and 1.7 times on first runs, over 41 real testbenches with analysis included ([performance](https://github.com/ru551n/yavs/blob/HEAD/docs/performance.md)).
- **Multi-threaded:** `--threads 4` runs large, flat RTL designs, where thousands of processes wake on the same clock edge, 2.4 to 2.6 times faster than one thread (whole run, measured 2026-10-28); processor models and testbench-style designs run at about their one-thread speed, with identical output at any thread count ([parallel simulation](https://github.com/ru551n/yavs/blob/HEAD/docs/parallel.md)).
- **Evidence, not claims:** on every push to `main`, CI re-runs most of the [conformance report](https://github.com/ru551n/yavs/blob/HEAD/docs/conformance.md), including a comparison of yavs's output with an established simulator's recorded output and two simulators' own regression suites run on yavs; every result says where and when it was produced, and the performance sheet gives its method.
- **Runs your verification libraries…

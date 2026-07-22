---
repo: "uutils/sed"
name: "sed"
description: "Rewrite of sed in Rust"
readmeQualityOk: true
url: "https://github.com/uutils/sed"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 100
forks: 23
openIssues: 33
closedIssues: 28
watchers: 5
contributors: 16
recentReleases: 0
createdAt: "2025-02-01T15:43:18Z"
lastCommitAt: "2026-07-22T06:09:28Z"
lastReleaseAt: "2026-01-28T07:56:30Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 87
undervaluedScore: 43
maintainers: ["renovate[bot]", "cakebaker", "dspinellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f4c2eaad6ab648f40f2c9b2c86d916b00950b014207f661c915424f93f76656/uutils/sed"
discussionCount: 2
---

# sed

Rust reimplementation of the [sed utility](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sed.html)
with some [GNU sed](https://www.gnu.org/software/sed/manual/sed.html),
[FreeBSD sed](https://man.freebsd.org/cgi/man.cgi?sed(1)),
and other extensions.

## Status

At this state _sed_ implements all [POSIX features](https://pubs.opengroup.org/onlinepubs/9799919799/)
and can run correctly the two complex scripts of its integration tests:
[hanoi.sed](https://github.com/uutils/sed/blob/main/tests/fixtures/sed/script/hanoi.sed) (solves the Towers of Hanoi puzzle) and
[math.sed](https://github.com/uutils/sed/blob/main/tests/fixtures/sed/script/math.sed)  (implements an arbitrary precision integer math calculator).

The performance of this Rust implementation is now better than the GNU and FreeBSD implementations for most benchmarked cases.

Further work aims to:
* Adjust buffering on terminal output to match current implementations,
* Implement more GNU extensions,
* Improve performance where possible.

## Installation and Use

We provide a Linux x86_64 binary archive from the main branch at
https://github.com/uutils/sed/releases/tag/latest-commit .

For other…

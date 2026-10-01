---
repo: "gustavoamigo/bytecaskdb"
name: "bytecaskdb"
description: "Fast embedded key-value store"
readmeQualityOk: true
url: "https://github.com/gustavoamigo/bytecaskdb"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["storage-engine", "database"]
stars: 6
forks: 0
openIssues: 52
closedIssues: 84
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T17:25:54Z"
lastCommitAt: "2026-10-01T10:24:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 49
maintainers: ["gustavoamigo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/629ad7e048c4c1ddad526c600a3a077bc28afdabd4624fc3ac3bd2aa869a1cf0/gustavoamigo/bytecaskdb"
discussionCount: 0
---

# ByteCaskDB

> **Status: early development.** The core engine works and is well-tested, but the API and on-disk format may change before a stable release. Not recommended for production use yet.

Test Analytics dashboard: https://app.codecov.io/gh/gustavoamigo/bytecaskdb/tests/new

CI uploads JUnit test results with per-test source file/line metadata so Test Analytics can show source context instead of a flat list.
CI also publishes JUnit results directly in GitHub Checks for PR-native test summaries.

**ByteCaskDB** is a fast, predictable embedded key-value store written in C++. Reads and writes have flat, predictable latency from thousands of keys to hundreds of millions.

All keys in memory at all times — a deliberate design choice that removes an entire class of complexity that exists solely to minimise disk access and makes every point lookup O(1) with flat, predictable latency. The key directory holds no key bytes, so a key costs 14–19 bytes of RAM whatever its length (measured at 1M keys, structured to random): 128 GB holds on the order of six billion keys. Very few moving parts — an in-memory key directory and an append-only data file — is what keeps that latency flat…

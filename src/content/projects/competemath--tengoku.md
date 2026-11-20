---
repo: "competemath/tengoku"
name: "tengoku"
description: "A stable, secure, and provenanced AI-first formal mathematics aggregate of open-source Lean 4 projects."
readmeQualityOk: true
url: "https://github.com/competemath/tengoku"
homepage: "https://competemath.com/tengoku"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
topics: ["dataset", "formal-mathematics", "lean4", "mcp", "osint"]
stars: 6
forks: 5
openIssues: 18
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-10T13:22:00Z"
lastCommitAt: "2026-11-20T10:50:53Z"
lastReleaseAt: "2026-11-19T15:02:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 81
undervaluedScore: 65
maintainers: ["tengoku-intake[bot]", "mikael-bashir"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a715c179c176e85fc9834b7463a1244dbef38c557e0dccfa0559f0d890a2ee8/competemath/tengoku"
discussionCount: 0
---

> **Note**
>
> **Tengoku is changing fast.** If you are planning a serious project on it, wait for the v2 release. Releases after v2 will come with migration support and stable environments.

## About

Formal mathematics is mathematics that a computer can check, step by step. It is scattered across many separate projects,
written for different versions of Lean 4. Tengoku (天国) gathers theorems from many formal mathematics projects into one
Lean 4 library on a single pinned toolchain. A theorem is _trusted_ only once the relevant library checks have passed: it
builds with no `sorry`, uses only the standard axioms, and its assumptions are checked not to contradict.
Every record links to its source at a fixed commit and carries its licence and credit.

Tengoku and [Leak](https://competemath.com/about/leak) are parts of one service: Tengoku is the library, and Leak is
the intended interface. Leak is tooling and a harness for agent-driven proving over MCP, providing search, proof-state
interaction and verification services. It is not the prover; any MCP-capable system can use it.

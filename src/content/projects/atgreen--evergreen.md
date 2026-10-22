---
repo: "atgreen/evergreen"
name: "evergreen"
description: "Evergreen Common Lisp"
readmeQualityOk: true
url: "https://github.com/atgreen/evergreen"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 57
forks: 3
openIssues: 4
closedIssues: 22
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-30T23:49:55Z"
lastCommitAt: "2026-10-22T08:52:38Z"
lastReleaseAt: "2026-10-14T15:10:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["atgreen", "genworks"]
openGraphImageUrl: "https://opengraph.githubassets.com/68c6256f09af303dc964471e1aa1e6a54e2ce305e5859e4dc891476da5239046/atgreen/evergreen"
---

**Evergreen Common Lisp (EGCL)** is an experimental Common Lisp implementation
written in Rust, with a HotSpot-inspired tiered JIT, a moving generational
garbage collector, and a tree shaker for standalone applications.

> [!WARNING]
> **This is an experiment.** Evergreen is for people interested in trying and
> developing a new Lisp implementation. It does not promise complete ANSI
> conformance, compatibility stability, or production readiness. Programs may
> fail or behave incorrectly, and performance varies widely by workload.
>
> The project also explores whether a language implementation can be built
> through expert guidance of AI-driven development, with minimal manual code
> review. It may never meet its goals. See [Authorship & Governance](#authorship--governance).

[Read the manual](https://atgreen.github.io/evergreen/) ·
[Version history](https://github.com/atgreen/evergreen/blob/HEAD/CHANGELOG.md) ·
[Report a bug](https://github.com/atgreen/evergreen/issues)

## What you can explore

- **Adaptive native compilation.** Supported code runs in bytecode and can
  advance to baseline and optimizing native compilers. Hot loops can enter
  native code during the current call…

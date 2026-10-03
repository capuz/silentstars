---
repo: "atgreen/evergreen"
name: "evergreen"
description: "Evergreen Common Lisp"
readmeQualityOk: true
url: "https://github.com/atgreen/evergreen"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-09-30T23:49:55Z"
lastCommitAt: "2026-10-03T09:22:08Z"
lastReleaseAt: "2026-10-03T07:47:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["atgreen"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c9848adf0160d7582d7d3a165b09e71b71f99abc6e111da399f34b35b328eb/atgreen/evergreen"
---

</p>

> [!WARNING]
> **This is an experiment.**
>
> Evergreen is under active development. The parts that do work may not behave
> the way you expect, or the way the standard says they should. It may never work.
>
> Everything below describes what Evergreen is *trying* to be. Read it as a
> statement of intent, not as a description of something you can depend on.
> Evergreen can be both incredibly fast and embarrassingly slow.  Just know that 
> this is a work in progress.
>
> Evergreen exists to find out
> whether a real language implementation (a tiered JIT, a moving generational
> collector, a standard library) can be built through arms-length expert guidance
> of AI-driven development. 
> See [Authorship & Governance](#authorship--governance).

Common Lisp is an evergreen language: mature, enduring, and remarkably
resistant to obsolescence. **Evergreen Common Lisp (EGCL)** is a new
implementation built to carry it forward.

**Evergreen is Common Lisp with a HotSpot-inspired native runtime**,
built from scratch in Rust. It starts executing in bytecode, compiles
hot code to native instructions, and specializes dynamically typed
programs as they run.

- **Tiered compilation with…

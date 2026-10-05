---
repo: "inso1337/revl"
name: "revl"
description: "A language for safe, universal spatiotemporal composability (Cordis paradigm) and orchestration."
readmeQualityOk: true
url: "https://github.com/inso1337/revl"
homepage: "https://inso1337.github.io/revl/"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["cordis", "ai-agents", "ai-safety", "capability-based-security", "compiler", "effect-system", "formal-verification", "mcp", "model-context-protocol", "programming-language"]
stars: 8
forks: 0
openIssues: 57
closedIssues: 519
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-16T22:03:41Z"
lastCommitAt: "2026-10-05T10:46:27Z"
lastReleaseAt: "2026-08-17T09:28:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 58
maintainers: ["inso1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7e847a84f21b90764b2e2d51495a46a9b7086f528d921666572047f92161a5e/inso1337/revl"
---

---

revl is a language for software that changes while it runs. Components
load, unload, and hot-swap inside a live system, and the properties that make
that survivable are checked at compile time: unloading leaves no residue,
dependencies stay coherent, nothing reaches state it never declared. The core
move is small and strict. Every mutation is written beside its inverse, and a
mutation with no inverse, one that crosses the system boundary, must carry an
`emit` marker at the call site. Irreversibility is legal; invisible
irreversibility is not.

The paradigm comes from [Cordis](https://github.com/cordiverse/cordis) and the
paper it implements, [*A Programming Paradigm for Spatiotemporal Composability*](https://github.com/cordiverse/paper).
The paper proves strong theorems about revertible effects, but each one rests
on hypotheses a library can only ask programmers to respect. revl moves those
hypotheses into the checker. C++ had RAII as a discipline and Rust made it a
type system; Cordis has revertible effects as a discipline and revl makes them
a language. The borrow checker governs lexical resource scope. revl's checker
governs dynamic component scope: what may enter a…

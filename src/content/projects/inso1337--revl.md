---
repo: "inso1337/revl"
name: "revl"
description: "A language for safe, universal spatiotemporal composability (Cordis paradigm) and orchestration."
readmeQualityOk: true
url: "https://github.com/inso1337/revl"
homepage: "https://inso1337.github.io/revl/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["cordis", "ai-agents", "ai-safety", "capability-based-security", "compiler", "effect-system", "formal-verification", "mcp", "model-context-protocol", "programming-language"]
stars: 8
forks: 2
openIssues: 258
closedIssues: 961
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2026-08-16T22:03:41Z"
lastCommitAt: "2026-11-09T04:34:31Z"
lastReleaseAt: "2026-08-17T09:28:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 61
maintainers: ["inso1337-bot", "inso1337", "dannyward630"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfe360eafeb3f8ede69b8a92c759eb26d4136f0133478281b5b42311719d688e/inso1337/revl"
discussionCount: 0
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

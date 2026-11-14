---
repo: "TSavo/sugar"
name: "sugar"
description: "Correctness proofs from the code you already wrote: lift vendor-tested assertions to pinned FOL, verify with a warrant cited next to every line. match(Sugar) { Some(s) => cite_or_effect(s), None => panic!() }"
readmeQualityOk: true
url: "https://github.com/TSavo/sugar"
homepage: "https://github.com/TSavo/provekit/blob/main/docs/papers/README.md"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [50, 45]
topics: ["blake3", "content-addressing", "cryptographic-attestation", "federated-trust", "formal-methods", "proofchain", "software-verification", "polyglot-verification", "proof-substrate", "protocol-evolution"]
stars: 8
forks: 3
openIssues: 38
closedIssues: 2096
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-16T01:52:55Z"
lastCommitAt: "2026-11-14T22:04:52Z"
lastReleaseAt: "2026-07-16T14:34:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 64
maintainers: ["TSavo"]
openGraphImageUrl: "https://opengraph.githubassets.com/de5f172cce02c7d365036cd295fda59d8f04daf9e4069d4629f4bc984ed91096/TSavo/sugar"
---

# Sugar

**Sugar in, `.proof` out.** Sugar reads the surface your code already has — unit
tests, assertions, function bodies — and turns it into a signed,
content-addressed `.proof` of what your software actually does. No spec
language, no annotations, no changes to your code, and no single-language
lock-in: the same pipeline lifts Rust, Python, and Java today.

A `.proof` is a portable, recomputable artifact. Anyone can verify it from its
bytes, hashes (BLAKE3-512 CIDs), signatures, and witnesses — no registry, no
vendor to trust. That makes three things practical that weren't:

- **Honest dependency bumps.** `sugar diff` compares two versions by *behavior*,
  not text or version number, and classifies every behavior as held, renamed,
  new, or lost — so a "minor" release that changes what a function does lights
  up before it reaches prod.
- **Checked assumptions.** `sugar prove` hands z3 your callsite's assumption and
  the dependency's own lifted contract and asks whether both can be true at
  once. A wrong assumption is refused at the callsite, before anything runs.
- **Cross-language guarantees.** Contracts are lifted into one shared logic, so
  a Rust caller can be checked…

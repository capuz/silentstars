---
repo: "TSavo/sugar"
name: "sugar"
description: "Prove `k(I)=t`. A general-purpose framework for proving any transformation produces its canonical truth object. The substrate is opaque to domain; any verifiable proposition gets a 64-byte content-addressed name. Evidence is a proofchain: signed, locally verifiable. A blockchain carries state transitions; a proofchain carries formal proofs."
url: "https://github.com/TSavo/sugar"
homepage: "https://github.com/TSavo/provekit/blob/main/docs/papers/README.md"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["blake3", "content-addressing", "cryptographic-attestation", "federated-trust", "formal-methods", "proofchain", "software-verification", "polyglot-verification", "proof-substrate", "protocol-evolution"]
stars: 5
forks: 3
openIssues: 35
closedIssues: 880
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-04-16T01:52:55Z"
lastCommitAt: "2026-07-03T06:24:44Z"
lastReleaseAt: "2026-05-09T16:54:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 70
maintainers: ["TSavo"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e190aa778643f5bd85d418b604823227fd3f7a05430368fa4ecde047a5e652/TSavo/sugar"
---

# Sugar
**Makes software honest.**

> **Sugar in, `.proof` out.**
> One z3 check. Every language. Every surface you already wrote. Zero code changes.

You don't really know what your software does. You know the packages you installed and the versions you pinned. But you depend on what the code *does* — across every dependency, in every language, including the ones you have never read — and that is the one thing nothing tells you. It is also the only thing that has ever hurt you.

Here is how you get it back: correctness you can prove, hand to someone else, and check for yourself. One command, no changes to your code. (Behind it are nine impossible things. They are waiting at the bottom.)

## You get a proof of your software without touching it

No spec. No annotations. No proof language. You don't change a line, and you don't care what language the code is in. You run `sugar mint`, and out comes a signed `.proof`: a map of what your software actually does.

Every verifier before this made you pick one language, model it, and pay in specs and annotations — which is why verification lived in aerospace and never in your repo. Getting it for free, in any language, from the code you…

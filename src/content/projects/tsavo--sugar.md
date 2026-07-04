---
repo: "TSavo/sugar"
name: "sugar"
description: "Correctness proofs from the code you already wrote: lift vendor-tested assertions to pinned FOL, verify with a warrant cited next to every line. match(Sugar) { Some(s) => cite_or_effect(s), None => panic!() }"
readmeQualityOk: true
url: "https://github.com/TSavo/sugar"
homepage: "https://github.com/TSavo/provekit/blob/main/docs/papers/README.md"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["blake3", "content-addressing", "cryptographic-attestation", "federated-trust", "formal-methods", "proofchain", "software-verification", "polyglot-verification", "proof-substrate", "protocol-evolution"]
stars: 6
forks: 3
openIssues: 33
closedIssues: 924
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-04-16T01:52:55Z"
lastCommitAt: "2026-07-04T23:14:02Z"
lastReleaseAt: "2026-05-09T16:54:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 67
maintainers: ["TSavo"]
openGraphImageUrl: "https://opengraph.githubassets.com/06326a95945a2563062229d01d67004c12ee0b9e4f348a0ddf2e1cccb375d150/TSavo/sugar"
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

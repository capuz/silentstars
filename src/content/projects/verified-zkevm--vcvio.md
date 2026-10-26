---
repo: "Verified-zkEVM/VCVio"
name: "VCVio"
description: "A Lean library for machine-checked cryptographic proofs."
readmeQualityOk: true
url: "https://github.com/Verified-zkEVM/VCVio"
language: "Lean"
languages: ["Lean"]
languagePcts: [98]
topics: ["cryptography", "formal-verification", "lean4", "post-quantum-cryptography", "program-logic", "proof-assistant", "game-hopping"]
stars: 168
forks: 55
openIssues: 14
closedIssues: 118
watchers: 3
contributors: 36
recentReleases: 0
createdAt: "2024-03-11T06:10:46Z"
lastCommitAt: "2026-10-26T17:54:21Z"
lastReleaseAt: "2026-02-22T03:54:02Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 44
maintainers: ["quangvdao", "dtumad", "alexanderlhicks"]
openGraphImageUrl: "https://opengraph.githubassets.com/70d8e86348704c5bd34024e54b6f4d63dc9c3f0da06aaba448b6bc17b320e93b/Verified-zkEVM/VCVio"
---

# Machine-Checked Cryptographic Proofs in Lean

VCVio is a Lean library for machine-checked proofs about cryptographic games, primitives,
protocols, and implementations. The core framework provides:

* A monadic syntax for representing computations with oracle access (`OracleComp`), with probabilistic computations (`ProbComp`) as a special case of having uniform selection oracles.
* A measure-valued denotational semantics (`evalDist` / `𝒟[…]`) for probabilistic computations,
  with event probabilities `Pr{let x ← comp}[p x]`, equality in distribution `mx =ᵈ my`, and total
  variation distance.
* An operational semantics (`simulateQ`) for implementing/simulating the behavior of a computation's oracles, including implementations of random oracles, query logging, reductions, etc.
* A program logic with relational (pRHL-style) and unary (Hoare-style) proof modes, with interactive tactics for stepping through game-based proofs.

It also provides definitions for cryptographic primitives such as symmetric/asymmetric encryption,
signatures, $\Sigma$-protocols, and transforms like Fiat-Shamir and Fischlin.

On top of the generic framework, `LatticeCrypto` covers ML-DSA, ML-KEM, and…

---
repo: "zkcompiler/zkc"
name: "zkc"
description: "A compiler for zero-knowledge protocols"
readmeQualityOk: true
url: "https://github.com/zkcompiler/zkc"
language: "C++"
languages: ["C++", "Rust", "Lean"]
languagePcts: [37, 26, 21]
topics: ["compiler", "programming-language", "zero-knowledge-proofs", "formal-verification"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T13:26:04Z"
lastCommitAt: "2026-10-18T08:16:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 41
maintainers: ["0xwonj"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d009e73949c1027960c8edd28640c7c6461500f37290c11ab39e447f73cf6dc/zkcompiler/zkc"
---

# zkc

zkc is a compiler for zero-knowledge **proof protocols**. It makes participant
computation, interaction and protocol composition explicit so they can be
analyzed, transformed and executed using cryptographic libraries.

A relation describes what is being proved. A protocol describes how participants
compute, exchange messages, obtain challenges and check the proof. zkc authors
that protocol in `.zkc` and compiles it through Protocol IR (PIR), built on MLIR, to independently
executable participant programs.

The project is under active development. [Implementation status](https://github.com/zkcompiler/zkc/blob/HEAD/docs/status.md)
records supported capabilities and their limits.

## A protocol in zkc

The [Schnorr library](https://github.com/zkcompiler/zkc/blob/HEAD/libraries/schnorr/lib.zkc) expresses its exchange
with explicit roles and random services:

```text
let nonce = nonces.draw();
let commitment = send P -> V(base * nonce);
let challenge = challenges.draw();
let received = send V -> P(challenge);
let response = send P -> V(nonce + received * scalar);
let accepted@V = base * response == commitment + point * challenge;
return (accepted = accepted);
```

Its…

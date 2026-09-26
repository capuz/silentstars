---
repo: "zkcompiler/zkc"
name: "zkc"
description: "A compiler for zero-knowledge protocols"
readmeQualityOk: true
url: "https://github.com/zkcompiler/zkc"
language: "Lean"
languages: ["Lean", "Rust", "C++"]
languagePcts: [35, 25, 23]
topics: ["compiler", "cryptography", "mlir", "zk"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T13:26:04Z"
lastCommitAt: "2026-09-26T08:47:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 32
maintainers: ["0xwonj"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bcf45a023178b93eafda0702e258dda4165176233d43dc5dde3221965ecc07b/zkcompiler/zkc"
---

# zkc

zkc is a compiler for zero-knowledge **proof protocols**. It makes participant
computation, interaction, and protocol composition explicit, providing a common
foundation for analysis, optimization, and verification.

A circuit, AIR, or relation describes what is being proved. A protocol describes
how participants compute, exchange messages, obtain challenges, and check the
proof. zkc compiles that protocol into participant programs that execute using
cryptographic libraries.

The project is under active development. [Implementation status](https://github.com/zkcompiler/zkc/blob/HEAD/docs/status.md)
records supported paths and their current boundaries.

## Why zkc?

- **Make the protocol visible.** Express participant computations, messages,
  challenge use, and subprotocol calls in one typed source. Keep reusable local
  algorithms separate from the interaction that uses them.
- **Share compiler infrastructure across protocols.** Use common analyses and
  transformation machinery while exposing domain operations and backend
  contracts. The compiler can work on computation, storage, and execution plans
  while retaining the conditions under which a change is valid.
-…

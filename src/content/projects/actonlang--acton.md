---
repo: "actonlang/acton"
name: "acton"
description: "Actor-based, safely typed, fast programming language."
readmeQualityOk: true
url: "https://github.com/actonlang/acton"
homepage: "https://acton.now"
language: "Haskell"
languages: ["Haskell", "C"]
languagePcts: [56, 38]
topics: ["programming-language", "language", "hacktoberfest", "compiler", "actor-model", "distributed-computing"]
stars: 187
forks: 14
openIssues: 229
closedIssues: 816
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2021-02-18T13:40:39Z"
lastCommitAt: "2026-09-18T08:26:28Z"
lastReleaseAt: "2021-09-23T17:35:00Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 42
maintainers: ["plajjan", "sydow", "mzagozen"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c5f6de4b002b8cda85b2b001328b706cc01d5310702aa8a4e964d8ea679ba69/actonlang/acton"
discussionCount: 2
---

# The Acton programming language

Acton is a general purpose programming language, designed to be useful for a
wide range of applications, from desktop applications to embedded and
distributed systems. In a first approximation Acton can be described as a
seamless addition of a powerful new construct to an existing language: Acton
adds *actors* to *Python*.

Acton is a compiled language, offering the speed of C but with a considerably
simpler programming model. There is no explicit memory management, instead
relying on garbage collection.

Acton is statically typed with an expressive type language and type inference.
Type inference means you don't have to explicitly declare types of every
variable but that the compiler will *infer* the type and performs its checks
accordingly. We can have the benefits of type safety without the extra overhead
involved in declaring types.

The Acton Run Time System (RTS) offers a distributed mode of operation allowing
multiple computers to participate in running one logical Acton system. Actors
can migrate between compute nodes for load sharing purposes and similar. The RTS
offers exactly once delivery guarantees. Through checkpointing of actor…

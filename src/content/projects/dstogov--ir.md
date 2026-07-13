---
repo: "dstogov/ir"
name: "ir"
description: "Lightweight JIT Compilation Framework"
readmeQualityOk: true
url: "https://github.com/dstogov/ir"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 498
forks: 41
openIssues: 10
closedIssues: 20
watchers: 12
contributors: 18
recentReleases: 0
createdAt: "2022-09-06T16:12:59Z"
lastCommitAt: "2026-07-13T06:36:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 33
maintainers: ["dstogov", "weltling", "iliaal"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d2a7b5aea4e0ede93a7d09a4ae16bb5f42bf11ec539ce0fb973bd04a85385b7/dstogov/ir"
discussionCount: 3
---

# IR - Lightweight JIT Compilation Framework

IR Framework is a practical solution for implementing JIT in medium-size projects. 
It defines Intermediate Representation (IR), provides a simple API for IR construction and
a set of algorithms for optimization, scheduling, register allocation and code
generation. The resulting generated in-memory code, may be directly executed.

A presentation about IR framework design and implementation details is available at
[researchgate](https://www.researchgate.net/publication/374470404_IR_JIT_Framework_a_base_for_the_next_generation_JIT_for_PHP).

IR is used as a base for PHP JIT since PHP-8.4. It's also used as a back-end for experimental [Rational C Compiler](http://github.com/dstogov/rcc).

Anyway, this is not a stable finished product yet. It’s still under development.

## IR - Intermediate Representation

The Framework uses single Medium level Intermediate Representation during all
phases of optimization, register allocation and code generation. It is inspired
by Sea-Of-Nodes introduced by Cliff Click [1]. Sea-Of-Nodes is used in Java
HotSpot Server Compiler, V8 TurboFan JavaScript Compiler, Java Graal
Compiler...

This representation…

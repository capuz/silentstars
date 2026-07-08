---
repo: "esbmc/esbmc"
name: "esbmc"
description: "The efficient SMT-based context-bounded model checker (ESBMC)"
readmeQualityOk: true
url: "https://github.com/esbmc/esbmc"
homepage: "http://esbmc.org/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [42, 36]
topics: ["c", "cpp", "solidity-contracts", "bmc", "incremental-learning", "k-induction", "smt-solver", "kotlin", "automated-testing", "automated-verification"]
stars: 493
forks: 140
openIssues: 437
closedIssues: 1466
watchers: 16
contributors: 67
recentReleases: 0
createdAt: "2015-06-20T19:35:34Z"
lastCommitAt: "2026-07-08T05:44:06Z"
lastReleaseAt: "2017-05-06T23:49:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 37
maintainers: ["lucasccordeiro", "pierredantas", "Yiannis128"]
openGraphImageUrl: "https://opengraph.githubassets.com/415d3a88148cbc841a66863a36a7652097139865a4b48e3bcb82fdd917536490/esbmc/esbmc"
discussionCount: 82
---

# The ESBMC model checker

ESBMC (the Efficient SMT-based Context-Bounded Model Checker) is a mature, permissively licensed open-source context-bounded model checker that automatically detects or proves the absence of runtime errors in single- and multi-threaded C, C++, CUDA, CHERI, Kotlin, Python, Rust, and Solidity programs. It can automatically verify predefined safety properties (e.g., bounds check, pointer safety, overflow) and user-defined program assertions. 

ESBMC supports: 

- The Clang compiler as its C/C++/CHERI/CUDA frontend;
- The Soot framework via Jimple as its Java/Kotlin frontend;
- The CPython 3.10 parser as its [Python frontend](https://github.com/esbmc/esbmc/blob/HEAD/src/python-frontend/README.md); the first SMT-based bounded model checker for Python programs;
- Implements the Solidity grammar production rules as its Solidity frontend;
- The ESBMC-PLC frontend for verifying IEC 61131-3 [Ladder Diagram](https://esbmc.github.io/docs/ld/) programs for programmable logic controllers (PLCs);
- Supports IEEE floating-point arithmetic for various SMT solvers.

ESBMC implements state-of-the-art incremental BMC and *k*-induction proof-rule algorithms based on…

---
repo: "esbmc/esbmc"
name: "esbmc"
description: "The efficient SMT-based context-bounded model checker (ESBMC)"
url: "https://github.com/esbmc/esbmc"
homepage: "http://esbmc.org/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [42, 36]
topics: ["c", "cpp", "solidity-contracts", "bmc", "incremental-learning", "k-induction", "smt-solver", "kotlin", "automated-testing", "automated-verification"]
stars: 493
forks: 139
openIssues: 432
closedIssues: 1458
watchers: 16
contributors: 67
recentReleases: 0
createdAt: "2015-06-20T19:35:34Z"
lastCommitAt: "2026-07-03T12:40:50Z"
lastReleaseAt: "2017-05-06T23:49:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 37
maintainers: ["lucasccordeiro", "sergillam", "pmatos"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51b9b3efdb3eae5289a4b95db136778d70b830a420138f2e90e1f43c956c3b7/esbmc/esbmc"
discussionCount: 82
---

# The ESBMC model checker

ESBMC (the Efficient SMT-based Context-Bounded Model Checker) is a mature, permissively licensed open-source context-bounded model checker that automatically detects or proves the absence of runtime errors in single- and multi-threaded C, C++, CUDA, CHERI, Kotlin, Python, Rust, and Solidity programs. It can automatically verify predefined safety properties (e.g., bounds check, pointer safety, overflow) and user-defined program assertions. 

ESBMC supports: 

- The Clang compiler as its C/C++/CHERI/CUDA frontend;
- The Soot framework via Jimple as its Java/Kotlin frontend;
- The CPython 3.10 parser as its [Python frontend](./src/python-frontend/README.md); the first SMT-based bounded model checker for Python programs;
- Implements the Solidity grammar production rules as its Solidity frontend;
- Supports IEEE floating-point arithmetic for various SMT solvers.

ESBMC implements state-of-the-art incremental BMC and *k*-induction proof-rule algorithms based on Satisfiability Modulo Theories (SMT) and Constraint Programming (CP) solvers.

We provide background materials and publications to help you understand what ESBMC can offer. These are available…

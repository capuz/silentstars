---
repo: "php/flowfusion"
name: "flowfusion"
description: "A Dataflow-Driven and Automated Fuzzer for the PHP Interpreter"
readmeQualityOk: true
url: "https://github.com/php/flowfusion"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
topics: ["fuzzing", "php"]
stars: 49
forks: 3
openIssues: 3
closedIssues: 0
watchers: 11
contributors: 14
recentReleases: 0
createdAt: "2024-11-26T15:51:55Z"
lastCommitAt: "2026-10-22T08:50:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 17
maintainers: ["YuanchengJiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/c81f316b5aeef10c98e9af01c40acfbf2ec7b9f66a75df2ac5cf6b3724d7d72c/php/flowfusion"
---

## FlowFusion — A Fusion-Based Fuzzer for the PHP Interpreter

### What is FlowFusion?

FlowFusion is a fully automated fuzzer that detects bugs (memory errors, undefined behavior, assertion failures) in the PHP interpreter. It builds new test programs by **fusing** the official `.phpt` tests maintained by PHP developers — plus thousands of programs translated into PHP from other languages' bug corpora — and runs them through PHP's own test harness on an ASan/UBSan/assertion-enabled build.

### How does FlowFusion work?

With ~25K seed programs, pairwise combinations already exceed 600M fused programs; fusing three grows that exponentially, and every fusion step is itself randomized. FlowFusion has three fusion strategies:

- **Dataflow fusion** connects a value of seed A to a use in seed B. About 96% of `.phpt` files have sequential control flow, so their dataflow captures most of their semantics. The connection is either a `$fusion = $a_var;` bridge that replaces a variable of B, a rename of B's variable to A's (so both programs alias the same value), or — for programs without variables — a bridge into one of B's literals.

  ```php
  /* seed A */
  $dom = new DOMDocument;…

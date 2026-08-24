---
repo: "roc-lang/roc-compiler-fuzz"
name: "roc-compiler-fuzz"
description: "Continual fuzzing of the roc compiler in CI jobs"
readmeQualityOk: true
url: "https://github.com/roc-lang/roc-compiler-fuzz"
homepage: "https://roc-lang.github.io/roc-compiler-fuzz/"
language: "Zig"
languages: ["Zig"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-03-01T05:32:54Z"
lastCommitAt: "2026-08-24T04:23:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 83
maintainers: ["bhansconnect"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ed0dad71e581608c18dbbee26dd0d4054c013109130c204d072101df922e54e/roc-lang/roc-compiler-fuzz"
fundingLinks: ["GITHUB:https://github.com/roc-lang"]
---

# Roc Compiler Fuzz

A github repo that attempts to continually fuzz the roc compiler.
Inspiration loosely take from TigerBeetle's [Rocket science of simulation testing talk](https://www.hytradboi.com/2025/c222d11a-6f4d-4211-a243-f5b7fafc8d79-rocket-science-of-simulation-testing). 

## How it works?

Roc Compiler Fuzz loads the latest roc commit every few hours and starts running our various fuzz targets.
After fuzzing for a while, failures are minimized, and the results are logged in [data.json](https://github.com/roc-lang/roc-compiler-fuzz/blob/HEAD/data.json).
These results are then deployed to https://roc-lang.github.io/roc-compiler-fuzz/.

This makes it easy for Roc developers to periodically check for fuzzing failures and improve the compiler.
Only the most recent failures are kepts around. Old bugs are forgotten until the fuzzer finds them again.

To help the fuzzer explore better, the fuzzing corpus is cached between runs.
This enables the fuzzer to basically pickup where it left off.

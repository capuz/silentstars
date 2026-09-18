---
repo: "0xdea/rhabdomancer"
name: "rhabdomancer"
description: "Vulnerability research assistant that locates calls to potentially insecure API functions in a binary file."
readmeQualityOk: true
url: "https://github.com/0xdea/rhabdomancer"
homepage: "https://hex-rays.com/ida-pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["reverse-engineering", "vulnerability-research", "ida-plugin", "ida-pro", "idalib", "rust"]
stars: 135
forks: 14
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-10-20T19:48:22Z"
lastCommitAt: "2026-09-18T14:02:43Z"
lastReleaseAt: "2025-01-17T11:59:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 46
maintainers: ["0xdea", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50fd2ce3ba7fc44e95a1c519bd9334953abd2921fb0826915038a73eb6833fb3/0xdea/rhabdomancer"
---

# rhabdomancer

> "The road to exploitable bugs is paved with unexploitable bugs."
>
> -- Mark Dowd

Rhabdomancer is a blazing fast IDA headless plugin that locates calls to potentially insecure API functions in
a binary file. Auditors can backtrace from these candidate points to find pathways allowing access to untrusted input.

## Features

- Blazing fast, headless user experience courtesy of IDA 9.x and idalib-rs Rust bindings.
- Support for C/C++ binary targets compiled for any architecture implemented by IDA.
- Bad API function call locations are printed to stdout and marked in the IDB.
- Known bad API functions are grouped in tiers of badness to help prioritize the audit work.
  - [BAD 0] High priority - Functions that are generally considered insecure.
  - [BAD 1] Medium priority - Interesting functions that should be checked for insecure use cases.
  - [BAD 2] Low priority - Code paths involving these functions should be carefully checked.
- The list of known bad API functions can be easily customized by editing `conf/rhabdomancer.toml`.

## Articles

- <https://hex-rays.com/blog/streamlining-vulnerability-research-idalib-rust-bindings>
-…

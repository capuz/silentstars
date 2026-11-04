---
repo: "0xdea/rhabdomancer"
name: "rhabdomancer"
description: "Vulnerability research assistant that locates calls to potentially insecure API functions in a binary file."
readmeQualityOk: true
url: "https://github.com/0xdea/rhabdomancer"
homepage: "https://hex-rays.com/ida-pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["reverse-engineering", "vulnerability-research", "ida-plugin", "ida-pro", "idalib", "rust"]
stars: 138
forks: 14
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-10-20T19:48:22Z"
lastCommitAt: "2026-11-04T11:27:55Z"
lastReleaseAt: "2025-01-17T11:59:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["0xdea", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e036ebbbc10b8ef66e921057f3d6552a8305d485b47c0148cd5f25bcc4537322/0xdea/rhabdomancer"
---

# rhabdomancer

> "The road to exploitable bugs is paved with unexploitable bugs."
>
> -- Mark Dowd

Rhabdomancer is a blazing-fast IDA headless plugin that locates calls to potentially insecure API functions in
a binary file. Auditors can backtrace from these candidate points to find pathways allowing access to untrusted input.

## Features

- Blazing-fast, headless user experience courtesy of IDA 9.x and idalib-rs Rust bindings.
- Support for C/C++ binary targets compiled for any architecture implemented by IDA.
- Bad API function call locations are printed to stdout and marked in the IDB.
  - Call locations in library code recognized by IDA (e.g., a statically linked runtime matched by FLIRT signatures) are
    labeled `(lib)`.
  - Calls through stubs (e.g., the `.plt` entries of ELF binaries or the import stubs of PE and Mach-O binaries,
    listed as thunks) are traced back to their callers.
  - In ELF binaries, a function is deliberately listed twice with the same call locations: once as its `.plt` stub
    (marked as thunk) and once as its import. Each call location is marked only once in the IDB.
- Known bad API functions are grouped in tiers of badness to help prioritize…

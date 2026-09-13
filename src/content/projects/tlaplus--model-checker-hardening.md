---
repo: "tlaplus/model-checker-hardening"
name: "model-checker-hardening"
description: "Hardening TLC and Apalache through systematic, differential, fuzz, and regression testing to improve the reliability of TLA+ model checking"
readmeQualityOk: true
url: "https://github.com/tlaplus/model-checker-hardening"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["apalache", "fuzzing", "testing", "tlaplus", "tlc"]
stars: 7
forks: 0
openIssues: 33
closedIssues: 13
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-10T14:21:21Z"
lastCommitAt: "2026-09-13T08:29:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 40
maintainers: ["konnov"]
openGraphImageUrl: "https://opengraph.githubassets.com/a35ddea11711da7d7b69608dc337b2554309f2cea04b2447fc87bd6e80873e21/tlaplus/model-checker-hardening"
---

# FuzzTLA

FuzzTLA is work-in-progress on the grant "Hardened Testing of TLA+ Model Checkers" supported by the TLA<sup>+</sup> Foundation.

The project uses Apalache's Java façade for its TLA+ intermediate representation to synthesize TLA+ specifications.

> [!TIP]
> This project is under active development. Expect plenty of changes and no backwards compatibility in 2026.

## Results

- [Conformance reports](https://github.com/tlaplus/model-checker-hardening/blob/HEAD/conformance/) document corpus-confirmed differences
  between TLC and Apalache, with counts, classifications, and reduced TLA+
  examples.
- [Filed findings](https://github.com/tlaplus/model-checker-hardening/blob/HEAD/findings/) document confirmed defects in the checked tools,
  grouped by subsystem and accompanied by reproductions.

## Requirements

- JDK 25
- Apache Maven 3.9.10 or newer

## Build and test

The Apalache Java façade is a 0.62.3 snapshot served by the Central Portal
snapshots repository. Independently, the build downloads the pinned Apalache
0.62.2 release archive from GitHub and verifies its SHA-256 digest. Compile and
test the project with:

```sh
make compile
make test
```

Build the executable…

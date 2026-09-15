---
repo: "rage/tmc-langs-rust"
name: "tmc-langs-rust"
description: "A library and CLI for supporting different programming languages in the TestMyCode programming assignment evaluator."
readmeQualityOk: true
url: "https://github.com/rage/tmc-langs-rust"
homepage: "https://tmc.mooc.fi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["tmc", "rust", "cli"]
stars: 13
forks: 9
openIssues: 5
closedIssues: 96
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2020-05-04T13:21:49Z"
lastCommitAt: "2026-09-15T08:55:08Z"
lastReleaseAt: "2020-07-27T06:38:18Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 55
maintainers: ["nygrenh", "Heliozoa"]
openGraphImageUrl: "https://opengraph.githubassets.com/377d5aa5864c517470c1cb563c68c891989a0f6abbea95b9d950937da8c74ca7/rage/tmc-langs-rust"
---

Framework for supporting different programming languages in TMC.

TMC-langs provides an interface that encapsulates everything needed to support a new language in TMC by providing functionality such as downloading exercises, running tests and submitting them. A CLI wrapper is provided so that it's fairly convenient to call from other languages like Ruby.

## Documentation

Documentation for the latest release is available at https://rage.github.io/tmc-langs-rust. Documentation is automatically built and deployed when creating a GitHub release.

Additional documentation for other aspects of TMC such as configuration file formats is included in the [docs](https://github.com/rage/tmc-langs-rust/blob/HEAD/docs) directory.

## Included projects

### tmc-langs-cli

A "frontend" for tmc-langs. A binary CLI client for TMC-langs for IDEs. Intended to be used programmatically, for a CLI meant for manual use see [tmc-cli-rust](https://github.com/rage/tmc-cli-rust).

### tmc-langs

The "backend". A library that provides a convenient API for implementing different frontends. A frontend (such as a CLI) should only depend on this library. The other libraries are considered internal.

###…

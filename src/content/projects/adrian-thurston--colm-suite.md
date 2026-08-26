---
repo: "adrian-thurston/colm-suite"
name: "colm-suite"
description: "Colm Programming Language and Ragel State Machine Compiler"
readmeQualityOk: true
url: "https://github.com/adrian-thurston/colm-suite"
language: "C++"
languages: ["C++", "Ragel"]
languagePcts: [63, 22]
topics: ["ragel", "colm"]
stars: 237
forks: 46
openIssues: 84
closedIssues: 56
watchers: 10
contributors: 32
recentReleases: 0
createdAt: "2019-09-02T14:50:06Z"
lastCommitAt: "2026-08-26T04:17:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 82
undervaluedScore: 36
maintainers: ["adrian-thurston", "philocalyst", "ardnew"]
openGraphImageUrl: "https://opengraph.githubassets.com/dccffa7f1ad8ba6bd9bc04d6048e6fe37336e9db7dabd70f2d1a15f04aafe910/adrian-thurston/colm-suite"
discussionCount: 1
---

# Colm Suite

The Colm Suite is a unified distribution of two closely related language tools:

- **Colm** (COmputer Language Machinery): A programming language designed for the analysis and [transformation of computer languages](https://www.program-transformation.org/Transform/TransformationSystems). Influenced primarily by [TXL](https://www.txl.ca/).

- **Ragel**: A state machine compiler that generates executable finite state machines from regular expressions and state machine specifications.

The two projects share components and have a build dependency, so a unified
repository simplifies development and building. The significant links are:

- The **FSM library** (`src/libfsm/`) -- finite state machine construction and manipulation, used by both Colm and Ragel.
- The **code generation intermediate language** (`src/cgil/`) -- written in Colm, used by both projects for target language code generation.
- Ragel's **frontend is written in Colm** (`src/ragel/*.lm`), so Colm must build first to bootstrap Ragel.

## Versioning

Every shipped component is versioned independently: colm, ragel, libfsm,
cgil and aapl each carry their own number, declared in `configure.ac`.
Suite releases…

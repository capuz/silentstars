---
repo: "filecoin-project/ref-fvm"
name: "ref-fvm"
description: "Reference implementation of the Filecoin Virtual Machine"
readmeQualityOk: true
url: "https://github.com/filecoin-project/ref-fvm"
homepage: "https://fvm.filecoin.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["filecoin", "rust", "webassembly"]
stars: 421
forks: 154
openIssues: 185
closedIssues: 802
watchers: 33
contributors: 56
recentReleases: 10
createdAt: "2021-11-10T17:34:10Z"
lastCommitAt: "2026-11-09T03:31:04Z"
lastReleaseAt: "2026-09-16T20:04:03Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 91
undervaluedScore: 42
maintainers: ["LesnyRumcajs", "rvagg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/235bcb612599b71a53997017a8f3499b8991b06259e41ef9977d36eafd536234/filecoin-project/ref-fvm"
discussionCount: 1
---

# Reference Filecoin VM implementation (v4; dev)

This repository contains the reference implementation of the Filecoin VM ([specs](https://github.com/filecoin-project/fvm-project)). It is written in Rust, and intended to be integrated via FFI into non-Rust clients (e.g. Lotus, Fuhon), or directly into Rust clients (e.g. Forest). FFI bindings for Go are provided in-repo, and developers are encouraged to contribute bindings for other languages.

See the [Project Website](https://fvm.filecoin.io/) for details.

## Build requirements

* Install [rustup](https://rustup.rs/).

## Build instructions

```sh
$ git clone https://github.com/filecoin-project/ref-fvm.git
$ cd ref-fvm
$ make
```

## Code structure

Here's what you'll find in each directory:

- `/fvm`
  - The core of the Filecoin Virtual Machine. The key concepts are:
    - `Machine`: an instantiation of the machine, anchored at a specific state root and epoch, ready to intake messages to be applied.
    - `Executor`: an object to execute messages on a `Machine`.
    - `CallManager`: tracks and manages the call stack for a given message.
    - Invocation container (conceptual layer, not explicitly appearing in code): the WASM…

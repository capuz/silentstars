---
repo: "fiorix/chan"
name: "chan"
description: "Your new Terminal and Workspace manager. A new kind of IDE."
readmeQualityOk: true
url: "https://github.com/fiorix/chan"
homepage: "https://chan.app/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 27]
topics: ["developer-tool", "file-browser", "graph-plotting", "linux", "macos", "markdown-editing", "productivity", "remote-control", "terminal-emulator", "tunneling"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-16T18:05:37Z"
lastCommitAt: "2026-10-31T18:59:44Z"
lastReleaseAt: "2026-06-02T13:29:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["fiorix"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1240905795/2e7d8dd9-621f-4c1e-9cde-fad735328216"
---

# Chan

This is the source code of Chan, an IDE in a single binary: a terminal emulator and multiplexer plus a workspace manager. Download binaries from [chan.app](https://chan.app) or build locally using the Makefile here.

Contributors and agents: start at [.agents/README.md](https://github.com/fiorix/chan/blob/HEAD/.agents/README.md); the practical guide is [CONTRIBUTING.md](https://github.com/fiorix/chan/blob/HEAD/CONTRIBUTING.md).

## Guides

- [docs/extensions.md](https://github.com/fiorix/chan/blob/HEAD/docs/extensions.md) - how Chan uses extensions and how to build one.
- [docs/config-reference.md](https://github.com/fiorix/chan/blob/HEAD/docs/config-reference.md) - every persisted configuration file and field.

## Design documents

The architecture is documented next to the code it describes. [design.md](https://github.com/fiorix/chan/blob/HEAD/design.md) is the whole-system reference (crate boundaries, runtime topology, bind vs tunnel, the devserver); each crate or surface below carries its own design of record.

Core:

- [crates/chan](https://github.com/fiorix/chan/blob/HEAD/crates/chan/design.md) - the CLI binary: dispatch, process lifecycle, service supervision,…

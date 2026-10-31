---
repo: "jdx/jouet"
name: "jouet"
description: "A toolkit CLI for coding agents."
readmeQualityOk: true
url: "https://github.com/jdx/jouet"
homepage: "https://jouet.jdx.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-30T14:20:27Z"
lastCommitAt: "2026-10-31T16:00:08Z"
lastReleaseAt: "2026-10-30T15:13:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 50
maintainers: ["jdx"]
openGraphImageUrl: "https://opengraph.githubassets.com/80fe613442b7d168ac6c1c1e7eb0b4e6536e6946cfb0f42d3cbaaabb2248900a/jdx/jouet"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://jdx.dev"]
discussionCount: 0
---

The shell chores agents keep scripting by hand, as one command each.

jouet (pronounced "zhweh", French for "toy") is a command-line toolkit for
coding agents. Agents rebuild the same few chores in every session: patching
files from Python heredocs, sleep-polling CI, hand-writing GraphQL for review
threads. The scripts look right, usually work, and fail in ways nobody
notices. jouet turns each chore into one command that never prompts, never
cuts output silently, and exits with a code an agent can act on.

> [!CAUTION]
> **jouet is in early development.** `jouet edit`, `jouet pr status`,
> `jouet pr threads` and `jouet wait` have shipped. Commands, flags, exit codes
> and JSON output may change incompatibly between releases.

## Install

```sh
mise use -g jouet
```

The short name needs mise 2026.10.25 or later; with an older mise, run
`mise use -g github:jdx/jouet`. Or use Cargo:

```sh
cargo install jouet --locked
```

Release archives for Linux, macOS (Apple Silicon) and Windows are on the
[releases page](https://github.com/jdx/jouet/releases), each with a signed
[packslip](https://packslip.dev). The glibc Linux archives need glibc 2.39 or newer; on older
distributions use the…

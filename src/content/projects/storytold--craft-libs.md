---
repo: "storytold/craft-libs"
name: "craft-libs"
description: "Rust libraries for the Craft Apps"
readmeQualityOk: true
url: "https://github.com/storytold/craft-libs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 414
forks: 805
openIssues: 126
closedIssues: 30
watchers: 6
contributors: 97
recentReleases: 0
createdAt: "2026-10-09T15:59:16Z"
lastCommitAt: "2026-11-11T11:23:12Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 74
undervaluedScore: 26
maintainers: ["dotCooCoo", "FredApps", "dylanmtaylor"]
openGraphImageUrl: "https://opengraph.githubassets.com/2467f21de1d8d239f0f15db40f0e28f4ca9e298ac5858cea3c7fa330c17fb5dd/storytold/craft-libs"
---

Craft App Libraries
===================

This repo contains libraries used by the various Craft Apps. It's a Rust monorepo workspace, and the libraries can be included by any Craft Apps that need them.

In the future this may grow to include non-Rust library code.

If any libraries grow beyond Craft App usage, eg. RAW format support, they may be promoted out and into their own libraries for the broader ecosystem to take advantage of.

## Layout

A Cargo workspace (edition 2024, resolver 3). Each library is a crate under `crates/<name>`, named
`craft-<name>`, with `version`, `edition`, `license` and `repository` inherited from the workspace
(`license.workspace = true`, and so on) and `[lints] workspace = true`. Register each crate in
`[workspace.dependencies]` in the root `Cargo.toml`.

Apps depend on a crate by git:

```toml
craft-<name> = { git = "https://github.com/storytold/craft-libs", rev = "<commit>" }
```

## Libraries

- [`craft-platform`](https://github.com/storytold/craft-libs/blob/HEAD/crates/platform/README.md): optional native dialog lifecycle, Linux/BSD desktop appearance observation and browser download ownership; application policy stays in the apps.

-…

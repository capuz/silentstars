---
repo: "storytold/craft-libs"
name: "craft-libs"
description: "Rust libraries for the Craft Apps"
readmeQualityOk: true
url: "https://github.com/storytold/craft-libs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 418
forks: 820
openIssues: 130
closedIssues: 41
watchers: 6
contributors: 187
recentReleases: 0
createdAt: "2026-10-09T15:59:16Z"
lastCommitAt: "2026-11-13T10:46:15Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 26
maintainers: ["dylanmtaylor", "alehel", "NicolasBohn"]
openGraphImageUrl: "https://opengraph.githubassets.com/791f526204ebda91b8c41fd145d58c4eadeae1b62d48de3ba2ae782498c0948a/storytold/craft-libs"
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

## Use a released version

The first coordinated release is **[v0.1.0](https://github.com/storytold/craft-libs/releases/tag/v0.1.0)**.
It gives consumers a fixed baseline while development continues on `main`. All five crates
share this version. They require Rust 1.95 or later; the UI integrations use egui 0.36.

Add only the crates you need, using the same tag for every craft-libs dependency:…

---
repo: "mrchantey/beet"
name: "beet"
description: "A malleable application framework"
url: "https://github.com/mrchantey/beet"
homepage: "https://beetstack.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["framework", "local-first", "malleable-software"]
stars: 128
forks: 7
openIssues: 15
closedIssues: 24
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2024-03-03T21:45:46Z"
lastCommitAt: "2026-06-25T06:40:10Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 43
maintainers: ["mrchantey"]
openGraphImageUrl: "https://opengraph.githubassets.com/954351cf28dc40f24e94f60d59ab8732e1665a3ae813dd726e277d7473b4067f/mrchantey/beet"
fundingLinks: ["GITHUB:https://github.com/mrchantey"]
---

# beet

  <p>
    <strong>A malleable application framework</strong>
  </p>
  <p>
  </p>
  <h3>
  </h3>
</div>

Beet is a framework for building user-modifiable applications, like smalltalk or hypercard. Everything from the CLI to client applications is a [Bevy App](https://bevy.org), and all structure and behavior is written in Entity Component System architecture.

> 🚧 Mind your step! 🚧
>
> Beet is under construction, if this project is of interest please come and say hi in the [Beetmash Discord Server](https://discord.gg/DcURUQCXtx).

**readiness meter**
- 🦢 ready to go: documented and tested
- 🐣 near stable: incomplete docs
- 🐉 highly experimental: here be dragons

The `beet` crate re-exports the crates below behind feature flags. Each can also be used standalone.

## Core

Cross-platform primitives shared by every other crate.

| Crate                                          | Status | Description                                          |
| ---------------------------------------------- | ------ | ---------------------------------------------------- |
| [`beet_core`](crates/beet_core)                | 🦢      | Cross-platform types, extension traits and a test runner |…

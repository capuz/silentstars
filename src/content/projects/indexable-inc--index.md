---
repo: "indexable-inc/index"
name: "index"
description: "One build graph for everything"
readmeQualityOk: true
url: "https://github.com/indexable-inc/index"
homepage: "https://ix.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [50]
topics: ["elixir", "nix", "nixpkgs", "rust", "dag"]
stars: 19
forks: 7
openIssues: 40
closedIssues: 2017
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2026-05-03T04:17:53Z"
lastCommitAt: "2026-07-30T06:07:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["andrewgazelka", "harivansh-afk"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a4f98d0323e93650100142e8d2ab81d4fe56ab07b397dd05572bbea10ccb988/indexable-inc/index"
---

# index

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/readme/globe-dark.svg">
  </picture>
</p>

index is a Nix monorepo in the spirit of [nixpkgs](https://github.com/NixOS/nixpkgs) and [Raycast extensions](https://github.com/raycast/extensions): one shared definition of the software everyone here runs. Inside: [packages](https://github.com/indexable-inc/index/blob/HEAD/packages/), patched toolchains ([Nix](https://github.com/indexable-inc/index/blob/HEAD/packages/nix/), [Clippy](https://github.com/indexable-inc/index/blob/HEAD/packages/llm-clippy/)), [NixOS and Home Manager modules](https://github.com/indexable-inc/index/blob/HEAD/modules/), [VM images](https://github.com/indexable-inc/index/blob/HEAD/images/), and [CI](https://github.com/indexable-inc/index/blob/HEAD/.github/workflows/). It is also the default world an [ix.dev](https://ix.dev) VM boots: ix is the runtime, index is what runs on it.

It exists because agents now write patches faster than upstream review can absorb them. A fix that takes an agent minutes can wait months in a review queue, and some projects refuse AI-written patches outright. Here the same change lands on main today,…

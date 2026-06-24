---
repo: "indexable-inc/index"
name: "index"
description: "Open-source NixOS images, modules, and agent tooling from ix: the OSS layer over the ix VM platform."
url: "https://github.com/indexable-inc/index"
homepage: "https://ix.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [43, 20]
topics: ["crdt", "health-checks", "ix", "loro", "minecraft", "nix", "nixos", "oci-images", "rust", "svelte"]
stars: 14
forks: 7
openIssues: 229
closedIssues: 296
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2026-05-03T04:17:53Z"
lastCommitAt: "2026-06-24T00:23:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 50
maintainers: ["andrewgazelka", "wyattgill9", "harivansh-afk"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc83d42e0051abcbb102859024c4e4ea3d00f312c3f58d237ac3a3a65d6235f7/indexable-inc/index"
---

</p>

  
  
</p>

  <picture>
    <source media="(prefers-color-scheme: dark)"  srcset="doc/assets/demo-dark.avif"  type="image/avif">
    <source media="(prefers-color-scheme: light)" srcset="doc/assets/demo-light.avif" type="image/avif">
    <source media="(prefers-color-scheme: dark)"  srcset="doc/assets/demo-dark.webp">
    <source media="(prefers-color-scheme: light)" srcset="doc/assets/demo-light.webp">
  </picture>
</p>

</p>

# Index

`index` is a shared, open-source monorepo of developer tools that anyone can
modify. The bet: one repo everyone can edit is the fastest way for all of us to
move. Add something useful, and everyone gets it.

It is one Nix flake holding ~45 packages (mostly Rust, with Python, Elixir,
TypeScript, and Svelte where they fit), a corpus of NixOS modules, fleet
examples, and the agent infrastructure that ties them together. Most packages have
a from-source page under [`doc/`](doc/index.md). To explore, point Claude at
this repo and ask whether anything here is useful for you.

## What's inside

### Agent infrastructure

The harness, governance, and tuning loop that runs coding agents (Claude Code and
Codex) across the fleet under one set of rules.…

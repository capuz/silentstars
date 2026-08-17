---
repo: "yukimemi/yui"
name: "yui"
description: "Target-as-truth dotfiles manager. Edit your live configs, source repo updates automatically via hardlink/junction/symlink."
readmeQualityOk: true
url: "https://github.com/yukimemi/yui"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "command-line-tool", "cross-platform", "dotfiles", "dotfiles-manager", "hardlink", "junction", "linux", "macos", "rust"]
stars: 12
forks: 0
openIssues: 2
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T02:12:41Z"
lastCommitAt: "2026-08-17T04:18:11Z"
lastReleaseAt: "2026-04-29T15:57:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["renovate[bot]", "yukimemi"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f21937659830ae0267e6451de10f56d9d04e4a227b0844cc472707f4845f5eb/yukimemi/yui"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg" />
  </picture>
</p>

  <b>結 — edit your live configs, the source repo updates itself.</b>
</p>

</p>

`yui` flips the chezmoi flow: instead of editing your source repo and
running `apply` to push changes out to `~`, you edit `~` directly and
the source follows automatically. The two sides share a backing inode
(hardlink / junction / symlink), so an app's write to the target *is*
a write to source.

It exists to fix three chezmoi pain points the author hit running
chezmoi for years:

1. **The edit-source-then-apply tax** — every config tweak became a
   two-step ceremony.
2. **Source ↔ target drift** — apps overwrite the target directly,
   and the user finds out at the next `chezmoi diff`.
3. **Untracked new files** — apps that create new files inside a
   managed directory aren't visible to chezmoi unless you remember
   to `chezmoi add` them.

## How it works

Your dotfiles repo is a normal directory tree. `yui apply` walks it
and links each file/directory into its target location:

| platform | files | directories |
|----------|-------|-------------|
|…

---
repo: "glennib/stakk"
name: "stakk"
description: "A CLI tool that bridges Jujutsu (jj) bookmarks to GitHub or Forgejo stacked pull requests"
readmeQualityOk: true
url: "https://github.com/glennib/stakk"
homepage: "https://crates.io/crates/stakk"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cli", "code-review", "developer-tools", "github", "jj", "jujutsu", "pull-requests", "rust", "stacked-diffs", "stacked-prs"]
stars: 31
forks: 5
openIssues: 3
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-19T18:58:37Z"
lastCommitAt: "2026-10-26T20:59:48Z"
lastReleaseAt: "2026-03-07T22:27:28Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 49
maintainers: ["renovate[bot]", "glennib"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b6360097f3d2f818cdd9152b72ee68f771856452ea3857f9e0c6910c6d9375f/glennib/stakk"
---

# stakk

**stakk** turns [Jujutsu](https://github.com/jj-vcs/jj) bookmarks into GitHub or Forgejo stacked pull requests.
Pick a stack, name the bookmarks that still need one, and stakk pushes and maintains one PR per bookmark:
correct base branches, a stack overview on every PR, no duplicates on re-runs.
It works with
[GitHub's native stacked pull requests](https://docs.github.com/en/pull-requests/how-tos/stacked-pull-requests): opt in
with `--native-stacks auto` and GitHub renders the stack itself and retargets PRs as the stack merges.

jj stays in charge of your commits and bookmarks; stakk acts only where that state has to exist on the forge.
It never calls `git` — everything goes through `jj`, so workspaces and non-colocated repos just work.

## Installation

Requires the [`jj`](https://github.com/jj-vcs/jj) CLI on your `PATH`, version 0.39.0 or newer.

```shell
mise use -g 'github:glennib/stakk'   # recommended
mise use -g 'cargo:stakk'            # from crates.io
cargo binstall stakk
cargo install stakk
nix run github:glennib/stakk         # nix, without installing
nix profile install github:glennib/stakk
```

Or download a binary from the [latest…

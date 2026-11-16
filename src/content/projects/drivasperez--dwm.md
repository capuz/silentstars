---
repo: "drivasperez/dwm"
name: "dwm"
description: "A simple jj/git worktree manager"
readmeQualityOk: true
url: "https://github.com/drivasperez/dwm"
homepage: "https://dwm.drpz.xyz"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["git", "jj", "worktree", "worktrees"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-17T15:32:51Z"
lastCommitAt: "2026-11-16T11:55:22Z"
lastReleaseAt: "2026-09-09T09:47:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 53
undervaluedScore: 24
maintainers: ["drivasperez"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b7cff5520ed6109c5f68d12073398e2179bd0781c05fa9e6217770db5ec3929/drivasperez/dwm"
---

# dwm

A TUI workspace manager for [jj](https://martinvonz.github.io/jj/) (Jujutsu VCS) and [git](https://git-scm.com/).

dwm creates, lists, and deletes workspaces stored under `<repo>/.dwm/worktrees/<name>/`, with a shell wrapper that auto-`cd`s into the selected workspace. It works with both jj and git repositories.

The first time you create a workspace in a repo, dwm adds `.dwm/` to your ignore rules — `.git/info/exclude` for git repos, `.gitignore` for jj-only repos — so the workspace dirs never end up tracked.

## Install

Homebrew:

```sh
brew install drivasperez/tap/dwm
```

Cargo:

```sh
cargo install dwm
```

Pre-built binaries and a shell installer are available on the [latest GitHub release](https://github.com/drivasperez/dwm/releases/latest).

## Shell setup

Run `dwm setup` interactively and it will offer to add the wrapper to your shell config and set up agent hooks automatically:

```sh
dwm setup
```

Or add it manually:

**Bash / Zsh** — add to `.bashrc` or `.zshrc`:

```sh
eval "$(dwm shell-setup)"
```

**Fish** — add to `~/.config/fish/config.fish`:

```fish
dwm shell-setup --fish | source
```

This wraps the `dwm` binary so that selecting a workspace…

---
repo: "mihirgupta0900/spawnpoint"
name: "spawnpoint"
description: "Spawn multi-repo worktree workspaces for feature development"
url: "https://github.com/mihirgupta0900/spawnpoint"
homepage: "https://pypi.org/project/spawnpoint/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "developer-tools", "git", "python", "workspace", "worktree"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-02-27T18:43:42Z"
lastCommitAt: "2026-06-12T18:38:25Z"
lastReleaseAt: "2026-07-01T07:07:24Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 15
maintainers: ["mihirgupta0900"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168744427/a69a25c7-d75b-46e8-938b-de3e229d04e4"
---

# Spawnpoint

Spawn multi-repo worktree workspaces for feature development.

Working on a feature that spans multiple repos? Spawnpoint creates a dedicated folder with git worktrees from each repo on the same branch, installs dependencies, and copies over config files — so you can start coding (or start a Claude session) immediately.

## Install

### macOS app

Download the latest `.dmg` from [Releases](https://github.com/mihirgupta0900/spawnpoint/releases?q=mac) and drag Spawnpoint into Applications. Lives in your menu bar — no terminal required.

Source: [`mac/`](./mac).

### CLI

```
pipx install spawnpoint
```

Or with pip:

```
pip install spawnpoint
```

This installs both `spawnpoint` and `sp` as CLI commands. All examples below use `sp` for brevity.

## Quick Start

```
sp create     # select repos, name a branch, spawn worktrees
sp create -y  # auto-select default base branches (skip base branch prompts)
sp list       # view all workspaces
sp add        # add repos to the current workspace
sp cleanup        # select and remove worktree workspaces
sp light-cleanup  # free space by deleting node_modules, .venv, etc. (keeps code)
```

On first run, Spawnpoint will ask you to…

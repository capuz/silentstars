---
repo: "nateberkopec/dotfiles"
name: "dotfiles"
description: "yup we're doin the thing"
readmeQualityOk: true
url: "https://github.com/nateberkopec/dotfiles"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [78]
stars: 151
forks: 5
openIssues: 20
closedIssues: 238
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-10-29T01:06:48Z"
lastCommitAt: "2026-10-26T21:00:09Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 98
undervaluedScore: 42
maintainers: ["nateberkopec"]
openGraphImageUrl: "https://opengraph.githubassets.com/12e4287268fa81c88f27ed7e2b3d7e57d609dffd45d426703a334af46aebe933/nateberkopec/dotfiles"
---

# Dotfiles

Set up a fresh host with one command for development in the way I like it.

This is intended exclusively for my personal use, though I encourage you to steal the patterns, tools and concepts within.

## What It Does

Most dotfiles repos just copy files to your home folder. This one does more. It installs apps, sets system settings, and more.

When you run `dotf run` it will:

- Bootstrap Homebrew and mise when needed
- Use `mise bootstrap` to converge tools, system packages, home files, macOS defaults, and LaunchAgents
- Run one-time migrations for existing machines
- Run the remaining imperative Steps (see `dotf steps`), then prune unused mise tools and cache entries

## Commands

| Command | What it does |
|---------|--------------|
| `dotf run` | Converge this host to committed tool pins and locks, then apply safe local cleanup. Safe to run many times; allows sudo authentication. |
| `dotf steps` | List every setup step with its class name and description. |
| `dotf help` | Show help |

## Installation

Clone this repo:

```bash
git clone https://github.com/nateberkopec/dotfiles.git ~/.dotfiles
```

Run the setup:

```bash
cd ~/.dotfiles
./bin/dotf run
```

For…

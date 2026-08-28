---
repo: "SebastienElet/dotfiles"
name: "dotfiles"
description: "🔧 My dotfiles"
readmeQualityOk: true
url: "https://github.com/SebastienElet/dotfiles"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 29]
topics: ["vim", "tmux", "zsh", "osx", "dotfiles", "shell", "chunkwm", "hacktoberfest"]
stars: 15
forks: 5
openIssues: 47
closedIssues: 72
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-08-14T17:18:23Z"
lastCommitAt: "2026-08-28T14:33:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 66
maintainers: ["SebastienElet"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ea32d4a7fb80783824cd6e35e115186cb82abfb69e7deed9efbd454f9fe8ed2/SebastienElet/dotfiles"
---

# Dotfiles

These dotfiles support macOS only. Linux, containers, and GitHub Codespaces are unsupported.

## Install

```bash
curl -fsSL \
  https://raw.githubusercontent.com/SebastienElet/dotfiles/main/install.sh | bash
```

If Git is unavailable, the installer exits without starting the Command Line
Tools installation. Run `xcode-select --install`, complete the macOS system
dialog, then rerun the command above after the installation finishes.

## Manual install

```bash
cd && \
  git clone --depth 1 https://github.com/SebastienElet/dotfiles.git .dotfiles && \
  cd .dotfiles && \
  make all
```

## Architecture decisions

Structural choices — installer, shell, editor, container runtime, agent
instructions — are recorded as ADRs in [`docs/adr/`](https://github.com/SebastienElet/dotfiles/blob/HEAD/docs/adr/README.md), one
file per decision, reconstructed from the git history. Only decisions still in
force are recorded; superseded ones survive as the "Alternatives écartées"
section of whichever decision replaced them.

Read the relevant ADR before changing one of these choices, and add a new ADR
when making one.

## Repository layout

See…

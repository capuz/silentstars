---
repo: "SebastienElet/dotfiles"
name: "dotfiles"
description: "🔧 My dotfiles"
readmeQualityOk: true
url: "https://github.com/SebastienElet/dotfiles"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 27]
topics: ["vim", "tmux", "zsh", "osx", "dotfiles", "shell", "chunkwm", "hacktoberfest"]
stars: 15
forks: 5
openIssues: 39
closedIssues: 81
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-08-14T17:18:23Z"
lastCommitAt: "2026-08-30T09:25:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 67
maintainers: ["SebastienElet"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5a9ca2f906b144c0e31b6999d836784f9cd0ea9283b97864c05cb8b08c35faa/SebastienElet/dotfiles"
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
  make minimal
```

Install the separately maintained optional profile with `make optional`.

## Architecture decisions

Structural choices — installer, shell, editor, container runtime, agent
instructions — are recorded as ADRs in [`docs/adr/`](https://github.com/SebastienElet/dotfiles/blob/HEAD/docs/adr/README.md), one
file per decision, reconstructed from the git history. Only decisions still in
force are recorded; superseded ones survive as the "Alternatives écartées"
section of whichever decision replaced them.

Read the relevant ADR before changing one of these choices, and add a new ADR
when…

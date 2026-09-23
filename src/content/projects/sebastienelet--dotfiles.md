---
repo: "SebastienElet/dotfiles"
name: "dotfiles"
description: "🔧 My dotfiles"
readmeQualityOk: true
url: "https://github.com/SebastienElet/dotfiles"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [76, 21]
topics: ["vim", "tmux", "zsh", "osx", "dotfiles", "shell", "chunkwm", "hacktoberfest"]
stars: 15
forks: 5
openIssues: 14
closedIssues: 115
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-08-14T17:18:23Z"
lastCommitAt: "2026-09-23T08:47:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 70
maintainers: ["SebastienElet"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9449c8e723abe3f9b1eff1ada07dfdd9138a4f86448de5ad73fa230d319395/SebastienElet/dotfiles"
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
  make moon && \
  "$HOME/.moon/bin/moon" exec --quiet install
```

Install the separately maintained optional profile with `make optional`.

Anarlog belongs to the optional profile, alongside Handy. Install it independently
with `moon exec repository:anarlog` (macOS 15 or newer).

[Minutes](https://useminutes.app/) is also optional. Install the desktop app with
`moon exec repository:minutes` (Apple Silicon, macOS 14 or newer), using the publisher's
`silverstein/tap` Homebrew cask. Native call capture requires macOS 15 or newer.
First launch downloads a local speech model;
transcription does not require…

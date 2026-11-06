---
repo: "SebastienElet/dotfiles"
name: "dotfiles"
description: "🔧 My dotfiles"
readmeQualityOk: true
url: "https://github.com/SebastienElet/dotfiles"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["vim", "tmux", "zsh", "osx", "dotfiles", "shell", "chunkwm", "hacktoberfest"]
stars: 15
forks: 5
openIssues: 4
closedIssues: 292
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2014-08-14T17:18:23Z"
lastCommitAt: "2026-11-06T13:20:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 72
maintainers: ["SebastienElet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f54452eb02f6f0128a8c479d6df723d007b0ff1d30211f10c4667b6680847df/SebastienElet/dotfiles"
---

# Dotfiles

These dotfiles support macOS only. Linux, containers, and GitHub Codespaces are unsupported.

## Install

The recommended path is to clone the repository, bootstrap Moon, and install
the minimal profile with Moon. Apple's Command Line Tools and working Git are
required. If `xcode-select --print-path` or `git --version` fails, run
`xcode-select --install`, complete the macOS system dialog, and wait for the
installation to finish before continuing.

```bash
cd && \
  git clone --depth 1 https://github.com/SebastienElet/dotfiles.git .dotfiles && \
  cd .dotfiles && \
  ./tooling/install-moon && \
  "$HOME/.moon/bin/moon" exec --quiet repository:install
```

The bootstrap downloads Bun 1.4.3, verifies its pinned SHA-256 checksum, and installs
Moon from `.github/actions/setup-moon/package.json` and its frozen `bun.lock` in a
temporary directory. It copies the native binary to `~/.moon/bin/moon` and prints
its executed version. Temporary downloads, dependencies and caches are removed; no
global pin or shell profile is written. Missing or invalid Moon configuration and
download/installation failures stop before workstation installation. Network access
is required on every…

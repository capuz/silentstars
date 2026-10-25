---
repo: "carakan/dotfiles"
name: "dotfiles"
description: "dotfiles across my multiples computers"
readmeQualityOk: true
url: "https://github.com/carakan/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [64]
topics: ["dotfiles", "tmux", "zsh"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2015-11-29T20:30:52Z"
lastCommitAt: "2026-10-25T22:10:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 59
maintainers: ["carakan"]
openGraphImageUrl: "https://opengraph.githubassets.com/88473b1eaa6d613fcfad45f001ed31e6da71bd45584b69e3e9f569a36ccad8f4/carakan/dotfiles"
---

# README

My custom .dotfiles setup across my multiple machines.

The configs are cross-platform. `./install` picks the right set per OS
(`install-darwin.yaml` / `install-linux.yaml`), and the machine-specific
pieces live in their own package directories (`packages/yabai/`,
`packages/macos/`, `packages/karabiner/` are macOS-only;
`bin/ubuntu_clean_rocm.sh` is Linux-only).

One caveat: this checkout was written for **Intel** macOS, where Homebrew
is Tier 3 — no bottles, so every formula compiles from source. The
workarounds that compensates for that (symlinking brew kegs at other
installs, and the once-compiled llvm parked in
`/usr/local/Cellar/.llvm-builds/`) are Intel-only; the scripts that
implement them detect the platform and do nothing on Apple Silicon or
Linux, where bottles and distro packages make them unnecessary. See
`AGENTS.md` §7 and `docs/brew-intel-symlink-workaround.md`.

# Usage

See the [usage instructions](https://github.com/carakan/dotfiles/blob/master/USAGE.md)

# Window Management (yabai + skhd)

[yabai](https://github.com/Christian-SC26/yabai) is a tiling window manager for macOS
(a fork of [asmvik/yabai](https://github.com/asmvik/yabai)).…

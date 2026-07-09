---
repo: "IlyasYOY/dotfiles"
name: "dotfiles"
description: "dotfiles to rule them all!"
readmeQualityOk: true
url: "https://github.com/IlyasYOY/dotfiles"
language: "Python"
languages: ["Python", "Lua", "Shell"]
languagePcts: [41, 33, 24]
topics: ["dotfiles", "neovim", "amethyst", "gnupg", "hammerspoon", "macos", "raspberry-pi", "wezterm", "codex"]
stars: 59
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-06-30T06:58:10Z"
lastCommitAt: "2026-07-09T20:47:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 46
maintainers: ["IlyasYOY", "IlyasYOY-Assistant"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae196f449c95f7fade0942567c93a700b72af63a6528b4bad2892f0324dd60e3/IlyasYOY/dotfiles"
---

# Dotfiles

Personal dotfiles and workstation bootstrap for my day-to-day development
setup.

It is centered on Neovim, shell tooling, tmux, terminal apps, Codex and
OpenCode configuration, and language support for Go, Java, Lua, Python, and
SQL.

> [!WARNING]
> This is a personal, opinionated setup that changes often. The bootstrap
> scripts assume my project layout under `~/Projects/IlyasYOY`, clone a few
> personal repositories, manage shell startup files, and still include
> macOS-specific desktop tooling. Review the scripts before running them on a
> machine you care about.

## Platform support

This repository is primarily built for macOS, with a smaller Raspberry Pi
bootstrap path for Raspberry Pi OS or Debian-based Linux on Raspberry Pi
hardware.

- macOS installs Homebrew formulae, casks, and App Store apps from
  `Brewfile.mac`, `Brewfile.mac.cask`, and `Brewfile.mac.mas`, then links
  desktop configuration such as WezTerm, Hammerspoon, and Amethyst.
- Raspberry Pi runs apt-based system bootstrap, configures the `sing-box`
  repository, installs Linuxbrew when needed, and installs a smaller CLI/dev
  tool set from `Brewfile.raspberry-pi`.

## Repository contents

-…

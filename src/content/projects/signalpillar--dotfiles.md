---
repo: "signalpillar/dotfiles"
name: "dotfiles"
description: "Configuration files"
readmeQualityOk: true
url: "https://github.com/signalpillar/dotfiles"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [47, 40]
stars: 7
forks: 4
openIssues: 12
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2011-07-05T19:06:04Z"
lastCommitAt: "2026-09-20T08:45:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 69
maintainers: ["claude", "signalpillar"]
openGraphImageUrl: "https://opengraph.githubassets.com/a061512bb8f0facf45cc68ca9401e94bfdcadeb3cf83e34cddbf39b0dec52895/signalpillar/dotfiles"
---

# Dotfiles and System Configuration

This repository manages user configuration across macOS and Linux virtual machines with chezmoi.

## Architecture

The repository manages two environments:

### macOS Host

- Homebrew manages command-line tools, applications, and Nerd Fonts through [Brewfile](https://github.com/signalpillar/dotfiles/blob/HEAD/Brewfile).
- The script [run_onchange_osx.sh.tmpl](https://github.com/signalpillar/dotfiles/blob/HEAD/run_onchange_osx.sh.tmpl) configures macOS system defaults and creates the Emacs application symlink.
- Ghostty serves as the primary terminal emulator with Starship prompt.

### Linux VM (Ubuntu)

- The script [run_onchange_setup_box.sh.tmpl](https://github.com/signalpillar/dotfiles/blob/HEAD/run_onchange_setup_box.sh.tmpl) installs system tools, desktop fonts, and development runtimes.
- Window managers include Sway and i3.
- Docker container environments run through the [dockerise/justfile](https://github.com/signalpillar/dotfiles/blob/HEAD/dockerise/justfile).

## Repository Structure

- [dot_agents/skills/](https://github.com/signalpillar/dotfiles/blob/HEAD/dot_agents/skills/): Custom agent skills.
-…

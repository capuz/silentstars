---
repo: "boykush/dotfiles"
name: "dotfiles"
description: "With this, moving is a breeze too."
originalDescription: "これで引越しも楽チン"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/boykush/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-07-27T16:39:47Z"
lastCommitAt: "2026-11-23T10:21:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 75
maintainers: ["boykush-renovate-app[bot]", "boykush", "boykush-github-management[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bfa3c229766d9a5e4b7cb20f1039cd39be947b77bad029f0551e224cd38469e/boykush/dotfiles"
---

# dotfiles

Configuration files for a development environment centered on mise.

## Setup

You do not need to pre-install mise on a new environment. The `bin/mise` bundled in the repository (the self-installing wrapper output by `mise generate bootstrap`) fetches and runs the mise binary itself.

### 1. Clone the repository

```bash
git clone git@github.com:boykush/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

### 2. Machine setup (GUI apps, fonts, CLI tools, and dotfiles in one go)

```bash
./bin/mise bootstrap
```

`mise bootstrap` is a single command that runs declarative setup steps in order against the current config. In this repo, it applies all of the following at once: **GUI apps and fonts from `[bootstrap.packages]` (brew-cask; apps go to `/Applications`, fonts to `~/Library/Fonts`)**, **the dotfiles repository itself from `[bootstrap.repos]` (`~/dotfiles` tracks `main`)**, **CLI tools from `[tools]`**, and **symlinks and in-file block edits from `[dotfiles]`**. Other `[bootstrap.*]` sections are not defined, so they are no-ops. Declarative steps converge, so re-running is safe; you can check the status with `./bin/mise bootstrap status`.

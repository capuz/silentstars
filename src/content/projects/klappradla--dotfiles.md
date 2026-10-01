---
repo: "klappradla/dotfiles"
name: "dotfiles"
description: "🏗 how I set up my system"
readmeQualityOk: true
url: "https://github.com/klappradla/dotfiles"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [46, 34]
topics: ["zsh", "dotfiles", "macos", "neovim", "tmux"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2015-04-30T21:36:13Z"
lastCommitAt: "2026-10-01T10:22:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 38
maintainers: ["klappradla"]
openGraphImageUrl: "https://opengraph.githubassets.com/e84aee1980526f141c6b8eb15bdd105f63da95d264a5bf7dca9120485f07a2b2/klappradla/dotfiles"
---

# dotfiles 🏗

How I set up my dev system.

## About

My dotfiles follow [holman](https://github.com/holman/dotfiles)'s concept of _"topical"_ organization. Each topic has its own directory with special filename conventions ⚡️:

- **bin/**: contains executables added to `$PATH`
- **topic/install**: script executed when installing/updating the topic
- **topic/link**: script executed when symlinking the topic
- **topic/name.symlink**: files picked up by the `link` script of the topic

_(Note: the `homebrew` topic is always evaluated first as other topics depend on it.)_

## Installation

_(on new computer: [set up ssh keys](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) first)_

```bash
# start in the home directory
cd

# clone repository
git clone --recursive git@github.com:klappradla/dotfiles.git

# navigate into the new directory
cd dotfiles

# run the install script
script/setup
```

To install topics individually:

```bash
script/install <topic>
```

To install _work_ specific stuff, set the `HOMEBREW_WORK` environment variable.

## Tips & Tricks

- Change/disable macOS' default keyboard shortcuts for _"Input…

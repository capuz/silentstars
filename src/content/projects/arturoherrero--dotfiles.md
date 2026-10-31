---
repo: "arturoherrero/dotfiles"
name: "dotfiles"
description: "A man's home is his castle. Never leave your dotfiles behind."
readmeQualityOk: true
url: "https://github.com/arturoherrero/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
topics: ["dotfiles", "bash-configuration", "vim-configuration"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2011-07-20T10:38:47Z"
lastCommitAt: "2026-10-31T09:52:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 34
maintainers: ["arturoherrero"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e827d985604157075064a6ac7611526bb716cfb22a3da141c21d91a0b438fee/arturoherrero/dotfiles"
---

# $HOME sweet ~/

Personal development setup with shell configurations, dotfiles, and utilities.

The dotfiles are symlinked from this repository to the home directory,
so the changes here automatically apply to the system.

## Before starting

* Scaled display: System Preferences -> Displays.
* SSH setup: Copy `~/.ssh/config` and private keys.

## Prerequisites

Install Homebrew:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Git:

```shell
brew install git
```

Create development directory:

```shell
mkdir projects
```

## Installation

Clone the repository:

```shell
cd projects
git clone git@github.com:arturoherrero/dotfiles.git
```

Run the bootstrap command:

```shell
cd dotfiles
sh bootstrap
```

## Update the dotfiles

To update the dotfiles, I can pull the latest change from the repository or I
can just use a shell function anywhere:

```shell
updateme
```

## Custom configuration

Using `system/zcustom.sh` file, I can add any custom configuration that is not
going to be persisted in the repository.

## Who made this?

This was made by [Arturo Herrero][1] under the MIT License.

[1]:…

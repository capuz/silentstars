---
repo: "sagebind/dotfiles"
name: "dotfiles"
description: "Dotfiles for my personal UNIX-like machines."
readmeQualityOk: true
url: "https://github.com/sagebind/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["dotfiles", "fish", "shell"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2014-12-31T21:38:46Z"
lastCommitAt: "2026-08-24T04:20:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 60
maintainers: ["sagebind"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cf088b4af2e72d927dbc05541445ab5961a28f32e3c03a74ca0e92d9a30c629/sagebind/dotfiles"
---

# Dotfiles

This is my dotfiles repo, which contains configuration files for my personal computers. There are many like it, but this one is mine. This repo exists so I can easily set up machines with my personalized configuration for various applications and terminal enhancements.

## Using it

Everything is managed using [mise](https://mise.jdx.dev), which provides dependencies used to setup dotfiles as well as globally available tools. First requirement is to install mise on your machine in whatever way works.

Once mise is installed, clone this repo and run `mise bootstrap` in the repo root to install the dotfiles. This can be as simple as:

```sh
git clone https://github.com/sagebind/dotfiles ~/.dotfiles
cd ~/.dotfiles
mise bootstrap
```

The `bootstrap` command will configure any desired system packages that should be installed, set up symlinks for all dotfiles, and also run any extra scripts to configure the machine. This includes both home-level changes _and_ system-wide changes (which will use `sudo` to apply). This is very opinionated, so make sure you really want all the configuration! If you _only_ want to set up the dotfiles symlinks, run `mise dotfiles apply` instead.…

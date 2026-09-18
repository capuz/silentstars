---
repo: "gwarf/dotfiles"
name: "dotfiles"
description: "My dotfiles for GNU/Linux, FreeBSD and macOS. Managed using chezmoi. Fish, Mutt/Neomutt, neovim, tmux, ..."
readmeQualityOk: true
url: "https://github.com/gwarf/dotfiles"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [24, 23]
topics: ["dotfiles", "dotfiles-linux", "dotfiles-macos", "chezmoi", "dotfiles-freebsd", "hacktoberfest"]
stars: 18
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2010-12-08T10:19:05Z"
lastCommitAt: "2026-09-18T14:03:11Z"
lastReleaseAt: "2022-11-19T09:53:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 69
maintainers: ["gwarf", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4325c6a20e0d250727f42d92421890b158c2fbb10f5d0f17b989c2523b57f9b8/gwarf/dotfiles"
---

# Gwarf's dotfiles

My somewhat messy and ever WIP **dotfiles** for GNU/Linux, FreeBSD and macOS
(mostly legacy now).

> Use at your own risk :)

## Chezmoi

> Everything is managed using [chezmoi](https://www.chezmoi.io).

Some files or configuration parts are only available for GNU/Linux, FreeBSD, or
macOS.

OS packages are installed via a [packages.yaml](https://github.com/gwarf/dotfiles/blob/HEAD/home/.chezmoidata/packages.yaml)
and using [run_onchange_install-packages.sh](https://github.com/gwarf/dotfiles/blob/HEAD/home/run_onchange_install-packages.sh.tmpl).

### Initializing

```shell
# Initialising chezmoi repository
chezmoi init git@github.com:gwarf/dotfiles.git
# Checking changes
chezmoi diff
# Applying changes
chezmoi apply
```

### Pulling changes

#### Pulling changes and reviewing them

```shell
# Pull latest changes and preview them
chezmoi git pull -- --autostash --rebase && chezmoi diff
# Applying them
chezmoi apply
```

#### Pulling changes and apply them without review

```shell
# Verbosy pull and apply changes
chezmoi update -v
```

### Pushing changes

> If auto-commit is enabled in `~/.config/chezmoi/chezmoi.toml`, changes made
> with `chezmoi edit` are…

---
repo: "zgeoff/dotfiles"
name: "dotfiles"
description: "m'dots"
readmeQualityOk: true
url: "https://github.com/zgeoff/dotfiles"
homepage: "https://dotfiles.geoffwhatley.com"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [44, 25]
topics: ["dotfiles", "awesomewm", "vim", "zsh", "chezmoi"]
stars: 15
forks: 1
openIssues: 3
closedIssues: 146
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-07-16T11:08:30Z"
lastCommitAt: "2026-11-25T13:17:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 72
maintainers: ["zgeoff-sync-bot[bot]", "zgeoff", "zgeoff-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe7e8b9462ab1886040a0bcf6ca7ac09c573d5f0cc646d7f10fc8128e281edf2/zgeoff/dotfiles"
---

# dotfiles

personal config for Arch & macOS, managed with [chezmoi](https://chezmoi.io).

- modern unix utils
- neovim
- zellij

## Layout

- `home/` — chezmoi source state
- `home/packages/` — `Yayfile` (Arch) and `Brewfile` (macOS)

## Setup on a new machine

```sh
sh -c "$(curl -fsLS get.chezmoi.io)" -- -b ~/.local/bin
chezmoi init --apply --source ~/projects/dotfiles https://github.com/zgeoff/dotfiles.git
```

`chezmoi init` prompts for machine data (email, GUI, personal, work) on first run;
answers are remembered. Re-run `chezmoi init` to change them.

Keys, fonts on WSL and the rest: [new machine guide](https://github.com/zgeoff/dotfiles/blob/HEAD/docs/guides/new-machine.md).

## Daily use

```sh
chezmoi update            # pull + apply changes from other machines
chezmoi edit ~/.zshrc     # edit a managed file (source state, incl. templates)
chezmoi apply             # render source state into $HOME
chezmoi diff              # preview what apply would change
chezmoi re-add            # capture direct edits to live files back into source
chezmoi cd                # subshell in this repo
```

Changed source files are auto-staged (`git.autoAdd`); commit and push by hand.

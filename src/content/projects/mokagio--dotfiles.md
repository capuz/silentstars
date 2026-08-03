---
repo: "mokagio/dotfiles"
name: "dotfiles"
description: "My dotfiles"
readmeQualityOk: true
url: "https://github.com/mokagio/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2015-02-02T09:28:44Z"
lastCommitAt: "2026-08-03T06:42:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 67
maintainers: ["mokagio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/539c7a1e94c31b5bf45ea0c947eaa8d0978539e8bbfa99fc724f801ce46074b6/mokagio/dotfiles"
---

# dotfiles

These are my dotfiles, in the hope to simplify the transition to any new machine.

## Install

1. The starting point is Xcode, and its Command Line Tools which you can install via `xcode-select --install`
1. Accept the Xcode license: `sudo xcodebuild -license` — `setup.sh` aborts otherwise
1. You'll now have `git`, use it to clone this repo
1. Install [Homebrew](https://brew.sh/)
1. Run the `setup.sh` script.
   It symlinks all the dotfiles to `$HOME` and installs the other tools.
   `brew bundle` may look unresponsive — it's actually just installing casks silently.
1. Early on, `setup.sh` installs 1Password and the `op` CLI, opens the app, and waits.
   Sign in, then turn on Settings → Developer → "Integrate with 1Password CLI", then press enter.
   Everything below that needs a credential — the GPG key, GHE access, `gh auth login` — comes from there.
1. Open and configure Dropbox, as it contains the config folders for other apps

### After `setup.sh`

1. Set Zsh as the default shell: `chsh -s $(which zsh)` (see [Zsh notes](#zsh) below if this fails)
1. `gh auth login` so the GitHub CLI extensions installed by `setup.sh` can actually talk to GitHub
1. Bootstrap access…

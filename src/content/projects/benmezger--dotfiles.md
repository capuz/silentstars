---
repo: "benmezger/dotfiles"
name: "dotfiles"
description: "My collection of dotfiles"
readmeQualityOk: true
url: "https://github.com/benmezger/dotfiles"
language: "Python"
languages: ["Python", "Shell", "Emacs Lisp"]
languagePcts: [33, 29, 22]
topics: ["dotfiles", "osx", "config", "unix", "shell", "tmux", "i3", "vim", "chezmoi", "archlinux"]
stars: 116
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-03-14T17:15:26Z"
lastCommitAt: "2026-07-23T06:16:10Z"
lastReleaseAt: "2026-03-30T07:52:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 41
maintainers: ["benmezger"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2b472c78c5e49acca88722a90ae29a3239e12aff692ca1145a9409bded86b7f/benmezger/dotfiles"
---

# Ben Mezger's `.dotfiles`
My personal dotfiles.

You will find my `dotfiles` in the
[`chezmoi`](https://github.com/benmezger/dotfiles/tree/main/chezmoi)
directory.

## Requirements

- [Chezmoi](http://chezmoi.io/)
- Arch Linux or MacOS

## Installation

**⚠️ Note:** _If you're not me, you won't have access to my 1Password
account. To prevent chezmoi from applying files with secrets, set the
`SECRETS_OFF=1` environment variable. If you do not use this flag,
chezmoi will fail when attempting to connect to my 1Password account
¯\\\_(ツ)\_/¯._

```shell
SECRETS_OFF=1 chezmoi init https://github.com/benmezger/dotfiles.git -S ~/dotfiles
```

I recommend using my `.dotfiles` as a reference rather than applying
them directly. They contain many personal configurations that may not
suit your setup, and some depend on specific files, packages, and
directory structures (e.g. org-mode files in Emacs).

## Applying changes
Use `chezmoi` to apply the dotfiles:

``` shell
chezmoi apply -v
```

## Environment Variables

The following environment variables can be used to configure `chezmoi`
during initialization and when applying changes:

- `ASK`: Set to `1` to enable prompts in `chezmoi`.
-…

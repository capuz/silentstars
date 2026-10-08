---
repo: "gnugat/dotfiles"
name: "dotfiles"
description: "🔵 How I backup, restore and synchronise my shell / system preferences and settings."
readmeQualityOk: true
url: "https://github.com/gnugat/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["dotfiles"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2014-03-24T18:04:08Z"
lastCommitAt: "2026-10-08T10:51:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 48
maintainers: ["gnugat"]
openGraphImageUrl: "https://opengraph.githubassets.com/9efc187bdb3d5664aca140415c4d41948f6dccab2f1e2c46b5d2e5f5858a383c/gnugat/dotfiles"
---

# 🔵 Super Secret Dotfiles (SSDF)

This repository helps me backup, restore, synchronise and share
my shell / system preferences and settings.

> ℹ️  **Requirements**:
> - 🍊 Ubuntu (`apt`), or 🍏 Mac OS (`brew`)
> - 💲 `bash` to run the installation scripts
> - 🐙 `git` to clone the repo, or 🌐 `curl` and 📦 `tar` to download it

## 🚀 Installation

Clone the repository in `~/.dotfiles`, then run its root `install.sh` script:

```shell
git clone git@github.com:gnugat/dotfiles.git ~/.dotfiles && cd ~/.dotfiles && bash ./install.sh
```

Once the script is done, don't forget to run `source ~/.profile` to reload the config.

🍏 To install on Mac OS (will install homebrew 🍺):

```shell
BRANCH="main" \
    ; mkdir -p "${HOME}/.dotfiles" \
    && curl -fsSL "https://github.com/gnugat/dotfiles/archive/${BRANCH}.tar.gz" \
    | tar -xz -C "${HOME}/.dotfiles" --strip-components=1 \
    && cd "${HOME}/.dotfiles" \
    && bash ./install.mac.sh
```

---

🏷️ Instead of installing everything, a list of tags can be specified by setting `SSDF_TAGS`:

```shell
BRANCH="main" \
    ; mkdir -p "${HOME}/.dotfiles" \
    && curl -fsSL "https://github.com/gnugat/dotfiles/archive/${BRANCH}.tar.gz" \…

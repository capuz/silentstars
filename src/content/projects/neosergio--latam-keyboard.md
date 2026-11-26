---
repo: "neosergio/Latam-Keyboard"
name: "Latam-Keyboard"
description: "macOS keyboard layouts for Latin American keyboards"
readmeQualityOk: true
url: "https://github.com/neosergio/Latam-Keyboard"
homepage: "https://infante.io/latam-keyboard/"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["keyboard", "keyboard-layout", "latin-america", "spanish", "macos", "latam"]
stars: 257
forks: 62
openIssues: 1
closedIssues: 11
watchers: 7
contributors: 3
recentReleases: 2
createdAt: "2017-01-23T17:26:05Z"
lastCommitAt: "2026-11-26T23:34:37Z"
lastReleaseAt: "2026-11-26T23:36:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 37
maintainers: ["neosergio"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b2b55320ad918fb05397f4ace7cf82e88e4cc2b15eec5100cd1dbfe7cb12400/neosergio/Latam-Keyboard"
---

# Latam-Keyboard

macOS keyboard layouts for Latin American keyboards.

Apple's own Latin American layout doesn't match many of these keyboards. For example, `<` and `>` often end up on the wrong key on external keyboards. These layouts follow the labels on the keys, keep the layout's own characters for shortcuts like Cmd+`+`, and tell macOS they're for Spanish.

**¿Prefieres leerlo en español?** La página del proyecto explica cómo instalarlo y qué tipo elegir: [infante.io/latam-keyboard](https://infante.io/latam-keyboard/).

## Install

Install with [Homebrew](https://brew.sh):

```
brew install --cask neosergio/tap/latam-keyboard
```

Homebrew will ask for your password, because the layouts are installed for all users in `/Library/Keyboard Layouts`.

Log out and back in, then go to **System Settings > Keyboard > Input Sources > Edit > +**. The layouts are listed under **Spanish**, or you can search for "Latin American". Because they're marked as Spanish, apps like Word check spelling in Spanish while you type with them.

To update to a new version:

```
brew upgrade --cask latam-keyboard
```

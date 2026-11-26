---
repo: "neosergio/Latam-Keyboard"
name: "Latam-Keyboard"
description: "A Mac Keyboard Layout for latin american keyboards"
readmeQualityOk: true
url: "https://github.com/neosergio/Latam-Keyboard"
language: "Swift"
languages: ["Swift"]
languagePcts: [90]
topics: ["keyboard", "keyboard-layout", "latin-america", "spanish", "macos"]
stars: 257
forks: 62
openIssues: 0
closedIssues: 11
watchers: 7
contributors: 3
recentReleases: 1
createdAt: "2017-01-23T17:26:05Z"
lastCommitAt: "2026-11-26T13:00:20Z"
lastReleaseAt: "2026-11-26T13:03:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 33
maintainers: ["neosergio"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e766430888fd0b6bb6bc0e4b5601cce6abcb0021b7eb334fd06a8bcee1f2392/neosergio/Latam-Keyboard"
---

# Latam-Keyboard

macOS keyboard layouts for Latin American keyboards.

Apple's own Latin American layout doesn't match many of these keyboards. For example, `<` and `>` often end up on the wrong key on external keyboards. These layouts follow the labels on the keys, keep the layout's own characters for shortcuts like Cmd+`+`, and tell macOS they're for Spanish.

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

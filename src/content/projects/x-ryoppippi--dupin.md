---
repo: "x-ryoppippi/dupin"
name: "dupin"
description: "A lightweight macOS launcher"
readmeQualityOk: true
url: "https://github.com/x-ryoppippi/dupin"
homepage: "https://dupin.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 15
forks: 1
openIssues: 29
closedIssues: 36
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-11-21T16:40:14Z"
lastCommitAt: "2026-11-23T04:06:23Z"
lastReleaseAt: "2026-11-21T21:54:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 86
undervaluedScore: 47
maintainers: ["ryoppippi"]
openGraphImageUrl: "https://opengraph.githubassets.com/497a049fb6771e7aa91536ce8c95caf5b886115d51cd8d8398fa5c252e5c3c9c/x-ryoppippi/dupin"
fundingLinks: ["GITHUB:https://github.com/ryoppippi"]
---

> A lightweight, resident launcher for Apple silicon Macs.

- Fuzzy-search and open apps, by any name macOS knows them by
- Space on an empty query searches files with Spotlight; `in` and Space search inside them; `define` and Space looks up a word in macOS dictionaries
- A hotkey (⌘Space by default) shows the panel at once, on Liquid Glass
- An optional shader animates behind the panel and reacts to typing; bring your own WGSL, as with Ghostty's custom shaders ([examples](https://github.com/x-ryoppippi/dupin/blob/HEAD/examples/shaders))

## Quick start

Free ⌘Space first: turn off Spotlight's shortcut and unassign it in any other launcher ([how](https://github.com/x-ryoppippi/dupin/blob/HEAD/docs/configuration.md#freeing-the-hotkey)). Then install it with Homebrew (`dupin@nightly` for builds of `main`); it [updates itself](https://github.com/x-ryoppippi/dupin/blob/HEAD/docs/configuration.md#updates):

```sh
brew install --cask x-ryoppippi/tap/dupin
```

Or build it with Nix:

```sh
nix build .#dupin
open result/Applications/Dupin.app
```

## Documentation

See [docs/](https://github.com/x-ryoppippi/dupin/blob/HEAD/docs/README.md) for using, configuring and developing Dupin.

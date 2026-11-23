---
repo: "Hammerspoon/Hammerspoon2"
name: "Hammerspoon2"
description: "macOS desktop automation for programmers. Making the runtime, funtime."
readmeQualityOk: true
url: "https://github.com/Hammerspoon/Hammerspoon2"
language: "Swift"
languages: ["Swift"]
languagePcts: [89]
stars: 167
forks: 20
openIssues: 6
closedIssues: 156
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2025-10-22T22:11:15Z"
lastCommitAt: "2026-11-23T12:24:46Z"
lastReleaseAt: "2026-08-24T13:16:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 43
maintainers: ["cmsj", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4e4a598e41b0155401f8312887441b471f6b24b6775a779ba8726bbce6c796b/Hammerspoon/Hammerspoon2"
discussionCount: 0
---

# Hammerspoon 2

## What is Hammerspoon?

This is a tool for powerful automation of macOS. At its core, Hammerspoon is just a bridge between the operating system and a JavaScript scripting engine.

What gives Hammerspoon its power is a set of modules that expose specific pieces of system functionality, to the user. With these, you can write JavaScript to control many aspects of your macOS environment.

The first version of Hammerspoon used Lua for its scripting engine, this is a modernized rewrite that uses the same JavaScript engine as Safari.

## Minimum requirements

Hammerspoon 2 requires macOS 27 or later.

## How do I install it?

### Manually

 * Download the [latest release](https://github.com/Hammerspoon/Hammerspoon2/releases)
 * Drag `Hammerspoon 2.app` from your `Downloads` folder to `/Applications`

### Homebrew

```bash
brew install --cask hammerspoon/tap/hammerspoon2
```

This also puts the `hs2` command line tool on your `PATH`. Hammerspoon 2 updates itself, so `brew upgrade` leaves it alone unless you pass `--greedy`.

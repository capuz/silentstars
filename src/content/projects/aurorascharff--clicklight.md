---
repo: "aurorascharff/ClickLight"
name: "ClickLight"
description: "A macOS menu bar app that highlights your clicks for demos, recordings, UX reviews, and better click visibility."
url: "https://github.com/aurorascharff/ClickLight"
homepage: "https://clicklight.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [77]
topics: ["macos", "appkit", "cursor-highlighter", "live-demo", "menu-bar-app", "presentation-tools", "swift", "click-highlighter"]
stars: 279
forks: 15
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-24T12:09:24Z"
lastCommitAt: "2026-06-27T00:36:57Z"
lastReleaseAt: "2026-05-29T11:07:47Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 33
maintainers: ["aurorascharff", "jamesmontemagno", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee855f1b79e17fdae5fafa4a55eabc0b7d2ddf296a22a232e18129a847b985fc/aurorascharff/ClickLight"
---

# ClickLight

A small macOS menu bar app that highlights your clicks during live demos, screen sharing, UX reviews, and other moments where people need to follow what you are doing.

Screen recorders like Screen Studio and CleanShot can add click effects after the fact. ClickLight is for the live moment itself, when you need the audience to see exactly when you clicked without interrupting your flow.

## Demo

https://github.com/user-attachments/assets/d00d36ea-dd80-4cf4-a0f6-f3bf4b132138

## Use Cases

- Live product demos where viewers need to follow exactly what you clicked
- UX reviews where the delay between click and response matters (the original motivation for ClickLight)
- Bug reports where a recording should show both the action and the app behavior
- Tutorials, workshops, and conference talks where pointer movement alone is easy to miss
- Pairing with a larger macOS pointer so clicks stay visible in live demos and recordings

## Install

With Homebrew:

```bash
brew tap aurorascharff/clicklight https://github.com/aurorascharff/ClickLight
brew install --cask aurorascharff/clicklight/clicklight
```

Homebrew installs are updated with `brew upgrade --cask clicklight`.…

---
repo: "SummaDiaboli/alternate-player-twitch"
name: "alternate-player-twitch"
description: "A Chrome extension that replaces the Twitch player with a more feature-rich alternative"
readmeQualityOk: true
url: "https://github.com/SummaDiaboli/alternate-player-twitch"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 15
forks: 3
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-14T13:28:42Z"
lastCommitAt: "2026-11-27T16:28:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 43
maintainers: ["SummaDiaboli"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b047939df5bc60334e8f28bdeb7fc5b1c7b986091dcfcf337fb6532519082b6/SummaDiaboli/alternate-player-twitch"
---

# Alternate Player for Twitch.tv

A Chrome/Chromium browser extension that replaces the native Twitch player with a custom HLS-based player, giving you full control over buffering, stream quality, chat layout, and playback.

## Background

This project is based on the original **Alternate Player for Twitch.tv** extension. After Chrome and Chromium migrated to **Manifest V3**, the original extension stopped working. MV3 introduced breaking changes to the extension APIs, particularly around request header modification (replacing `webRequest` with `declarativeNetRequest`) and content security policy restrictions that blocked inline script injection.

I found the original source code online and took over maintenance, updating the extension to be fully MV3-compatible and restoring functionality that had broken during the transition.

## What it does

When you visit a Twitch channel page, the extension detects whether the channel is live and redirects you to its own player page instead of the standard Twitch player. This player:

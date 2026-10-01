---
repo: "iobroker-community-adapters/ioBroker.plex"
name: "ioBroker.plex"
description: "Connect your Plex Media Server to ioBroker"
readmeQualityOk: true
url: "https://github.com/iobroker-community-adapters/ioBroker.plex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["plex", "plex-media-server", "tautulli", "iobroker", "iobroker-adapter", "smarthome"]
stars: 8
forks: 7
openIssues: 3
closedIssues: 71
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2019-04-18T10:39:48Z"
lastCommitAt: "2026-10-01T10:23:26Z"
lastReleaseAt: "2020-02-26T19:40:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 83
maintainers: ["dependabot[bot]", "mcm1957", "ioBroker-Bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce1e6a23adeb09e4b0c93d2eb90e0978606475e40fa1a038e0f6acfabac0c11a/iobroker-community-adapters/ioBroker.plex"
---

# ioBroker.plex
Integration of the Plex Media Server in ioBroker (with or without Plex Pass). Furthermore, Tautulli integration.

**Table of contents**
1. [Features](#1-features)
2. [Setup instructions](#2-setup-instructions)
   1. [Basic setup](#21-basic-setup)
   2. [Advanced Setup](#22-advanced-setup-plex-pass-or-tautulli)
3. [Channels & States](#3-channels--states)
   1. [with Basic Setup](#31-with-basis-setup)
   2. [with Advanced Setup](#32-with-advanced-setup)
4. [Changelog](#changelog)
5. [Licence](#license)

## 1. Features
- Receive detailed media information about the current played media item (such as video bitrate, codec, subtitle information, audio; see [Advanced setup](https://github.com/iobroker-community-adapters/ioBroker.plex/blob/master/README-states.md#with-advanced-setup) for a full list)
- Receive `events` from Plex (via [Plex Webhook](https://support.plex.tv/articles/115002267687-webhooks/#toc-0) and [Plex Notifications](https://support.plex.tv/articles/push-notifications/#toc-0) using Plex Pass or via Tautulli, [__see setup!__](#22-advanced-setup-plex-pass-or-tautulli))
- Playback control for players
- Retrieve `servers`
- Retrieve `libraries`
- Retrieve all…

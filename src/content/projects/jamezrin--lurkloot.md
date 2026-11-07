---
repo: "jamezrin/lurkloot"
name: "lurkloot"
description: "Automatically farm Twitch and Kick drops from your browser or a headless Docker setup."
readmeQualityOk: true
url: "https://github.com/jamezrin/lurkloot"
homepage: "https://lurkloot.jamezrin.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["drops", "extension", "kick", "twitch", "gaming", "streaming"]
stars: 50
forks: 3
openIssues: 24
closedIssues: 248
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-31T17:28:53Z"
lastCommitAt: "2026-11-07T09:29:27Z"
lastReleaseAt: "2026-08-03T12:39:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["jamezrin", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/673a082bc4361bff959a6a21a5ccb555841cf294822a76aecce8cc97c549d0ec/jamezrin/lurkloot"
discussionCount: 1
---

Farm Twitch and Kick rewards automatically.<br>
  It finds a live target, stays on it, switches when that target stops counting, and claims what you earn.

  ·
  ·

It is free, fully open source, and runs as a browser extension or, in beta, as a headless CLI with Docker.

## What it farms

**Twitch**

- Drops
- Subscriber badges
- Channel points
- Watchlist
- Fortnite and NoPixel, through their Twitch channel extensions

**Kick**

- Drops
- Daily rewards
- Watchlist

Each platform has its own switch, games, order, and channel list. Turn on one, or both.

## How it works

You sign in to Twitch or Kick as usual, enable the platform, and leave Lurkloot running. It detects what you can still earn, picks a live channel that counts toward it, and switches on its own when the stream goes offline, the reward finishes, or a better target becomes available.

Most watching happens in the background, with no stream video and no video ads. If a watch cannot continue that way, Lurkloot opens a muted tab for that channel. That tab plays the stream, so a platform ad can run there.

The popup is one workspace for both platforms. The queue shows what is being farmed. Pin campaigns and drag them…

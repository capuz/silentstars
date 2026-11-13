---
repo: "twlite/music-bot"
name: "music-bot"
description: "The only self-hostable discord music bot you will ever need, has a cool website too ✌️"
readmeQualityOk: true
url: "https://github.com/twlite/music-bot"
homepage: "https://music-bot.twlite.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["dashboard", "discord-player", "javascript", "music-bot", "web", "express", "mern-stack", "mongodb", "nextjs", "redis"]
stars: 26
forks: 4
openIssues: 5
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-11-05T05:54:32Z"
lastCommitAt: "2026-11-13T18:31:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 44
maintainers: ["twlite"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d18d67428e4c36e9d481aa3c8a13ee92ae2416357fe05caa5194bec845ce71b/twlite/music-bot"
fundingLinks: ["PATREON:https://patreon.com/twlite"]
---

# Music Bot

A self-hosted Discord music bot with a browser dashboard. Slash commands and the dashboard control the same per-server Discord Player v8 queue. MongoDB keeps your volume, repeat mode, equalizer, effects and saved playlists. Redis holds expiring dashboard sessions.

Features include search and autocomplete, saved private or public playlists, previous/next track, pause/resume, repeat, shuffle, a 15-band equalizer, bass and vocal boost, 8D audio and optional crossfade. Playback uses Remedia, either embedded in the bot or on a separate server. A separate Bun source host provides YouTube, Spotify, Apple Music and SoundCloud discovery and streams. The dashboard remains a Next.js Pages Router application.

The screenshot shows the earlier layout. The current dashboard adds queue management, synced lyrics and a Sound tab; see [dashboard controls](https://github.com/twlite/music-bot/blob/HEAD/docs/dashboard.md).

**Migration status:** this branch uses a development release of Discord Player. Local builds, tests and native playback checks are described in [validation](https://github.com/twlite/music-bot/blob/HEAD/docs/validation.md). Live Discord/provider playback and the…

---
repo: "GeiserX/telegram-slskd-local-bot"
name: "telegram-slskd-local-bot"
description: "Telegram bot that turns a song name into a lossless file in your library: resolves it on Spotify, searches Soulseek through slskd, ranks the copies and lets you hear them first. Chat delivery sends the track in Telegram instead. Docker-ready."
readmeQualityOk: true
url: "https://github.com/GeiserX/telegram-slskd-local-bot"
homepage: "https://geiserx.github.io/telegram-slskd-local-bot/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["downloader", "flac", "music", "slskd", "soulseek", "spotify", "telegram-bot", "homelab", "lossless", "music-downloader"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T16:19:12Z"
lastCommitAt: "2026-10-13T10:58:06Z"
lastReleaseAt: "2026-02-08T20:48:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 55
maintainers: ["GeiserX", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1152269326/91fd2960-21a3-459a-878e-402256975a0a"
fundingLinks: ["GITHUB:https://github.com/GeiserX", "PATREON:https://patreon.com/geiser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/geiser", "THANKS_DEV:https://thanks.dev/u/gh/geiserx"]
---

**telegram-slskd-local-bot** is a Telegram bot, run in Docker next to your [slskd](https://github.com/slskd/slskd), that turns a song name typed on your phone into a lossless file in your music library. It looks the song up on Spotify, searches Soulseek, ranks the lossless copies by duration, bit depth and source with any lossy copies listed below them, and sends you the file in the chat so you can listen to it and read its lossless check before it is saved as `Artist - Title` in its own format. Doing the same by hand in the slskd web UI means reading file lists, guessing which copy is the studio version and finding out after the fact that the FLAC was an MP3.

## Features

- Send a song name; the bot resolves artist, title, album and duration on Spotify and searches Soulseek through your slskd for every audio format: lossless (FLAC, WAV, AIFF, ALAC, APE, WavPack, TTA, TAK) and lossy (MP3, AAC, M4A, Ogg, Opus, WMA).
- Lists every lossless copy of known length before every lossy one, so a song with no lossless copy still gets the best MP3 or AAC. Within each group it ranks by duration against Spotify, bit depth and sample rate (hi-res first) or bitrate, free slots, speed and file…

---
repo: "antlis/tg-media-bot"
name: "tg-media-bot"
description: "Telegram media downloader bot — yt-dlp powered, 1000+ sites plus a headless-browser fallback for JS-only players, tagged MP3 / inline-playable MP4, uploads up to 2GB. Docker-ready."
readmeQualityOk: true
url: "https://github.com/antlis/tg-media-bot"
homepage: "https://antlis.is-a.dev/tg-media-bot"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["telegram", "aiogram", "docker", "ffmpeg", "media-downloader", "python", "self-hosted", "telegram-bot", "yt-dlp"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-05-25T20:28:01Z"
lastCommitAt: "2026-09-29T10:03:56Z"
lastReleaseAt: "2026-09-23T08:53:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 47
maintainers: ["antlis", "killuazoldyckreal"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4006e5d6917f3effab9d778235e026c70cf7269884d6e59745d7080e05c27d0/antlis/tg-media-bot"
---

# tg-media-bot

A lightweight, self-hosted Telegram media downloader bot built with Python.

**🌐 [Website & overview](https://antlis.is-a.dev/tg-media-bot/)**

## Overview

This bot downloads media from 1000+ platforms using yt-dlp and uploads the files back to Telegram. It's designed for homelab usage with minimal resource consumption and no external dependencies beyond yt-dlp and ffmpeg.

**Key Characteristics:**
- Pure utility bot - no AI, no LLM calls
- Async architecture using aiogram 3.x
- Access control via an allowlist of Telegram user IDs
- Per-user rate limiting
- Automatic temporary file cleanup
- Live download progress bar that updates in place (works the same in DMs and groups)
- Instant re-sends: a previously downloaded URL is resent from Telegram's cache (by `file_id`) without re-downloading
- Friendly, actionable error messages (e.g. "age-restricted — set a COOKIES_FILE")
- yt-dlp kept current automatically in Docker (refreshed on container start)
- Uploads up to 2GB via a bundled local Telegram Bot API server (vs. 50MB on the standard API)
- Audio-only sources (e.g. SoundCloud) are auto-detected and always fetched as tagged MP3
- Direct media URLs (e.g. an…

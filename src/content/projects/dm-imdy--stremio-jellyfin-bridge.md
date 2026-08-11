---
repo: "dm-imdy/stremio-jellyfin-bridge"
name: "stremio-jellyfin-bridge"
description: "Self-hosted Stremio addon with two independent features: serve your own local subtitles for any title (by IMDb id), and bridge your Jellyfin library into Stremio. LAN-only, zero-config HTTPS."
readmeQualityOk: true
url: "https://github.com/dm-imdy/stremio-jellyfin-bridge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["android-tv", "docker", "jellyfin", "nodejs", "self-hosted", "stremio", "stremio-addon", "cinemeta", "srt", "subtitles"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-14T08:00:34Z"
lastCommitAt: "2026-08-11T04:48:20Z"
lastReleaseAt: "2026-07-16T08:50:35Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 39
maintainers: ["dm-imdy", "sevet"]
openGraphImageUrl: "https://opengraph.githubassets.com/a095bebf1435b7c2370af308837bf21b5b7b8f055a1fc710e513514f81483eaf/dm-imdy/stremio-jellyfin-bridge"
---

# Stremio-Jellyfin Bridge

A lightweight, self-hosted Node.js addon for Stremio with **two independent features** — run either one on its own, or both together:

* **Local Subtitles** — serve your own subtitle files (hand-synced tracks, fan translations, alternate timings) for *any* title you play in Stremio, matched by IMDb id, no matter where the video streams from.
* **Jellyfin Bridge** — browse and stream your local Jellyfin library directly in the Stremio UI, with full metadata, native subtitles, and smart playback options.

Each feature is enabled independently through configuration, and everything runs securely on your LAN with automatic, zero-config local HTTPS.

## ✨ Features

* 🛡️ **100% Local Traffic:** No port-forwarding, reverse proxies, or exposing your Jellyfin server to the internet. The bridge runs entirely within your LAN, keeping your media secure and private.
* 🎬 **Full Library Integration:** Browse your Jellyfin Movies and TV Shows directly within Stremio's Home and Discover tabs (or easily hide them and rely purely on search).
* 📺 **Series Support:** Season and episode resolution. Automatically maps local episodes to Stremio's UI, pulling native thumbnails…

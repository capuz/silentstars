---
repo: "firestaerter3/JellySTRMprobe"
name: "JellySTRMprobe"
description: "Jellyfin plugin that probes STRM files to extract media information (codec, resolution, duration, audio). Jellyfin skips STRM files during library scans — this plugin fills that gap."
readmeQualityOk: true
url: "https://github.com/firestaerter3/JellySTRMprobe"
homepage: "https://firestaerter3.github.io/jellyfin-plugin-repo/manifest.json"
language: "C#"
languages: ["C#"]
languagePcts: [86]
topics: ["ffprobe", "jellyfin", "jellyfin-plugin", "media-info", "strm"]
stars: 33
forks: 4
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-02-09T21:35:19Z"
lastCommitAt: "2026-11-13T11:21:48Z"
lastReleaseAt: "2026-11-13T11:22:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 34
maintainers: ["firestaerter3"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c595fb263156ed6a3863292cebb3d8a0d1dba3fb954cfd89d8f437be2fdec3/firestaerter3/JellySTRMprobe"
---

# JellySTRMprobe

A Jellyfin plugin that extracts media information from STRM files by probing remote streams.

## The Problem

Jellyfin treats STRM files as "shortcuts" and **never probes them during library scans**. This means movies and episodes sourced from STRM files show up with no duration, codec, resolution, or audio information — even after a full library scan. Media info is only populated on first playback.

**Without this plugin:**

- No duration, codec, resolution, or audio info in the UI
- Movies may be marked as "played" after a few seconds (no duration known)
- Filter/search by resolution or codec doesn't work
- The version picker can't distinguish between quality variants

**Every start is slow, too.** Jellyfin probes a STRM file and runs a full metadata
refresh (probe, NFO, TMDb, OMDb) on **every** playback, even when the streams are already
known. On the server this was measured on, that took about 10 seconds per start.

## How It Works

The plugin calls Jellyfin's internal `RefreshSingleItem()` with `EnableRemoteContentProbe = true` — the same flag Jellyfin sets during playback. This triggers ffprobe against the STRM target URL without requiring the user to play…

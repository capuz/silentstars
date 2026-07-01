---
repo: "brendangooden/ms-teams-sharepoint-downloader"
name: "ms-teams-sharepoint-downloader"
description: "Chrome extension to download and export Microsoft Teams / Sharepoint / MS Stream meeting video, audio and transcripts in multiple formats, even when download is disabled."
url: "https://github.com/brendangooden/ms-teams-sharepoint-downloader"
homepage: "https://teamsvideotranscriptexporter.com"
language: "JavaScript"
languages: ["JavaScript", "Astro"]
languagePcts: [53, 20]
topics: ["microsoft", "microsoft-stream", "microsoft-stream-downloader", "stream", "teams", "transcripts", "sharepoint", "video-download", "srt-subtitles", "subtitle-downloader"]
stars: 133
forks: 18
openIssues: 0
closedIssues: 11
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2025-12-03T11:55:26Z"
lastCommitAt: "2026-07-01T07:04:13Z"
lastReleaseAt: "2026-05-23T04:01:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 37
maintainers: ["brendangooden", "rehmankhalid01", "cloudflare-workers-and-pages[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa82189c569dc789a6e98b4ceb3e3dd81ee65bd0026950c99bc59a867613e31d/brendangooden/ms-teams-sharepoint-downloader"
---

# MS Teams / SharePoint / Stream — Video & Transcript Downloader (Chrome Extension)

🌐 **Website:** [teamsvideotranscriptexporter.com](https://teamsvideotranscriptexporter.com) — features, screenshots, FAQ, install link

Download videos and transcripts from MS Teams meeting recordings, SharePoint, and **Microsoft Stream** (videos uploaded to SharePoint/OneDrive and played through the Stream player) — even when the built-in download button is disabled.

Works on:

- `teams.microsoft.com` and `teams.cloud.microsoft` (Teams web client)
- `*.sharepoint.com` meeting-recording links
- `*.sharepoint.com/.../_layouts/15/stream.aspx` — the Stream-on-SharePoint player (any MP4 someone uploaded to SharePoint or OneDrive and shared)

> **About Microsoft Stream:** Microsoft retired the standalone *Stream (Classic)* product at `web.microsoftstream.com` in early 2024. The current *Stream (on SharePoint)* product reuses the same player whenever an MP4 lives on SharePoint or OneDrive, so this extension covers it automatically.

## Features

### Video / Audio download
- **In-browser download** — Video+Audio (MP4), Audio Only (M4A), or Video Only. No extra tools needed.
- **Parallel segment…

---
repo: "bugsfreeweb/LiveTVCollector"
name: "LiveTVCollector"
description: "Auto m3u collections for World LiveTV"
readmeQualityOk: true
url: "https://github.com/bugsfreeweb/LiveTVCollector"
homepage: "https://bugsfreeweb.github.io/LiveTVCollector"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 226
forks: 102
openIssues: 0
closedIssues: 6
watchers: 9
contributors: 2
recentReleases: 0
createdAt: "2025-03-01T08:30:25Z"
lastCommitAt: "2026-11-09T03:31:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 46
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d45b2ba02141a06d26ee11dad72fd18501be1153a2600a83c78d382aa05706d/bugsfreeweb/LiveTVCollector"
---

# LiveTVCollector

A GitHub repository that automatically collects, filters, and exports live TV streaming links for Country/Category wise using GitHub Actions. This project fetches M3U playlists from multiple sources, removes duplicates, verifies active links, and exports them into various formats under the `LiveTV/Country Name/` directory.
# 📊 Project Stats

## Online Useable Tools:

## Features

- **Automated Updates**: Runs every 8 hours (approximately 05:30, 13:30, 21:30 IST) via GitHub Actions.
- **Large Source Handling**: Processes large M3U files efficiently with streaming to minimize memory usage.
- **Active Link Verification**: Checks links for availability using concurrent requests (50 workers).
- **Duplicate Removal**: Ensures no duplicate streams (based on URL) are included.
- **HTML Source Parsing**: Extracts streaming URLs from HTML pages, filtering out non-stream links (e.g., Telegram, GitHub).
- **Multiple Export Formats**:
  - `LiveTV.m3u`: Standard M3U playlist.
  - `LiveTV.txt`: Human-readable text format with detailed channel info.
  - `LiveTV.json`: Structured JSON with channel metadata.
  - `LiveTV`: Custom JSON format without extension, designed for easy…

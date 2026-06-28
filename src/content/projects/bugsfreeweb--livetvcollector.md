---
repo: "bugsfreeweb/LiveTVCollector"
name: "LiveTVCollector"
description: "Auto m3u collections for World LiveTV"
url: "https://github.com/bugsfreeweb/LiveTVCollector"
homepage: "https://bugsfreeweb.github.io/LiveTVCollector"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 182
forks: 79
openIssues: 0
closedIssues: 4
watchers: 9
contributors: 2
recentReleases: 0
createdAt: "2025-03-01T08:30:25Z"
lastCommitAt: "2026-06-28T02:03:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/c985b414c8d17de0c88cb16bbe891a998ea05ea5b71c0c672f7be5f36bc35216/bugsfreeweb/LiveTVCollector"
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

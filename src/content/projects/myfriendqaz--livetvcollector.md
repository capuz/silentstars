---
repo: "myfriendqaz/LiveTVCollector"
name: "LiveTVCollector"
description: "World LiveTV auto m3u collections"
readmeQualityOk: true
url: "https://github.com/myfriendqaz/LiveTVCollector"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-03-10T21:08:04Z"
lastCommitAt: "2026-09-05T04:11:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 67
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/595e6dac2719a47d28ce7e6b296dab945d4228e57849edec33127f92fd73f07f/myfriendqaz/LiveTVCollector"
postedAt: "2026-06-28T02:10:40.289Z"
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

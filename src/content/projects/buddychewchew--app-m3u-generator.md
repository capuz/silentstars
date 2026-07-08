---
repo: "BuddyChewChew/app-m3u-generator"
name: "app-m3u-generator"
description: "☑️ Pluto, Samsung, Plex, Roku, Tubi Channels ( With EPG ) "
readmeQualityOk: true
url: "https://github.com/BuddyChewChew/app-m3u-generator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 117
forks: 51
openIssues: 1
closedIssues: 24
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2025-04-01T20:36:40Z"
lastCommitAt: "2026-07-08T05:42:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 48
maintainers: ["github-actions[bot]", "BuddyChewChew"]
openGraphImageUrl: "https://opengraph.githubassets.com/729d51442f2d5ca8ba7f5f25f135ae508f35e9baba90821e0fd3b3ed6736b6c6/BuddyChewChew/app-m3u-generator"
---

# ⭐ FAST Service M3U Playlist Generator

This repository automatically generates M3U playlist files for various free ad-supported streaming television (FAST) services using a Python script and GitHub Actions. The playlists include embedded EPG (Electronic Program Guide) information via the `url-tvg` tag in the M3U header.

## 🟢 Service Status & Playlist URLs

| Service | Status | Region Support | Playlist URL (M3U) | EPG / Guide Source |
| :--- | :--- | :--- | :--- | :--- |
| **Pluto TV** | ✅ Online | Global (14+ Regions) | `plutotv_all.m3u` | `i.mjh.nz` (Auto-embedded) |
| **Plex TV** | ✅ Online | Global (8+ Regions) | `plex_all.m3u` | `i.mjh.nz` (Auto-embedded) |
| **Samsung TV Plus** | ✅ Online | Global (11+ Regions) | `samsungtvplus_all.m3u` | `i.mjh.nz` (Auto-embedded) |
| **Roku Channel** | ✅ Online | US / All | `roku_all.m3u` | `i.mjh.nz` (Auto-embedded) |
| **Tubi TV** | ✅ Online | US (Scraped) | `tubi_all.m3u` | `tubi_epg.xml` (Self-Generated) |
| **Stirr TV** | ❌ Offline | N/A | Removed | Service Discontinued |

---

## ▶️ How It Works

1. **Data Fetching:** A Python script (`generate_playlists.py`) fetches the latest channel data from reliable upstream sources…

---
repo: "ashik4u/mrgify-clean"
name: "mrgify-clean"
description: "A GitHub Actions bot/utility that automatically downloads and cleans the latest playlist.m3u every hour from an upstream source: https://github.com/abusaeeidx/Mrgify-BDIX-IPTV/"
url: "https://github.com/ashik4u/mrgify-clean"
homepage: "https://github.com/ashik4u/mrgify-clean?tab=readme-ov-file#mrgify-clean"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bdix", "m3u", "m3u-playlist", "m3u8", "bangladeshi-iptv", "bdix-iptv", "bdix-m3u", "free-iptv", "mrgify-tv", "mrgify-bdix-iptv"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-21T19:31:03Z"
lastCommitAt: "2026-06-24T06:38:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4e8ae5a8f852741d164f077817e9b0114bc1004fc736d62fbcd9828314fc5203/ashik4u/mrgify-clean"
---

# mrgify-clean

A GitHub Actions bot/utility that automatically downloads and cleans the latest playlist.m3u every hour from an upstream source.

## Features

- Pulls m3u content from [`abusaeeidx/Mrgify-BDIX-IPTV`](https://github.com/abusaeeidx/Mrgify-BDIX-IPTV)
- Removes duplicate streams (by URL)
- Removes irrelevant lines (#EXTVLCOPT, #EXTHTTP, comments, blank lines, etc.)
- Keeps only valid #EXTINF + URL pairs

## Usage

No manual upload required!  
The bot fetches `playlist.m3u` from:

```
https://raw.githubusercontent.com/abusaeeidx/Mrgify-BDIX-IPTV/refs/heads/main/playlist.m3u
```

Hourly automation:
- Downloads remote playlist
- Cleans and saves it as `playlist.m3u`
- Commits if changed

## Manual Clean

You can also run manually:

```bash
python clean_m3u.py https://raw.githubusercontent.com/abusaeeidx/Mrgify-BDIX-IPTV/refs/heads/main/playlist.m3u
```

or on a local file:

```bash
python clean_m3u.py playlist.m3u
```

---
*Auto-clean, always up-to-date!*

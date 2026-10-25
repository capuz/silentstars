---
repo: "found-cake/cyber-news-feed"
name: "cyber-news-feed"
description: "Static JSON feed for cyber security RSS sources"
readmeQualityOk: true
url: "https://github.com/found-cake/cyber-news-feed"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cyber-security", "cybersecurity", "golang", "json", "news-feed", "rss", "rss-feed", "security-news"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-19T02:01:45Z"
lastCommitAt: "2026-10-25T09:01:15Z"
lastReleaseAt: "2026-08-23T08:05:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9adfe2e2901eeaa6c07431419d22313ce0e8b2c5a5d8f7faee7df2d9cc3cefc/found-cake/cyber-news-feed"
---

# cyber-news-feed

Cyber security RSS feeds harvested into static JSON files.

[한국어 README](https://github.com/found-cake/cyber-news-feed/blob/HEAD/README_KR.md)

This repository is intentionally small: it fetches RSS/Atom feeds, normalizes article metadata, and publishes per-source JSON under `data/rss/`. It does not crawl or store article bodies, summarize with LLMs, classify content with LLMs, or provide a UI. 보안뉴스 is the narrow exception for page access: the harvester reads its article-page `Classification` metadata to preserve the publisher's categories.

## Data

Source JSON files:

| Source | File |
| --- | --- |
| 보안뉴스 | `data/rss/boannews.json` |
| 데일리시큐 | `data/rss/dailysecu.json` |
| The Hacker News | `data/rss/thehackernews.json` |
| Cyber Security News | `data/rss/cybersecuritynews.json` |
| StepSecurity | `data/rss/stepsecurity.json` |
| Dark Reading | `data/rss/darkreading.json` |
| BleepingComputer | `data/rss/bleepingcomputer.json` |
| SecurityWeek | `data/rss/securityweek.json` |

Raw GitHub URLs follow this form:

```text
https://raw.githubusercontent.com/found-cake/cyber-news-feed/master/data/rss/<source>.json
```

The JSON Schema is available at:

```text…

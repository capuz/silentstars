---
repo: "javinizer/javinizer-go"
name: "javinizer-go"
description: "Javinizer written in Go and Svelte. This is a modern replacement for the original Javinizer. (NSFW) Organize your local Japanese Adult Video (JAV) library."
url: "https://github.com/javinizer/javinizer-go"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 60
forks: 13
openIssues: 2
closedIssues: 29
watchers: 4
contributors: 2
recentReleases: 8
createdAt: "2026-03-15T23:04:41Z"
lastCommitAt: "2026-06-23T23:16:51Z"
lastReleaseAt: "2026-04-30T12:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["seeyabye"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb7a7c8aeee380095cff46dd529d5bb13ceb040602a114ebe2e4357c426442a/javinizer/javinizer-go"
discussionCount: 2
---

# Javinizer Go

Javinizer Go is a metadata scraper and file organizer for Japanese Adult Videos (JAV), with CLI, TUI, API, and a web UI.

## Features

| Feature | What it does | Why it helps |
|---|---|---|
| Multi-source scraping | Pulls metadata from R18.dev, DMM/Fanza, and optional sources. | Better match quality and fewer missing fields. |
| Smart file organization | Renames and organizes files/folders using templates. | Keeps large libraries consistent and searchable. |
| Dry-run safety | Shows a full preview before making any changes. | Reduces risk when processing many files. |
| NFO generation | Creates Kodi/Plex-compatible NFO metadata files. | Improves media center indexing and display quality. |
| Media downloads | Downloads cover, poster, fanart, trailer, and actress images. | Produces complete, polished library entries. |
| Multiple interfaces | Use CLI, interactive TUI, or API + web UI. | Lets you choose fast automation or manual review. |

## Supported Scrapers

| Scraper | Enabled by default (`config.yaml.example`) | Language options | Notes |
|---|---|---|---|
| `r18dev` | Yes | `en`, `ja` | JSON API scraper with rate-limit handling options. |
| `dmm` | No | N/A |…

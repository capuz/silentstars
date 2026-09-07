---
repo: "openclaw/notcrawl"
name: "notcrawl"
description: "Local-first Notion crawler into SQLite and normalized Markdown"
readmeQualityOk: true
url: "https://github.com/openclaw/notcrawl"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 130
forks: 17
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2026-04-22T21:19:58Z"
lastCommitAt: "2026-09-07T08:34:49Z"
lastReleaseAt: "2026-05-18T06:53:09Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 30
maintainers: ["steipete", "dependabot[bot]", "vincentkoc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1218415805/918f6d3c-614c-4600-a22e-d61daad91167"
fundingLinks: ["GITHUB:https://github.com/vincentkoc"]
---

# notcrawl 🗞️ — Your Notion memory, on disk

`notcrawl` mirrors a Notion workspace into local SQLite and normalized Markdown. It is for people and agents that need to search, query, diff, or share workspace history without depending on the Notion UI.

SQLite is the canonical archive. Markdown is the durable human-readable export.

## Install

Homebrew is the smallest install path on macOS and Linux:

```sh
brew install openclaw/tap/notcrawl
```

GitHub Releases also provide signed and notarized macOS archives, Linux archives, and `.deb` and `.rpm` packages. Download the appropriate file from the [latest release](https://github.com/openclaw/notcrawl/releases/latest).

## Quick start

With Notion Desktop installed and opened at least once:

```sh
notcrawl sync --source desktop
notcrawl search "launch plan"
notcrawl export-md
```

The sync reads a snapshot of Notion's local cache. Search uses the SQLite FTS5 index, and `export-md` writes the normalized archive under `~/.notcrawl/pages`.

Run `notcrawl doctor` if the desktop cache is not found.

## Choose a source

| Source | Use it for | Setup |
|---|---|---|
| `desktop` | Fast, local ingestion of pages Notion Desktop has cached |…

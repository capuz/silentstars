---
repo: "realies/soundcloud-sync"
name: "soundcloud-sync"
description: "☁️ SoundCloud likes to local files"
readmeQualityOk: true
url: "https://github.com/realies/soundcloud-sync"
homepage: "https://npmjs.com/package/soundcloud-sync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["soundcloud", "likes", "locally", "downloader", "sync", "deno", "node"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-08-20T22:42:58Z"
lastCommitAt: "2026-08-28T12:23:56Z"
lastReleaseAt: "2026-05-12T07:04:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 68
maintainers: ["dependabot[bot]", "github-actions[bot]", "realies"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f8f7da2caaa80c021e648b676bb7907c5a0a96339cd53ce8f7c97a43038ad5/realies/soundcloud-sync"
---

# SoundCloud Sync

A library and CLI tool to sync your SoundCloud likes to local files.

## Features

- Download liked tracks from any SoundCloud profile
- Automatic metadata tagging (title, artist, artwork) using ID3v2
- Preserves like dates as file modification times
- Verify and update timestamps of existing files
- Supports incremental syncing (only downloads new likes)
- Can be used as a library in other projects
- Minimal dependencies with pure TypeScript implementation
- Cross-platform support with pre-built binaries

## Quick Start

### CLI Usage

```bash
# Install globally
npm install -g soundcloud-sync

# Download your likes
soundcloud-sync -u your-username

# Download with limit
soundcloud-sync -u your-username --limit 100

# Download with limit and custom folder
soundcloud-sync -u your-username --limit 100 --folder ./my-music

# Download and verify timestamps
soundcloud-sync -u your-username --limit 100 --folder ./my-music --verify-timestamps

# Only verify timestamps of existing files
soundcloud-sync -u your-username --limit 100 --folder ./my-music --verify-timestamps --no-download
```

Pre-built binaries are also available from the [releases…

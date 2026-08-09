---
repo: "jviall/rekordbox-edit"
name: "rekordbox-edit"
description: "A command-line tool for bulk operations on your Rekordbox library"
readmeQualityOk: true
url: "https://github.com/jviall/rekordbox-edit"
homepage: "https://rekordbox-edit.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-31T17:24:51Z"
lastCommitAt: "2026-08-09T04:47:43Z"
lastReleaseAt: "2026-04-07T19:35:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 67
maintainers: ["renovate[bot]", "jviall", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b96b334287a042a82bf8a936a10aced291eb7730a57c94f3ab8daf7633c5b28/jviall/rekordbox-edit"
discussionCount: 1
---

# rekordbox-edit

A command-line tool for bulk operations on your Rekordbox library. Search tracks, edit metadata, and convert between audio formats with the benefit of database updates that preserve all your cues, analyses, and metadata.

> [!CAUTION]
> This tool can modify your Rekordbox database and audio files. Always back up your data first.
> No warranty is provided--you assume all risk and liability of data loss in using this.
> See [Safety and Best Practices](#safety-and-best-practices)

> [!WARNING]
> This project is in active development with no stable version released yet.
> Breaking changes are likely to occur across version 0 releases until the API and behavior stabilizes.

**Full documentation: [rekordbox-edit.readthedocs.io](https://rekordbox-edit.readthedocs.io/)**

## Installation

```bash
pip install rekordbox-edit
```

**Requirements:**

- Python 3.11+
- FFmpeg (for audio conversion)

## Quick Start

Search your library:

```bash
rbe search --artist "Daft Punk" --format flac
rbe search --playlist "House Favorites"
```

Edit track metadata:

```bash
# Fix a typo across every matching track title
rbe edit --title "Teh" Title --match "Teh" --replace "The" --multi…

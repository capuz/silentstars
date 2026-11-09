---
repo: "quartz-community/bases-page"
name: "bases-page"
description: "Quartz's default bases page plugin."
readmeQualityOk: true
url: "https://github.com/quartz-community/bases-page"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["quartz-plugin"]
stars: 6
forks: 13
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 10
recentReleases: 5
createdAt: "2026-02-22T09:43:58Z"
lastCommitAt: "2026-11-09T04:36:47Z"
lastReleaseAt: "2026-11-09T03:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 88
maintainers: ["saberzero1", "github-actions[bot]", "vibbix"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7c24a8da6facba8aa3706950cc2abd651956a55bcff06a65054dc68492745da/quartz-community/bases-page"
---

# @quartz-community/bases-page

A page type and component plugin for Quartz v5 that renders Obsidian Bases (.base files) as database-like filtered views. This plugin (v0.2.0) provides a powerful way to visualize and interact with your Obsidian data in a structured format.

## Installation

```bash
npx quartz plugin add github:quartz-community/bases-page
```

## Usage

Enable the plugin in your Quartz configuration:

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/bases-page
    enabled: true
```

## Interaction with `unlisted` pages

`bases-page` respects the `file.data.unlisted` convention. Pages marked `unlisted: true` (by `@quartz-community/unlisted-pages`, or by `@quartz-community/encrypted-pages` via `unlistWhenEncrypted: true` or per-page `unlisted: true` / `stealth: true`) are excluded from every rendered base view — table, list, board, cards, gallery, and any custom view registered via `viewRegistry`. Both the main entry loop and the internal `fileLookup` used by `.asFile()` method resolution skip unlisted pages, so they cannot be dereferenced from formulas on visible pages either.

> [!note]
> Base views are **server-side rendered** HTML…

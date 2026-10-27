---
repo: "davadev/Garmin-Health-Sync"
name: "Garmin-Health-Sync"
description: "Obsidian plugin to sync health data from smartwatches into Daily Notes"
readmeQualityOk: true
url: "https://github.com/davadev/Garmin-Health-Sync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 20
forks: 2
openIssues: 6
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-14T14:00:00Z"
lastCommitAt: "2026-10-27T09:16:19Z"
lastReleaseAt: "2026-05-25T08:06:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 45
maintainers: ["davadev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a52d3a3b91d62caf10ff06a3a4ed6b925821a13d25bea4d564b1ae6f3537fbd/davadev/Garmin-Health-Sync"
---

**English** · [Deutsch](https://github.com/davadev/Garmin-Health-Sync/blob/HEAD/README.de.md) · [中文](https://github.com/davadev/Garmin-Health-Sync/blob/HEAD/README.zh.md) · [日本語](https://github.com/davadev/Garmin-Health-Sync/blob/HEAD/README.ja.md) · [Español](https://github.com/davadev/Garmin-Health-Sync/blob/HEAD/README.es.md) · [Français](https://github.com/davadev/Garmin-Health-Sync/blob/HEAD/README.fr.md)

# Garmin Health Sync

Sync steps, sleep, heart rate, stress, activities and more from Garmin Connect into Obsidian Daily Notes — as frontmatter properties you can query with Dataview.

> **Works on desktop and mobile** (Windows, macOS, Linux, iOS, Android). This plugin uses Garmin Connect's internal API — there is no official third-party API available. You sign in with your Garmin email and password (plus the verification code if you use two-step verification). If Garmin blocks that attempt, an alternative browser sign-in is available.

## Features

- **Auto-sync on startup** — checks the last 7 days and fills in any missing health data
- **Wait-for-note mode** — optionally let auto-sync wait until another tool (Templater, Calendar, an external sync) creates the daily note,…

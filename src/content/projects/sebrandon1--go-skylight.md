---
repo: "sebrandon1/go-skylight"
name: "go-skylight"
description: "Go wrapper for the Skylight Calendar API.  The CLI tool wraps a consumable 'lib' that allows users to either use the CLI tool directly or bring the 'lib' into their own projects via go.mod."
readmeQualityOk: true
url: "https://github.com/sebrandon1/go-skylight"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 18
forks: 13
openIssues: 22
closedIssues: 228
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-06T22:25:22Z"
lastCommitAt: "2026-11-10T14:49:19Z"
lastReleaseAt: "2026-03-17T00:03:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 60
maintainers: ["sebrandon1", "joerb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/229ab2cc933436ead096589f2bbaf7f4e8f4b3a38271f5d9f20ebdf8416dffa8/sebrandon1/go-skylight"
---

# go-skylight

Go CLI and client library for the [Skylight Calendar](https://www.ourskylight.com) API. Manage frames, calendars, chores, rewards, lists, meals, household messages, and family member profiles and labels from the terminal or from Go code.

> **Disclaimer:** This is an unofficial, community-built tool and is not affiliated with or endorsed by Skylight. It interacts with Skylight's undocumented API — behavior may change without notice. Use at your own risk.

## Key Features

- Full CRUD for calendar events, chores, rewards, lists, recipes, categories, profiles, labels, photos, and grocery lists, plus create/get/list/update/delete for routines
- Household messages: send now or schedule, with recurring delivery (Calendar Plus)
- OAuth2 login with automatic token rotation and config file persistence
- Table and JSON output formats (`--output json|table`), quiet mode (`--quiet`)
- Family activity analytics and chore completion streaks
- Export/import for backup and migration between frames
- Live change watcher with configurable resource polling
- Weekly combined home view (events, tasks, lists, meals) and quick frame status
- Grocery list management with Instacart…

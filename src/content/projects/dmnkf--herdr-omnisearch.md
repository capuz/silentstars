---
repo: "dmnkf/herdr-omnisearch"
name: "herdr-omnisearch"
description: "Fast search and navigation for Herdr workspaces, panes, and archived agent sessions across all your connected machines"
readmeQualityOk: true
url: "https://github.com/dmnkf/herdr-omnisearch"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["herdr-plugin", "herdr-mod"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-22T22:49:30Z"
lastCommitAt: "2026-11-17T12:17:13Z"
lastReleaseAt: "2026-08-05T09:22:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["dmnkf", "RONNCC"]
openGraphImageUrl: "https://opengraph.githubassets.com/28a8d2010d9f0c45cf55eba54e3a99088c02b7111eb82566eb658df9780b3208/dmnkf/herdr-omnisearch"
---

# Herdr OmniSearch

Search Herdr workspaces, panes, and agent conversations from a
keyboard-driven terminal interface.

- Search workspace metadata and recent terminal output from live panes.
- Group matching panes by workspace and jump directly to a result.
- Optionally search complete local user and assistant message history.
- Resume archived sessions from the search result, on the machine they ran on, and focus a session that already runs instead of starting it twice.
- Search the Herdr app's terminals (herdr-core) from the TUI, and the TUI's panes from the app.
- Keep all indexed data in local SQLite databases.

Archive indexing is disabled by default. OmniSearch does not upload indexed
content.

The name and interaction model are inspired by
[Omnisearch for Obsidian](https://github.com/scambier/obsidian-omnisearch).

## Requirements

- Herdr 0.7.5 or newer (0.9.0 or newer for [multiple machines](#multiple-machines)),
  or the [Herdr app](#herdr-app) with herdr-core 0.1.15 or newer
- Python 3.9 or newer
- Linux or macOS

## Install

Install the plugin from GitHub:

```bash
herdr plugin install dmnkf/herdr-omnisearch
```

Verify it:

```bash
herdr plugin action invoke doctor…

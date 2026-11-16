---
repo: "oweitman/ioBroker.openligadb"
name: "ioBroker.openligadb"
description: "ioBroker Adapter to get soccer sport match results from OpenLigaDB"
readmeQualityOk: true
url: "https://github.com/oweitman/ioBroker.openligadb"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [50, 47]
topics: ["iobroker", "smart-home", "home-automation", "openligadb", "soccer", "fussball", "nodejs"]
stars: 5
forks: 6
openIssues: 2
closedIssues: 61
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-01-29T09:47:26Z"
lastCommitAt: "2026-11-16T11:56:29Z"
lastReleaseAt: "2025-01-23T15:11:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 86
maintainers: ["github-actions[bot]", "dependabot[bot]", "oweitman"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2cada76a47f8ca7d7e37678ddd8947a3339cbcae53f78f34da9a5dd390ef752/oweitman/ioBroker.openligadb"
---

# ioBroker Adapter to get soccer sport match results from OpenLigaDB





## Overview

Adapter to request game data for soccer or other games form `openligadb.de`

## Configuration

Add an instance of the adapter and click on the wrench symbol
In the form you can add the shortcut from a league and a season.
Please visit `openligadb.de` for available leagues,seasons and shortcuts
If a season is spread over two years, please enter only the start year.

Example data for 1. German Bundliga is
`shortcut = bl1 season = 2023`

If you saved and closed the configuration, a short while after this there must
be new datapoints for your league and season.

## Widgets

Actually there are 5 widgets available. Please enter openligadb in the widget filter

### Table 4



This is the classic table view. The table contains several columns.

- MP = Number of games played
- W = Wins
- D = Draw
- L = Losses
- Goals = Goal difference
- Points = Points standing
- T = Trend

#### Attribute Table

| Attributs                           | Group                 | Description…

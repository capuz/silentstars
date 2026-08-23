---
repo: "w3c/cg-monitor"
name: "cg-monitor"
description: "Dashboard of activity from Community Groups"
readmeQualityOk: true
url: "https://github.com/w3c/cg-monitor"
homepage: "https://w3c.github.io/cg-monitor/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 21
forks: 25
openIssues: 6
closedIssues: 6
watchers: 13
contributors: 15
recentReleases: 0
createdAt: "2018-12-06T15:00:04Z"
lastCommitAt: "2026-08-23T04:10:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 67
maintainers: ["xfq"]
openGraphImageUrl: "https://opengraph.githubassets.com/f97d70b9d86f2aed57f164a0ddbe405b1d81c024c05f539b532f43612dd0e466/w3c/cg-monitor"
---

# W3C Community Groups Activity Monitor

This tool collects activity data from W3C Community Groups, pulling from the W3C API, GitHub repositories, mailing list archives, RSS feeds, and wikis. It processes the raw data into reports and charts, powering the [CG Activity Dashboard](https://w3c.github.io/cg-monitor/).

## Prerequisites

- **Node.js 20.x** 
- A GitHub [personal access token](https://github.com/settings/tokens) (no special scopes required, only used for higher API rate limits)

## Setup

```bash
npm install
cp config.json.dist config.json
# Edit config.json and add your GitHub token:
# { "ghapitoken": "ghp_xxxxxxxxxxxx" }
```

## Usage

### Collect group activity data

```bash
node monitor.js
```

This fetches data from all sources. It writes one JSON file per group into `data/`.

To update only specific groups, pass their W3C API IDs:

```bash
node monitor.js 12345 67890
```

### Process the collected data

```bash
node prepare-data.js        # builds report.json for the dashboard
node export-popularity.js   # computes group popularity rankings
node generate-activity-graphs.js  # generates SVG charts in viz/
```

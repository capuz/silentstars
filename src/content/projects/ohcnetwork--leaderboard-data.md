---
repo: "ohcnetwork/leaderboard-data"
name: "leaderboard-data"
description: "Flat data and configuration repository for Open Healthcare Network's leaderboard deployment"
readmeQualityOk: true
url: "https://github.com/ohcnetwork/leaderboard-data"
homepage: "https://contributors.ohc.network"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["flat-data", "leaderboard"]
stars: 5
forks: 4
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-24T06:58:31Z"
lastCommitAt: "2026-08-30T00:42:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 67
maintainers: ["rithviknishad"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9b172ef2b41b183503397274503249ac5381be258e5d24dd31e6f33bcf04f40/ohcnetwork/leaderboard-data"
---

# Open Healthcare Network Leaderboard Data

This repository contains contributor and activity data for the Open Healthcare Network leaderboard.

## Repository Structure

```
.
├── config.yaml           # Leaderboard configuration
├── .leaderboard.db      # SQLite database (auto-generated)
├── contributors/         # Contributor profiles (Markdown files)
└── activities/          # Activity records (JSONL files)
```

## Getting Started

### 1. Configure Plugins

Edit `config.yaml` and uncomment the plugin configurations you want to use. Make sure to:
- Set the correct plugin source URLs
- Configure environment variables for API tokens
- Update organization-specific settings

### 2. Run Data Scraping

```bash
# Using the leaderboard CLI (from your leaderboard monorepo)
pnpm --filter @leaderboard/plugin-runner scrape --data-dir .

# Or if you have the CLI installed globally
leaderboard-scrape --data-dir .
```

### 3. Commit Changes

After scraping, contributor profiles and activities will be exported to files:

```bash
git add contributors/ activities/
git commit -m "Update leaderboard data"
git push
```

## Contributor Profiles

Contributor profiles are stored as Markdown files with…

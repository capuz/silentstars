---
repo: "Fortnite-Datamining/Fortnite-Datamining"
name: "Fortnite-Datamining"
description: "Datamining Fortnite changes from the API"
readmeQualityOk: true
url: "https://github.com/Fortnite-Datamining/Fortnite-Datamining"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["builds", "datamining", "fortnite", "typescript"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-15T19:15:35Z"
lastCommitAt: "2026-07-23T06:14:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/787d8a64466d18e06841ecaaa25c1b9d8306b8106504447752be0c33e72b12b4/Fortnite-Datamining/Fortnite-Datamining"
---

# Fortnite Datamining

> This project is not affiliated with or endorsed by Epic Games

Automated tracking of changes to Fortnite through public API data. Datamining is done by periodically fetching JSON data from [fortnite-api.com](https://fortnite-api.com/) and Epic's public content API, and committing changes to this repository. Git diffs between commits reveal what changed

## How It Works

A [GitHub Actions workflow](https://github.com/Fortnite-Datamining/Fortnite-Datamining/blob/HEAD/.github/workflows/fetch.yml) runs every 30 minutes to fetch data from Fortnite's public APIs. When data changes (new cosmetics, shop rotation, build updates, etc), the differences are committed to this repo. To follow updates you can:

- Read [`CHANGELOG.md`](https://github.com/Fortnite-Datamining/Fortnite-Datamining/blob/HEAD/CHANGELOG.md)
- Subscribe to the [RSS feed](https://raw.githubusercontent.com/Fortnite-Datamining/Fortnite-Datamining/main/feed.xml)
- Browse the [commit history](https://github.com/Fortnite-Datamining/Fortnite-Datamining/blob/HEAD/../../commits/main) for the raw diffs
- Invite the [Discord bot](https://github.com/fortnite-datamining/bot)

## Current Stats

Current build:…

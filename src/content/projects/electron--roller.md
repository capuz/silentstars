---
repo: "electron/roller"
name: "roller"
description: "🎵rollin on upstream 🎵"
url: "https://github.com/electron/roller"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 9
openIssues: 1
closedIssues: 10
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2018-08-13T20:07:10Z"
lastCommitAt: "2026-07-02T06:34:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 66
maintainers: ["dependabot[bot]", "dsanders11", "MarshallOfSound"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cc756876183c380f850fc9310e9bb917814646606ddbf8fab6a2b5738b0ae53/electron/roller"
---

# Roller

Roller is a service that automates the process of updating major dependencies in Electron.js

## Setup

```sh
# Clone this repository
git clone https://github.com/electron/roller.git

# Go into the repository
cd roller

# Install dependencies
npm install

# Run the service
npm start
```

## Documentation

This service has no user facing interfaces or commands. Updates to major dependencies
including Node.js and Chromium will be automatically PRed as DEPS updates
into `electron/electron`.

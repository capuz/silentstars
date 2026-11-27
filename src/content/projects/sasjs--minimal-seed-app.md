---
repo: "sasjs/minimal-seed-app"
name: "minimal-seed-app"
description: "Vanilla JavaScript seed app for SASjs"
readmeQualityOk: true
url: "https://github.com/sasjs/minimal-seed-app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["sas", "viya", "sasjs", "sasjs-seed-app", "sasjs-app"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 12
recentReleases: 1
createdAt: "2020-07-09T05:41:45Z"
lastCommitAt: "2026-11-27T12:59:23Z"
lastReleaseAt: "2026-11-12T12:31:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 76
maintainers: ["sasjs-dev", "allanbowe", "semantic-release-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/278273519/1fbaf6cf-94da-4683-85d9-579cb4d248a3"
---

# Vanilla JavaScript Seed App for SASjs

This is the minimal seed app for [SASjs](https://github.com/sasjs/adapter).

## Quick Start on Viya

Just run the following in SAS Studio:

```sas
filename sasjsmsa url
  "https://github.com/sasjs/minimal-seed-app/releases/latest/download/viya.sas";
%inc sasjsmsa;
```

This will deploy the streaming version of the app (compiled using `sasjs cb`)

## SAS9 Setup

Also works on Viya (but for that it is better to use the SASjs CLI).
To deploy the backend services, execute the following:

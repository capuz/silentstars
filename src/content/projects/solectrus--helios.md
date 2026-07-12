---
repo: "solectrus/helios"
name: "helios"
description: "HELIOS — knows your SOLECTRUS configuration better than you do"
readmeQualityOk: true
url: "https://github.com/solectrus/helios"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [83]
topics: ["configuration", "docker", "photovoltaic", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 44
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2025-04-04T07:38:58Z"
lastCommitAt: "2026-07-12T06:16:16Z"
lastReleaseAt: "2026-06-10T17:49:16Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["dependabot[bot]", "ledermann"]
openGraphImageUrl: "https://opengraph.githubassets.com/95555dcc110f49e1a9b14c0e380b7933e6b0b700eac1a943830fde35068fb0da/solectrus/helios"
fundingLinks: ["GITHUB:https://github.com/solectrus", "KO_FI:https://ko-fi.com/ledermann"]
---

# HELIOS

Web-based control panel for [SOLECTRUS](https://solectrus.de). HELIOS installs the SOLECTRUS stack on your Docker host and lets you configure and operate it through a browser, replacing manual edits to `compose.yaml` / `.env` and `docker compose` commands.

> [!NOTE]
> **Pre-1.0**
>
> HELIOS is stable enough for production use. As a pre-1.0 release it is still evolving, so expect occasional rough edges and end-user documentation that is not yet complete.

## Screenshots

|                                  Configuration                                  |                               Services                                |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="screenshot-configuration.jpg" alt="HELIOS configuration" width="450"> | <img src="screenshot-services.jpg" alt="HELIOS services" width="450"> |

## Features

- **Service dashboard** — live status, versions, health for every container; start / stop / restart / recreate per service or in batch.
- **Survey-based configuration** — guided forms cover every documented SOLECTRUS environment…

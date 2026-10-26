---
repo: "USACE/cwms-data-api"
name: "cwms-data-api"
description: "Corps Water Management System RESTful Data Service https://cwms-data-api.readthedocs.io/latest"
readmeQualityOk: true
url: "https://github.com/USACE/cwms-data-api"
homepage: "https://cwms-data.usace.army.mil/cwms-data"
language: "Java"
languages: ["Java"]
languagePcts: [88]
stars: 30
forks: 25
openIssues: 347
closedIssues: 461
watchers: 8
contributors: 30
recentReleases: 0
createdAt: "2020-10-07T16:46:14Z"
lastCommitAt: "2026-10-26T20:59:39Z"
lastReleaseAt: "2022-06-23T16:27:54Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 89
undervaluedScore: 64
maintainers: ["krowvin", "MikeNeilson", "adamkorynta"]
openGraphImageUrl: "https://opengraph.githubassets.com/d978d21c8000c313db9ff979eff53f39dcb51409de7bd14bd63ed237dbbe590e/USACE/cwms-data-api"
discussionCount: 52
---

---

    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;

---

# CWMS DATA API (CDA)
*Formerly known as RADAR*

This is a new implementation of a REST API for data retrieval of USACE Water Data.

See the [📃 Wiki](https://github.com/USACE/cwms-data-api/wiki) for how to get started

End user documentation available here: [📕 Read the Docs](https://cwms-data-api.readthedocs.io/latest)

## Development notes

Development and runtime currently requires java 11. JDKs and JREs greater than 11 should work, please report if they don't.

### Dev Container

The repository includes a [Dev Container](https://containers.dev/) with Java 11, Node.js 22,
Python 3.13, and Docker Compose. It supports the Gradle build, CDA GUI and client development,
documentation builds, the local Docker Compose stack, and Docker-backed integration tests.

To use it locally:

1. Install Docker and the Visual Studio Code Dev Containers extension.
2. Open the cloned repository in Visual Studio Code.
3. Run **Dev Containers: Reopen in Container** from the command palette.

GitHub Codespaces also detects the same configuration automatically. The first container creation
downloads the development image…

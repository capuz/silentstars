---
repo: "Hochfrequenz/ahb-tabellen"
name: "ahb-tabellen"
description: "AHB Tabellen - Anwendungshandbücher für Menschen"
readmeQualityOk: true
url: "https://github.com/Hochfrequenz/ahb-tabellen"
homepage: "https://ahb-tabellen.hochfrequenz.de/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ahb", "bdew", "anwendungsha", "energiew"]
stars: 6
forks: 0
openIssues: 40
closedIssues: 145
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2024-05-13T11:32:51Z"
lastCommitAt: "2026-11-23T13:30:30Z"
lastReleaseAt: "2024-11-07T19:13:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 94
undervaluedScore: 76
maintainers: ["dependabot[bot]", "hf-krechan", "hf-kklein"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd6c9cb2eba62f615f9144cd381951210d314c3614ec1ae4d99835fa05cb2095/Hochfrequenz/ahb-tabellen"
---

# AHB-Tabellen Web Application

## ℹ️ Overview

### Production

You can access the **prod** version of the application on [ahb-tabellen.hochfrequenz.app](https://ahb-tabellen.hochfrequenz.app).

### Stage

You can access the **stage** version of the application on [ahb-tabellen-stage.hochfrequenz.app](https://ahb-tabellen-stage.hochfrequenz.app).

This is our test environment where we deploy the latest changes to test them before deploying them to production.

### 🏛 Architecture

The AHB tables application follows a simple but effective architecture for processing and displaying Anwendungshandbücher (AHB) data:

1. **Data Source**: The process begins with XML files from edi@energy, which contain the official AHB specifications.
2. **Data Processing**: Our Python package `fundamend` processes these XML files, extracting and structuring the data into a SQLite database format.
3. **Web Application**: The AHB tables web application reads directly from the SQLite database to display the structured AHB information to users.

This architecture ensures data consistency and provides a reliable way to access and display AHB information.

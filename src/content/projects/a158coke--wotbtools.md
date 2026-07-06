---
repo: "A158Coke/WotbTools"
name: "WotbTools"
description: "Wotb tool Set"
originalDescription: "Wotb tool Set"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/A158Coke/WotbTools"
homepage: "https://wotbtools.com/"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [61, 26]
topics: ["wotblitz"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-22T22:17:57Z"
lastCommitAt: "2026-07-06T07:04:20Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["A158Coke", "DRKTCoke"]
openGraphImageUrl: "https://opengraph.githubassets.com/c06dd6cc7de915e8106954424e0e120f7990c0cae757aa3b16f3ec2cd391cbd5/A158Coke/WotbTools"
---

# WoTBTools

## SPA Route Parameters

- `?view=home`: Enter the toolset homepage.
- `?view=replay`: Enter the replay extractor.
- `?view=leaderboard`: Enter the leaderboard.
- `?view=boost`: Enter the coaching and carry application.
- `?view=extended`: Enter Rating V2 parsing.
- `?view=profile`: Enter the personal center.
- `?view=admin-users`: Enter the admin user management (requires `wotbtools-admin` role).

The toolset for "World of Tanks Blitz".

Available tools: Extract combat data from `.wotbreplay` replay files to export Excel, online damage leaderboard, Keycloak authentication.

Entry: [https://wotbtools.com](https://wotbtools.com)

## Current Goals

| Goal        | Technical Direction                                   | Status         |
|-------------|----------------------------------------------------|----------------|
| Web Version | Spring Boot 4 + Vue 3 + PostgreSQL + Docker + Keycloak | ✅ Completed    |
| Toolset Homepage | Vue SPA game tool station style entry + theme switching + trilingual i18n | ✅ Completed    |

Version history can be found in [CHANGELOG.md](https://github.com/A158Coke/WotbTools/blob/HEAD/CHANGELOG.md), task breakdown can be found in…

---
repo: "auroramod/x64-zt"
name: "x64-zt"
description: "Fastfile linker & unlinker for next-gen Call of Duty games"
readmeQualityOk: true
url: "https://github.com/auroramod/x64-zt"
homepage: "https://docs.auroramod.dev/x64-zt"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 71
forks: 31
openIssues: 2
closedIssues: 24
watchers: 4
contributors: 6
recentReleases: 2
createdAt: "2023-01-17T23:54:42Z"
lastCommitAt: "2026-11-26T15:23:05Z"
lastReleaseAt: "2026-11-25T07:54:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["mjkzy", "Joelrau"]
openGraphImageUrl: "https://opengraph.githubassets.com/61d059385bb63ad14e0f152aef47494303822034f0a721af9d0e4dde042c4952/auroramod/x64-zt"
---

# x64 ZoneTool

x64-zt is a standalone fastfile unlinker and linker for x64 Call of Duty titles. x64-zt can link, unlink, and convert assets between games with accurate conversions for the source & target engines in mind.

> **Warning**
>
> `main` contains the legacy x64-zt code. x64-zt 2 is a heavy rework of that code here on `develop`, and is pending release. [Pre-build releases](https://github.com/auroramod/x64-zt/releases/tag/develop-latest) contain x64-zt 2, but it is not guaranteed to work good yet.

## Supported games

| Codename | Game |
|---|---|
| **IW3** | Call of Duty 4: Modern Warfare *(dumping)* |
| **IW4** | Modern Warfare 2 *(dumping)* |
| **IW5** | Modern Warfare 3 *(dumping)* |
| **IW6** | Ghosts |
| **S1** | Advanced Warfare |
| **H1** | Modern Warfare Remastered |
| **H2** | Modern Warfare 2 Campaign Remastered |
| **S2** | WWII |
| **IW7** | Infinite Warfare |
| **IW8** | Modern Warfare (2019) |
| **T9** | Black Ops Cold War *(experimental)* |

## Asset conversion

Rows are the source game. Columns are the `--target` game.

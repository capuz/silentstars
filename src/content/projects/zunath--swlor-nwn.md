---
repo: "zunath/SWLOR_NWN"
name: "SWLOR_NWN"
description: "Star Wars: Legends of the Old Republic server code, a persistent world for Neverwinter Nights"
readmeQualityOk: true
url: "https://github.com/zunath/SWLOR_NWN"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["star-wars", "nwn", "neverwinter", "nights", "neverwinter-nights", "csharp", "sql", "bioware", "beamdog", "nwnx"]
stars: 48
forks: 127
openIssues: 1
closedIssues: 1277
watchers: 6
contributors: 34
recentReleases: 3
createdAt: "2018-08-31T18:04:48Z"
lastCommitAt: "2026-11-09T00:52:41Z"
lastReleaseAt: "2026-11-03T17:45:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["zunath", "siobhan-buck", "Scorchys12"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df8f213c1e55c2ac00bea209187dc47fed8af7f3fc18d8c219bcaf78e7c8ff0/zunath/SWLOR_NWN"
discussionCount: 10
---

# Star Wars: Legends of the Old Republic

SWLOR is a Neverwinter Nights: Enhanced Edition persistent world. This repository holds its C# server, module content, and desktop toolset.

[Website](https://starwarsnwn.com/) · [Discord](https://discord.gg/MyQAM6m)

- **Edit content** (areas, blueprints, scripts): [install the toolset](#install-the-toolset).
- **Change server code or run a local server**: [set up the source checkout](#set-up-the-source-checkout).

## Install the toolset

You need nothing else installed: no Git, .NET SDK, Python, or Docker.

1. Download a package from [the current toolset release](https://github.com/zunath/SWLOR_NWN/releases/tag/toolset-latest): the Windows installer or portable ZIP, or the Linux x64 AppImage or tar.gz. Do not use GitHub's "Source code" ZIP.
2. Install and open SWLOR Toolset. On Linux, run `chmod +x *.AppImage` first.
3. Select **Create SWLOR workspace** and choose a folder for your work.
4. Optional: select **Locate Neverwinter Nights** for base-game models and tiles.
5. Edit, save, then run **Tools → Run Validation**.
6. Use **File → Export Contribution** and send the ZIP to a maintainer.

The first workspace downloads SWLOR assets;…

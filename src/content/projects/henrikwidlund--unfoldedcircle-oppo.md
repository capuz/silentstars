---
repo: "henrikwidlund/unfoldedcircle-oppo"
name: "unfoldedcircle-oppo"
description: "Unfolded Circle integration driver for the Oppo Blu-ray players"
readmeQualityOk: true
url: "https://github.com/henrikwidlund/unfoldedcircle-oppo"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["oppo", "unfolded-circle"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2024-09-29T10:46:57Z"
lastCommitAt: "2026-10-14T08:58:38Z"
lastReleaseAt: "2024-10-10T17:32:42Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 68
maintainers: ["henrikwidlund", "dependabot[bot]", "stakats"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f10dd0c5a1e53dfe86ea5f14319fe3eba91672591d9dc0a89ccab28ddb7959c/henrikwidlund/unfoldedcircle-oppo"
fundingLinks: ["GITHUB:https://github.com/henrikwidlund"]
---

# Unfolded Circle Oppo/Magnetar Integration Driver

This repository contains the server code for hosting an Oppo/Magnetar Blu-ray integration driver for the Unfolded Circle Remotes, Linux, macOS, Windows and Docker Images.

## Supported devices

- Oppo BDP-83
- Oppo BDP-93
- Oppo BDP-95
- Oppo BDP-103
- Oppo BDP-105
- Oppo UDP-203
- Oppo UDP-205
- Magnetar Players

### Supported features limitations

- All features are supported for the UDP-20X series.
- The Oppo and Magnetar players only allows one connection at a time. If you have multiple remotes or other systems that you want to connect to the same player, then you'll need to use the [Oppo Multiplexer](https://github.com/henrikwidlund/oppo-multiplexer) in order to avoid getting continuous disconnects and failed commands.
- Track Name/Album Name/Album Cover/Artist Name is only available while playing audio (not movies). It's attempted on every BDP-83/93/95/10X player, but firmware support for the underlying API is only confirmed on BDP-103/105 (❓ below) - an unsupported player/content combination simply won't show this data rather than erroring.

| Feature            | Oppo BDP-83/93/95 | Oppo BDP-10X | Magnetar |…

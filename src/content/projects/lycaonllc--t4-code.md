---
repo: "LycaonLLC/t4-code"
name: "t4-code"
description: "Open-source desktop app for Oh My Pi"
readmeQualityOk: true
url: "https://github.com/LycaonLLC/t4-code"
homepage: "https://t4code.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["coding-agents", "developer-tools", "electron", "linux", "macos", "oh-my-pi", "omp", "open-source"]
stars: 22
forks: 9
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-07-13T04:25:16Z"
lastCommitAt: "2026-07-21T06:12:31Z"
lastReleaseAt: "2026-07-14T15:38:11Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 45
maintainers: ["wolfiesch", "lyc-aon", "iarbpairs"]
openGraphImageUrl: "https://opengraph.githubassets.com/30ef951acd038b101c59df3fe03ec1f473d850a90de29389feb4143663f8efd4/LycaonLLC/t4-code"
---

# T4 Code

T4 Code is a free, open-source (MIT) desktop app for [Oh My Pi](https://github.com/can1357/oh-my-pi) (OMP), made for people who live in OMP all day. OMP runs your coding sessions; T4 Code shows them and lets you steer. The app never owns runtime state. It mirrors what the OMP host reports and sends your actions back as commands. It's a ROYCORP project.

[**Download v0.1.30**](https://github.com/LycaonLLC/t4-code/releases/tag/v0.1.30) · [**Docs**](https://t4code.net/docs) · [**Get the source**](#build-from-source)

## Requirements

T4 Code v0.1.30 packages its own standalone `t4-host` and needs the matching OMP build with the smaller authority bridge.

T4 Code v0.1.30 was verified with OMP 17.0.5 built from [`8476f445`](https://github.com/lyc-aon/oh-my-pi/commit/8476f4451ed95c5d5401785d279a93d3c659fac4), tagged [`t4code-17.0.5-appserver-10`](https://github.com/lyc-aon/oh-my-pi/tree/t4code-17.0.5-appserver-10). That integration is based on the official upstream [`v17.0.5`](https://github.com/can1357/oh-my-pi/tree/v17.0.5) tag at [`9fd6e971`](https://github.com/can1357/oh-my-pi/commit/9fd6e97113f5ed3a847e66d346970efdf8afcad9). It exposes the bounded `t4-omp-authority/1`…

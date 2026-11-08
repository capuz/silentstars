---
repo: "r0si/forgec2"
name: "forgec2"
description: "Self-hosted single-binary C2 platform in Go: 222 implant tasks, 9 transports, an in-browser payload factory and an AI copilot. Signed releases, hot updates that roll back. Authorized red-team use only."
readmeQualityOk: true
url: "https://github.com/r0si/forgec2"
homepage: "https://r0si.github.io/forgec2/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 28]
topics: ["c2", "command-and-control", "golang", "post-exploitation", "red-team", "adversary-simulation", "c2-framework", "cobalt-strike", "mitre-attack", "mythic"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-17T15:06:37Z"
lastCommitAt: "2026-11-08T10:41:05Z"
lastReleaseAt: "2026-10-22T23:44:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a0a3b8f85d411327221dd94d5fb6726d52e91cbb675f144cc1b69dd2e33f2ff5/r0si/forgec2"
discussionCount: 0
---

# ⚒️ ForgeC2

**Self-hosted, open-source command and control (C2) that ships as a single binary.** 223 implant tasks, 9 transports, an in-browser payload factory and an AI copilot — with signed releases and hot updates that roll back on failure. Built for authorized red team operations and adversary simulation.

Website: [https://r0si.github.io/forgec2/](https://r0si.github.io/forgec2/) · Source & releases: <https://github.com/r0si/forgec2/releases>

**English** · [中文](https://github.com/r0si/forgec2/blob/HEAD/README.zh.md) · [Quick start](#quick-start) · [Screenshots](#screenshots) · [Documentation](#documentation)

> ⚠️ **Authorized security testing only.** You must hold explicit written permission from the system owner before using ForgeC2 against anything. See [Legal](#legal).

## Live demo

[Open the read-only ForgeC2 demo](http://43.143.162.139:8000/) using username `demo` and password `ForgeC2Demo2026!`.

The public account has an isolated observer role with read-only Agent, listener, and task access. The gateway rejects business-data writes, Beacon endpoints, and WebSocket upgrades. The instance contains no production data. Because this temporary demo uses plain HTTP, do…

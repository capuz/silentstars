---
repo: "Derrors/iphone-control"
name: "iphone-control"
description: "Control a real USB-connected iPhone from Linux (no Mac, no paid developer account) and expose it to AI agents as MCP tools"
readmeQualityOk: true
url: "https://github.com/Derrors/iphone-control"
homepage: "https://derrors.github.io/iphone-control/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ai-agent", "automation", "claude", "claude-code", "docker", "ios", "iphone", "linux", "mcp", "mcp-server"]
stars: 89
forks: 13
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-11-01T15:37:29Z"
lastCommitAt: "2026-11-25T13:19:15Z"
lastReleaseAt: "2026-11-12T16:37:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 39
maintainers: ["Derrors", "cosinec", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e2a219726cc95e55347895bd16375e2d9d1b497ba7cb917b4c5038efad6320e/Derrors/iphone-control"
---

Let an AI agent operate a real iPhone or iPad plugged into a Linux machine or a Mac, reliably and fast — one Rust binary, no Xcode, no paid developer account, no jailbreak, and from iOS 27 no Apple ID either.

    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;

## Overview

AI agents can drive browsers and desktops, but a real iPhone is harder: Apple's automation tools need a Mac and Xcode, and the open-source alternatives come as separate pieces that each need their own setup, signing and babysitting.

iphone-control does it all in **one Rust binary** on Linux or macOS, built on [idevice](https://github.com/jkcoxson/idevice), [Impactor](https://github.com/claration/impactor) and [WebDriverAgent](https://github.com/appium/WebDriverAgent). It succeeds [iphone-control-toolkit](https://github.com/Derrors/iphone-control-toolkit) and keeps its MCP tools compatible.

It has three layers, and device control is the core:

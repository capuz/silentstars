---
repo: "sackheads/iris"
name: "iris"
description: "My own stupid local harness"
readmeQualityOk: true
url: "https://github.com/sackheads/iris"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
stars: 6
forks: 2
openIssues: 35
closedIssues: 184
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2026-07-09T23:25:11Z"
lastCommitAt: "2026-10-09T18:57:45Z"
lastReleaseAt: "2026-10-09T00:57:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 58
maintainers: ["bnaylor", "martelrkm"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf1bf8cfe3d4418b6e6a9c0bddac15cb77814827931188ba2988f22af9e633ec/sackheads/iris"
---

# 🌈 Iris: Native macOS Agent Harness

Iris is a lightweight, compiled, native macOS agent harness designed to run autonomous AI workflows locally without heavy runtime dependencies (like Node/npm) that might be blocked by enterprise endpoint management.

It features **native Model Context Protocol (MCP) support** for limitless tool expansion and **built-in zero-dependency Google Workspace integrations** (Calendar, Docs, Drive, Sheets, Gmail, and Tasks).

## 📥 Install

Requires an Apple Silicon Mac running macOS 14 or later.

Download the latest `.dmg` from [GitHub Releases](https://github.com/sackheads/iris/releases),
open it, and drag `Iris.app` to `Applications`. Run it from `/Applications`, not from the mounted
DMG: an app run from the disk image is translocated by macOS and cannot update itself. The app is
notarized, so Gatekeeper opens it without a right-click bypass; the first launch still shows
macOS's standard confirmation that it was downloaded from the Internet.

Keychain prompts appear only for secrets (API keys, etc.) that already exist from a build from
source — older source builds stored them under the installed app's Keychain items, before dev
builds moved to…

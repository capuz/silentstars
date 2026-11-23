---
repo: "theroguevigilante/stm"
name: "stm"
description: "a set and forget approach to slsteam, lumen and lua-tools."
readmeQualityOk: true
url: "https://github.com/theroguevigilante/stm"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-11-21T19:09:23Z"
lastCommitAt: "2026-11-23T10:13:43Z"
lastReleaseAt: "2026-11-23T10:05:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 41
maintainers: ["theroguevigilante"]
openGraphImageUrl: "https://opengraph.githubassets.com/47dc5283f064707d682535d903160748595264bb0caabc624c21fb0ac907a993/theroguevigilante/stm"
---

# Steam Tool Manager (`stm`)

---

## Overview

Managing Steam extensions on Linux (SLSsteam, Lumen, LuaTools, CloudRedirect) has traditionally meant running fragile shell scripts that break after Steam updates, fail on 32-bit / 64-bit runtime changes, crash Cloud Saves, or cause permission issues on immutable distributions like SteamOS and Bazzite.

**stm** replaces messy bash scripts with a single, statically compiled Go binary that manages the entire lifecycle in user-space (`~/.local`). It handles architecture alignment, remote debugging orchestration, snapshot rollbacks, and self-healing diagnostics.

---

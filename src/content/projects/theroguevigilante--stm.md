---
repo: "theroguevigilante/stm"
name: "stm"
description: "a set and forget approach to slsteam, lumen and lua-tools."
readmeQualityOk: true
url: "https://github.com/theroguevigilante/stm"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-21T19:09:23Z"
lastCommitAt: "2026-11-23T12:23:41Z"
lastReleaseAt: "2026-11-23T11:27:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["theroguevigilante"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ab6b8347279f8cd598106ffd0a099c30e85a2f58bbef336c16835c181515bb6/theroguevigilante/stm"
---

# Steam Tool Manager (`stm`)

---

## Overview

Managing Steam extensions on Linux (SLSsteam, Lumen, LuaTools, CloudRedirect) has traditionally meant running fragile shell scripts that break after Steam updates, fail on 32-bit / 64-bit runtime changes, crash Cloud Saves, or cause permission issues on immutable distributions like SteamOS and Bazzite.

**stm** replaces messy bash scripts with a single, statically compiled Go binary that manages the entire lifecycle in user-space (`~/.local`). It handles architecture alignment, remote debugging orchestration, snapshot rollbacks, and self-healing diagnostics.

---

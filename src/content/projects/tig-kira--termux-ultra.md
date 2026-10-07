---
repo: "TiG-Kira/Termux-Ultra"
name: "Termux-Ultra"
description: "Termux App Rebuild - Make Termux Great Again!"
originalDescription: "Termux App Rebuild - Make Termux Great Again!"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TiG-Kira/Termux-Ultra"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [83]
stars: 54
forks: 5
openIssues: 0
closedIssues: 18
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-07-14T19:00:50Z"
lastCommitAt: "2026-10-07T10:30:53Z"
lastReleaseAt: "2026-07-18T10:57:57Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 42
maintainers: ["TiG-Kira", "github-actions[bot]", "YHLFurry"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1300855816/c96ca148-e97e-40af-bde6-d02cd00b0789"
fundingLinks: ["CUSTOM:https://termux.dev/donate"]
---

## Branch Explanation

> ⚠️ Release Strategy Explanation
The current Release branch is a daily build: whenever new features or UI changes need to be released or adjusted, Release triggers a build and pushes a new version with high release frequency.
If you pursue stability, **you don't need to keep up with every daily version**, you only need to upgrade when the minor version number upgrades (such as `3.1.0 → 3.2.0`) or when there are updates marked as emergency fixes.

| Branch | Base | Version | Status |
|--------|------|---------|--------|
| **`main`** 🎯 | Upstream Termux `v0.119.0-beta.3` | 3.x.x.R7 | **Official release mainline**, handling feature development, bug fixes, architecture optimization |
| `release/r1-r4` | Upstream Termux `v0.118.3` | 1.8.0.R4 | 📦 v1.8.x historical snapshot, **feature updates stopped**, only emergency blocking bug fixes |
| `archived/corebump/2.x` | Upstream Termux `v0.119.0-beta.3` | 2.0.0.R5 | 📂 Archived snapshot, retains 2.x internal development steps |

> ✅ **Current mainline is `3.3.3.R7`**, based on upstream Termux v0.119.0, includes libterminal engine, glass top bar, plugin system, Termux Agent, AgentPaw mobile control engine and other…

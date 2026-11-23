---
repo: "zcop/agy-cli-manager"
name: "agy-cli-manager"
description: "Multi-account manager for Antigravity CLI with quota-aware failover, switching policies, and automation APIs."
readmeQualityOk: true
url: "https://github.com/zcop/agy-cli-manager"
homepage: "https://zcop.github.io/agy-cli-manager/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["account-manager", "agy", "antigravity-cli", "automation", "cli", "failover", "gemini-cli", "python", "quota-management", "terminal-dashboard"]
stars: 44
forks: 13
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-06-30T20:20:58Z"
lastCommitAt: "2026-11-23T12:25:27Z"
lastReleaseAt: "2026-10-03T11:39:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 39
maintainers: ["zcop", "redvulps", "Ishannaik"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a74cf053397ec7e1aa5c9ac26f78503761078fbc9edb81a81d7c29baf14554/zcop/agy-cli-manager"
---

# agy-cli-manager

`agy-cli-manager` is a Python account manager for Antigravity CLI (`agy`) with active-standby failover, quota-aware switching, and machine-readable automation APIs.

It helps you run multiple Antigravity CLI accounts more safely by:

- switching away from low-quota or failed accounts
- watching live Antigravity CLI logs for `Individual quota reached` and failing over automatically
- keeping a managed runtime profile in sync with the active account
- exposing CLI and Python APIs for bots, schedulers, and external apps
- supporting manual or automatic account rotation policies

Keywords:
Antigravity CLI account manager, Antigravity CLI multi account manager, Antigravity multi account auth, Antigravity login manager, Antigravity auth manager, Antigravity account switcher, agy multi account manager, agy multi account auth, agy login manager, agy auth manager, agy failover, agy quota switching, Gemini CLI multi account auth, Gemini CLI account rotation.

It is designed for one active account at a time:

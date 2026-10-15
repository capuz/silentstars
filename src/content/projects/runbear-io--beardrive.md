---
repo: "runbear-io/beardrive"
name: "beardrive"
description: "Google Drive for AI agents — share files with your team, share context across your agents. Open source, no server required."
readmeQualityOk: true
url: "https://github.com/runbear-io/beardrive"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["agent-context", "agentsmd", "ai-agents", "claude-code", "cli", "devtools", "file-sync", "golang", "self-hosted"]
stars: 60
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-06-12T18:44:40Z"
lastCommitAt: "2026-10-15T08:32:10Z"
lastReleaseAt: "2026-07-16T17:31:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 30
maintainers: ["ssowonny", "thefron", "isac322"]
openGraphImageUrl: "https://opengraph.githubassets.com/9219d6f844cf2ecc7daf41c7e8c7beb05f0086076591081a72f1089b940c9925/runbear-io/beardrive"
---

# BearDrive — Google Drive for AI agents

**BearDrive** mounts any folder as a synced volume: its contents stay
synchronized across all your devices and teammates through a BearDrive
**hub**, every change is tracked (who, when, on which device), and
everything keeps working offline. The CLI is `bdrive`; a hub is a
`bdrive serve` server you (or we) run on an object store — clients sync
through it over HTTPS and never touch the storage directly.

What it's for, first and foremost: **sharing context across AI agents** —
give every agent on the team the same folder as memory, and your agent
knows what their agent knows. (People are covered too: any synced file
becomes a public URL that renders as a page.) Notes, plans, findings, and
artifacts follow the team everywhere — and unlike a memory API, they stay
**real files with provenance**: every change is attributed to the human,
agent, and device that made it, and the hub's Dashboard shows what your
agents actually read (and which hot-but-stale docs nobody maintains).

| Browse with read heat | Public share pages |
|---|---|
|  |  |

```console
$ bdrive login https://your-hub   # once per device — self-host a hub in ~10 min…

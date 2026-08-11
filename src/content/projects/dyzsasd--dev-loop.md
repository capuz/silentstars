---
repo: "dyzsasd/dev-loop"
name: "dev-loop"
description: "Autonomous PM/QA/Dev agents coordinated via Linear (Claude Code plugin)."
readmeQualityOk: true
url: "https://github.com/dyzsasd/dev-loop"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 20]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-14T08:20:50Z"
lastCommitAt: "2026-08-11T04:47:53Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["dyzsasd"]
openGraphImageUrl: "https://opengraph.githubassets.com/07c9cf41f9fabe0f68954539091eea599693d81e1926f4fa43f0b068cc3c2033/dyzsasd/dev-loop"
---

# dev-loop

**English** · [中文](https://github.com/dyzsasd/dev-loop/blob/HEAD/README.zh-CN.md) · [Français](https://github.com/dyzsasd/dev-loop/blob/HEAD/README.fr.md)

**An autonomous dev team in a folder.** Nine launchable agents (PM, QA, a senior/junior Dev
pair, Sweep, Reflect, Ops, Architect, Communication) build, test, ship, watch, and explain your
software, coordinating purely through ticket state (Linear, or a bundled local hub). You write
the intent in a strategy doc and read one daily digest; the team handles the rest.

You are the **director**, not the reviewer: work enters through the PM (never straight to a
dev), sensitive changes get a senior design first, verification is independent of the
implementer's claims, and everything the team does lands in reports and metrics you can read
in one message a day.

> How it works inside — layers, protocols, backends, self-evolution:
> [`docs/ARCHITECTURE.md`](https://github.com/dyzsasd/dev-loop/blob/HEAD/docs/ARCHITECTURE.md). This README is about **using** it.

---

## Quick start

Three commands, nothing to configure — the default **service** backend (a bundled local
sqlite hub + web board) needs no external service, no…

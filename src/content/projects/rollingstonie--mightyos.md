---
repo: "RollingStonie/MightyOS"
name: "MightyOS"
description: "Hermes fleet brain — agent registry, pipeline contracts, status, bootstrap"
readmeQualityOk: true
url: "https://github.com/RollingStonie/MightyOS"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T16:32:15Z"
lastCommitAt: "2026-08-30T00:45:24Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 48
maintainers: ["RollingStonie"]
openGraphImageUrl: "https://opengraph.githubassets.com/09969e543d4b52c867b598a5cb6041a1a845f43255c6211a57e1cef583cfc6fd/RollingStonie/MightyOS"
---

# MightyOS Brain Repo

Fleet coordination layer for the Hermes agentic OS.

**What lives here:**
- `fleet/registry.yaml` — who each agent is, what tools they use, what they produce
- `fleet/pipeline-contracts.md` — inter-agent interfaces
- `fleet/targets.yaml` — expected daily outputs
- `fleet/status/` — agent liveness files (each agent writes their own)
- `fleet/bootstrap/` — device recovery scripts
- `agents/*/AGENTS.md` — per-agent rules files

**All agents:** `git pull ~/MightyOS` at session start, then `cat fleet/registry.yaml`.

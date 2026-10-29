---
repo: "RollingStonie/MightyOS"
name: "MightyOS"
description: "Hermes fleet brain — agent registry, pipeline contracts, status, bootstrap"
readmeQualityOk: true
url: "https://github.com/RollingStonie/MightyOS"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T16:32:15Z"
lastCommitAt: "2026-10-29T10:21:18Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 45
maintainers: ["RollingStonie"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c6fb30a8d93aaf3065e54e65e65a1be0cc0c4d97d492f16a49a63d20effa2b/RollingStonie/MightyOS"
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

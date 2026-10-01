---
repo: "RollingStonie/MightyOS"
name: "MightyOS"
description: "Hermes fleet brain — agent registry, pipeline contracts, status, bootstrap"
readmeQualityOk: true
url: "https://github.com/RollingStonie/MightyOS"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T16:32:15Z"
lastCommitAt: "2026-10-01T10:23:49Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 46
maintainers: ["RollingStonie"]
openGraphImageUrl: "https://opengraph.githubassets.com/210d03f37c3f26406175ef972c0001f57ab671baca3d233795b3b3e1285356be/RollingStonie/MightyOS"
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

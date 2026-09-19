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
lastCommitAt: "2026-09-19T01:24:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a45c3657b4366a33e7555c78b7d1f767f6094e8802a09984b7553452cc000522/RollingStonie/MightyOS"
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

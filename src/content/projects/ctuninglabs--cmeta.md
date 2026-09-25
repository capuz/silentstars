---
repo: "cTuningLabs/cmeta"
name: "cmeta"
description: "Common Meta Framework (cMeta/cX): code, data, models, scripts, workflows, agents and notes as uniform artifacts behind one CLI and one Python API - for R&D that is collaborative, reproducible, reusable, scalable, portable and sustainable. Plain files, minimal dependencies, and context an AI agent can read."
readmeQualityOk: true
url: "https://github.com/cTuningLabs/cmeta"
homepage: "https://cTuning.ai/project/cmeta"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "aiops", "benchmarking", "cli", "collaboration", "knowledge-graph", "metadata", "mlops", "open-science", "portability"]
stars: 5
forks: 1
openIssues: 4
closedIssues: 30
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-11-07T19:36:44Z"
lastCommitAt: "2026-09-25T09:02:11Z"
lastReleaseAt: "2026-09-15T15:24:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 68
maintainers: ["gfursin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec2d75a98ad80e12fe64a82072ddecab15df57966ccd9720262430fd742b931e/cTuningLabs/cmeta"
---

# cMeta (Common Meta Framework)

**cMeta** (also known as **cX**) is a small, portable framework that turns the pieces
of research and engineering work — code, data, models, toolchains, workflows, agents,
notes, and results — into **uniform, reusable artifacts**: plain directories with one
metadata file, linked to each other by stable identifiers and reached through **one
interface**:

```bash
cx <category> <command> [args] [--flags]          # from a terminal
```

```python
cm.access({'category': ..., 'command': ..., ...})   # from Python
```

We develop cMeta to make R&D **collaborative, reproducible, reusable, scalable,
portable, and sustainable**: work that colleagues and their AI agents can pick up,
run, understand, and build upon years later, in the simplest way that works — no
database, no daemon, no service to stand up, just files, one CLI, one Python API, and
minimal dependencies. It is free and open source under Apache-2.0.

If you know **Obsidian** or other "second brain" tools, the idea will feel familiar:
local plain files, links between everything, an open format you are never locked
into, and plugins. cMeta applies that idea to R&D work and adds one thing — the…

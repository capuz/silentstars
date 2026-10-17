---
repo: "rekursiv-ai/trackinizer"
name: "trackinizer"
description: "Epistemological database for agent and human efforts, beliefs, and findings."
readmeQualityOk: true
url: "https://github.com/rekursiv-ai/trackinizer"
homepage: "https://rekursiv.ai/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 31]
topics: ["agent", "agentic-ai", "automation", "autonomous-agents", "autoresearch", "research", "claude", "cli", "codex", "sagent"]
stars: 123
forks: 19
openIssues: 6
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-07-22T01:26:21Z"
lastCommitAt: "2026-10-17T07:58:13Z"
lastReleaseAt: "2026-10-08T01:39:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 34
maintainers: ["rekursiv-bot", "dhanyamd", "junpenglao"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7716f4dff10f231fd389f91ac46254d5c0ecc7a99cc9f044e789642b4bef6b7/rekursiv-ai/trackinizer"
---

# trackinizer🐾

Epistemological database for agent and human efforts, beliefs, and findings.

[Watch the 27-second tour](https://media.rekursiv.ai/trackinizer-demo/83c919efb291ecd6deaa2ec0/demo.mp4):
the graph, a root's island and a Belief in it, Issues and Artifacts, and a
message to an agent in the console, answered live.

## Quick Start

```bash
# Mac:
#   # Required for quick install.
#   brew install uv
#   # Optional for a real Postgres backend; default uses pglite engine.
#   brew install postgresql@18 pgvector

# Ubuntu/Debian:
#   # Required for quick install.
#   sudo apt-get install -y curl
#   curl -LsSf https://astral.sh/uv/install.sh | sh
#   # Optional for a real Postgres backend; default uses pglite engine.
#   PG_MAJOR="$(apt-cache depends postgresql | grep -m1 -oP 'postgresql-\K\d+')"
#   sudo apt-get install -y postgresql "postgresql-$PG_MAJOR-pgvector"

uv tool install trackinizer

# Local server at http://127.0.0.1:8765.
trackinizer

# CLI to trackinizer server.
trax
```

Centralized agent database for inquiries (Issues + Artifacts), work, and
knowledge. Three core tables (`inquiries`, `edges`, `change_log`) backed
by Postgres (real or PGlite). FastAPI on…

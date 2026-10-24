---
repo: "rekursiv-ai/trackinizer"
name: "trackinizer"
description: "Epistemological database for agent and human efforts, beliefs, and findings."
readmeQualityOk: true
url: "https://github.com/rekursiv-ai/trackinizer"
homepage: "https://rekursiv.ai/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 32]
topics: ["agent", "agentic-ai", "automation", "autonomous-agents", "autoresearch", "research", "claude", "cli", "codex", "sagent"]
stars: 125
forks: 20
openIssues: 3
closedIssues: 9
watchers: 0
contributors: 7
recentReleases: 9
createdAt: "2026-07-22T01:26:21Z"
lastCommitAt: "2026-10-24T08:21:06Z"
lastReleaseAt: "2026-10-23T23:09:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 37
maintainers: ["rekursiv-bot", "rekursiv-sync[bot]", "Abhishek-B-R"]
openGraphImageUrl: "https://opengraph.githubassets.com/174bcbadad61d0c833edf34726c82c8949ece582f8f469ad3beab48a2c5a2571/rekursiv-ai/trackinizer"
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

# `trackinizer` alone installs `trax`, the client; the server is the `server` extra.
uv tool install 'trackinizer[server]'

# Optional: install authoring guidance for your agent (claude, codex, or cursor).
trax doctor --fix --target codex --offline

# Local server at http://127.0.0.1:8765.
trackinizer

# CLI to…

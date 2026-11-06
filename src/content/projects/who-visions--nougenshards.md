---
repo: "Who-Visions/NouGenShards"
name: "NouGenShards"
description: "Local-first AI memory for coding agents. NouGenShards stores reusable \"shards\" in a local SQLite + FTS5 database with outcome-weighted retrieval, so agents recall what worked instead of re-prompting.  Your agents have prompts — mine have shards."
readmeQualityOk: true
url: "https://github.com/Who-Visions/NouGenShards"
homepage: "https://huggingface.co/spaces/nougenai/NouGenShards"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agents", "ai", "developer-tools", "knowledge-base", "local-first", "mcp", "memory", "python", "rag", "sqlite"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-09T20:23:19Z"
lastCommitAt: "2026-11-06T13:19:49Z"
lastReleaseAt: "2026-08-01T02:23:13Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 56
maintainers: ["WhoVisions", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95fac334cba6fb65793f287960e67fd83ecf562e39ed12a0fa7ff17131bfa11f/Who-Visions/NouGenShards"
---

# 🧠 NouGenShards

Persistent local memory for coding agents. Store machine experience as shards across tools and sessions.

## 📚 Contents
- [Installation & Setup](#installation-setup)
- [CLI Workflow: Memory Recon](#cli-workflow-memory-recon)
- [Core Memory & Utility Feedback](#core-memory-utility-feedback)
- [Agent Handoffs](#agent-handoffs)
- [System Architecture: Leverage Over Spend](#system-architecture-leverage-over-spend)
- [Data Sovereignty & License](#data-sovereignty-license)

## 🚀 Installation & Setup

Establish the local memory substrate. Dependencies are strictly pinned to ensure reproducible state across nodes—maximizing momentum and eliminating drift.

```bash
# One-command bootstrap (virtualenv + dependencies + CLI verification):
python tools/bootstrap.py

# Or install directly into active python environment:
pip install .
```

**Windows One-Click Launcher**:
```cmd
nougen.bat
```

## 🔎 CLI Workflow: Memory Recon

Execute the core discovery sequence to map and import fragmented AI tool history. This is the initial leverage point for capturing scattered machine intelligence:

```bash
# Discover local AI history across Claude, Gemini, Cursor, and Codex:
nougen…

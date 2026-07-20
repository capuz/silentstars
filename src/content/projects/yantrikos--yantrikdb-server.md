---
repo: "yantrikos/yantrikdb-server"
name: "yantrikdb-server"
description: "Cognitive memory database for AI agents — consolidates duplicates, detects contradictions, fades stale memories via temporal decay. Rust, AGPL, ships as library / MCP server / HTTP cluster."
readmeQualityOk: true
url: "https://github.com/yantrikos/yantrikdb-server"
homepage: "https://yantrikdb.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 27]
topics: ["ai-agents", "clustering", "cognitive-memory", "database", "llm", "mcp", "memory", "rust", "self-hosted", "vector-database"]
stars: 166
forks: 10
openIssues: 13
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-05T18:08:33Z"
lastCommitAt: "2026-07-20T06:32:26Z"
lastReleaseAt: "2026-04-12T00:36:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 26
maintainers: ["spranab"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd50bbb7b4c7df0166148e944ceb277dd8ac01c52173b574e92cc76de2a0a027/yantrikos/yantrikdb-server"
discussionCount: 0
---

# YantrikDB

> ⚠ **Correction notice (2026-04-19):** Phase 3 benchmark writeups committed
> earlier today (`docs/phase3a/`, `docs/phase3b/`, `docs/phase3c/`,
> `docs/phase3d/`) used a Python simulator for the "structured memory"
> condition — NOT the actual yantrikdb engine. Rerun with real yantrikdb
> is in [`docs/phase3e/`](https://github.com/yantrikos/yantrikdb-server/blob/HEAD/docs/phase3e/). Full audit trail in
> [`CORRECTIONS.md`](https://github.com/yantrikos/yantrikdb-server/blob/HEAD/CORRECTIONS.md). Full corrected findings post
> coming 2026-04-20.

**A memory database that forgets, consolidates, and detects contradictions.**

Vector databases store memories. They don't manage them. After 10,000 memories, recall quality degrades because there's no consolidation, no forgetting, no conflict resolution. Your AI agent just gets noisier.

YantrikDB is different. It's a **cognitive memory engine** — embed it, run it as a server, or connect via MCP. It thinks about what it stores.

**Shortest path to try it:** [MCP setup for Claude Code / Cursor / Windsurf →](#get-started-in-60-seconds--claude-code--cursor--windsurf) (one `pip install`, one config block).

> **The bigger…

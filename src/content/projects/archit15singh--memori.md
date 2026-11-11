---
repo: "archit15singh/memori"
name: "memori"
description: "Persistent memory for AI coding agents — SQLite + FTS5 + vector search in a single file"
readmeQualityOk: true
url: "https://github.com/archit15singh/memori"
homepage: "https://archit15singh.github.io/posts/2026-02-28-designing-cli-tools-for-ai-agents/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [44, 41]
topics: ["ai-agents", "cli", "memory", "ai-agent", "claude-code", "developer-tools", "embeddings", "fts5", "llm", "rust"]
stars: 25
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-27T20:16:35Z"
lastCommitAt: "2026-11-11T19:44:40Z"
lastReleaseAt: "2026-09-20T22:42:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 31
maintainers: ["archit15singh", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/80eaea7080309107bd7e0e0377f089e177c17ea715ccb4713471fec9f3174ac8/archit15singh/memori"
discussionCount: 0
---

# Memori

> Persistent memory for AI coding agents — Rust + SQLite + FTS5 + vector search in a single file.

AI agents forget everything between sessions. Memori gives them a persistent memory layer that accumulates knowledge over time — so every session starts with the context it needs, not from zero.

```bash
pip install py-memori                # 1. install (Linux/macOS/Windows, Python 3.9-3.13)
cd ~ && memori setup                  # 2. wire into Claude Code (writes ~/.claude/tools/memori/SNIPPET.md)
memori store "Chose SQLite over Postgres for zero-config portability." --meta '{"type":"decision"}'
memori search --text "database choice"   # hybrid FTS5 + vector, auto-vectorized
```

> **Status:** v0.7.1 released Sep 2026 ([CHANGELOG](https://github.com/archit15singh/memori/blob/HEAD/CHANGELOG.md)) · **Platforms:** Linux, macOS (Intel + Apple Silicon), Windows · **No API keys, no cloud, no LLM dependency**

---

## What you get

- **Session continuity** — your agent remembers the bug from yesterday, the architecture decision from last week, that you prefer Tailwind over Bootstrap.
- **Zero config** — one SQLite file stores text, 384-dim embeddings, JSON metadata, access stats.…

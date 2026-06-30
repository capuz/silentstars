---
repo: "smriti-memcore/smriti-memcore"
name: "smriti-memcore"
description: "A neuro-inspired memory architecture for AI agents"
url: "https://github.com/smriti-memcore/smriti-memcore"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 7
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T23:53:29Z"
lastCommitAt: "2026-06-30T06:50:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 39
maintainers: ["shivamtyagi-flex", "shivamtyagi18", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/439467cf2b454cd97d134c0bb1a69d77dd6ce61bfc2bf87e5c9d72be9b522817/smriti-memcore/smriti-memcore"
---

</p>

<h1 align="center">SMRITI Memcore</h1>

  <strong>Enterprise-grade, privacy-first Long-Term Memory (LTM) engine for LLM agents, multi-agent frameworks, and MCP clients.</strong>
</p>

---

## 💡 What is SMRITI?

SMRITI is a high-performance, neuro-inspired long-term memory layer designed to give AI agents persistent, adaptive recall without blocking their real-time execution loop. 

Inspired by human Dual-Process cognitive theory, SMRITI splits memory operations into:
1. **System 1 (Immediate Heuristics)**: Decoupled, millisecond-level ingestion of raw interactions into an append-only Episode Buffer.
2. **System 2 (Async Consolidation)**: Background LLM-driven consolidation that extracts knowledge graphs, resolves contradictions, identifies skills, and decays weak memories.

---

## ⚔️ SMRITI vs. Naive RAG & Vector Databases

| Feature | Naive RAG / Vector DBs | SMRITI Memory Engine |
|---|---|---|
| **Latency** | Scales linearly with context size; blocks agent loops | **Sub-5ms ingestion** (System 1); System 2 is asynchronous |
| **Context Window** | Stuffs raw logs, leading to prompt bloat and distraction | **Miller's Law (7 ± 2 slots)** capacity-bounded Working Memory |
|…

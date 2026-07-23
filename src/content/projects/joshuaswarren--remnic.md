---
repo: "joshuaswarren/remnic"
name: "remnic"
description: "Open-source memory and context for user-aware agents: scoped memory, provenance, retrieval quality, correction, boundaries, evals, and MCP/HTTP access."
readmeQualityOk: true
url: "https://github.com/joshuaswarren/remnic"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai-agent", "ai-memory", "conversational-ai", "engram", "knowledge-graph", "llm", "local-first", "long-term-memory", "markdown", "memory-plugin"]
stars: 125
forks: 18
openIssues: 53
closedIssues: 462
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-05T15:04:53Z"
lastCommitAt: "2026-07-23T06:14:51Z"
lastReleaseAt: "2026-02-22T12:48:07Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 31
maintainers: ["joshuaswarren", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e89cd4a14891aab60e04c3919ea4e2f1ddc901a91e23c4c54b97b1cbd2cedac/joshuaswarren/remnic"
fundingLinks: ["GITHUB:https://github.com/joshuaswarren"]
discussionCount: 3
---

# Remnic

Open-source, local-first memory and context for AI agents. One memory store, every agent.

- **Your files, your machine.** Every memory is a plain markdown file with YAML frontmatter on your disk. No database, no cloud dependency, no subscription. `cat`, `grep`, edit, and version-control your memory with the tools you already use.
- **One memory across every tool.** OpenClaw, Claude Code, Codex CLI, Cursor, ChatGPT (developer mode), Hermes, Replit, Pi, omp, and any MCP client read and write the same store. Tell one agent a preference; every agent knows it.
- **Automatic extraction and recall.** Remnic watches conversations, distills durable knowledge, and injects the right context back when it is needed.
- **Sharp retrieval.** Hybrid search (BM25 + vector + reranking) over rebuildable indexes, with graph recall, memory-worth scoring, and per-result provenance you can inspect.
- **MIT licensed.** Free, open, and built to be forked.

## OpenAI Build Week 2026: Remnic Relay

**Correct once. Every agent learns.**

Remnic is shared memory for AI agents. **Remnic Relay** is the human-governed
correction loop we built for OpenAI Build Week: it exposes the stale belief
behind an…

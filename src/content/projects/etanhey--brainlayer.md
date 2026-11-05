---
repo: "EtanHey/brainlayer"
name: "brainlayer"
description: "Persistent memory MCP for AI agents — SQLite, knowledge graph, 13-tool Python MCP + 17-tool BrainBar surface with ToolAnnotations"
readmeQualityOk: true
url: "https://github.com/EtanHey/brainlayer"
homepage: "https://brainlayer.etanheyman.com/"
language: "Python"
languages: ["Python", "Swift"]
languagePcts: [74, 23]
topics: ["ai-agents", "ai-memory", "claude-code", "knowledge-graph", "llm", "mcp", "python", "rag", "semantic-search", "sqlite-vec"]
stars: 9
forks: 7
openIssues: 112
closedIssues: 93
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-19T10:16:32Z"
lastCommitAt: "2026-11-05T11:24:39Z"
lastReleaseAt: "2026-07-20T17:42:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 66
maintainers: ["EtanHey"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfe94c0b23a16606cd611c4634e52b7de82ee0ac26713b66b1239f2f512d11fd/EtanHey/brainlayer"
---

# BrainLayer

> Your AI has amnesia. BrainLayer fixes that.

Every architecture decision, every debugging session, every preference you've expressed — **gone between sessions.** You repeat yourself constantly. Your agents rediscover bugs they already fixed, and re-make choices the team already reasoned through.

BrainLayer gives any MCP-compatible AI agent persistent memory across conversations — and gives a whole **fleet** of agents a shared organizational memory: what one agent learns (a fix, a decision, what eroded and why) becomes experience the others inherit before they repeat the mistake. One SQLite file. No cloud. No Docker. Just `pip install`.

```text
"What approach did I use for auth last month?"     →  brain_search
"Remember this decision for later"                 →  brain_store
"What was I working on yesterday?"                 →  brain_recall
"Ingest this meeting transcript"                   →  brain_digest
"What do we know about this person?"               →  brain_get_person
```

## Quick Start

```bash
pip install brainlayer
```

MCP examples require the Homebrew BrainLayer bridge. On Intel, replace
`/opt/homebrew/opt/brainlayer` with…

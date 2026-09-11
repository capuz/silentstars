---
repo: "Cantara/kcp-memory"
name: "kcp-memory"
description: "Episodic memory daemon for Claude Code — indexes session transcripts into SQLite with FTS5"
readmeQualityOk: true
url: "https://github.com/Cantara/kcp-memory"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 3
closedIssues: 15
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-03-03T14:25:30Z"
lastCommitAt: "2026-09-11T08:16:28Z"
lastReleaseAt: "2026-03-24T17:29:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 52
maintainers: ["totto", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ac8373c032757ec4c6397869c0a624d8507e9749b330969724ebf3e2edd05d/Cantara/kcp-memory"
---

# kcp-memory

### 🧾 See it run — [interactive KCP playground](https://cantara.github.io/pi-kcp/playground/) · [read the reveal](https://wiki.totto.org/blog/2026/07/22/the-ai-agent-that-keeps-the-receipts/)

**Episodic memory for Claude Code, Gemini CLI, and Codex CLI.** Indexes your session transcripts and tool-call events into a local SQLite database — searchable in milliseconds. Available as a CLI, an HTTP API, and an MCP server so Claude can query its own history inline.

```bash
# CLI
kcp-memory search "OAuth implementation"
kcp-memory events search "kubectl apply"
kcp-memory stats

# MCP — Claude queries directly during a session (10 tools)
# Register once in ~/.claude/settings.json, then call inline:
#   kcp_memory_search · kcp_memory_events_search · kcp_memory_list
#   kcp_memory_stats · kcp_memory_session_detail · kcp_memory_project_context
#   kcp_memory_subagent_search · kcp_memory_session_tree          (v0.5.0)
#   kcp_memory_analyze                                            (v0.17.0)
#   kcp_memory_stats (includes RFC-0017 bridge usage)             (v0.19.0)
```

Part of the [KCP ecosystem](https://github.com/Cantara/knowledge-context-protocol).

---

## The…

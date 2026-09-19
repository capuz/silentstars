---
repo: "iampantherr/SecureContext"
name: "SecureContext"
description: "Persistent memory + security layer for Claude Code (MCP plugin). Agents remember your project across sessions (~87% fewer context tokens), every tool call lands in a tamper-evident HMAC audit chain, and skills are AST-scanned + HMAC-verified before they run. 100% local: PostgreSQL + Ollama, no cloud, MIT."
readmeQualityOk: true
url: "https://github.com/iampantherr/SecureContext"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai-agent-memory", "claude-code", "claude-code-plugin", "context-management", "context-window", "hybrid-search", "knowledge-base", "llm-memory", "mcp", "mcp-server"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T04:15:09Z"
lastCommitAt: "2026-09-19T01:35:38Z"
lastReleaseAt: "2026-04-18T00:42:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4c01c3b6fa65c487ec87161bcfaa010b6a967b250b7cc6f42dbdd4ced9dddaba/iampantherr/SecureContext"
---

# SecureContext

> **SecureContext is the persistent memory, delivery, and security layer for Claude Code.** It gives coding agents project memory that survives every restart, a program/phase layer for delivering long-running projects with orchestrator handoff, a cryptographic audit trail for every tool call, and an HMAC-verified admission gate for Anthropic-style filesystem skills. Runs 100% locally on PostgreSQL + Ollama — no cloud sync, no subscription, MIT-licensed.

> **Note for security scanners:** `security-tests/` intentionally contains prompt-injection and tool-abuse payloads — they are red-team fixtures that verify SecureContext blocks those attacks, not live threats.

---

## What is SecureContext?

If you use Claude Code on real projects, you have hit these walls:

1. **Every session starts cold.** You re-paste the same files, re-explain the same decisions, re-discover the same gotchas — and pay tokens for the same orientation work over and over.
2. **Long projects have no delivery state.** When an orchestrating agent dies mid-feature (crash, closed window, exhausted context), its replacement starts blind. People compensate with hand-written CHECKPOINT files.
3.…

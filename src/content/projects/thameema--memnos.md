---
repo: "thameema/memnos"
name: "memnos"
description: "Persistent memory for AI coding agents — MCP server, REST API & Python SDK. Works with Claude Code, Cursor, Windsurf and any LLM agent."
readmeQualityOk: true
url: "https://github.com/thameema/memnos"
homepage: "https://memnos.net"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agent-memory", "ai-agent", "arcadedb", "claude-code", "cursor-ai", "knowledge-graph", "langchain", "llm-memory", "mcp-server", "memory-management"]
stars: 7
forks: 0
openIssues: 9
closedIssues: 27
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-22T03:37:13Z"
lastCommitAt: "2026-08-07T05:16:10Z"
lastReleaseAt: "2026-06-13T13:55:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 60
maintainers: ["thameema"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ef35e58bc97a784cdd4cd9ed5be5cc0268007ec9cfa6a29de0a71a77893177/thameema/memnos"
discussionCount: 0
---

# memnos

**Shared, governed memory for your team's AI coding agents — on your own Postgres.**

memnos is a self-hosted memory server for AI agents. Your conversations are captured,
distilled into facts, and recalled in later sessions — across Claude Code, Cursor,
Windsurf, Codex, or anything that speaks MCP, REST, or an OpenAI/Anthropic-compatible
base URL. It runs on **one PostgreSQL + pgvector database** (no second vector store, no
graph database), uses **no LLM at query time**, and ships with governance — token auth,
namespace ACLs, audit log, and an encrypted secret vault — in the open-source build.

Apache-2.0 · self-hostable · single-org · local-first · `uv tool install memnos`

*It doesn't just remember — it knows what's true **now**: when a new fact contradicts an
old one, bi-temporal supersession closes the old fact out, and recall shows the transition.*

---

## Your AI remembers your repo. memnos remembers your team.

CLAUDE.md, Cursor rules, native model memory — all genuinely useful, and all the same
shape: **local and per-developer.** They sit on one machine, scoped to one repo or one
person's chat history. The knowledge that actually gets lost is *between*…

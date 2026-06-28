---
repo: "oleksiijko/pmb"
name: "pmb"
description: "Local-first persistent memory for AI coding agents (Claude Code, Cursor, Codex) over MCP. Decisions, lessons and facts live in one SQLite file on your disk. Offline, multilingual."
url: "https://github.com/oleksiijko/pmb"
homepage: "https://pypi.org/project/pmb-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "ai-memory", "bm25", "claude-code", "codex", "cursor", "knowledge-graph", "lancedb", "llm", "local-first"]
stars: 192
forks: 10
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-05-25T00:05:59Z"
lastCommitAt: "2026-06-28T01:45:36Z"
lastReleaseAt: "2026-06-26T00:15:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 26
maintainers: ["oleksiijko"]
openGraphImageUrl: "https://opengraph.githubassets.com/97ce2d8ef883c13f0c7c34441d5d0da8910689f4c21bbbdee1ab6a4639fca372/oleksiijko/pmb"
discussionCount: 1
---

# PMB

### Local-first memory for your AI coding agent.
### SQLite is the source of truth. No cloud, no API keys, no re-explaining.

*Local-first memory, visualized. 3,800+ entities and 41,000+ connections, captured automatically as you work.*

[**Website**](https://pmbai.dev) · [**Docs**](https://docs.pmbai.dev) · [Quickstart](#quickstart) · [Demo](#demo) · [Why PMB](#why-pmb) · [How it works](#how-it-works) · [FAQ](#faq)

**Your AI agent forgets everything between sessions.** So you re-explain the same
decisions, lessons and constraints over and over. PMB remembers them in one
local workspace and feeds them back through MCP - no cloud, no API keys, no LLM
call on the read path. And it tells you **when memory is actually helping**,
instead of claiming "+X%".

⭐ **Star the repo if PMB saves you a re-explanation.**

</div>

---

PMB gives Claude Code, Cursor, Codex and the other MCP-aware agents a real
memory: decisions you made last week, lessons you taught them, personal facts,
project structure, PDFs. They survive every restart, every model upgrade, every
agent switch - because they live in a **local workspace you own**, with SQLite
as the durable source of truth and rebuildable…

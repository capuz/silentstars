---
repo: "memtomem/memtomem-stm"
name: "memtomem-stm"
description: "Short-term memory proxy gateway with proactive memory surfacing for AI agents"
readmeQualityOk: true
url: "https://github.com/memtomem/memtomem-stm"
homepage: "https://memtomem.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "caching", "claude", "compression", "llm", "mcp", "mcp-proxy", "memory", "proxy", "python"]
stars: 5
forks: 7
openIssues: 22
closedIssues: 215
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-09T10:21:59Z"
lastCommitAt: "2026-08-28T12:22:22Z"
lastReleaseAt: "2026-04-19T13:28:48Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["memtomem", "pandas-studio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5312785c2b186662b22bc9407c16341d4c57336f9ad99f37065e5eb6500fb15d/memtomem/memtomem-stm"
discussionCount: 1
---

# memtomem-stm

**Official website & docs: [https://memtomem.com](https://memtomem.com)**

> 🚧 **Alpha** — APIs and defaults may change between 0.x minor releases. Feedback and issue reports are especially welcome: [Issues](https://github.com/memtomem/memtomem-stm/issues) · [Discussions](https://github.com/memtomem/memtomem-stm/discussions).

Spend fewer tokens. Remember more. Ship faster.

memtomem-stm is an MCP proxy that can substantially reduce the model-visible
size of large tool responses and surface **cross-session memory from a
configured memtomem LTM** — with no changes to your upstream MCP servers. The
actual reduction depends on response shape, compression strategy, and whether
the call travels through MCP; verify it against your workload with the
repository's deterministic `bench_qa` suite.

It sits between your AI agent and its upstream MCP servers, compressing tool responses, caching repeated calls, and automatically surfacing relevant context from prior sessions via a memtomem LTM server.

**What memtomem-stm does:**
- **Cuts token spend on repeated reads** — compresses and caches tool responses, so the agent doesn't re-pay for the same file or search result. Works…

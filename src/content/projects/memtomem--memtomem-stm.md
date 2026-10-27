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
openIssues: 17
closedIssues: 344
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-09T10:21:59Z"
lastCommitAt: "2026-10-27T12:40:12Z"
lastReleaseAt: "2026-04-19T13:28:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 78
maintainers: ["memtomem", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96207959a8493be2b39dc1c068739dcaa0c716b781e1d20343967b51b6cf3c/memtomem/memtomem-stm"
discussionCount: 1
---

# memtomem-stm

**Official website & docs: [https://memtomem.com](https://memtomem.com)**

> 🧪 **Beta** — the core proxy path (compression, caching, surfacing) is ready for everyday use. APIs and defaults may still change between 0.x minor releases, always with an Upgrade notes entry, and a few features are marked [experimental](https://github.com/memtomem/memtomem-stm/blob/main/README.md#feature-maturity). Feedback and issue reports are especially welcome: [Issues](https://github.com/memtomem/memtomem-stm/issues) · [Discussions](https://github.com/memtomem/memtomem-stm/discussions).

Spend fewer tokens. Remember more. Ship faster.

memtomem-stm is an MCP proxy that can substantially reduce the model-visible
size of large tool responses and surface **cross-session memory from a
configured memtomem LTM** — with no changes to your upstream MCP servers. The
actual reduction depends on response shape, compression strategy, and whether
the call travels through MCP; verify it against your workload with the
repository's deterministic `bench_qa` suite.

It sits between your AI agent and its upstream MCP servers, compressing tool responses, caching repeated calls, and automatically…

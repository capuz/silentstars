---
repo: "Vinix24/vnx-orchestration"
name: "vnx-orchestration"
description: "Governance-first orchestration for Claude Code, Codex, and Gemini CLI — parallel workers, receipts, quality gates, and full provenance."
readmeQualityOk: true
url: "https://github.com/Vinix24/vnx-orchestration"
homepage: "https://vincentvandeth.nl/blog/glass-box-governance-multi-agent-ai"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-orchestration", "claude-code", "devtools", "governance", "multi-agent", "tmux", "ai-agents", "audit-trail", "ai-coding", "automation"]
stars: 62
forks: 8
openIssues: 1
closedIssues: 17
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-19T12:28:20Z"
lastCommitAt: "2026-10-27T12:39:48Z"
lastReleaseAt: "2026-07-02T13:49:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["Vinix24"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137480904/413db189-a67c-42fb-92a4-954acbc8e175"
discussionCount: 1
---

# VNX Orchestration

### Governance-first runtime for AI coding agents

**Glass-box governance · Multiple CLIs on subscription, not per-call API credit · Local NDJSON receipts**

&nbsp;
&nbsp;[](LICENSE)
&nbsp;[](https://github.com/Vinix24/vnx-orchestration/actions)

&nbsp;
&nbsp;

**[Docs](https://github.com/Vinix24/vnx-orchestration/blob/HEAD/docs/) · [Architecture](https://github.com/Vinix24/vnx-orchestration/blob/HEAD/docs/core/00_VNX_ARCHITECTURE.md) · [State Fabric](https://github.com/Vinix24/vnx-orchestration/blob/HEAD/docs/core/STATE_FABRIC.md) · [ADRs](https://github.com/Vinix24/vnx-orchestration/blob/HEAD/docs/governance/decisions/) · [Writing](https://vincentvandeth.nl) · [Changelog](https://github.com/Vinix24/vnx-orchestration/blob/HEAD/CHANGELOG.md)**

---

VNX runs AI coding CLI workers in isolated git worktrees, through review gates, with an append-only NDJSON receipt per dispatch.

It is a local control plane for the AI coding CLIs that already sit on your machine. One orchestrator dispatches work to ephemeral workers; each worker runs in its own git worktree; review gates decide what merges; every dispatch leaves a receipt. VNX drives `claude`, `codex`, `gemini`,…

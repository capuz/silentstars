---
repo: "XAGI-Lab/melra"
name: "melra"
description: "Open-source local MCP runtime that checks AI-agent tool calls, gates risky actions on approval, verifies results, and avoids blind retries after timeouts."
readmeQualityOk: true
url: "https://github.com/XAGI-Lab/melra"
homepage: "https://xagilab.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-runtime", "agent-safety", "ai-agents", "mcp", "mcp-server", "model-context-protocol", "open-source", "verification", "local-first", "python"]
stars: 13
forks: 6
openIssues: 11
closedIssues: 124
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-07-28T10:12:28Z"
lastCommitAt: "2026-11-12T11:43:56Z"
lastReleaseAt: "2026-08-08T15:27:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["dhe-eraj-s", "yunusarda-sudo", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1314829929/b48af8a2-49dd-423c-9684-508e839169ed"
discussionCount: 3
---

# MELRA

**M**odular **E**xecution **L**ayer for **R**eliable **A**utonomy

### Your AI agent decides what to do. MELRA governs how tool calls are authorized, verified, and recovered.

An open-source local execution runtime for agent tool calls you route through MELRA.
It checks each call against policy, requests approval when needed, verifies declared
evidence, and keeps a redacted receipt of what runs to an outcome. For each task, MELRA
dispatches mutations at most once; uncertain outcomes are parked for reconciliation
instead of replay. Exactly-once external effects still depend on the provider. Calls
made through other tools remain outside MELRA's control.

**Works with** &nbsp;

[**Demo**](#demo) &nbsp;·&nbsp; [**Quick start**](#quick-start) &nbsp;·&nbsp; [**How it works**](#how-it-works) &nbsp;·&nbsp; [**See what it is doing**](#see-what-it-is-doing) &nbsp;·&nbsp; [**Docs**](#documentation) &nbsp;·&nbsp; [**Contribute**](#contributing) &nbsp;·&nbsp; [**Discussions**](https://github.com/XAGI-Lab/melra/discussions) &nbsp;·&nbsp; [**Product Hunt launch**](https://www.producthunt.com/products/melra)

### Demo…

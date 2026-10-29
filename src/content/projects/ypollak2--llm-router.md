---
repo: "ypollak2/llm-router"
name: "llm-router"
description: "Universal LLM router for AI coding tools. Works with Claude Code, Cursor, Codex, Gemini CLI, Copilot and more. Free-first fallback chain cuts costs 35-80%."
readmeQualityOk: true
url: "https://github.com/ypollak2/llm-router"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-routing", "anthropic", "claude", "claude-code", "cost-optimization", "gemini", "litellm", "llm", "llm-router", "mcp-server"]
stars: 120
forks: 17
openIssues: 3
closedIssues: 47
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-28T21:49:28Z"
lastCommitAt: "2026-10-29T05:51:01Z"
lastReleaseAt: "2026-04-06T21:31:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["ypollak2"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3ff03a65fbb185b3c4d5133a3123c9c2fea1d36bef1fede0b2df508fe67de1d/ypollak2/llm-router"
---

llm-router hooks into your coding tool's own lifecycle, reads each prompt before the
  model does, and drafts an answer on a free or local model first. No API keys needed
  on a Claude subscription — routing runs through MCP tools and local models.

  turn unless you opt in to zero-Claude mode. By default some tool calls wait until a
  prompt is routed; <code>LLM_ROUTER_ENFORCE=off</code> turns that off (all user settings: <a href="docs/configuration.md">docs/configuration.md</a>). Draft-rate and
  acceptance figures live in <a href="docs/MEASUREMENT.md">docs/MEASUREMENT.md</a>, with
  their n, window and conditions.</sub>

- [Why install this](#why-install-this)
- [Quick Start](#quick-start)
- [Works With](#works-with)
- [How It Works](#how-it-works)
- [Features](#features)
- [Reference](#reference)
- [Savings](#savings)
- [Trust and Security](#trust-and-security)
- [Documentation](#documentation)
- [Enterprise, Contributing, License](#enterprise-contributing-license)

---

## Why install this

You are on a Claude Pro or Max plan, have not spent a cent beyond it, and still
hit the five-hour limit — not because you asked too much, but because *every*
prompt went to the premium…

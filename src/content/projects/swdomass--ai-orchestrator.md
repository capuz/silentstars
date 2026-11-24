---
repo: "swDomass/AI_orchestrator"
name: "AI_orchestrator"
description: "Autonomous orchestrator for Claude/Gemini/Codex CLIs. Markdown-driven queue with multi-provider fallback, policy gating, and full audit trail."
readmeQualityOk: true
url: "https://github.com/swDomass/AI_orchestrator"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["automation", "claude-code", "codex", "gemini", "llm", "obsidian", "python", "ai-agent", "anthropic", "autonomous-agent"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T20:42:57Z"
lastCommitAt: "2026-11-24T13:06:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 58
maintainers: ["swDomass", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb0d2dd1869f5ef8f457961b62afa80c128410657c7cf748b45cfa72ebbd221/swDomass/AI_orchestrator"
---

# AI Orchestrator

Autonomous task executor for the `claude` and `codex` CLI tools — driven by a Markdown queue file, with multi-provider fallback, Telegram control, and a security/approval layer.

> **Provider status (2026-09-04).** The active fallback chain is **Claude → Codex**. Gemini is still implemented (`providers/gemini.py`, HTTP API + legacy CLI) and every `#gemini*` tag still resolves, but it left `dispatcher._PRIORITY` and the `tool_providers:` allow-list of `policy.example.yaml` — nothing routes there by default. OpenRouter, Mistral Vibe and opencode CLI remain opt-in and never enter the chain. See [Provider status in detail](#provider-status-in-detail).

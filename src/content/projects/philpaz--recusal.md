---
repo: "philpaz/recusal"
name: "recusal"
description: "Deterministic governance for AI agent tool calls in Claude Code, MCP, LangGraph, or any agent loop. Pin approved capabilities, detect drift, and refuse unsafe or unapproved actions before execution. No model in the decision path."
readmeQualityOk: true
url: "https://github.com/philpaz/recusal"
homepage: "https://recusal.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-governance", "ai-agents", "ai-safety", "claude", "guardrails", "llm", "agent-security", "agentic-ai", "ai-governance", "claude-code"]
stars: 7
forks: 14
openIssues: 19
closedIssues: 43
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2026-07-06T00:45:29Z"
lastCommitAt: "2026-11-22T01:18:40Z"
lastReleaseAt: "2026-07-12T18:29:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["philpaz", "hananbahi527", "BuildWithPranav"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290452277/0f0b2635-3ab6-49a9-9e11-a541ffc448d1"
discussionCount: 1
---

# Recusal

**Recusal checks each tool call an AI agent proposes against your policy, and refuses
the unsafe or unapproved ones before the tool runs. No model makes that decision; your
policy functions do.**

It drops into Claude Code as a hook, [MCP tool calls included](#mcp-tools-the-same-gate),
and gates a Claude Messages API loop or any Python agent loop. For agent frameworks there
are [eight adapter packages](#the-kernel-and-its-adapters), each tested against its
framework: LangGraph, LangChain, the OpenAI API and Agents SDK, Google ADK, CrewAI and
Pydantic AI. The kernel has zero runtime dependencies and runs on Python 3.9+.

**Website: [recusal.io](https://recusal.io)**, with an interactive demo of the gate.

**Contents:** [See it refuse](#see-it-refuse-20-seconds-no-api-key-no-clone) ·
[Works with](#works-with) · [Adapters](#the-kernel-and-its-adapters) ·
[Install](#install) · [Policies](#write-the-policy-two-postures-one-principle) ·
[MCP](#mcp-tools-the-same-gate) · [Audit](#tamper-evident-audit) ·
[How it works](#how-it-works) · [CI](#gate-your-ci) ·
[Built to be checked](#built-to-be-checked) · [Documentation](#documentation)

---
repo: "tiagovilasboas/downshift"
name: "downshift"
description: "Reduce token usage and LLM API cost in AI coding agents: compact verbose command output, right-size subagent models, flag wasted prompt cache. Deterministic, fail-open hooks for Claude Code, Cursor, Codex and OpenCode. No LLM in the loop."
readmeQualityOk: true
url: "https://github.com/tiagovilasboas/downshift"
homepage: "https://downshift-ai.vercel.app/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["agent-harness", "ai-agents", "claude-code", "claude-code-hooks", "codex", "cost-optimization", "cursor", "golang", "model-routing", "subagents"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 33
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-20T22:19:58Z"
lastCommitAt: "2026-11-03T12:47:40Z"
lastReleaseAt: "2026-10-15T04:35:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["tiagovilasboas"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1378823603/c5ddd023-f331-4337-b068-530e6e848d2e"
discussionCount: 1
---

### Compact verbose output. Let the orchestrator pick each subagent's model. Cut AI coding agent token use.

Downshift compacts verbose command output, applies the model the orchestrator chose for each
subagent (bounded by your policy), and learns which commands need new compressors. Its own code
never calls an LLM.

[Get Started](#get-started) · [Features](#features) · [Agent Orchestration](#5-agent-orchestration-context-triggers) · [Token Savings](#token-savings) · [Documentation](#documentation)

**Reduce AI coding agent token use, with no LLM call in Downshift's own code.** Downshift is a token
optimization and model delegation tool for AI coding agents — Claude Code, Cursor, Codex, OpenCode,
Antigravity, and KiroCrew (Experimental). It compacts verbose command output before it fills the context
window, applies the orchestrator's model choice for each subagent within the bounds you declare,
and counts the tokens it saved, per harness.

---

## The Problem

AI coding agents (Claude Code, Cursor, Codex, KiroCrew (Experimental), and others) spend most of their context
window on verbose command output that carries little signal — a problem that context engineering
and token…

---
repo: "ferrislucas/Circus-Chief"
name: "Circus-Chief"
description: "Open-source meta-harness for Claude Code, OpenAI Codex, and Gemini CLI coding agents"
readmeQualityOk: true
url: "https://github.com/ferrislucas/Circus-Chief"
homepage: "https://www.npmjs.com/package/circuschief"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "gemini-cli", "agentic-ai", "agentic-workflow", "agents", "claude"]
stars: 13
forks: 3
openIssues: 1
closedIssues: 89
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2025-12-07T23:05:11Z"
lastCommitAt: "2026-10-25T22:11:33Z"
lastReleaseAt: "2026-08-05T03:27:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 72
maintainers: ["ferrislucas", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3536b63a02d5e4850d9c49b9dbcf14e1496d20b00d6505ee8211f28cd950bf8/ferrislucas/Circus-Chief"
---

An open-source, touch-optimized control plane for managing AI coding agents.<br/><br/>
  Supports Claude Code agents (any Anthropic-compatible provider), OpenAI Codex agents (any OpenAI-compatible provider), Google Gemini CLI agents, and Muse Code agents.
  Works with API key or subscription-based authorization.

---

## Features

- **Agents can operate Circus Chief itself.** Each agent can inspect sessions, spawn follow-ups, schedule retries, stop/restart work, and react to results.
  
- **Visual Kanban board per project.** Lanes can auto-move cards on completion and run a template or custom prompt when a card lands in them — so the board can drive the workflow, not just reflect it.
  
  
- **Schedule work ahead of time.** Plan agent sessions for a later time, from one-off prompts to full template pipelines.
  
- **Opt-in retry on usage limits.** Toggle it on for a session and, if it hits a token cap or provider outage, it reschedules itself and picks up where it left off.
  
- **Configurable, chainable templates.** Each template defines a prompt and session settings, and one template can auto-launch the next. Example pipeline: *plan → review plan → implement the plan → review…

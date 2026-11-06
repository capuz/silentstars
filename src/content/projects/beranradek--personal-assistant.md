---
repo: "beranradek/personal-assistant"
name: "personal-assistant"
description: "Personal AI assistant with secured sandbox, memory (markdowns and hybrid search, episodic memory), integrations - adapters, heartbeat proactivity and skills"
readmeQualityOk: true
url: "https://github.com/beranradek/personal-assistant"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T09:36:32Z"
lastCommitAt: "2026-11-06T11:23:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["beranradek"]
openGraphImageUrl: "https://opengraph.githubassets.com/d724e400e873fc9d37508d39d241150a0381a467c64d46f71124ea76783afe3b/beranradek/personal-assistant"
---

# Personal Assistant

A secured, sandboxed personal assistant with pluggable agent backends:

- **Claude** via the Claude Agent SDK (commonly paired with Claude Code CLI)
- **OpenAI Codex** via `@openai/codex-sdk` (alternative to Claude Code)

Runs as a standalone terminal or as a headless daemon with Telegram and Slack adapters.

## Prerequisites

- **Node.js 22+**
- Choose an agent backend:
  - **Claude backend:** Claude Code CLI authenticated via `claude login` or an Anthropic API key
  - **Codex backend:** OpenAI API key + Codex CLI (see `docs/settings/openai_codex_agent.md`)

### Anthropic usage note (third-party harnesses)

Anthropic does not support using monthly Claude subscription limits for third-party harnesses that heavily and regularly use their servers (this project falls into that category when used as an always-on assistant). Use an **Anthropic API key** or enable **token extra usage** for your account.

Anthropic's official statement:

> You’ll no longer be able to use your Claude subscription limits for third-party harnesses including OpenClaw. Instead, using these harnesses will require extra usage. Your subscription usage still covers all Claude products,…

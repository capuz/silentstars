---
repo: "sublang-ai/cligent"
name: "cligent"
description: "Unified TypeScript SDK for AI agents - Claude Code, Codex, Gemini CLI, OpenCode, and more"
readmeQualityOk: true
url: "https://github.com/sublang-ai/cligent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agents", "claude-code", "cli", "codex-cli", "developer-tools", "gemini-cli", "opencode", "sdk", "typescript", "coding-agents"]
stars: 52
forks: 1
openIssues: 20
closedIssues: 14
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-01-02T10:30:49Z"
lastCommitAt: "2026-08-29T10:17:16Z"
lastReleaseAt: "2026-06-09T03:45:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 38
maintainers: ["slalph"]
openGraphImageUrl: "https://opengraph.githubassets.com/4278b1847ee10ed7346ce8edd35aca9bf26efb534efd59ef4ca1f8d2e37b28ae/sublang-ai/cligent"
---

# cligent

Unified TypeScript SDK for AI coding agent CLIs (Claude Code, Codex CLI, Gemini CLI, Kimi Code, OpenCode, and more).

Register an adapter, send a prompt, and consume a single async event stream — regardless of which agent runs underneath.

## Install

```bash
npm install @sublang/cligent
```

The agent SDKs are optional peer dependencies — add the one(s) for the
adapters you use:

```bash
# `>=` keeps the declaration open so a cligent upgrade can carry the runtime
# forward. A bare `npm install <pkg>` writes a caret instead, and for a
# `0.MINOR.PATCH` package a caret pins the minor: `^0.139.0` never reaches
# `0.146.0`, however often you run `npm update`.
npm install "@anthropic-ai/claude-agent-sdk@>=0.3.219"   # Claude Code
npm install "@openai/codex-sdk@>=0.144.0"                # Codex
npm install "@opencode-ai/sdk@>=1.18.12"                 # OpenCode
```

Gemini and default managed-mode OpenCode also need their CLI on `PATH`.
External-mode OpenCode connects to a caller-owned server and needs only the
SDK. Kimi has its own pinned CLI setup below.

```bash
npm install -g @google/gemini-cli   # Gemini CLI
npm install -g opencode-ai          # OpenCode managed server…

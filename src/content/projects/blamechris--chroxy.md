---
repo: "blamechris/chroxy"
name: "chroxy"
description: "Control your AI coding agents from anywhere — monitor sessions, approve permissions, and orchestrate Claude Code, Gemini, and Codex remotely."
readmeQualityOk: true
url: "https://github.com/blamechris/chroxy"
homepage: "https://www.blamechris.com/chroxy-docs/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [58, 39]
topics: ["ai-agents", "claude", "developer-tools", "mcp", "orchestration", "remote-control"]
stars: 6
forks: 1
openIssues: 273
closedIssues: 3854
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-05T20:08:55Z"
lastCommitAt: "2026-09-11T08:15:03Z"
lastReleaseAt: "2026-05-26T02:38:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["blamechris"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1150888922/334176f7-be74-47d9-a5bc-25c6bce80fdb"
---

# Chroxy

> Control your AI coding agents from anywhere — monitor sessions, approve permissions, and orchestrate Claude Code, Gemini, and Codex remotely.

</p>

Run a lightweight daemon on your dev machine and connect from your phone or desktop over a secure outbound tunnel. Chroxy turns long-running agent sessions into something you can actually supervise from anywhere: a chat view that parses the AI CLI's output into readable messages, a full terminal for the raw stream, push notifications when a session needs you, and permission prompts you can answer from your phone. Pluggable session providers cover Claude Code (Agent SDK, legacy CLI, or the interactive TUI), Google Gemini, OpenAI Codex, DeepSeek, local models via Ollama, your own Anthropic API key (BYOK), and any config-driven OpenAI- or Anthropic-compatible endpoint (LM Studio, OpenRouter, vLLM, …). See [docs/providers.md](https://github.com/blamechris/chroxy/blob/HEAD/docs/providers.md).

> **Claude is the default, not a requirement.** The daemon defaults to the `claude-tui` provider out of the box, but a Codex-, Gemini-, Ollama-, or BYOK-only setup needs no `claude` binary at all — set `"provider"` in…

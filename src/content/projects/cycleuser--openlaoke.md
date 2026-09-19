---
repo: "cycleuser/OpenLaoKe"
name: "OpenLaoKe"
description: "A simple tool to use models to help on coding."
readmeQualityOk: true
url: "https://github.com/cycleuser/OpenLaoKe"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-03T15:04:16Z"
lastCommitAt: "2026-09-19T01:17:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 38
maintainers: ["cycleuser"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d52dd439ed58d6d4206d0928d8bffd6f3501097a5cdfe26b46ad66d55bb2ac8/cycleuser/OpenLaoKe"
---

# OpenLaoKe

> A terminal coding agent that follows [pi](https://github.com/earendil-works/pi)'s design — minimal, fast, extensible, implemented in Python.

## What OpenLaoKe is

OpenLaoKe **follows pi's design, implemented in Python**. It keeps pi's core idea — a tiny, opinionated agent loop that you extend yourself — and drops almost everything else.

- **9 tools**, matching pi's surface: `Read`, `Write`, `Edit`, `Bash`, `Grep`, `Glob`, `ListDirectory`, `PowerShell`, plus `InvokeSkill` for on-demand skills.
- **pi's 23 built-in commands**, plus prompt templates and skills.
- **Session tree with branch / fork / clone / rewind**, backed by append-only files.
- **Prompt templates** (`/name` and `/prompt <name>`), with `$1`, `$@`, `${1:-default}`, `${@:N:L}`.
- **20+ providers, spoken natively** — Anthropic Messages, OpenAI Chat Completions, Google `generateContent`, AWS Bedrock and Cohere; the rest (DeepSeek, Ollama Cloud, Azure, xAI, Mistral, Groq, OpenRouter, Copilot, Aliyun, MiniMax, OpenCode Zen) ride the OpenAI format, and so do local servers (Ollama, LM Studio, vLLM).
- ~19k lines of Python. No MCP, no sub-agents, no plan mode, no permission popups, no background bash.

###…

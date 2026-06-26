---
repo: "yuanchuan/aivo"
name: "aivo"
description: "Use your favorite coding agent with the model you want."
url: "https://github.com/yuanchuan/aivo"
homepage: "https://getaivo.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["claude-code", "codex", "gemini-cli", "github-copilot", "openrouter", "vercel-ai-gateway"]
stars: 167
forks: 10
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-02-26T05:08:24Z"
lastCommitAt: "2026-06-26T06:45:49Z"
lastReleaseAt: "2026-04-30T00:50:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 33
maintainers: ["yuanchuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6465aeafc1fbd01e4244c403ed5998b190ad81407fdcee8a7f355d335a856b28/yuanchuan/aivo"
---

> Aivo is a command-line tool that connects your existing coding agent to the model you want.
> It includes starter models to get you going — no API key required.

## Docs

https://getaivo.dev

## Install

Install script (macOS, Linux):

```bash
curl -fsSL https://getaivo.dev/install.sh | bash
```

Homebrew:

```bash
brew install yuanchuan/tap/aivo
```

PowerShell (Windows):

```powershell
irm https://getaivo.dev/install.ps1 | iex
```

## Quick Start

The built-in `aivo/starter` provider activates on first run, so no key is required to try it:

```bash
aivo "tell me a short story"
aivo claude
```

Add a key to access more models:

```bash
aivo keys add                                # interactive picker
aivo claude
aivo claude --model moonshotai/kimi-k2.5     # pin a model
```

## Supported coding agents

| Command | Agent | Type |
| ------- | ----- | ---- |
| `claude` | [Claude Code](https://github.com/anthropics/claude-code) | built-in |
| `codex` | [Codex](https://github.com/openai/codex) | built-in |
| `codex-app` | [Codex.app](https://github.com/openai/codex) desktop (macOS only, experimental) | built-in |
| `gemini` | [Gemini CLI](https://github.com/google-gemini/gemini-cli)…

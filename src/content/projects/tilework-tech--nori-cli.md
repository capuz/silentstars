---
repo: "tilework-tech/nori-cli"
name: "nori-cli"
description: "A simple CLI for working with any agent"
readmeQualityOk: true
url: "https://github.com/tilework-tech/nori-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 166
forks: 11
openIssues: 3
closedIssues: 4
watchers: 3
contributors: 262
recentReleases: 0
createdAt: "2025-10-31T16:52:34Z"
lastCommitAt: "2026-08-11T04:50:16Z"
lastReleaseAt: "2026-01-12T21:36:45Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 32
maintainers: ["CSRessel", "nori-sessions[bot]", "theahura"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aba5bc808a255688b7e472aff46db5491705f05549fac01c33e3d48f82d5acb/tilework-tech/nori-cli"
---

# Nori CLI

**One CLI, multiple AI providers.** Nori is a local AI coding agent that lets you switch between Claude, Codex, Gemini, or any ACP compatible agent. All from the same native CLI.

## Install

```bash
npm install -g nori-ai-cli
```

Or download binaries from [GitHub Releases](https://github.com/tilework-tech/nori-cli/releases/latest).

## Quick Start

```bash
nori
```

That's it. The agent you choose will rely on existing auth if you have previously been using Claude Code, Codex, or Gemini on this system (and if not, login instructions are below). Nori launches an interactive TUI where you can chat, run commands, and let the AI assist with your codebase.

## Providers

Each provider you plan to use needs to be authenticated separately before use. Then switch between AI providers with the `/agent` command.

Currently each agent relies on an existing authenticated session on your system. If you're coming in from another CLI tool, great!
You should be good to go. If not, first follow the authentication for your desired provider:

| Provider | Authentication…

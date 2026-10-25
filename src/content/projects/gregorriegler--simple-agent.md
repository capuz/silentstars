---
repo: "gregorriegler/simple-agent"
name: "simple-agent"
description: "Simple Agent is a CLI agent designed to orchestrate focused agents with human oversight."
readmeQualityOk: true
url: "https://github.com/gregorriegler/simple-agent"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-08-30T17:51:40Z"
lastCommitAt: "2026-10-25T22:12:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 68
maintainers: ["gregorriegler"]
openGraphImageUrl: "https://opengraph.githubassets.com/8356d739644c564a82db926366383b8d2923c137b7e64c513974922cf5f90d0f/gregorriegler/simple-agent"
---

# Simple Agent

Simple Agent aims to be a simple, transparent, general-purpose agent TUI.

## Features

- Real-time observers: attach independent observer agents (e.g. naming, code quality) that monitor changes and provide immediate feedback
- Transparency: observe every tool call and agent decision with ease
- Tab-based multi-agent TUI: view and manage multiple agents side by side
- Session continuation: pause and resume sessions with `--continue`
- Markdown-driven subagents: build modular agents from simple markdown files
- CLI-first design: built for command-line use, with optional non-interactive mode
- API integration: works with OpenAI, Anthropic, and Google Gemini APIs

## Installation and Usage

### Install globally (recommended)
```bash
uv tool install .
agent "your message here"
agent --agent <agent-type>  # defines the starting agent
agent --continue            # continue previous session
agent --system-prompt       # print rendered system prompt
agent --non-interactive     # suppress interactive prompts
agent --help                # show all options
```

### Slash commands

During a session, type these in the input prompt:

- `/clear` — clear conversation history
-…

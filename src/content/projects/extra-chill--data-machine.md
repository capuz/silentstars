---
repo: "Extra-Chill/data-machine"
name: "data-machine"
description: "Agentic operating system for WordPress."
readmeQualityOk: true
url: "https://github.com/Extra-Chill/data-machine"
homepage: "https://chubes.net/docs/data-machine"
language: "PHP"
languages: ["PHP"]
languagePcts: [95]
topics: ["wordpress-plugin", "action-scheduler", "abilities-api", "ai-agents", "wp-cli"]
stars: 33
forks: 6
openIssues: 99
closedIssues: 1226
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-05T05:57:23Z"
lastCommitAt: "2026-07-28T14:56:52Z"
lastReleaseAt: "2026-04-28T00:59:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["homeboy-ci[bot]", "chubes4"]
openGraphImageUrl: "https://opengraph.githubassets.com/d75d183e851b719837ca0a2d15a6f6bcb1f558804d027f8e77c38ea5a2af9da3/Extra-Chill/data-machine"
---

# Data Machine

Agentic workflow automation for WordPress.

Click the badge to open a fresh Data Machine in a browser-only WordPress instance. The Playground boots WordPress, installs Data Machine plus its substrate (Agents API and the WordPress AI Provider for OpenAI), and drops you into the Data Machine admin. Add your own OpenAI key in Settings to start chatting with an agent or running a pipeline. Nothing persists once the tab closes.

## What It Does

Data Machine turns a WordPress site into an agent runtime — persistent identity, memory, pipelines, abilities, and tools that AI agents use to operate autonomously.

- **Pipelines** — Multi-step workflows: fetch content, process with AI, publish anywhere
- **Abilities API** — Typed, permissioned functions that agents and extensions call (`datamachine/upload-media`, `datamachine/validate-media`, etc.)
- **Agent memory** — Layered markdown files (SOUL.md + MEMORY.md in agent layer, USER.md in user layer) injected into every AI context
- **Multi-agent** — Multiple agents with scoped pipelines, flows, jobs, and filesystem directories
- **Self-scheduling** — Agents schedule their own recurring tasks using flows, prompt queues, and…

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
stars: 39
forks: 7
openIssues: 62
closedIssues: 1572
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-05T05:57:23Z"
lastCommitAt: "2026-10-21T21:14:32Z"
lastReleaseAt: "2026-04-28T00:59:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da94424f23ffee9b72a8d7cfe9eaac43ddf50ada6d4fe879e46d207e473599dd/Extra-Chill/data-machine"
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

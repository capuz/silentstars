---
repo: "probelabs/visor"
name: "visor"
description: "Visor — AI workflow engine for code review, assistants, and automation. Orchestrates checks, MCP tools, and AI providers with YAML-driven pipelines. Runs as GitHub Action, CLI, Slack bot, or HTTP API."
readmeQualityOk: true
url: "https://github.com/probelabs/visor"
homepage: "https://probelabs.com/visor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "automation", "cli", "code-review", "github-actions", "typescript", "ai-agents", "mcp", "slack-bot", "workflow-engine"]
stars: 23
forks: 2
openIssues: 2
closedIssues: 35
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-09-04T19:02:47Z"
lastCommitAt: "2026-08-22T04:07:32Z"
lastReleaseAt: "2025-09-16T10:26:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 40
maintainers: ["buger", "actions-user", "probelabs[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e0cf402db2a8a5edebdc64136e9796fcd60ffb2e0cbb24150104fef18eb0616/probelabs/visor"
---

# Visor — AI workflow engine for code review, assistants & automation

  Orchestrate checks, MCP tools, and AI providers with YAML-driven pipelines.
  Runs as GitHub Action, CLI, Slack bot, Telegram bot, or HTTP API.
</div>

---

Visor is an open-source workflow engine that lets you define multi-step AI pipelines in YAML. Wire up shell commands, AI providers, MCP tools, HTTP calls, and custom scripts into dependency-aware DAGs — then run them from your terminal, CI, Slack, Telegram, Email, WhatsApp, Teams, or an HTTP endpoint.

**What you get out of the box:**

- **YAML-driven pipelines** — define checks, transforms, routing, and AI prompts in a single config file.
- **8 runtime modes** — CLI, GitHub Action, Slack bot, Telegram bot, Email, WhatsApp, Teams, HTTP server — same config, any surface.
- **17 provider types** — `ai`, `command`, `script`, `mcp`, `utcp`, `http`, `claude-code`, `a2a`, `github`, `memory`, `workflow`, and more.
- **AI orchestration** — multi-provider (Gemini, Claude, OpenAI, Bedrock), session reuse, MCP/UTCP tool calling, retry & fallback.
- **Execution engine** — dependency DAGs, parallel waves, forEach fan-out, conditional routing, failure auto-remediation.…

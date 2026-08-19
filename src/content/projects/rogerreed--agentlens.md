---
repo: "RogerReed/agentlens"
name: "agentlens"
description: "Agentic AI monitoring and observability — OTEL traces and local log files from Copilot, Claude Code, Codex, and OpenCode. Token usage, cost, summaries, and efficiency insights. VS Code extension, npx, and Docker."
readmeQualityOk: true
url: "https://github.com/RogerReed/agentlens"
homepage: "https://marketplace.visualstudio.com/items?itemName=agentlens.agentlens-dashboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "ai-agents", "claude", "codex", "context", "copilot", "cost", "cost-estimation", "docker", "llm"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 80
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-24T18:11:47Z"
lastCommitAt: "2026-08-19T04:07:00Z"
lastReleaseAt: "2026-06-05T03:48:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["RogerReed"]
openGraphImageUrl: "https://opengraph.githubassets.com/2796ea65f783d03d0996fc976822ddf627f922626b1505b3aafd3039e5d6d134/RogerReed/agentlens"
---

<h1><img src="media/mascot.png" alt="AgentLens logo" width="48" align="center" /> AgentLens</h1>

Local monitoring and observability for agentic AI coding tools — see what's actually happening inside each run. Nothing leaves your machine.

AgentLens receives **OpenTelemetry traces** from Copilot, Claude Code, and Codex in real time, giving you span timing, time-to-first-token, per-tool latency, and file diffs. It also reads the **local session files** each agent writes automatically — including OpenCode's **SQLite database** — as a zero-config fallback that backfills history from before you set anything up. Both sources appear in one dashboard; OTEL takes precedence when available.

Two things it does that a usage dashboard doesn't:

- **Catches agents that are stuck.** Five named loop and malfunction patterns — identical tool calls repeated, edits oscillating between two states, the same error recurring, runaway scope, context accumulating while progress collapses — each with a correction prompt you can paste straight into the session. [See the full list →](#recommendations--malfunction-detection)
- **Tells you what to fix in your instructions file.** The Advisor reads across…

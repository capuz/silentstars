---
repo: "surpradhan/agent-event-protocol"
name: "agent-event-protocol"
description: "AEP is an open observability protocol for AI agent systems - giving you structured event capture, real-time session tracing, and multi-agent workflow visibility in a single self-hosted deployment."
readmeQualityOk: true
url: "https://github.com/surpradhan/agent-event-protocol"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 23]
topics: ["ai-agents", "javascript", "multi-agent", "observability", "open-protocol", "self-hosted", "tracing"]
stars: 5
forks: 6
openIssues: 7
closedIssues: 24
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-03-15T11:31:10Z"
lastCommitAt: "2026-07-30T06:08:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["surpradhan", "ahmed-hashi-01", "Ayushmann13479"]
openGraphImageUrl: "https://opengraph.githubassets.com/20f5c97ef79f7927c541250a46ed941b04a0ad17c46a3686534d06bc7489ab2b/surpradhan/agent-event-protocol"
discussionCount: 0
---

# Agent Event Protocol (AEP)

> Structured observability for AI agent systems: capture, trace, and debug agent workflows in real time.

> **📍 Project direction (2026-06):** AEP is converging on OpenTelemetry rather than continuing as a standalone protocol. Active development is moving toward contributions to the OTel GenAI semantic conventions. This repo remains published and usable, but the envelope/server here is now a **reference implementation**, not the forward roadmap.

**Stop flying blind with AI agents.** AEP is a lightweight, structured observability framework for multi-agent systems. Capture causation chains, debug orchestration logic, visualize agent workflows: all in real time.

Perfect for:
- 🎯 **Orchestrators** managing multiple agents and sub-agents
- 🔍 **Researchers** studying agent behavior and decision trees
- 🏢 **Enterprises** auditing agent actions for compliance
- 👨‍💻 **Developers** debugging complex agentic systems

---

## 🚀 Quick Start (2 minutes)

**Requirements:** Node.js 20+

### Local Development

The dashboard and read APIs are open in dev mode, but **ingest (`POST /events`)
always requires a write-scoped API key** — so the quick start mints one…

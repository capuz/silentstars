---
repo: "Francis1998/multi-bot-agentic"
name: "multi-bot-agentic"
description: "Deterministic, auditable multi-bot AI-agent orchestrator: Observe→Decide→Act loop with rationale traces, replayable SQLite event log with resume and time-travel forks, OpenTelemetry GenAI trace export, MCP tool bridge (2026-07-28 + legacy), safety controls, and GPT-6, Claude 5.5 / Fable 5.2, Gemini 4 and Kimi K3.1 adapters."
readmeQualityOk: true
url: "https://github.com/Francis1998/multi-bot-agentic"
homepage: "https://github.com/Francis1998/multi-bot-agentic#readme"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "claude-code", "gemini", "kimi", "llm", "multi-agent", "openai", "python", "observe-decide-act", "ai-agents"]
stars: 10
forks: 0
openIssues: 8
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T05:39:31Z"
lastCommitAt: "2026-11-13T05:42:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["Francis1998", "cursor[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec1aac0b34677ebfe1a5c9431c6769155e2cbde3ac6e2d741879d1b5c160558d/Francis1998/multi-bot-agentic"
---

# multi-bot-agentic

**A deterministic, auditable orchestrator for multi-bot AI agents.** Models propose, and a rule-based
**Observe → Decide → Act** engine decides. Every decision, tool call, and MCP call is written to a
replayable SQLite event log. It runs fully offline with a deterministic fake provider, and it works with GPT-6,
Claude 5.5 and Fable 5.2, Gemini 4 and 3.8 Flash, Kimi K3.1, and any
[Model Context Protocol](https://modelcontextprotocol.io) server. It is a portfolio-quality, local-first reference
implementation.

## Why

- **The model is an input, not the control plane.** LLM output becomes an observation. A deterministic decision
  engine picks the next action and records a `RationaleTrace`: the rule, the observations it used, and the
  actions it rejected.
- **Every run is auditable.** Lifecycle transitions, observations, decisions, and tool and MCP calls are
  persisted per run. `replay`, `report`, and `trace` never call a provider, so postmortems are safe and
  deterministic.
- **Observable where you already look.** `trace` exports any recorded run as an OpenTelemetry GenAI trace for
  Jaeger, Grafana Tempo, or Langfuse, or as a Mermaid sequence diagram of who…

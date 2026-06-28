---
repo: "tylerjrbuell/reactive-agents-ts"
name: "reactive-agents-ts"
description: "A composable TypeScript framework for building reliable LLM agents on a harness you fully control. The same code runs the agent loop on every model tier — local 4B to frontier — with tool-call healing, verification, and durable crash-resume, on a typed 12-phase engine where every step emits an event you can hook into. Effect-TS, MCP-native, MIT."
url: "https://github.com/tylerjrbuell/reactive-agents-ts"
homepage: "https://docs.reactiveagents.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["agent-framework", "agent-observability", "agent-orchestration", "agentic-ai", "anthropic", "bun", "composable", "effect-ts", "google-ai", "llm"]
stars: 16
forks: 3
openIssues: 33
closedIssues: 80
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-19T14:01:27Z"
lastCommitAt: "2026-06-28T03:08:52Z"
lastReleaseAt: "2026-03-05T00:38:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["tylerjrbuell", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161775137/cce51a15-70a2-4731-a6ed-adadfa74c33c"
discussionCount: 2
---

# Reactive Agents

A composable TypeScript framework for building reliable LLM agents on a harness you fully control. It wraps the agent loop — think, call a tool, observe, repeat — and keeps the loop finishing across model tiers while exposing every step as a typed event you can hook into. Three things it's built around:

- 🛡️ **Reliable on every model tier.** Tool-call healing, output verification, durable crash-resume, and a single-owner termination oracle let the *same code* finish the agent loop on a local 4B Ollama model and on Claude / GPT / Gemini.
- 🔍 **Transparent.** A deterministic 12-phase execution engine with `before` / `after` / `on-error` hooks on every phase. Every prompt, tool call, and reasoning step is a typed event you can inspect, steer, and replay — locally, no SaaS dashboard required.
- 🧩 **Composable.** A typed builder of opt-in layers. Start with a model; add reasoning, 4-tier memory, guardrails, cost routing, and durability one `.with()` call at a time.

Built on Effect-TS — schema-validated boundaries, tagged errors, no untyped throws.

|                              |                                                                  |
|…

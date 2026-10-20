---
repo: "GizClaw/flowcraft"
name: "flowcraft"
description: "Production-grade Go SDK for building AI agents with long-term memory, knowledge retrieval, and voice — runnable as a library, a daemon, or a real-time pipeline."
readmeQualityOk: true
url: "https://github.com/GizClaw/flowcraft"
homepage: "https://gizclaw.github.io/flowcraft/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent-framework", "agent-runtime", "agents", "ai", "ai-agents", "anthropic", "go", "golang", "llm", "llm-orchestration"]
stars: 416
forks: 14
openIssues: 4
closedIssues: 101
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-04-14T07:49:44Z"
lastCommitAt: "2026-10-20T08:49:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 27
maintainers: ["lIang70", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7beffab825dbd3bd219c7684b2a88f649b0fe24d6bd31e3a85c0f1b8f0bf5d3/GizClaw/flowcraft"
---

# FlowCraft

**A modular Go toolkit for extensible AI applications, long-term memory, provider backends, and local interactive workflows.**

---

FlowCraft is a Go workspace for building and evaluating AI applications without
tying application code to one model provider or execution model. Graphs are one
built-in option, not a required architecture: use the core packages directly, or
start with the forge demo in `examples/forge` for a runnable local workspace, or
the anvil example in `examples/anvil` for a minimal `craft` host application.

## Modules

- **`core`** — The single platform module: agent execution, graph, tool,
  model, message, skills, inference, memory contracts, event bus, telemetry,
  workspace, sandbox, deployment/resource assembly, runtime, sessions, and
  delegation contracts.
- **`craft`** — Application assembly on top of `core`: the `craft.yaml`
  definition, compile-time capabilities, the MCP plugin host (plugin processes
  as MCP servers, host primitives as MCP tools for plugins), tools / graph
  nodes / skills / hooks / UI contributed by plugins, and the process-level
  `craft/manager` lifecycle. Plugins install from a directory or a zip
  package, update…

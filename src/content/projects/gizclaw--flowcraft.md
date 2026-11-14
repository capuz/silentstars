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
stars: 411
forks: 12
openIssues: 4
closedIssues: 101
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-04-14T07:49:44Z"
lastCommitAt: "2026-11-14T10:43:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 28
maintainers: ["lIang70", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43a92a18df8fc995c7fd1a9f7d0bdaada42681787e7e5e30f2eb082294dfe393/GizClaw/flowcraft"
---

# FlowCraft

**A Go platform for building AI agents: model calls, tools, sandboxed execution, and declarative graphs — assembled from YAML and owned by your process.**

---

FlowCraft is a Go workspace for building agent deployments without tying
application code to one model provider or one execution model. A deployment is a
document: which agents exist, what each runs on, and what each is allowed to do.
The platform builds that document into something you own — one `Runtime` per
agent, a session table, an HTTP surface — and leaves prompting, persistence and
your product's own policies in your hands.

Graphs are one execution engine, not a required architecture: use the packages
directly, or start from the forge demo in `examples/forge`.

## Modules

- **`core`** — the platform module: message and permission contracts, inference
  (with the OpenAI and Anthropic protocol families), tools, sandbox, the runtime,
  agent execution with the graph engine and A2A, deployment documents and kinds,
  and telemetry.
- **`driver`** — provider adapters that are not protocol families, one package
  each: `bytedance`, `dashscope`, `minimax`.
- **`examples/forge`** — a runnable local demo: a…

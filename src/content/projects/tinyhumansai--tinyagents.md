---
repo: "tinyhumansai/tinyagents"
name: "tinyagents"
description: "A small, provider-neutral agent harness written in Rust"
readmeQualityOk: true
url: "https://github.com/tinyhumansai/tinyagents"
homepage: "https://github.com/tinyhumansai/tinyagents/wiki"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent-framework", "ai-agents", "llm", "rust", "artificial-intelligence", "automation", "developer-tools", "multi-agent", "open-source", "workflow-automation"]
stars: 115
forks: 23
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-06-29T04:42:44Z"
lastCommitAt: "2026-10-01T10:23:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 35
maintainers: ["senamakel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1283610217/0d4e8c00-b6b0-4fb8-bbe7-b014b36608e7"
---

<h1 align="center">TinyAgents</h1>

</p>

</p>

TinyAgents is a small, provider-neutral agent harness for Rust, plus a durable
typed state-graph runtime. It takes its shape from
[LangChain](https://www.langchain.com/) (models, tools, middleware, structured
output, streaming, usage/cost) and
[LangGraph](https://www.langchain.com/langgraph) (`START`/`END`, nodes,
conditional edges, channels/reducers, checkpoints, interrupts, subgraphs, time
travel) — rebuilt as ordinary, typed Rust with no hidden magic.

It is for Rust services that need to call models and tools in a loop, want
that loop to be resumable and inspectable, and would rather not carry a
Python runtime or a framework's DSL to get there.

## What's inside

TinyAgents is a Cargo workspace, not one crate. Depend on the pieces you need:

- **`tinyagents-harness`** — provider-neutral model calls, typed tools,
  middleware, structured output, streaming, usage/cost accounting, retries,
  caching, and a Claude Code CLI model adapter with stream-json,
  session, authentication, and MCP endpoint support. Features: `sqlite`,
  `tools`, `multimodal`, `tracing`.
- **`tinyagents-graph`** — a LangGraph-style durable, typed state graph:…

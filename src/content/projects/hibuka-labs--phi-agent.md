---
repo: "hibuka-labs/phi-agent"
name: "phi-agent"
description: "Rust AI Agent framework with MCP support, extensible tools, streaming & multi-agent orchestration"
readmeQualityOk: true
url: "https://github.com/hibuka-labs/phi-agent"
homepage: "https://docs.phiagent.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent-framework", "ai-agent", "async", "cli", "llm", "mcp", "openai", "repl", "rust", "streaming"]
stars: 15
forks: 5
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-26T11:07:12Z"
lastCommitAt: "2026-09-27T09:28:30Z"
lastReleaseAt: "2026-09-05T23:41:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["hibuka-labs", "slegarraga"]
openGraphImageUrl: "https://opengraph.githubassets.com/a16ae5c175d20a8fd8d70aeb79d4baaf461c38ef9c9055592142e205fc530f3c/hibuka-labs/phi-agent"
discussionCount: 2
---

# phi-agent — Rust AI Agent Framework

<picture><source media="(prefers-color-scheme: dark)" srcset="assets/logo.svg"><img alt="phi-agent" src="assets/logo.svg" height="60"></picture>

Rust AI Agent runtime framework — orchestration, sessions, streaming all built-in. You only define tools, prompts, and domain knowledge.

> **phi-agent ships with zero application tools.** No web search, no database connector, no code executor — just a clean Rust runtime. What tools your agent needs is entirely up to you. Kernel primitives (file I/O, shell, sub-agents) are available via `phi-kernel-tools` as opt-in infrastructure behind feature flags. File tools and MCP are on by default; shell and multi-agent are opt-in.

Built on [agent-base](https://crates.io/crates/agent-base) and [agent-works](https://crates.io/crates/agent-works). **phi-agent provides the infrastructure. You bring the tools.**

## Ecosystem

| Crate | crates.io | Description |
|-------|-----------|-------------|
| `agent-base` | [](https://crates.io/crates/agent-base) | Lightweight runtime kernel — LLM clients, Tool trait, event stream |
| `agent-works` | [](https://crates.io/crates/agent-works) | Batteries-included toolbox —…

---
repo: "actioncard/a2a-elixir"
name: "a2a-elixir"
description: "Elixir implementation of the Agent-to-Agent (A2A) protocol (https://a2a-protocol.org)."
readmeQualityOk: true
url: "https://github.com/actioncard/a2a-elixir"
homepage: "https://hex.pm/packages/a2a"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
topics: ["a2a", "a2a-client", "a2a-protocol", "a2a-server", "agent-to-agent", "elixr", "hex-package", "protocol"]
stars: 21
forks: 5
openIssues: 7
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-26T08:14:02Z"
lastCommitAt: "2026-09-23T08:47:10Z"
lastReleaseAt: "2026-03-06T14:42:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["maxekman", "dependabot[bot]", "zeroasterisk"]
openGraphImageUrl: "https://opengraph.githubassets.com/007466e8b146ce946180b3ed35b3d7439332fe3e9d5a7a4ca7f0d12a3889f90a/actioncard/a2a-elixir"
---

# A2A

Elixir implementation of the [Agent-to-Agent (A2A) protocol](https://google.github.io/A2A/) — a standard for AI agents to communicate over JSON-RPC 2.0.

A2A gives you behaviour-based agents that run as GenServer processes. Define an agent, serve it over HTTP, or call remote agents — all with idiomatic Elixir patterns.

> **Pre-release**: This library is under active development. The API may change before 1.0.

> [!NOTE]
> This project is developed with _significant_ AI assistance (Claude, Copilot, etc.)

## Features

- **Behaviour-based agents** — `use A2A.Agent` generates a full GenServer with task lifecycle management
- **Multi-turn conversations** — continue tasks with `task_id` for stateful back-and-forth
- **Streaming** — return `{:stream, enumerable}` from agents; SSE over HTTP
- **HTTP serving** — `A2A.Plug` handles agent card discovery, JSON-RPC dispatch, and SSE streaming
- **HTTP client** — `A2A.Client` for discovering and calling remote A2A agents
- **Agent registry** — `A2A.Registry` for skill-based agent discovery
- **Supervision** — `A2A.AgentSupervisor` starts a fleet of agents with one call
- **Pluggable storage** — `A2A.TaskStore` behaviour with built-in…

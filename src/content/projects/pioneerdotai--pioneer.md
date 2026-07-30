---
repo: "pioneerdotai/pioneer"
name: "pioneer"
description: "Local-first AI assistant runtime with native desktop, self-hosted gateway, MCP, memory, tools, tasks, and BYO models. Built in Rust."
readmeQualityOk: true
url: "https://github.com/pioneerdotai/pioneer"
homepage: "https://docs.getpioneer.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent", "ai-assistant", "anthropic", "cross-platform", "desktop-app", "gateway", "gpui", "llm", "mcp", "model-context-protocol"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-01T18:36:21Z"
lastCommitAt: "2026-07-30T06:07:28Z"
lastReleaseAt: "2026-05-30T11:57:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["superoskin"]
openGraphImageUrl: "https://opengraph.githubassets.com/53dc2c59b0f8cc1febb4b8e481ec2a0360518c2b19a5e4e7a092d608028af6ab/pioneerdotai/pioneer"
---

</p>

<h1 align="center">Pioneer — Personal AI Assistant</h1>

  <strong>You own the assistant. You own the data. You choose where the gateway runs.</strong>
</p>

</p>

  ·
  ·
  ·
  ·
  ·
</p>

</p>

**Pioneer** is a local-first AI workspace for running an assistant on your own machine or on infrastructure you control. It combines a persistent gateway, a native desktop app, a JSON-RPC protocol, provider adapters, durable threads, agent memory, task automation, MCP servers, skills, and real local tools.

The gateway is the core of Pioneer. It owns state, configuration, storage, model access, task execution, tool execution, MCP runtime, skills, and thread history. The desktop app is the primary client for connecting to one or more gateways, whether the gateway is running on the same computer or on a remote server.

> **Early-stage warning**
>
> Pioneer is in an extremely early stage of development. Expect rough edges, breaking changes, and incomplete flows. Use it carefully, and test it in a safe environment before trusting it with important work or exposing a gateway outside your machine.
>
> Tool runs are not sandboxed yet. Tools currently execute as the OS user running the…

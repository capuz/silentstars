---
repo: "substructureai/subs"
name: "subs"
description: "subs is an agent harness for the cloud. It runs an unprivileged agent loop and uses MCP servers for executing tools. Use it locally, remotely and with your team. You can customize everything."
readmeQualityOk: true
url: "https://github.com/substructureai/subs"
homepage: "https://substructure.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent-framework", "agent-orchestration", "agent-tracing", "agents", "ai", "ai-agents", "durable-execution", "llm", "agent-harness"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-02-23T08:37:43Z"
lastCommitAt: "2026-08-25T04:09:55Z"
lastReleaseAt: "2026-07-15T03:28:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["AlexWiles"]
openGraphImageUrl: "https://opengraph.githubassets.com/d02b2a920e8a8dd8c486515813d9e91a2e2ac71feab2abf9046bcf024f691f15/substructureai/subs"
---

# substructure.ai
[substructure.ai](https://substructure.ai)

> Pre-1.0: APIs and the wire protocol might change between releases.

Subs is an agent harness for the cloud.

It runs an unprivileged agent loop with no system access. It uses MCP servers for tools. It can run locally or as a client and server.

Declare your agents in a config file. If you need full customization, point
the agent at an HTTP endpoint and implement a webhook that drives the agent loop.

Subs handles durability, retries, timeouts, MCP connection management, session state, session branching, AG-UI, Slack connections, LLM calls, Sub agents, interrupts and more.

Need a quick way to turn a sanbox into and MCP server? Check out [mcpd](https://github.com/substructureai/mcpd).

# Get started

## Intall the engine

```sh
curl -fsSL https://subs.dev/cli.sh | bash
```

## Run a local agent

Create a `subs.toml`

```toml
name = "example"

[llm.openrouter]
type = "openrouter"

[agent.buddy]
llm = "openrouter"
model = "deepseek/deepseek-v4-flash-0731"
system = "You are the a helpful buddy."
```

```sh
subs chat buddy -c subs.toml
```

## Serve the agent and connect with a client.

Add this to `subs.toml`

```toml
#…

---
repo: "Risingtides-dev/ocean-os"
name: "ocean-os"
description: "an agentic harness system written in rust "
readmeQualityOk: true
url: "https://github.com/Risingtides-dev/ocean-os"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["acp", "agents", "coding-agent", "daemon", "harness-engineering", "mcp", "multi-agent", "rust", "tool-calling"]
stars: 5
forks: 1
openIssues: 5
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-08T04:49:45Z"
lastCommitAt: "2026-07-19T06:12:27Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 54
maintainers: ["Risingtides-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4dad90c6cfe2fb61763353d6891d22cf4251f7c680be30f498f21d1db6329e8/Risingtides-dev/ocean-os"
---

# Ocean OS

Ocean OS is the local Rust runtime for Ocean. A long-running daemon owns agent
turns, provider calls, permission-gated tools, sessions, and event delivery.
The terminal UI, CLI, ACP bridge, and sibling product surfaces are clients of
that daemon; they are not separate agent runtimes.

## What this repository owns

```text
clients (TUI / CLI / ACP / Ocean Surface)
  -> ocean-daemon (:4780; HTTP + SSE authority)
  -> ocean-agent (sessions, prompts, capabilities)
  -> ocean-runtime (agent loop, tools, permissions, cancellation)
  -> ocean-protocol + ocean-providers (provider wire + model/auth routing)
```

The canonical package, entry-point, and narrow-test index for all workspace
members is [`crates/AGENTS.md`](https://github.com/Risingtides-dev/ocean-os/blob/HEAD/crates/AGENTS.md). The cross-repository boundary
is [`docs/OCEAN_PROJECT_MAP.md`](https://github.com/Risingtides-dev/ocean-os/blob/HEAD/docs/OCEAN_PROJECT_MAP.md).

Ocean OS does **not** own product UI chrome, agent-package content, or the shared
Bedrock data plane:

- [`ocean-surface`](https://github.com/Risingtides-dev/ocean-surface) owns the
  Leptos UI and its browser, extension, and Tauri hosts.
-…

---
repo: "latebit-io/demarkus"
name: "demarkus"
description: "De-centralized - markdown - for us: an information web adjacent markdown protocol for knowledge sharing between humans and agents, humans to humans, agents to humans, and agents to agents"
url: "https://github.com/latebit-io/demarkus"
homepage: "http://www.demarkus.io/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["agents", "markdown", "protocol", "developer-tools", "soul", "agent-memory-system", "distributed", "distributed-knowledge", "knowledge-base", "knowledge-graph"]
stars: 13
forks: 1
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-02-14T21:56:56Z"
lastCommitAt: "2026-06-25T01:32:10Z"
lastReleaseAt: "2026-06-24T19:41:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 57
maintainers: ["ontehfritz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec743142057c7b580e732e9888053bf2befd5e38402fe0818cfb1881e18ebff5/latebit-io/demarkus"
---

# Demarkus

**A protocol for agents and humans, optimized for information**

Demarkus implements the Mark Protocol: versioned markdown served over QUIC. No rendering pipeline, no tracking, no central authority. Read and write with capability tokens. Every change is traceable. Lightweight and installable anywhere.

Run a single personal server, or compose many into an organizational **knowledge system**: a broker-fronted universe of servers behind one HTTPS endpoint with single sign-on. Humans and agents share the same versioned memory.

## Install

```bash
# macOS / Linux: server + client
curl -fsSL https://raw.githubusercontent.com/latebit-io/demarkus/main/install.sh | bash

# Client only (CLI, TUI, MCP)
curl -fsSL https://raw.githubusercontent.com/latebit-io/demarkus/main/install.sh | bash -s -- --client-only
```

See [full install docs](https://www.demarkus.io/install/) for platform-specific guides and other options.

### See it in action

## Quick Start

```bash
# Fetch a document from the live soul server
demarkus mark://soul.demarkus.io/index.md

# Browse interactively with the TUI
demarkus-tui mark://soul.demarkus.io/index.md

# Run your own local server
demarkus-server…

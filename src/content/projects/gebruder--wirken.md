---
repo: "gebruder/wirken"
name: "wirken"
description: "The enterprise gateway for autonomous agents. Identity management, per-channel isolation, credential vault, per-session tamper-evident audit log."
readmeQualityOk: true
url: "https://github.com/gebruder/wirken"
homepage: "https://wirken.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai-agent", "audit", "enterprise", "gateway", "llm", "matrix", "mcp", "rust", "security", "siem"]
stars: 193
forks: 10
openIssues: 23
closedIssues: 71
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-25T07:40:19Z"
lastCommitAt: "2026-10-25T21:45:37Z"
lastReleaseAt: "2026-04-01T09:35:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 95
undervaluedScore: 31
maintainers: ["gebruder"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec575de38732151eef53ea9bfab93ff2795100bdce527c116c61f323724815b6/gebruder/wirken"
discussionCount: 2
---

# Wirken

Wirken is the enterprise gateway for autonomous agents: the switchboard
between your team's messaging channels and the AI agents working on their
behalf. Your people reach it from a browser or the chat platforms they already
use, and the agent on the other end reads files, calls APIs, and runs tools
for them. Each channel gets its own line.

Wirken is built for the security team that has to answer for what those agents
do. It assumes any agent can be turned against you, and boxes in what a
compromised one can reach.

It ships as a single static Rust binary, so it runs wherever your controls
require: a locked-down workstation, a server inside your network, or an
air-gapped host. Its model connection is provider-agnostic: frontier APIs,
local weights through Ollama, TEEs for encrypted processing, Swiss- and
EU-hosted endpoints, or a ChatGPT plan the operator has, all
interchangeable. Each agent runs the model you assign
it, capped by a per-agent spend budget. MIT licensed.

## How it works

A message comes in on a channel, Wirken wakes an agent to handle it, and every
file it reads, API it calls, and tool it runs passes through Wirken's controls
first.

- **The agent is…

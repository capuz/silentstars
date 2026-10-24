---
repo: "cirwel/unitares"
name: "unitares"
description: "Accountability infrastructure for long-running AI agents. Self-hosted MCP server: identity, claims and evidence, review, outcomes, and reconstruction across agent runtimes."
readmeQualityOk: true
url: "https://github.com/cirwel/unitares"
homepage: "https://cirwel.org"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agents", "governance", "mcp", "multi-agent-systems", "python", "agent-evaluation", "agent-observability", "observability", "runtime-governance", "agent-governance"]
stars: 5
forks: 0
openIssues: 21
closedIssues: 229
watchers: 2
contributors: 5
recentReleases: 9
createdAt: "2025-12-04T22:24:08Z"
lastCommitAt: "2026-10-24T08:21:13Z"
lastReleaseAt: "2026-09-07T21:49:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 80
maintainers: ["unitares-agents[bot]", "dependabot[bot]", "unitares-pr-relay[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1110227889/4b545385-9c6d-419b-bc5d-133764d47419"
fundingLinks: ["GITHUB:https://github.com/cirwel"]
discussionCount: 1
---

### Accountability infrastructure for long-running AI agents.

Give every process an identity. Keep claims, evidence, reviews, and outcomes
connected. Recover work across restarts, context loss, and handoffs.

UNITARES is self-hosted accountability infrastructure for operators running
multiple AI agents. Its single-operator federation kernel connects independent
runtimes to one operator-controlled server over MCP or HTTP, where they share a
durable record while keeping their own models, tools, and runtimes. They
interoperate with each other over their own transports or A2A; UNITARES is the
record behind them, not the transport between them.

Across Claude Code, Codex, Hermes Agent, and custom MCP or REST clients, agent
work remains attributable, reviewable, and recoverable even when the process
that started it is gone.

## What UNITARES gives you

- **Identity and lineage** — bind every write to the process that made it and
  record where inherited work came from. Process identity is an attribution
  record, not a credential; platform workload identity remains the credential
  layer.
- **Claims and evidence** — retain durable findings, corrections, and provenance
  outside any…

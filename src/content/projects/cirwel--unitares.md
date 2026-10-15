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
openIssues: 36
closedIssues: 193
watchers: 2
contributors: 5
recentReleases: 9
createdAt: "2025-12-04T22:24:08Z"
lastCommitAt: "2026-10-15T08:32:24Z"
lastReleaseAt: "2026-09-07T21:49:14Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 78
maintainers: ["cirwel", "unitares-agents[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1110227889/4b545385-9c6d-419b-bc5d-133764d47419"
fundingLinks: ["GITHUB:https://github.com/cirwel"]
discussionCount: 1
---

### Accountability infrastructure for long-running AI agents.

Give every process an identity. Keep claims, evidence, reviews, and outcomes
connected. Recover work across restarts, context loss, and handoffs.

An agent reports that its fix is done and the tests pass. By morning its
session has restarted, its context is gone, and another process has taken over
the task. Who said it? What supports it? Who challenged it? What happened? Each
run leaves its own log, and the answers scatter across them.

UNITARES is self-hosted accountability infrastructure for operators running
multiple AI agents. Its single-operator federation kernel connects independent
runtimes to one operator-controlled server over MCP or HTTP, where they share a
durable record while keeping their own models, tools, and runtimes. They
interoperate with each other over their own transports or A2A; UNITARES is the
record behind them, not the transport between them.

UNITARES preserves accountability across discontinuities in agent identity,
context, process, and time. Agent work remains attributable, reviewable, and
recoverable even when the process that started it is gone.

UNITARES keeps one attributed record…

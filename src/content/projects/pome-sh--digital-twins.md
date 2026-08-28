---
repo: "pome-sh/digital-twins"
name: "digital-twins"
description: "Simulation sandboxes to test AI agents against different APIs"
readmeQualityOk: true
url: "https://github.com/pome-sh/digital-twins"
homepage: "https://pome.sh/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["agent-orchestration", "agent-skills", "agent-testing-tools", "ai-agents", "digital-twins", "node", "simulation", "simulation-testing"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-23T02:26:40Z"
lastCommitAt: "2026-08-28T12:22:41Z"
lastReleaseAt: "2026-07-16T09:07:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["GaganSD", "AFFFPupu"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f5c16761e6e6bf601a863d56707a28e497f459b28083bde2b0861ce95a93bc/pome-sh/digital-twins"
---

# Pome Digital Twins

**Testing infrastructure for AI agents.**
Stateful, local digital twins of the APIs your agent calls — GitHub, Stripe, Slack, Gmail, and Linear.

[Docs](https://docs.pome.sh) · [Platform](https://pome.sh) · [CLI reference](https://github.com/pome-sh/digital-twins/blob/HEAD/cli/README.md)

</div>

## What is Pome?

A **digital twin** is a local emulation of a production API. It answers the exact
same **REST, GraphQL, and MCP calls** your AI agent makes in production, backed by a
real SQLite database — so every run is stateful, deterministic, and resettable.
Use it to test and evaluate agents against 137 MCP tools without touching live
infrastructure, rate limits, or shared sandbox accounts.

Every route and tool is tiered — `semantic` (real, tested behavior), `shape`
(faithful response shape), or a loud `501`. A twin never silently fakes success.

## The twins

Five twins, **137 MCP tools** in total. Each documents its surface route-by-route in its `FIDELITY.md`.

| Twin | MCP tools | API surface | |
| --- | --- | --- | --- |
|  [`twin-github`](https://github.com/pome-sh/digital-twins/blob/HEAD/packages/twin-github/) | 65 (63 semantic) | 62 REST routes —…

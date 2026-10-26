---
repo: "trust-arbor/arbor_mcp"
name: "arbor_mcp"
description: "Model Context Protocol (MCP) and Agent Client Protocol (ACP) client/server library for Elixir"
readmeQualityOk: true
url: "https://github.com/trust-arbor/arbor_mcp"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
stars: 32
forks: 15
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-05-25T05:34:49Z"
lastCommitAt: "2026-10-26T03:02:08Z"
lastReleaseAt: "2026-03-19T05:02:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 63
maintainers: ["azmaveth"]
openGraphImageUrl: "https://opengraph.githubassets.com/94fa1baa6d8cfab0e5ecc667a8436cf6fda2dd6e2e59523b3e24f72bbe1750c5/trust-arbor/arbor_mcp"
---

# ArborMCP

ArborMCP provides Elixir clients and servers for the [Model Context Protocol](https://modelcontextprotocol.io/), with stdio, Streamable HTTP and BEAM-local transports. Its Hex package is `arbor_mcp`; its Elixir module namespace is `Arbor.MCP.*`.

**Version 2 release candidate.** ArborMCP `2.0.0-rc.5` is published on Hex
for downstream integration testing, with ArborRPC on its independent 1.x line.
Stable `arbor_mcp` 2.0 has not been released. The runtime/scheduler redesign and
accepted API cleanup are implemented; the [roadmap](https://github.com/trust-arbor/arbor_mcp/blob/HEAD/docs/ROADMAP.md) and
[release checklist](https://github.com/trust-arbor/arbor_mcp/blob/HEAD/docs/RELEASING.md) describe remaining stable qualification.

ExMCP 1.x remains maintained on [`codex/maintenance-1.x`](https://github.com/trust-arbor/arbor_mcp/tree/codex/maintenance-1.x), with backported fixes and compatible minor releases. Migration to v2 is optional; see the [maintenance policy](https://github.com/trust-arbor/arbor_mcp/blob/codex/maintenance-1.x/docs/MAINTENANCE_POLICY.md).

ACP clients, agents and the optional vendor adapter bundle are developed in…

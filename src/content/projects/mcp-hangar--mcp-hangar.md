---
repo: "mcp-hangar/mcp-hangar"
name: "mcp-hangar"
description: "MCP policy enforcement plane — deterministic policy on every Model Context Protocol call: identity, RFC 8707 audience binding, tool schema digest pinning, full audit trail. Python, self-hosted, MIT."
readmeQualityOk: true
url: "https://github.com/mcp-hangar/mcp-hangar"
homepage: "https://mcp-hangar.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "ai-security", "kubernetes", "llm-security", "mcp", "mcp-gateway", "mcp-security", "mcp-server", "model-context-protocol", "policy-as-code"]
stars: 14
forks: 7
openIssues: 37
closedIssues: 462
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-12-15T23:42:25Z"
lastCommitAt: "2026-09-12T08:05:59Z"
lastReleaseAt: "2026-01-30T23:53:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["mapyr", "dependabot[bot]", "mcp-hangar-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ecf6d272eb1a10eaa6493a7dad366cffc91349761a4f0afe902e901760df276/mcp-hangar/mcp-hangar"
---

</p>

**The policy enforcement plane for MCP -- deterministic admission and egress policy, attributable audit, and SIEM export for your MCP server fleet. MIT, self-hosted, no SaaS.**

</p>

  <sub>Same tool, same arguments, same call — refused because the description changed underneath it.<br>
  Real output; <a href="examples/rugpull/recording/">regenerate it</a> with <code>vhs demo.tape</code>.</sub>
</p>

## Why

In MCP, the tool list is a hint the client caches; the call path is the only surface a provider mediates in real time. Every governance primitive worth having -- revocation, per-tenant scoping, audit -- attaches there, or attaches to nothing. Hangar puts a policy enforcement plane on that seam: one mediated path for lifecycle, policy, and telemetry across your whole MCP server fleet.

> Background: [The Advisory List -- Why MCP Governance Lives at the Call Path](https://whyisthisdown.com/posts/the-advisory-list)

## Install

```bash
pip install mcp-hangar
# or: uv pip install mcp-hangar
```

Upgrading rather than installing fresh? The migration steps live in the
[upgrade guide](https://mcp-hangar.io/docs/upgrade).

## Quickstart

```bash
mcp-hangar init -y
```

`init`…

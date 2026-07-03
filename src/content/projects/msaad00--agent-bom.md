---
repo: "msaad00/agent-bom"
name: "agent-bom"
description: "AI supply-chain & cloud security scanner and self-hosted control plane — agents, MCP, packages, cloud estate, non-human identities, and LLM cost. SBOM/SARIF, graph attack-paths, runtime enforcement, and compliance evidence."
url: "https://github.com/msaad00/agent-bom"
homepage: "https://pypi.org/project/agent-bom/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["ai-security", "mcp", "sbom", "vulnerability-scanning", "aibom", "blast-radius", "compliance", "cyclonedx", "devsecops", "kubernetes"]
stars: 24
forks: 8
openIssues: 13
closedIssues: 707
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-22T21:38:37Z"
lastCommitAt: "2026-07-03T06:23:18Z"
lastReleaseAt: "2026-02-24T20:55:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["msaad00", "andres-linero"]
openGraphImageUrl: "https://opengraph.githubassets.com/2739c6ece39e5e89c2b3dfe0ac79d5bfc99a3fa88718707a142e8ea6e782d557/msaad00/agent-bom"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/logo-dark.svg">
  </picture>
</p>

</p>

</p>

## What It Is

`agent-bom` is a read-only scanner and self-hosted control plane for local
projects, agent fleets, MCP runtimes, and cloud estates (AWS, Azure, GCP,
Snowflake).

**ContextGraph** is agent-bom's unified evidence graph across CLI, API, UI, MCP
tools, reports, and gateway decisions. Findings, assets, packages, cloud
resources, identities, agents, MCP servers, credentials, and runtime decisions
all normalize into that graph so posture, blast radius, and enforcement read
from the same evidence.

Blast radius is the core idea: a vulnerable package is linked to the MCP server
that loads it, the tools it exposes, reachable credential references, and the
agents that can call it — not just a CVE row.

Coverage depth and honest boundaries:
[AI infrastructure scanning](docs/AI_INFRASTRUCTURE_SCANNING.md) ·
[product boundaries](docs/PRODUCT_BOUNDARIES.md)

## Accuracy Model

agent-bom normalizes advisory and distro evidence into canonical CVE findings
with match-confidence tiers:

`distro_confirmed`…

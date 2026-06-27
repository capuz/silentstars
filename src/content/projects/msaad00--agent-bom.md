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
stars: 23
forks: 8
openIssues: 11
closedIssues: 674
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-22T21:38:37Z"
lastCommitAt: "2026-06-27T00:46:40Z"
lastReleaseAt: "2026-02-24T20:55:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["msaad00", "andres-linero"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3418a03b9700de7f5b7c34f035535a5d97e3d1ce42b8cd067ab32169928d7a6/msaad00/agent-bom"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/logo-dark.svg">
  </picture>
</p>

</p>

</p>

## What It Is

`agent-bom` scans AI infrastructure across local projects, agent fleets, and
cloud estates (AWS, Azure, GCP, Snowflake), and builds one AI BOM of agents,
MCP servers, tools, packages, credential references, non-human identities,
models, datasets, and runtime. Every source converges into a unified `Finding`
model and a unified `ContextGraph`, so blast radius, multi-hop exposure paths,
and exposure scoring all read from the same evidence. That evidence is reachable
through CLI/CI, a REST API, MCP tools, and a self-hosted dashboard; runtime
proxy/gateway enforcement is optional and scoped to where it earns its cost.

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/blast-radius-dark.svg">
  </picture>
</p>

```text
package -> vulnerability finding -> MCP server -> tools + credential refs -> agent
```

Blast radius is the core idea: a vulnerable package is not just a CVE row — it
is linked to the MCP…

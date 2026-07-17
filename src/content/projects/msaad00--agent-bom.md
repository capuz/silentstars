---
repo: "msaad00/agent-bom"
name: "agent-bom"
description: "Open security scanner and self-hosted control plane for AI, MCP, and cloud. One evidence model — run scans in your environment, centralize findings, govern in your VPC."
readmeQualityOk: true
url: "https://github.com/msaad00/agent-bom"
homepage: "https://msaad00.github.io/agent-bom/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["ai-security", "mcp", "sbom", "vulnerability-scanning", "aibom", "blast-radius", "compliance", "cyclonedx", "devsecops", "kubernetes"]
stars: 28
forks: 7
openIssues: 12
closedIssues: 875
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-22T21:38:37Z"
lastCommitAt: "2026-07-17T06:00:13Z"
lastReleaseAt: "2026-02-24T20:55:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["msaad00", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3a9ff2d796ece44f2e61dbd683f40a940a1bbd78e8379c3b641bbd976d25c83/msaad00/agent-bom"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/logo-dark.svg">
  </picture>
</p>

</p>

</p>

## Who It's For

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/persona-value-dark.svg">
  </picture>
</p>

<details>
<summary><b>Persona lane detail</b></summary>

- **AppSec / GRC** — SARIF, compliance packs, and audit-ready exports from one scan.
- **Platform / SRE** — fleet sync, Helm deploy, CI gates, SBOM — no separate scanner stack.
- **Agent builders** — MCP inventory, Shield SDK, optional runtime proxy or gateway enforcement.
- **Security engineers** — findings queue, attack-path drilldown, blast-radius context in CLI, API, and UI.

**MCP server mode**

- Advertises 75 MCP tools, 6 resources, and 8 workflow prompts.
- Registry metadata lives in the committed Smithery manifest and Glama listing; install and liveness checks are in the integration docs.

</details>

## Architecture & how it works

One package, full stack: a **React / Next.js** cockpit and every headless caller
hit the same **FastAPI**…

---
repo: "Thirumalaiboobathi/opentel-mcp"
name: "opentel-mcp"
description: "OpenTelemetry instrumentation for Model Context Protocol (MCP) servers"
readmeQualityOk: true
url: "https://github.com/Thirumalaiboobathi/opentel-mcp"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 6
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-09T07:37:54Z"
lastCommitAt: "2026-08-11T04:47:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 50
maintainers: ["Thirumalaiboobathi"]
openGraphImageUrl: "https://opengraph.githubassets.com/026e7d1da2dab34b807d16a65da03657e2a428f0855ce6a18f6202b49969c28d/Thirumalaiboobathi/opentel-mcp"
---

# opentel-mcp (monorepo)

This repository is an npm-workspaces monorepo for the `opentel-mcp` project.

| Package | Path | Description |
|---|---|---|
| [`opentel-mcp`](https://github.com/Thirumalaiboobathi/opentel-mcp/blob/HEAD/packages/core/README.md) | `packages/core` | OpenTelemetry instrumentation for MCP servers — the published library. |
| `opentel-mcp-ui` | `packages/ui` | Zero-infrastructure local dashboard for the observation contract (scaffold). |

Runnable usage examples live under [`examples/`](https://github.com/Thirumalaiboobathi/opentel-mcp/blob/HEAD/examples/), and design docs
(including all ADRs) live under [`docs/`](https://github.com/Thirumalaiboobathi/opentel-mcp/blob/HEAD/docs/).

## Dev setup

```bash
npm install
npm test
```

`npm install` at the repo root installs and links every workspace. Each
package's own README/CONTRIBUTING doc has package-specific details — start
with [`packages/core/README.md`](https://github.com/Thirumalaiboobathi/opentel-mcp/blob/HEAD/packages/core/README.md) for the library
itself.

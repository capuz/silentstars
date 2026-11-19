---
repo: "BetaNYC/ny-data-registry-mcp"
name: "ny-data-registry-mcp"
description: "MCP server that finds open data across every New York portal in BetaNYC's registry: which portal covers a place, how to query it, what datasets and columns exist, and in what formats"
readmeQualityOk: true
url: "https://github.com/BetaNYC/ny-data-registry-mcp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 29]
stars: 13
forks: 2
openIssues: 6
closedIssues: 20
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-11-05T19:17:20Z"
lastCommitAt: "2026-11-19T05:02:47Z"
lastReleaseAt: "2026-11-14T01:35:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["noneck"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a810002f32a7074fe1b8f2abd3b76d1e7f5f0d813e04f852fb096fb4fefc1fb/BetaNYC/ny-data-registry-mcp"
fundingLinks: ["CUSTOM:https://www.beta.nyc/betabuilders"]
---

# ny-data-registry-mcp

An [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that finds open data across every New York data portal in BetaNYC's [NY data portal registry](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.html): which portal covers a place or topic, how to query it, and, with the harvested index, which datasets and columns exist and in what formats.

It complements the [`socrata`](https://www.npmjs.com/package/socrata-mcp-server) MCP rather than replacing it. This server knows *where* data is (224 sources across state, county, city, agency, library and nonprofit portals) and hands the agent the right Socrata domain or ArcGIS service. Querying the data stays with `socrata` and the other BetaNYC MCPs.

Built by [BetaNYC](https://beta.nyc). **Status: 0.4.0.** Package: `@betanyc/ny-data-registry-mcp`.

What changed in this server, newest first, including corrections: [WHATS-CHANGED.md](https://github.com/BetaNYC/ny-data-registry-mcp/blob/HEAD/WHATS-CHANGED.md).

---

## What it does

Thirteen tools, in three groups.

**Registry tools** (work out of the box, no index needed):

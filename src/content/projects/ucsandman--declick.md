---
repo: "ucsandman/declick"
name: "declick"
description: "Compile an API, an MCP server, a database or a web page into a CLI your agent can run. Ten engines, one output contract, 4.1x less context than raw MCP."
readmeQualityOk: true
url: "https://github.com/ucsandman/declick"
homepage: "https://declick.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["ai-agents", "claude-code", "cli", "graphql", "mcp", "openapi", "sqlite", "windows-automation", "agent-tools", "ai-coding"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-09-02T17:15:18Z"
lastCommitAt: "2026-09-06T08:04:26Z"
lastReleaseAt: "2026-09-04T14:31:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["ucsandman"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e4a43e94789fcaf5149f7ebf1dbe6e53841b77a55846c05fa6f459427b9e028/ucsandman/declick"
---

# declick

A compiler for the interface your agent already has: the shell. MCP makes an agent carry every tool's schema on every turn; declick compiles an API, an MCP server, or a database once into named verbs the model loads one at a time, and every verb returns one envelope with five exit codes. A team pushes a compiled adapter to a shared folder or git checkout once and every other machine pulls it. Ten engines, zero runtime dependencies, Node 24.

The saving is measured, not claimed: against nine real MCP servers (258 tools), the raw tool listing an MCP client puts in context is 236,818 bytes and `declick describe` is 58,309, a 4.1x reduction. `node scripts/bench-tokens.mjs` reproduces it on your own adapters; the method and the caveats are in [docs/bench.md](https://github.com/ucsandman/declick/blob/HEAD/docs/bench.md).

## Quickstart

Requires Node 24 or newer. An older Node exits 1 with one line naming the version it found, from either entry point, instead of a stack trace.

```
npm i -g declick
declick setup
declick add https://petstore3.swagger.io/api/v3/openapi.json --name petstore
declick run petstore describe
declick run petstore get-user-by-name user1 --fields…

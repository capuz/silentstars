---
repo: "chrisdoc/hevy-mcp"
name: "hevy-mcp"
description: "Manage your Hevy workouts, routines, folders, and exercise templates. Create and update sessions faster, organize plans, and search exercises to build workouts quickly. Stay synced with changes so your training log is always up to date."
readmeQualityOk: true
url: "https://github.com/chrisdoc/hevy-mcp"
homepage: "https://hevy-mcp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["hevy", "mcp", "mcp-server", "claude", "codex", "fitness", "model-context-protocol", "workout-planner", "workout-tracker"]
stars: 481
forks: 88
openIssues: 9
closedIssues: 308
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2025-03-25T15:21:45Z"
lastCommitAt: "2026-09-21T09:13:22Z"
lastReleaseAt: "2025-09-29T07:34:59Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 38
maintainers: ["chrisdoc", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/213a2fba44f2aa25bc810bb0e4d54117eeba7747e75023c85f4377065efde4a4/chrisdoc/hevy-mcp"
---

# Hevy MCP Server

**Talk to your Hevy workout data from Claude, Cursor, Codex, and other MCP clients.**

[Connect to the hosted MCP](#connect-to-the-hosted-endpoint) · [Use the Hevy CLI](#hevy-cli) · [Watch the 18-second demo](https://raw.githubusercontent.com/chrisdoc/hevy-mcp/main/docs/assets/hevy-mcp-demo.mp4) · [Explore all 22 tools](#tools)

</div>

## Hevy CLI

Prefer the terminal? The separate
[`@chrisdoc/hevy-cli`](https://www.npmjs.com/package/@chrisdoc/hevy-cli)
package reads workouts, routines, exercises, and body measurements directly
from the Hevy API, and can create or update those resources with explicit
confirmation. Deletion is not supported.

```sh
npm install -g @chrisdoc/hevy-cli
export HEVY_API_KEY=your-hevy-api-key

hevy workouts list --page-size 10
hevy summary --weeks 4
```

Add `--json` to any command for scripts and pipelines. The CLI is a standalone
Hevy API client, not an MCP wrapper. See
[`packages/cli/README.md`](https://github.com/chrisdoc/hevy-mcp/blob/HEAD/packages/cli/README.md) for the full command
reference, pagination behavior, and exit codes.

`hevy-mcp` is an open-source [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
server…

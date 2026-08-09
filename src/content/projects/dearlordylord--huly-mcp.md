---
repo: "dearlordylord/huly-mcp"
name: "huly-mcp"
description: "Huly MCP: Feature-complete MCP server for Huly platform"
readmeQualityOk: true
url: "https://github.com/dearlordylord/huly-mcp"
homepage: "https://huly-mcp.dearlordylord.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["effect-ts", "huly", "huly-cli", "npm", "npm-package", "typescript", "claude", "codex", "mcp", "model-context-protocol"]
stars: 45
forks: 20
openIssues: 3
closedIssues: 59
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-02-02T17:08:34Z"
lastCommitAt: "2026-08-09T04:46:57Z"
lastReleaseAt: "2026-06-22T14:07:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 51
maintainers: ["dearlordylord", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/89ecdd3aeb3b1a870bf10665b5aabf7f9b802bad7c72ff4fb6825d5431461695/dearlordylord/huly-mcp"
discussionCount: 1
---

# Huly MCP

**Huly MCP** is a feature-complete MCP server for [Huly](https://huly.io/) integration. Published on npm as [`@firfi/huly-mcp`](https://www.npmjs.com/package/@firfi/huly-mcp).

> [!IMPORTANT]
> **Hosted Huly is shutting down.** Huly's upstream README says shutdown is expected July 20. If you use `https://huly.app`, [export and migrate your data](https://github.com/hcengineering/platform/blob/develop/README.md) as soon as possible. See the [backup and restore guide](https://github.com/hcengineering/platform/blob/develop/docs/guides/backup-restore.en.md) and [self-hosting repository](https://github.com/hcengineering/huly-selfhost). Self-hosted deployments are not affected.

## Installation

The standard configuration works with most MCP clients:

```json
{
  "mcpServers": {
    "huly": {
      "command": "npx",
      "args": ["-y", "@firfi/huly-mcp@latest"],
      "env": {
        "HULY_URL": "https://your-huly-instance.example.com",
        "HULY_EMAIL": "your@email.com",
        "HULY_PASSWORD": "yourpassword",
        "HULY_WORKSPACE": "yourworkspace"
      }
    }
  }
}
```

## Tool Exposure Defaults

By default (`HULY_TOOL_MODE=auto`), Huly MCP optimizes for current…

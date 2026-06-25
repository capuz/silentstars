---
repo: "domdomegg/shell-exec-mcp"
name: "shell-exec-mcp"
description: "🐚 MCP server for shell command execution"
url: "https://github.com/domdomegg/shell-exec-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-12-14T01:46:43Z"
lastCommitAt: "2026-06-25T01:31:47Z"
lastReleaseAt: "2026-05-03T03:32:39Z"
status: "thriving"
tags: ["funded"]
healthScore: 64
undervaluedScore: 28
maintainers: ["domdomegg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fafcf507efb35f1e412e5c0215f6281f8e2465490022ecabb8aafc6d27ca3a4/domdomegg/shell-exec-mcp"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# shell-exec-mcp

MCP server for executing bash commands with background job support.

## Use Cases

**Run build commands**: Execute `npm run build`, `make`, or other build tools and get the output.

**File operations**: Use `find`, `grep`, `mv`, `rm`, `mkdir -p`, `stat` etc. for file management.

**Long-running tasks**: Start servers or watch processes in background mode, check on them later.

**System info**: Run `df -h`, `ps aux`, `env` etc. to inspect the system state.

## Setup

Follow the instructions on [install-mcp](https://adamjones.me/install-mcp/?config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInNoZWxsLWV4ZWMtbWNwIl0sIm5hbWUiOiJzaGVsbC1leGVjIn0=), which generates the right config for your MCP client (Claude Code, Claude Desktop, Cursor, Cline, VS Code, and more).

## Tools

| Tool | Description |
|------|-------------|
| `execute` | Run a bash command (with optional timeout and background mode) |
| `get_job_status` | Check status of a background job |

## Contributing

Pull requests are welcomed on GitHub! To get started:

1. Install Git and Node.js
2. Clone the repository
3. Install dependencies with `npm install`
4. Run `npm run test` to run tests
5. Build with `npm…

---
repo: "girishr/SpecPilot"
name: "SpecPilot"
description: "Spec-driven development (SDD) CLI for AI coding agents (Claude Code, Cursor) - initialize, validate, and sync .specs/ across TypeScript & Node.js projects"
readmeQualityOk: true
url: "https://github.com/girishr/SpecPilot"
homepage: "https://specpilot.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai-assisted-coding", "cli", "development-tools", "npm-package", "productivity", "project-initialization", "sdd", "typescript", "specification-driven-development", "ai-coding-assistant"]
stars: 38
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-27T11:51:17Z"
lastCommitAt: "2026-10-18T08:15:44Z"
lastReleaseAt: "2026-03-18T10:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["girishr"]
openGraphImageUrl: "https://opengraph.githubassets.com/08732136a31b2a09375213849816f6a6ca741ca633546d9245dd4e7f23897b9a/girishr/SpecPilot"
---

# SpecPilot

SpecPilot is a spec-driven development (SDD) CLI for AI coding agents like Claude Code, Cursor, and ChatGPT. It initializes, validates, and syncs a `.specs/` directory so AI-assisted coding stays grounded in living requirements, architecture, and task specs instead of drifting from the codebase.

## MCP server

Prefer to stay inside your editor? SpecPilot also runs as a remote MCP server, so
Claude Code, Cursor or Copilot can run the whole onboarding itself - answering what
it can infer from your repo and asking you only the rest.

```bash
claude mcp add --transport http specpilot https://init.specpilot.dev/mcp
```

Then ask your agent: *"Onboard this project with SpecPilot"*.

For Cursor, VS Code and other clients, add it as an HTTP (streamable) server:

```json
{
  "mcpServers": {
    "specpilot": {
      "type": "http",
      "url": "https://init.specpilot.dev/mcp"
    }
  }
}
```

No install, no API key. Full setup notes: <https://specpilot.dev/mcp-setup>

`specpilot serve` also serves a local MCP endpoint, so your AI IDE can read this machine's specs, add or move tasks and set up a folder: see [Local MCP endpoint](#local-mcp-endpoint-specpilot-serve) below.

##…

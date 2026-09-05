---
repo: "chapmanjw/rutherford-mcp-server"
name: "rutherford-mcp-server"
description: "Give your AI agent a crew. Model Context Protocol (MCP) tool to delegate, consensus build, debate, and review across Claude Code CLI, Codex CLI, Kiro CLI, and others."
readmeQualityOk: true
url: "https://github.com/chapmanjw/rutherford-mcp-server"
homepage: "https://github.com/chapmanjw/rutherford-claude-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-05-31T00:17:47Z"
lastCommitAt: "2026-09-05T07:48:28Z"
lastReleaseAt: "2026-06-12T17:32:32Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 75
maintainers: ["chapmanjw", "dependabot[bot]", "Artemonim"]
openGraphImageUrl: "https://opengraph.githubassets.com/512e774ad7b1c6cc57efccd840746924b058e5280f6b6a6e95d01472edbbaba3/chapmanjw/rutherford-mcp-server"
fundingLinks: ["GITHUB:https://github.com/chapmanjw"]
---

</p>

<h1 align="center">Rutherford — MCP Server &nbsp;|&nbsp; <a href="https://github.com/chapmanjw/rutherford-claude-plugin">Claude Plugin</a></h1>

A stdio MCP server that orchestrates the coding agents you already run — Claude Code, Codex, Cursor,<br>
Goose, and more — over the <a href="https://agentclientprotocol.com">Agent Client Protocol (ACP)</a>.
Hand work to one agent, ask several in parallel,<br>or have them argue it out. It reuses each agent's
own login and never calls a model provider's API.
</p>

</p>

</p>

```sh
uv tool install rutherford-mcp-server
```

> **Using Claude Code?** The [Rutherford Claude Plugin](https://github.com/chapmanjw/rutherford-claude-plugin)
> wraps this server with one-step setup: it auto-registers the server (no manual `mcp add`) and adds
> skills, an orchestrator agent, and slash commands for setup, panels, consensus, debate, and review.
> Install it with `/plugin marketplace add chapmanjw/rutherford-claude-plugin` then
> `/plugin install rutherford@rutherford-claude`. Either path is fully supported — reach for the plugin
> for a batteries-included Claude Code experience, or wire up this server directly for any MCP client.

## What…

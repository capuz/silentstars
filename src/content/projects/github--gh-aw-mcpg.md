---
repo: "github/gh-aw-mcpg"
name: "gh-aw-mcpg"
description: "Github Agentic Workflows MCP Gateway"
readmeQualityOk: true
url: "https://github.com/github/gh-aw-mcpg"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 148
forks: 31
openIssues: 17
closedIssues: 7138
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2025-12-10T21:43:52Z"
lastCommitAt: "2026-07-19T06:11:22Z"
lastReleaseAt: "2026-01-10T18:48:03Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 100
undervaluedScore: 34
maintainers: ["Copilot", "lpcox", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1973b33c77a1e6d5e922dd1c5962bd5cd1755fbe920c7574ac01c02a71191fe3/github/gh-aw-mcpg"
discussionCount: 211
---

# MCP Gateway

A gateway for Model Context Protocol (MCP) servers.

This gateway is used with [GitHub Agentic Workflows](https://github.com/github/gh-aw) via the `sandbox.mcp` configuration to provide MCP server access to AI agents running in sandboxed environments.

## Quick Start

1. **Pull the Docker image** (when available):
   ```bash
   docker pull ghcr.io/github/gh-aw-mcpg:latest
   ```

2. **Create a configuration file** (`config.json`):
   ```json
   {
     "gateway": {
       "agentId": "${MCP_GATEWAY_AGENT_ID}"
     },
     "mcpServers": {
       "github": {
         "type": "stdio",
         "container": "ghcr.io/github/github-mcp-server:latest",
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": ""
         }
       }
     }
   }
   ```

   Looking for complete examples? See [`config.example.toml`](https://github.com/github/gh-aw-mcpg/blob/HEAD/config.example.toml), [`config.example-payload-threshold.toml`](https://github.com/github/gh-aw-mcpg/blob/HEAD/config.example-payload-threshold.toml), and [`example-http-config.json`](https://github.com/github/gh-aw-mcpg/blob/HEAD/example-http-config.json).

3. **Run the container**:
   ```bash
   docker run --rm -i \…

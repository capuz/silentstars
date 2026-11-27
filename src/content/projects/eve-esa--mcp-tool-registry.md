---
repo: "eve-esa/mcp-tool-registry"
name: "mcp-tool-registry"
description: "This repository contains tools developed by the EVE team and the community"
readmeQualityOk: true
url: "https://github.com/eve-esa/mcp-tool-registry"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 16
forks: 15
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-14T13:46:07Z"
lastCommitAt: "2026-11-27T12:59:40Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["Lopez-Antonio", "JINO-ROHIT", "mime-pi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1210514775/d42d1013-9b37-4f51-b15d-342c4d2e5cd6"
---

**Open MCP servers that give AI agents access to Earth Observation data, imagery and knowledge.**

[Servers](#servers) · [Quick start](#quick-start) · [Contributing](#contributing) · [EVE](#earth-virtual-expert-eve) · [Citation](#citation)

## About

The [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) is an open standard that lets an AI agent discover and call external tools.
This repository is the tool registry of [EVE, the Earth Virtual Expert](https://eve.philab.esa.int/): a collection of MCP servers for Earth Observation (EO) and Earth Science, written by the EVE team and the community.

- **One folder per server.** Each server in `servers/` is self-contained: a FastMCP entrypoint, pinned requirements and optional tests.
- **Checked on every pull request.** CI validates the structure, lints the code, scans for secrets and builds the container.
- **Deployed to EVE.** Merged servers are deployed to AWS Bedrock AgentCore and become tools for the EVE agent.

Anyone building EO agents can run these servers locally or contribute a new one.

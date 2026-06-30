---
repo: "stacklok/toolhive-catalog"
name: "toolhive-catalog"
description: "ToolHive's registry catalog of MCP servers"
url: "https://github.com/stacklok/toolhive-catalog"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["catalog", "mcp", "model-context-protocol", "registry"]
stars: 22
forks: 17
openIssues: 3
closedIssues: 10
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2025-08-11T09:44:01Z"
lastCommitAt: "2026-06-30T06:50:21Z"
lastReleaseAt: "2025-08-20T00:16:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 62
maintainers: ["renovate[bot]", "toolhive-release-app[bot]", "danbarr"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb1ba8441b26fac2ef3d1c1bee574a276f1891228317baef4431e7cd076ead8c/stacklok/toolhive-catalog"
---

# ToolHive Catalog

This repository contains the catalog of MCP (Model Context Protocol) servers and skills available for ToolHive. Each server entry provides AI assistants with specialized tools and capabilities, while skills provide reusable prompts and workflows that leverage those tools.

## What is this?

Think of this as a catalog of tools and skills that AI assistants can use. Each server entry represents a server that provides specific capabilities—like interacting with GitHub, querying databases, or fetching web content. Each skill entry is a reusable prompt or workflow that combines server tools to accomplish a specific task—like reviewing pull requests or debugging issues.

## How to Add Your MCP Server

Adding your MCP server to the registry is simple! You need to create a `server.json` file following the [upstream MCP ServerJSON schema](https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json), with ToolHive-specific extensions in the `_meta` field. We support two types of MCP servers:

1. **Container-based servers** - Run as Docker containers (use `packages` field)
2. **Remote servers** - Accessed via HTTP/HTTPS endpoints (use `remotes` field)…

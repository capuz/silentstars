---
repo: "leafo/lapis-mcp"
name: "lapis-mcp"
description: "MCP server for Lapis apps"
readmeQualityOk: true
url: "https://github.com/leafo/lapis-mcp"
language: "MoonScript"
languages: ["MoonScript", "Lua"]
languagePcts: [71, 29]
stars: 8
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-05-15T07:08:06Z"
lastCommitAt: "2026-10-27T09:16:38Z"
lastReleaseAt: "2026-09-25T20:12:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 57
undervaluedScore: 42
maintainers: ["leafo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a596e3d6f91dddf1277d802e138ef6cac17984f6f67cce122316bb0eb41b34/leafo/lapis-mcp"
---

# Lapis MCP

A library for building Model Context Protocol (MCP) servers and defining LLM
tool calls in Lua/MoonScript. Provides a base class for authoring servers,
adapters that expose those servers' tools to OpenAI/Anthropic/Gemini APIs,
stdio and HTTP transports, an OAuth shim for protected endpoints, and a `lapis`
subcommand for running a server inside a Lapis project. A small bundled server
for introspecting Lapis applications is included as a starting point.

## Installation

```bash
luarocks install lapis-mcp
```

## Creating Your Own MCP Server

This project provides a reusable `McpServer` base class that you can extend to
create your own MCP servers. Here's how to implement your own:

### Full Example: File System MCP Server

#### Lua

```lua
local McpServer = require("lapis.mcp.server").McpServer
local json = require("cjson.safe")

local FileSystemMcpServer = McpServer:extend("FileSystemMcpServer", {
  server_name = "filesystem-mcp",
  instructions = "Tools to interact with the local filesystem"

  -- optional fields:
  -- server_version = "1.0.0", 
  -- server_vendor = "Your Company",
})

FileSystemMcpServer:add_tool({
  name = "list_files",
  description = "Lists files…

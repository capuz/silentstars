---
repo: "brookstalley/cordyceps"
name: "cordyceps"
description: "Grasshopper MCP Bridge - Claude takes control of Grasshopper"
url: "https://github.com/brookstalley/cordyceps"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["grasshopper", "mcp", "rhino3d"]
stars: 78
forks: 8
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-01-27T01:23:17Z"
lastCommitAt: "2026-06-25T02:08:45Z"
lastReleaseAt: "2026-06-24T20:36:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 30
maintainers: ["brookstalley", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e1e6e815c021728644619165b43408c930d689f377d5a0f422496d6fd4ff7eb/brookstalley/cordyceps"
discussionCount: 1
---

# Cordyceps

**MCP server for Grasshopper.** Give AI agents or scripts direct control over your parametric design canvas and Rhino rendering tools.

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) provides a standardized interface for controlling applications — whether from AI assistants or your own code.

## Features

- **Full Grasshopper control** — add components, wire connections, set values, manage groups
- **Rhino integration** — bake geometry, manage layers, apply PBR materials, render scenes
- **Natural language** — describe what you want and let AI build it
- **Direct scripting** — call tools from Python or any MCP client, no AI required

## Requirements

- **Rhino 8.21+** (requires .NET 8)
- **For AI use**: Claude Desktop, Claude Code, Cursor, VS Code, or any MCP-compatible assistant
- **For scripting**: Any MCP client library ([Python](https://github.com/modelcontextprotocol/python-sdk), [TypeScript](https://github.com/modelcontextprotocol/typescript-sdk), etc.)

## Installation

1. **[Download Cordyceps.gha](https://github.com/brookstalley/cordyceps/raw/main/releases/Cordyceps.gha)**

2. Copy to your Grasshopper components folder:
   *File → Special…

---
repo: "NPGameDev/godot-mcp-toolkit"
name: "godot-mcp-toolkit"
description: "A Godot 4.2+ editor plugin that lets AI coding assistants work inside the editor over the Model Context Protocol. Consolidated tools cover 150+ operations across scenes, scripts, nodes, and playtests, and a GDScript extension API lets any project add its own tools. Pairs with the godot-mcp-server npm bridge; runs locally."
readmeQualityOk: true
url: "https://github.com/NPGameDev/godot-mcp-toolkit"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [91]
stars: 39
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-04-14T08:32:22Z"
lastCommitAt: "2026-09-21T09:14:34Z"
lastReleaseAt: "2026-09-20T21:24:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["NPGameDev", "bclarksoftware"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d79c873d75fbc2d62ef2ca9d01078964f3e9cac98ded2efa9fdb9b357424312/NPGameDev/godot-mcp-toolkit"
---

# Godot MCP Toolkit

AI-assisted Godot development through the [Model Context Protocol](https://modelcontextprotocol.io). This addon turns the Godot 4.2+ editor into an MCP server. Your AI coding assistant can create scenes, edit scripts, inspect nodes, run playtests, and read the results back, all inside the editor while you watch. The companion npm package [`@npgamedev/godot-mcp-server`](https://github.com/NPGameDev/godot-mcp-server) is the bridge your assistant talks to.

> Runs fully locally. No telemetry, no cloud services, no account. Nothing leaves your machine.
>
> This is an independent community project, not affiliated with or endorsed by the Godot Foundation or Anthropic.
>
> Desktop only: Windows, macOS, and Linux. The bridge needs Node.js 22 or newer.

<details>
<summary>New to MCP?</summary>

The [Model Context Protocol](https://modelcontextprotocol.io) is an open standard that lets an AI assistant use external tools. An MCP server describes what it can do (create a node, read a script, run the game), and any MCP-compatible assistant (Claude Code, Claude Desktop, Cursor, and others) can call those tools mid-conversation. This addon turns your Godot editor into one of…

---
repo: "NPGameDev/godot-mcp-toolkit"
name: "godot-mcp-toolkit"
description: "A Godot 4.2+ editor plugin that lets AI coding assistants work inside the editor over the Model Context Protocol. Consolidated tools cover 150+ operations across scenes, scripts, nodes, and playtests, and a GDScript extension API lets any project add its own tools. Pairs with the godot-mcp-server npm bridge; runs locally."
readmeQualityOk: true
url: "https://github.com/NPGameDev/godot-mcp-toolkit"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [82]
stars: 91
forks: 14
openIssues: 2
closedIssues: 23
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-04-14T08:32:22Z"
lastCommitAt: "2026-10-29T10:36:39Z"
lastReleaseAt: "2026-10-28T07:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 39
maintainers: ["NPGameDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3098df16302471787e1412acfbab9abfdfdde8f9d05b1d0fd9ce04e84a61c13a/NPGameDev/godot-mcp-toolkit"
discussionCount: 0
---

# Godot MCP Toolkit

AI-assisted Godot development through the [Model Context Protocol](https://modelcontextprotocol.io). This addon turns the Godot 4.2+ editor into an MCP server. Your AI coding assistant can create scenes, edit scripts, inspect nodes, run playtests, and read the results back, all inside the editor while you watch. The companion npm package [`@npgamedev/godot-mcp-server`](https://github.com/NPGameDev/godot-mcp-server) is the bridge your assistant talks to.

> Runs fully locally. No telemetry, no cloud services, no account. Nothing leaves your machine. The one exception is update checks: at most once a day the toolkit asks GitHub whether a newer version is published (and, when one is, asks the Asset Store whether it lists it yet), and the Extensions dialog fetches its catalog from GitHub when you open it. These requests carry no identifier and nothing about your project; the servers see only your IP address, as with any download. Turn the update check off in Project Settings under Mcp Toolkit > Updates (`mcp_toolkit/updates/check_for_updates`).
>
> This is an independent community project, not affiliated with or endorsed by the Godot Foundation or Anthropic.
>
>…

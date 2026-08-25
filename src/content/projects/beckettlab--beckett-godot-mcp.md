---
repo: "beckettlab/beckett-godot-mcp"
name: "beckett-godot-mcp"
description: "Zero-sidecar MCP server inside the Godot editor. AI agents (Claude Code, Cursor) inspect, author, run and SEE your game. GDScript + C#, validate-before-write, no Node.js. Godot 4.2+. Free Lite; Full adds autonomous playtesting."
readmeQualityOk: true
url: "https://github.com/beckettlab/beckett-godot-mcp"
homepage: "https://beckettlabs.itch.io/beckett-godot-mcp"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [97]
topics: ["ai", "ai-agents", "claude", "cursor", "game-development", "gdscript", "godot", "godot-engine", "godot-mcp", "godot4"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T00:51:02Z"
lastCommitAt: "2026-08-25T04:10:11Z"
lastReleaseAt: "2026-07-10T08:27:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: ["beckettlab"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1273876922/39ae3bcc-189d-4870-8367-1a1729c25801"
---

# Beckett — MCP for Godot

> *Stop waiting for Godot.*

**Beckett** is a **zero-sidecar** Model Context Protocol (MCP) server embedded directly in the **Godot 4** editor as a GDScript `EditorPlugin`. AI agents (Claude and others) drive the editor over HTTP — no Node/Python bridge, no second process, no cloud.

This repository is the free, **MIT-licensed Lite edition**: the complete **inspect → author → run → SEE** dev loop (50 tools), for **GDScript *and* C#**. The AI can now *watch your running game* on the free tier: screenshot it, read the live remote scene tree and node state, poll performance monitors, and tail the game's logs. The paid **Full** edition makes the AI the *playtester* (it drives input, clicks 2D/3D and UI, and asserts the results), plus a test runner, animation tools, `scatter_nodes`, background exports, project-wide analysis, and 37 knowledge packs. See [What Full adds](#what-full-adds).

**Lite: the AI sees your game. Full: the AI playtests it.**

## Demo

## Why

Existing Godot MCP servers either shell out to the CLI (can't play the game, screenshot, or inspect runtime) or run a Node/Python **sidecar** that relays to a thin in-editor addon. This one makes…

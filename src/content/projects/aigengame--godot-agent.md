---
repo: "aigengame/godot-agent"
name: "godot-agent"
description: "Godot AI agent CLI, Skill, and MCP server with structured JSON/schema output — headless scene/script/export automation plus live runtime control."
url: "https://github.com/aigengame/godot-agent"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["godot", "mcp", "structured-output", "cli", "agent-tools", "ai-agent", "automation", "game-development", "gamedev", "godot-engine"]
stars: 5
forks: 3
openIssues: 3
closedIssues: 125
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-08T10:43:05Z"
lastCommitAt: "2026-06-27T06:24:23Z"
lastReleaseAt: "2026-06-15T03:20:16Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 74
maintainers: ["qinhaihong-red", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b8a5dfedd84576c51a91f09da7a6c414d25ca7db462b236a188cc71b0c9351c/aigengame/godot-agent"
discussionCount: 0
---

# godot-agent (`gda`): Godot AI Agent CLI, Skill, and MCP Server

> **`gda` gives your AI coding agent — or your shell scripts and CI — structured, machine-readable
> control of the [Godot Engine](https://godotengine.org).** Create scenes, edit nodes & scripts,
> and export builds headlessly, then drive a *running* game live: runtime tree, input,
> screenshots, performance — one command surface, three ways in.

AI agents are great at writing GDScript and terrible at *seeing what happened*. `gda`
closes that loop: your agent issues one operation and gets back a single clean JSON
result it can act on — never engine logs it has to scrape. It runs in **two modes**:

- **Headless** — one-shot and stateless, zero setup. No editor plugin, no daemon,
  nothing to install in your project. Create and edit scenes, nodes, scripts, resources,
  shaders and themes; analyze the project; export builds.
- **Live** — drive a *running* game through a background daemon for everything only a
  live engine can do: read the runtime scene tree, get/set runtime properties, simulate
  input, capture screenshots, and sample performance.

> `gda` is **pre-1.0**: every command works end-to-end today, but the…

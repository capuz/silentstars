---
repo: "satelliteoflove/godot-mcp"
name: "godot-mcp"
description: "Give your AI assistant eyes and hands in the Godot editor: scene editing, input injection, deterministic playtesting, and live game state for agents"
readmeQualityOk: true
url: "https://github.com/satelliteoflove/godot-mcp"
homepage: "https://www.npmjs.com/package/@satelliteoflove/godot-mcp"
language: "GDScript"
languages: ["GDScript", "TypeScript"]
languagePcts: [52, 48]
topics: ["ai-agents", "claude", "game-development", "gdscript", "godot", "godot-addon", "godot-engine", "mcp", "mcp-server", "model-context-protocol"]
stars: 184
forks: 22
openIssues: 6
closedIssues: 106
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-12-21T01:19:38Z"
lastCommitAt: "2026-11-09T04:34:45Z"
lastReleaseAt: "2025-12-22T15:43:13Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 38
maintainers: ["satelliteoflove", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e77b445c1e1239b5c96e5fc208f206d0a4981357f42fafbf11812b81d48f0e5b/satelliteoflove/godot-mcp"
discussionCount: 1
---

# godot-mcp

Give your AI assistant eyes and hands in the Godot editor — and a running game it can actually playtest.

## Why this one?

There are a few Godot MCP servers out there, and most can open a scene and poke at nodes. This one is built around a harder problem: **letting an agent verify its own work.** Run the game, drive it like a player, observe what actually happened, and prove the change did what it claimed — without you ferrying screenshots and error logs back and forth.

The pieces that make that possible, and that you won't find elsewhere:

- **Deterministic playtesting.** Freeze the game clock, step exact slices of game time (or step *until a condition holds*), with inputs riding inside the window. Observation never races the game.
- **Cheap observation.** Live entity state — positions, velocities, animation state, your own custom data — as structured JSON. Most "what's happening on screen?" questions get answered without spending vision tokens on a screenshot.
- **Real input.** Named actions with analog strength, joypad buttons and stick vectors, raw keys with modifier combos, relative mouse-look, text typing. Sequences run with precise timing and can prove they…

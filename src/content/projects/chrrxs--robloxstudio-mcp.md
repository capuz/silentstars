---
repo: "Chrrxs/robloxstudio-mcp"
name: "robloxstudio-mcp"
description: "MCP server for Roblox Studio runtime debugging, playtest control, screenshots/input, multiplayer testing, and per-peer server/client eval from AI agents."
readmeQualityOk: true
url: "https://github.com/Chrrxs/robloxstudio-mcp"
language: "Lua"
languages: ["Lua", "TypeScript"]
languagePcts: [64, 24]
topics: ["mcp", "roblox", "roblox-studio"]
stars: 232
forks: 37
openIssues: 0
closedIssues: 52
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-05-23T20:08:03Z"
lastCommitAt: "2026-09-18T14:03:29Z"
lastReleaseAt: "2026-05-27T12:28:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 29
maintainers: ["Chrrxs", "ozskywalker", "aechlaenm"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1cd5e319952866b6a0336d412587796250385d07f10bac6630f7f4a18484c75/Chrrxs/robloxstudio-mcp"
---

# Roblox Studio MCP

Connect your coding agent directly to Roblox Studio. It can edit places, run Luau
in live server and client contexts, start and stop playtests, and collect logs,
screenshots, memory reports, and profiler captures from each peer.

## What it can do

### Debug a running game

- Run Luau with `eval_server_runtime` or `eval_client_runtime`. Both tools execute in a live server or client context and use the same `require` cache as your game scripts.
- Instrument live code with `breakpoints`. It records each hit without pausing the playtest.
- Read output from edit mode, the server, or a specific client with `get_runtime_logs`, including messages logged during startup.

### Automate playtests

- Start, inspect, and stop solo or multi-client sessions with `solo_playtest` and `multiplayer_playtest`.
- Open or close Studio windows with `manage_instance`. It can launch a baseplate, a local place file, a published place, or an older place revision.

### Find performance problems

- Record server or client CPU timings with `capture_script_profiler` and `capture_micro_profiler`.
- Break down memory use with `get_memory_breakdown` or attribute scene cost with…

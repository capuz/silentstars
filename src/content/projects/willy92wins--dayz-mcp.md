---
repo: "willy92wins/dayz-mcp"
name: "dayz-mcp"
description: "MCP tool to enable complete AI control over your dayz client/server. Used to develop many mods. Can be used to close the loop and let AI test ingame developed mods, or even use AI as a game orchestrator in a server. Playbook and documentation for IAs included and the product is smoothed out to be usable even by small/less capable agents"
readmeQualityOk: true
url: "https://github.com/willy92wins/dayz-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 8
forks: 4
openIssues: 2
closedIssues: 21
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2026-08-16T19:28:39Z"
lastCommitAt: "2026-11-27T16:28:42Z"
lastReleaseAt: "2026-11-11T13:51:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["willy92wins"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f890c5cad88bde503bab27e576b8715d0c2a8ad6ddbd8a1361554e7d4caa27f/willy92wins/dayz-mcp"
---

# DayZ-MCP

**An MCP server that puts an agent's hands on a running DayZ: build a mod, launch the
game, put the world into a state, act, and read back what the engine did — 121 typed
tools, server-authoritative, no keyboard, no OCR.**

Two things fall out of that, and both are new for this game:

- **The autonomous mod-development loop closes.** Editing Enforce Script, config.cpp
  and models is file work; packing a PBO is a command. What could not be automated was
  the part that decides whether the change actually works — getting the game up with
  the mod loaded, putting a player, a vehicle or an object into the exact situation the
  change is about, and reading the result. That step was a human at the client.
  DayZ-MCP makes it tool calls: an agent can now change, build, run, measure and fix a
  mod on its own.
- **An agent can run a server.** The same verbs that set up a test scene are the ones
  an event director or an admin needs: see every player, teleport one, spawn or remove
  something, change time and weather, message everyone, watch the log, wait for a
  condition — all through `MissionServer`, all serialized behind one daemon with leases
  and an audit trail.

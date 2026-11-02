---
repo: "klimPaskov/hoi4-agent-tools"
name: "hoi4-agent-tools"
description: "HOI4 modding tools for agents: local references, visual previews, focus trees, interfaces and maps."
readmeQualityOk: true
url: "https://github.com/klimPaskov/hoi4-agent-tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["coding-agents", "hearts-of-iron-iv", "hoi4", "mcp", "modding", "model-context-protocol"]
stars: 9
forks: 1
openIssues: 12
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-10T22:50:02Z"
lastCommitAt: "2026-11-02T11:36:09Z"
lastReleaseAt: "2026-10-19T14:26:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 50
maintainers: ["klimPaskov"]
openGraphImageUrl: "https://opengraph.githubassets.com/d67944a1c9faad652f44656c2080830d74592c4aefd05c8c3a55f85ad5bdabea/klimPaskov/hoi4-agent-tools"
---

# HOI4 Agent Tools

An [MCP](https://modelcontextprotocol.io/) server that helps coding agents build and edit Hearts of Iron IV mods.
Make focus trees, events and decisions. Edit maps and generate a new world. Preview windows, trees and maps, find the right rule in the docs, fix broken script and balance AI choices.

## What it does

Your agent can build and edit focus trees, events, decisions and maps, and generate a new world.

For a new map, give it a cleaned local reference image and preview the interpreted geography before writing. The [map workflow](https://github.com/klimPaskov/hoi4-agent-tools/blob/HEAD/docs/map.md#generate-a-world-from-one-image) creates provinces, states, terrain, cities, countries, supply and a provisional starting scenario. Reviewed names and masks refine ambiguous artwork; offline validation is separate from [native campaign acceptance](https://github.com/klimPaskov/hoi4-agent-tools/blob/v4.1.0/docs/evaluations/worldgen_acceptance_2026-10-15.md).
It previews focus trees, technology folders, windows and maps, finds the right rule in the game's documentation, fixes broken script and tunes AI choices.
You describe what you want; the agent picks the right…

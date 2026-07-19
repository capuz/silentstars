---
repo: "nozomi-koborinai/ableton-osc-mcp"
name: "ableton-osc-mcp"
description: "🎧 MCP server for controlling Ableton Live via AbletonOSC"
readmeQualityOk: true
url: "https://github.com/nozomi-koborinai/ableton-osc-mcp"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["ableton-live", "genkit", "mcp-server"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-01-25T12:58:45Z"
lastCommitAt: "2026-07-19T06:11:50Z"
lastReleaseAt: "2026-07-18T14:46:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 56
maintainers: ["nozomi-koborinai", "cursoragent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5341e70cb217fde539f3122b67fb422e662ed9f2ce4819c50f7b04f07eb9a732/nozomi-koborinai/ableton-osc-mcp"
---

# ableton-osc-mcp

An MCP (Model Context Protocol) server for controlling **Ableton Live** via [AbletonOSC](https://github.com/ideoforms/AbletonOSC).

This enables AI assistants (Claude, Cursor, etc.) to interact with Ableton Live for beat-making, music production, and creative workflows.

**Primary development target: Ableton Live 11.0.12** (the Live Object Model reports `11.0`). Other Live 11/12 builds may work, but some tools depend on Live APIs that only exist (or behave differently) on newer versions — see [Supported Ableton Live versions](#supported-ableton-live-versions).

## Features

- Control Ableton Live from AI assistants via MCP
- Create MIDI tracks and clips
- Add, read, and clear MIDI notes
- Get/set tempo
- Inspect tempo, playback state, scenes, and indexed tracks in one snapshot
- List devices on a track
- Load Drum Racks / presets from Live's Browser (with the included AbletonOSC patch)
- Browse Live Browser folders by path and load items onto tracks
- Search the local synced Splice library and load samples onto audio tracks (Live 12.0.5+)
- Set up a drum track with kit + clip + pattern in one recipe
- Run drum / bass / scene A/B comparisons through one…

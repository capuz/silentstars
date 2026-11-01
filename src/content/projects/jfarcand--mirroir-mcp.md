---
repo: "jfarcand/mirroir-mcp"
name: "mirroir-mcp"
description: "MCP server for controlling a real iPhone via macOS iPhone Mirroring...and any MacOs app. Screenshot, tap, swipe, type — from any MCP client."
readmeQualityOk: true
url: "https://github.com/jfarcand/mirroir-mcp"
homepage: "https://mirroir.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [75]
topics: ["ai-agent", "iphone", "iphone-mirroring", "macos", "mcp", "mcp-server", "mobile-testing", "model-context-protocol", "real-device-testing", "swift"]
stars: 273
forks: 37
openIssues: 2
closedIssues: 20
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-06T21:20:07Z"
lastCommitAt: "2026-11-01T22:59:00Z"
lastReleaseAt: "2026-02-10T17:03:13Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 34
maintainers: ["jfarcand", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e753771d5e3c16ed03ed12388c31e489f19fa8b700d7602cefd4127b23479d0/jfarcand/mirroir-mcp"
fundingLinks: ["GITHUB:https://github.com/jfarcand"]
discussionCount: 3
---

# mirroir-mcp

Give your AI eyes, hands, and a real iPhone. An MCP server that lets any AI agent see the screen, tap what it needs, and figure the rest out — through macOS iPhone Mirroring. Experimental support for macOS windows. [38 tools](https://github.com/jfarcand/mirroir-mcp/blob/HEAD/docs/tools.md), any MCP client.

## Vision: agents that test — and play

mirroir is growing archetype-aware coverage for **games**. A game splits into two surfaces. The **shell** — menu, shop, loadout, settings, win/lose screens — is ordinary text-labelled UI that today's skills already drive. The **scene** — the playfield — is a vision-driven loop an agent follows one touch at a time. The honest targets are **game QA smoke tests, tutorial walkthroughs, and scripted demos**, not real-time play: iPhone Mirroring exposes a single pointer, so twin-stick and twitch games stay out of reach (see [Games](#games)).

**Token reductions** make the scene loop affordable. Screenshots are ~90% of an agent's cost, so text-rich shell screens read through `describe_screen` with no image at all, and a region/scale capture knob trims the per-frame image cost where a screenshot is unavoidable. On the playfield,…

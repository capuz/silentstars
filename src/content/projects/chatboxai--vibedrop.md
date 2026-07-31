---
repo: "chatboxai/vibedrop"
name: "vibedrop"
description: "Agent-native static site hosting — CLI, MCP server, and SDK for deploying to vibedrop.cc"
readmeQualityOk: true
url: "https://github.com/chatboxai/vibedrop"
homepage: "https://vibedrop.cc"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 34]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T02:22:41Z"
lastCommitAt: "2026-07-31T06:29:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 12
maintainers: ["themez"]
openGraphImageUrl: "https://opengraph.githubassets.com/00056c642c779026726da50824ee7c592982da5972499f92a9da212ce75114d7/chatboxai/vibedrop"
---

# VibeDrop

Agent-native static site hosting. Tell your agent to deploy a folder — get a public URL in seconds.

- Website: https://vibedrop.cc
- Skill: [`skill.md`](https://vibedrop.cc/skill.md)
- CLI: [`@vibedrop/cli`](https://github.com/chatboxai/vibedrop/blob/HEAD/packages/cli)
- MCP server: [`@vibedrop/mcp`](https://github.com/chatboxai/vibedrop/blob/HEAD/packages/mcp)
- SDK: [`@vibedrop/sdk`](https://github.com/chatboxai/vibedrop/blob/HEAD/packages/sdk)

This repository contains the open-source clients. The hosting service itself runs at [vibedrop.cc](https://vibedrop.cc).

## Quick start — paste one prompt to your agent

Drop this into Claude Code, Cursor, Windsurf, or any agent that can read a URL:

> Read https://vibedrop.cc/skill.md and follow the instructions to set up VibeDrop.

Three steps, ~30 seconds:

1. **Paste the prompt.** Any agent that can fetch URLs will work.
2. **Agent installs itself.** It reads `skill.md`, runs `npm i -g @vibedrop/cli`, and provisions an anonymous API key. No signup, no credit card.
3. **Ask for a URL.** Point at any folder with an `index.html` — a `dist/`, a loose HTML bundle, or whatever the agent just wrote.

Then say something like:…

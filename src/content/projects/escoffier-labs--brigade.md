---
repo: "escoffier-labs/brigade"
name: "brigade"
description: "One local source for the MCP servers, tools, and memory your AI coding agents share, synced into each tool's native config with a review gate and a receipt for every change. No daemon, no lock-in."
url: "https://github.com/escoffier-labs/brigade"
homepage: "https://brigade.tools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-memory", "agent-workflows", "ai-agents", "claude-code", "codex", "developer-tools", "local-first", "multi-agent", "openclaw", "opencode"]
stars: 35
forks: 2
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-13T21:55:58Z"
lastCommitAt: "2026-06-27T00:36:14Z"
lastReleaseAt: "2026-06-11T02:31:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["solomonneas"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bb113b94ffbe89be6bdf384236533c3d8c96f170d5e20448869c85f23f2bf63/escoffier-labs/brigade"
---

</p>

<h1 align="center">Brigade CLI</h1>

  <strong>One canonical source for the MCP servers, tools, and memory your AI coding agents share, merged into each tool's native config with a review gate and a receipt for every change. Local files, no daemon, no lock-in.</strong>
</p>

</p>

Your agents run loops. Brigade keeps the receipts.

## What it does

You run more than one agent CLI. Each one keeps its MCP servers in its own config file, its memory in its own silo, and writes to both without review. Brigade is the local layer that fixes that. You keep one canonical source for your MCP servers, your tool and skill catalog, and your memory, and Brigade merges each into the tools you actually use: MCP servers into each tool's native config, tools and skills projected into each harness, and one shared memory owned in one place. A review gate sits in front of anything that gets written, and every consequential change lands a receipt you can grep, diff, and roll back. No daemon, no hosted service, no vendor lock-in: it writes plain files in your repo when you run a command, and that is all it does.

## Install

`brigade operator quickstart` (in [Try it in 60…

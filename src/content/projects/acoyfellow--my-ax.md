---
repo: "acoyfellow/my-ax"
name: "my-ax"
description: "A personal AI agent operating environment you self-host on Cloudflare."
url: "https://github.com/acoyfellow/my-ax"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["agent", "ai-agent", "cloudflare", "durable-objects", "mcp", "pwa", "sandbox", "svelte", "workers", "workers-ai"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T11:57:05Z"
lastCommitAt: "2026-07-03T12:40:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 38
maintainers: ["acoyfellow"]
openGraphImageUrl: "https://opengraph.githubassets.com/38107319ea0831e4fa87420b5c3183136232545c7e886f40b20b7b3cb6724673/acoyfellow/my-ax"
---

# My Agent Experience

A personal agent you deploy into your own Cloudflare account. It holds durable conversations, runs code across your workspace and connected machine, schedules recurring work, delegates bounded analysis, and surfaces what needs you — all behind your Access login, on infrastructure you own.

In this 3.4s clip the agent writes a workspace file, runs a command on a connected machine, and reads a Cloudbox run — one configured path, not a validation of every boundary. [Open the MP4](./docs/media/my-ax-kitchen-sink.mp4).

My AX is experimental and single-operator: you control the deployment and its Cloudflare resources. Calls to model providers, MCP servers, Cloudbox, and a connected machine run outside My AX's storage boundary — each receives only what you send it and retains data under its own policy.

**Read this in seven minutes:** [What It Does](#what-it-does) (capabilities) · [Important Limits](#important-limits) (the hard bounds) · [Deploy](#deploy) (get it running) · [Repository Map](#repository-map) (where the code lives).

> **Verify before trusting.** `npm run check` covers local build/type/tests only. Access, containers, models, voice, push, and…

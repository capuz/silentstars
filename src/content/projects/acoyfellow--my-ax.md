---
repo: "acoyfellow/my-ax"
name: "my-ax"
description: "A personal AI agent operating environment you self-host on Cloudflare."
url: "https://github.com/acoyfellow/my-ax"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [64, 22]
topics: ["agent", "ai-agent", "cloudflare", "durable-objects", "mcp", "pwa", "sandbox", "svelte", "workers", "workers-ai"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T11:57:05Z"
lastCommitAt: "2026-06-28T02:02:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 43
maintainers: ["acoyfellow"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb810ce256449696d9c4223bc285ca76d8310958ae7d2e6a6ccf72526d094b08/acoyfellow/my-ax"
---

# My Agent Experience

My AX is an experimental, single-operator personal agent runtime deployed in the operator's Cloudflare account. Each conversation has durable Think state and can use connected capabilities, run recurring work, delegate bounded analysis, request decisions, and retain supported outputs across authenticated devices.

The operator controls the deployment configuration and Cloudflare resources it uses. Calls to model providers, MCP servers, Cloudbox, and a connected machine execute outside My AX's storage boundary. Each receives the data and capabilities explicitly sent to it and may retain data under its own configuration or policy.

## What It Does

- **Check-in** — authenticated HTTP and MCP surfaces summarize what needs the owner, what is running, what recently completed, and the next steer from existing Attention, jobs, and run receipts.
- **Durable conversations** — Think is authoritative for conversation execution and retained message state. D1 contains a derived transcript index for UI, search, and export. In-flight work may still be interrupted by provider or runtime failure.
- **Connected capabilities** — the model and generated programs receive…

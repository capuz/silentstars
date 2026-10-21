---
repo: "MikkoParkkola/trvl"
name: "trvl"
description: "Travel MCP server + CLI for AI assistants — flights, hotels, trains, cars, ferries, price alerts. No API keys, single Go binary. 1 smart MCP tool + 66 aliases (98.9% smaller tools/list). Works with Claude, Cursor, Windsurf, Codex."
readmeQualityOk: true
url: "https://github.com/MikkoParkkola/trvl"
homepage: "https://mikkoparkkola.github.io/trvl/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "flight-search", "golang", "google-flights", "google-hotels", "hotel-search", "mcp", "mcp-server", "no-api-key", "travel"]
stars: 89
forks: 9
openIssues: 4
closedIssues: 148
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-02T16:13:18Z"
lastCommitAt: "2026-10-21T17:31:39Z"
lastReleaseAt: "2026-04-11T14:38:35Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["MikkoParkkola", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1199706854/bc0523f9-ed9c-475b-ade5-f43bd9c6513d"
fundingLinks: ["GITHUB:https://github.com/MikkoParkkola"]
discussionCount: 2
---

# trvl — Real travel search for your AI assistant

**Ask your AI assistant to plan a real trip, and it actually can.** trvl gives Claude, Cursor, Windsurf, Codex, or any MCP-compatible client one smart tool — the `travel` router — with live access to flights, hotels, rental cars, trains, buses, ferries, price alerts, award sweet spots, weather, and destination intel. Free for noncommercial use, no personal API keys for default search, no signup. One binary.

> **You:** I have €300 and a free weekend. Surprise me.
>
> **Illustrative response shape (prices are examples):** **Dubrovnik, Croatia** 🇭🇷 — ✈️ Ryanair HEL→DBV €167 RT · 🏨 Old Town Studios 4.6★ €84 · 🌡️ 26°C, sunny.
> 📊 Naive €350 → optimized €251 → **saved €99 (28%)** by flying Friday and splitting airlines.

**▶ Try it live, no install:** [socialistic.ai/trvl-travel-mcp](https://socialistic.ai/en/skill/trvl-travel-mcp-4f7aa7) (community-hosted).

---

## How it works, in one paragraph

trvl is a single binary that runs on your machine. Your AI client talks to it over MCP; it queries flight, hotel, transport, weather, and places sources, then merges, de-duplicates and optimizes the results before handing back one…

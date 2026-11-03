---
repo: "Justintunsday/chelaile-api-server"
name: "chelaile-api-server"
description: "HTTP API + MCP server for Chelaile (车来了) realtime bus data, with GitHub-hosted static datasets"
readmeQualityOk: true
url: "https://github.com/Justintunsday/chelaile-api-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-09-13T23:53:25Z"
lastCommitAt: "2026-11-03T10:51:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 36
maintainers: ["Justintunsday", "github-actions[bot]", "PeanutSplash"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7bdd1cf7d0fe5227b1705caff53b3d99890ac2feabc290152a9191b62366460/Justintunsday/chelaile-api-server"
---

# Chelaile API (chelaile-api-server)

A **read-only HTTP JSON API** for [Chelaile](https://web.chelaile.net.cn) realtime transit data:
line schedules, live vehicle positions, nearby stops, keyword search, route geometry, and bus/metro journey planning.
No login or account is required. The original MCP service remains available for Claude Code and Cursor.

- **Hosted services (previously verified):** Cloudflare Workers <https://ts-api.tundrey.com> | Vercel <https://chelaile-api-server.vercel.app>
- **User guide (Wiki):** <https://github.com/Justintunsday/chelaile-api-server/wiki>
- **Full documentation: [docs/API.md](https://github.com/Justintunsday/chelaile-api-server/blob/HEAD/docs/API.md)** | Documentation site: <https://chelaile-api-docs.tundrey.com/>
- Default address: `http://127.0.0.1:8787`
- Endpoint index: `GET /`

## Features

- **Zero configuration**: no upstream account or API key needed.
- **REST interface**: GET endpoints with simplified JSON, grouped line directions, normalized coordinates, and irrelevant fields removed.
- **Two interfaces**: HTTP API and MCP stdio service share the same core logic.
- **Static data on GitHub**: GitHub Actions periodically syncs city…

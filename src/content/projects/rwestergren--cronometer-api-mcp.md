---
repo: "rwestergren/cronometer-api-mcp"
name: "cronometer-api-mcp"
description: "MCP server for Cronometer nutrition tracking via the mobile REST API"
readmeQualityOk: true
url: "https://github.com/rwestergren/cronometer-api-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 70
forks: 40
openIssues: 1
closedIssues: 18
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-04-17T19:44:32Z"
lastCommitAt: "2026-11-07T16:12:24Z"
lastReleaseAt: "2026-07-26T10:49:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 41
maintainers: ["dependabot[bot]", "rwestergren", "paultristanwagner"]
openGraphImageUrl: "https://opengraph.githubassets.com/89f69b842a0575ce93bb5e8b1f4015295ce0c64948938840740152ec5092c7db/rwestergren/cronometer-api-mcp"
---

# cronometer-api-mcp

> **Hosted version for Claude.ai, ChatGPT, and Grok coming soon.** [**Join the waitlist →**](https://tally.so/r/A7WVge?ref=cronometer-api-mcp)

An [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server for [Cronometer](https://cronometer.com/) nutrition tracking, built on the reverse-engineered mobile REST API.

Unlike [cronometer-mcp](https://github.com/cphoskins/cronometer-mcp), which takes a comprehensive GWT-RPC approach against Cronometer's web backend, this server talks to the same JSON REST API used by the Cronometer Android app -- with clean payloads and stable, versioned endpoints.

## Features

- **Food log** -- diary entries with food names, amounts, meal groups
- **Nutrition data** -- daily macro/micro totals and nutrition scores with per-nutrient confidence
- **Food search** -- search the Cronometer food database, get detailed nutrition info
- **Diary management** -- add/remove entries, copy days, mark days complete
- **Custom foods** -- create foods with custom nutrition data
- **Macro targets** -- read weekly schedule and saved templates
- **Fasting** -- view history and aggregate statistics
- **Biometrics** -- weight, body…

---
repo: "antonpogrebenko-public/rftools-mcp"
name: "rftools-mcp"
description: "MCP server for rftools.io — 241 RF & electronics calculators + 13 simulation tools for AI agents"
readmeQualityOk: true
url: "https://github.com/antonpogrebenko-public/rftools-mcp"
homepage: "https://rftools.io"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 45]
topics: ["ai-tools", "antenna", "calculator", "claude-desktop", "electronics", "impedance", "mcp", "mcp-server", "model-context-protocol", "pcb-design"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T15:02:54Z"
lastCommitAt: "2026-11-01T10:44:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 56
maintainers: ["antonpogrebenko-public"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a2a9ba87f0fb8706b7dc659812b453e9ce93896d055f91cdea36d00300daca4/antonpogrebenko-public/rftools-mcp"
---

# rftools-mcp

**MCP server for [rftools.io](https://rftools.io) — 255 RF & electronics calculators + 13 server-side simulation tools for AI agents.**

Give Claude, Cursor, or any MCP-compatible AI assistant access to validated engineering calculators and heavy server-side simulations. Microstrip impedance, link budgets, filter design, converter sizing, antenna patterns, and 200+ more calculators — plus NEC2 antenna simulation, FDTD, Monte Carlo, SMPS analysis, EMI estimation, and more, all callable as MCP tools.

## Quick Start

Calculators work with no API key, and so do the simulation tools: without one, a job runs on the free lane. A key raises the limits — sign up at [rftools.io](https://rftools.io) and generate one from your dashboard. The one thing a key is required for is a file: uploading a file needs an API key; set `RFTOOLS_API_KEY`.

## Setup

### Without API key

All 255 calculators run locally with no sign-up required, and every simulation tool that takes no file still submits — on the free lane, with the free limits and the free-lane parameter bounds stated on the response.

A job type that takes a file is the exception. Uploading a file needs an API key; set…

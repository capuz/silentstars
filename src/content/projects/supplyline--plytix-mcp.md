---
repo: "Supplyline/plytix-mcp"
name: "plytix-mcp"
description: "MCP server for Plytix PIM API integration. Enables AI agents to read, write, and manage product data, assets, categories, and relationships. Built for e-commerce automation workflows."
readmeQualityOk: true
url: "https://github.com/Supplyline/plytix-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 8
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-09-06T14:36:30Z"
lastCommitAt: "2026-09-15T08:55:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 67
maintainers: ["Supplyline", "lucasphilips1907"]
openGraphImageUrl: "https://opengraph.githubassets.com/946de09382ecabde256db0dfa832ade04a43f847888577768187982ed272128c/Supplyline/plytix-mcp"
---

# Plytix MCP Server

A **lightweight, stateless Model Context Protocol (MCP) server** that provides AI assistants with live access to Plytix PIM (Product Information Management) data. This server enables AI tools like Claude Desktop, Claude mobile app, and other MCP clients to search, look up, and retrieve product information directly from the Plytix API.

> **Note:** This is a stateless, live API tool for read and write operations. For sync, caching, or ETL workflows, pair it with a separate persistence layer of your choosing.

## Features

- **51 MCP tools via stdio and 46 via the remote worker**
- **Smart product lookup** with automatic identifier detection (SKU, MPN, GTIN, label)
- **Family & inheritance tracking** with overwritten_attributes support
- **Schema discovery** for attributes and search filters
- **Automatic authentication** with token refresh
- **Rate limit handling** — proactive pacing to the account's advertised window plus jittered 429/5xx backoff
- **Zero persistence** — stateless, no database required
- **Remote server support** — Deploy to Cloudflare Workers for mobile/web access

## Installation

### Prerequisites

- **Node.js 20+**
- **Plytix PIM account**…

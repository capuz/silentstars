---
repo: "DevEnterpriseSoftware/scrapi-mcp"
name: "scrapi-mcp"
description: "MCP server for using ScrAPI to scrape web pages."
readmeQualityOk: true
url: "https://github.com/DevEnterpriseSoftware/scrapi-mcp"
homepage: "https://scrapi.tech"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "mcp-server", "scraper-api", "web-scraping", "webscraper", "mcp"]
stars: 18
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2025-04-07T12:50:23Z"
lastCommitAt: "2026-10-25T08:40:46Z"
lastReleaseAt: "2026-09-03T07:29:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 47
maintainers: ["brutaldev", "github-actions[bot]", "nils-friedrichs"]
openGraphImageUrl: "https://opengraph.githubassets.com/a88e1ffe0f9873600b8800d31d75ecc83a9eb8a2c08f0b41597e12fce73e6b66/DevEnterpriseSoftware/scrapi-mcp"
---

# ScrAPI MCP Server

ScrAPI MCP Server lets MCP-compatible clients scrape web pages through [ScrAPI](https://scrapi.tech).

ScrAPI is useful when a page needs a real browser session, CAPTCHA solving, residential proxy access, cookie banner handling, JavaScript rendering, geolocation-aware fetching, or pre-scrape browser actions such as clicking and scrolling.

## Contents

- [Features](#features)
- [Available tools](#available-tools)
- [Prerequisites](#prerequisites)
- [API key](#api-key)
- [Quick start](#quick-start)
- [MCP client setup](#mcp-client-setup)
- [HTTP transport](#http-transport)
- [Cloud-hosted server](#cloud-hosted-server)
- [Usage examples](#usage-examples)
- [Browser commands](#browser-commands)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [License](#license)

## Features

- Scrape any valid `https://` or `http://` URL through ScrAPI.
- Return either raw HTML or readable Markdown.
- Run browser commands before scraping.
- Use stdio transport for desktop MCP clients.
- Use Streamable HTTP transport for remote MCP clients and local testing.
- Run with `npx`, Docker, Smithery, or from source.

## Available Tools

### `scrape_url_html`…

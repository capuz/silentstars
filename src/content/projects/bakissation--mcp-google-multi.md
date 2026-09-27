---
repo: "bakissation/mcp-google-multi"
name: "mcp-google-multi"
description: "Multi-account Google MCP server for Claude Code: Gmail, Drive, Calendar, Sheets, Docs, Contacts, Search Console, and more. ~871 tools with OAuth2 multi-account switching."
readmeQualityOk: true
url: "https://github.com/bakissation/mcp-google-multi"
homepage: "https://berkati.xyz/case-studies/mcp-google-multi/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["claude", "gmail", "google-api", "google-calendar", "google-contacts", "google-docs", "google-drive", "google-sheets", "mcp", "mcp-server"]
stars: 12
forks: 10
openIssues: 1
closedIssues: 19
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-04T11:10:38Z"
lastCommitAt: "2026-09-27T09:28:37Z"
lastReleaseAt: "2026-05-21T19:53:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["bakissation"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1de6ca19ab2e911c4211d1ac00477f34c7c6c0d75406e8488cbfa0f4774b00f/bakissation/mcp-google-multi"
---

# mcp-google-multi

The most complete **local Google Workspace MCP server**: Gmail, Drive, Calendar, Sheets, Docs, Slides, Forms, Contacts, Tasks, Chat, Meet, Analytics (GA4), Search Console, Classroom, Vault, Admin and more — **every OAuth-reachable API method** as a tool, across **multiple Google accounts** at once, from Claude Code or any MCP client.

- 🧰 **Exhaustive** — 940 tools across 29 services, now including Google Analytics (GA4), + an escape hatch for anything else → [COVERAGE.md](https://github.com/bakissation/mcp-google-multi/blob/HEAD/COVERAGE.md)
- 🔑 **Multi-account** — drive any number of Google accounts by alias, or fan one call out across all of them
- 🔒 **Private by design** — your own OAuth app, tokens encrypted at rest (AES-256-GCM), writes deny-by-default, no telemetry, no metering — it talks only to Google
- 🌐 **Local or remote** — runs locally over stdio, or self-hosted over HTTP with its own built-in OAuth 2.1 server (Claude Code's `/mcp` login and the claude.ai connector, zero custom UI). Pull-and-up Docker Compose with optional automatic HTTPS → [remote setup](https://github.com/bakissation/mcp-google-multi/blob/HEAD/docs/http-setup.md)
- ✉️ **Built…

---
repo: "domdomegg/airtable-mcp-server"
name: "airtable-mcp-server"
description: "🗂️🤖 Airtable Model Context Protocol Server, for allowing AI systems to interact with your Airtable bases"
url: "https://github.com/domdomegg/airtable-mcp-server"
homepage: "https://www.npmjs.com/package/airtable-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["airtable", "mcp-server", "model-context-protocol"]
stars: 450
forks: 137
openIssues: 5
closedIssues: 29
watchers: 6
contributors: 11
recentReleases: 0
createdAt: "2024-12-12T17:16:40Z"
lastCommitAt: "2026-06-25T01:32:42Z"
lastReleaseAt: "2025-11-20T15:45:23Z"
status: "thriving"
tags: ["funded"]
healthScore: 90
undervaluedScore: 29
maintainers: ["dependabot[bot]", "domdomegg", "maxim-ultra"]
openGraphImageUrl: "https://opengraph.githubassets.com/e13fa0f291c495a2deceb34671d8c64bdbf0bc60e4615303c145da9da5d2fe83/domdomegg/airtable-mcp-server"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# airtable-mcp-server

A Model Context Protocol server that provides read and write access to Airtable databases. This server enables LLMs to inspect database schemas, then read and write records.

https://github.com/user-attachments/assets/c8285e76-d0ed-4018-94c7-20535db6c944

## Installation

Follow the instructions on [install-mcp](https://adamjones.me/install-mcp/?config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImFpcnRhYmxlLW1jcC1zZXJ2ZXIiXSwibmFtZSI6ImFpcnRhYmxlIiwiZW52Ijp7IkFJUlRBQkxFX0FQSV9LRVkiOiJwYXQxMjMuYWJjMTIzIn19), which generates the right config for your MCP client (Claude Code, Claude Desktop, Cursor, Cline, VS Code, and more).

You'll need an Airtable personal access token — [create one here](https://airtable.com/create/tokens/new) with scopes `schema.bases:read` and `data.records:read` (and optionally `schema.bases:write`, `data.records:write`, `data.recordComments:read`, `data.recordComments:write`), and access to the bases you want to use. It looks something like `pat123.abc123` (but longer). Set it as `AIRTABLE_API_KEY` (replacing the placeholder in the generated config).

## Components

### Tools

- **list_records**
  - Lists records from a specified Airtable…

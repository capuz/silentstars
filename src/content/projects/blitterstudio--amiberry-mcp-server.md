---
repo: "BlitterStudio/amiberry-mcp-server"
name: "amiberry-mcp-server"
description: "An MCP server for the Amiberry emulator"
readmeQualityOk: true
url: "https://github.com/BlitterStudio/amiberry-mcp-server"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-31T11:43:06Z"
lastCommitAt: "2026-10-17T07:58:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 43
maintainers: ["midwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f79a269fbc8b903bc35f54fac8d93d67386a85276b6df9c4897f0b3572b024b/BlitterStudio/amiberry-mcp-server"
---

# Amiberry MCP Server

An [MCP](https://modelcontextprotocol.io) (Model Context Protocol) server for
[Amiberry](https://github.com/BlitterStudio/amiberry), the Amiga emulator. It
lets an AI assistant list and edit configurations, launch games and disk
images, control a running emulation, and debug Amiga code.

The server speaks plain MCP over stdio, so any MCP client can use it: Claude
Desktop, Claude Code, Codex, Gemini (Antigravity), Cursor, Cline, Windsurf, and
others. The installer configures Claude Desktop, Claude Code, Codex, and
Gemini/Antigravity. For other clients, see [Other MCP clients](#other-mcp-clients).

A separate HTTP API exposes the same functions as REST endpoints for scripts,
home automation, and voice assistants.

## Features

**Files and launching**
- List and launch Amiberry configurations, or launch a Quickstart model
  (`A1000`, `A500`, `A500P`, `A600`, `A2000`, `A3000`, `A1200`, `A4000`,
  `CD32`, `CDTV`)
- Search disk images (ADF, HDF, DMS, LHA, ISO, CUE, CHD) and launch WHDLoad
  games from LHA archives
- Launch CD32 and CDTV images, and set up the disk swapper for multi-disk games
- Parse, edit, and create `.uae` configuration files from model…

---
repo: "3APA3A-3AHO3A/remnawave-mcp"
name: "remnawave-mcp"
description: "MCP server for Remnawave"
originalDescription: "MCP-сервер для Remnawave"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/3APA3A-3AHO3A/remnawave-mcp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 37]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-30T10:31:20Z"
lastCommitAt: "2026-11-13T05:36:16Z"
lastReleaseAt: "2026-10-23T17:15:05Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["3APA3A-3AHO3A", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa21f182cb2ea3f02b8d80eb6f84a54e412e565bd7bc37bfc17370487fc0cd3d/3APA3A-3AHO3A/remnawave-mcp"
---

MCP server for the [Remnawave](https://github.com/remnawave) panel **3.x**. It gives AI assistants — Claude, Cursor, VS Code (Copilot), Windsurf, Codex, Gemini CLI and any other MCP clients — access to users, nodes, traffic, devices, connections and GeoCheck. **Read-only** and a **privacy filter** on your side.

> [!TIP]
> **Quick start.** In Claude Desktop, download `remnawave-3.4.mcpb` from the [latest release](https://github.com/3APA3A-3AHO3A/remnawave-mcp/releases/latest) and open it, that's it. In any other client, build the server with three commands, or take the Docker image and paste the ready-made settings block from the "Connecting to clients" section below.

> [!IMPORTANT]
> **Privacy.** Panel responses are filtered on your computer before they are sent to the chat: keys and passwords are hidden, and clients are replaced with pseudonyms like `user~3fa2c1`.

## What it looks like

## Features

- **Read-only by default.** Nothing in the panel changes until you explicitly enable writing.
- **Always matched to your panel version.** Tools are not written by hand but generated from the official package…

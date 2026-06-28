---
repo: "TrueCrimeDev/ahk-mcp"
name: "ahk-mcp"
description: "AutoHotkey v2 MCP Server with prompts, code completion, and diagnostics"
url: "https://github.com/TrueCrimeDev/ahk-mcp"
language: "TypeScript"
languages: ["TypeScript", "AutoHotkey"]
languagePcts: [69, 26]
stars: 34
forks: 5
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-06T20:06:25Z"
lastCommitAt: "2026-06-28T01:46:24Z"
status: "thriving"
tags: []
healthScore: 56
undervaluedScore: 20
maintainers: ["TrueCrimeDev", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aed2bc9110fc5a83148e58ec42f5a5551943a18e289fecde12012135a366bf7/TrueCrimeDev/ahk-mcp"
---

# AutoHotkey v2 MCP Server

A TypeScript MCP server for AutoHotkey v2 development.
It provides script analysis, file operations, documentation search, and script execution tools for MCP clients such as Claude Desktop.

</div>

## Architecture

## Highlights

- 25+ `AHK_*` tools for AutoHotkey workflows
- Focused file discovery and active-file aware operations
- Script execution with process tracking and window detection
- Local AutoHotkey validation and diagnostics tools
- Built-in AutoHotkey docs and prompt/context helpers
- Stdio and SSE transport support

## Requirements

- Node.js 18+
- npm
- AutoHotkey v2 (for run/validate tools)

## Installation

```bash
git clone https://github.com/truecrimedev/ahk-mcp.git
cd ahk-mcp
npm install
npm run build
```

## Run

```bash
npm start
```

Development mode:

```bash
npm run dev
```

Smoke test:

```bash
npm run smoke:mcp
```

## Claude Desktop Configuration

Add this to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ahk": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["C:\\Users\\YourUsername\\path\\to\\ahk-mcp\\dist\\index.js"],
      "env": {
        "NODE_ENV": "production",…

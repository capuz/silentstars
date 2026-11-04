---
repo: "j0hanz/filesystem-mcp"
name: "filesystem-mcp"
description: "Filesystem MCP server for AI assistants. Search, read, edit, and manage local files in directories you choose."
readmeQualityOk: true
url: "https://github.com/j0hanz/filesystem-mcp"
homepage: "https://github.com/j0hanz/filesystem-mcp#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["filesystem", "mcp", "mcp-server", "model-context-protocol", "search", "typescript", "file-management", "diff", "file-operations", "glob"]
stars: 30
forks: 7
openIssues: 4
closedIssues: 39
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-12T09:26:27Z"
lastCommitAt: "2026-11-04T11:29:28Z"
lastReleaseAt: "2026-02-19T12:20:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 58
maintainers: ["j0hanz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115057681/95795e04-31d7-4cd5-b7ef-b1bdff1ff5cc"
---

# Filesystem MCP

**Let your AI assistant work with your files, safely.**

Read, search, edit, and patch files in the folders you choose.<br>
Secret files stay hidden, and risky changes wait for your OK.

Real sessions with a real model, except the web client demo. The `apply?` prompt comes from the example [gatekeeper](https://github.com/j0hanz/filesystem-mcp/blob/HEAD/examples/clients/gatekeeper/) client, not the server.

## What is this?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is how AI apps
such as Claude, GitHub Copilot in VS Code, and Cursor connect to tools.
Filesystem MCP is an MCP server: a small program that runs on your computer
and gives the AI 14 tools for working with files. You choose which folders it
can use, and everything outside them is off limits.

Once it is connected, you can ask things like:

- _"Find every TODO in this repo and group them by file."_
- _"Rename `getUser` to `fetchUser` in all `.ts` files. Show me the diff first."_
- _"What changed between `config.dev.json` and `config.prod.json`?"_
- _"Read the last 50 lines of `server.log` and explain the error."_
- _"Move the old screenshots into `archive/2025/`."_

## Why…

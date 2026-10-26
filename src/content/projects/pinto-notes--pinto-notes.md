---
repo: "pinto-notes/pinto-notes"
name: "pinto-notes"
description: "Notes for iPhone and Mac that ChatGPT, Claude, Claude Code and Codex can read and edit. Feels like Apple Notes, imports it too. Open source, encrypted."
readmeQualityOk: true
url: "https://github.com/pinto-notes/pinto-notes"
homepage: "https://pintonotes.com"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [47, 43]
topics: ["ios", "macos", "markdown", "mcp", "notes", "apple-notes", "chatgpt", "claude", "mcp-server", "ai-memory"]
stars: 30
forks: 3
openIssues: 13
closedIssues: 33
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-29T08:47:28Z"
lastCommitAt: "2026-10-26T09:17:31Z"
lastReleaseAt: "2026-10-17T07:33:50Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 48
maintainers: ["emilwagman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1394754812/ab982de9-2ef6-4522-8887-37bd2a623337"
discussionCount: 2
---

A notes app for iPhone and Mac that ChatGPT, Claude, Claude Code and Codex can read and edit.<br>
  It looks and works like Apple Notes, and it imports your Apple Notes.

Your notes, your iPhone and Mac, and every AI you use, all working on the same notes. Ask ChatGPT to plan a trip into a note, tick items off a checklist in Claude Code, and see it all on your phone a second later. Every change an AI makes is tinted with its name, keeps the version before it, and undoes with one tap.

## Works with

| App | How it connects |
|---|---|
| ChatGPT | Connector (OAuth). A ChatGPT plugin is in review. |
| Claude (web, desktop, iPhone) | Custom connector (OAuth) |
| Claude Code | `claude mcp add` or the Claude Code plugin |
| Codex | `codex mcp add` |
| Gemini CLI | Extension |
| Any MCP client | Streamable HTTP at `https://mcp.pintonotes.com`, OAuth 2.1 |

## Connect an AI in a minute

1. [Download the Mac app](https://pintonotes.com/download) and sign in with Apple or email.
2. Add the server to your AI:

   **ChatGPT or Claude:** add a custom connector with the address `https://mcp.pintonotes.com`.

   **Claude Code:**
   ```sh
   claude mcp add --scope user --transport http…

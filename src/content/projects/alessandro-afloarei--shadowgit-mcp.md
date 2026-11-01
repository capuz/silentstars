---
repo: "alessandro-afloarei/shadowgit-mcp"
name: "shadowgit-mcp"
description: "A Model Context Protocol (MCP) server that provides AI assistants with secure, read-only access to your ShadowGit repositories. This enables powerful debugging and code analysis capabilities by giving AI access to your project's fine-grained git history."
readmeQualityOk: true
url: "https://github.com/alessandro-afloarei/shadowgit-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 50
forks: 8
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-08-29T06:21:56Z"
lastCommitAt: "2026-11-01T10:44:43Z"
lastReleaseAt: "2026-10-27T18:42:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["blade47"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6ee26be2765b8d5315c4ff0711347502ef56cef36264a30c96f18727a032c8a/alessandro-afloarei/shadowgit-mcp"
---

# ShadowGit MCP server

Gives Claude Code, Cursor and Claude Desktop access to [ShadowGit](https://shadowgit.com): the automatic snapshots
ShadowGit takes of your projects every few minutes, kept apart from your own git history. Your assistant can see what
changed and when, and can save its own edits as one named checkpoint instead of many partial snapshots.

## Requirements

- Node.js 20 or later
- The ShadowGit app (0.3.4 or later for checkpoints, a release after 0.3.5 for the Lens, after 0.3.7 for its linked
  words, after 0.3.9 for the map, after 0.3.10 for the Lens's dependency facts, 0.3.11 or later for the project's
  rules, 0.3.13 or later for a session's unsaved edits in a snapshot as it ends and for the check of a checkpoint
  that finds nothing new), tracking at least one project.
  Reading history works while the app is closed;
  sessions, checkpoints, the Lens and the map need it running.
- Git on your PATH

## Setup

**Claude Code** (one install for every project):

```bash
claude mcp add --scope user shadowgit -- npx -y shadowgit-mcp-server
```

**Cursor**: in `~/.cursor/mcp.json`:

```json
{ "mcpServers": { "shadowgit": { "command":…

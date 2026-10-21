---
repo: "justadityaraj/shim-mcp"
name: "shim-mcp"
description: "WordPress MCP server plugin, live on WordPress.org. Connect Claude Code, Cursor, or any MCP client to WordPress over stdio (WP-CLI) or HTTP. 56 abilities, self-contained, no cloud."
readmeQualityOk: true
url: "https://github.com/justadityaraj/shim-mcp"
homepage: "https://dev.adityarajsingh.com/shim-mcp/"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["ai", "anthropic", "claude", "cursor", "mcp", "mcp-server", "model-context-protocol", "wordpress", "wordpress-plugin", "wp-cli"]
stars: 43
forks: 1
openIssues: 5
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-08-30T15:26:23Z"
lastCommitAt: "2026-10-21T23:36:56Z"
lastReleaseAt: "2026-09-05T07:53:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 41
maintainers: ["justadityaraj", "mikemikimike"]
openGraphImageUrl: "https://opengraph.githubassets.com/08b7628e76dc270b5aaff2c0340efd00139ee7cc51e4517440e73f2963e20c5f/justadityaraj/shim-mcp"
discussionCount: 1
---

# Shim MCP — WordPress MCP Server for Claude Code, Cursor, and any MCP client

A self-contained **Model Context Protocol (MCP) server for WordPress**, built for developers. Install one plugin and your WordPress site becomes an MCP server that Claude Code, Claude Desktop, Cursor, Windsurf, Cline, or any MCP-compatible AI client can drive — 56 abilities across posts, pages, media, users, plugins, menus, widgets, comments, options and system management.

No companion plugins. No cloud relay. No account anywhere. Your site talks to your AI client and nothing sits in between.

## Who this is for

Developers who live in a terminal or an editor.

If you run `wp` commands, keep VS Code open all day, and want Claude Code or Cursor to work on a local WordPress install the same way it works on the rest of your codebase — that's the case this was built for. It works fine as a remote server for a production site too, but the local-first path is the one that got the attention.

## Two ways to connect

**1. Local, over stdio (WP-CLI)** — the reason this plugin exists.

```bash
wp shim-mcp serve --user=admin
```

That runs the MCP server as a plain stdio process: JSON-RPC in on STDIN, responses…

---
repo: "paulhkang94/markview"
name: "markview"
description: "Native macOS markdown preview + MCP server for Claude Code. Swift/SwiftUI, GFM, Mermaid, syntax highlighting. No Electron."
url: "https://github.com/paulhkang94/markview"
homepage: "https://paulkang.dev"
language: "HTML"
languages: ["HTML"]
languagePcts: [95]
topics: ["gfm", "macos", "markdown", "markdown-preview", "native-app", "swift", "swiftui", "mcp", "mcp-server", "model-context-protocol"]
stars: 34
forks: 3
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T09:19:08Z"
lastCommitAt: "2026-07-04T06:13:03Z"
lastReleaseAt: "2026-03-03T02:44:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 35
maintainers: ["paulhkang94"]
openGraphImageUrl: "https://opengraph.githubassets.com/70a87c4342856f1f41163fce222539a212e40329de705317a3850e44d51d7ab5/paulhkang94/markview"
discussionCount: 0
---

# MarkView

Native macOS markdown preview with MCP server for Claude Code. Claude writes markdown — MarkView renders it live, in a real native window, while you work.

> **Versions:** The macOS app (`app` badge) and the npm MCP wrapper (`npm` badge) are versioned independently. App releases happen when the Swift binary changes; npm patches happen for MCP server improvements. Both badges always show the latest of each.

| Preview only | Editor + Preview |
|:---:|:---:|
|  |  |

## Quick Start — Claude Code

One command to wire MarkView into every Claude Code session:

```bash
claude mcp add --transport stdio --scope user markview -- npx mcp-server-markview
```

That's it. Claude can now call `preview_markdown` to render any markdown string in a native macOS window, or `open_file` to open any `.md` file directly.

| Tool | What it does |
|------|-------------|
| `preview_markdown` | Render markdown content in a live-reloading MarkView window |
| `open_file` | Open an existing `.md` file in MarkView |

### Claude Desktop Setup

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "markview": {
      "command": "npx",
      "args":…

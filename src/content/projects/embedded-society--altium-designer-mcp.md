---
repo: "embedded-society/altium-designer-mcp"
name: "altium-designer-mcp"
description: "MCP server for AI-assisted management of Altium Designer component libraries"
readmeQualityOk: true
url: "https://github.com/embedded-society/altium-designer-mcp"
homepage: "https://github.com/embedded-society/altium-designer-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai-agents", "altium", "altium-designer", "altium-library", "claude", "mcp", "mcp-server", "rust", "eda", "electronic-design-automation"]
stars: 59
forks: 17
openIssues: 1
closedIssues: 19
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2026-01-17T08:35:22Z"
lastCommitAt: "2026-09-13T08:29:17Z"
lastReleaseAt: "2026-09-12T19:02:29Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["MatejGomboc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eca22c0138a76d56bc58c0412f88e6920fef9e07629da19d3f3bf8927f23c69/embedded-society/altium-designer-mcp"
discussionCount: 1
---

# altium-designer-mcp

**Let an AI build your Altium libraries — it does the engineering, this tool writes the files.**

An MCP server that gives AI assistants (Claude Code, Claude Desktop, Cursor, Antigravity, VS Code Copilot — any MCP client) file I/O
and primitive-placement tools for Altium Designer `.PcbLib` (footprint) and `.SchLib` (symbol)
libraries — so the AI can create and maintain *any* component, not just pre-programmed packages.

---

## The Problem

Building Altium component libraries by hand is slow and repetitive — every footprint means
looking up IPC-7351B pad sizes, courtyards, and silkscreen, then placing each primitive by
hand. AI assistants are excellent at exactly that reasoning, but they **cannot write Altium's
binary `.PcbLib`/`.SchLib` files** — an undocumented OLE compound format that is easy to
corrupt, and Altium silently refuses to open a malformed file.

| Approach | Problem |
|----------|---------|
| Draw every footprint by hand in Altium | Slow and repetitive; the AI can't touch the file |
| Ask an AI to emit the binary file directly | It produces a corrupt file Altium won't open |
| Pre-programmed footprint generators | Only the package types…

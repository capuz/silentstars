---
repo: "embedded-society/altium-designer-mcp"
name: "altium-designer-mcp"
description: "MCP server for AI-assisted Altium Designer component libraries management"
url: "https://github.com/embedded-society/altium-designer-mcp"
homepage: "https://github.com/embedded-society/altium-designer-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "altium", "altium-designer", "altium-libraries", "altium-library", "claude", "claude-ai", "mcp", "mcp-server", "rust"]
stars: 21
forks: 8
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T08:35:22Z"
lastCommitAt: "2026-06-24T06:39:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 47
maintainers: ["MatejGomboc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf5edfc0cfe991f9b8286d5ec3434f141b37a209b622f82ffea9ab4a5c26ca74/embedded-society/altium-designer-mcp"
discussionCount: 1
---

# altium-designer-mcp

**Let an AI build your Altium libraries — it does the engineering, this tool writes the files.**

An MCP server that gives AI assistants (Claude Code, Claude Desktop, VSCode Copilot) file I/O
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
| Pre-programmed footprint generators | Only the package types someone coded in advance |

---

## The Core…

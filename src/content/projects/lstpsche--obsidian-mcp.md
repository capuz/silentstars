---
repo: "lstpsche/obsidian-mcp"
name: "obsidian-mcp"
description: "Fast MCP server for local Obsidian vault usage by AI Agents"
readmeQualityOk: true
url: "https://github.com/lstpsche/obsidian-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agents", "claude", "cursor", "management", "mcp", "obsidian", "organization", "productivity", "codex", "knowledge"]
stars: 43
forks: 16
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-18T23:19:07Z"
lastCommitAt: "2026-11-06T11:23:21Z"
lastReleaseAt: "2026-04-13T19:43:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 38
maintainers: ["lstpsche"]
openGraphImageUrl: "https://opengraph.githubassets.com/40d235ddb0114a3a50f8dc05849023dd7857a2a61efa86c1f276cfb58e1206f7/lstpsche/obsidian-mcp"
---

# obsidian-mcp

A high-performance [MCP](https://modelcontextprotocol.io) server that gives AI agents full read/write access to [Obsidian](https://obsidian.md) vaults. Written in Rust. Ships as a single binary.

**No Obsidian plugins. No REST API. No Obsidian running. Just your vault on disk.**

## Why?

Existing solutions for AI + Obsidian require the Obsidian app to be running with a community plugin ([obsidian-local-rest-api](https://github.com/coddingtonbear/obsidian-local-rest-api)) and an MCP wrapper ([mcp-obsidian](https://github.com/MarkusPfundstein/mcp-obsidian)) on top. That's fragile, slow, and limited to what the REST API exposes.

obsidian-mcp talks directly to the filesystem. It understands the Obsidian format natively — wikilinks, frontmatter, tags, block references, periodic notes, the full graph. It builds fast in-memory indices on startup and keeps them synced via a filesystem watcher. The result is a single dependency-free binary that works whether Obsidian is open or not.

## Quick Start

```sh
# Install
cargo install obsidian-mcp

# Run (stdio — for MCP clients that launch the process)
obsidian-mcp /path/to/your/vault

# Run (HTTP — shared server for multiple…

---
repo: "sorcerai/skill-router"
name: "skill-router"
description: "Lazy-loader MCP server for Claude Code skills: search/load on demand instead of preloading the whole library"
readmeQualityOk: true
url: "https://github.com/sorcerai/skill-router"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-06T01:46:20Z"
lastCommitAt: "2026-11-26T23:37:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 15
maintainers: ["sorcerai"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a57ed13acf7f7c4b0cacb0ef94a171624566a95eea297a44b7e4d55f12fd1b9/sorcerai/skill-router"
---

# skill-router

A lazy router for Claude Code skills: instead of every installed skill costing
context every turn, expose the whole library through three small MCP tools —
search, load, reindex. Weak/cheap models navigate it fine; that's the point.

Single-file Node MCP server (stdio). One dependency (`@modelcontextprotocol/sdk`).
No database, no embeddings, no background services. Indexing ~185 skills takes
~25ms at startup.

## How it works

On startup (and on `skill_reindex`) the server walks three roots for `SKILL.md`
files:

| Root | Label | Notes |
|---|---|---|
| `~/.claude/skills/` | `active` | symlinks followed (with cycle guard) |
| `~/.claude/plugins/` | `plugin` | `plugins/cache/` and `plugins/marketplaces/` excluded |
| `~/.claude/skill-vault/` | `vault` | see below |

Frontmatter `name:`/`description:` are parsed (including YAML block scalars
like `description: >-`); duplicates dedupe with precedence
`active > plugin > vault`.

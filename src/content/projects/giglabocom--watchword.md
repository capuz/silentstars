---
repo: "GigLaboCom/watchword"
name: "watchword"
description: "MCP server in Go for storing prompts under memorable code words with automatic collision resolution, expiration, and dual database support (SQLite/PostgreSQL)."
readmeQualityOk: true
url: "https://github.com/GigLaboCom/watchword"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-06T09:07:21Z"
lastCommitAt: "2026-11-11T19:42:44Z"
lastReleaseAt: "2026-05-04T11:08:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 20
maintainers: ["glani"]
openGraphImageUrl: "https://opengraph.githubassets.com/88830f807c7870a526936a33dc73d16b25ce6b7fbbe65aca45772e5cb775608f/GigLaboCom/watchword"
---

# Watchword

An [MCP](https://modelcontextprotocol.io/) server that lets AI assistants store and retrieve prompts, snippets, and arbitrary text keyed by short, human-readable code words. Think of it as a shared clipboard between you and your LLM — say "save this as *falcon*", then later "show me *falcon*".

Built in Go. Supports SQLite, PostgreSQL, and libSQL/Turso. Runs over stdio, SSE, or Streamable HTTP.

## Why

LLM conversations are ephemeral. Watchword gives your assistant persistent, named storage so it can save useful prompts, templates, code snippets, or any text under memorable keywords and recall them across sessions.

## Features

- **10 MCP tools** for storing, retrieving, searching, listing, restoring, deleting entries, and file upload/download
- **S3 file storage** — upload/download files up to 1GB via presigned URLs (works with AWS S3 and Cloudflare R2)
- **Collision resolution** — if a keyword is taken, the server auto-appends a suffix (`rabbit` -> `rabbit2`)
- **SQLite, PostgreSQL, or libSQL/Turso** backends
- **Automatic expiration** — entries expire after a configurable TTL (or never, with `ttl_hours: 0`)
- **Bearer token and JWT/JWKS authentication** — with…

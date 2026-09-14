---
repo: "Ranork/remnus-app"
name: "remnus-app"
description: "MCP Native Workspace (Databases, pages, kanbans, calendars etc.)"
readmeQualityOk: true
url: "https://github.com/Ranork/remnus-app"
homepage: "https://remnus.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "mcp", "workspace"]
stars: 72
forks: 14
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 5
createdAt: "2026-05-18T08:08:58Z"
lastCommitAt: "2026-09-14T09:13:59Z"
lastReleaseAt: "2026-06-24T23:11:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 38
maintainers: ["Ranork", "Azkhar"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9c6cf3f7afa655da43821fae8405304964072dc658f0a5e906110197c43ce1f/Ranork/remnus-app"
---

</p>

# Remnus

**Open-source MCP-native workspace for humans and AI agents.**

Kanban boards, databases, and pages that Claude, Cursor, and any AI agent can read and write via MCP — alongside you.

---

## What is Remnus?

Remnus is the Human-Agent Collaborative Workspace, built around the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). Every page, database, and kanban board in your workspace is accessible to AI agents via a first-class MCP server — connect editors with one-click **OAuth 2.1 (PKCE)**, or use a scoped **bearer token** for headless / CI agents.

**Unlike Notion's MCP integration**, Remnus is designed for headless, CI/CD, and coding agent workflows from day one.

## OKF-native context, not a workspace dump

Remnus uses Open Knowledge Format (OKF) ideas as a portable knowledge contract. Pages can carry descriptions, types, tags, sources, lifecycle state, freshness dates, and revision-bound review signals. OKF v0.2 import/export is the interchange layer; the editable Remnus workspace remains canonical.

The `prepare_context` MCP tool turns a concrete task into Context Pack v2: a token-budgeted set of concepts ranked by BM25 relevance, native metadata,…

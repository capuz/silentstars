---
repo: "BWB03/amazon-catalog-cli"
name: "amazon-catalog-cli"
description: "Agent-native CLI for querying Amazon Category Listing Reports"
readmeQualityOk: true
url: "https://github.com/BWB03/amazon-catalog-cli"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-22T01:50:21Z"
lastCommitAt: "2026-07-05T20:59:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 24
maintainers: ["BWB03", "brettbohannon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c08d059fa402dd58b3f698c5f9bdc8140acc077e07aa0b6edf87af55f1e473a8/BWB03/amazon-catalog-cli"
---

# Catalog CLI

**Agent-native Amazon catalog auditing tool**

The first AI-agent-friendly Amazon catalog analysis tool. Query your CLRs with structured input, integrate via MCP server, and automate catalog audits.

> **Hosted API available** at [api.catalogcli.com](https://api.catalogcli.com/docs) — persistent storage, unlimited scans, and API access for $9.99/mo. [Learn more](https://catalogcli.com)

## What's New in v2.2

- **Amazon title readiness** - New `mobile-title-readiness` check flags titles over 75 characters for Amazon's mobile title update
- **Rewrite-ready output** - Returns first-75-character title segments, overflow text, significant terms, item highlight status, and recommended next actions
- **Agent workflow friendly** - Aliases `title-75` and `amazon-title-75` make it easy to call from Claude, MCP clients, and automation workflows
- **14 built-in checks** - Adds a new title triage workflow while keeping the classic 200-character `long-titles` check unchanged

## v2.0 Agent Foundations

- **Shared core architecture** - Business logic separated into `catalog/core/`, powering both CLI and MCP
- **MCP server** - `catalog mcp` launches a stdio MCP server with 4…

---
repo: "Aetheria-Labs1/storefront-skills"
name: "storefront-skills"
description: "AI skill packs for building Shopify landing pages — works with Claude Code, Codex, Cursor, and GPTs"
readmeQualityOk: true
url: "https://github.com/Aetheria-Labs1/storefront-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T08:08:24Z"
lastCommitAt: "2026-07-11T05:59:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["AdityaVernekar"]
openGraphImageUrl: "https://opengraph.githubassets.com/295572eef47552ff115b27286f710fd0326c99f6ef0ae9f9f7a24733be525bd2/Aetheria-Labs1/storefront-skills"
---

# Lexsis AI — Storefront Skills

> Native AI workflows for building high-converting Shopify storefronts with Claude Code and OpenAI Codex.

## Install (Claude Code)

```bash
# 1. Register marketplace (one-time)
/plugin marketplace add lexsis https://github.com/Aetheria-Labs1/storefront-skills

# 2. Install core skills (required — all page types + workflows)
/plugin install lexsis-storefront-skills@lexsis

# 3. Add your industry vertical (optional)
/plugin install lexsis-beauty-skills@lexsis
```

Done. Skills auto-load, MCP auto-configures, commands available immediately.

## Install (OpenAI Codex)

Run these commands in your terminal:

```bash
# 1. Register the Lexsis marketplace (one-time)
codex plugin marketplace add Aetheria-Labs1/storefront-skills --ref main

# 2. Install the storefront plugin
codex plugin add lexsis-storefront-skills@lexsis-storefront
```

Start a new Codex task after installation. Complete the `lexsis-ai` OAuth prompt when Codex requests access to the bundled MCP server.

Codex selects skills automatically from your request. You can also invoke any workflow directly with `$skill-name`, for example `$generate`, `$browser-analyze`, or `$cart`. Plugin-defined…

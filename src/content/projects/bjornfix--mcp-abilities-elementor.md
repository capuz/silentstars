---
repo: "bjornfix/mcp-abilities-elementor"
name: "mcp-abilities-elementor"
description: "MCP Abilities Elementor - Add-on for mcp-expose-abilities WordPress plugin"
url: "https://github.com/bjornfix/mcp-abilities-elementor"
homepage: "https://devenia.com/plugins/mcp-expose-abilities/#add-ons"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["ai-agents", "elementor", "mcp", "wordpress", "wordpress-plugin"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-20T19:09:15Z"
lastCommitAt: "2026-06-26T21:29:21Z"
lastReleaseAt: "2026-03-27T08:58:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 39
maintainers: ["bjornfix"]
openGraphImageUrl: "https://opengraph.githubassets.com/931634c66df128b419a6fba716ac13a1cfa0478dcd8b007fa51398813a518e7a/bjornfix/mcp-abilities-elementor"
---

# MCP Abilities - Elementor

Elementor abilities for MCP. Get, update, and patch Elementor page data. Manage templates and cache.

**Tested up to:** 7.0
**Stable tag:** 2.3.23
**License:** GPLv2 or later
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html

## What It Does

Elementor abilities for MCP. Get, update, and patch Elementor page data. Manage templates and cache.

This plugin is part of the Devenia MCP abilities ecosystem. It gives an MCP-capable agent a focused, authenticated way to work with Elementor work inside WordPress through MCP.

**Example:** "Handle this WordPress maintenance task directly." - The agent can inspect the site, call the relevant ability, and return the result without making the human click through wp-admin for every step.

## The Real Workflow

In practice, the human should not have to memorize every ability name.

The normal pattern is:

1. install the base MCP stack
2. install only the add-ons the site actually needs
3. let the agent discover the available abilities
4. give the agent a clear task with boundaries
5. verify the result in WordPress

The human's job is mostly to describe the goal.
The agent's job is to figure out the…

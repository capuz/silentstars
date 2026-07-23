---
repo: "hhopke/intervals-icu-mcp"
name: "intervals-icu-mcp"
description: "Read/write MCP server for Intervals.icu — training data, planning, and structured workout generation."
readmeQualityOk: true
url: "https://github.com/hhopke/intervals-icu-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["intervals-icu", "llm", "mcp", "mcp-server", "python", "fitness-tracking", "model-context-protocol", "running", "training-analysis", "workout-planning"]
stars: 35
forks: 14
openIssues: 14
closedIssues: 23
watchers: 0
contributors: 6
recentReleases: 9
createdAt: "2026-03-29T13:12:22Z"
lastCommitAt: "2026-07-23T06:14:39Z"
lastReleaseAt: "2026-07-07T06:25:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["hhopke", "jorge-huxley", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee661027240a55cb72269aea624cbf49e5d78038f100d6b17c4cc87dad0644f8/hhopke/intervals-icu-mcp"
---

# Intervals.icu MCP Server

A Model Context Protocol (MCP) server for Intervals.icu integration. Access your training data, wellness metrics, and performance analysis through Claude, ChatGPT, and other LLMs.

> Originally based on [eddmann/intervals-icu-mcp](https://github.com/eddmann/intervals-icu-mcp) (MIT licensed). This project is an independent continuation with significant bug fixes and new features — see [CHANGELOG.md](https://github.com/hhopke/intervals-icu-mcp/blob/main/CHANGELOG.md) for details.

## Overview

61 tools spanning activities, activity analysis, activity messages, athlete profile, wellness, events/calendar, performance curves, workout library, gear, sport settings, and custom items — plus 4 MCP Resources (athlete profile, workout syntax, event categories, custom item schemas) and 7 MCP Prompts (training analysis, recovery check, weekly planning, and more). See [Available Tools](#available-tools) for the per-category breakdown.

## Quick Start

Or for Claude Desktop, in 30 seconds:

1. Get your [API key and athlete ID](#intervalsicu-api-key-setup)
2. Add this to your Claude Desktop config:

```json
{
  "mcpServers": {
    "intervals-icu": {
      "command":…

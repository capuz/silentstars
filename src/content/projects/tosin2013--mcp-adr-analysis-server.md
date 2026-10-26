---
repo: "tosin2013/mcp-adr-analysis-server"
name: "mcp-adr-analysis-server"
description: "Your ADRs are lying to you. MCP server with live drift detection, content safety, and decision memory — validates architectural decisions against your actual code."
readmeQualityOk: true
url: "https://github.com/tosin2013/mcp-adr-analysis-server"
homepage: "https://tosin2013.github.io/mcp-adr-analysis-server/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["adr", "architectural-decision-records", "mcp-server", "ai-agents", "architecture", "claude", "cursor", "typescript", "code-analysis", "content-safety"]
stars: 35
forks: 13
openIssues: 12
closedIssues: 479
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-07-02T14:46:00Z"
lastCommitAt: "2026-10-26T09:18:39Z"
lastReleaseAt: "2025-09-27T18:08:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 65
maintainers: ["dependabot[bot]", "tosin2013"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0d5a50272eb92aa4b5c585b67d4a1e2860aaebc0f73c22646c9307adbb58111/tosin2013/mcp-adr-analysis-server"
discussionCount: 1
---

# MCP (Model Context Protocol) ADR (Architectural Decision Record) Analysis Server

> **Your ADRs are lying to you.** This MCP server catches it — live drift detection validates architectural decisions against your actual code. Plus content safety, decision memory, and 63 tools powered by your host LLM via CE-MCP.

## Table of contents

- [What is MCP?](#what-is-mcp)
- [Prerequisites](#prerequisites)
- [Quick Installation](#-quick-installation)
- [Quick Setup](#-quick-setup-2-steps)
- [Usage Examples](#-usage-examples)
- [Use Cases](#-use-cases)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [ADR Aggregator Integration](#-adr-aggregator-integration-optional)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Security & Performance](#-security--performance)
- [Contributing](#-contributing)
- [Resources](#-resources)
- [License](#-license)

## What is MCP?

The **Model Context Protocol (MCP)** is an open standard that enables seamless integration between AI assistants and external tools and data sources. Think of it as a universal adapter that lets AI assistants like Claude, Cline, and Cursor connect…

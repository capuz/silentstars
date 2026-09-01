---
repo: "omattsson/terragrunt-mcp-server"
name: "terragrunt-mcp-server"
description: "Model Context Protocol (MCP) server providing AI assistants with comprehensive Terragrunt documentation, code examples, and intelligent tooling for infrastructure-as-code development"
readmeQualityOk: true
url: "https://github.com/omattsson/terragrunt-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-assistant", "copilot", "devtools", "documentation", "iac", "infrastructure-as-code", "mcp", "model-context-protocol", "nodejs", "terraform"]
stars: 7
forks: 0
openIssues: 4
closedIssues: 130
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-23T15:12:12Z"
lastCommitAt: "2026-09-01T08:52:19Z"
lastReleaseAt: "2026-02-22T18:18:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 67
maintainers: ["omattsson"]
openGraphImageUrl: "https://opengraph.githubassets.com/66774ed4092a132b0407218b30779d0624be04a20d715bf03b858c582527682a/omattsson/terragrunt-mcp-server"
discussionCount: 8
---

# Terragrunt MCP Server

A Model Context Protocol (MCP) server that provides comprehensive Terragrunt documentation and tooling integration for AI assistants like GitHub Copilot in VS Code.

## Overview

This MCP server enables AI assistants to access and search the complete Terragrunt documentation, providing intelligent assistance for working with Terragrunt configurations, CLI commands, and HCL syntax. It features a robust caching system with network resilience and multiple fallback mechanisms.

**New:** Multi-mode architecture with **60-94% token overhead reduction** for optimized AI assistant integration. Choose the mode that fits your workflow: CORE (docs), CONFIG (generation), GUIDANCE (troubleshooting), OBSERVABILITY (metrics), or FULL (all tools).

## Features

### 📚 Documentation Access

- **Live Documentation**: Automatically fetches the latest Terragrunt documentation via llms.txt in a single HTTP request
- **Indexed Search**: Metadata-indexed architecture for efficient search with full content available on demand
- **Smart Caching**: Two-tier caching system (in-memory + disk) with 24-hour refresh cycle
- **Network Resilience**: Retry mechanism with exponential…

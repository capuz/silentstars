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
stars: 33
forks: 13
openIssues: 9
closedIssues: 472
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-07-02T14:46:00Z"
lastCommitAt: "2026-09-14T09:12:07Z"
lastReleaseAt: "2025-09-27T18:08:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["tosin2013", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d57350c11230b431cd5f2e6a19e79638bdc4b47017a1b8c61d71f93501e4891/tosin2013/mcp-adr-analysis-server"
discussionCount: 1
---

# MCP (Model Context Protocol) ADR (Architectural Decision Record) Analysis Server

> **Your ADRs are lying to you.** This MCP server catches it — live drift detection validates architectural decisions against your actual code. Plus content safety, decision memory, and 64 tools powered by your host LLM via CE-MCP.

## What is MCP?

The **Model Context Protocol (MCP)** is an open standard that enables seamless integration between AI assistants and external tools and data sources. Think of it as a universal adapter that lets AI assistants like Claude, Cline, and Cursor connect to specialized servers. This server gives your AI assistant the ability to detect ADR drift against live code, mask sensitive content before it leaks, and remember architectural decisions across conversations.

## TL;DR

**What:** MCP server that validates architectural decisions against your actual code — drift detection, content safety, and decision memory  
**Who:** AI coding assistants (Claude, Cline, Cursor, Windsurf), enterprise architects, development teams  
**Why:** Catch stale ADRs before they cause production incidents — live validation against code evidence, no API key required  
**How:** `npm…

---
repo: "Dave-London/Pare"
name: "Pare"
description: "Dev tools, optimized for agents. Structured, token-efficient MCP servers for git, test runners, npm, Docker, and more."
readmeQualityOk: true
url: "https://github.com/Dave-London/Pare"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-coding", "developer-tools", "mcp", "mcp-server", "structured-output", "token-efficiency", "typescript", "ai-tools", "claude", "cursor"]
stars: 136
forks: 12
openIssues: 12
closedIssues: 457
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-10T09:36:41Z"
lastCommitAt: "2026-08-18T04:08:57Z"
lastReleaseAt: "2026-02-10T12:07:42Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 31
maintainers: ["Dave-London", "horza-bora", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b51a173ec07710f776c22c24bf96573e448dbbf328772edcb5382842166af4b/Dave-London/Pare"
discussionCount: 14
---

<h1><img src="assets/logo.png" alt="" width="80" valign="middle" />&nbsp;&nbsp;Pare</h1>

**Reliable, structured CLI output for AI agents — no more parsing fragile terminal text.**

Pare provides [MCP](https://modelcontextprotocol.io) servers that wrap common developer tools (git, npm, docker, test runners, etc.) and return clean, schema-validated JSON instead of raw terminal text. Agents get typed data they can act on directly, without brittle string parsing.

## The Problem

Parsing CLI output is fragile. Raw terminal text includes ANSI escape codes, decorative headers, progress bars, locale-specific formatting, and platform differences that break agent workflows in subtle ways. An agent that works fine with `git status` on macOS may fail on Windows because the output format changed. A test runner's summary line might shift between versions, silently breaking a regex.

Pare eliminates this entire class of errors by returning schema-validated JSON with consistent field names, regardless of platform, tool version, or locale. As a bonus, structured output is significantly smaller — agents use fewer tokens per tool call:

| Tool Command                              | Raw Tokens |…

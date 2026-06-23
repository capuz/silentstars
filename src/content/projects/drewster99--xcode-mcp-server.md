---
repo: "drewster99/xcode-mcp-server"
name: "xcode-mcp-server"
description: "MCP Server for interacting with Xcode"
url: "https://github.com/drewster99/xcode-mcp-server"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-02T06:19:11Z"
lastCommitAt: "2026-06-23T23:18:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 62
maintainers: ["drewster99", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95c3a594f57fdb138106ca669ae2fc779433236aae029f0640f24a4e5973ad42/drewster99/xcode-mcp-server"
discussionCount: 1
---

# Xcode MCP Server

An MCP (Model Context Protocol) server that enables AI assistants to control and interact with Xcode for Apple platform development.

## What It Does

This server allows AI assistants (like Claude, Cursor, or other MCP clients) to:

- **Discover and navigate** your Xcode projects and source files
- **Build and run** iOS, macOS, tvOS, and watchOS applications
- **Execute and monitor tests** with detailed results
- **Debug build failures** by retrieving errors and warnings
- **Capture console output** from running applications
- **Take screenshots** of Xcode windows and iOS simulators
- **Manage simulators** and view their status

The AI can perform complete development workflows - from finding a project, to building it, running tests, debugging failures, and capturing results.

## Requirements

- **macOS** - This server only works on macOS
- **Xcode** - Xcode must be installed
- **Python 3.10+** - For running the server (uvx will fetch a compatible Python automatically if your system Python is older)

## Security

The server implements path-based security to control which directories are accessible:

- **With restrictions:** Set…

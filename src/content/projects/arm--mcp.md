---
repo: "arm/mcp"
name: "mcp"
description: "Arm's MCP server"
readmeQualityOk: true
url: "https://github.com/arm/mcp"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 91
forks: 20
openIssues: 0
closedIssues: 16
watchers: 4
contributors: 20
recentReleases: 10
createdAt: "2025-07-25T15:45:20Z"
lastCommitAt: "2026-08-27T14:23:45Z"
lastReleaseAt: "2026-08-24T14:30:12Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 54
maintainers: ["JoeStech", "brikin01", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2820f8291a49b51401f5f87a212a6336bf2d5f054e20f29620763643938607b1/arm/mcp"
---

# Arm MCP Server

An [MCP](https://modelcontextprotocol.io/) server providing AI assistants with tools and knowledge for Arm architecture development, migration, and optimization.

## Using the Arm MCP Server

If your goal is to migrate an application from x86 to Arm as quickly as possible, start here:

[Automate x86-to-Arm application migration using Arm MCP Server](https://learn.arm.com/learning-paths/servers-and-cloud-computing/arm-mcp-server/)

## Features

This MCP server equips AI assistants with specialized tools for Arm development:

- **Knowledge Base Search**: Semantic search across Arm documentation, learning resources, intrinsics, and software compatibility information
- **Code Migration Analysis**: Scan codebases for Arm compatibility using [migrate-ease](https://github.com/migrate-ease/migrate-ease) (supports C++, Python, Go, JavaScript, Java)
- **Container Architecture Inspection**: Check Docker image architecture support using integrated [Skopeo](https://github.com/containers/skopeo) and check-image tools.
- **Assembly Performance Analysis**: Analyze assembly code performance using LLVM-MCA
- **Arm Performix**: Run APX recipe workflows against a target device over…

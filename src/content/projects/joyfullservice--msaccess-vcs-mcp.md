---
repo: "joyfullservice/msaccess-vcs-mcp"
name: "msaccess-vcs-mcp"
description: "MCP Tools for Microsoft Access Databases - For use with the VCS Add-in"
readmeQualityOk: true
url: "https://github.com/joyfullservice/msaccess-vcs-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 5
openIssues: 8
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-01-20T22:03:45Z"
lastCommitAt: "2026-11-27T16:13:37Z"
lastReleaseAt: "2026-11-27T16:29:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 52
undervaluedScore: 36
maintainers: ["joyfullservice", "timbald"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbc5fbc685e23218ec6b98712728e805b95b1bd11f0820762919a3975618473e/joyfullservice/msaccess-vcs-mcp"
---

# msaccess-vcs-mcp

A lightweight MCP server (Model Context Protocol server) that provides AI agent integration for the [MSAccess VCS Add-in](https://github.com/joyfullservice/msaccess-vcs-addin). This tool acts as a bridge, allowing AI assistants (e.g., Cursor, Claude Code, and other MCP-compatible clients) to work with Microsoft Access databases through version control operations.

## Features

- **Full Export**: Export all database objects (forms, reports, queries, modules, macros, etc.)
- **Fast Save**: Incremental exports (only changed objects)
- **Per-Object Operations**: Export or import individual objects by name and type
- **Merge Build**: Import source changes into existing database
- **Build from Source**: Create fresh database from source files
- **Object Inventory**: List all objects in an Access database
- **Change Tracking**: Compare database against source files
- **SQL Queries**: Execute read-only SELECT queries via the add-in's DAO connection
- **VBA Execution**: Call existing VBA functions or run agent-generated code
- **Async Operations**: Long-running exports/builds report progress via HTTP callbacks
- **Add-in Rebuild**: `vcs_rebuild_addin` streams build…

---
repo: "nizarhamza/p6-mcp"
name: "p6-mcp"
description: "Primavera P6 MCP server for Claude, ChatGPT, Cursor and VS Code: critical path, DCMA 14-point check, what-if, and safe write-back to the P6 Professional database. Windows. Not affiliated with Oracle."
readmeQualityOk: true
url: "https://github.com/nizarhamza/p6-mcp"
homepage: "https://mcp-for-primavera-p6.pages.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["claude", "mcp", "mcp-server", "primavera-p6", "project-controls", "scheduling", "windows", "construction", "critical-path", "dcma"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T16:17:57Z"
lastCommitAt: "2026-11-26T13:02:07Z"
lastReleaseAt: "2026-10-27T16:49:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["nizarhamza"]
openGraphImageUrl: "https://opengraph.githubassets.com/455f9a5282c55079082e47ad01fc12d2448f040601ddefb231c3758e8d8e02e9/nizarhamza/p6-mcp"
discussionCount: 0
---

# MCP for Primavera P6: Primavera P6 MCP Server

**MCP for Primavera P6** is a local [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that
connects Claude, ChatGPT, Cursor, VS Code and any other MCP client to your **Oracle Primavera P6 Professional**
schedules on Windows. It reads the P6 database itself (P6 Professional standalone, SQLite), plain **XER files**,
or projects of a live **P6 EPPM server** (on premises or Oracle Cloud), and answers scheduling questions with real
computations: critical path and driving path, total float, the **DCMA 14-point check**, look-ahead, baseline and
update comparison, CPM what-if and Monte Carlo schedule risk. Unlike XER-only MCP servers, it can also **write
changes back**: to the P6 database (durations, logic, constraints, actuals, units and UDFs), or to the P6 EPPM
server through a push you approve. Each change is previewed in a dry run, applied only after your confirmation,
backed up first and recorded in an edit log.

> MCP for Primavera P6 is an independent project. It is not affiliated with, endorsed or sponsored by Oracle.
> Oracle, Primavera and P6 are trademarks of Oracle and/or its affiliates.

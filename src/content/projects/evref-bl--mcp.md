---
repo: "Evref-BL/MCP"
name: "MCP"
description: "MCP server for Pharo"
readmeQualityOk: true
url: "https://github.com/Evref-BL/MCP"
language: "Smalltalk"
languages: ["Smalltalk"]
languagePcts: [100]
topics: ["agentic-ai", "mcp", "pharo", "developer-tools", "llm-tools", "smalltalk"]
stars: 12
forks: 6
openIssues: 2
closedIssues: 73
watchers: 0
contributors: 8
recentReleases: 9
createdAt: "2026-04-03T10:05:00Z"
lastCommitAt: "2026-11-22T11:47:34Z"
lastReleaseAt: "2026-10-16T09:59:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 68
maintainers: ["Gabriel-Darbord"]
openGraphImageUrl: "https://opengraph.githubassets.com/e36eac61115eb2bc80b811452440a73042327c7ff90503c82ea31e0e9fa9628e/Evref-BL/MCP"
---

# MCP for Pharo

MCP is an in-image [Model Context Protocol](https://modelcontextprotocol.io/)
server for Pharo. It lets MCP clients inspect and change the running image
through Pharo-aware tools for packages, classes, methods, tests, repositories,
change history, debugging, and UI inspection.

MCP works through the Pharo ecosystem—compilation, refactorings, Renraku,
SUnit, Iceberg, Metacello, Epicea, and Spec—rather than patching exported Tonel
files as plain text.

## Supported Versions

Pharo 10, 11, 12, 13, 14, and 15 are supported.

Protocol revisions `2025-03-26`, `2025-06-18`, `2025-11-25` and `2026-07-28`
are supported, each answered in its own shape.

## Install And Start

Load MCP in a supported image:

```smalltalk
Metacello new
   baseline: 'MCP';
   repository: 'github://Evref-BL/MCP:v4.x.x/src';
   onConflictUseIncoming;
   load.
```

That loads the `default` group. To choose the groups, send `load:` with their
names in place of `load`. The baseline groups are:

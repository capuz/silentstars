---
repo: "Mesteriis/plasticity-mcp"
name: "plasticity-mcp"
description: "Local MCP server for native Plasticity CAD automation on macOS, with an optional model review and print preparation Workbench."
readmeQualityOk: true
url: "https://github.com/Mesteriis/plasticity-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["3d-printing", "cad", "creality", "mcp", "plasticity", "typescript"]
stars: 5
forks: 5
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-27T07:07:12Z"
lastCommitAt: "2026-10-26T21:00:22Z"
lastReleaseAt: "2026-10-11T18:34:13Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["Mesteriis", "gumayunov"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c95d29e51394458c8c60557ffceef13ce81ad0a50bbbabf97609956f3b982da/Mesteriis/plasticity-mcp"
---

# Plasticity MCP

Control Plasticity from an MCP client: inspect and measure native CAD geometry, create and edit models, and export the result. An optional Workbench supports model review, dimensional feedback, and print preparation.

**Runs locally on macOS Apple Silicon with Plasticity 26.1.3, with experimental adapter support for a separately prepared 26.2.1 copy.** The MCP server connects to a Plasticity window selected by the user; it cannot run as a standalone cloud CAD service.

| CAD workflow | What the server provides |
| --- | --- |
| Inspect | Scene state, precise B-rep measurements, and references to bodies, faces, and edges |
| Model | Native creation and editing with document history, Undo, and Redo |
| Deliver | Document operations, import/export, and camera screenshots |
| Review | Optional local Workbench with measurement tables, dimensional feedback, and tablet annotations |

The server uses Plasticity's own command factories and document history through a loopback-only Electron CDP endpoint. It does not patch or re-sign the application. MCP geometry inputs use millimeters and degrees; native edits support Plasticity Undo and Redo.

## What it provides

- Native…
